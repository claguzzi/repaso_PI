import { Field, } from "formik";
import { Input} from "@nextui-org/react";



function FormInput({ label, error, name, placeholder }) {
  return (
    <div>
      <Field
        as={Input}
        label={label}
        variant="bordered"
        placeholder={`${placeholder}...`}
        type="text"
        id={name}
        name={name}
        color={error ? "danger" : undefined} 
        errorMessage={error} 
        className="border border-gray-200 rounded-md px-4 py-2"
        
      />
     
    </div>
  );
}

export default FormInput;
