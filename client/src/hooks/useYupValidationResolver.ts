import { useCallback } from 'react'
import { FormInputs, FormValues, ValidationError } from '../types/auth';

export const useYupValidationResolver = (validationSchema: any) =>
  useCallback(
    async (data: FormValues) => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false,
        });

        return {
          values,
          errors: {},
        };
      } catch (errors: any) {
        return {
          values: {},
          errors: errors.inner.reduce(
            (allErrors: FormInputs, currentError: ValidationError) => {
              return {
                ...allErrors,
                [currentError.path as string]: {
                  type: currentError.type ?? "validation",
                  message: currentError.message,
                },
              };
            },
            {}
          ),
        };
      }
    },
    [validationSchema]
  );