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
            <img
                src={arrow_left_orange}
                alt="arrow_left_orange"
                style={{ marginTop: "80px", cursor: "pointer" }}
                onClick={() => {
                    navigate("/production")
                    window.scrollTo(0, 0);
                }}
            />
            <Typography variant="h2" fontWeight="600" fontFamily="Jura" align="center" sx={{ mt: "20px", mb: "37px" }}>
                {t("pages.production.designer-steel-products-p2")}
            </Typography>
            <Typography component="p" variant="h5" fontWeight="500" fontFamily="Raleway">
                {t("pages.loft-style-furniture-and-partitions.loft-style-furniture-and-partitions-p")}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", "&>*:nth-of-type(2n)": { mr: "0px" }, justifyContent: "center", mt: "100px" }}>
                {images.map((item, index) => {
                    return (
                        <Box sx={{ width: "629px", height: "511px", mb: "36px", mr: "36px" }}>
                            <img
                                style={{ width: "100%", height: "100%" }}
                                src={item}
                                alt={`image_${index}`}
                            />
                        </Box>
                    )
                })}
            </Box>
            <Box sx={{ mt: "176px", mb: "221px", px: "347px" }}>
                <AskOrOrderForm />
            </Box>
        </>
    )
}

export default LoftStyleFurnitureAndPartitions