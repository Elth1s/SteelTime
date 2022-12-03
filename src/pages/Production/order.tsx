import { Box } from "@mui/material"
import { useNavigate } from "react-router-dom"

import AskOrOrderForm from "../../components/AskOrOrderForm"

import arrow_left_orange from "../../assets/icons/arrow-left-orange.svg"
import { useTranslation } from "react-i18next"
import { Helmet } from "react-helmet"

const ProductionOrder = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <>
            <Helmet>
                <title>{t("meta-info.production.title")}</title>
                <meta name="og:title"
                    content={t("meta-info.production.title")} />
                <meta name="description"
                    content={t("meta-info.production.description")} />
                <meta name="og:description"
                    content={t("meta-info.production.description")} />
                <meta name="keywords"
                    content={t("key-words.home")} />
                <link rel="canonical" href="/production/order" />
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
            <Box sx={{ mt: { lg: "125px", xs: "45px" }, mb: { lg: "195px", xs: "187px" }, px: { lg: "347px", md: "155px", xs: "19px" } }}>
                <AskOrOrderForm />
            </Box>
        </>
    )
}

export default ProductionOrder