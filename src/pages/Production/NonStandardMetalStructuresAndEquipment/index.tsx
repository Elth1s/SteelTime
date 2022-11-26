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
                {t("pages.production.non-standard-metal-structures-and-equipment")}
            </Typography>
            <Typography component="p" variant="h5" fontWeight="500" fontFamily="Raleway">
                {t("pages.non-standard-metal-structures-and-equipment.non-standard-metal-structures-and-equipment-p1")}
                <br />
                {t("pages.non-standard-metal-structures-and-equipment.non-standard-metal-structures-and-equipment-p2")}
            </Typography>
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
            <Box sx={{ mt: "148px", mb: "171px", px: "347px" }}>
                <AskOrOrderForm />
            </Box>
        </>
    )
}

export default NonStandardMetalStructuresAndEquipment