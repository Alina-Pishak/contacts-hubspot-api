//@ts-nocheck
import React from "react";

import contactOperations from "../../data/contactsOperations.json";
import sprite from "../../icons/symbol-defs.svg";

const ContactOperations = () => {
  return (
    <section id="operations">
      <h2>{contactOperations.title}</h2>
      <ul>
        {contactOperations.operationNames.map(({ icon, name }, index) => (
          <li key={index}>
            <svg width="24px" height="24px">
              <use href={`${sprite}#icon-${icon}`} />
            </svg>
            <p>{name}</p>
            <svg width="24px" height="24px">
              <use href={`${sprite}#icon-arrow-right`} />
            </svg>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ContactOperations;
