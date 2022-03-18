import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter , Routes, Route, Link } from "react-router-dom";
import Album from "./routes/album";
import { Outlet } from "react-router"

class Casa extends React.Component{
 render(){
 return(
   
    <div className="contenedorcasa">
      <Outlet />
      <div className="titi">outouo</div>
      <div className="contenedorcasa-back">
         
         
         <div className="textoamigos">
            <h2>Memoria</h2>
            <p>
            Poco a poco y no importa el tiempo que me tome, estare creando muchas cosas para ti,así haga y deshaga que todo sea
            para mejorarlo, esta aplicación o web va a ir mas allá de todo lo personal, que sirva de alguna forma a las
            personas que tienen mascotas y lo quieren mas que a la misma familia, las istorias que aquí se relaten sean 
            verdaderas, que los que pasen por aquí buscando familia encuentren lo que se merecen, que los que pierdan a 
            sus hijos, vengan aquí a visitarlos, que jamás se pierda lo que han vivido
            </p>
            <p>
             Hemos tartado de compactar las necesidades e intereses de los usuarios, todo concentrado en una sola web
             que la búsqueda de sus intereses no se complique, poco a poco irá creciendo y mejorando, pero que sepas que la 
             raíz de esta idea se fundamenta en tu memoria :)
            </p>
            </div>
       
      </div>
   </div>


 )
    }  

}
export default Casa

