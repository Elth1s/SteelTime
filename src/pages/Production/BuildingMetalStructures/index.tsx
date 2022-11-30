import {
    Box,
    Typography
} from "@mui/material";
import { useTranslation } from "react-i18next";

import { useNavigate } from "react-router-dom"

import building_metal_structures_1 from "../../../assets/backgrounds/production/building-metal-structures-1.png"
import building_metal_structures_2 from "../../../assets/backgrounds/production/building-metal-structures-2.png"
import arrow_left_orange from "../../../assets/icons/arrow-left-orange.svg"
import AskOrOrderForm from "../../../components/AskOrOrderForm";

const BuildingMetalStructures = () => {
    const { t } = useTranslation();

    const navigate = useNavigate();

    const images: Array<any> = [
        building_metal_structures_1,
        building_metal_structures_2
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
            <Typography variant="h2" fontWeight="600" fontFamily="Jura" align="center" sx={{ width: { lg: "100%", xs: "195px" }, mx: "auto", mt: { lg: "20px", xs: "40px" }, mb: { lg: "37px", xs: "30px" } }}>
                {t("pages.production.building-metal-structures")}
            </Typography>
            <Typography variant="h5" fontWeight="400" fontFamily="Raleway">
                <Typography variant="inherit" fontWeight="inherit" fontFamily="inherit" color="primary" display="inline">{t("pages.building-metal-structures.name")}</Typography> {t("pages.building-metal-structures.building-metal-structures-p")}
            </Typography>
            <Box sx={{ ml: "25px", mt: "10px" }}>
                <Typography component="p" variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ display: "list-item" }}>
                    {t("pages.building-metal-structures.building-metal-structures-p1")}
                </Typography>
                <Typography component="p" variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ display: "list-item" }}>
                    {t("pages.building-metal-structures.building-metal-structures-p2")}
                </Typography>
                <Typography component="p" variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ display: "list-item" }}>
                    {t("pages.building-metal-structures.building-metal-structures-p3")}
                </Typography>
                <Typography component="p" variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ display: "list-item" }}>
                    {t("pages.building-metal-structures.building-metal-structures-p4")}
                </Typography>
            </Box>
            <Box sx={{ display: "flex", flexWrap: "wrap", "&>*:nth-of-type(2n)": { mr: "0px" }, mt: { lg: "80px", xs: "30px" } }}>
                {images.map((item, index) => {
                    return (
                        <Box key={`image_${index}`} sx={{ width: { lg: "629px", xs: "346px" }, height: { lg: "511px", xs: "281px" }, mb: { lg: "36px", xs: "10px" }, mr: { lg: "36px", xs: "0px" } }}>
                            <img
                                style={{ width: "100%", height: "100%" }}
                                src={item}
                                alt={`image_${index}`}
                            />
                        </Box>
                    )
                })}
            </Box>
            <Box sx={{ mt: { lg: "141px", xs: "80px" }, mb: { lg: "193px", xs: "80px" }, px: { lg: "347px", xs: "19px" } }}>
                <AskOrOrderForm />
            </Box>
        </>
    )
}

export default BuildingMetalStructures