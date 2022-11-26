import {
    Box,
    Typography
} from "@mui/material";
import { useTranslation } from "react-i18next";

import { useNavigate } from "react-router-dom"

import furnace_1 from "../../../assets/backgrounds/production/furnace-1.png"
import furnace_2 from "../../../assets/backgrounds/production/furnace-2.png"
import furnace_3 from "../../../assets/backgrounds/production/furnace-3.png"
import furnace_4 from "../../../assets/backgrounds/production/furnace-4.png"
import furnace_5 from "../../../assets/backgrounds/production/furnace-5.png"
import furnace_6 from "../../../assets/backgrounds/production/furnace-6.png"
import arrow_left_orange from "../../../assets/icons/arrow-left-orange.svg"
import AskOrOrderForm from "../../../components/AskOrOrderForm";

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
                {t("pages.production.furnace")}
            </Typography>
            <Typography variant="h5" fontWeight="400" fontFamily="Raleway" display="inline">
                <Typography variant="inherit" fontWeight="inherit" fontFamily="inherit" color="primary" display="inline">{t("pages.furnace.name")}</Typography> {t("pages.furnace.furnace-p1")}
                <br />
                <br />
                {t("pages.furnace.furnace-p2")}
                <br />
                <Typography variant="inherit" lineHeight="35px" fontWeight="inherit" fontFamily="inherit" display="inline" >{t("pages.furnace.furnace-p3")}</Typography>
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", "&>*:nth-of-type(2n)": { mr: "0px" }, mt: "108px" }}>
                {images.map((item, index) => {
                    return (
                        <Box sx={{ width: "629px", height: "511px", mb: "36px", mr: "36px" }}>
                            <img
                                style={{ width: "100%", height: "100%" }}
                                src={item}
                                alt={`furnace_image_${index}`}
                            />
                        </Box>
                    )
                })}
            </Box>
            <Box sx={{ mt: "173px", mb: "211px", px: "347px" }}>
                <AskOrOrderForm />
            </Box>
        </>
    )
}

export default Furnace