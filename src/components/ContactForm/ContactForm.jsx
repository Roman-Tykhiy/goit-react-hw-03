import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
const ContactForm = ({ handleSubmit}) => {
    const initialValues = {
        name: "",
        phone: "",
    };

    const onlyLaters = /^[A-Za-zА-Яа-яЇїІіЄєҐґ'’\s]+$/;
    const phoneValidation = /^\+?\d{9,15}$/;
     const applySchema = Yup.object().shape({
    name: Yup.string()
      .required("поле обов'язкове")
      .min(3, "мінімум 3 символи")
      .max(20, "максимум 20 символів")
      .matches(onlyLaters, "введіть літери!"),
    phone: Yup.string()
      .matches(phoneValidation, "Невірний формат номера телефону")
      .required("поле обов'язкове"),
  });
    
    return (
        <div>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={applySchema}>
                <Form>
                    <Field name="name"></Field>
                    <ErrorMessage 
              name="name"
              component="p"
            />
                    <Field name="phone"></Field>
                     <ErrorMessage
              name="phone"
              component="p"
            />
                    <button type="submit">Add contact</button>
                </Form>
            </Formik>
        </div>

        
   )
   
}
export default ContactForm;