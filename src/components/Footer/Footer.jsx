import React from "react";
import { VscGithub } from "react-icons/vsc";
import { IoLogoLinkedin } from "react-icons/io";
import s from "../Footer/Footer.module.css";

export default function Footer() {
  return (
    <div className={s.footer}>
      <div className={s.container}>
        <figure className={s.icon}>
          <a href="https://github.com/Bellantra" target="_blank" rel="noreferrer">
              <VscGithub />
              </a>
          
        </figure>
        <figure className={s.icon}>
            <a href="https://www.linkedin.com/in/yamila-paez-70b7587b/" target="_blank" rel="noreferrer">
               <IoLogoLinkedin /> 
            </a>
          
        </figure>
      </div>
    </div>
  );
}
