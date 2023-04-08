import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { useState } from "react";

export default function RadioInputs() {
  const [selectedNumber, setSelectedNumber] = useState("");

  const handleSelectNumber = (value) => {
    setSelectedNumber(value);
  };

  const options = ["logo","poster","3D","banner","Flyer","Cards","Posts","Boards"];

  return (
    <RadioGroup onChange={handleSelectNumber}  value={selectedNumber}>
      <Stack direction="row">
        {options.map((option) => (
          <Radio key={option} value={option}>
            {option}
          </Radio>
        ))}
      </Stack>
    </RadioGroup>
  );
}
