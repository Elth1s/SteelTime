import {
    Box,
    alpha,
    Typography
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useNavigate } from "react-router-dom"

import {
    loft_style_furniture_and_partitions_1,
    loft_style_furniture_and_partitions_2,
    loft_style_furniture_and_partitions_3,
    loft_style_furniture_and_partitions_4,
    loft_style_furniture_and_partitions_5,
    loft_style_furniture_and_partitions_6,
    loft_style_furniture_and_partitions_7,
    loft_style_furniture_and_partitions_8,
    loft_style_furniture_and_partitions_9,
    loft_style_furniture_and_partitions_10,
    loft_style_furniture_and_partitions_11,
    loft_style_furniture_and_partitions_12,
    loft_style_furniture_and_partitions_13,
    loft_style_furniture_and_partitions_14,
    loft_style_furniture_and_partitions_15
} from "../../../assets/backgrounds/production"

import arrow_left_orange from "../../../assets/icons/arrow-left-orange.svg"
import arrow_down_orange from "../../../assets/icons/arrow-down-orange.svg"
import AskOrOrderForm from "../../../components/AskOrOrderForm";

const LoftStyleFurnitureAndPartitions = () => {
    const { t } = useTranslation();

    const navigate = useNavigate();

    const [showAllImages, setShowAllImages] = useState(false)

    const images: Array<any> = [
        loft_style_furniture_and_partitions_1,
        loft_style_furniture_and_partitions_2,
        loft_style_furniture_and_partitions_3,
        loft_style_furniture_and_partitions_4,
        loft_style_furniture_and_partitions_5,
        loft_style_furniture_and_partitions_6,
        loft_style_furniture_and_partitions_7,
        loft_style_furniture_and_partitions_8,
        loft_style_furniture_and_partitions_9,
        loft_style_furniture_and_partitions_10,
        loft_style_furniture_and_partitions_11,
        loft_style_furniture_and_partitions_12,
        loft_style_furniture_and_partitions_13,
        loft_style_furniture_and_partitions_14,
        loft_style_furniture_and_partitions_15,
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
            <Typography variant="h2" fontWeight="600" fontFamily="Jura" align="center" sx={{ mt: { lg: "20px", xs: "40px" }, mb: { lg: "37px", xs: "30px" } }}>
                {t("pages.production.designer-steel-products-p2")}
            </Typography>
            <Typography variant="h5" fontWeight="400" fontFamily="Raleway">
                <Typography variant="inherit" fontWeight="inherit" fontFamily="inherit" color="primary" display="inline">{t("pages.loft-style-furniture-and-partitions.name")}</Typography> {t("pages.loft-style-furniture-and-partitions.loft-style-furniture-and-partitions-p")}
            </Typography>
            <Box sx={{ ml: "25px", mt: "10px" }}>
                <Typography component="p" variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ display: "list-item" }}>
                    {t("pages.loft-style-furniture-and-partitions.loft-style-furniture-and-partitions-p1")}
                </Typography>
                <Typography component="p" variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ display: "list-item" }}>
                    {t("pages.loft-style-furniture-and-partitions.loft-style-furniture-and-partitions-p2")}
                </Typography>
                <Typography component="p" variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ display: "list-item" }}>
                    {t("pages.loft-style-furniture-and-partitions.loft-style-furniture-and-partitions-p3")}
                </Typography>
                <Typography component="p" variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ display: "list-item" }}>
                    {t("pages.loft-style-furniture-and-partitions.loft-style-furniture-and-partitions-p4")}
                </Typography>
            </Box>
            <Box sx={{ position: "relative" }}>
                <Box sx={{ display: { lg: "flex", md: "none", xs: "none" }, flexWrap: "wrap", "&>*:nth-of-type(2n)": { mr: "0px" }, justifyContent: "center", mt: { lg: "100px", xs: "30px" } }}>
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
                <Box sx={{ display: { lg: "none", md: "flex", xs: "none" }, flexWrap: "wrap", "&>*:nth-of-type(2n)": { mr: "0px" }, justifyContent: "center", mt: { lg: "100px", xs: "30px" } }}>
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
                <Box sx={{ display: { lg: "none", md: "none", xs: "flex" }, flexWrap: "wrap", "&>*:nth-of-type(2n)": { mr: "0px" }, justifyContent: "center", mt: { lg: "100px", xs: "30px" } }}>
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
            <Box sx={{ mt: { lg: "176px", xs: "80px" }, mb: { lg: "221px", xs: "80px" }, px: { lg: "347px", md: "155px", xs: "19px" } }}>
                <AskOrOrderForm />
            </Box>
        </>
    )
}

export default LoftStyleFurnitureAndPartitions