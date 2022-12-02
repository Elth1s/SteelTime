import {
    Box,
    Container,
    Typography,
    useTheme,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

import HeaderDropdownMenu from "../../components/HeaderDropdownMenu";
import HeaderMenu from "../../components/HeaderMenu";
import HashLinkRouter from "../../components/HashLinkRouter";
import LinkRouter from "../../components/LinkRouter";

import header_logo_light from "../../assets/logos/header-logo-light.svg";
import header_logo_dark from "../../assets/logos/header-logo-dark.svg";

import { IHeaderMenuItem } from "../../types/types";


const Header = () => {
    const { t } = useTranslation();
    const { palette } = useTheme();
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
            link: "/order"
        },
    ];

    return (
        <Container
            component="header"
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mt: {
                    lg: "74px",
                    xs: "52px"
                },
                maxWidth: {
                    lg: "1270px",
                    md: "910px",
                    xs: "350px"
                }
            }}
        >
            <LinkRouter underline="none" color="inherit" to="/" sx={{ height: { lg: "43px", md: "43px", xs: "32px" } }}>
                <img
                    style={{ width: "100%", height: "100%" }}
                    src={palette.mode === "dark" ? header_logo_light : header_logo_dark}
                    alt="logo"
                />
            </LinkRouter>
            <Box sx={{ display: { lg: "flex", xs: "none" }, alignItems: "center", "&:last-child": { mr: 0 } }}>
                {links.map((item, index) => {
                    if (item.link !== "") {
                        return (
                            (item.isId === true
                                ? <HashLinkRouter key={`header_menu_item_${index}`} underline="none" color="inherit" to={item.link} sx={{ mr: "30px" }}>
                                    <Typography variant="h5" fontFamily="Jura" fontWeight="600">
                                        {item.title}
                                    </Typography>
                                </HashLinkRouter>
                                : <LinkRouter key={`header_menu_item_${index}`} underline="none" color={item.isSelected ? "primary" : "inherit"} to={item.link} sx={{ mr: "30px" }}>
                                    <Typography variant="h5" fontFamily="Jura" fontWeight="600">
                                        {item.title}
                                    </Typography>
                                </LinkRouter>)
                        );
                    }
                    else {
                        return (
                            <HeaderDropdownMenu key={`header_menu_item_${index}`} {...item} />
                        )
                    }
                })}
            </Box>
            <HeaderMenu />
        </Container >
    );
};

export default Header;