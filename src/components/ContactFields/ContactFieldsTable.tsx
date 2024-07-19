import React from "react";

import data from "../../data/contactsFields.json";
import {
  Table,
  Td,
  Th,
  Tr,
  TableWrapper,
  FieldsContainer,
  FieldsTitle,
} from "./ContactFieldsTable.styled";

const ContactFieldsTable = () => {
  return (
    <FieldsContainer id="fields" className="container">
      <FieldsTitle>Contact Fields</FieldsTitle>
      <TableWrapper>
        <Table>
          <thead>
            <tr>
              {data.contactFieldsTable.titles.map((title, index) => (
                <Th key={index}>{title}</Th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.contactFieldsTable.fields.map((field, index) => (
              <Tr key={index}>
                <Td>{field.fieldName}</Td>
                <Td>{field.apiKey}</Td>
                <Td>{field.type}</Td>
                <Td>{field.description}</Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      </TableWrapper>
    </FieldsContainer>
  );
};

export default ContactFieldsTable;
