import { Box } from "@chakra-ui/react";
import { Select, Tag } from "antd";

const tagRender = (props) => {
  const { label, onClose } = props;
  const onPreventMouseDown = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Tag
      color={"blue"}
      onMouseDown={onPreventMouseDown}
      style={{
        marginRight: 3,
      }}
    >
      <Box display={"flex"} alignItems={"center"} gap={4}>
        <Box>{label} </Box>
        <Box
          bg={"blue.400"}
          m={1}
          w={"20px"}
          h={"20px"}
          borderRadius={"10px"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          cursor={"pointer"}
          color={"white"}
          onClick={onClose}
        >
          X
        </Box>
      </Box>
    </Tag>
  );
};
const TagsInput = () => (
  <Select
    mode="tags"
    showArrow
    tagRender={tagRender}
    className="tag_input_gigpost"
    style={{
      width: "100%",
    }}
    suffixIcon={null}
    // options={options}
    maxLength={5}
  />
);
export default TagsInput;
