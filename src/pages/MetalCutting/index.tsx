import { Box, Grid, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"

import sequence_of_actions from "../../assets/icons/sequence-of-actions-metal-cutting-a-bandsaw.svg"

import {
    metal_cutting_a_bandsaw_first,
    metal_cutting_a_bandsaw_second,
    metal_cutting_a_bandsaw_third,
    metal_cutting_a_bandsaw_fourth
} from "../../assets/backgrounds/services"
import { Helmet } from "react-helmet"

const MetalCutting = () => {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t("containers.header.services.metal-cutting-with-a-bandsaw")}</title>
                <meta name="og:title"
                    content={t("containers.header.services.metal-cutting-with-a-bandsaw")} />
                <meta name="description"
                    content={t("meta-info.metal-cutting-with-bandsaw.description")} />
                <meta name="og:description"
                    content={t("meta-info.metal-cutting-with-bandsaw.description")} />
                <meta name="keywords"
                    content={t("key-words.metal-cutting-with-bandsaw")} />
                <link rel="canonical" href="/metal-cutting-a-bandsaw" />
            </Helmet>
            <Box sx={{ mt: { lg: "103px", md: "80px", xs: "46px" }, mb: { lg: "274px", md: "80px", xs: "31px" } }}>
                <Typography variant="h2" fontWeight="700" fontFamily="Jura" align="center">
                    {t("containers.header.services.metal-cutting-with-a-bandsaw")}
                </Typography>
                <Grid container columns={{ lg: 12, md: 8, xs: 12 }} sx={{ mt: { lg: "60px", md: "60px", xs: "30px" } }}>
                    <Grid item xs={12} md={5} lg={6} sx={{ display: "flex", height: "fit-content" }}>
                        <Box sx={{ height: { lg: "auto", md: "440px", xs: "auto" } }}>
                            <img
                                style={{ height: "100%" }}
                                src={sequence_of_actions}
                                alt="sequence_of_actions"
                            />
                        </Box>
                        <Box sx={{ ml: "20px", width: "522px" }}>
                            <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ mb: { lg: "40px", xs: "30px" } }}>
                                {t("pages.metal-cutting-with-a-bandsaw.first-p")}
                            </Typography>
                            <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ mb: { lg: "40px", xs: "30px" } }}>
                                {t("pages.metal-cutting-with-a-bandsaw.second-p")}
                            </Typography>
                            <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ mb: { lg: "40px", xs: "30px" } }}>
                                {t("pages.metal-cutting-with-a-bandsaw.third-p")}
                            </Typography>
                            <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ mb: { lg: "40px", xs: "30px" } }}>
                                {t("pages.metal-cutting-with-a-bandsaw.fourth-p")}
                            </Typography>
                            <Typography variant="h5" fontWeight="400" fontFamily="Raleway">
                                {t("pages.metal-cutting-with-a-bandsaw.fifth-p")}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3} lg={6}>
                        <Grid container rowSpacing="15px" sx={{ display: { lg: "flex", md: "flex", xs: "none" } }}>
                            <Grid item lg={6} md={12}>
                                <img
                                    src={metal_cutting_a_bandsaw_first}
                                    alt="metal_cutting_a_bandsaw_first"
                                    loading="lazy"
                                />
                            </Grid>
                            <Grid item lg={6} md={12}>
                                <img
                                    src={metal_cutting_a_bandsaw_second}
                                    alt="metal_cutting_a_bandsaw_second"
                                    loading="lazy"
                                />
                            </Grid>
                            <Grid item lg={6} sx={{ display: { lg: "flex", md: "none", xs: "none" } }}>
                                <img
                                    src={metal_cutting_a_bandsaw_third}
                                    alt="metal_cutting_a_bandsaw_third"
                                    loading="lazy"
                                />
                            </Grid>
                            <Grid item lg={6} sx={{ display: { lg: "flex", md: "none", xs: "none" } }}>
                                <img
                                    src={metal_cutting_a_bandsaw_fourth}
                                    alt="metal_cutting_a_bandsaw_fourth"
                                    loading="lazy"
                                />
                            </Grid>
                        </Grid>
                        <Box sx={{ display: { lg: "none", md: "none", xs: "block" }, pt: "30px" }}>
                            <Box sx={{ width: "300px", height: "200px", mb: "25px", mx: "auto" }}>
                                <img
                                    src={metal_cutting_a_bandsaw_first}
                                    alt="metal_cutting_a_bandsaw_first"
                                    loading="lazy"
                                />
                            </Box>
                            <Box sx={{ width: "300px", height: "200px", mb: "25px", mx: "auto" }}>
                                <img
                                    src={metal_cutting_a_bandsaw_second}
                                    alt="metal_cutting_a_bandsaw_second"
                                    loading="lazy"
                                />
                            </Box>
                            <Box sx={{ width: "300px", height: "200px", mb: "25px", mx: "auto" }}>
                                <img
                                    src={metal_cutting_a_bandsaw_third}
                                    alt="metal_cutting_a_bandsaw_third"
                                    loading="lazy"
                                />
                            </Box>
                            <Box sx={{ width: "300px", height: "200px", mx: "auto" }}>
                                <img
                                    src={metal_cutting_a_bandsaw_fourth}
                                    alt="metal_cutting_a_bandsaw_fourth"
                                    loading="lazy"
                                />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={8} sx={{ display: { lg: "none", md: "flex", xs: "none" }, justifyContent: "space-around", mt: "60px" }}>
                        <Box sx={{ width: "400px" }}>
                            <img
                                src={metal_cutting_a_bandsaw_third}
                                alt="metal_cutting_a_bandsaw_third"
                                style={{ width: "100%" }}
                                loading="lazy"
                            />
                        </Box>
                        <Box sx={{ width: "400px" }}>
                            <img
                                src={metal_cutting_a_bandsaw_fourth}
                                alt="metal_cutting_a_bandsaw_fourth"
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

export default MetalCutting