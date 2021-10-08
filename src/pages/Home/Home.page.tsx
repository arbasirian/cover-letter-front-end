import React, { PureComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Box, CoverLetter, CoverLetterFrom, Flex } from 'components';
import { CoverLetterData } from 'types';

type State = {
  showResult: boolean;
  formData: CoverLetterData;
};
export class HomePage extends PureComponent<RouteComponentProps, State> {
  state = {
    showResult: false,
    formData: {
      company: '',
      job_title: '',
      manager: 'Hiring Manager',
    },
  };
  render() {
    const { showResult, formData } = this.state;
    return (
      <>
        {showResult ? (
          <Box maxwidth="70%" margin="0 auto" padding="30px 0">
            <CoverLetter data={formData} />
          </Box>
        ) : (
          <Flex height="100vh">
            <CoverLetterFrom
              onSubmit={(body: CoverLetterData) =>
                this.setState({ formData: body, showResult: true })
              }
            />
          </Flex>
        )}
      </>
    );
  }
}

export default HomePage;
