import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import { Formik } from 'formik';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import * as Yup from 'yup';

const MySwal = withReactContent(Swal);

const validationSchema = Yup.object({
  firstName: Yup.string().min(3, "minimun 3 characters").required("The First Name is Required"),
  lastName: Yup.string().min(3, "minimun 3 characters").required("The Last Name is Required"),
  phone: Yup.number().min(8, "minimun 8 numbers").nullable(),
  email: Yup.string().email().required("the email is required"),
  password: Yup.string()
  .required('No password provided.') 
  .min(8, 'at least 8 chars')
  .matches(/[a-z]/, 'at least one lowercase char')
  .matches(/[A-Z]/, 'at least one uppercase char')
  .matches(/[a-zA-Z]+[^a-zA-Z\s]+/, 'at least 1 number or special char (@,!,#, etc).')
})

const handleSubmit = (values) => {
  MySwal.fire(
    'Register succed',
    ` ${JSON.stringify(values)}`,
    'success'
  );
}

const initialValues = {
  firstName:"",
  lastName:"",
  phone:"",
  email:"",
  password:"",
  birthday:"",
  select:"",
  file:""
}

const RegisterForm = (props) => {
  return (
    <Formik 
      validationSchema={validationSchema} 
      initialValues={initialValues} 
      onSubmit={handleSubmit}  
    >
      {
        ({values, errors, handleSubmit, handleChange, touched}) => (
          <Form onSubmit={handleSubmit} >
          <FormGroup row>
            <Label for="fisrtName" sm={2}>First Name</Label>
            <Col sm={10}>
              <Input  invalid={(errors.firstName && touched.firstName) ? true : false} onChange={handleChange}  value={values.firstName} type="text" name="firstName" id="firstName" placeholder="first name" />
              <FormFeedback>{errors.firstName}</FormFeedback>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="lastName" sm={2}>Last Name</Label>
            <Col sm={10}>
              <Input invalid={(errors.lastName && touched.lastName) ? true : false} onChange={handleChange} value={values.lastName} type="text" name="lastName" id="lastName" placeholder="last name" />
              <FormFeedback>{errors.lastName}</FormFeedback>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="birthday" sm={2}>Birthday</Label>
            <Col sm={10}>
              <Input onChange={handleChange} value={values.birthday} type="date" name="birthday" id="birthday" placeholder="birthday date" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="fisrtName" sm={2}>Phone Number</Label>
            <Col sm={10}>
              <Input invalid={(errors.phone && touched.phone) ? true : false} onChange={handleChange} value={values.phone} type="text" name="phone" id="phone"  placeholder="Phone number" />
              <FormFeedback>{errors.phone}</FormFeedback>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleEmail" sm={2}>Email</Label>
            <Col sm={10}>
              <Input invalid={(errors.email && touched.email) ? true : false} onChange={handleChange} value={values.email} type="email" name="email" id="exampleEmail" placeholder="email" />
              <FormFeedback>{errors.email}</FormFeedback>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="examplePassword" sm={2}>Password</Label>
            <Col sm={10}>
              <Input invalid={(errors.password && touched.password) ? true : false} onChange={handleChange} value={values.password} type="password" name="password" id="examplePassword" placeholder="password" />
              <FormFeedback>{errors.password}</FormFeedback>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleSelect" sm={2}>Select</Label>
            <Col sm={10}>
              <Input onChange={handleChange} value={values.select} type="select" name="select" id="exampleSelect">
                <option>Select Country</option>
                <option>Colombia</option>
                <option>España</option>
                <option>Estados Unidos</option>
                <option>Italia</option>
                <option>Francia</option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleFile" sm={2}>Profile Picture</Label>
            <Col sm={10}>
              <Input onChange={handleChange} value={values.file} type="file" name="file" id="exampleFile" />
            </Col>
          </FormGroup>
          <FormGroup check row>
            <Col sm={{ size: 10, offset: 2 }}>
              <Button type="submit" color="secondary">Register</Button>
            </Col>
          </FormGroup>
        </Form>
        )
      }

    </Formik>

  );
}

export default  RegisterForm;