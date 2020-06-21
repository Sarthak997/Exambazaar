import React from "react";
import { Link } from "react-router-dom";

export function List({ data, title, showButton }) {
  return (
    <div>
      <h2 style={{ padding: "16px 0 0 16px" }}>{title}</h2>
      {data.map((d) => (
        <div
          key={d.name}
          className="card"
          style={{ width: "15%", display: "inline-block", margin: "2.5%" }}
        >
          {d.logo && (
            <img
              src={typeof d.logo === "object" ? d.logo.black : d.logo}
              className="card-img-top"
              alt="..."
            />
          )}
          <div className="card-body">
            <h5 className="card-title">{d.name}</h5>
            {showButton && (
              <Link to={`/exam/${d._id}`} className="btn btn-primary">
                Open
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
