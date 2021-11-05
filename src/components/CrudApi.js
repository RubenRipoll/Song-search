import React, { useState, useEffect } from "react";
import { HashRouter, NavLink, Switch, Route } from "react-router-dom"
import { helpHttp } from "../helpers/helpHttp"
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";
import Error404 from "../pages/Error404"

const CrudApi = () => {
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  
  
  let api = helpHttp()
  let url = "http://localhost:5000/santos"

  
  useEffect(() => {
    setLoading(true)
    api.get(url).then(res => {
      //console.log(res)
      if(!res.err){
        setDb(res)
        setError(null)
      } else {
        setDb(null)
        setError(res)
      }

      setLoading(false)
    });
  }, [])




  const createData = (data) => {
    data.id = Date.now()
    // console.log(data)

    let options = { 
      body:data, 
      headers: {"content-type": "application/json"} 
    }

    api.post(url, options).then((res) => {
      console.log(res)
      if(!res.err) {
        setDb([...db, res])
      } else {
        setError(res)
      }
    })
  };



  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`
    // console.log(endpoint)

    let options = { 
      body:data, 
      headers: {"content-type": "application/json"} 
    }

    api.put(endpoint, options).then((res) => {
      console.log(res)
      if(!res.err) {
        let newData = db.map((el) => (el.id === data.id ? data : el))
        setDb(newData)
      } else {
        setError(res)
      }
    })
    // setDb(newData)
  };



  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Estas seguro de eliminar el registro con el id '${id}'?`
    );

    if(isDelete) {
      let endpoint = `${url}/${id}`
      let options = { 
        headers: {"content-type": "application/json"} 
      }

      api.del(endpoint, options).then(res => {
        // console.log(res)
      if(!res.err) {
        let newData = db.filter(el => el.id !== id)
        setDb(newData)  
      } else {
        setError(res)
      }
      })
    } else {
      return;
    }

  };

  return (
    <div>
      {/* El atributo "basename" será la ruta que van a compartir todas las rutas. */}
      <HashRouter basename="santos">
      <header>
        <h2>CRUD API con Rutas</h2>
        <nav>
          <NavLink to="/" activeClassName="active">Santos</NavLink>
          <NavLink to="/agregar" activeClassName="active">Agregar</NavLink>
        </nav>
      </header>
       <Switch>
        <Route exact path="/">
        {loading && <Loader />}
        {error && <Message msg={`Error ${error.status}: ${error.statusText}`} 
        bgColor="#dc3545"/>}
        {db && <CrudTable 
        data={db} 
        setDataToEdit={setDataToEdit}
        deleteData={deleteData} 
      />}
        </Route>
        <Route exact path="/agregar">
        <CrudForm
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
        />
        </Route>
        <Route exact path="/editar/:id">
        <CrudForm
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
        </Route>
        <Route path="*" children={<Error404 />}/>
       </Switch>
      </HashRouter>
      <h2>CRUD API</h2>
      <article className="grid-1-2">
      
      
      </article>
    </div>
  );
};

export default CrudApi;
