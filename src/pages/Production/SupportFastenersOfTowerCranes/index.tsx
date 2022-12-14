import {
    Box,
    Typography
} from "@mui/material";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

import { useNavigate } from "react-router-dom"

import {
    support_fasteners_of_tower_cranes_1,
    support_fasteners_of_tower_cranes_2
} from "../../../assets/backgrounds/production"

import arrow_left_orange from "../../../assets/icons/arrow-left-orange.svg"
import AskOrOrderForm from "../../../components/AskOrOrderForm";

const SupportFastenersOfTowerCranes = () => {
    const { t } = useTranslation();

    const navigate = useNavigate();

    const images: Array<any> = [
        support_fasteners_of_tower_cranes_1,
        support_fasteners_of_tower_cranes_2
    ]

    return (
        <>
            <Helmet>
                <title>{t("pages.production.building-metal-structures-p3")}</title>
                <meta name="og:title"
                    content={t("pages.production.building-metal-structures-p3")} />
                <meta name="description"
                    content={`${t("pages.support-fasteners-of-tower-cranes.support-fasteners-of-tower-cranes-pf")} ${t("pages.support-fasteners-of-tower-cranes.name")} ${t("pages.support-fasteners-of-tower-cranes.support-fasteners-of-tower-cranes-ps")}`} />
                <meta name="og:description"
                    content={`${t("pages.support-fasteners-of-tower-cranes.support-fasteners-of-tower-cranes-pf")} ${t("pages.support-fasteners-of-tower-cranes.name")} ${t("pages.support-fasteners-of-tower-cranes.support-fasteners-of-tower-cranes-ps")}`} />
                <link rel="canonical" href="/production/support-fasteners-of-tower-cranes" />
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
            <Typography variant="h2" fontWeight="600" fontFamily="Jura" align="center" sx={{ width: { lg: "100%", md: "100%", xs: "198px" }, mx: "auto", mt: { lg: "20px", xs: "40px" }, mb: { lg: "37px", xs: "30px" } }}>
                {t("pages.production.building-metal-structures-p3")}
            </Typography>
            <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ display: { lg: "block", xs: "none" } }}>
                {t("pages.support-fasteners-of-tower-cranes.support-fasteners-of-tower-cranes-pf")}<Typography variant="inherit" fontWeight="inherit" fontFamily="inherit" color="primary" display="inline"> {t("pages.support-fasteners-of-tower-cranes.name")}</Typography> {t("pages.support-fasteners-of-tower-cranes.support-fasteners-of-tower-cranes-ps")}
            </Typography>
            <Typography variant="h6" fontWeight="400" fontFamily="Raleway" sx={{ display: { lg: "none", xs: "block" } }}>
                {t("pages.support-fasteners-of-tower-cranes.support-fasteners-of-tower-cranes-pf")}<Typography variant="inherit" fontWeight="inherit" fontFamily="inherit" color="primary" display="inline"> {t("pages.support-fasteners-of-tower-cranes.name")}</Typography> {t("pages.support-fasteners-of-tower-cranes.support-fasteners-of-tower-cranes-ps")}
            </Typography>
            <Box sx={{ ml: "25px", mt: "10px" }}>
                <Typography component="p" variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ display: "list-item" }}>
                    {t("pages.support-fasteners-of-tower-cranes.support-fasteners-of-tower-cranes-p1")}
                </Typography>
                <Typography component="p" variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ display: "list-item" }}>
                    {t("pages.support-fasteners-of-tower-cranes.support-fasteners-of-tower-cranes-p2")}
                </Typography>
                <Typography component="p" variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ display: "list-item" }}>
                    {t("pages.support-fasteners-of-tower-cranes.support-fasteners-of-tower-cranes-p3")}
                </Typography>
                <Typography component="p" variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ display: "list-item" }}>
                    {t("pages.support-fasteners-of-tower-cranes.support-fasteners-of-tower-cranes-p4")}
                </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", "&>*:nth-of-type(2n)": { mr: "0px" }, mt: { lg: "100px", xs: "50px" } }}>
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
            <Box sx={{ mt: { lg: "198px", xs: "80px" }, mb: { lg: "221px", xs: "80px" }, px: { lg: "347px", md: "155px", xs: "19px" } }}>
                <AskOrOrderForm />
            </Box>
        </>
    )
}

export default SupportFastenersOfTowerCranes