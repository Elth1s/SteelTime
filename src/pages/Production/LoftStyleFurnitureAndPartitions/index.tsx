import {
    Box,
    Typography
} from "@mui/material";
import { useTranslation } from "react-i18next";

import { useNavigate } from "react-router-dom"

import loft_style_furniture_and_partitions_1 from "../../../assets/backgrounds/production/loft-style-furniture-and-partitions-1.png"
import loft_style_furniture_and_partitions_2 from "../../../assets/backgrounds/production/loft-style-furniture-and-partitions-2.png"
import loft_style_furniture_and_partitions_3 from "../../../assets/backgrounds/production/loft-style-furniture-and-partitions-3.png"
import loft_style_furniture_and_partitions_4 from "../../../assets/backgrounds/production/loft-style-furniture-and-partitions-4.png"
import loft_style_furniture_and_partitions_5 from "../../../assets/backgrounds/production/loft-style-furniture-and-partitions-5.png"
import loft_style_furniture_and_partitions_6 from "../../../assets/backgrounds/production/loft-style-furniture-and-partitions-6.png"
import loft_style_furniture_and_partitions_7 from "../../../assets/backgrounds/production/loft-style-furniture-and-partitions-7.png"
import loft_style_furniture_and_partitions_8 from "../../../assets/backgrounds/production/loft-style-furniture-and-partitions-8.png"
import loft_style_furniture_and_partitions_9 from "../../../assets/backgrounds/production/loft-style-furniture-and-partitions-9.png"
import loft_style_furniture_and_partitions_10 from "../../../assets/backgrounds/production/loft-style-furniture-and-partitions-10.png"
import loft_style_furniture_and_partitions_11 from "../../../assets/backgrounds/production/loft-style-furniture-and-partitions-11.png"
import loft_style_furniture_and_partitions_12 from "../../../assets/backgrounds/production/loft-style-furniture-and-partitions-12.png"
import loft_style_furniture_and_partitions_13 from "../../../assets/backgrounds/production/loft-style-furniture-and-partitions-13.png"
import loft_style_furniture_and_partitions_14 from "../../../assets/backgrounds/production/loft-style-furniture-and-partitions-14.png"
import loft_style_furniture_and_partitions_15 from "../../../assets/backgrounds/production/loft-style-furniture-and-partitions-15.png"
import arrow_left_orange from "../../../assets/icons/arrow-left-orange.svg"
import AskOrOrderForm from "../../../components/AskOrOrderForm";

const LoftStyleFurnitureAndPartitions = () => {
    const { t } = useTranslation();

    const navigate = useNavigate();

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
            <Box sx={{ display: "flex", flexWrap: "wrap", "&>*:nth-of-type(2n)": { mr: "0px" }, justifyContent: "center", mt: { lg: "100px", xs: "30px" } }}>
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
            <Box sx={{ mt: { lg: "176px", xs: "80px" }, mb: { lg: "221px", xs: "80px" }, px: { lg: "347px", md: "155px", xs: "19px" } }}>
                <AskOrOrderForm />
            </Box>
        </>
    )
}

export default LoftStyleFurnitureAndPartitions