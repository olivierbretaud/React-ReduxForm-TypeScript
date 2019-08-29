import React from 'react';
import { connect } from 'react-redux';
import { Field, InjectedFormProps, reduxForm, change } from 'redux-form';
import { Button , Card, CardBody , Col, FormGroup } from  'reactstrap';
import { FaChevronRight } from 'react-icons/fa';

import FormInput from '../../components/FormInput';
import validate from './validate';
import FormSelect from '../../components/FormSelect';
import { Gender, CurrentDate } from '../../config/constants';
import { name, mobile } from  '../../Utils/normalize';

interface Props {};

export const PersonalDetailForm: React.FC<Props & InjectedFormProps<{},Props>> = (props: any ) => {
  
  const handleChange = (event : any) => {
    let birthDay = event.target.value.slice(0,4);
    let currentYear:  any = CurrentDate.slice(0.4);
    let userAge = currentYear - birthDay;
    props.dispatch(change('user', 'userAge', userAge));
  }

  return (
    <form onSubmit={props.handleSubmit} noValidate={true} >
      <Col sm="12">
        <Card>
          <CardBody>
            <FormGroup row={true}>
              <Col xs={12} lg={12}>
                <Field
                  name="userName"
                  type="text"
                  component={FormInput}
                  label="Name *"
                  placeHolder="Enter user name"
                  normalize={name}
                  />
              </Col>
            </FormGroup>
            <FormGroup row={true}>
              <Col xs={12} lg={6}>
                <Field
                  name="userDOB"
                  type="date"
                  component={FormInput}
                  label="Date of birth *"
                  placeHolder="Enter date of birth"
                  onChange={handleChange}
                  maxDate={CurrentDate}
                  />
              </Col>
              <Col xs={12} lg={6}>
                <Field
                  name="userAge"
                  type="text"
                  component={FormInput}
                  label="Age *"
                  placeHolder="Enter user age"
                  />
              </Col>
            </FormGroup>
            <FormGroup row={true}>
              <Col xs={12} lg={6} >
                <Field
                  name="userGender"
                  type="text"
                  datas={Gender}
                  components={FormSelect}
                  label="Gender *"
                  placeHolder="Select gender"
                  />
              </Col>
              <Col xs={12} lg={6}>
                <Field
                  name="userMobileNumber"
                  type="text"
                  component={FormInput}
                  label="Mobile No *"
                  placeHolder="Enter mobile number"
                  normalize={mobile}
                />
              </Col>
            </FormGroup>
            <FormGroup row={true}>
              <Col xs={12} lg={6}>
                <Field
                  name="userAddress"
                  type="textarea"
                  components={FormInput}
                  label="Address *"
                  placeHolder="Enter Address"
                  />
              </Col>
            </FormGroup>
          </CardBody>
          <div>
            <Button
              color="success"
              type="submit"
              >
                next 
                <FaChevronRight className="button-padding" size={18} />
              </Button>
          </div>
        </Card>
      </Col>
    </form>
  );
}

const form = reduxForm<{}, Props>({
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: false,
  form: 'user',
  validate,
})(PersonalDetailForm);

export default connect(null)(form);