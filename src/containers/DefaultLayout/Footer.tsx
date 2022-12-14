import {
    Box,
    Container,
    Grid,
    Typography,
    useTheme
} from "@mui/material";
import { useTranslation } from "react-i18next";

import footer_logo_light from "../../assets/logos/footer-logo-light.svg"
import footer_logo_dark from "../../assets/logos/footer-logo-dark.svg"
import instagram_medium_light from "../../assets/icons/instagram-medium-light.svg";
import instagram_medium_dark from "../../assets/icons/instagram-medium-dark.svg";
import facebook_medium_light from "../../assets/icons/facebook-medium-light.svg";
import facebook_medium_dark from "../../assets/icons/facebook-medium-dark.svg";
import { useState } from "react";



const Footer = () => {
    const { t } = useTranslation();
    const { palette } = useTheme();

    const [isPhoneCopied, setIsPhoneCopied] = useState(false)

    const displayPhoneToolTip = () => {
        if (!isPhoneCopied) {
            setIsPhoneCopied(true); // show tooltip
            setTimeout(() => {
                setIsPhoneCopied(false); // remove/hide tooltip
            }, 2000);
        }
    };
    return (
        <Box
            component="footer"
            sx={{
                pt: { lg: "20px", xs: "10px" },
                pb: { lg: "130px", md: "85px", xs: "30px" },
                borderTop: `1px solid ${palette.text.primary}`,
                background: palette.background.default
            }}
        >
            <Container sx={{ maxWidth: { lg: "1270px", md: "910px", xs: "340px" } }}>
                {/* lg */}
                <Grid container sx={{ display: { lg: "flex", md: "flex", xs: "none" }, px: "5px" }}>
                    <Grid item xs={2}>
                        <Box sx={{ width: { lg: "150px", md: "100px" } }}>
                            <img
                                src={palette.mode === "dark" ? footer_logo_light : footer_logo_dark}
                                alt="footer_logo_light"
                                style={{ width: "100%" }}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={4} />
                    <Grid item xs={3}>
                        <Typography variant="h5" fontFamily="Jura" fontWeight="700">
                            {t("containers.footer.contacts")}
                        </Typography>
                        <Typography
                            variant="h5"
                            fontFamily="Jura"
                            fontWeight="600"
                            sx={{
                                mt: "20px",
                                mb: "5px",
                                cursor: "pointer"
                            }}
                            onClick={() => {
                                displayPhoneToolTip();
                                navigator.clipboard.writeText("+380672345442")
                            }}
                            color={isPhoneCopied ? "primary" : "inherit"}
                        >
                            + 380 67 2345 442
                        </Typography>
                        <Typography variant="h5" fontFamily="Raleway" fontWeight="500">
                            steeltime.c@gmail.com
                        </Typography>
                    </Grid>
                    <Grid item xs={1} />
                    <Grid item xs={2}>
                        <Typography variant="h5" fontFamily="Jura" fontWeight="700" align="right">
                            {t("containers.footer.social-networks")}
                        </Typography>
                        <Box sx={{ display: "flex", justifyContent: "end", mt: "40px" }}>
                            <img
                                src={palette.mode === "dark" ? instagram_medium_light : instagram_medium_dark}
                                alt="instagram"
                                style={{ marginRight: "20px", cursor: "pointer" }}
                            />
                            <img
                                src={palette.mode === "dark" ? facebook_medium_light : facebook_medium_dark}
                                alt="facebook"
                                style={{ cursor: "pointer" }}
                                onClick={() => window.open("https://www.facebook.com/steeltimellc")}
                            />
                        </Box>
                    </Grid>
                </Grid>
                {/* xs */}
                <Grid container columns={5} sx={{ display: { lg: "none", md: "none", xs: "flex" } }}>
                    <Grid item xs={3}>
                        <Typography variant="h2" fontFamily="Jura" fontWeight="700">
                            {t("containers.footer.contacts")}
                        </Typography>
                        <Typography
                            variant="h3"
                            fontFamily="Jura"
                            fontWeight="600"
                            sx={{
                                mt: "20px",
                                mb: "5px",
                                cursor: "pointer"
                            }}
                            onClick={() => {
                                displayPhoneToolTip();
                                navigator.clipboard.writeText("+380672345442")
                            }}
                        >
                            {isPhoneCopied}
                        </Typography>
                        <Typography variant="h4" fontFamily="Raleway" fontWeight="500">
                            steeltime.c@gmail.com
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant="h2" fontFamily="Jura" fontWeight="700" align="right">
                            {t("containers.footer.social-networks")}
                        </Typography>
                        <Box sx={{ display: "flex", justifyContent: "end", mt: "20px" }}>
                            <img
                                src={palette.mode === "dark" ? instagram_medium_light : instagram_medium_dark}
                                alt="instagram"
                                style={{ marginRight: "20px", cursor: "pointer" }}
                            />
                            <img
                                src={palette.mode === "dark" ? facebook_medium_light : facebook_medium_dark}
                                alt="facebook"
                                style={{ cursor: "pointer" }}
                                onClick={() => window.open("https://www.facebook.com/steeltimellc")}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={5} sx={{ height: "130px", mt: "50px" }}>
                        <img
                            style={{ width: "100%", height: "100%" }}
                            src={palette.mode === "dark" ? footer_logo_light : footer_logo_dark}
                            alt="footer_logo_light"
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Footer;