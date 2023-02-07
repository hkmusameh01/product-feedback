import { useCallback, useMemo } from "react";
import * as yup from "yup";
import { useForm, Resolver, FieldErrors } from "react-hook-form";

import {
  styled,
  InputBase,
  InputLabel,
  Box,
  Typography,
  Button,
} from "@mui/material";

const useYupValidationResolver = (validationSchema: any) =>
  useCallback(
    async (data: any) => {
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
          errors: errors.inner.reduce((allErrors: any, currentError: any) => {
            return {
              ...allErrors,
              [currentError.path]: {
                type: currentError.type ?? "validation",
                message: currentError.message,
              },
            };
          }, {}),
        };
      }
    },
    [validationSchema]
  );

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  borderRadius: 5,
  border: "1px solid transparent",
  "label + &": {
    marginTop: theme.spacing(0.2),
    marginBotton: theme.spacing(1),
    width: "100%",
  },
  "& .MuiInputBase-input": {
    borderRadius: 5,
    backgroundColor: "var(--body-bg-color)",
    fontSize: 16,
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    fontFamily: ["Jost", "sans-serif"].join(","),
  },
  "&:foucs, label + &": {
    color: "black",
  },
})) as typeof InputBase;

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "none",
  lineHeight: 1.5,
  backgroundColor: "#ad1fea",
  "&:hover": {
    backgroundColor: "#c356f5",
    boxShadow: "none",
  },
}) as typeof Button;

export default function CustomizedInputs() {
  const validationSchema = useMemo(
    () =>
      yup.object({
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
  const resolver = useYupValidationResolver(validationSchema);
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({ resolver });

  console.log(errors);

  return (
    <Box
      onSubmit={handleSubmit((data) => console.log("data", data))}
      component="form"
      sx={{
        gap: 2,
        fontSize: "1.1rem",
        backgroundColor: "white",
        width: { xl: "30%", lg: "40%", md: "45%", sm: "60%", xs: "85%" },
        height: "fit-content",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        borderRadius: "var(--root-border-raduis)",
        padding: "2rem 1.8rem",
      }}
    >
      <Typography
        variant="h4"
        marginBottom={3}
        color={"#3a4373"}
        sx={{ fontFamily: "Jost", fontWeight: "700" }}
      >
        Login
      </Typography>
      <InputLabel
        sx={{
          fontFamily: "Jost",
          fontWeight: "700",
          color: "#3a4373",
        }}
        htmlFor="bootstrap-input-username"
      >
        Username
      </InputLabel>
      <BootstrapInput
        sx={{ border: `1px solid ${errors.username ? "red" : "none"}` }}
        {...register("username")}
        id="bootstrap-input-username"
      />
      <Typography
        visibility={errors.username ? "visible" : "hidden"}
        variant="subtitle1"
        height={"2rem"}
        color="red"
        mt={0.5}
        ml={1}
        fontSize={15}
        fontFamily="Jost"
      >
        <>{errors.username?.message}</>
      </Typography>
      {/* <ErrorMessage error={errors} inputType={"username"} /> */}
      <InputLabel
        sx={{
          fontFamily: "Jost",
          fontWeight: "700",
          color: "#3a4373",
        }}
        htmlFor="bootstrap-input-password"
      >
        Password
      </InputLabel>
      <BootstrapInput
        sx={{ border: `1px solid ${errors.password ? "red" : "none"}` }}
        {...register("password")}
        id="bootstrap-input-password"
      />
      <Typography
        visibility={errors.password ? "visible" : "hidden"}
        variant="subtitle1"
        height={"2rem"}
        color="red"
        mt={0.5}
        ml={1}
        fontSize={15}
        fontFamily="Jost"
      >
        <>{errors.password?.message}</>
      </Typography>
      {/* <ErrorMessage error={errors} inputType={"password"} /> */}
      <BootstrapButton
        fullWidth
        type="submit"
        variant="contained"
        disableRipple
      >
        Submit
      </BootstrapButton>
    </Box>
  );
}

// type TInputFields = {
//   type: string;
//   message: string;
// };

// type FormValues =
//   | {
//       [k: string]: TInputFields;
//     }
//   | FieldErrors;

// type TErrorMessageProps = {
//   error: FormValues;
//   inputType: string;
// };

// const ErrorMessage = ({ error, inputType = "" }: any) => {
//   return (
//     <Typography
//       visibility={error[inputType] ? "visible" : "hidden"}
//       variant="subtitle1"
//       height={"2rem"}
//       color="red"
//       mt={0.5}
//       ml={1}
//       fontSize={15}
//       fontFamily="Jost"
//     >
//       <>{error[inputType]?.message}</>
//     </Typography>
//   );
// };

// import React, { useCallback, useMemo } from "react";
// import { useForm } from "react-hook-form";
// import * as yup from "yup";

// const useYupValidationResolver = (validationSchema) =>
//   useCallback(
//     async (data) => {
//       try {
//         const values = await validationSchema.validate(data, {
//           abortEarly: false,
//         });

//         return {
//           values,
//           errors: {},
//         };
//       } catch (errors) {
//         return {
//           values: {},
//           errors: errors.inner.reduce(
//             (allErrors, currentError) => ({
//               ...allErrors,
//               [currentError.path]: {
//                 type: currentError.type ?? "validation",
//                 message: currentError.message,
//               },
//             }),
//             {}
//           ),
//         };
//       }
//     },
//     [validationSchema]
//   );

// export default function CustomizedInputs() {
//   const validationSchema = useMemo(
//     () =>
//       yup.object({
//         firstName: yup.string().min(4, "min 4 letters").required("Required"),
//         lastName: yup.string().min(5, "min 5 letters").required("Required"),
//       }),
//     []
//   );
//   const resolver = useYupValidationResolver(validationSchema);

//   const {
//     handleSubmit,
//     formState: { errors },
//     register,
//   } = useForm({ resolver });

//   console.log(errors);

//   return (
//     <form onSubmit={handleSubmit((data) => console.log(data))}>
//       <input {...register("firstName")} />
//       {errors.firstName && <p>{errors.firstName.message}</p>}
//       <input {...register("lastName")} />
//       {errors.lastName && <p>{errors.lastName.message}</p>}
//       <input type="submit" />
//     </form>
//   );
// }
