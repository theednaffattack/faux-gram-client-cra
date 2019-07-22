import { FieldProps } from "formik";
import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  CSSProperties
} from "react";
import { Text } from "rebass";

import { InputProps } from "./types";
import { TInputBProps, IInputFieldProps } from "../types";
import { InputB } from "../styled-rebass";

// export interface IInputFieldProps {
//   label: string;
// }

export const FileUploadField = ({
  field,
  label,
  form: { errors, touched },
  ...props
}: FieldProps & InputProps & IInputFieldProps) => {
  const errorMessage = touched[field.name] && errors[field.name];

  return (
    <>
      <Text fontFamily="montserrat">
        <label htmlFor={field.name}>{label}</label>
      </Text>
      <InputB
        // @ts-ignore
        id={field && field.id ? field.id : field.name}
        name={field.name}
        fontSize={1}
        width={1}
        bg="rgba(0,0,0,0.1)"
        color="text"
        borderRadius={0}
        p={2}
        mt={2}
        mb={3}
        letterSpacing=".1em"
        border="0"
        borderBottom="2.5px rgba(244, 50, 127, 1) solid"
        {...field}
        {...props}
      />
      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
    </>
  );
};
