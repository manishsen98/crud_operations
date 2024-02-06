import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams(); // Invoke useParams to get the parameter
  const [values, setValues] = useState({
    id: id,
    Name: "",
    Email: ""
  });
   const navigate =useNavigate()
   useEffect(() => {
    axios.get(`https://658146fd3dfdd1b11c42d14a.mockapi.io/crud-youtube/${id}`)
      .then((res) => {
        setValues({ ...values, Name: res.data.Name, Email: res.data.Email });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  const onhanleSubmit = (e) => {
    e.preventDefault()
    axios.put(`https://658146fd3dfdd1b11c42d14a.mockapi.io/crud-youtube/${id}`, values)
      .then(() => {
        navigate("/read")
      })
  }

  return (
    <>
      <div className="card-container">
        <form className="form-container" onSubmit={onhanleSubmit} >
          <h2>Update</h2>
          <label>Name</label>
          <input type="text" name="Name" value={values.Name}  onChange={(e) => setValues({...values, Name: e.target.value }) } />
          <label>Email</label>
          <input type="email" name="Email" value={values.Email} onChange={(e) => setValues({...values, Email: e.target.value }) }  />
          <button type="submit" className="button">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Update;
