import {
    Box,
    Typography
} from "@mui/material";
import { useTranslation } from "react-i18next";

import { useNavigate } from "react-router-dom"

import {
    anchor_blocks_and_foundation_bolts_1,
    anchor_blocks_and_foundation_bolts_2,
    anchor_blocks_and_foundation_bolts_3,
    anchor_blocks_and_foundation_bolts_4,
    anchor_blocks_and_foundation_bolts_5
} from "../../../assets/backgrounds/production"

import arrow_left_orange from "../../../assets/icons/arrow-left-orange.svg"
import AskOrOrderForm from "../../../components/AskOrOrderForm";

const AnchorBlocksAndFoundationBolts = () => {
    const { t } = useTranslation();

    const navigate = useNavigate();

    const images: Array<any> = [
        anchor_blocks_and_foundation_bolts_1,
        anchor_blocks_and_foundation_bolts_2,
        anchor_blocks_and_foundation_bolts_3,
        anchor_blocks_and_foundation_bolts_4,
        anchor_blocks_and_foundation_bolts_5
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
            <Typography variant="h2" fontWeight="600" fontFamily="Jura" align="center" sx={{ width: { lg: "100%", md: "100%", xs: "220px" }, mx: "auto", mt: { lg: "20px", xs: "40px" }, mb: { lg: "37px", xs: "30px" } }}>
                {t("pages.production.building-metal-structures-p2")}
            </Typography>
            <Typography variant="h5" fontWeight="400" fontFamily="Raleway">
                <Typography variant="inherit" fontWeight="inherit" fontFamily="inherit" color="primary" display="inline">{t("pages.anchor-blocks-and-foundation-bolts.name")}</Typography> {t("pages.anchor-blocks-and-foundation-bolts.anchor-blocks-and-foundation-bolts-p")}
            </Typography>
            <Box sx={{ ml: "25px", mt: "10px" }}>
                <Typography component="p" variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ display: "list-item" }}>
                    {t("pages.anchor-blocks-and-foundation-bolts.anchor-blocks-and-foundation-bolts-p1")}
                </Typography>
                <Typography component="p" variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ display: "list-item" }}>
                    {t("pages.anchor-blocks-and-foundation-bolts.anchor-blocks-and-foundation-bolts-p2")}
                </Typography>
                <Typography component="p" variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ display: "list-item" }}>
                    {t("pages.anchor-blocks-and-foundation-bolts.anchor-blocks-and-foundation-bolts-p3")}
                </Typography>
                <Typography component="p" variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ display: "list-item" }}>
                    {t("pages.anchor-blocks-and-foundation-bolts.anchor-blocks-and-foundation-bolts-p4")}
                </Typography>
            </Box>
            <Box sx={{ display: "flex", flexWrap: "wrap", "&>*:nth-of-type(2n)": { mr: "0px" }, justifyContent: "center", mt: { lg: "80px", xs: "50px" } }}>
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
            <Box sx={{ mt: { lg: "153px", xs: "80px" }, mb: { lg: "281px", xs: "80px" }, px: { lg: "347px", md: "155px", xs: "19px" } }}>
                <AskOrOrderForm />
            </Box>
        </>
    )
}

export default AnchorBlocksAndFoundationBolts