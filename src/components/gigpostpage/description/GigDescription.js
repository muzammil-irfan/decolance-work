import React, { Component } from 'react';
import { Stack } from '@chakra-ui/react';
import { InputRowGrid } from '../overview/GigOverview';
import TextEditor from './TextEditor';

const GigDescription = () => {
  

  return (
    <>
    <Stack>
<InputRowGrid 
heading={"Description"}
text={"Briefly Describe Your Gig "}
input={<TextEditor/>

}
/>
    </Stack>
    </>
    );
}

export default GigDescription