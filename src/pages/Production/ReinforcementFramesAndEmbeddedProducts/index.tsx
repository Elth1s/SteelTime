import {
    Box,
    Typography,
    alpha
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useNavigate } from "react-router-dom"

import {
    reinforcement_frames_and_embedded_products_1,
    reinforcement_frames_and_embedded_products_2,
    reinforcement_frames_and_embedded_products_3,
    reinforcement_frames_and_embedded_products_4,
    reinforcement_frames_and_embedded_products_5,
    reinforcement_frames_and_embedded_products_6,
    reinforcement_frames_and_embedded_products_7,
    reinforcement_frames_and_embedded_products_8,
    reinforcement_frames_and_embedded_products_9,
    reinforcement_frames_and_embedded_products_10,
    reinforcement_frames_and_embedded_products_11,
    reinforcement_frames_and_embedded_products_12,
} from "../../../assets/backgrounds/production"

import arrow_left_orange from "../../../assets/icons/arrow-left-orange.svg"
import arrow_down_orange from "../../../assets/icons/arrow-down-orange.svg"
import AskOrOrderForm from "../../../components/AskOrOrderForm";

const ReinforcementFramesAndEmbeddedProducts = () => {
    const { t } = useTranslation();

    const navigate = useNavigate();

    const [showAllImages, setShowAllImages] = useState(false)

    const images: Array<any> = [
        reinforcement_frames_and_embedded_products_1,
        reinforcement_frames_and_embedded_products_2,
        reinforcement_frames_and_embedded_products_3,
        reinforcement_frames_and_embedded_products_4,
        reinforcement_frames_and_embedded_products_5,
        reinforcement_frames_and_embedded_products_6,
        reinforcement_frames_and_embedded_products_7,
        reinforcement_frames_and_embedded_products_8,
        reinforcement_frames_and_embedded_products_9,
        reinforcement_frames_and_embedded_products_10,
        reinforcement_frames_and_embedded_products_11,
        reinforcement_frames_and_embedded_products_12
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
            <Typography variant="h2" fontWeight="600" fontFamily="Jura" align="center" sx={{ width: { lg: "100%", md: "100%", xs: "210px" }, mx: "auto", mt: { lg: "20px", xs: "40px" }, mb: { lg: "37px", xs: "30px" } }}>
                {t("pages.production.building-metal-structures-p1")}
            </Typography>
            <Typography variant="h5" fontWeight="400" fontFamily="Raleway" >
                <Typography variant="inherit" fontWeight="inherit" fontFamily="inherit" color="primary" display="inline">{t("pages.reinforcement-frames-and-embedded-products.name")}</Typography> {t("pages.reinforcement-frames-and-embedded-products.reinforcement-frames-and-embedded-products-p")}
            </Typography>
            <Box sx={{ ml: "25px", mt: "10px" }}>
                <Typography component="p" variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ display: "list-item" }}>
                    {t("pages.reinforcement-frames-and-embedded-products.reinforcement-frames-and-embedded-products-p1")}
                </Typography>
                <Typography component="p" variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ display: "list-item" }}>
                    {t("pages.reinforcement-frames-and-embedded-products.reinforcement-frames-and-embedded-products-p2")}
                </Typography>
                <Typography component="p" variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ display: "list-item" }}>
                    {t("pages.reinforcement-frames-and-embedded-products.reinforcement-frames-and-embedded-products-p3")}
                </Typography>
                <Typography component="p" variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ display: "list-item" }}>
                    {t("pages.reinforcement-frames-and-embedded-products.reinforcement-frames-and-embedded-products-p4")}
                </Typography>
            </Box>
            <Box sx={{ position: "relative" }}>
                <Box sx={{ display: { lg: "flex", md: "none", xs: "none" }, justifyContent: "center", flexWrap: "wrap", "&>*:nth-of-type(2n)": { mr: "0px" }, mt: { lg: "80px", xs: "50px" } }}>
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
                <Box sx={{ display: { lg: "none", md: "flex", xs: "none" }, justifyContent: "center", flexWrap: "wrap", "&>*:nth-of-type(2n)": { mr: "0px" }, mt: { lg: "80px", xs: "50px" } }}>
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
                        else
                            return <></>
                    })}
                </Box>
                <Box sx={{ display: { lg: "none", md: "none", xs: "flex" }, justifyContent: "center", flexWrap: "wrap", "&>*:nth-of-type(2n)": { mr: "0px" }, mt: { lg: "80px", xs: "50px" } }}>
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
                        else
                            return <></>
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
            <Box sx={{ mt: { lg: "153px", xs: "80px" }, mb: { lg: "281px", xs: "80px" }, px: { lg: "347px", md: "155px", xs: "19px" } }}>
                <AskOrOrderForm />
            </Box>
        </>
    )
}

export default ReinforcementFramesAndEmbeddedProducts