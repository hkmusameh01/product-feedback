import { useMemo } from 'react'
import * as yup from 'yup'

export const validationSchema = () =>
  useMemo(
    () =>
      yup.object().shape({
        username: yup
          .string()
          .min(4, `Must be at least 4 letters`)
          .required("This field is required"),
        password: yup
          .string()
          .min(4, `Must be at least 4 letters`)
          .max(20, `Must be less than 20 letters`)
          .required("This field is required"),
      }),
    []
  );