import { useState } from "react";


function Section1({color, setColor, ChangeColor, changeName, setChangeName, changeAge, setChangeAge, changeEmail, setChangeEmail,  ChangeeName, ChangeAge, ChangeEmail}){
    const [name, setName] = useState("Alaa");
    const [age, setAge] = useState(30);

    const toggleName = ()=> {
        setName((prev)=> (prev === "Alaa" ? "Gust": "Alaa"))
    };


    const increasAge = ()=> {
     setAge( prev => prev +1)
    };



return(
    <>
      <div className="container">
        <h4 className=" fs-6 fw-bold p-2">Profile Card (String, Boolean, Object) </h4>
  <div className="row">
    <div className="col-12 mb-5">

      <div className="card border-1 shadow-sm p-3">

        <div className="d-flex align-items-center gap-3">

          {/* Avatar */}
          <small
            className="text-light px-3 py-2 rounded fw-bold fs-6"
            style={{ backgroundColor: color, width: "fit-content" }}
          >
            {name[0]} 
          </small>

          {/* User Info */}
          <div>

            <h3 className="card-title fs-5 fw-bolder mb-1">
              Alaa
            </h3>

            <div className="d-flex align-items-center gap-2 flex-wrap">

              <p className="fw-medium fs-6 text-muted mb-0">
                {(changeEmail === "" ? ("lyfay6768@gmail.com"): changeEmail)}
              </p>

              <span
                className="bg-secondary rounded-pill"
                style={{ width: "5px", height: "5px" }}
              ></span>

              <p className="fw-medium fs-6 text-muted mb-0">
                Age {(changeAge === "" ? (age) : changeAge)}
              </p>

              <span
                className="bg-secondary rounded-pill"
                style={{ width: "5px", height: "5px" }}
              ></span>

              <p className="fw-medium fs-6 text-muted mb-0">
                Theme Light
              </p>

            </div>

          </div>
        </div>

    
         <p className=" card-text lead fs-6 mt-3 ">
          Hello <span className=" fw-bold">{(changeName === "" ? (name) : changeName)}</span> This card reads from an object state (user) and a string state (name). Theme toggle is a boolean state
          </p>

          <div className=" d-flex align-items-center gap-3">
          <button onClick={toggleName} className=" btn px-4 text-light fs-6" style={{backgroundColor:color}}>Toggle Display Name</button>
          <button onClick={increasAge} className=" btn px-4 fs-6" style={{border:`1px solid ${color}`, color:color}}>Happy Birthday (+1 Age) </button>
          </div>

      </div>
    </div>
  </div>
</div>
    </>
);
}

export default Section1;