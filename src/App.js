// import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [user, setUser] = useState([]);

  async function loadUser() {
    const { data } = await axios.get("http://localhost:5000/users");
    setUser(data);
  }

  async function showUser() {
    const { data } = await axios.post("http://localhost:5000/user", {
      username: "thun2",
      password: "thun",
    });
    console.log(data);
    await loadUser();
  }

  useEffect(() => {
    console.log(user);
  }, [user]);

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div className="App">
      <input placeholder="Username" />
      <br />
      <input placeholder="Password" />
      <br />
      <button>CreateUser</button>
      <br />
      <button onClick={showUser}>ShowUser</button>
      {JSON.stringify(user)}
    </div>
  );
}

export default App;
