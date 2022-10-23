import { createTheme } from "@mui/material";

const DarkTheme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1295,
            xl: 1600
        },
    },
    palette: {
        mode: "dark",
        background: {
            default: "#111518",
        },
        primary: {
            main: "#EF5803"
        },
        text: {
            primary: "#FCFDFF"
        },
    },
    components: {
        MuiContainer: {
            defaultProps: {
                style: {
                    padding: 0
                }
            }
        },
    },
    typography: {
        h1: {
            fontSize: "64px"
        },
        h3: {
            fontSize: "24px"
        },
        h4: {
            fontSize: "20px"
        },
        fontFamily: [
            'Raleway',
            'Jura',
            "sans-serif"
        ].join(',')
    },
});

export default DarkTheme;