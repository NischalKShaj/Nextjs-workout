// file to show the client component
"use client";
import React from "react";

import { useTheme } from "@/components/theme-provider";
import { clientSide } from "@/utils/client-utils";

const ClientComponent = () => {
  const theme = useTheme();

  const result = clientSide();

  return <h1 style={{ color: theme.primary }}>Client route{result}</h1>;
};

export default ClientComponent;
