import React, { useState } from 'react'
import { ErrorMessage,Field,Form,Formik } from 'formik'
import * as yup from 'yup'
import RedErrorMessage from './RedErrorMessage'

function FormikForm2() {
    // const[formData,setFormData] =  useState({});
     const NewValidations = yup.object({
        name:yup.string().required("Name is must"),
        age:yup.number().min(10).max(50).required("Age is must"),
        pass:yup.string()
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,'Enter strong password')
        .required('Password is must'),
        gender:yup.string().required('Gender is must'),
        hobby:yup.array().min(1,'1 Hobby is must'),
        country:yup.string().required('Country is must'),
        comment:yup.string().max(500).required('Comment is must')
     })
  return (
    <div>
      <Formik
      validationSchema={NewValidations}
      initialValues={{name:"",age:"",pass:"",gender:"", hobby:[],country:"",comment:""}}
      onSubmit={(values) => {
        console.log(values)
        // setFormData(values)
      }}
      >
        <Form>
            <label htmlFor="">Enter Name: </label>
            <Field type="text" name="name"/>
            <RedErrorMessage name="name"/>
            {/* <ErrorMessage name='name' /> */}
            <br /><br />
            <label htmlFor="">Enter Age: </label>
            <Field type="number" name="age"/>
            <RedErrorMessage name="age"/>
            <br /><br />
            <label htmlFor="">Enter Password: </label>
            <Field type="text" name="pass"/>
            <RedErrorMessage name="pass"/>
            <br /><br />
            <label htmlFor="">Gender: &nbsp; </label>
            <label htmlFor="">Male &nbsp; </label>
            <Field type="radio" name="gender" value="Male"/>
            &nbsp;
            <label htmlFor="">Female  &nbsp; </label>
            <Field type="radio" name="gender" value="Female"/>
            <RedErrorMessage name="gender"/>
            <br /><br />
            <label htmlFor="">Hobbies:  &nbsp;</label>
            <label htmlFor="">Writing:  &nbsp;</label>
            <Field type="checkbox" name="hobby" value="Writing" />
            <label htmlFor="">Reading  &nbsp;</label>
            <Field type="checkbox" name="hobby" value="Reading" />
            &nbsp;
            <label htmlFor="">Sleeping  &nbsp;</label>
            <Field type="checkbox" name="hobby" value="Sleeping" />
            &nbsp;
            <RedErrorMessage name="hobby"/>
            <br /><br />
            <label htmlFor="">Country: </label>
            <Field name="country" as="select">
                <option value="">Select</option>
                <option value="Canada">Canada</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
            </Field>
            <RedErrorMessage name="country"/>
            <br /><br />
            <label htmlFor="">Comments: </label>
            <Field as= "textarea" name="comment" />
            <RedErrorMessage name="comment"/>
            <br /><br />
            <button type='submit'>Submit</button>
        </Form>
      </Formik>
      {/* <h1>{JSON.stringify(formData)}</h1> */}
      {/* <h1>{formData.name}</h1>
      <h1>{formData.age}</h1> */}
    </div>
  )
}

export default FormikForm2
