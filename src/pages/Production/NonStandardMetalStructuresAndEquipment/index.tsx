import {
    Box,
    alpha,
    Typography
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useNavigate } from "react-router-dom"

import {
    non_standard_metal_structures_and_equipment_1,
    non_standard_metal_structures_and_equipment_2,
    non_standard_metal_structures_and_equipment_3,
    non_standard_metal_structures_and_equipment_4,
    non_standard_metal_structures_and_equipment_5,
    non_standard_metal_structures_and_equipment_6,
    non_standard_metal_structures_and_equipment_7,
    non_standard_metal_structures_and_equipment_8,
    non_standard_metal_structures_and_equipment_9,
    non_standard_metal_structures_and_equipment_10,
    non_standard_metal_structures_and_equipment_11,
    non_standard_metal_structures_and_equipment_12,
    non_standard_metal_structures_and_equipment_13,
    non_standard_metal_structures_and_equipment_14,
    non_standard_metal_structures_and_equipment_15,
    non_standard_metal_structures_and_equipment_16,
    non_standard_metal_structures_and_equipment_17,
    non_standard_metal_structures_and_equipment_18,
    non_standard_metal_structures_and_equipment_19,
    non_standard_metal_structures_and_equipment_20,
    non_standard_metal_structures_and_equipment_21,
    non_standard_metal_structures_and_equipment_22
} from "../../../assets/backgrounds/production"

import arrow_left_orange from "../../../assets/icons/arrow-left-orange.svg"
import arrow_down_orange from "../../../assets/icons/arrow-down-orange.svg"
import AskOrOrderForm from "../../../components/AskOrOrderForm";
import { Helmet } from "react-helmet";

const NonStandardMetalStructuresAndEquipment = () => {
    const { t } = useTranslation();

    const navigate = useNavigate();

    const [showAllImages, setShowAllImages] = useState(false)

    const images: Array<any> = [
        non_standard_metal_structures_and_equipment_1,
        non_standard_metal_structures_and_equipment_2,
        non_standard_metal_structures_and_equipment_3,
        non_standard_metal_structures_and_equipment_4,
        non_standard_metal_structures_and_equipment_5,
        non_standard_metal_structures_and_equipment_6,
        non_standard_metal_structures_and_equipment_7,
        non_standard_metal_structures_and_equipment_8,
        non_standard_metal_structures_and_equipment_9,
        non_standard_metal_structures_and_equipment_10,
        non_standard_metal_structures_and_equipment_11,
        non_standard_metal_structures_and_equipment_12,
        non_standard_metal_structures_and_equipment_13,
        non_standard_metal_structures_and_equipment_14,
        non_standard_metal_structures_and_equipment_15,
        non_standard_metal_structures_and_equipment_16,
        non_standard_metal_structures_and_equipment_17,
        non_standard_metal_structures_and_equipment_18,
        non_standard_metal_structures_and_equipment_19,
        non_standard_metal_structures_and_equipment_20,
        non_standard_metal_structures_and_equipment_21,
        non_standard_metal_structures_and_equipment_22
    ]

    return (
        <>
            <Helmet>
                <title>{t("pages.production.non-standard-metal-structures-and-equipment")}</title>
                <meta name="og:title"
                    content={t("pages.production.non-standard-metal-structures-and-equipment")} />
                <meta name="description"
                    content={`${t("pages.non-standard-metal-structures-and-equipment.non-standard-metal-structures-and-equipment-pf")} ${t("pages.non-standard-metal-structures-and-equipment.name")} ${t("pages.non-standard-metal-structures-and-equipment.non-standard-metal-structures-and-equipment-ps")}`} />
                <meta name="og:description"
                    content={`${t("pages.non-standard-metal-structures-and-equipment.non-standard-metal-structures-and-equipment-pf")} ${t("pages.non-standard-metal-structures-and-equipment.name")} ${t("pages.non-standard-metal-structures-and-equipment.non-standard-metal-structures-and-equipment-ps")}`} />
                <link rel="canonical" href="/production/non-standard-metal-structures-and-equipment" />
            </Helmet>
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
            <Typography variant="h2" fontWeight="600" fontFamily="Jura" align="center" sx={{ width: { lg: "100%", md: "100%", xs: "330px" }, mx: "auto", mt: { lg: "20px", xs: "40px" }, mb: { lg: "37px", xs: "30px" } }}>
                {t("pages.production.non-standard-metal-structures-and-equipment")}
            </Typography>
            <Typography variant="h5" fontWeight="400" fontFamily="Raleway">
                {t("pages.non-standard-metal-structures-and-equipment.non-standard-metal-structures-and-equipment-pf")} <Typography variant="inherit" fontWeight="inherit" fontFamily="inherit" color="primary" display="inline">{t("pages.non-standard-metal-structures-and-equipment.name")}</Typography> {t("pages.non-standard-metal-structures-and-equipment.non-standard-metal-structures-and-equipment-ps")}
            </Typography>
            <Box sx={{ ml: "25px", mt: "10px" }}>
                <Typography component="p" variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ display: "list-item" }}>
                    {t("pages.non-standard-metal-structures-and-equipment.non-standard-metal-structures-and-equipment-p1")}
                </Typography>
                <Typography component="p" variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ display: "list-item" }}>
                    {t("pages.non-standard-metal-structures-and-equipment.non-standard-metal-structures-and-equipment-p2")}
                </Typography>
                <Typography component="p" variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ mt: "10px", display: "list-item" }}>
                    {t("pages.non-standard-metal-structures-and-equipment.non-standard-metal-structures-and-equipment-p3")}
                </Typography>
                <Typography component="p" variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ display: "list-item" }}>
                    {t("pages.non-standard-metal-structures-and-equipment.non-standard-metal-structures-and-equipment-p4")}
                </Typography>
                <Typography component="p" variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ display: "list-item" }}>
                    {t("pages.non-standard-metal-structures-and-equipment.non-standard-metal-structures-and-equipment-p5")}
                </Typography>
                <Typography component="p" variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ mt: "10px", display: "list-item" }}>
                    {t("pages.non-standard-metal-structures-and-equipment.non-standard-metal-structures-and-equipment-p6")}
                </Typography>
                <Typography component="p" variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ display: "list-item" }}>
                    {t("pages.non-standard-metal-structures-and-equipment.non-standard-metal-structures-and-equipment-p7")}
                </Typography>
                <Typography component="p" variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ mt: "10px", display: "list-item" }}>
                    {t("pages.non-standard-metal-structures-and-equipment.non-standard-metal-structures-and-equipment-p8")}
                </Typography>
                <Typography component="p" variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ display: "list-item" }}>
                    {t("pages.non-standard-metal-structures-and-equipment.non-standard-metal-structures-and-equipment-p9")}
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
            <Box sx={{ mt: { lg: "148px", xs: "80px" }, mb: { lg: "171px", xs: "80px" }, px: { lg: "347px", md: "155px", xs: "19px" } }}>
                <AskOrOrderForm />
            </Box>
        </>
    )
}

export default NonStandardMetalStructuresAndEquipment