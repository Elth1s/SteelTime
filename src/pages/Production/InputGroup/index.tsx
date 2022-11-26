import {
    Box,
    Typography
} from "@mui/material";
import { useTranslation } from "react-i18next";

import { useNavigate } from "react-router-dom"

import input_group_1 from "../../../assets/backgrounds/production/input-group-1.png"
import input_group_2 from "../../../assets/backgrounds/production/input-group-2.png"
import input_group_3 from "../../../assets/backgrounds/production/input-group-3.png"
import input_group_4 from "../../../assets/backgrounds/production/input-group-4.png"
import input_group_5 from "../../../assets/backgrounds/production/input-group-5.png"
import input_group_6 from "../../../assets/backgrounds/production/input-group-6.png"
import input_group_7 from "../../../assets/backgrounds/production/input-group-7.png"
import input_group_8 from "../../../assets/backgrounds/production/input-group-8.png"
import input_group_9 from "../../../assets/backgrounds/production/input-group-9.png"
import input_group_10 from "../../../assets/backgrounds/production/input-group-10.png"
import input_group_11 from "../../../assets/backgrounds/production/input-group-11.png"
import input_group_12 from "../../../assets/backgrounds/production/input-group-12.png"
import input_group_13 from "../../../assets/backgrounds/production/input-group-13.png"
import input_group_14 from "../../../assets/backgrounds/production/input-group-14.png"
import arrow_left_orange from "../../../assets/icons/arrow-left-orange.svg"
import AskOrOrderForm from "../../../components/AskOrOrderForm";

const InputGroup = () => {
    const { t } = useTranslation();

    const navigate = useNavigate();

    const images: Array<any> = [
        input_group_1,
        input_group_2,
        input_group_3,
        input_group_4,
        input_group_5,
        input_group_6,
        input_group_7,
        input_group_8,
        input_group_9,
        input_group_10,
        input_group_11,
        input_group_12,
        input_group_13,
        input_group_14
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
                {t("pages.production.building-metal-structures-p4")}
            </Typography>
            <Typography component="p" variant="h5" fontWeight="500" fontFamily="Raleway">
                {t("pages.input-group.input-group-p")}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", "&>*:nth-of-type(2n)": { mr: "0px" }, mt: "50px" }}>
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
            <Box sx={{ mt: "222px", mb: "280px", px: "347px" }}>
                <AskOrOrderForm />
            </Box>
        </>
    )
}

export default InputGroup