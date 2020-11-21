import React, { useContext } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'
import { DataContext } from '../context/dataContext';
import { Button } from 'react-bootstrap';
import swal from 'sweetalert';

function RegistrationFormNew() {
  const { dispatch } = useContext(DataContext);
  const initialValues = {
    schemeName: 'JVIS',
    dateOfIntroduction: null,
    schemeType:'',
    yearlyInterestRate:'',
    irdaCode:'',
    yearlyMinimumInvestment:'',
    minimumTenureOfInvestment:'',
    prematureClosureCharge:''
  }

  const validationSchema = Yup.object({
    schemeName:   Yup.string()
      .required('Required')
      .matches(/^JVIS[A-Z]{6}$/, 'Start with JVIS, 10 characters long & only capital alphabets'),
    dateOfIntroduction: Yup.date()
      .required('Required')
      .nullable(),
    schemeType:   Yup.string().required('Required'),
    yearlyInterestRate:Yup.string().
      required('Required')
      .matches(/^[0-9]{2}.[0-9]{1}%$/, 'Example 08.1%'),
    irdaCode:Yup.string()
      .required('Required')
      .matches(/^[0-9]{2}[-][0-9]{4}[-][A-Z]{3}[-][0-9]{1}$/, 'Example 91-4523-XDC-9'),
    yearlyMinimumInvestment:Yup.string()
      .required('Required')
      .matches(/^[0-9]{12}$/, 'Must be exactly 12 digits'),
    minimumTenureOfInvestment:Yup.string().required('Required'),
    prematureClosureCharge:Yup.string()
      .required('Required')
      .matches(/^[0-9]{2}.[0-9]{1}%$/, 'Example 02.0%'),

  })

  const dropdownOptions1 = [
    { key: 'Select scheme type', value: '' },
    { key: 'SIP', value: 'SIP' },
    { key: 'MIS', value: 'MIS' },
    { key: 'STI', value: 'STI' },
    { key: 'LTI', value: 'LTI' },
    { key: 'FD', value: 'FD' },
    { key: 'RD', value: 'RD' }
  ]
  const dropdownOptions2 = [
    { key: 'Select tenure of investment', value: '' },
    { key: 'One year', value: 'One year' },
    { key: 'Two year', value: 'Two year' },
    { key: 'Three year', value: 'Three year' },
    { key: 'Four year', value: 'Four year' }
  ]
  const onSubmit = (values, onSubmitProps) => {
    swal("Successfully Registered the Scheme.");
    dispatch({ type: 'ADD_DATA', data: {...values}});
    // onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
  }

  return (
  
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {formik => (
        <div className="container-flux">
          <div className="row">
            <div className="col-lg-8">
              <Form>
                <h3>Scheme Registration Form</h3>
                
                  <FormikControl
                    control='input'
                    type='text'
                    label='Scheme Name'
                    name='schemeName'
                  />
                
                <FormikControl
                  control='date'
                  label='Date of Introduction'
                  name='dateOfIntroduction'
                />
                <FormikControl
                  control='select'
                  label='Scheme Type'
                  name='schemeType'
                  options={dropdownOptions1}
                />
                <FormikControl
                  control='input'
                  type='text'
                  label='Yearly Interest Rate'
                  name='yearlyInterestRate'
                />
                <FormikControl
                  control='input'
                  type='text'
                  label='IRDA Code'
                  name='irdaCode'
                />
                <FormikControl
                  control='input'
                  type='text'
                  label='Yearly Minimum Investment'
                  name='yearlyMinimumInvestment'
                />
                <FormikControl
                  control='select'
                  label='Minimum Tenure of Investment'
                  name='minimumTenureOfInvestment'
                  options={dropdownOptions2}
                />
                <FormikControl
                  control='input'
                  type='text'
                  label='Pre-mature Closure Charge'
                  name='prematureClosureCharge'
                />
                <br></br>
                <Button type='submit'  variant="primary" size="lg">Submit</Button>
                <br></br>
                <br></br>
              </Form>
            </div>
          </div>
        </div>
      )
    }
    </Formik>
  )
}


export default RegistrationFormNew