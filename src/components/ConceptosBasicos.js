// Le damos el alias de "Router" ya que el nombre es demasiado largo, ademas de ser buena practica.
import { BrowserRouter as Router, Route, Switch, Redirect, HashRouter, Link} from "react-router-dom"
import Contacto from "../pages/Contacto"
import Acerca from "../pages/Acerca"
import Error404 from "../pages/Error404"
import Home from "../pages/Home"
import Usuario from "../pages/Usuario"
import Productos from "../pages/Productos"
import MenuConceptos from "./MenuConceptos"
import ReactTopics from "../pages/ReactTopics"
import Dashboard from "../pages/Dashboard"
import Login from "../pages/Login"
import PrivateRoute from "../components/PrivateRoute"


const ConceptosBasicos = () => {
    return (
        <div>
            <h2>Hash Router</h2>
            <HashRouter>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/acerca">Acerca</Link>
                <Link to="/contacto">Contacto</Link>
            </nav>
            <Switch>
                <Route exact path="/" component={Home}/>                    
                <Route exact path="/acerca" component={Acerca}/>                    
                <Route exact path="/contacto" component={Contacto}/>  
                <Route path="*" component={Error404}/>  
            </Switch>
            </HashRouter>
            <hr />
            <h2>Conceptos Básicos</h2>
             <Router>
             <MenuConceptos />
                <Switch>
                 <Route exact path="/" component={Home}/>                    
                 <Route exact path="/acerca" component={Acerca}/>                    
                 <Route exact path="/contacto" component={Contacto}/>                    
                 <Route exact path="/usuario/:username" component={Usuario}/>                    
                 <Route exact path="/productos" component={Productos}/>
                 <Route exact path="/about">
                  <Redirect to="/acerca" />
                 </Route>          
                 <Route exact path="/contact">
                  <Redirect to="/contact" />
                 </Route>
                 <Route path="/react" component={ReactTopics} />  
                 <Route exact path="/login" component={Login} />  
                 {/* <Route exact path="/dashboard" component={Dashboard} /> */}
                 <PrivateRoute exact path="/dashboard" component={Dashboard} />  
                 <Route path="*" component={Error404}/>                     
                </Switch>
            </Router>
        </div>
    )
}


// OTRAS MANERAS DE DECLARAR LAS RUTAS ↓

// const ConceptosBasicos = () => {
//     return (
//         <div>
//             <h2>Conceptos Básicos</h2>
//              <Router>
//              {/* En el Switch se recomienda empezar desde las rutas mas especificas, a las rutas
//              mas genéricas, por esa razón el "home" esta al final */}
//                 <Switch>
//                 {/* En caso de no querer ordenar desde lo mas especifico a lo generico, podemos usar
//                 un atributo booleano que se llama "exact" */}
//                  <Route exact path="/">
//                     <h3>Home</h3>
//                     <p>Bienvenidos al tema de las rutas en React</p>
//                   </Route>
//                  <Route exact path="/acerca">
//                     <Acerca />
//                  </Route>
//                  {/* En caso de querer definir una ruta de manera acortada, podemos hacerlo
//                  en un sola línea, e invocar al componente que cargará la ruta ↓ */}
//                  {/* <Route exact path="/contacto" component={Contacto} /> */}
                 
//                  {/* Otra manera de hacer lo mismo ↓ */}
//                  <Route exact path="/contacto" children={<Contacto />} />

//                 </Switch>
//             </Router>
//         </div>
//     )
// }

export default ConceptosBasicos
