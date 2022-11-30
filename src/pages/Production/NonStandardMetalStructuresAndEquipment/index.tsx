import {
    Box,
    Typography
} from "@mui/material";
import { useTranslation } from "react-i18next";

import { useNavigate } from "react-router-dom"

import non_standard_metal_structures_and_equipment_1 from "../../../assets/backgrounds/production/non-standard-metal-structures-and-equipment-1.png"
import non_standard_metal_structures_and_equipment_2 from "../../../assets/backgrounds/production/non-standard-metal-structures-and-equipment-2.png"
import non_standard_metal_structures_and_equipment_3 from "../../../assets/backgrounds/production/non-standard-metal-structures-and-equipment-3.png"
import non_standard_metal_structures_and_equipment_4 from "../../../assets/backgrounds/production/non-standard-metal-structures-and-equipment-4.png"
import non_standard_metal_structures_and_equipment_5 from "../../../assets/backgrounds/production/non-standard-metal-structures-and-equipment-5.png"
import non_standard_metal_structures_and_equipment_6 from "../../../assets/backgrounds/production/non-standard-metal-structures-and-equipment-6.png"
import non_standard_metal_structures_and_equipment_7 from "../../../assets/backgrounds/production/non-standard-metal-structures-and-equipment-7.png"
import non_standard_metal_structures_and_equipment_8 from "../../../assets/backgrounds/production/non-standard-metal-structures-and-equipment-8.png"
import non_standard_metal_structures_and_equipment_9 from "../../../assets/backgrounds/production/non-standard-metal-structures-and-equipment-9.png"
import non_standard_metal_structures_and_equipment_10 from "../../../assets/backgrounds/production/non-standard-metal-structures-and-equipment-10.png"
import non_standard_metal_structures_and_equipment_11 from "../../../assets/backgrounds/production/non-standard-metal-structures-and-equipment-11.png"
import non_standard_metal_structures_and_equipment_12 from "../../../assets/backgrounds/production/non-standard-metal-structures-and-equipment-12.png"
import non_standard_metal_structures_and_equipment_13 from "../../../assets/backgrounds/production/non-standard-metal-structures-and-equipment-13.png"
import non_standard_metal_structures_and_equipment_14 from "../../../assets/backgrounds/production/non-standard-metal-structures-and-equipment-14.png"
import non_standard_metal_structures_and_equipment_15 from "../../../assets/backgrounds/production/non-standard-metal-structures-and-equipment-15.png"
import non_standard_metal_structures_and_equipment_16 from "../../../assets/backgrounds/production/non-standard-metal-structures-and-equipment-16.png"
import non_standard_metal_structures_and_equipment_17 from "../../../assets/backgrounds/production/non-standard-metal-structures-and-equipment-17.png"
import non_standard_metal_structures_and_equipment_18 from "../../../assets/backgrounds/production/non-standard-metal-structures-and-equipment-18.png"
import non_standard_metal_structures_and_equipment_19 from "../../../assets/backgrounds/production/non-standard-metal-structures-and-equipment-19.png"
import non_standard_metal_structures_and_equipment_20 from "../../../assets/backgrounds/production/non-standard-metal-structures-and-equipment-20.png"
import non_standard_metal_structures_and_equipment_21 from "../../../assets/backgrounds/production/non-standard-metal-structures-and-equipment-21.png"
import non_standard_metal_structures_and_equipment_22 from "../../../assets/backgrounds/production/non-standard-metal-structures-and-equipment-22.png"
import arrow_left_orange from "../../../assets/icons/arrow-left-orange.svg"
import AskOrOrderForm from "../../../components/AskOrOrderForm";

const NonStandardMetalStructuresAndEquipment = () => {
    const { t } = useTranslation();

    const navigate = useNavigate();

    const images: Array<any> = [
        non_standard_metal_structures_and_equipment_1,
        non_standard_metal_structures_and_equipment_2,
        non_standard_metal_structures_and_equipment_3,
        non_standard_metal_structures_and_equipment_4,
        non_standard_metal_structures_and_equipment_5,
        non_standard_metal_structures_and_equipment_6,
        non_standard_metal_structures_and_equipment_7,
        non_standard_metal_structures_and_equipment_8,
        non_standard_metal_structures_and_equipment_9,
        non_standard_metal_structures_and_equipment_10,
        non_standard_metal_structures_and_equipment_11,
        non_standard_metal_structures_and_equipment_12,
        non_standard_metal_structures_and_equipment_13,
        non_standard_metal_structures_and_equipment_14,
        non_standard_metal_structures_and_equipment_15,
        non_standard_metal_structures_and_equipment_16,
        non_standard_metal_structures_and_equipment_17,
        non_standard_metal_structures_and_equipment_18,
        non_standard_metal_structures_and_equipment_19,
        non_standard_metal_structures_and_equipment_20,
        non_standard_metal_structures_and_equipment_21,
        non_standard_metal_structures_and_equipment_22
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
            <Typography variant="h2" fontWeight="600" fontFamily="Jura" align="center" sx={{ width: "330px", mx: "auto", mt: { lg: "20px", xs: "40px" }, mb: { lg: "37px", xs: "30px" } }}>
                {t("pages.production.non-standard-metal-structures-and-equipment")}
            </Typography>
            <Typography variant="h5" fontWeight="400" fontFamily="Raleway">
                {t("pages.non-standard-metal-structures-and-equipment.non-standard-metal-structures-and-equipment-pf")} <Typography variant="inherit" fontWeight="inherit" fontFamily="inherit" color="primary" display="inline">{t("pages.non-standard-metal-structures-and-equipment.name")}</Typography> {t("pages.non-standard-metal-structures-and-equipment.non-standard-metal-structures-and-equipment-ps")}
            </Typography>
            <Box sx={{ ml: "25px", mt: "10px" }}>
                <Typography component="p" variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ display: "list-item" }}>
                    {t("pages.non-standard-metal-structures-and-equipment.non-standard-metal-structures-and-equipment-p1")}
                </Typography>
                <Typography component="p" variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ display: "list-item" }}>
                    {t("pages.non-standard-metal-structures-and-equipment.non-standard-metal-structures-and-equipment-p2")}
                </Typography>
                <Typography component="p" variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ mt: "10px", display: "list-item" }}>
                    {t("pages.non-standard-metal-structures-and-equipment.non-standard-metal-structures-and-equipment-p3")}
                </Typography>
                <Typography component="p" variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ display: "list-item" }}>
                    {t("pages.non-standard-metal-structures-and-equipment.non-standard-metal-structures-and-equipment-p4")}
                </Typography>
                <Typography component="p" variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ display: "list-item" }}>
                    {t("pages.non-standard-metal-structures-and-equipment.non-standard-metal-structures-and-equipment-p5")}
                </Typography>
                <Typography component="p" variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ mt: "10px", display: "list-item" }}>
                    {t("pages.non-standard-metal-structures-and-equipment.non-standard-metal-structures-and-equipment-p6")}
                </Typography>
                <Typography component="p" variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ display: "list-item" }}>
                    {t("pages.non-standard-metal-structures-and-equipment.non-standard-metal-structures-and-equipment-p7")}
                </Typography>
                <Typography component="p" variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ mt: "10px", display: "list-item" }}>
                    {t("pages.non-standard-metal-structures-and-equipment.non-standard-metal-structures-and-equipment-p8")}
                </Typography>
                <Typography component="p" variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ display: "list-item" }}>
                    {t("pages.non-standard-metal-structures-and-equipment.non-standard-metal-structures-and-equipment-p9")}
                </Typography>
            </Box>
            <Box sx={{ display: "flex", flexWrap: "wrap", "&>*:nth-of-type(2n)": { mr: "0px" }, mt: { lg: "80px", xs: "50px" } }}>
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
            <Box sx={{ mt: { lg: "148px", xs: "80px" }, mb: { lg: "171px", xs: "80px" }, px: { lg: "347px", xs: "19px" } }}>
                <AskOrOrderForm />
            </Box>
        </>
    )
}

export default NonStandardMetalStructuresAndEquipment