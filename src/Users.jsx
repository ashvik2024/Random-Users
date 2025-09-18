import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const userData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      console.log(data);
      setUsers(data);
    };
    userData();
  }, []);
  return (
    <div>
      <h1>Fake Users Data</h1>
      {users.map((u) => (
        <div className="" key={u.id}>
          <ul className="users">
            <li>
              <h2>Name: {u.name}</h2>
            </li>
            <li>
              <h2>Emai: {u.email}</h2>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Users;
