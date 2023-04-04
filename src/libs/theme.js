import { extendTheme } from "@chakra-ui/react";

const theme = {
  
  colors: {
    primary:"",
    secondary:"",
    brand: {
      50: "#D5E9F5",
      100: "#0F557C",
      200: "#53A7D5",
      300: "#42AFEB",
      400: "#52B9F3",
      500: "#008DDB",
      600: "#91D2F6",
      700: "#1D72A1",
      800: "#044E68",
      900: "#52B9F3",
    },
  },
  fonts: {
    body: `'Montserrat', sans-serif`,
    heading:`'Montserrat', sans-serif`,
  },
};

export default extendTheme(theme);
