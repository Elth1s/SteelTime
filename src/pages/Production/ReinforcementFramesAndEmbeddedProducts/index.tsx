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
                {t("pages.production.building-metal-structures-p1")}
            </Typography>
            <Typography component="p" variant="h5" fontWeight="500" fontFamily="Raleway">
                {t("pages.reinforcement-frames-and-embedded-products.reinforcement-frames-and-embedded-products-p")}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", "&>*:nth-of-type(2n)": { mr: "0px" }, mt: "80px" }}>
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
            <Box sx={{ mt: "153px", mb: "281px", px: "347px" }}>
                <AskOrOrderForm />
            </Box>
        </>
    )
}

export default ReinforcementFramesAndEmbeddedProducts