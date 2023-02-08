import { useState } from "react";
import { useForm } from "react-hook-form";
import { FormValues } from "../../types/auth";
import { useYupValidationResolver } from "../../hooks";
import { validationSchema } from "../validation";

import { Typography } from "@mui/material";
import {
  BootstrapButton,
  BootstrapInput,
  BootstrapBox,
  BootstrapTypography as ErrorMessage,
  BootstrapLabel,
} from "../customizetion";

export default function Login() {
  const [data, setData] = useState<FormValues | {}>({});
  const schema = validationSchema();
  const resolver = useYupValidationResolver(schema);
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<FormValues>({ resolver });

  console.log("check rendring!!", data);

  return (
    <BootstrapBox
      onSubmit={handleSubmit((data) => setData(data))}
      component="form"
    >
      <Typography
        variant="h4"
        marginBottom={3}
        color={"#3a4373"}
        sx={{ fontFamily: "Jost", fontWeight: "700" }}
      >
        Login
      </Typography>

      <BootstrapLabel htmlFor="bootstrap-input-username">
        Username
      </BootstrapLabel>

      <BootstrapInput
        sx={{ border: `1px solid ${errors.username ? "red" : "none"}` }}
        {...register("username")}
        id="bootstrap-input-username"
      />
      <ErrorMessage visibility={errors.username ? "visible" : "hidden"}>
        {errors.username?.message}
      </ErrorMessage>
      <BootstrapLabel htmlFor="bootstrap-input-password">
        Password
      </BootstrapLabel>
      <BootstrapInput
        sx={{ border: `1px solid ${errors.password ? "red" : "none"}` }}
        {...register("password")}
        id="bootstrap-input-password"
      />
      <ErrorMessage visibility={errors.password ? "visible" : "hidden"}>
        <>{errors.password?.message}</>
      </ErrorMessage>
      <BootstrapButton
        fullWidth
        type="submit"
        variant="contained"
        disableRipple
      >
        Login
      </BootstrapButton>
    </BootstrapBox>
  );
}

// The below code is just to show the error message at the page
// but something happens infinate times so I just put it in the
// component to skip this error.

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
