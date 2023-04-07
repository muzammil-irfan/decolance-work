import { Checkbox } from '@chakra-ui/react'
import React from 'react'

function FormCheckBox(props,{label}) {
  return (
    <Checkbox  {...props}>
    {label}
  </Checkbox>
  )
}

export default FormCheckBox