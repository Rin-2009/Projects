import "./Navbar.css"
import { useState } from "react";


function Navbar({color, setColor, ChangeColor}){
const [darkMode, setDarkMode] = useState(false);
const themDark = ()=> {
setDarkMode(!darkMode);
};
document.body.style.backgroundColor = darkMode ? "#000": "#fff";
document.body.style.color = darkMode ? "#fff": "#000";


    return(
        <>
        <nav className=" navbar navbar-expand-lg sticky-top my-nav" style={{borderBottom:`2px solid ${color}`}}>
         <div className=" container">

         <div className=" d-flex align-items-center p-1">
             <a href="" className=" navbar-brand rounded-2 px-2 text-light" style={{backgroundColor:color}}>SP</a>
            <div className=" d-block align-items-center mt-3">
            <h4 className=" fs-6">ALAA ALDIN ALHALLAK Smart Profile Dashboard</h4>
            <p className=" fst-italic fs-6 lead">React Advanced--Hooks, State, Events, Forms, Color Picker & Carousel</p>
            </div>
         </div>
         
         <div className=" d-flex align-items-center gap-3">
        <button onClick={themDark} className=" btn px-3 text-light" style={{backgroundColor:color}}>
            Switch to Dark
        </button>

        <input type="color" name="" id="" value={color} onChange={ChangeColor} />
         </div>
         </div>
        </nav>
        </>
    );
}

export default Navbar;