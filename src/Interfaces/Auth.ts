import { IconButtonType } from "./Button";

export interface LoginType {
  email: string;
  password: string;
}
export interface OTPType {
  phone_number: string;
  otp: string;
}
export interface AuthFormType {
  inputs: AuthFormInputType[];
  submit: React.FormEventHandler<HTMLFormElement>;
  url: string | null;
  btn: IconButtonType;
}
export interface AuthFormInputType {
  label: string;
  type: string | undefined;
  value: string | number | readonly string[] | undefined;
  change: React.ChangeEventHandler<HTMLInputElement> | undefined;
  required: boolean;
  id: string;
  placeholder: string;
  description: string;
  icon: any;
  disabled: boolean;
}
