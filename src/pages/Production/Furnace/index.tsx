import {
    Box,
    Typography
} from "@mui/material";
import { useTranslation } from "react-i18next";

import { useNavigate } from "react-router-dom"

import AskOrOrderForm from "../../../components/AskOrOrderForm";

import {
    furnace_1,
    furnace_2,
    furnace_3,
    furnace_4,
    furnace_5,
    furnace_6,
} from "../../../assets/backgrounds/production"

import arrow_left_orange from "../../../assets/icons/arrow-left-orange.svg"
import { Helmet } from "react-helmet";

const Furnace = () => {
    const { t } = useTranslation();

    const navigate = useNavigate();

    const images: Array<any> = [
        furnace_1,
        furnace_2,
        furnace_3,
        furnace_4,
        furnace_5,
        furnace_6
    ]

    return (
        <>
            <Helmet>
                <title>{t("pages.production.furnace")}</title>
                <meta name="og:title"
                    content={t("pages.production.furnace")} />
                <meta name="description"
                    content={`${t("pages.furnace.name")} ${t("pages.furnace.furnace-p1")}`} />
                <meta name="og:description"
                    content={`${t("pages.furnace.name")} ${t("pages.furnace.furnace-p1")}`} />
                <link rel="canonical" href="/production/furnace" />
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
            <Typography variant="h2" fontWeight="600" fontFamily="Jura" align="center" sx={{ mt: { lg: "20px", xs: "43px" }, mb: { lg: "37px", xs: "45px" } }}>
                {t("pages.production.furnace")}
            </Typography>
            <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ display: { lg: "inline", xs: "none" } }}>
                <Typography variant="inherit" fontWeight="inherit" fontFamily="inherit" color="primary" display="inline">{t("pages.furnace.name")}</Typography> {t("pages.furnace.furnace-p1")}
                <br />
                <br />
                {t("pages.furnace.furnace-p2")}
                <br />
                <Typography variant="inherit" lineHeight="35px" fontWeight="inherit" fontFamily="inherit" display="inline" >{t("pages.furnace.furnace-p3")}</Typography>
            </Typography>
            <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ display: { lg: "none", xs: "inline" } }}>
                <Typography variant="inherit" fontWeight="inherit" fontFamily="inherit" color="primary" display="inline">{t("pages.furnace.name")}</Typography> {t("pages.furnace.furnace-p1")}
            </Typography>
            <Box sx={{ display: { lg: "none", xs: "block" }, ml: "25px", mt: "25px" }}>
                <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ mb: "10px", display: "list-item" }}>
                    {t("pages.production.furnace-p1")}
                </Typography>
                <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ mb: "10px", display: "list-item" }}>
                    {t("pages.production.furnace-p2")}
                </Typography>
                <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ mb: "10px", display: "list-item" }}>
                    {t("pages.production.furnace-p3")}
                </Typography>
                <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ display: "list-item" }}>
                    {t("pages.production.furnace-p4")}
                </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", "&>*:nth-of-type(2n)": { mr: "0px" }, mt: { lg: "108px", xs: "20px" } }}>
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
            <Box sx={{ mt: { lg: "125px", xs: "80px" }, mb: { lg: "195px", xs: "80px" }, px: { lg: "347px", md: "155px", xs: "19px" } }}>
                <AskOrOrderForm />
            </Box>
        </>
    )
}

export default Furnace