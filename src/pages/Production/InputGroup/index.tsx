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
            <Typography variant="h2" fontWeight="600" fontFamily="Jura" align="center" sx={{ mt: { lg: "20px", xs: "40px" }, mb: { lg: "37px", xs: "30px" } }}>
                {t("pages.production.building-metal-structures-p4")}
            </Typography>
            <Typography variant="h5" fontWeight="400" fontFamily="Raleway">
                <Typography variant="inherit" fontWeight="inherit" fontFamily="inherit" color="primary" display="inline">{t("pages.input-group.name")}</Typography> {t("pages.input-group.input-group-p")}
            </Typography>
            <Box sx={{ ml: "25px", mt: "10px" }}>
                <Typography component="p" variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ display: "list-item" }}>
                    {t("pages.input-group.input-group-p1")}
                </Typography>
                <Typography component="p" variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ display: "list-item" }}>
                    {t("pages.input-group.input-group-p2")}
                </Typography>
                <Typography component="p" variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ display: "list-item" }}>
                    {t("pages.input-group.input-group-p3")}
                </Typography>
                <Typography component="p" variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ display: "list-item" }}>
                    {t("pages.input-group.input-group-p4")}
                </Typography>
            </Box>
            <Box sx={{ display: "flex", flexWrap: "wrap", "&>*:nth-of-type(2n)": { mr: "0px" }, mt: { lg: "50px", xs: "30px" } }}>
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
            <Box sx={{ mt: { lg: "222px", xs: "80px" }, mb: { lg: "280px", xs: "80px" }, px: { lg: "347px", xs: "19px" } }}>
                <AskOrOrderForm />
            </Box>
        </>
    )
}

export default InputGroup