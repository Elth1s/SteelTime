import { Button, styled } from "@mui/material";



export const LanguageButtonStyle = styled(Button, {
    shouldForwardProp: (prop) => prop !== 'selected'
})<{ selected?: boolean; }>(({ theme, selected }) => ({
    color: selected ? theme.palette.primary.main : "inherit",
    fontSize: "20px",
    lineHeight: "24px",
    fontWeight: "600",
    fontFamily: "Jura",
    minWidth: "auto",
    height: "17px",
    padding: 0,
    "&:hover": { background: "transparent" },
    "&& .MuiTouchRipple-child": { backgroundColor: "transparent" },
    cursor: selected ? "default" : "pointer"
}),
);