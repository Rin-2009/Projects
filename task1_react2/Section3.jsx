

function Section3({color, setColor, ChangeColor, changeName, setChangeName, changeAge, setChangeAge, changeEmail, setChangeEmail,  ChangeeName, ChangeAge, ChangeEmail}){
    return(
        <>
       <div className="container mb-5 mt-3">
  <div className="row g-3">

    <div className="col-md-4">
      <label className="form-label">Name</label>
      <input
        type="text"
        className="form-control"
        value={changeName}
        placeholder="Enter Name..."
        onChange={(e) => setChangeName(e.target.value)}
        style={{borderBottom:`1px solid ${color}`}}
      />
    </div>

    <div className="col-md-4">
      <label className="form-label">Age</label>
      <input
        type="text"
        className="form-control"
        value={changeAge}
        placeholder="Enter Age..."
        onChange={(e) => setChangeAge(e.target.value)}
        style={{borderBottom:`1px solid ${color}`}}
      />
    </div>

    <div className="col-md-4">
      <label className="form-label">Email</label>
      <input
        type="text"
        className="form-control"
        value={changeEmail}
        placeholder="Enter Email..."
        onChange={(e) => setChangeEmail(e.target.value)}
        style={{borderBottom:`1px solid ${color}`}}
      />
    </div>

  </div>


  <div className=" mt-4">
    <input type="color" name="" id="" value={color} onChange={ChangeColor} className="w-25"/>
    <div className=" d-flex align-items-center gap-3 mt-3">
        <button className=" btn px-4 rounded text-light" style={{backgroundColor:color}}>Save Changes</button>
        <button className=" btn px-4 rounded" style={{border:`1px solid ${color}`, color:color}}>Reset form</button>
    </div>
    <p className=" mt-4 lead">ALAA ALDIN ALHALLAK</p>
  </div>
</div>
        </>
    );
}

export default Section3;