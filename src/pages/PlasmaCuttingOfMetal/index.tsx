import { Box, Grid, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"

import sequence_of_actions from "../../assets/icons/sequence-of-actions-plasma-cutting.svg"

import plasma_cutting_of_metal_first from "../../assets/backgrounds/services/plasma-cutting-of-metal-first.png"
import plasma_cutting_of_metal_first_small from "../../assets/backgrounds/services/plasma-cutting-of-metal-first-small.png"
import plasma_cutting_of_metal_second from "../../assets/backgrounds/services/plasma-cutting-of-metal-second.png"
import plasma_cutting_of_metal_second_small from "../../assets/backgrounds/services/plasma-cutting-of-metal-second-small.png"
import plasma_cutting_of_metal_third from "../../assets/backgrounds/services/plasma-cutting-of-metal-third.png"
import plasma_cutting_of_metal_third_small from "../../assets/backgrounds/services/plasma-cutting-of-metal-third-small.png"
import plasma_cutting_of_metal_fourth from "../../assets/backgrounds/services/plasma-cutting-of-metal-fourth.png"
import plasma_cutting_of_metal_fourth_small from "../../assets/backgrounds/services/plasma-cutting-of-metal-fourth-small.png"

const PlasmaCuttingOfMetal = () => {
    const { t } = useTranslation();

    return (
        <Box sx={{ mt: { lg: "103px", xs: "60px" }, mb: { lg: "343px", xs: "103px" } }}>
            <Typography variant="h2" fontWeight="700" fontFamily="Jura" align="center">
                {t("containers.header.services.plasma-cutting-of-metal")}
            </Typography>
            <Grid container sx={{ mt: { lg: "60px", xs: "40px" } }}>
                <Grid item xs={12} lg={6} sx={{ display: "flex", height: "fit-content" }}>
                    <Box>
                        <img
                            style={{ height: "100%" }}
                            src={sequence_of_actions}
                            alt="sequence_of_actions"
                        />
                    </Box>
                    <Box sx={{ ml: "20px", width: { lg: "519px", xs: "auto" } }}>
                        <Box sx={{ width: { lg: "483px", xs: "auto" } }}>
                            <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ mb: "40px" }}>
                                {t("pages.plasma-cutting-of-metal.first-p")}
                            </Typography>
                            <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ mb: "40px" }}>
                                {t("pages.plasma-cutting-of-metal.second-p")}
                            </Typography>
                            <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ mb: "40px" }}>
                                {t("pages.plasma-cutting-of-metal.third-p")}
                            </Typography>
                        </Box>
                        <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ mb: "40px" }}>
                            {t("pages.plasma-cutting-of-metal.fourth-p")}
                        </Typography>
                        <Box sx={{ width: { lg: "483px", xs: "auto" } }}>
                            <Typography variant="h5" fontWeight="400" fontFamily="Raleway">
                                {t("pages.plasma-cutting-of-metal.fifth-p")}
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Grid container spacing="26px" sx={{ display: { lg: "flex", xs: "none" } }}>
                        <Grid item lg={6}>
                            <img
                                src={plasma_cutting_of_metal_first}
                                alt="plasma_cutting_of_metal_first"
                            />
                        </Grid>
                        <Grid item lg={6}>
                            <img
                                src={plasma_cutting_of_metal_second}
                                alt="plasma_cutting_of_metal_second"
                            />
                        </Grid>
                        <Grid item lg={6}>
                            <img
                                src={plasma_cutting_of_metal_third}
                                alt="plasma_cutting_of_metal_third"
                            />
                        </Grid>
                        <Grid item lg={6}>
                            <img
                                src={plasma_cutting_of_metal_fourth}
                                alt="plasma_cutting_of_metal_fourth"
                            />
                        </Grid>
                    </Grid>
                    <Box sx={{ display: { lg: "none", xs: "block" }, pt: "30px" }}>
                        <Box sx={{ width: "300px", height: "200px", mb: "25px", mx: "auto" }}>
                            <img
                                src={plasma_cutting_of_metal_first_small}
                                alt="plasma_cutting_of_metal_first"
                            />
                        </Box>
                        <Box sx={{ width: "300px", height: "200px", mb: "25px", mx: "auto" }}>
                            <img
                                src={plasma_cutting_of_metal_second_small}
                                alt="plasma_cutting_of_metal_second"
                            />
                        </Box>
                        <Box sx={{ width: "300px", height: "200px", mb: "25px", mx: "auto" }}>
                            <img
                                src={plasma_cutting_of_metal_third_small}
                                alt="plasma_cutting_of_metal_third"
                            />
                        </Box>
                        <Box sx={{ width: "300px", height: "200px", mx: "auto" }}>
                            <img
                                src={plasma_cutting_of_metal_fourth_small}
                                alt="plasma_cutting_of_metal_fourth"
                            />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default PlasmaCuttingOfMetal