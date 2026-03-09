import { useState } from "react";



function Slider_Img({color, setColor, ChangeColor}){
    const Imgs = [
        {src:"https://picsum.photos/400/400?random=1", alt:"img1"},
         {src:"https://picsum.photos/400/400?random=2", alt:"img2"},
          {src:"https://picsum.photos/400/400?random=3", alt:"img3"},
           {src:"https://picsum.photos/400/400?random=4", alt:"img4"},
            {src:"https://picsum.photos/400/400?random=5", alt:"img5"},
             {src:"https://b.top4top.io/p_3716gpnw70.jpeg", alt:"img6"},
    ]
    const [img, setImg] = useState(0);
    
    const next = ()=> {
     setImg((prev) => (prev +1) % Imgs.length);
    };

    const prev = ()=> {
     setImg((prev) => (prev -1 + Imgs.length) % Imgs.length);
    };

    const random = ()=> {
      const randomIndex = Math.floor(Math.random() * Imgs.length);
      setImg(randomIndex)
    };


    return(
        <>
        <header className=" container justify-content-center align-items-center d-flex mt-3">
         <div className="row">
         <div className=" col-md-12 col-sm-12 col-lg-12">
            <div className=" card border-0 shadow-lg p-2 mb-5 rounded-5" style={{backgroundColor:"#ffffff00"}}>
                <img src={Imgs[img].src} alt={Imgs[img].alt} className=" img-fluid object-fit-cover rounded-3" onClick={random} style={{width:"1200px", height:"600px"}}/>

         <div className=" d-flex align-items-center justify-content-between p-3">
            <button className=" btn px-3 text-light" style={{backgroundColor: color}} onClick={next}>Next</button>
            <button className="btn px-3 text-light" style={{backgroundColor: color}} onClick={prev}>Prev</button>
         </div>
            </div>
         </div>
         </div>
        </header>
        </>
    );
}

export default Slider_Img;