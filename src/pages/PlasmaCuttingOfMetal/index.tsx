import { Box, Grid, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"

import sequence_of_actions from "../../assets/icons/sequence-of-actions-plasma-cutting.svg"

import plasma_cutting_of_metal_first from "../../assets/backgrounds/production/plasma-cutting-of-metal-first.png"
import plasma_cutting_of_metal_second from "../../assets/backgrounds/production/plasma-cutting-of-metal-second.png"
import plasma_cutting_of_metal_third from "../../assets/backgrounds/production/plasma-cutting-of-metal-third.png"
import plasma_cutting_of_metal_fourth from "../../assets/backgrounds/production/plasma-cutting-of-metal-fourth.png"

const PlasmaCuttingOfMetal = () => {
    const { t } = useTranslation();

    return (
        <Box sx={{ mt: "103px", mb: "343px" }}>
            <Typography variant="h2" fontWeight="700" fontFamily="Jura" align="center">
                {t("containers.header.services.plasma-cutting-of-metal")}
            </Typography>
            <Grid container sx={{ mt: "60px" }}>
                <Grid item xs={6} sx={{ display: "flex", height: "fit-content" }}>
                    <Box>
                        <img
                            style={{ height: "100%" }}
                            src={sequence_of_actions}
                            alt="sequence_of_actions"
                        />
                    </Box>
                    <Box sx={{ ml: "20px", width: "519px" }}>
                        <Box sx={{ width: "483px" }}>
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
                        <Box sx={{ width: "483px" }}>
                            <Typography variant="h5" fontWeight="400" fontFamily="Raleway">
                                {t("pages.plasma-cutting-of-metal.fifth-p")}
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Grid container spacing="26px">
                        <Grid item xs={6}>
                            <img
                                src={plasma_cutting_of_metal_first}
                                alt="plasma_cutting_of_metal_first"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <img
                                src={plasma_cutting_of_metal_second}
                                alt="plasma_cutting_of_metal_second"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <img
                                src={plasma_cutting_of_metal_third}
                                alt="plasma_cutting_of_metal_third"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <img
                                src={plasma_cutting_of_metal_fourth}
                                alt="plasma_cutting_of_metal_fourth"
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default PlasmaCuttingOfMetal