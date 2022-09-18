import { Container } from "@mui/system";
import React from "react";

export const ContainerContent: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <Container>{children}</Container>;
};
