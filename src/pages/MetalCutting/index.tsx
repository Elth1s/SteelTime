import { Box, Grid, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"

import sequence_of_actions from "../../assets/icons/sequence-of-actions-metal-cutting-a-bandsaw.svg"

import metal_cutting_a_bandsaw_first from "../../assets/backgrounds/services/metal-cutting-a-bandsaw-first.png"
import metal_cutting_a_bandsaw_second from "../../assets/backgrounds/services/metal-cutting-a-bandsaw-second.png"
import metal_cutting_a_bandsaw_third from "../../assets/backgrounds/services/metal-cutting-a-bandsaw-third.png"
import metal_cutting_a_bandsaw_fourth from "../../assets/backgrounds/services/metal-cutting-a-bandsaw-fourth.png"

const MetalCutting = () => {
    const { t } = useTranslation();

    return (
        <Box sx={{ mt: { lg: "103px", xs: "46px" }, mb: { lg: "274px", xs: "31px" } }}>
            <Typography variant="h2" fontWeight="700" fontFamily="Jura" align="center">
                {t("containers.header.services.metal-cutting-with-a-bandsaw")}
            </Typography>
            <Grid container sx={{ mt: { lg: "60px", xs: "30px" } }}>
                <Grid item xs={12} lg={6} sx={{ display: "flex", height: "fit-content" }}>
                    <Box>
                        <img
                            style={{ height: "100%" }}
                            src={sequence_of_actions}
                            alt="sequence_of_actions"
                        />
                    </Box>
                    <Box sx={{ ml: "20px", width: "522px" }}>
                        <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ mb: "40px" }}>
                            {t("pages.metal-cutting-with-a-bandsaw.first-p")}
                        </Typography>
                        <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ mb: "40px" }}>
                            {t("pages.metal-cutting-with-a-bandsaw.second-p")}
                        </Typography>
                        <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ mb: "40px" }}>
                            {t("pages.metal-cutting-with-a-bandsaw.third-p")}
                        </Typography>
                        <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ mb: "40px" }}>
                            {t("pages.metal-cutting-with-a-bandsaw.fourth-p")}
                        </Typography>
                        <Typography variant="h5" fontWeight="400" fontFamily="Raleway">
                            {t("pages.metal-cutting-with-a-bandsaw.fifth-p")}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Grid container spacing="26px" sx={{ display: { lg: "flex", xs: "none" } }}>
                        <Grid item xs={6}>
                            <img
                                src={metal_cutting_a_bandsaw_first}
                                alt="metal_cutting_a_bandsaw_first"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <img
                                src={metal_cutting_a_bandsaw_second}
                                alt="metal_cutting_a_bandsaw_second"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <img
                                src={metal_cutting_a_bandsaw_third}
                                alt="metal_cutting_a_bandsaw_third"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <img
                                src={metal_cutting_a_bandsaw_fourth}
                                alt="metal_cutting_a_bandsaw_fourth"
                            />
                        </Grid>
                    </Grid>
                    <Box sx={{ display: { lg: "none", xs: "block" }, pt: "30px" }}>
                        <Box sx={{ width: "300px", height: "200px", mb: "25px", mx: "auto" }}>
                            <img
                                src={metal_cutting_a_bandsaw_first}
                                alt="metal_cutting_a_bandsaw_first"
                            />
                        </Box>
                        <Box sx={{ width: "300px", height: "200px", mb: "25px", mx: "auto" }}>
                            <img
                                src={metal_cutting_a_bandsaw_second}
                                alt="metal_cutting_a_bandsaw_second"
                            />
                        </Box>
                        <Box sx={{ width: "300px", height: "200px", mb: "25px", mx: "auto" }}>
                            <img
                                src={metal_cutting_a_bandsaw_third}
                                alt="metal_cutting_a_bandsaw_third"
                            />
                        </Box>
                        <Box sx={{ width: "300px", height: "200px", mx: "auto" }}>
                            <img
                                src={metal_cutting_a_bandsaw_fourth}
                                alt="metal_cutting_a_bandsaw_fourth"
                            />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default MetalCutting