import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:3001/posts/` + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1>Details Of user</h1>
      <div>
        <strong className="read">Name:{data.name}</strong>
      </div>
      <div>
        <strong className="read">Name:{data.username}</strong>
      </div>
      <div>
        <strong className="read">Name:{data.title}</strong>
      </div>
      <div>
        <strong className="read">Name:{data.author}</strong>
      </div>
      <div className="read">
        <Link to={`/update/${id}`}>
          <button className="btn ">Update</button>
        </Link>
        <Link to={`/`}>
          <button className="btn">Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Read;
