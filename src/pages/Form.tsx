import React, { useState} from 'react';
import { InjectedFormProps } from 'redux-form';
import Stepper from 'react-stepper-horizontal';
import { Card } from 'reactstrap';

import AccountDetailForm from './AccountDetailForm';
import PersonalDetailForm from './PersonalDetailForm';

export const Form: React.FC<InjectedFormProps> = (props: any) => {
  const [ page , setPage] = useState(0);
  const steps = [{ tilte: 'Personnal Details'}, { title: 'Account Detail'}];

  const nextPage = () => {
    setPage(page +1);
  }

  const prevPage = () => {
    setPage(page - 1);
  }

  return (
    <Card>
      <Stepper steps={steps} activeStep={page} />
      {page === 0 && <PersonalDetailForm onSubmit={nextPage} />}
      {page === 1 && (
        <AccountDetailForm isLoading={props.isLoading} prevPage={prevPage} onSubmit={props.onSubmit} />
      )}
    </Card>
  );

}

export default Form;