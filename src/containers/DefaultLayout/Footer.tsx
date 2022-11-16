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



const Footer = () => {
    const { t } = useTranslation();
    const { palette } = useTheme();

    return (
        <Box
            component="footer"
            sx={{
                pt: "20px",
                pb: "130px",
                borderTop: `1px solid ${palette.text.primary}`,
                background: palette.background.default
            }}
        >
            <Container sx={{ maxWidth: { lg: "lg", md: "md" } }}>
                <Grid container sx={{ px: "5px" }}>
                    <Grid item xs={2}>
                        <img
                            src={palette.mode === "dark" ? footer_logo_light : footer_logo_dark}
                            alt="footer_logo_light"
                        />
                    </Grid>
                    <Grid item xs={4} />
                    <Grid item xs={3}>
                        <Typography variant="h5" fontFamily="Jura" fontWeight="700">
                            {t("containers.footer.contacts")}
                        </Typography>
                        <Typography variant="h5" fontFamily="Jura" fontWeight="600" sx={{ mt: "40px", mb: "10px" }}>
                            + 380 98 2567 85
                        </Typography>
                        <Typography variant="h5" fontFamily="Raleway" fontWeight="500">
                            metalinvest@gmail.com
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
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Footer;