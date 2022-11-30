import { createTheme } from "@mui/material";

const DarkTheme = createTheme({
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
        }
    },
    typography: {
        fontFamily: [
            'Raleway',
            'Jura',
            "sans-serif"
        ].join(',')
    },
});

DarkTheme.typography.h1 = {
    fontSize: "64px",
    [DarkTheme.breakpoints.down('lg')]: {
        fontSize: '40px',
    },
    [DarkTheme.breakpoints.down('md')]: {
        fontSize: '32px',
    },
};
DarkTheme.typography.h2 = {
    fontSize: "36px",
    [DarkTheme.breakpoints.down('lg')]: {
        fontSize: '24px',
    },
    [DarkTheme.breakpoints.down('md')]: {
        fontSize: '20px',
    },
};
DarkTheme.typography.h3 = {
    fontSize: "24px",
    [DarkTheme.breakpoints.down('lg')]: {
        fontSize: '20px',
    },
};
DarkTheme.typography.h4 = {
    fontSize: "22px",
    [DarkTheme.breakpoints.down('lg')]: {
        fontSize: '20px',
    },
    [DarkTheme.breakpoints.down('md')]: {
        fontSize: '16px',
    },
};
DarkTheme.typography.h5 = {
    fontSize: "20px",
    lineHeight: "23px",
    [DarkTheme.breakpoints.down('lg')]: {
        fontSize: '16px',
    },
    [DarkTheme.breakpoints.down('md')]: {
        fontSize: '14.5px',
    },
};
DarkTheme.typography.h6 = {
    fontSize: "16px",
    [DarkTheme.breakpoints.down('lg')]: {
        fontSize: "14px",
    },
};

export default DarkTheme;