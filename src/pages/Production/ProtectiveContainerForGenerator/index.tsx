import {
    Box,
    Typography,
    alpha
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useNavigate } from "react-router-dom"

import AskOrOrderForm from "../../../components/AskOrOrderForm";

import {
    protective_container_for_generator_1,
    protective_container_for_generator_2,
    protective_container_for_generator_3,
    protective_container_for_generator_4,
    protective_container_for_generator_5,
    protective_container_for_generator_6,
    protective_container_for_generator_7,
    protective_container_for_generator_8,
    protective_container_for_generator_9,
    protective_container_for_generator_10
} from "../../../assets/backgrounds/production"

import arrow_left_orange from "../../../assets/icons/arrow-left-orange.svg"
import arrow_down_orange from "../../../assets/icons/arrow-down-orange.svg"

const ProtectiveContainerForGenerator = () => {
    const { t } = useTranslation();

    const navigate = useNavigate();

    const [showAllImages, setShowAllImages] = useState(false)

    const images: Array<any> = [
        protective_container_for_generator_1,
        protective_container_for_generator_2,
        protective_container_for_generator_3,
        protective_container_for_generator_4,
        protective_container_for_generator_5,
        protective_container_for_generator_6,
        protective_container_for_generator_7,
        protective_container_for_generator_8,
        protective_container_for_generator_9,
        protective_container_for_generator_10
    ]

    return (
        <>
            <Box sx={{ display: "flex", mt: { lg: "80px", xs: "50px" } }}>
                <img
                    src={arrow_left_orange}
                    alt="arrow_left_orange"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                        navigate("/production")
                        window.scrollTo(0, 0);
                    }}
                />
            </Box>
            <Typography variant="h2" fontWeight="600" fontFamily="Jura" align="center" sx={{ width: { lg: "100%", md: "100%", xs: "226px" }, mx: "auto", mt: { lg: "20px", xs: "40px" } }}>
                {t("pages.production.protective-container-for-generator")}
            </Typography>
            <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ mt: "37px" }}>
                {t("pages.production.protective-container-for-generator-h1")}
            </Typography>
            <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ mt: "10px" }}>
                {t("pages.production.protective-container-for-generator-h1-p1")}<br />
                {t("pages.production.protective-container-for-generator-h1-p2")}<br />
                {t("pages.production.protective-container-for-generator-h1-p3")}<br />
                {t("pages.production.protective-container-for-generator-h1-p4")}<br />
            </Typography>
            <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ mt: { lg: "37px", xs: "20px" } }}>
                {t("pages.production.protective-container-for-generator-h2")}
            </Typography>
            <Box sx={{ ml: "25px", mt: "10px" }}>
                <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ display: "list-item" }}>
                    {t("pages.production.protective-container-for-generator-h2-p1")}
                </Typography>
                <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ display: "list-item" }}>
                    {t("pages.production.protective-container-for-generator-h2-p2")}
                </Typography>
                <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ display: "list-item" }}>
                    {t("pages.production.protective-container-for-generator-h2-p3")}
                </Typography>
            </Box>
            <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ mt: "15px" }}>
                {t("pages.production.protective-container-for-generator-h3")}
            </Typography>
            <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ mt: "15px" }}>
                {t("pages.production.protective-container-for-generator-h4")}
            </Typography>
            <Box sx={{ position: "relative" }}>
                <Box sx={{ display: { lg: "flex", md: "none", xs: "none" }, justifyContent: "center", flexWrap: "wrap", "&>*:nth-of-type(2n)": { mr: "0px" }, mt: { lg: "80px", xs: "30px" } }}>
                    {images.map((item, index) => {
                        return (
                            <Box key={`image_${index}`} sx={{ width: { lg: "629px", md: "400px", xs: "346px" }, height: { lg: "511px", md: "325px", xs: "281px" }, mb: { lg: "36px", md: "15px", xs: "10px" }, mr: { lg: "36px", md: "30px", xs: "0px" } }}>
                                <img
                                    style={{ width: "100%", height: "100%" }}
                                    src={item}
                                    alt={`image_${index}`}
                                    loading="lazy"
                                />
                            </Box>
                        )
                    })}
                </Box>
                <Box sx={{ display: { lg: "none", md: "flex", xs: "none" }, justifyContent: "center", flexWrap: "wrap", "&>*:nth-of-type(2n)": { mr: "0px" }, mt: { lg: "80px", xs: "30px" } }}>
                    {images.map((item, index) => {
                        if (showAllImages || index < 6)
                            return (
                                <Box key={`image_${index}`} sx={{ width: { lg: "629px", md: "400px", xs: "346px" }, height: { lg: "511px", md: "325px", xs: "281px" }, mb: { lg: "36px", md: "15px", xs: "10px" }, mr: { lg: "36px", md: "30px", xs: "0px" } }}>
                                    <img
                                        style={{ width: "100%", height: "100%" }}
                                        src={item}
                                        alt={`image_${index}`}
                                        loading="lazy"
                                    />
                                </Box>
                            )
                    })}
                </Box>
                <Box sx={{ display: { lg: "none", md: "none", xs: "flex" }, justifyContent: "center", flexWrap: "wrap", "&>*:nth-of-type(2n)": { mr: "0px" }, mt: { lg: "80px", xs: "30px" } }}>
                    {images.map((item, index) => {
                        if (showAllImages || index < 3)
                            return (
                                <Box key={`image_${index}`} sx={{ width: { lg: "629px", md: "400px", xs: "346px" }, height: { lg: "511px", md: "325px", xs: "281px" }, mb: { lg: "36px", md: "15px", xs: "10px" }, mr: { lg: "36px", md: "30px", xs: "0px" } }}>
                                    <img
                                        style={{ width: "100%", height: "100%" }}
                                        src={item}
                                        alt={`image_${index}`}
                                        loading="lazy"
                                    />
                                </Box>
                            )
                    })}
                </Box>
                {!showAllImages && <Box
                    sx={{
                        background: alpha("#111518", 0.7),
                        display: { lg: "none", md: "flex", xs: "inline-flex" },
                        position: "absolute",
                        left: { md: "41%", xs: "29%" },
                        bottom: { md: "15px", xs: "10px" },
                        p: "10px 15px",
                        cursor: "pointer"
                    }}
                    onClick={() => setShowAllImages(true)}
                >
                    <Typography component="h5" fontSize="20px" fontFamily="Jura" fontWeight="600" color="primary" sx={{ mr: "10px" }}>
                        {t("components.buttons.expand")}
                    </Typography>
                    <img
                        src={arrow_down_orange}
                        alt="arrow_down_orange"
                    />
                </Box>}
            </Box>
            <Box sx={{ mt: { lg: "193px", xs: "80px" }, mb: { lg: "115px", xs: "80px" }, px: { lg: "347px", md: "155px", xs: "19px" } }}>
                <AskOrOrderForm />
            </Box>
        </>
    )
}

export default ProtectiveContainerForGenerator