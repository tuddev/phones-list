import { Container } from "@mui/material";
import { observer } from "mobx-react";
import React from "react";

export const ContactsList: React.FC = () => {
  return (
    <Container>
      Contacts
    </Container>
  );
};

observer(ContactsList);
