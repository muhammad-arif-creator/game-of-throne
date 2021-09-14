import React from "react";

const Detail = (props) => {
  return (
    <div>
      <div className="detail">
        <div className="user-detail">
          <div className="user-image">
            {console.log(props)}
            <img
              alt={props.history.location.user.image}
              src={props.history.location.user.imageUrl}
            />
          </div>

          <div className="user-name">
            {<h1>{props.history.location.user.fullName}</h1>}
          </div>
          <div className="user-id">{props.history.location.user.id}</div>
          <div className="user-title">{props.history.location.user.title}</div>
          <div className="user-family">
            {props.history.location.user.family}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
