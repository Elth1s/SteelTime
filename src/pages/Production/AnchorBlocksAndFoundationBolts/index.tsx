import {
    Box,
    Typography
} from "@mui/material";
import { useTranslation } from "react-i18next";

import { useNavigate } from "react-router-dom"

import anchor_blocks_and_foundation_bolts_1 from "../../../assets/backgrounds/production/anchor-blocks-and-foundation-bolts-1.png"
import anchor_blocks_and_foundation_bolts_2 from "../../../assets/backgrounds/production/anchor-blocks-and-foundation-bolts-2.png"
import anchor_blocks_and_foundation_bolts_3 from "../../../assets/backgrounds/production/anchor-blocks-and-foundation-bolts-3.png"
import anchor_blocks_and_foundation_bolts_4 from "../../../assets/backgrounds/production/anchor-blocks-and-foundation-bolts-4.png"
import anchor_blocks_and_foundation_bolts_5 from "../../../assets/backgrounds/production/anchor-blocks-and-foundation-bolts-5.png"
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
                {t("pages.production.building-metal-structures-p2")}
            </Typography>
            <Typography component="p" variant="h5" fontWeight="500" fontFamily="Raleway">
                {t("pages.anchor-blocks-and-foundation-bolts.anchor-blocks-and-foundation-bolts-p")}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", "&>*:nth-of-type(2n)": { mr: "0px" }, justifyContent: "center", mt: "80px" }}>
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

export default AnchorBlocksAndFoundationBolts