import { TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
const FormFormik = () => {
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    onSubmit: (datos) => {
      console.log("el formulario se envio");
      console.log(datos);
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      nombre: Yup.string().required("este campo es requerido"),
      email: Yup.string()
        .email("no corresponde a un email valido")
        .required("Este campo es obligatorio"),
      password: Yup.string().required("Requerido"),
      repeatPassword: Yup.string()
        .required("Requerido")
        .oneOf([Yup.ref("password")], "las contraseñas no coinciden"),
    }),
  });
  console.log(errors);

  return (
    <div style={{ marginTop: 100, padding: 50 }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nombre"
          variant="outlined"
          name="nombre"
          onChange={handleChange}
          error={errors.nombre ? true : false}
          helperText={errors.nombre}
        />
        <br />
        <TextField
          label="Email"
          variant="outlined"
          name="email"
          onChange={handleChange}
          error={errors.email ? true : false}
          helperText={errors.email}
        />
        <br />
        <TextField
          label="Password"
          variant="outlined"
          name="password"
          onChange={handleChange}
          error={errors.password ? true : false}
          helperText={errors.password}
        />
        <br />
        <TextField
          label="RepeatPassword"
          variant="outlined"
          name="repeatPassword"
          onChange={handleChange}
          error={errors.repeatPassword ? true : false}
          helperText={errors.repeatPassword}
        />
        <Button type="submit" variant="contained">
          enviar
        </Button>
      </form>
    </div>
  );
};

export default FormFormik;
