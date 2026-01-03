import React from "react";

export interface Service {
  id: number;
  title: string;
  price: string;
  icon: string;
  detail?: React.ReactNode | string;
}
