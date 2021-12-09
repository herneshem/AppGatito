import React, { Fragment} from "react";
import gato from "../img/card-gato.png"
import perro from "../img/card-perro.jpg"
import { BrowserRouter , Routes, Route, Link } from "react-router-dom";


function Album() {

     return (
         <Fragment>
          
  <div className="contenedor-album">
  
    <div className="card-uno">
      <div className="gato">
      <img src={gato} alt="" />
      </div>
      <div className="perro">
      <img src={perro} alt="" />    
      </div>
    </div>

    <div className="card-dos">
        <div className="conejo">
        conejo
        </div>
        <div className="caballo">
            otro  
        </div>
    </div>
  </div>
       
       </Fragment>
     );

 }

 export default Album;