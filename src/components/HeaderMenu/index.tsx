import {
    Box,
    Divider,
    Drawer,
    IconButton,
    Typography,
    useTheme
} from "@mui/material";

import * as React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { LanguageButtonStyle } from "./styled";

import menu_light from "../../assets/icons/menu-light.svg";
import menu_dark from "../../assets/icons/menu-dark.svg";
import close_orange from "../../assets/icons/close-orange.svg";
import facebook_small_light from "../../assets/icons/facebook-small-light.svg";
import facebook_small_dark from "../../assets/icons/facebook-small-dark.svg";
import instagram_small_light from "../../assets/icons/instagram-small-light.svg";
import instagram_small_dark from "../../assets/icons/instagram-small-dark.svg";
import sun_light from "../../assets/icons/sun-light.png";
import moon_dark from "../../assets/icons/moon-dark.png";

import { useThemeContext } from "../../UISettings/ThemeContext";

type Language = 'uk' | 'en' | 'de';

export default function HeaderMenu() {
    const { palette } = useTheme();
    const { t, i18n } = useTranslation();

    const { darkTheme, setDarkTheme } = useThemeContext();

    const [languages, setLanguages] = React.useState({
        uk: i18n.language === "uk-UA" || i18n.language === "uk",
        en: i18n.language === "en-US" || i18n.language === "en",
        de: i18n.language === "de"
    });
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = (open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent
    ) => {
        if (
            event.type === "keydown" &&
            ((event as React.KeyboardEvent).key === "Tab" ||
                (event as React.KeyboardEvent).key === "Shift")
        ) {
            return;
        }

        setIsOpen(open);
    };

    const changeLanguage = (language: Language) => {
        let newLanguages = {
            uk: language === "uk",
            en: language === "en",
            de: language === "de"
        }
        setLanguages(newLanguages)
        i18n.changeLanguage(language)
    }

    const handleThemeChange = () => {
        setDarkTheme(!darkTheme)
        localStorage.darkTheme = !darkTheme;
    };

    return (
        <>
            <IconButton
                sx={{
                    width: { lg: "50px", xs: "45px" },
                    height: { lg: "39px", xs: "34px" },
                    "&:hover": {
                        background: "transparent"
                    },
                    "&& .MuiTouchRipple-child": {
                        backgroundColor: "transparent"
                    }
                }}
                size="small"
                color="inherit"
                onClick={toggleDrawer(true)}
            >
                <img
                    style={{ width: "100%", height: "100%" }}
                    src={palette.mode === "dark" ? menu_light : menu_dark}
                    alt="menu"
                />
            </IconButton>
            <Drawer
                anchor="right"
                open={isOpen}
                onClose={toggleDrawer(false)}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        background: "transparent",
                        height: "450px"
                    }
                }}
            >
                <Box
                    sx={{
                        width: "288px",
                        height: "400px",
                        background: palette.background.default,
                        m: "15px 20px",
                        p: "34px 22px 31px 21px",
                        boxShadow: "2px 2px 10px #DE5408"
                    }}
                >
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <LanguageButtonStyle selected={languages["uk"]} onClick={() => { changeLanguage("uk") }}>UK&nbsp;</LanguageButtonStyle>
                            <Divider sx={{ borderColor: "inherit", borderRightWidth: "1px", mx: "1px", mt: "2px" }} orientation="vertical" flexItem />
                            <LanguageButtonStyle selected={languages["en"]} onClick={() => { changeLanguage("en") }}>&nbsp;ENG&nbsp;</LanguageButtonStyle>
                            <Divider sx={{ borderColor: "inherit", borderRightWidth: "1px", mx: "1px", mt: "2px" }} orientation="vertical" flexItem />
                            <LanguageButtonStyle selected={languages["de"]} onClick={() => { changeLanguage("de") }}>&nbsp;DE</LanguageButtonStyle>
                        </Box>
                        <IconButton
                            sx={{
                                "&:hover": {
                                    background: "transparent"
                                },
                                "&& .MuiTouchRipple-child": {
                                    backgroundColor: "transparent"
                                }
                            }}
                            color="inherit"
                            size="small"
                            onClick={toggleDrawer(false)}
                        >
                            <img
                                src={close_orange}
                                alt="close_orange"
                            />
                        </IconButton>
                    </Box>
                    <Typography variant="h5" fontFamily="Jura" fontWeight="700" sx={{ mt: "40px" }}>
                        {t("components.header-menu.social-networks")}
                    </Typography>
                    <Box sx={{ display: "flex", mt: "10px", mb: "auto" }}>
                        <img
                            src={palette.mode === "dark" ? instagram_small_light : instagram_small_dark}
                            alt="instagram"
                            style={{ marginRight: "10px", cursor: "pointer" }}
                        />
                        <img
                            src={palette.mode === "dark" ? facebook_small_light : facebook_small_dark}
                            alt="facebook"
                            style={{ cursor: "pointer" }}
                        />
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            cursor: "pointer",
                            mt: "180px"
                        }}
                        onClick={handleThemeChange}
                    >
                        <img
                            src={darkTheme ? sun_light : moon_dark}
                            alt="sun_light"
                            style={{ marginRight: "10px" }}
                        />
                        <Typography variant="h5" fontFamily="Jura">
                            {darkTheme ? t("components.header-menu.light-theme") : t("components.header-menu.dark-theme")}
                        </Typography>
                    </Box>
                </Box>
            </Drawer>
        </>
    );
}
