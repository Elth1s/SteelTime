import { Box, Typography } from "@mui/material"
import { useTranslation } from "react-i18next";

import arrow_right_light from "../../assets/icons/arrow-right-light.svg"

export const MoreButton = () => {
    const { t } = useTranslation();
    return (
        <Box
            sx={{
                width: "105px",
                height: "93px",
                border: "1px solid #FCFDFF",
                borderRadius: "100px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <Typography variant="h4" fontWeight="500" fontFamily="Raleway" sx={{ mb: "10px" }}>
                {t("components.buttons.more")}
            </Typography>
            <img
                src={arrow_right_light}
                alt="arrow_right_light"
            />
        </Box>
    )
}