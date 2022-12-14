import {
    Box,
    Button,
    Container,
    Grid,
    hexToRgb,
    keyframes,
    styled,
    Typography,
    useTheme,
} from "@mui/material";

import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import HeaderMenu from "../../components/HeaderMenu";
import HeaderDropdownMenu from "../../components/HeaderDropdownMenu";
import LinkRouter from "../../components/LinkRouter";
import HashLinkRouter from "../../components/HashLinkRouter";
import AskOrOrderForm from "../../components/AskOrOrderForm";
import { MoreButton } from "../../components/Buttons";

import homepage_header from "../../assets/backgrounds/home/homepage-header.jpg";
import homepage_header_dark from "../../assets/backgrounds/home/homepage-header-dark.png";
import header_logo_light from "../../assets/logos/header-logo-light.svg";
import header_logo_dark from "../../assets/logos/header-logo-dark.svg";

import footer_logo_light from "../../assets/logos/footer-logo-light.svg"
import footer_logo_dark from "../../assets/logos/footer-logo-dark.svg"
import instagram_medium_light from "../../assets/icons/instagram-medium-light.svg";
import instagram_medium_dark from "../../assets/icons/instagram-medium-dark.svg";
import facebook_medium_light from "../../assets/icons/facebook-medium-light.svg";
import facebook_medium_dark from "../../assets/icons/facebook-medium-dark.svg";

import arrow_down_small_dark from "../../assets/icons/arrow-down-small-dark.svg";
import arrow_down_small_light from "../../assets/icons/arrow-down-small-light.svg";

import {
    about_us,
    building_metal_structures,
    building_metal_structures_small,
    metal_products,
    metal_products_small,
    unusual_metal_structures,
    unusual_metal_structures_small,
    metal_cover_1,
    metal_cover_medium_1,
    metal_cover_small_1,
    metal_cover_2,
    metal_cover_medium_2,
    metal_cover_small_2,
    armature_1,
    armature_medium_1,
    armature_small_1,
    armature_2,
    armature_medium_2,
    armature_small_2,
    laser_cutting_of_metal_1,
    laser_cutting_of_metal_medium_1,
    laser_cutting_of_metal_small_1,
    laser_cutting_of_metal_2,
    laser_cutting_of_metal_medium_2,
    laser_cutting_of_metal_small_2,
    reviews_dark,
    reviews_light,
    reviews_dark_medium,
    reviews_light_medium,
    reviews_dark_small,
    reviews_light_small,
} from "../../assets/backgrounds/home";

import { IHeaderMenuItem } from "../../types/types";

import "../../index.css"
import { Helmet } from "react-helmet";

interface IWorkWithUsInfo {
    title: string,
    description: string
}

const myKeyframe = keyframes`
from {
    transform: scale(1, 1);
  }
  to {
    transform: scale(1.5, 1.5);
  }
`;

const StyledImg = styled((props: any) => <img {...props} />)(({ theme }) => ({
    ":hover": {
        animation: `${myKeyframe} 2s forwards ease`
    },
    cursor: "pointer"
}));

const Header = () => {
    const { palette } = useTheme();
    const { t } = useTranslation();
    const navigate = useNavigate();

    const [isPhoneCopied, setIsPhoneCopied] = useState(false)

    const aboutUsRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        document.body.className = "body-home-style"
    }, []);

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
            link: "/production"
        },
        {
            title: t("containers.header.services.title"),
            link: "",
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
            link: "/order"
        },
        {
            title: t("containers.header.gallery"),
            link: "/#gallery",
            isId: true
        },
    ];

    const workWithUsInfos: Array<IWorkWithUsInfo> = [
        {
            title: t("pages.home.individual-approach"),
            description: t("pages.home.individual-approach-p")
        },
        {
            title: t("pages.home.own-production-areas"),
            description: t("pages.home.own-production-areas-p")
        },
        {
            title: t("pages.home.high-precision-equipment"),
            description: t("pages.home.high-precision-equipment-p")
        },
        {
            title: t("pages.home.finished-products"),
            description: t("pages.home.finished-products-p")
        },
        {
            title: t("pages.home.fast-deadlines"),
            description: t("pages.home.fast-deadlines-p")
        },
        {
            title: t("pages.home.delivery"),
            description: t("pages.home.delivery-p")
        },
    ]

    const displayPhoneToolTip = () => {
        if (!isPhoneCopied) {
            setIsPhoneCopied(true); // show tooltip
            setTimeout(() => {
                setIsPhoneCopied(false); // remove/hide tooltip
            }, 2000);
        }
    };

    return (
        <>
            <Helmet>
                <title>{t("meta-info.home.title")}</title>
                <meta name="og:title"
                    content={t("meta-info.home.title")} />
                <meta name="description"
                    content={t("meta-info.home.description")} />
                <meta name="og:description"
                    content={t("meta-info.home.description")} />
                <meta name="keywords"
                    content={t("key-words.home")} />
                <link rel="canonical" href="/" />
            </Helmet>
            <Box component="header" sx={{
                width: "100%",
                height: { lg: "960px", md: "710px", xs: "541px" },
                mx: "auto",
                backgroundImage: `url(${palette.mode === "dark" ? homepage_header : homepage_header_dark})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                boxShadow: `0px 0px 15px ${hexToRgb("#EF5803")}`
            }}>
                <Container
                    sx={{
                        maxWidth: {
                            lg: "1270px",
                            md: "910px",
                            xs: "350px"
                        }
                    }}
                >
                    <Box
                        key="navbar"
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            pt: {
                                lg: "74px",
                                xs: "52px"
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
                        <Box sx={{ display: { lg: "flex", alignItems: "center", xs: "none" }, "&:last-child": { mr: 0 } }}>
                            {links.map((item, index) => {
                                if (item.link !== "") {
                                    return (
                                        (item.isId === true
                                            ? <HashLinkRouter key={`header_menu_item_${index}`} underline="none" color="inherit" to={item.link} sx={{ mr: "30px" }}>
                                                <Typography variant="h5" fontFamily="Jura" fontWeight="600">
                                                    {item.title}
                                                </Typography>
                                            </HashLinkRouter>
                                            : <LinkRouter key={`header_menu_item_${index}`} underline="none" color="inherit" to={item.link} sx={{ mr: "30px" }}>
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
                    </Box>
                    <Box sx={{ pl: { lg: "112px", md: "39px" }, mt: { lg: "186px", md: "118px", xs: "103px" }, width: { lg: "630px", md: "404px", xs: "312px" } }}>
                        <Typography variant="h1" fontWeight="700" fontFamily="Raleway" sx={{ width: { lg: "630px", md: "404px", xs: "312px" } }}>
                            {t("pages.home.metalwork-or-loft-style-furniture")}
                        </Typography>
                        <Typography variant="h3" fontWeight="400" fontFamily="Raleway" sx={{ display: { xs: "none" }, pt: "20px" }}>
                            {t("pages.home.various-types-of-metal-structures-first")}
                            <br />
                            {t("pages.home.various-types-of-metal-structures-second")}
                        </Typography>
                        <Typography variant="h4" fontWeight="400" fontFamily="Raleway" sx={{ display: { lg: "none" }, pt: { md: "15px", xs: "10px" } }}>
                            {t("pages.home.various-types-of-metal-structures-first")}
                            <br />
                            {t("pages.home.various-types-of-metal-structures-second")}
                        </Typography>
                        <Button
                            variant="contained"
                            sx={{
                                height: { lg: "58px", md: "43px", xs: "38px" },
                                borderRadius: 0,
                                textTransform: "none",
                                fontSize: { lg: "24px", md: "20px", xs: "15px" },
                                mt: { lg: "70px", md: "50px", xs: "40px" },
                                "&:hover": {
                                    background: "transparent",
                                    border: `1px solid ${palette.primary.main}`,
                                    color: palette.primary.main
                                }
                            }}
                            onClick={() => navigate("order")}
                        >
                            {t("pages.home.calculate-the-cost")}
                        </Button>
                    </Box>
                    <Box sx={{ display: { lg: "flex", md: "none", xs: "none" }, justifyContent: "center", mt: "178px" }}>
                        <StyledImg
                            src={palette.mode === "dark" ? arrow_down_small_light : arrow_down_small_dark}
                            alt="arrow"
                            onClick={() => {
                                if (aboutUsRef !== null && aboutUsRef.current !== null)
                                    aboutUsRef.current.scrollIntoView({
                                        behavior: "smooth",
                                    });
                            }}
                        />
                    </Box>
                </Container>
            </Box>
            <Container component="main" sx={{ maxWidth: { lg: "1270px", md: "910px", xs: "350px" } }}>
                {/* ?????? ?????? */}
                <Box id="about-us" ref={aboutUsRef} sx={{ mt: { lg: "100px", md: "80px", xs: "60px" }, px: { lg: "46px", md: "80px" } }}>
                    <Typography align="center" variant="h2" fontFamily="Jura" fontWeight="700">
                        {t("containers.header.about-us")}
                    </Typography>
                    {/* lg */}
                    <Box sx={{ display: { lg: "flex", md: "none", xs: "none" }, alignItems: "center", mt: "40px" }}>
                        <img
                            src={about_us}
                            alt="about_us"
                            loading="lazy"
                        />
                        <Box sx={{ ml: { lg: "120px", md: "50px" } }}>
                            <Typography variant="h5" fontWeight="400" fontFamily="Raleway">
                                {t("pages.home.about-us-first-p")}
                                <br />
                                <br />
                                {t("pages.home.about-us-second-p")}
                            </Typography>
                        </Box>
                    </Box>
                    {/* md */}
                    <Box sx={{ display: { lg: "none", md: "flex", xs: "none" }, alignItems: "center", mt: "40px" }}>
                        <Box sx={{ width: "350px", height: "304px" }}>
                            <img
                                style={{ width: "100%", height: "100%" }}
                                src={about_us}
                                alt="about_us"
                                loading="lazy"
                            />
                        </Box>
                        <Box sx={{ width: "350px", ml: "50px" }}>
                            <Typography component="h5" fontSize="15px" lineHeight="17.61px" fontWeight="400" fontFamily="Raleway">
                                {t("pages.home.about-us-first-p")}
                                <br />
                                <br />
                                {t("pages.home.about-us-second-p")}
                            </Typography>
                        </Box>
                    </Box>
                    {/* xs */}
                    <Box sx={{ display: { lg: "none", md: "none", xs: "flex" }, flexDirection: "column", mt: "20px" }}>
                        <Typography variant="h5" fontWeight="400" align="center" fontFamily="Raleway">
                            {t("pages.home.about-us-first-p")}
                            <br />
                            <br />
                            {t("pages.home.about-us-second-p")}
                        </Typography>
                        <img
                            style={{ marginTop: "15px" }}
                            src={about_us}
                            alt="about_us"
                            loading="lazy"
                        />
                    </Box>
                </Box>
                {/* ???????? ?????????? ?????????????????? ?? ????????? */}
                <Box sx={{ mt: { lg: "150px", md: "80px", xs: "60px" }, px: { lg: "159px", md: "136px" } }}>
                    <Typography align="center" variant="h2" fontFamily="Jura" fontWeight="700">
                        {t("pages.home.why-should-you-work-with-us")}
                    </Typography>
                    {/* lg */}
                    <Box sx={{ display: { lg: "flex", md: "none", xs: "none" }, flexWrap: 'wrap', justifyContent: "space-between", mt: "50px" }}>
                        {workWithUsInfos.map((item, index) => {
                            return (
                                <Box key={`work_with_us_${index}`} sx={{ width: "299px", p: "10px", mb: (index < 3 ? "30px" : "0px"), boxShadow: "2px 2px 10px #E55C0F" }}>
                                    <Typography variant="h5" fontFamily="Jura" fontWeight="700">
                                        {item.title}
                                    </Typography>
                                    <Typography variant="h6" fontFamily="Raleway" fontWeight="400">
                                        {item.description}
                                    </Typography>
                                </Box>
                            );
                        })}
                    </Box>
                    {/* md */}
                    <Box sx={{ display: { lg: "none", md: "flex", xs: "none" }, flexWrap: 'wrap', justifyContent: "space-between", mt: "50px" }}>
                        {workWithUsInfos.map((item, index) => {
                            return (
                                <Box key={`work_with_us_${index}`} sx={{ width: "299px", p: "10px", mb: (index < 4 ? "50px" : "0px"), boxShadow: "2px 2px 10px #E55C0F" }}>
                                    <Typography variant="h5" fontFamily="Jura" fontWeight="700">
                                        {item.title}
                                    </Typography>
                                    <Typography variant="h6" fontFamily="Raleway" fontWeight="400">
                                        {item.description}
                                    </Typography>
                                </Box>
                            );
                        })}
                    </Box>
                    {/* xs */}
                    <Box sx={{ display: { lg: "none", md: "none", xs: "block" }, mt: "40px" }}>
                        {workWithUsInfos.map((item, index) => {
                            return (
                                <Box key={`work_with_us_${index}`} sx={{ width: "315px", p: "10px", mx: "auto", mb: (index === 5 ? "0px" : "25px"), boxShadow: "2px 2px 10px #E55C0F" }}>
                                    <Typography variant="h3" fontFamily="Jura" fontWeight="700">
                                        {item.title}
                                    </Typography>
                                    <Typography variant="h6" fontFamily="Raleway">
                                        {item.description}
                                    </Typography>
                                </Box>
                            );
                        })}
                    </Box>
                </Box>
                {/* ?????????????????????? */}
                <Box id="production" sx={{ mt: { lg: "150px", md: "80px", xs: "60px" }, px: { lg: "135.5px" } }}>
                    <Typography align="center" variant="h2" fontFamily="Jura" fontWeight="700">
                        {t("containers.header.production")}
                    </Typography>
                    {/* lg,md */}
                    <Box sx={{ display: { lg: "flex", md: "flex", xs: "none" }, justifyContent: "space-between", mt: "50px" }}>
                        <Box sx={{ width: { lg: "291px", md: "281px" }, height: { lg: "379px", md: "321px" }, p: { lg: "20px 10px 10px 10px", md: "20px 5px 10px 5px" }, boxShadow: "2px 2px 10px #E55C0F" }}>
                            <Typography align="center" variant="h5" fontFamily="Raleway" fontWeight="500" textTransform="uppercase">
                                {t("pages.home.building-metal-structures")}
                            </Typography>
                            <Box sx={{ width: { lg: "267px", md: "250px" }, height: { lg: "267px", md: "250px" }, mt: { lg: "36px", md: "20px" }, mx: "auto" }}>
                                <img
                                    src={building_metal_structures}
                                    alt="building_metal_structures"
                                    style={{ width: "100%", height: "100%" }}
                                    loading="lazy"
                                />
                            </Box>
                        </Box>
                        <Box sx={{ width: { lg: "315px", md: "305px" }, height: { lg: "394px", md: "345px" }, p: { lg: "20px 10px 10px 10px", md: "20px 5px 10px 5px" }, boxShadow: "2px 2px 10px #E55C0F" }}>
                            <Typography align="center" variant="h5" fontFamily="Raleway" fontWeight="500" textTransform="uppercase">
                                {t("pages.home.metal-products")}
                            </Typography>
                            <Box sx={{ width: { lg: "295px", md: "276px" }, height: { lg: "305px", md: "276px" }, mt: { lg: "36px", md: "20px" }, mx: "auto" }}>
                                <img
                                    src={metal_products}
                                    alt="metal_products"
                                    style={{ width: "100%", height: "100%" }}
                                    loading="lazy"
                                />
                            </Box>
                        </Box>
                        <Box sx={{ width: { lg: "288px", md: "278px" }, height: { lg: "379px", md: "321px" }, p: { lg: "20px 10px 10px 10px", md: "20px 5px 10px 5px" }, boxShadow: "2px 2px 10px #E55C0F" }}>
                            <Typography align="center" variant="h5" fontFamily="Raleway" fontWeight="500" textTransform="uppercase">
                                {t("pages.home.unusual-metal-structures")}
                            </Typography>
                            <Box sx={{ width: { lg: "267px", md: "250px" }, height: { lg: "267px", md: "250px" }, mt: { lg: "36px", md: "20px" }, mx: "auto" }}>
                                <img
                                    src={unusual_metal_structures}
                                    alt="unusual_metal_structures"
                                    style={{ width: "100%", height: "100%" }}
                                    loading="lazy"
                                />
                            </Box>
                        </Box>
                    </Box>
                    {/* xs */}
                    <Box sx={{ display: { lg: "none", md: "none", xs: "block" }, width: "278px", mt: "40px", mx: "auto" }}>
                        <Box sx={{ p: "20px 20px 10px 20px", boxShadow: "2px 2px 10px #E55C0F", mb: "25px" }}>
                            <Typography align="center" variant="h3" fontFamily="Raleway" fontWeight="500" textTransform="uppercase">
                                {t("pages.home.building-metal-structures")}
                            </Typography>
                            <img
                                src={building_metal_structures_small}
                                alt="building_metal_structures"
                                style={{ marginTop: "25px" }}
                                loading="lazy"
                            />
                        </Box>
                        <Box sx={{ p: "20px 20px 10px 20px", boxShadow: "2px 2px 10px #E55C0F", mb: "25px" }}>
                            <Typography align="center" variant="h3" fontFamily="Raleway" fontWeight="500" textTransform="uppercase">
                                {t("pages.home.metal-products")}
                            </Typography>
                            <img
                                src={metal_products_small}
                                alt="metal_products"
                                style={{ marginTop: "25px" }}
                                loading="lazy"
                            />
                        </Box>
                        <Box sx={{ p: "20px 20px 10px 20px", boxShadow: "2px 2px 10px #E55C0F" }}>
                            <Typography align="center" variant="h3" fontFamily="Raleway" fontWeight="500" textTransform="uppercase">
                                {t("pages.home.unusual-metal-structures")}
                            </Typography>
                            <img
                                src={unusual_metal_structures_small}
                                alt="unusual_metal_structures"
                                style={{ marginTop: "25px" }}
                                loading="lazy"
                            />
                        </Box>
                    </Box>
                    <Box sx={{ mt: { lg: "70px", md: "60px", xs: "40px" }, display: "flex", justifyContent: "center" }}>
                        <LinkRouter underline="none" color="inherit" to="/production" >
                            <Button
                                variant="contained"
                                sx={{
                                    height: { lg: "43px", xs: "39px" },
                                    borderRadius: 0,
                                    textTransform: "none",
                                    fontSize: { lg: "20px", xs: "16px" }
                                }}
                            >
                                {t("pages.home.learn-more")}
                            </Button>
                        </LinkRouter>
                    </Box>
                </Box>
                {/* ?????????????? */}
                <Box id="gallery" sx={{ mt: { lg: "150px", xs: "60px" }, px: { lg: "2px" } }}>
                    <Typography align="center" variant="h2" fontFamily="Jura" fontWeight="700">
                        {t("containers.header.gallery")}
                    </Typography>
                    {/* lg */}
                    <Box sx={{ display: { lg: "flex", md: "none", xs: "none" }, mt: "50px" }}>
                        <img
                            src={metal_cover_1}
                            alt="metal_cover_first"
                            loading="lazy"
                        />
                        <Box sx={{ mx: "50px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                            <Box>
                                <Typography variant="h5" fontFamily="Jura" fontWeight="600">
                                    {t("pages.home.metal-cover")}
                                </Typography>
                                <Typography variant="h6" fontFamily="Raleway" fontWeight="400" sx={{ mt: "10px" }}>
                                    {t("pages.home.metal-cover-first-p")}
                                    <br />
                                    {t("pages.home.metal-cover-second-p")}
                                </Typography>
                            </Box>
                            <img
                                src={metal_cover_2}
                                alt="metal_cover_second"
                                style={{ marginTop: "auto" }}
                                loading="lazy"
                            />
                        </Box>
                        <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "end" }}>
                            <MoreButton link="production/non-standard-metal-structures-and-equipment" />
                        </Box>
                    </Box>
                    <Box sx={{ display: { lg: "flex", md: "none", xs: "none" }, mt: "100px" }}>
                        <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "end" }}>
                            <MoreButton link="production/reinforcement-frames-and-embedded-products" />
                        </Box>
                        <Box sx={{ mx: "50px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                            <Box>
                                <Typography variant="h5" fontFamily="Jura" fontWeight="600" align="right">
                                    {t("pages.home.armature")}
                                </Typography>
                                <Typography variant="h6" fontFamily="Raleway" fontWeight="400" align="right" sx={{ mt: "10px" }}>
                                    {t("pages.home.armature-first-p")}
                                    <br />
                                    {t("pages.home.armature-second-p")}
                                </Typography>
                            </Box>
                            <img
                                src={armature_2}
                                alt="armature_second"
                                style={{ marginTop: "auto" }}
                                loading="lazy"
                            />
                        </Box>
                        <img
                            src={armature_1}
                            alt="armature_first"
                            loading="lazy"
                        />
                    </Box>
                    <Box sx={{ display: { lg: "flex", md: "none", xs: "none" }, mt: "100px" }}>
                        <img
                            src={laser_cutting_of_metal_1}
                            alt="laser_cutting_of_metal_first"
                            loading="lazy"
                        />
                        <Box sx={{ mx: "50px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                            <Box>
                                <Typography variant="h5" fontFamily="Jura" fontWeight="600">
                                    {t("pages.home.laser-cutting-of-metal")}
                                </Typography>
                                <Typography variant="h6" fontFamily="Raleway" fontWeight="400" sx={{ mt: "10px" }}>
                                    {t("pages.home.laser-cutting-of-metal-first-p")}
                                    <br />
                                    {t("pages.home.laser-cutting-of-metal-second-p")}
                                </Typography>
                            </Box>
                            <img
                                src={laser_cutting_of_metal_2}
                                alt="laser_cutting_of_metal_second"
                                style={{ marginTop: "auto" }}
                                loading="lazy"
                            />
                        </Box>
                        <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "end" }}>
                            <MoreButton link="production/building-metal-structures" />
                        </Box>
                    </Box>
                    {/* md */}
                    <Box sx={{ display: { lg: "none", md: "flex", xs: "none" }, mt: "50px" }}>
                        <img
                            src={metal_cover_medium_1}
                            alt="metal_cover_first"
                            loading="lazy"
                        />
                        <Box sx={{ mx: "50px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                            <Box>
                                <Typography variant="h5" fontFamily="Jura" fontWeight="600">
                                    {t("pages.home.metal-cover")}
                                </Typography>
                                <Typography variant="h6" fontFamily="Raleway" fontWeight="400" sx={{ mt: "10px" }}>
                                    {t("pages.home.metal-cover-first-p")}
                                    <br />
                                    {t("pages.home.metal-cover-second-p")}
                                </Typography>
                            </Box>
                            <img
                                src={metal_cover_medium_2}
                                alt="metal_cover_second"
                                style={{ marginTop: "auto" }}
                                loading="lazy"
                            />
                        </Box>
                        <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "end" }}>
                            <MoreButton link="production/non-standard-metal-structures-and-equipment" />
                        </Box>
                    </Box>
                    <Box sx={{ display: { lg: "none", md: "flex", xs: "none" }, mt: "100px" }}>
                        <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "end" }}>
                            <MoreButton link="production/reinforcement-frames-and-embedded-products" />
                        </Box>
                        <Box sx={{ mx: "50px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                            <Box>
                                <Typography variant="h5" fontFamily="Jura" fontWeight="600" align="right">
                                    {t("pages.home.armature")}
                                </Typography>
                                <Typography variant="h6" fontFamily="Raleway" fontWeight="400" align="right" sx={{ mt: "10px" }}>
                                    {t("pages.home.armature-first-p")}
                                    <br />
                                    {t("pages.home.armature-second-p")}
                                </Typography>
                            </Box>
                            <img
                                src={armature_medium_2}
                                alt="armature_second"
                                style={{ marginTop: "auto" }}
                                loading="lazy"
                            />
                        </Box>
                        <img
                            src={armature_medium_1}
                            alt="armature_first"
                            loading="lazy"
                        />
                    </Box>
                    <Box sx={{ display: { lg: "none", md: "flex", xs: "none" }, mt: "100px" }}>
                        <Box sx={{ width: "400", height: "300px" }}>
                            <img
                                src={laser_cutting_of_metal_medium_1}
                                alt="laser_cutting_of_metal_first"
                                loading="lazy"
                            />
                        </Box>
                        <Box sx={{ mx: "50px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                            <Box>
                                <Typography variant="h5" fontFamily="Jura" fontWeight="600">
                                    {t("pages.home.laser-cutting-of-metal")}
                                </Typography>
                                <Typography variant="h6" fontFamily="Raleway" fontWeight="400" sx={{ mt: "10px" }}>
                                    {t("pages.home.laser-cutting-of-metal-first-p")}
                                    <br />
                                    {t("pages.home.laser-cutting-of-metal-second-p")}
                                </Typography>
                            </Box>
                            <img
                                src={laser_cutting_of_metal_medium_2}
                                alt="laser_cutting_of_metal_second"
                                style={{ marginTop: "auto" }}
                                loading="lazy"
                            />
                        </Box>
                        <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "end" }}>
                            <MoreButton link="production/building-metal-structures" />
                        </Box>
                    </Box>
                    {/* xs */}
                    <Box sx={{ display: { lg: "none", md: "none", xs: "block" }, mt: "40px" }}>
                        <Box sx={{ display: "flex", alignItems: "center", mb: "20px" }}>
                            <img
                                src={metal_cover_small_1}
                                alt="metal_cover_small_1"
                                style={{ marginRight: "15px" }}
                                loading="lazy"
                            />
                            <Box>
                                <Typography variant="h3" fontFamily="Jura" fontWeight="600">
                                    {t("pages.home.metal-cover")}
                                </Typography>
                                <Typography variant="h6" fontFamily="Raleway" fontWeight="400" sx={{ mt: "10px" }}>
                                    {t("pages.home.metal-cover-first-p")} {t("pages.home.metal-cover-second-p")}
                                </Typography>
                            </Box>
                        </Box>
                        <img
                            src={metal_cover_small_2}
                            alt="metal_cover_small_2"
                            loading="lazy"
                            style={{ cursor: "pointer" }}
                            onClick={() => navigate("production/non-standard-metal-structures-and-equipment")}
                        />
                    </Box>
                    <Box sx={{ display: { lg: "none", md: "none", xs: "block" }, mt: "50px" }}>
                        <Box sx={{ display: "flex", alignItems: "center", mb: "20px" }}>
                            <Box>
                                <Typography variant="h3" fontFamily="Jura" fontWeight="600" align="right">
                                    {t("pages.home.armature")}
                                </Typography>
                                <Typography variant="h6" fontFamily="Raleway" fontWeight="400" align="right" sx={{ mt: "10px" }}>
                                    {t("pages.home.armature-first-p")} {t("pages.home.armature-second-p")}
                                </Typography>
                            </Box>
                            <img
                                src={armature_small_1}
                                alt="armature_small_1"
                                style={{ marginLeft: "15px" }}
                                loading="lazy"
                            />
                        </Box>
                        <img
                            src={armature_small_2}
                            alt="armature_small_2"
                            loading="lazy"
                            style={{ cursor: "pointer" }}
                            onClick={() => navigate("production/reinforcement-frames-and-embedded-products")}
                        />
                    </Box>
                    <Box sx={{ display: { lg: "none", md: "none", xs: "block" }, mt: "50px" }}>
                        <Box sx={{ display: "flex", alignItems: "center", mb: "20px" }}>
                            <img
                                src={laser_cutting_of_metal_small_1}
                                alt="laser_cutting_of_metal_small_1"
                                style={{ marginRight: "15px" }}
                                loading="lazy"
                            />
                            <Box>
                                <Typography variant="h3" fontFamily="Jura" fontWeight="600">
                                    {t("pages.home.laser-cutting-of-metal")}
                                </Typography>
                                <Typography variant="h6" fontFamily="Raleway" fontWeight="400" sx={{ mt: "10px" }}>
                                    {t("pages.home.laser-cutting-of-metal-first-p")} {t("pages.home.laser-cutting-of-metal-second-p")}
                                </Typography>
                            </Box>
                        </Box>
                        <img
                            src={laser_cutting_of_metal_small_2}
                            alt="laser_cutting_of_metal_small_2"
                            loading="lazy"
                            style={{ cursor: "pointer" }}
                            onClick={() => navigate("production/building-metal-structures")}
                        />
                    </Box>
                </Box>
                {/* ?????????????? */}
                <Box sx={{ mt: { lg: "150px", xs: "60px" }, px: { lg: "77.5px" } }}>
                    <Typography align="center" variant="h2" fontFamily="Jura" fontWeight="700">
                        {t("pages.home.reviews")}
                    </Typography>
                    <Box sx={{ display: { lg: "block", md: "none", xs: "none" } }}>
                        <img
                            src={palette.mode === "dark" ? reviews_dark : reviews_light}
                            alt="reviews"
                            style={{ marginTop: "50px" }}
                            loading="lazy"
                        />
                    </Box>
                    <Box sx={{ display: { lg: "none", md: "block", xs: "none" } }}>
                        <img
                            src={palette.mode === "dark" ? reviews_dark_medium : reviews_light_medium}
                            alt="reviews"
                            style={{ marginTop: "50px" }}
                            loading="lazy"
                        />
                    </Box>
                    <Box sx={{ display: { lg: "none", md: "none", xs: "flex" }, justifyContent: "center" }}>
                        <img
                            src={palette.mode === "dark" ? reviews_dark_small : reviews_light_small}
                            alt="reviews"
                            style={{ marginTop: "40px" }}
                            loading="lazy"
                        />
                    </Box>
                </Box>
                {/* ???????????? ???????????????? ?????????? ?????? ???????????????????? ????????????????????? */}
                <Box sx={{ mt: { lg: "200px", md: "100px", xs: "60px" }, px: { lg: "347px", md: "155px", xs: "18.5px" } }}>
                    <AskOrOrderForm />
                </Box>
            </Container>
            <Box
                id="contacts"
                component="footer"
                sx={{
                    mt: { lg: "153px", xs: "77px" },
                    pt: { lg: "20px", xs: "10px" },
                    pb: { lg: "130px", md: "85px", xs: "30px" },
                    borderTop: `1px solid ${palette.text.primary}`,
                    background: palette.background.default
                }}
            >
                <Container sx={{ maxWidth: { lg: "1270px", md: "900px", xs: "340px" } }}>
                    {/* lg,md */}
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
                            <Typography variant="h3" fontFamily="Raleway" fontWeight="500">
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
        </>
    );
};

export default Header;