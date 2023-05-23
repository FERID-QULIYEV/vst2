import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import "./AddSec.scss"

function AddSec() {
  return (
    <div className='addpage'>
            <Formik
                initialValues={{ categories: '',name: '' }}
                validationSchema={Yup.object({
                    categories: Yup.string().required('Required'),
                    name: Yup.string().required('Required'),
                    
                })}
                onSubmit={(values) => {
                    axios.post("http://localhost:3010/", values)
                }}
            >
                <Form>
                    <label htmlFor="categories">Federasıya Adı</label>
                    <Field name="categories" type="text" />
                    <ErrorMessage name="categories" />

                    <label htmlFor="name">İdman növu</label>
                    <Field name="name" type="text" />
                    <ErrorMessage name="name" />

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
  )
}

export default AddSec