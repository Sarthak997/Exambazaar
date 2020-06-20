import React from 'react';
import { DataFetching } from '../exams';

export function NavItem (props) {
        const pageURI = window.location.pathname+window.location.search
        const liClassName = (props.path === pageURI) ? "nav-item active" : "nav-item";
        const aClassName = props.disabled ? "nav-link disabled" : "nav-link"
        return (
          <li className={liClassName}>
            <a href={props.path} className={aClassName}>
              {props.name}
              {(props.path === pageURI) ? (<span className="sr-only">(current)</span>) : ''}
            </a>
          </li>
      );
}

function NavDropdown (props) {
    return (
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          {props.name}
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        {props.children}
        </div>
      </li>
    );
}

export function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Exambazaar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
          
          <NavItem path="/" name="Home" />
          <NavDropdown name="Exams">
            <a className="dropdown-item" href="/"><DataFetching name="Exams"/></a>
          </NavDropdown>
          <NavDropdown name="Streams">
            <a className="dropdown-item" href="/"><DataFetching name="Streams"/></a>
          </NavDropdown>
        
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    );
  }

  