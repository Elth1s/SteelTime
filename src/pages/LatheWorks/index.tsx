import { Box, Grid, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"

import sequence_of_actions from "../../assets/icons/sequence-of-actions-lathe-works.svg"

import {
    lathe_works_first,
    lathe_works_first_medium,
    lathe_works_first_small,
    lathe_works_second,
    lathe_works_second_medium,
    lathe_works_second_small
} from "../../assets/backgrounds/services"

const LatheWorks = () => {
    const { t } = useTranslation();

    return (
        <Box sx={{ mt: { lg: "103px", md: "80px", xs: "60px" }, mb: "99px" }}>
            <Typography variant="h2" fontWeight="700" fontFamily="Jura" align="center">
                {t("containers.header.services.lathe-works")}
            </Typography>
            <Grid container columns={{ lg: 12, md: 8, xs: 12 }} sx={{ mt: { lg: "60px", md: "60px", xs: "42px" } }}>
                <Grid item xs={12} md={5} lg={6} sx={{ display: "flex", height: "fit-content", my: "auto" }}>
                    <Box sx={{ height: { lg: "auto", md: "350px", xs: "auto" } }}>
                        <img
                            style={{ height: "100%" }}
                            src={sequence_of_actions}
                            alt="sequence_of_actions"
                        />
                    </Box>
                    <Box sx={{ ml: "20px", width: "542px" }}>
                        <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ mb: "40px" }}>
                            {t("pages.lathe-works.first-p")}
                        </Typography>
                        <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ mb: "40px" }}>
                            {t("pages.lathe-works.second-p")}
                        </Typography>
                        <Typography variant="h5" fontWeight="400" fontFamily="Raleway" >
                            {t("pages.lathe-works.third-p")}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={2} lg={6}>
                    <Grid container spacing="26px" sx={{ display: { lg: "flex", md: "none", xs: "none" } }}>
                        <Grid item xs={6}>
                            <img
                                src={lathe_works_first}
                                alt="lathe_works_first"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <img
                                src={lathe_works_second}
                                alt="lathe_works_second"
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing="26px" sx={{ display: { lg: "none", md: "flex", xs: "none" }, ml: "auto" }}>
                        <Grid item md={12}>
                            <img
                                src={lathe_works_first_medium}
                                alt="lathe_works_first"
                            />
                        </Grid>
                        <Grid item md={12}>
                            <img
                                src={lathe_works_second_medium}
                                alt="lathe_works_second"
                            />
                        </Grid>
                    </Grid>
                    <Box sx={{ display: { lg: "none", md: "none", xs: "block" }, pt: "30px" }}>
                        <Box sx={{ width: "300px", mb: "25px", mx: "auto" }}>
                            <img
                                src={lathe_works_first_small}
                                alt="lathe_works_first"
                            />
                        </Box>
                        <Box sx={{ width: "300px", mx: "auto" }}>
                            <img
                                src={lathe_works_second_small}
                                alt="lathe_works_second"
                            />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default LatheWorks