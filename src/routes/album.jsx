import React, { Fragment} from "react";
import img_exp from "../img_exp";
import { BrowserRouter as Router , Routes, Route, a, Link} from "react-router-dom";





function Album() {

     return (
       
         <Fragment>
           
         
      <div className="contenedor-album">
      
        <div className="card-uno">
        <a href="enlacesgatos"> 
          <div className="gato">
            <img src={img_exp.gato} alt="" />
          </div>
        </a>
          <a href="/enlacesperros"><div className="perro">
          <img src={img_exp.perro} alt="" />    
          </div></a>
        </div>

        <div className="card-dos">
          <a href="/enlacesconejos"> <div className="conejo">
            <img src={img_exp.conejo} alt="" />
            </div></a>
          <a href="/enlacescaballos"> <div className="caballo"> 
            <img src={img_exp.caballo} alt="" />  
            </div></a>
        </div>
        
      </div>

      {/* UTILIZAR ESTE SWITCH PARA SUB RUTINAS */}
    
       </Fragment>
       
     );

 }

 export default Album;