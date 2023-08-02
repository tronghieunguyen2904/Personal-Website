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
        }
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
