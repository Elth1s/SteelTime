import { createTheme } from "@mui/material";

const LightTheme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1185,
            xl: 1560,
        },
    },
    palette: {
        mode: "light",
        background: {
            default: "#FCFDFF",
        },
        primary: {
            main: "#005AAD"
        },
        text: {
            primary: "#111518"
        },
    },
    typography: {
        h3: {
            fontSize: "20px"
        }
    },
});

export default LightTheme;