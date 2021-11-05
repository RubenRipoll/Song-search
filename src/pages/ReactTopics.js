import { Link, Switch, Route, useRouteMatch, useParams } from "react-router-dom"



const Topic = () => {
    // generamos rutas dinámicamente
    let {topic} = useParams()

    return (
        <div>
            <h4>{topic}</h4>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, perspiciatis tenetur, delectus pariatur temporibus in excepturi dolorem distinctio est quibusdam neque voluptates nesciunt alias iste hic labore asperiores similique saepe.
            </p>
        </div>
    )
}




const ReactTopics = () => {
    // let matc = useRouteMatch()
    // "path" nos permite construir rutas relativas<Route>, mientras que "url" nos permite construir enlaces relativos <Link> o <NavLink>.

    // Destructuramos las opciones "path" y "url" de useRouteMatch. ↓
    let { path, url } = useRouteMatch()


    return (
        <div>
            <h3>Temas de React</h3>
            <ul>
                <li>
                    <Link to={`${url}/jsx`}>JSX</Link>
                </li>
                <li>
                    <Link to={`${url}/props`}>Props</Link>
                </li>
                <li>
                    <Link to={`${url}/estado`}>Estado</Link>
                </li>
                <li>
                    <Link to={`${url}/componentes`}>Componente</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path={path}>
                    <h4>Elige un tema de React</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime rerum eos quis maiores dolore voluptatem aut nam corrupti eveniet, vel, quas vitae, veniam nobis pariatur. Deserunt et aliquid eveniet cumque!</p>
                </Route>
                <Route path={`${path}/:topic`} component={Topic}/>
                
            </Switch>
        </div>
    )
}
export default ReactTopics
