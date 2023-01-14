import React from "react";
import InputIcon from "../FormFields/InputIcon";
import Input from "../FormFields/Input";
import IconButton from "../Buttons/IconButton";
import { AuthFormInputType, AuthFormType } from '../../Interfaces/Auth';
import { Link } from "react-router-dom";

export default function AuthForm({ inputs, submit, url, btn }:AuthFormType) {
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <div className="px-4 py-8 bg-gray-50 sm:rounded-lg sm:px-5">
        <form className="space-y-6" onSubmit={submit}>
          {inputs.map((inp: AuthFormInputType, i: number) => (
            <>
              {inp.icon ? (
                <InputIcon
                key={i}
                  label={inp.label}
                  type={inp.type}
                  value={inp.value}
                  change={inp.change}
                  required={inp.required}
                  id={inp.id}
                  placeholder={inp.placeholder}
                  description={inp.description}
                  disabled={false}
                  Icon={inp.icon}
                />
              ) : (
                <Input
                key={i}
                label={inp.label}
                type={inp.type}
                value={inp.value}
                change={inp.change}
                required={inp.required}
                id={inp.id}
                placeholder={inp.placeholder}
                description={inp.description}
                disabled={false}
                />
              )}
            </>
          ))}
          {/* {
            url!==null &&
          <div className="text-left">
            <Link to={url} className="text-indigo-600">
              Verify New Account
            </Link>
          </div>
        } */}

          <div className="">
            <IconButton
              size={btn.size}
              value={btn.value}
              click={btn.click}
              location={btn.location}
              Icon={btn.Icon}
              disabled={btn.disabled}
              type={btn.type}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
