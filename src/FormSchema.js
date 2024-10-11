import * as Yup from 'yup';

export const FormSchema = Yup.object({
    name: Yup.string().min(3,'Too Short').max(20, 'Too Long').required("Name is must"),
    email:Yup.string().email().required('Email is must'),
    age: Yup.number().min(10).max(50).required("Age is must"),
    pass: Yup.string()
    .required("Password is must")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,"Enter Strong Password"),
    cpass:Yup.string()
    .required("Confirm password is must")
    .oneOf([Yup.ref('pass'),null], "Both passwords must match")
});