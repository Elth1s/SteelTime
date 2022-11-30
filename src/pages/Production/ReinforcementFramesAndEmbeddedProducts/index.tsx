import {
    Box,
    Typography
} from "@mui/material";
import { useTranslation } from "react-i18next";

import { useNavigate } from "react-router-dom"

import reinforcement_frames_and_embedded_products_1 from "../../../assets/backgrounds/production/reinforcement-frames-and-embedded-products-1.png"
import reinforcement_frames_and_embedded_products_2 from "../../../assets/backgrounds/production/reinforcement-frames-and-embedded-products-2.png"
import reinforcement_frames_and_embedded_products_3 from "../../../assets/backgrounds/production/reinforcement-frames-and-embedded-products-3.png"
import reinforcement_frames_and_embedded_products_4 from "../../../assets/backgrounds/production/reinforcement-frames-and-embedded-products-4.png"
import reinforcement_frames_and_embedded_products_5 from "../../../assets/backgrounds/production/reinforcement-frames-and-embedded-products-5.png"
import reinforcement_frames_and_embedded_products_6 from "../../../assets/backgrounds/production/reinforcement-frames-and-embedded-products-6.png"
import reinforcement_frames_and_embedded_products_7 from "../../../assets/backgrounds/production/reinforcement-frames-and-embedded-products-7.png"
import reinforcement_frames_and_embedded_products_8 from "../../../assets/backgrounds/production/reinforcement-frames-and-embedded-products-8.png"
import reinforcement_frames_and_embedded_products_9 from "../../../assets/backgrounds/production/reinforcement-frames-and-embedded-products-9.png"
import reinforcement_frames_and_embedded_products_10 from "../../../assets/backgrounds/production/reinforcement-frames-and-embedded-products-10.png"
import reinforcement_frames_and_embedded_products_11 from "../../../assets/backgrounds/production/reinforcement-frames-and-embedded-products-11.png"
import reinforcement_frames_and_embedded_products_12 from "../../../assets/backgrounds/production/reinforcement-frames-and-embedded-products-12.png"
import arrow_left_orange from "../../../assets/icons/arrow-left-orange.svg"
import AskOrOrderForm from "../../../components/AskOrOrderForm";

const ReinforcementFramesAndEmbeddedProducts = () => {
    const { t } = useTranslation();

    const navigate = useNavigate();

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
            <Typography variant="h2" fontWeight="600" fontFamily="Jura" align="center" sx={{ width: { lg: "100%", xs: "210px" }, mx: "auto", mt: { lg: "20px", xs: "40px" }, mb: { lg: "37px", xs: "30px" } }}>
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
            <Box sx={{ display: "flex", flexWrap: "wrap", "&>*:nth-of-type(2n)": { mr: "0px" }, mt: { lg: "80px", xs: "50px" } }}>
                {images.map((item, index) => {
                    return (
                        <Box key={`image_${index}`} sx={{ width: { lg: "629px", xs: "346px" }, height: { lg: "511px", xs: "281px" }, mb: { lg: "36px", xs: "10px" }, mr: { lg: "36px", xs: "0px" } }}>
                            <img
                                style={{ width: "100%", height: "100%" }}
                                src={item}
                                alt={`image_${index}`}
                            />
                        </Box>
                    )
                })}
            </Box>
            <Box sx={{ mt: { lg: "153px", xs: "80px" }, mb: { lg: "281px", xs: "80px" }, px: { lg: "347px", xs: "19px" } }}>
                <AskOrOrderForm />
            </Box>
        </>
    )
}

export default ReinforcementFramesAndEmbeddedProducts