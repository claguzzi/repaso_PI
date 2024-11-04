import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string()
  .required("Introduce tu nombre")
  .min(5,"el nombre debe tener al menos 5 caracteres")
  .max(20,"el nombre no debe tener mas de 20 caracteres"),

  username: Yup.string()
  .required("Introduce tu username")
  .min(5,"el nombre debe tener al menos 5 caracteres")
  .max(20,"el nombre no debe tener mas de 20 caracteres"),

  email: Yup.string()
  .email("Introduce un email válido")
  .required("Introduce tu email"),

  phone: Yup.string()
  .required("Introduce tu teléfono")
  .matches(/^[0-9]+$/, "El teléfono debe contener solo números"),
  
  
  website: Yup.string()
  .url("Por favor, introduce una URL válida.")
  .required("Introduce tu sitio web"),
});

export default validationSchema;
