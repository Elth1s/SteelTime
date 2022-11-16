import { Box, Typography, useTheme } from "@mui/material"
import { useTranslation } from "react-i18next";

import arrow_right_light from "../../assets/icons/arrow-right-light.svg"
import arrow_right_dark from "../../assets/icons/arrow-right-dark.svg"

export const MoreButton = () => {
    const { t } = useTranslation();
    const { palette } = useTheme();

    return (
        <Box
            sx={{
                width: "105px",
                height: "93px",
                border: `1px solid ${palette.text.primary}`,
                borderRadius: "100px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <Typography variant="h5" fontWeight="500" fontFamily="Raleway" sx={{ mb: "10px" }}>
                {t("components.buttons.more")}
            </Typography>
            <img
                src={palette.mode === "dark" ? arrow_right_light : arrow_right_dark}
                alt="arrow_right_light"
            />
        </Box>
    )
}