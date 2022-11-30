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
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import HashLinkRouter from "../HashLinkRouter";
import LinkRouter from "../LinkRouter";

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
import arrow_down_light from "../../assets/icons/arrow-down-light.svg"
import arrow_down_dark from "../../assets/icons/arrow-down-dark.svg"
import arrow_down_orange from "../../assets/icons/arrow-down-orange.svg"
import arrow_left_orange from "../../assets/icons/arrow-left-orange.svg"

import { useThemeContext } from "../../UISettings/ThemeContext";


import { IHeaderMenuItem } from "../../types/types";

type Language = 'uk' | 'en' | 'de';

export default function HeaderMenu() {
    const { palette } = useTheme();
    const { t, i18n } = useTranslation();

    const { darkTheme, setDarkTheme } = useThemeContext();

    const location = useLocation();
    const links: Array<IHeaderMenuItem> = [
        {
            title: t("containers.header.home"),
            link: "/"
        },
        {
            title: t("containers.header.about-us"),
            link: "/#about-us",
            isId: true
        },
        {
            title: t("containers.header.production"),
            link: "/production",
            isSelected: location.pathname === "/production"
        },
        {
            title: t("containers.header.services.title"),
            link: "",
            isSelected: location.pathname === "/plasma-cutting" || location.pathname === "/bending-of-reinforcement" || location.pathname === "/lathe-works" || location.pathname === "/metal-cutting-a-bandsaw",
            children: [
                {
                    title: t("containers.header.services.plasma-cutting-of-metal"),
                    link: "/plasma-cutting"
                },
                {
                    title: t("containers.header.services.bending-of-reinforcement"),
                    link: "/bending-of-reinforcement"
                },
                {
                    title: t("containers.header.services.lathe-works"),
                    link: "/lathe-works"
                },
                {
                    title: t("containers.header.services.metal-cutting-with-a-bandsaw"),
                    link: "/metal-cutting-a-bandsaw"
                }
            ]
        },
        {
            title: t("containers.header.contacts"),
            link: "/#contacts",
            isId: true
        },
        {
            title: t("containers.header.gallery"),
            link: "/#gallery",
            isId: true
        },
    ];

    const [languages, setLanguages] = React.useState({
        uk: i18n.language === "uk-UA" || i18n.language === "uk",
        en: i18n.language === "en-US" || i18n.language === "en",
        de: i18n.language === "de"
    });

    const [isOpen, setIsOpen] = useState(false);
    const [isOpenServices, setIsOpenServices] = useState(false);

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
                        height: { lg: "450px", xs: "auto" }
                    }
                }}
            >
                <Box
                    sx={{
                        width: "300px",
                        height: { lg: "400px", xs: "auto" },
                        background: palette.background.default,
                        m: "15px 20px",
                        p: "34px 22px 31px 21px",
                        boxShadow: "2px 2px 10px #DE5408"
                    }}
                >
                    {isOpenServices
                        ? <>
                            <Box sx={{ display: "flex", justifyContent: "end" }}>
                                <img
                                    src={arrow_left_orange}
                                    alt="arrow_left_orange"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => setIsOpenServices(false)}
                                />
                            </Box>
                            <Box>
                                {links[3].children?.map((item, index) => {
                                    return (
                                        <LinkRouter
                                            key={`header_tooltip_item_${index}`}
                                            underline="none"
                                            color="inherit"
                                            to={item.link}
                                        >
                                            <Typography component="h5" fontSize="20px" fontFamily="Jura" fontWeight="600" sx={{ mt: "15px" }}>
                                                {item.title}
                                            </Typography>
                                        </LinkRouter>
                                    );
                                })}
                            </Box>
                        </>
                        : <>
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
                            <Box sx={{ display: { lg: "none", xs: "block" }, mt: "46px" }}>
                                {links.map((item, index) => {
                                    if (item.link !== "") {
                                        return (
                                            (item.isId === true
                                                ? <HashLinkRouter key={`header_menu_item_${index}`} underline="none" color="inherit" to={item.link} onClick={toggleDrawer(false)}>
                                                    <Typography component="h5" fontSize="20px" fontFamily="Jura" fontWeight="600" sx={{ mb: "5px" }}>
                                                        {item.title}
                                                    </Typography>
                                                </HashLinkRouter>
                                                : <LinkRouter key={`header_menu_item_${index}`} underline="none" color={item.isSelected ? "primary" : "inherit"} to={item.link} >
                                                    <Typography component="h5" fontSize="20px" fontFamily="Jura" fontWeight="600" sx={{ mb: "5px" }}>
                                                        {item.title}
                                                    </Typography>
                                                </LinkRouter>)
                                        );
                                    }
                                    else {
                                        return (
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    mr: {
                                                        lg: "30px",
                                                        xs: "0px"
                                                    },
                                                    mb: {
                                                        lg: "0px",
                                                        xs: "5px"
                                                    },
                                                    cursor: "pointer"
                                                }}
                                                onClick={() => setIsOpenServices(true)}
                                            >
                                                <Typography
                                                    component="h5"
                                                    fontSize="20px"
                                                    fontFamily="Jura"
                                                    fontWeight="600"
                                                    color={item.isSelected ? "primary" : "inherit"}
                                                    sx={{ mr: "10px" }}
                                                >
                                                    {item.title}
                                                </Typography>
                                                <img
                                                    src={item.isSelected ? arrow_down_orange : (palette.mode === "dark" ? arrow_down_light : arrow_down_dark)}
                                                    alt="arrow_down_light"
                                                />
                                            </Box>
                                        )
                                    }
                                })}
                            </Box>
                            <Typography component="h5" fontSize="20px" fontFamily="Jura" fontWeight="700" sx={{ mt: { lg: "40px", xs: "64px" } }}>
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
                                    mt: { lg: "180px", xs: "35px" }
                                }}
                                onClick={handleThemeChange}
                            >
                                <img
                                    src={darkTheme ? sun_light : moon_dark}
                                    alt="sun_light"
                                    style={{ marginRight: "10px" }}
                                />
                                <Typography component="h5" fontSize="20px" fontFamily="Jura" fontWeight="400">
                                    {darkTheme ? t("components.header-menu.light-theme") : t("components.header-menu.dark-theme")}
                                </Typography>
                            </Box>
                        </>
                    }
                </Box>
            </Drawer>
        </>
    );
}
