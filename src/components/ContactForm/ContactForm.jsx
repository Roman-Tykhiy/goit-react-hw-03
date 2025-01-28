import { Field, Form, Formik } from "formik";
const ContactForm = ({ handleSubmit}) => {
    const initialValues = {
        name: "",
        phone: "",
    };
    
    return (
        <div>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form>
                    <Field name="name"></Field>
                    <Field name="phone"></Field>
                    <button type="submit">Add contact</button>
                </Form>
            </Formik>
        </div>

        
   )
   
}
export default ContactForm;