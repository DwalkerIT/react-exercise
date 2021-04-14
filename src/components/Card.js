import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <p>{props.user.name.first + " " + props.user.name.last}</p>
      <p>{props.user.phone == null ? "N/A" : props.user.phone}</p>
    </div>
  );
}
