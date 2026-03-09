import Navbar from "./Navbar";
import "./Navbar.css"
import Slider_Img from "./Slider_Img";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import { useState } from "react";




function Home(){
     const [color, setColor] = useState("#fc0277");
     const ChangeColor = (event)=> {
    setColor(event.target.value)
   };


   const [changName, setChangeName] = useState("");
   const [changeAge, setChangeAge] = useState("");
   const [changeEmail, setChangeEmail] = useState("");

   const ChangeeName = (e)=> {
    setChangeName(e.target.value);
   }

   const ChangeAge = (e)=> {
    setChangeAge(e.target.value);
   }

   const ChangeEmail = (e)=> {
     setChangeEmail(e.target.value);
   }


    return(
        <>
        <Navbar color={color}
        setColor={setColor}
        ChangeColor={ChangeColor}
        />
        <Slider_Img
        color={color}
        setColor={setColor}
        ChangeColor={ChangeColor}
        />
        
        <Section1 
         color={color}
        setColor={setColor}
        ChangeColor={ChangeColor}
         changeName={changName}
       setChangeName={setChangeName}
       changeAge={changeAge}
       setChangeAge={setChangeAge}
       changeEmail={changeEmail}
       setChangeEmail={setChangeEmail}
       ChangeeName={ChangeeName}
       ChangeAge={ChangeAge}
       ChangeEmail={ChangeEmail}
        
        />

        <Section2
         color={color}
        setColor={setColor}
        ChangeColor={ChangeColor}
        />

       <Section3
       color={color}
        setColor={setColor}
        ChangeColor={ChangeColor}
       changeName={changName}
       setChangeName={setChangeName}
       changeAge={changeAge}
       setChangeAge={setChangeAge}
       changeEmail={changeEmail}
       setChangeEmail={setChangeEmail}
       ChangeeName={ChangeeName}
       ChangeAge={ChangeAge}
       ChangeEmail={ChangeEmail}
       />
        </>
    );

}

export default Home;