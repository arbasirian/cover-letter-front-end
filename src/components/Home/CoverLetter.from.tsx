import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';

import { Box, Input, Submit } from 'components';
import { CoverLetterData } from 'types';

const validationSchema = yup.object().shape({
  company: yup.string().required('No Company Name provided'),
  job_title: yup.string().required('No Job Title provided'),
  manager: yup.string().required('No Job Title provided'),
});

type Props = {
  onSubmit: (body: CoverLetterData) => void;
};
export default ({ onSubmit }: Props): JSX.Element => {
  return (
    <Formik
      initialValues={{
        company: '',
        job_title: '',
        manager: 'Hiring Manager',
      }}
      validateOnMount
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => {
        return (
          <Box width="500px" maxWidth="100%" as={Form}>
            <Box width="100%" marginBottom="45px">
              <Input
                formik={formik}
                label="Company Name"
                name="company"
                type="text"
              />
            </Box>
            <Box width="100%" marginBottom="45px">
              <Input
                formik={formik}
                label="Job Title"
                name="job_title"
                type="text"
              />
            </Box>
            <Box width="100%" marginBottom="45px">
              <Input
                formik={formik}
                label="Manager"
                name="manager"
                type="text"
              />
            </Box>
            <Submit
              width="100%"
              formik={formik}
              loading={false}
              label="Generate"
            />
          </Box>
        );
      }}
    </Formik>
  );
};
