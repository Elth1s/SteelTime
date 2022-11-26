import { Box, Button, Typography, useTheme } from "@mui/material"
import { useTranslation } from "react-i18next";

import arrow_right_light from "../../assets/icons/arrow-right-light.svg"
import arrow_right_dark from "../../assets/icons/arrow-right-dark.svg"
import { FC } from "react";
import { useNavigate } from "react-router-dom";

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

interface ProductionProps {
    link?: string,
    marginRight?: string
}

export const OrderButton: FC<ProductionProps> = ({ marginRight }) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    return (
        <Button
            variant="contained"
            sx={{
                height: "39px",
                borderRadius: 0,
                textTransform: "none",
                fontSize: "16px",
                marginRight
            }}
            onClick={() => {
                navigate("order")
                window.scrollTo(0, 0);
            }}
        >
            {t("components.buttons.order")}
        </Button>
    )
}

export const DetailsButton: FC<ProductionProps> = ({ link }) => {
    const { t } = useTranslation();

    const navigate = useNavigate();

    return (
        <Button
            variant="contained"
            sx={{
                height: "39px",
                borderRadius: 0,
                textTransform: "none",
                fontSize: "16px"
            }}
            onClick={() => {
                if (link) {
                    navigate(link)
                    window.scrollTo(0, 0);
                }
            }}
        >
            {t("components.buttons.details")}
        </Button>
    )
}