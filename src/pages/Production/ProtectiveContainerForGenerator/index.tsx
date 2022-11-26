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
            <img
                src={arrow_left_orange}
                alt="arrow_left_orange"
                style={{ marginTop: "80px", cursor: "pointer" }}
                onClick={() => {
                    navigate("/production")
                    window.scrollTo(0, 0);
                }}
            />
            <Typography variant="h2" fontWeight="600" fontFamily="Jura" align="center" sx={{ mt: "20px" }}>
                {t("pages.production.protective-container-for-generator")}
            </Typography>
            <Typography variant="h5" fontWeight="600" fontFamily="Raleway" sx={{ mt: "37px" }}>
                {t("pages.production.protective-container-for-generator-h1")}
                <br />
                <br />
                {t("pages.production.protective-container-for-generator-h1-p1")}
                {t("pages.production.protective-container-for-generator-h1-p2")}
                {t("pages.production.protective-container-for-generator-h1-p3")}
                {t("pages.production.protective-container-for-generator-h1-p4")}
            </Typography>
            <Typography variant="h5" fontWeight="600" fontFamily="Raleway" sx={{ mt: "37px" }}>
                {t("pages.production.protective-container-for-generator-h2")}
            </Typography>
            <Box>
                <Box sx={{ ml: "35px" }}>
                    <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ display: "list-item" }}>
                        {t("pages.production.protective-container-for-generator-h1-p1")}
                    </Typography>
                    <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ display: "list-item" }}>
                        {t("pages.production.protective-container-for-generator-h1-p2")}
                    </Typography>
                    <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ display: "list-item" }}>
                        {t("pages.production.protective-container-for-generator-h1-p3")}
                    </Typography>
                    <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ display: "list-item" }}>
                        {t("pages.production.protective-container-for-generator-h1-p4")}
                    </Typography>
                </Box>
            </Box>
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
            <Box sx={{ mt: "193px", mb: "115px", px: "347px" }}>
                <AskOrOrderForm />
            </Box>
        </>
    )
}

export default ProtectiveContainerForGenerator