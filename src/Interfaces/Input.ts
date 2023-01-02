import { HTMLInputTypeAttribute, ChangeEventHandler } from "react";

export interface InputType {
  label: string;
  type: HTMLInputTypeAttribute | undefined;
  value: string | number | readonly string[] | undefined;
  change: ChangeEventHandler<HTMLInputElement> | undefined;
  required: boolean;
  id: string;
  placeholder: string;
  description: string;
  disabled: boolean;
}
export interface NumberInputType {
  label: string;
  value: string | number | readonly string[] | undefined;
  change: ChangeEventHandler<HTMLInputElement> | undefined;
  required: boolean;
  id: string;
  placeholder: string;
  description: string;
  disabled: boolean;
}
export interface TextAreaType {
  label: string;
  value: string | number | readonly string[] | undefined;
  change: React.ChangeEventHandler<HTMLTextAreaElement> | undefined;
  required: boolean;
  id: string;
  description: string;
  disabled: boolean;
  placeholder: string;
}
export interface InputIconType {
  label: string;
  type: HTMLInputTypeAttribute | undefined;
  value: string | number | readonly string[] | undefined;
  change: ChangeEventHandler<HTMLInputElement> | undefined;
  required: boolean;
  id: string;
  placeholder: string;
  description: string;
  disabled: boolean;
  Icon: any;
}
