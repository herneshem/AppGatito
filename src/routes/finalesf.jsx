import React from "react";
import img_exp from "../img_exp";

function Cielo(){
  return(
      <div className="contenedorCarrousel">
        <div className="carrousel">
          <div className="imagenesC"><img src={img_exp.t1} alt="" /></div>
          <div className="flechasC">
            <i><img className="fliz" src={img_exp.manoizq} alt="" /></i>
            <i><img className="fled" src={img_exp.manod} alt="" /></i>
          </div>
        </div>

        <div className="carrousel">
          <div className="imagenesC">imagenes2</div>
          <div className="flechasC">
            <i>flecha i</i>
            <i>flecha d</i>
          </div>
        </div>

        <div className="carrousel">
          <div className="imagenesC">imagenes3</div>
          <div className="flechasC">
            <i>flecha i</i>
            <i>flecha d</i>
          </div>
        </div>

      </div>
  )
  
  }
  export default Cielo