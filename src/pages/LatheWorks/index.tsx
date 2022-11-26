import { Box, Grid, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"

import sequence_of_actions from "../../assets/icons/sequence-of-actions-lathe-works.svg"

import lathe_works_first from "../../assets/backgrounds/services/lathe-works-first.png"
import lathe_works_second from "../../assets/backgrounds/services/lathe-works-second.png"

const LatheWorks = () => {
    const { t } = useTranslation();

    return (
        <Box sx={{ mt: "103px", mb: "99px" }}>
            <Typography variant="h2" fontWeight="700" fontFamily="Jura" align="center">
                {t("containers.header.services.lathe-works")}
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
                <Grid item xs={6}>
                    <Grid container spacing="26px">
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
                </Grid>
            </Grid>
        </Box>
    )
}

export default LatheWorks