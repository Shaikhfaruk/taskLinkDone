import "./App.css";
import { React, useState, useEffect } from "react";

function App() {
  const [user, setuser] = useState([]);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const postData = async () => {
    const res = await fetch("http://localhost:5000/", {
      method: "POST",
      headers: {
        mode: "no-cors",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: name,
        number: number,
      }),
    });
    if (res.status === 201) {
      alert("User added successfully");
    }
    if (res.status === 400) {
      alert("name or number missing");
    }
    const data = await res.json();
  };

  const getData = async () => {
    const res = await fetch("http://localhost:5000/");
    const data = await res.json();
    setuser(data);
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>Bhattacharjee Solution Private Limited</h1>
      <form>
        <input
          onChange={(event) => {
            setName(event.target.value);
          }}
          type="text"
          placeholder="Your Name"
          value={name}
        />
        <input
          onChange={(event) => {
            setNumber(event.target.value);
          }}
          type="number"
          value={number}
          placeholder="Mobile Number"
        />
      </form>
      <button onClick={postData}>Send Data</button>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Number</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
