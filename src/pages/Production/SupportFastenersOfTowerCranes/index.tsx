import {
    Box,
    Typography
} from "@mui/material";
import { useTranslation } from "react-i18next";

import { useNavigate } from "react-router-dom"

import support_fasteners_of_tower_cranes_1 from "../../../assets/backgrounds/production/support-fasteners-of-tower-cranes-1.png"
import support_fasteners_of_tower_cranes_2 from "../../../assets/backgrounds/production/support-fasteners-of-tower-cranes-2.png"
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
                {t("pages.production.building-metal-structures-p3")}
            </Typography>
            <Typography component="p" variant="h5" fontWeight="500" fontFamily="Raleway">
                {t("pages.support-fasteners-of-tower-cranes.support-fasteners-of-tower-cranes-p")}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", "&>*:nth-of-type(2n)": { mr: "0px" }, mt: "100px" }}>
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
            <Box sx={{ mt: "198px", mb: "221px", px: "347px" }}>
                <AskOrOrderForm />
            </Box>
        </>
    )
}

export default SupportFastenersOfTowerCranes