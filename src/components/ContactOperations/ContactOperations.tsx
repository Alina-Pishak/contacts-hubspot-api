//@ts-nocheck
import React from "react";

import data from "../../data/contactsOperations.json";
import sprite from "../../icons/symbol-defs.svg";

import {
  ContactOperationsItemIcon,
  ContactOperationsItem,
  ContactOperationsItemText,
  ContactOperationsItemIconArrow,
  ContactOperationsTitle,
  ContactOperationsContainer,
} from "./ContactOperations.styled";

const ContactOperations = () => {
  return (
    <ContactOperationsContainer id="operations" className="container">
      <ContactOperationsTitle className="title">
        {data.title}
      </ContactOperationsTitle>
      <ul>
        {data.operationNames.map(({ icon, name }, index) => (
          <ContactOperationsItem key={index}>
            <ContactOperationsItemIcon width="24px" height="24px">
              <use href={`${sprite}#icon-${icon}`} />
            </ContactOperationsItemIcon>
            <ContactOperationsItemText>{name}</ContactOperationsItemText>
            <ContactOperationsItemIconArrow width="24px" height="24px">
              <use href={`${sprite}#icon-arrow-right`} />
            </ContactOperationsItemIconArrow>
          </ContactOperationsItem>
        ))}
      </ul>
    </ContactOperationsContainer>
  );
};

export default ContactOperations;
