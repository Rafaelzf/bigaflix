import React from "react";
import Logo from "../../Assets/image/logo.png";
import "../Menu/Menu.css";
import ButtonLink from "../ButtonLink";

export default function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Logo Flix" />
      </a>

      <ButtonLink className={"ButtonLink"} />
    </nav>
  );
}
