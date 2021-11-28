import React from 'react';

import { Box, Text } from 'components';
import moment from 'moment';
import { CoverLetterData } from 'types';

type Props = {
  data: CoverLetterData;
};
const CoverLetter = ({ data }: Props) => {
  return (
    <>
      <Box width="100%" align="right">
        <Text>Armin Basirian</Text>
      </Box>
      <Box width="100%" align="right">
        <Text>Pirozi, Tehran, Tehran, Iran</Text>
      </Box>
      <Box width="100%" align="right">
        <Text>ar.basirain@gmail.com</Text>
      </Box>
      <Box width="100%" align="right">
        <Text>+989355639293</Text>
      </Box>
      <br />
      <Box>
        <Text>{moment().format('ll')}</Text>
      </Box>
      <Box>
        <Text>{data.company}</Text>
      </Box>
      <Box>
        <Text>Re: Application for the position of {data.job_title}</Text>
      </Box>
      <br />
      <Box>
        <Text>Dear {data.manager},</Text>
      </Box>
      <br />
      <Box>
        <Text>
          I am writing to express my interest in the position of{' '}
          {data.job_title} at {data.company}. When I reviewed the position
          requirements on Linkedin, I got excited to find that my technical
          qualifications and personal strengths align with your software
          development team’s needs.
        </Text>
      </Box>
      <br />
      <Box>
        <Text>
          Over the past six years, I have worked with many small and big teams
          so I have learned how to communicate with my teammates and teamwork
          with my coworkers as well. I bring a comprehensive set of skills in
          Frontend Development using React, JavaScript, TypeScript, HTML, and
          CSS that I believe will be useful for {data.company}. My teamwork,
          collaboration, ability to Research-and-Development, and interest in
          learning new things have afforded me excellent problem-solving skills
          in creative ways. I am excited to contribute my talents and
          proficiency in communication to your team's efforts.
        </Text>
      </Box>
      <br />
      <Box>
        <Text>
          Please review both my resume and my LinkedIn account for a more
          in-depth illustration of my work history and accomplishments. I would
          appreciate the opportunity to interview at your earliest convenience.
          I'm eager to discuss how my personality and background fit the
          {' ' + data.job_title} role.
        </Text>
      </Box>
      <br />
      <Box>
        <Text>
          Thank you for your time and consideration. I look forward to hearing
          from you.
        </Text>
      </Box>
      <br />
      <Box>
        <Text>Sincerely,</Text>
      </Box>
      <br />
      <Box>
        <Text>Armin Basirian</Text>
      </Box>
    </>
  );
};

export default CoverLetter;
