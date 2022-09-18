import { Container } from "@mui/material";
import { observer } from "mobx-react";
import React, { useState } from "react";
import { ContactItem } from "../ContactItem";

const accordionIds = [0, 1, 2, 3];

export const ContactsList: React.FC = () => {
  const [expanded, setExpanded] = useState<false | number>(0);
  return (
    <Container>
      {accordionIds.map((i) => (
        <ContactItem i={i} expanded={expanded} setExpanded={setExpanded} />
      ))}
      popopop
    </Container>
  );
};

observer(ContactsList);
