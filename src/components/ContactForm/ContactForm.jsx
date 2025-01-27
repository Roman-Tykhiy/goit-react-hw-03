import { Field, Form, Formik } from "formik";
const ContactForm = () => {
    const initialValues = {
        name: "",
    };
    const handleSubmit = (values, actions) => {
        console.log(values);
        actions.resetForm();
        
    }
    return (
        <div>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form>
                    <Field name="name"></Field>
                    <button type="submit">Add contact</button>
                </Form>
            </Formik>
        </div>

        
   )
   
}

export default ContactForm;