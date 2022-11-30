import { createTheme } from "@mui/material";

const LightTheme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 920,
            lg: 1295,
            xl: 1600
        },
    },
    palette: {
        mode: "light",
        background: {
            default: "#FCFDFF",
        },
        primary: {
            main: "#EF5803"
        },
        text: {
            primary: "#111518"
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
        fontFamily: [
            'Raleway',
            'Jura',
            "sans-serif"
        ].join(',')
    },
});

LightTheme.typography.h1 = {
    fontSize: "64px",
    [LightTheme.breakpoints.down('lg')]: {
        fontSize: '32px',
    },
};
LightTheme.typography.h2 = {
    fontSize: "36px",
    [LightTheme.breakpoints.down('lg')]: {
        fontSize: '20px',
    },
};
LightTheme.typography.h3 = {
    fontSize: "24px",
    [LightTheme.breakpoints.down('lg')]: {
        fontSize: '20px',
    },
};
LightTheme.typography.h4 = {
    fontSize: "22px",
    [LightTheme.breakpoints.down('lg')]: {
        fontSize: '16px',
    },
};
LightTheme.typography.h5 = {
    fontSize: "20px",
    lineHeight: "23px",
    [LightTheme.breakpoints.down('lg')]: {
        fontSize: '14.5px',
    },
};
LightTheme.typography.h6 = {
    fontSize: "16px",
    [LightTheme.breakpoints.down('lg')]: {
        fontSize: "14px",
    },
};

export default LightTheme;