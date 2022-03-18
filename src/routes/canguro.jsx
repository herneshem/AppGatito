import React from "react";
import img_exp from "../img_exp";

function Canguro(){
    return(
<div className="presentaciones">
    {/* luna y patona */}
    <div className="acogidos">
        <div><img src={img_exp.f1} alt="" /><img src={img_exp.f1} alt="" /></div>
        <div><img className="img_slide" src={img_exp.ls} alt="" /></div>
    </div>
    <div className="exp"><h3>Luna y Simba</h3>
        Luna la lunatica y simba el paton 
    </div>


        {/* indi */}
    <div className="acogidos">
        <div><img src={img_exp.f1} alt="" /><img src={img_exp.f1} alt="" /></div>
        <div><img className="img_slide" src={img_exp.ls} alt="" /></div>
    </div>
    <div className="exp"><h3>Indi</h3>
        Indi la pelusona pijilla
    </div>


        {/* tae */}
    <div className="acogidos">
        <div><img src={img_exp.f1} alt="" /><img src={img_exp.f1} alt="" /></div>
        <div><img className="img_slide" src={img_exp.tl2} alt="" /></div>
    </div>
    <div className="exp"><h3>Tae</h3>
        La mordiscona
    </div>


       {/* el galletas */}
       <div className="acogidos">
        <div><img src={img_exp.f1} alt="" /><img src={img_exp.f1} alt="" /></div>
        <div><img className="img_slide" src={img_exp.gall6} alt="" /></div>
    </div>
    <div className="exp"><h3>El Galletas</h3>
        El se;or galletas era un malandrin de los buenos
    </div>

       {/* katyara */}
       
       <div className="acogidos">
        <div><img src={img_exp.f1} alt="" /><img src={img_exp.f1} alt="" /></div>
        <div><img className="img_slide" src={img_exp.kad4} alt="" /></div>
    </div>
    <div className="exp"><h3>Katyara</h3>
        La katiuska que durmio en mis brazos
    </div>

</div>
// LUNA Y SIMBA(LUNATICA Y PATON), INDIE(PELUSONA),TAE(MORDISCONA),EL GALLETAS(EL SENOR GALLETAS), KATYARA(KATIUSKA)

    )
}
export default Canguro