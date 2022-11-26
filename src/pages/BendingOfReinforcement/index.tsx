import { Box, Grid, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"

import sequence_of_actions from "../../assets/icons/sequence-of-actions-bending-of-reinforcement.svg"

import bending_of_reinforcement_first from "../../assets/backgrounds/services/bending-of-reinforcement-first.png"
import bending_of_reinforcement_second from "../../assets/backgrounds/services/bending-of-reinforcement-second.png"
import bending_of_reinforcement_third from "../../assets/backgrounds/services/bending-of-reinforcement-third.png"
import bending_of_reinforcement_fourth from "../../assets/backgrounds/services/bending-of-reinforcement-fourth.png"

const BendingOfReinforcement = () => {
    const { t } = useTranslation();

    return (
        <Box sx={{ mt: "103px", mb: "176px" }}>
            <Typography variant="h2" fontWeight="700" fontFamily="Jura" align="center">
                {t("containers.header.services.bending-of-reinforcement")}
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
                <Grid item xs={6}>
                    <Grid container spacing="26px">
                        <Grid item xs={6}>
                            <img
                                src={bending_of_reinforcement_first}
                                alt="bending_of_reinforcement_first"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <img
                                src={bending_of_reinforcement_second}
                                alt="bending_of_reinforcement_second"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <img
                                src={bending_of_reinforcement_third}
                                alt="bending_of_reinforcement_third"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <img
                                src={bending_of_reinforcement_fourth}
                                alt="bending_of_reinforcement_fourth"
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default BendingOfReinforcement