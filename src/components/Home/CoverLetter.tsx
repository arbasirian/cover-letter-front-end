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
      <Box></Box>
      <Box></Box>
      <Box>
        <Text>{moment().format('ll')}</Text>
      </Box>
      <Box>
        <Text>{data.company}</Text>
      </Box>
      <Box>
        <Text>{moment().format('ll')}</Text>
      </Box>

      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
    </>
  );
};

export default CoverLetter;
