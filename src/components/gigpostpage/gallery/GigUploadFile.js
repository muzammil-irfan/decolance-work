import React from "react";

import { useState, useRef } from "react";
import { Box, Text } from "@chakra-ui/react";

export function ImagePicker({
  acceptImageType,
  demoIcon,
  demoText,
  demoText2,
}) {
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file.size <= 4000000) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert("File size must be less than 4MB");
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file.size <= 4000000) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert("File size must be less than 4MB");
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <Box
      style={{
        border: "1px solid #cecece",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
      w={{ base: "160px", md: "200px", lg: "200px" }}
      h={{ base: "140px", md: "180px", lg: "180px" }}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onClick={handleClick}
    >
      <input
        type="file"
        accept={acceptImageType}
        onChange={handleFileInputChange}
        ref={fileInputRef}
        style={{ display: "none" }}
      />
      {image ? (
        <img
          src={image}
          alt="Uploaded Image"
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
      ) : (
        <Box>
          <Box display={"flex"} justifyContent={"center"}>
            {demoIcon}
          </Box>
          <Text color={"#c7c7c7"}>{demoText}</Text>
          <Text color={"#008ddb"}>{demoText2}</Text>
        </Box>
      )}
    </Box>
  );
}
