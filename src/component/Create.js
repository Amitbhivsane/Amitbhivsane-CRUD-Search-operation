import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState({
    name: "",
    username: "",
    title: "",
    author: "",
  });
  // json-server --watch db.json --port 3001

  function handelSubmit(e) {
    e.preventDefault();
    axios
      .post(`http://localhost:3001/posts`, value)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    navigate("/");
  }
  return (
    <div>
      <h1>Add To user</h1>
      <form onSubmit={handelSubmit} className="form">
        <div>
          {/* <label className="label " htmlFor="name">
            Name:
          </label> */}
          <input
            className="input"
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            onChange={(e) => setValue({ ...value, name: e.target.value })}
          />
        </div>
        <div>
          {/* <label htmlFor="username">UserName:</label> */}
          <input
            className="input"
            type="text"
            name="username"
            id="username"
            placeholder="UserName"
            onChange={(e) => setValue({ ...value, username: e.target.value })}
          />
        </div>
        <div>
          {/* <label htmlFor="title">Title:</label> */}
          <input
            className="input"
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            onChange={(e) => setValue({ ...value, title: e.target.value })}
          />
        </div>
        <div>
          {/* <label htmlFor="name">Author:</label> */}
          <input
            className="input"
            type="text"
            name="author"
            id="author"
            placeholder="Auther"
            onChange={(e) => setValue({ ...value, author: e.target.value })}
          />
        </div>
        <div>
          <button className="btn">submit</button>
          <Link to="/">
            <button className="btn">Back</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Create;
