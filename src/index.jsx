/*ejecutar con comandos buil y deploy para git (json)*/
import { render } from "@testing-library/react"
import React, { Fragment} from "react"
import ReactDOM from "react-dom"
import '../src/index.css'
import t1 from "../src/img/t1.png"
import tl2 from "../src/img/titilavabo2.jpg"
import Casa  from "./casa.jsx"
import Finalesf from "./routes/finalesf.jsx"
import Album from "./routes/album"
import Cielo from "./routes/cielo"
import Canguro from "./routes/canguro"
import Veterinario from "./routes/veterinario"
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { Outlet } from "react-router"

class Menu extends React.Component{ 
render(){
return(
<Fragment>
    
    <div className="contenedor-principal">
    
      <div className="banner">
      <div className="logo"><img src={tl2}></img></div>
      <div className="nombre">La casa de TITI</div>
      </div>
      <hr />
      <Router>
    <nav className="menu">
    <ul>
       <NavLink to="/" className="btn btn-success">Casa</NavLink>
       <NavLink to="/album" className="btn btn-success">Album</NavLink>
      <NavLink to="/finalesf" className="btn btn-success">Finales felices</NavLink> 
      <NavLink to="/canguro" className="btn btn-success">Canguro</NavLink> 
      <NavLink to="/veterinario" className="btn btn-success">Veterinario</NavLink> 
       <NavLink to="/cielo" className="btn btn-success">Cielo virtual</NavLink> 
      
    </ul>
    </nav>
    
   <hr />
    <Routes>
      <Route exact path='album' element={<Album />} />
      <Route exact path='finalesf' element={<Finalesf />} />
      <Route exact path='canguro' element={<Canguro />} />
      <Route exact path='veterinario' element={<Veterinario />} />
      <Route exact path='cielo' element={<Cielo />} />
      <Route exact path='/' element={<Casa />} />
    </Routes>
    </Router>
    </div>
    </Fragment>

)

}
  
}

const container = document.getElementById('gatito')

ReactDOM.render(<Menu />,container)

