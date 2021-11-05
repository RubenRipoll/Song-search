import { Redirect, Route } from "react-router"

// No exportará un elemento JSX, sino una ruta.
// const PrivateRoute = (props) => {
//   return (
//       <Route exact={props.exact} path={props.path} component={props.component}/>
//   ) 
// }

// Simplificado ↓
// const PrivateRoute = (props) => {
//     return (
//         <Route {...props}/>
//     ) 
//   }

  // Simulando una Autenticación ↓

  
  let auth;
  auth = null
  auth = true
  
  // Le damos el alias "Component" para que lo detecte como un componente y no como sintaxis jsx.
  const PrivateRoute = ({ component: Component, ...rest }) => {
    return <Route {...rest}>
      {auth ? <Component/> : <Redirect to="/login" />}
    </Route>
     
  }

export default PrivateRoute;
