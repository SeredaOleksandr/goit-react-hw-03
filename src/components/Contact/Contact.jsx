import React from "react";
import { FaPhone } from "react-icons/fa6";
import { BsPersonFill } from "react-icons/bs";
import s from "./Contact.module.css";

const Contact = ({ name, number }) => {
  return (
    <li className={s.container}>
      <div className={s.textwrap}>
        <p>
          <FaPhone />
          {name}
        </p>
        <p>
          <BsPersonFill />
          {number}
        </p>
      </div>
      <button className={s.button}>Delete</button>
    </li>
  );
};

export default Contact;
