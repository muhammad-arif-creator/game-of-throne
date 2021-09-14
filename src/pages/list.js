import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const List = () => {
  const [users, setUser] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch("https://thronesapi.com/api/v2/Characters").then((response) => {
      response.json().then((data) => {
        console.log(data);
        setUser(data);
      });
    });
  }, []);

  const handleChange = (e) => {
    let filterdata = [];
    const inputValue = e.target.value;
    // setInput(inputValue);
    filterdata = users.filter((item, index) => {
      return item.firstName.search(inputValue) == !1;
    });
    setInput(filterdata);
  };
  return (
    <React.Fragment>
      <div className="Search">
        <input type="search" value={input} onChange={handleChange} />
        <button>search</button>
      </div>
      <div className="users">
        <div className="user-list">
          {users.map((user, index) => {
            return (
              <div className="list" key={index}>
                <div className="list-info">
                  <span>FirstName:</span> <span> {user.firstName}</span>
                </div>
                <div className="list-info">
                  <span>LastName: </span> <span>{user.lastName}</span>
                </div>
                <div className="list-info">
                  <span>Family:</span>
                  <span> {user.fullName}</span>
                </div>
                <span className="view-more">
                  <Link
                    to={{
                      pathname: `/user/${user.id}`,
                      user,
                    }}
                  >
                    View More
                  </Link>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default List;
