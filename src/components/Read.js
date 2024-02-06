import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

// ... (import statements)

function Read() {
  const [data, setData] = useState([]);

  function getData() {
    axios.get("http://localhost:5000/users").then((res) => {
      setData(res.data);
      console.log(res.data)
    });
  }

  function onhandleDelete(id) {
    axios
      .delete(`http://localhost:5000/users${id}`)
      .then(() => {
        getData();
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        {Array.isArray(data) &&
          data.map((eachData) => (
            <tbody key={eachData.id}>
              <tr>
                <th scope="row">{eachData.id}</th>
                <td>{eachData.name}</td>
                <td>{eachData.email}</td>
                <td>
                  <Link to={`/update/${eachData.id}`}>
                    <button>Update</button>
                  </Link>
                  <button onClick={() => onhandleDelete(eachData.id)}>Delete</button>
                </td>
              </tr>
            </tbody>
          ))}
      </table>
    </div>
  );
}

export default Read;
