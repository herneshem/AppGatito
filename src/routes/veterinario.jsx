import React from "react";

function Veterinario(){
    
return(

    <div className="bloqueVet">
        
        <div>
        <div class="vertical-menu">
            <a href="#" class="active">Comportamiento</a>
            <a href="#arenero" id="arenero" onClick={arena}>No usa el arenero</a>
            <a href="#orinar" id="orinar" onClick={orin}>Orina en todas partes</a>
            <a href="#limpiezaExt" id="limpieza" onClick={limpio}>Se limpia mucho</a>
            <a href="#leganas" id="leganas" onClick={ojos}>Muchas legañas</a>
        </div>
        </div>
        <div className="respuestas">
            
            <div id="mostrararenero">Sobre el arenero</div>
            <div id="mostrarorinar">Sobre orinar fuera</div> 
            <div id="mostrarlimpieza">Sobre la limpieza extrema</div> 
            <div id="mostrarleganas">Sobre las legañas</div>
        </div>
    </div>
)

function orin(){
        document.getElementById('mostrarorinar').style.display = "block";
        document.getElementById('mostrararenero').style.display = "none";
        document.getElementById('mostrarleganas').style.display = "none";
        document.getElementById('mostrarlimpieza').style.display = "none";
 
};
function arena(){
    document.getElementById('mostrararenero').style.display = "block";
    document.getElementById('mostrarorinar').style.display = "none";
    document.getElementById('mostrarlimpieza').style.display = "none";
    document.getElementById('mostrarleganas').style.display = "none";

};

function limpio(){
        document.getElementById('mostrarlimpieza').style.display = "block";
        document.getElementById('mostrararenero').style.display = "none";
        document.getElementById('mostrarorinar').style.display = "none";
        document.getElementById('mostrarleganas').style.display = "none";
        
        
   
};

function ojos(){
    document.getElementById('mostrarleganas').style.display = "block"
    document.getElementById('mostrarorinar').style.display = "none";
    document.getElementById('mostrarlimpieza').style.display = "none";
    document.getElementById('mostrararenero').style.display = "none";
}

}
export default Veterinario