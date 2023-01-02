import { MouseEventHandler } from "react";

export interface IconButtonType {
  size: string;
  value: string;
  click: MouseEventHandler<HTMLButtonElement> | undefined;
  location: string;
  Icon: any;
  disabled: boolean;
  type: "button" | "submit";
}

export interface ButtonType {
  type: "button" | "submit";
  size: string;
  value: string;
  click: MouseEventHandler<HTMLButtonElement> | undefined;
  location: string;
  disabled: boolean;
}
