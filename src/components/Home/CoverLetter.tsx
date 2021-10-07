import React from 'react';

import { Box, Text } from 'components';
import moment from 'moment';

const CoverLetter = () => {
  return (
    <>
      <Box>
        <Text display="block" align="right">
          Armin Basirian
        </Text>
        <Text display="block" align="right">
          Pirozi, Tehran, Tehran, Iran
        </Text>
        <Text display="block" align="right">
          ar.basirain@gmail.com
        </Text>
        <Text display="block" align="right">
          +989355639293
        </Text>
      </Box>
      <Box>
        <Text>{moment().format()}</Text>
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
