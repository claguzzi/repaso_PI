import { useState } from "react";
import axios from "axios";
import { Formik, ErrorMessage } from "formik";
import validationSchema from "./validations";
import FormInput from "../../component/FormInput/FormInput";
import { Button } from "@nextui-org/button";
import Swal from 'sweetalert2'




const Form = () => {

  const [errorMessage] = useState("");
  

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await axios.post("http://localhost:3001/user", values);

      const emailData = {
        to: "claudiolaguzzi@gmail.com",
        subject: "Aviso",
        text: "Se ha registrado un nuevo usuario "
      }

      await axios.post("http://localhost:3001/email", emailData);
      Swal.fire({
        icon: "success",
        text: "Usuario Registrado con Exito"
      });
      resetForm();
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: "Hubo un Error de registro"
      });
    }
  };

  return (
    <Formik
      initialValues={{
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, isValid, touched, errors }) => (
        <form className="max-w-md mx-auto mt-8 p-8 bg-white rounded-lg shadow-lg border border-gray-300" onSubmit={handleSubmit}>

          <div className="text-center mb-4">
            <h1 className="text-2xl font-bold">Registrar Nuevo Usuario</h1>
          </div>

          <div className="mb-4">
            <FormInput label="Name" name="name" placeholder="Name" />
            {touched.name && !errors.name && (
              <div className="text-green-500 text-sm">Campo validado</div>
            )}
            <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="mb-4">
            <FormInput label="UserName" name="username" placeholder="Username" />
            {touched.username && !errors.username && (
              <div className="text-green-500 text-sm">Campo validado</div>
            )}
            <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="mb-4">
            <FormInput label="Email" name="email" placeholder="Email" />
            {touched.email && !errors.email && (
              <div className="text-green-500 text-sm">Campo validado</div>
            )}
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="mb-4">
            <FormInput label="Phone" name="phone" placeholder="Phone" />
            {touched.phone && !errors.phone && (
              <div className="text-green-500 text-sm">Campo validado</div>
            )}
            <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="mb-4">
            <FormInput label="WebSite" name="website" placeholder="Website" />
            {touched.website && !errors.website && (
              <div className="text-green-500 text-sm">Campo validado</div>
            )}
            <ErrorMessage name="website" component="div" className="text-red-500 text-sm" />
          </div>

          {errorMessage && <div className="text-red-500 text-sm mb-4">{errorMessage}</div>}

          <Button
            type="submit"
            size="lg"
            className={`w-full ${!isValid && 'opacity-50 cursor-not-allowed'} bg-blue-500 text-white hover:bg-blue-700`}
            disabled={!isValid}
          >
            Regístrate
          </Button>

        </form>
      )}
    </Formik>
  );
};

export default Form;
