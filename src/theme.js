import { experimental_extendTheme as extendTheme} from '@mui/material/styles';

const  theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#0F45FF',
        },
        text:{
          primary: '#1b1d21'
        },
        error: {
          main: '#ff0000', // Customize error color for light mode
        },
        success: {
          main: '#04AA6D', // Customize success color for light mode
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#0F45FF',
        },
        text:{
          primary: '#1b1d21'
        },
      },
    },
  },
});

export default theme;
