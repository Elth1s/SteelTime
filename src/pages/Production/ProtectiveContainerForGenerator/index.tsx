import {
    Box,
    Typography
} from "@mui/material";
import { useTranslation } from "react-i18next";

import { useNavigate } from "react-router-dom"

import AskOrOrderForm from "../../../components/AskOrOrderForm";

import protective_container_for_generator_1 from "../../../assets/backgrounds/production/protective-container-for-generator-1.png"
import protective_container_for_generator_2 from "../../../assets/backgrounds/production/protective-container-for-generator-2.png"
import protective_container_for_generator_3 from "../../../assets/backgrounds/production/protective-container-for-generator-3.png"
import protective_container_for_generator_4 from "../../../assets/backgrounds/production/protective-container-for-generator-4.png"
import protective_container_for_generator_5 from "../../../assets/backgrounds/production/protective-container-for-generator-5.png"
import protective_container_for_generator_6 from "../../../assets/backgrounds/production/protective-container-for-generator-6.png"
import protective_container_for_generator_7 from "../../../assets/backgrounds/production/protective-container-for-generator-7.png"
import protective_container_for_generator_8 from "../../../assets/backgrounds/production/protective-container-for-generator-8.png"
import protective_container_for_generator_9 from "../../../assets/backgrounds/production/protective-container-for-generator-9.png"
import protective_container_for_generator_10 from "../../../assets/backgrounds/production/protective-container-for-generator-10.png"

import arrow_left_orange from "../../../assets/icons/arrow-left-orange.svg"

const ProtectiveContainerForGenerator = () => {
    const { t } = useTranslation();

    const navigate = useNavigate();

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
            <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", "&>*:nth-of-type(2n)": { mr: "0px" }, mt: { lg: "80px", xs: "30px" } }}>
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
            <Box sx={{ mt: { lg: "193px", xs: "80px" }, mb: { lg: "115px", xs: "80px" }, px: { lg: "347px", md: "155px", xs: "19px" } }}>
                <AskOrOrderForm />
            </Box>
        </>
    )
}

export default ProtectiveContainerForGenerator