import { Box, Grid, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"

import sequence_of_actions from "../../assets/icons/sequence-of-actions-bending-of-reinforcement.svg"

import {
    bending_of_reinforcement_first,
    bending_of_reinforcement_first_small,
    bending_of_reinforcement_second,
    bending_of_reinforcement_second_small,
    bending_of_reinforcement_third,
    bending_of_reinforcement_third_medium,
    bending_of_reinforcement_third_small,
    bending_of_reinforcement_fourth,
    bending_of_reinforcement_fourth_medium,
    bending_of_reinforcement_fourth_small
} from "../../assets/backgrounds/services"
import { Helmet } from "react-helmet"


const BendingOfReinforcement = () => {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t("containers.header.services.bending-of-reinforcement")}</title>
                <meta name="og:title"
                    content={t("containers.header.services.bending-of-reinforcement")} />
                <meta name="description"
                    content={t("meta-info.bending-of-reinforced.description")} />
                <meta name="og:description"
                    content={t("meta-info.bending-of-reinforced.description")} />
                <meta name="keywords"
                    content={t("key-words.bending-of-reinforced")} />
                <link rel="canonical" href="/bending-of-reinforcement" />
            </Helmet>
            <Box sx={{ mt: { lg: "103px", md: "80px", xs: "60px" }, mb: { lg: "176px", md: "80px", xs: "25px" } }}>
                <Typography variant="h2" fontWeight="700" fontFamily="Jura" align="center">
                    {t("containers.header.services.bending-of-reinforcement")}
                </Typography>
                <Grid container columns={{ lg: 12, md: 8, xs: 12 }} sx={{ mt: { lg: "60px", md: "60px", xs: "42px" } }}>
                    <Grid item xs={12} md={5} lg={6} sx={{ display: "flex", height: "fit-content" }}>
                        <Box sx={{ height: { lg: "auto", md: "475px", xs: "auto" } }}>
                            <img
                                style={{ height: "100%" }}
                                src={sequence_of_actions}
                                alt="sequence_of_actions"
                            />
                        </Box>
                        <Box sx={{ ml: "20px", width: "490px" }}>
                            <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ mb: { lg: "40px", xs: "30px" } }}>
                                {t("pages.bending-of-reinforcement.first-p")}
                            </Typography>
                            <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ mb: { lg: "40px", xs: "30px" } }}>
                                {t("pages.bending-of-reinforcement.second-p")}
                            </Typography>
                            <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ mb: { lg: "40px", xs: "30px" } }}>
                                {t("pages.bending-of-reinforcement.third-p")}
                            </Typography>
                            <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ mb: { lg: "40px", xs: "30px" } }}>
                                {t("pages.bending-of-reinforcement.fourth-p")}
                            </Typography>
                            <Typography variant="h5" fontWeight="400" fontFamily="Raleway">
                                {t("pages.bending-of-reinforcement.fifth-p")}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={6} sx={{ display: { lg: "block", md: "none", xs: "block" } }}>
                        <Grid container spacing="26px" sx={{ display: { lg: "flex", md: "none", xs: "none" } }}>
                            <Grid item lg={6} >
                                <img
                                    src={bending_of_reinforcement_first}
                                    alt="bending_of_reinforcement_first"
                                    loading="lazy"
                                />
                            </Grid>
                            <Grid item lg={6} >
                                <img
                                    src={bending_of_reinforcement_second}
                                    alt="bending_of_reinforcement_second"
                                    loading="lazy"
                                />
                            </Grid>
                            <Grid item lg={6}>
                                <img
                                    src={bending_of_reinforcement_third}
                                    alt="bending_of_reinforcement_third"
                                    loading="lazy"
                                />
                            </Grid>
                            <Grid item lg={6}>
                                <img
                                    src={bending_of_reinforcement_fourth}
                                    alt="bending_of_reinforcement_fourth"
                                    loading="lazy"
                                />
                            </Grid>
                        </Grid>
                        <Box sx={{ display: { lg: "none", md: "none", xs: "block" }, pt: "30px" }}>
                            <Box sx={{ width: "300px", height: "200px", mb: "25px", mx: "auto" }}>
                                <img
                                    src={bending_of_reinforcement_first_small}
                                    alt="bending_of_reinforcement_first"
                                    loading="lazy"
                                />
                            </Box>
                            <Box sx={{ width: "300px", height: "200px", mb: "25px", mx: "auto" }}>
                                <img
                                    src={bending_of_reinforcement_second_small}
                                    alt="bending_of_reinforcement_second"
                                    loading="lazy"
                                />
                            </Box>
                            <Box sx={{ width: "300px", height: "200px", mb: "25px", mx: "auto" }}>
                                <img
                                    src={bending_of_reinforcement_third_small}
                                    alt="bending_of_reinforcement_third"
                                    loading="lazy"
                                />
                            </Box>
                            <Box sx={{ width: "300px", height: "200px", mx: "auto" }}>
                                <img
                                    src={bending_of_reinforcement_fourth_small}
                                    alt="bending_of_reinforcement_fourth"
                                    loading="lazy"
                                />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={3} sx={{ display: { lg: "none", md: "block", xs: "none" } }}>
                        <Grid container rowSpacing="20px" sx={{ ml: "auto" }}>
                            <Grid item md={12} >
                                <img
                                    src={bending_of_reinforcement_first_small}
                                    alt="bending_of_reinforcement_first"
                                    loading="lazy"
                                />
                            </Grid>
                            <Grid item md={12} >
                                <img
                                    src={bending_of_reinforcement_second_small}
                                    alt="bending_of_reinforcement_second"
                                    loading="lazy"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={8} sx={{ display: { lg: "none", md: "flex", xs: "none" }, justifyContent: "space-around", mt: "60px" }}>
                        <Box sx={{ width: "400px" }}>
                            <img
                                src={bending_of_reinforcement_third_medium}
                                alt="bending_of_reinforcement_third"
                                style={{ width: "100%" }}
                                loading="lazy"
                            />
                        </Box>
                        <Box sx={{ width: "400px" }}>
                            <img
                                src={bending_of_reinforcement_fourth_medium}
                                alt="bending_of_reinforcement_fourth"
                                style={{ width: "100%" }}
                                loading="lazy"
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default BendingOfReinforcement