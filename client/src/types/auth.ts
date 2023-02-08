import { FieldErrors } from "react-hook-form";
import * as yup from 'yup';

export type ValidationError = yup.ValidationError;

export type FormValues = {
  username: string;
  password: string;
};

export type TInputFields = {
  type: string;
  message: string;
};

export type FormInputs =
  | {
    [k: string]: TInputFields;
  }
  | FieldErrors;