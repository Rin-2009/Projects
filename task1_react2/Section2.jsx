import { useState } from "react";

function Section2({color, setColor, ChangeColor}){
    const [hobby, setHobby] = useState("");
    const [hobbies, setHobbies] = useState([]);


    const addHobby = (e)=> {
        if (hobby.trim() !== "") {
            setHobbies(prev => [...prev, hobby]);
            setHobby("");
        }
    };

    const deleteHobby = (i)=> {
        const filterHobby = hobbies.filter((_, index)=> index !== i);
        setHobbies(filterHobby);
    };


     const colClass = hobbies.length === 1  ? "col-12"   : hobbies.length === 2 
    ? "col-6" 
    : "col-4 gap-5";

  return(
    <>
    <div className=" container">
        <div className=" row">
            <div className=" col-12">

             <div className=" card w-100 p-4">
                <h4 className=" fw-bold">Hobbies (Array State)</h4>
               <input value={hobby} onChange={e => setHobby(e.target.value)} type="text" name="" id="" className=" mt-2 form-control" placeholder="add a hobby..."/>
               <button className=" btn px-5 text-light mt-3" onClick={addHobby} style={{backgroundColor:color}}>
              Add Hobby
               </button>
             </div>

           <div className="row mt-4 mb-5 g-3">
                     {hobbies.map((h, i) => (
    
                      <div key={i} className={colClass}>
      
                     <div
                     className="d-flex justify-content-between align-items-center rounded-3 gap-3 p-2"
                     style={{ border: `1px solid ${color}` }}
                   >
                     
                         <p className="fw-semibold fs-6 mb-0">
                           {h}
                         </p>
                 
                         <button
                           className="btn rounded-circle px-3 py-1 text-light"
                         onClick={()=> deleteHobby(i)}  style={{ backgroundColor: color }}>
                            x
                          </button>

      </div>
    </div>
  ))}
</div>
            </div>
        </div>
    </div>
    </>
  );
}

export default Section2;