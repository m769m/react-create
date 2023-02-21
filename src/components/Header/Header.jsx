import React from "react";

import Logo from "../../assets/images/logo.svg";

import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header className={classes["App-header"]}>
      <img src={Logo} className={classes["App-logo"]} alt="logo" />

      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>

      <a className={classes["App-link"]} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
    </header>
  );
};

export default Header;
