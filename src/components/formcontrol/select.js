import { Select } from '@chakra-ui/react'
import React from 'react'

function FormSelect(props,{placeholder,optionsList,selectedValue ,labelName,valueName}) {
  
    const handleChange=(e)=>{
        selectedValue && selectedValue(e.target.value)
    }
  
    return (
    <Select  placeholder={placeholder} onChange={handleChange} {...props} >
   {Array.isArray(optionsList)&&optionsList.map((obj,index)=>{
    return  <option value={obj[valueName]}>{obj[labelName]}</option>
   }) 
   }
  </Select>
  )
}

export default FormSelect