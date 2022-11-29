import { Box, Grid, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"

import sequence_of_actions from "../../assets/icons/sequence-of-actions-bending-of-reinforcement.svg"

import bending_of_reinforcement_first from "../../assets/backgrounds/services/bending-of-reinforcement-first.png"
import bending_of_reinforcement_first_small from "../../assets/backgrounds/services/bending-of-reinforcement-first-small.png"
import bending_of_reinforcement_second from "../../assets/backgrounds/services/bending-of-reinforcement-second.png"
import bending_of_reinforcement_second_small from "../../assets/backgrounds/services/bending-of-reinforcement-second-small.png"
import bending_of_reinforcement_third from "../../assets/backgrounds/services/bending-of-reinforcement-third.png"
import bending_of_reinforcement_third_small from "../../assets/backgrounds/services/bending-of-reinforcement-third-small.png"
import bending_of_reinforcement_fourth from "../../assets/backgrounds/services/bending-of-reinforcement-fourth.png"
import bending_of_reinforcement_fourth_small from "../../assets/backgrounds/services/bending-of-reinforcement-fourth-small.png"

const BendingOfReinforcement = () => {
    const { t } = useTranslation();

    return (
        <Box sx={{ mt: { lg: "103px", xs: "60px" }, mb: { lg: "176px", xs: "25px" } }}>
            <Typography variant="h2" fontWeight="700" fontFamily="Jura" align="center">
                {t("containers.header.services.bending-of-reinforcement")}
            </Typography>
            <Grid container sx={{ mt: { lg: "60px", xs: "42px" } }}>
                <Grid item xs={12} lg={6} sx={{ display: "flex", height: "fit-content" }}>
                    <Box>
                        <img
                            style={{ height: "100%" }}
                            src={sequence_of_actions}
                            alt="sequence_of_actions"
                        />
                    </Box>
                    <Box sx={{ ml: "20px", width: "490px" }}>
                        <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ mb: "40px" }}>
                            {t("pages.bending-of-reinforcement.first-p")}
                        </Typography>
                        <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ mb: "40px" }}>
                            {t("pages.bending-of-reinforcement.second-p")}
                        </Typography>
                        <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ mb: "40px" }}>
                            {t("pages.bending-of-reinforcement.third-p")}
                        </Typography>
                        <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ mb: "40px" }}>
                            {t("pages.bending-of-reinforcement.fourth-p")}
                        </Typography>
                        <Typography variant="h5" fontWeight="400" fontFamily="Raleway">
                            {t("pages.bending-of-reinforcement.fifth-p")}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Grid container spacing="26px" sx={{ display: { lg: "flex", xs: "none" } }}>
                        <Grid item lg={6}>
                            <img
                                src={bending_of_reinforcement_first}
                                alt="bending_of_reinforcement_first"
                            />
                        </Grid>
                        <Grid item lg={6}>
                            <img
                                src={bending_of_reinforcement_second}
                                alt="bending_of_reinforcement_second"
                            />
                        </Grid>
                        <Grid item lg={6}>
                            <img
                                src={bending_of_reinforcement_third}
                                alt="bending_of_reinforcement_third"
                            />
                        </Grid>
                        <Grid item lg={6}>
                            <img
                                src={bending_of_reinforcement_fourth}
                                alt="bending_of_reinforcement_fourth"
                            />
                        </Grid>
                    </Grid>
                    <Box sx={{ display: { lg: "none", xs: "block" }, pt: "30px" }}>
                        <Box sx={{ width: "300px", height: "200px", mb: "25px", mx: "auto" }}>
                            <img
                                src={bending_of_reinforcement_first_small}
                                alt="bending_of_reinforcement_first"
                            />
                        </Box>
                        <Box sx={{ width: "300px", height: "200px", mb: "25px", mx: "auto" }}>
                            <img
                                src={bending_of_reinforcement_second_small}
                                alt="bending_of_reinforcement_second"
                            />
                        </Box>
                        <Box sx={{ width: "300px", height: "200px", mb: "25px", mx: "auto" }}>
                            <img
                                src={bending_of_reinforcement_third_small}
                                alt="bending_of_reinforcement_third"
                            />
                        </Box>
                        <Box sx={{ width: "300px", height: "200px", mx: "auto" }}>
                            <img
                                src={bending_of_reinforcement_fourth_small}
                                alt="bending_of_reinforcement_fourth"
                            />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default BendingOfReinforcement