import React, { useEffect, useState } from "react";
import { DataFetching } from "../exams";
import axios from "axios";

export function NavItem(props) {
  const pageURI = window.location.pathname + window.location.search;
  const liClassName = props.path === pageURI ? "nav-item active" : "nav-item";
  const aClassName = props.disabled ? "nav-link disabled" : "nav-link";
  return (
    <li className={liClassName}>
      <a href={props.path} className={aClassName}>
        {props.name}
        {props.path === pageURI ? (
          <span className="sr-only">(current)</span>
        ) : (
          ""
        )}
      </a>
    </li>
  );
}

// function NavDropdown (props) {
//     return (
//         <li className="nav-item dropdown">
//         <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown"
//           aria-haspopup="true" aria-expanded="false">
//           {props.name}
//         </a>
//         <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//         {props.children}
//         </div>
//       </li>

//     );
// }

export function Navigation() {
  const [name, setName] = useState();
  const api_key = 9116937670;
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get(
        `https://www.exambazaar.com/api/coding-round/routes/exam-info/${api_key}`
      )
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [name]);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Exambazaar
        </a>
        <button
          className="btn btn-outline-success my-2 my-lg-0"
          onClick={() => setName("exams")}
        >
          Exams
        </button>
        <button
          className="btn btn-outline-success my-2 my-lg-0"
          onClick={() => setName("streams")}
        >
          Streams
        </button>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
          
          <NavItem path="/" name="Exams" ></NavItem>
          <NavDropdown name="Exams">
            <DataFetching name="Exams"/>
          </NavDropdown>
          <NavDropdown name="Streams">
            <DataFetching name="Streams"/>
          </NavDropdown>
        
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div> */}
      </nav>
      {name ? <DataFetching name={name} data={data} /> : null}
    </div>
  );
}
