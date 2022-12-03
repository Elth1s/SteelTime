import { Box, Grid, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"

import sequence_of_actions from "../../assets/icons/sequence-of-actions-plasma-cutting.svg"

import {
    plasma_cutting_of_metal_first,
    plasma_cutting_of_metal_first_small,
    plasma_cutting_of_metal_second,
    plasma_cutting_of_metal_second_small,
    plasma_cutting_of_metal_third,
    plasma_cutting_of_metal_third_small,
    plasma_cutting_of_metal_fourth,
    plasma_cutting_of_metal_fourth_small
} from "../../assets/backgrounds/services"
import { Helmet } from "react-helmet"

const PlasmaCuttingOfMetal = () => {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t("containers.header.services.plasma-cutting-of-metal")}</title>
                <meta name="og:title"
                    content={t("containers.header.services.plasma-cutting-of-metal")} />
                <meta name="description"
                    content={t("meta-info.plasma-cutting-of-metal.description")} />
                <meta name="og:description"
                    content={t("meta-info.plasma-cutting-of-metal.description")} />
                <meta name="keywords"
                    content={t("key-words.plasma-cutting-of-metal")} />
                <link rel="canonical" href="/plasma-cutting" />
            </Helmet>
            <Box sx={{ mt: { lg: "103px", md: "80px", xs: "60px" }, mb: { lg: "343px", md: "80px", xs: "103px" } }}>
                <Typography variant="h2" fontWeight="700" fontFamily="Jura" align="center">
                    {t("containers.header.services.plasma-cutting-of-metal")}
                </Typography>
                <Grid container columns={{ lg: 12, md: 8, xs: 12 }} sx={{ mt: { lg: "60px", md: "60px", xs: "40px" } }}>
                    <Grid item xs={12} md={5} lg={6} sx={{ display: "flex", height: "fit-content" }}>
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
                    <Grid item xs={12} md={3} lg={6}>
                        <Grid container rowSpacing="15px" columnSpacing={{ lg: "0px", md: "5px" }} sx={{ display: { lg: "flex", md: "flex", xs: "none" }, ml: { lg: "0px", md: "auto" } }}>
                            <Grid item lg={6} md={12} sx={{ ml: { lg: "0px", md: "10px" } }}>
                                <img
                                    src={plasma_cutting_of_metal_first}
                                    alt="plasma_cutting_of_metal_first"
                                    loading="lazy"
                                />
                            </Grid>
                            <Grid item lg={6} md={12} sx={{ ml: { lg: "0px", md: "10px" } }}>
                                <img
                                    src={plasma_cutting_of_metal_second}
                                    alt="plasma_cutting_of_metal_second"
                                    loading="lazy"
                                />
                            </Grid>
                            <Grid item lg={6} sx={{ display: { lg: "flex", md: "none", xs: "none" } }}>
                                <img
                                    src={plasma_cutting_of_metal_third}
                                    alt="plasma_cutting_of_metal_third"
                                    loading="lazy"
                                />
                            </Grid>
                            <Grid item lg={6} sx={{ display: { lg: "flex", md: "none", xs: "none" } }}>
                                <img
                                    src={plasma_cutting_of_metal_fourth}
                                    alt="plasma_cutting_of_metal_fourth"
                                    loading="lazy"
                                />
                            </Grid>
                        </Grid>
                        <Box sx={{ display: { lg: "none", md: "none", xs: "block" }, pt: "30px" }}>
                            <Box sx={{ width: "300px", height: "200px", mb: "25px", mx: "auto" }}>
                                <img
                                    src={plasma_cutting_of_metal_first_small}
                                    alt="plasma_cutting_of_metal_first"
                                    loading="lazy"
                                />
                            </Box>
                            <Box sx={{ width: "300px", height: "200px", mb: "25px", mx: "auto" }}>
                                <img
                                    src={plasma_cutting_of_metal_second_small}
                                    alt="plasma_cutting_of_metal_second"
                                    loading="lazy"
                                />
                            </Box>
                            <Box sx={{ width: "300px", height: "200px", mb: "25px", mx: "auto" }}>
                                <img
                                    src={plasma_cutting_of_metal_third_small}
                                    alt="plasma_cutting_of_metal_third"
                                    loading="lazy"
                                />
                            </Box>
                            <Box sx={{ width: "300px", height: "200px", mx: "auto" }}>
                                <img
                                    src={plasma_cutting_of_metal_fourth_small}
                                    alt="plasma_cutting_of_metal_fourth"
                                    loading="lazy"
                                />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={8} sx={{ display: { lg: "none", md: "flex", xs: "none" }, justifyContent: "space-around", mt: "60px" }}>
                        <Box sx={{ width: "400px" }}>
                            <img
                                src={plasma_cutting_of_metal_third}
                                alt="plasma_cutting_of_metal_third"
                                style={{ width: "100%" }}
                                loading="lazy"
                            />
                        </Box>
                        <Box sx={{ width: "400px" }}>
                            <img
                                src={plasma_cutting_of_metal_fourth}
                                alt="plasma_cutting_of_metal_fourth"
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

export default PlasmaCuttingOfMetal