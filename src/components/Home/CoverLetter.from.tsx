import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';

import { Box, Input, Submit } from 'components';

const validationSchema = yup.object().shape({
  company: yup.string().required('No Company Name provided'),
  job_title: yup.string().required('No Job Title provided'),
  manager: yup.string().required('No Job Title provided'),
});

export default ({ onSubmit, submitting }: any): JSX.Element => {
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
          <Box width="100%" as={Form}>
            <Box width="100%" marginBottom="45px">
              <Input
                formik={formik}
                label="Company Name"
                name="company"
                type="text"
                placeholder="Enter Company Name"
              />
            </Box>
            <Box width="100%" marginBottom="45px">
              <Input
                formik={formik}
                label="Job Title"
                name="job_title"
                type="text"
                placeholder="Enter Job Title"
              />
            </Box>
            <Box width="100%" marginBottom="45px">
              <Input
                formik={formik}
                label="Manager"
                name="manager"
                type="text"
                placeholder="Enter Manager"
              />
            </Box>
            <Submit
              size="medium"
              type="secondary"
              shape="fill"
              width="100%"
              formik={formik}
              loading={submitting}
              label="Send"
            />
          </Box>
        );
      }}
    </Formik>
  );
};
