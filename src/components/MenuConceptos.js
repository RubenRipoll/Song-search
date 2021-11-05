import { Link, NavLink } from "react-router-dom"

const MenuConceptos = () => {
    return (
        <nav>
            <ol>
                <li>
                <span>Enlaces HTML (no recomendado) </span>
                <a href="/">Home</a>
                <a href="/acerca">Acerca</a>
                <a href="/contacto">Contacto</a>
                </li>
                <li>
                {/* Utilizando el componente "Link", que no recarga la página ↓ */}
                    <span>Componente Link:</span>
                    <Link to="/">Home</Link>
                    <Link to="/acerca">Acerca</Link>
                    <Link to="/contacto">Contacto</Link>
                    <Link to="/no-existe">Error404</Link>
                </li>
                <li>
                {/* "NavLink" nos permite hacer lo mismo que "Link" con la diferencia de que 
                nos permite utilizar la propiedad "activeClassName" que nos da un indicativo de 
                en qué sección estamos, utilizando estilos css.*/}
                    <span>Componente NavLink</span>
                    <NavLink exact to="/" activeClassName="active"> Home </NavLink>
                    <NavLink exact to="/acerca" activeClassName="active"> Acerca </NavLink>
                    <NavLink exact to="/contacto" activeClassName="active"> Contacto </NavLink>
                </li>
                <li>
                    <span>Parámetros:</span>
                    <Link to="/usuario/jonmircha">jonmircha</Link>
                    <Link to="/usuario/kenai">kEnAi</Link>
                </li>
                <li>
                    <span>Parámetros de consulta: </span>
                    <Link to="/productos">Productos</Link>
                </li>
                <li>
                    <span>Redirecciones</span>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <span>Rutas Anidadas:</span>
                    <Link to="/react">React</Link>
                </li>
                <li>
                    <span>Rutas Privadas:</span>
                    <Link to="/login">Login</Link>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
            </ol>
        </nav>
    )
}

export default MenuConceptos