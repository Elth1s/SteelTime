import {
    Box,
    Button,
    Container,
    Grid,
    hexToRgb,
    TextField,
    Typography,
    useTheme,
} from "@mui/material";

import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";

import HeaderMenu from "../../components/HeaderMenu";
import HeaderDropdownMenu from "../../components/HeaderDropdownMenu";
import LinkRouter from "../../components/LinkRouter";
import HashLinkRouter from "../../components/HashLinkRouter";
import { MoreButton } from "../../components/Buttons";

import homepage_header from "../../assets/backgrounds/homepage-header.jpg";
import homepage_header_dark from "../../assets/backgrounds/homepage-header-dark.png";
import header_logo_light from "../../assets/logos/header-logo-light.svg";
import header_logo_dark from "../../assets/logos/header-logo-dark.svg";

import abous_us from "../../assets/backgrounds/about-us.png";

import building_metal_structures from "../../assets/backgrounds/building-metal-structures.png"
import building_metal_structures_small from "../../assets/backgrounds/building-metal-structures-small.png"
import metal_products from "../../assets/backgrounds/metal-products.png"
import metal_products_small from "../../assets/backgrounds/metal-products-small.png"
import unusual_metal_structures from "../../assets/backgrounds/unusual-metal-structures.png"
import unusual_metal_structures_small from "../../assets/backgrounds/unusual-metal-structures-small.png"

import metal_cover_1 from "../../assets/backgrounds/metal-cover-1.png"
import metal_cover_small_1 from "../../assets/backgrounds/metal-cover-small-1.png"
import metal_cover_2 from "../../assets/backgrounds/metal-cover-2.png"
import metal_cover_small_2 from "../../assets/backgrounds/metal-cover-small-2.png"
import armature_1 from "../../assets/backgrounds/armature-1.png"
import armature_small_1 from "../../assets/backgrounds/armature-small-1.png"
import armature_2 from "../../assets/backgrounds/armature-2.png"
import armature_small_2 from "../../assets/backgrounds/armature-small-2.png"
import laser_cutting_of_metal_1 from "../../assets/backgrounds/laser-cutting-of-metal-1.png"
import laser_cutting_of_metal_small_1 from "../../assets/backgrounds/laser-cutting-of-metal-small-1.png"
import laser_cutting_of_metal_2 from "../../assets/backgrounds/laser-cutting-of-metal-2.png"
import laser_cutting_of_metal_small_2 from "../../assets/backgrounds/laser-cutting-of-metal-small-2.png"

import reviews_dark from "../../assets/backgrounds/reviews-dark.png"
import reviews_light from "../../assets/backgrounds/reviews-light.png"
import reviews_dark_small from "../../assets/backgrounds/reviews-dark-small.png"
import reviews_light_small from "../../assets/backgrounds/reviews-light-small.png"

import footer_logo_light from "../../assets/logos/footer-logo-light.svg"
import footer_logo_dark from "../../assets/logos/footer-logo-dark.svg"
import instagram_medium_light from "../../assets/icons/instagram-medium-light.svg";
import instagram_medium_dark from "../../assets/icons/instagram-medium-dark.svg";
import facebook_medium_light from "../../assets/icons/facebook-medium-light.svg";
import facebook_medium_dark from "../../assets/icons/facebook-medium-dark.svg";

import { IHeaderMenuItem } from "../../types/types";

import "../../index.css"

interface IWorkWithUsInfo {
    title: string,
    description: string
}

interface ISendEmail {
    name: string,
    phone: string,
    email: string,
    message: string
}

const Header = () => {
    const { palette } = useTheme();
    const { t } = useTranslation();

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
            link: "/"
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

    const sendEmailModel: ISendEmail = { name: '', phone: '', email: '', message: '' };

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const SendEmailSchema = Yup.object().shape({
        name: Yup.string()
            .required(`${t("validationProps.name")} ${t("validationMessages.is-required-first")}`)
            .label(t("validationProps.name")),
        phone: Yup.string()
            .required(`${t("validationProps.phone")} ${t("validationMessages.is-required-first")}`)
            .matches(phoneRegExp, `${t("validationProps.phone")} ${t("validationMessages.is-not-valid-first")}`)
            .label(t("validationProps.phone")),
        email: Yup.string()
            .required(`${t("validationProps.email")} ${t("validationMessages.is-required-second")}`)
            .email(`${t("validationProps.email")} ${t("validationMessages.is-not-valid-second")}`)
            .label(t("validationProps.email")),
        message: Yup.string()
            .required(`${t("validationProps.message")} ${t("validationMessages.is-required-third")}`)
            .label(t("validationProps.message")),
    });

    const formik = useFormik({
        initialValues: sendEmailModel,
        validationSchema: SendEmailSchema,
        onSubmit: (values) => {
            try {
                // emailjs.send("service_661asda", "template_z72bxrn", {
                //     name: values.name,
                //     phone: values.phone,
                //     email: values.email,
                //     message: values.message,
                // }, "lxE0AqKUTzAtFuvbb");
                // toast.success("The message has been sent")
            }
            catch (ex) {
                console.log(ex)
                // toast.warning("Something went wrong")
            }

        }
    });

    const { errors, touched, handleSubmit, getFieldProps } = formik;

    return (
        <>
            <Box component="header" sx={{
                width: "100%",
                height: { lg: "960px", xs: "541px" },
                mx: "auto",
                backgroundImage: `url(${palette.mode === "dark" ? homepage_header : homepage_header_dark})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                boxShadow: `0px 0px 15px ${hexToRgb("#EF5803")}`
            }}>
                <Container sx={{ maxWidth: { lg: "1270px", xs: "350px" }, height: "960px" }}>
                    <Box key="navbar" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", pt: { lg: "74px", xs: "52px" } }}>
                        <LinkRouter underline="none" color="inherit" to="/" sx={{ height: { lg: "43px", xs: "32px" } }}>
                            <img
                                style={{ width: "100%", height: "100%" }}
                                src={palette.mode === "dark" ? header_logo_light : header_logo_dark}
                                alt="logo"
                            />
                        </LinkRouter>
                        <Box sx={{ display: { lg: "flex", xs: "none" }, "&:last-child": { mr: 0 } }}>
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
                    <Box sx={{ pl: { lg: "112px" }, mt: { lg: "186px", xs: "103px" }, width: { lg: "630px", xs: "312px" } }}>
                        <Typography variant="h1" fontWeight="700" fontFamily="Raleway" sx={{ width: { lg: "630px", xs: "312px" } }}>
                            {t("pages.home.metalwork-or-loft-style-furniture")}
                        </Typography>
                        <Typography variant="h3" fontWeight="400" fontFamily="Raleway" sx={{ pt: { lg: "20px", xs: "10px" } }}>
                            {t("pages.home.various-types-of-metal-structures-first")}
                            <br />
                            {t("pages.home.various-types-of-metal-structures-second")}
                        </Typography>
                        <Button
                            variant="contained"
                            sx={{
                                height: { lg: "58px", xs: "38px" },
                                borderRadius: 0,
                                textTransform: "none",
                                fontSize: { lg: "24px", xs: "15px" },
                                mt: { lg: "70px", xs: "40px" }
                            }}
                        >
                            {t("pages.home.calculate-the-cost")}
                        </Button>
                    </Box>
                </Container>
            </Box>
            <Container component="main" sx={{ maxWidth: { lg: "1270px", xs: "350px" } }}>
                {/* Про нас */}
                <Box id="about-us" sx={{ mt: { lg: "100px", xs: "60px" }, px: { lg: "46px" } }}>
                    <Typography align="center" variant="h2" fontFamily="Jura" fontWeight="700">
                        {t("containers.header.about-us")}
                    </Typography>
                    {/* lg */}
                    <Box sx={{ display: { lg: "flex", xs: "none" }, alignItems: "center", mt: "40px" }}>
                        <img
                            src={abous_us}
                            alt="about_us"
                        />
                        <Box sx={{ ml: "120px" }}>
                            <Typography variant="h5" fontWeight="400" fontFamily="Raleway">
                                {t("pages.home.about-us-first-p")}
                                <br />
                                <br />
                                {t("pages.home.about-us-second-p")}
                            </Typography>
                        </Box>
                    </Box>
                    {/* xs */}
                    <Box sx={{ display: { lg: "none", xs: "flex" }, flexDirection: "column", mt: "20px" }}>
                        <Typography variant="h5" fontWeight="400" align="center" fontFamily="Raleway">
                            {t("pages.home.about-us-first-p")}
                            <br />
                            <br />
                            {t("pages.home.about-us-second-p")}
                        </Typography>
                        <img
                            style={{ marginTop: "15px" }}
                            src={abous_us}
                            alt="about_us"
                        />
                    </Box>
                </Box>
                {/* Чому варто працювати з нами? */}
                <Box sx={{ mt: { lg: "150px", xs: "60px" }, px: { lg: "159px" } }}>
                    <Typography align="center" variant="h2" fontFamily="Jura" fontWeight="700">
                        {t("pages.home.why-should-you-work-with-us")}
                    </Typography>
                    {/* lg */}
                    <Box sx={{ display: { lg: "flex", xs: "none" }, flexWrap: 'wrap', justifyContent: "space-between", mt: "50px" }}>
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
                    {/* xs */}
                    <Box sx={{ display: { lg: "none", xs: "block" }, mt: "40px" }}>
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
                {/* Виробництво */}
                <Box id="production" sx={{ mt: { lg: "150px", xs: "60px" }, px: { lg: "135.5px" } }}>
                    <Typography align="center" variant="h2" fontFamily="Jura" fontWeight="700">
                        {t("containers.header.production")}
                    </Typography>
                    {/* lg */}
                    <Box sx={{ display: { lg: "flex", xs: "none" }, justifyContent: "space-between", mt: "50px" }}>
                        <Box sx={{ width: "288px", height: "379px", p: "20px 10px 10px 10px", boxShadow: "2px 2px 10px #E55C0F" }}>
                            <Typography align="center" variant="h5" fontFamily="Raleway" fontWeight="500" textTransform="uppercase">
                                {t("pages.home.building-metal-structures")}
                            </Typography>
                            <img
                                src={building_metal_structures}
                                alt="building_metal_structures"
                                style={{ marginTop: "36px" }}
                            />
                        </Box>
                        <Box sx={{ width: "325px", height: "394px", p: "20px 10px 10px 10px", boxShadow: "2px 2px 10px #E55C0F" }}>
                            <Typography align="center" variant="h5" fontFamily="Raleway" fontWeight="500" textTransform="uppercase">
                                {t("pages.home.metal-products")}
                            </Typography>
                            <img
                                src={metal_products}
                                alt="metal_products"
                                style={{ marginTop: "36px" }}
                            />
                        </Box>
                        <Box sx={{ width: "288px", height: "379px", p: "20px 10px 10px 10px", boxShadow: "2px 2px 10px #E55C0F" }}>
                            <Typography align="center" variant="h5" fontFamily="Raleway" fontWeight="500" textTransform="uppercase">
                                {t("pages.home.unusual-metal-structures")}
                            </Typography>
                            <img
                                src={unusual_metal_structures}
                                alt="unusual_metal_structures"
                                style={{ marginTop: "36px" }}
                            />
                        </Box>
                    </Box>
                    {/* xs */}
                    <Box sx={{ display: { lg: "none", xs: "block" }, width: "278px", mt: "40px", mx: "auto" }}>
                        <Box sx={{ p: "20px 20px 10px 20px", boxShadow: "2px 2px 10px #E55C0F", mb: "25px" }}>
                            <Typography align="center" variant="h3" fontFamily="Raleway" fontWeight="500" textTransform="uppercase">
                                {t("pages.home.building-metal-structures")}
                            </Typography>
                            <img
                                src={building_metal_structures_small}
                                alt="building_metal_structures"
                                style={{ marginTop: "25px" }}
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
                            />
                        </Box>
                    </Box>
                    <Box sx={{ mt: "70px", display: "flex", justifyContent: "center" }}>
                        <LinkRouter underline="none" color="inherit" to="/production" >
                            <Button
                                variant="contained"
                                sx={{
                                    width: { lg: "187px", xs: "154px" },
                                    height: { lg: "43px", xs: "39px" },
                                    px: 0,
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
                {/* Галерея */}
                <Box id="gallery" sx={{ mt: { lg: "150px", xs: "60px" }, px: { lg: "2px" } }}>
                    <Typography align="center" variant="h2" fontFamily="Jura" fontWeight="700">
                        {t("containers.header.gallery")}
                    </Typography>
                    {/* lg */}
                    <Box sx={{ display: { lg: "flex", xs: "none" }, mt: "50px" }}>
                        <img
                            src={metal_cover_1}
                            alt="metal_cover_first"
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
                            />
                        </Box>
                        <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "end" }}>
                            <MoreButton />
                        </Box>
                    </Box>
                    <Box sx={{ display: { lg: "flex", xs: "none" }, mt: "100px" }}>
                        <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "end" }}>
                            <MoreButton />
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
                            />
                        </Box>
                        <img
                            src={armature_1}
                            alt="armature_first"
                        />
                    </Box>
                    <Box sx={{ display: { lg: "flex", xs: "none" }, mt: "100px" }}>
                        <img
                            src={laser_cutting_of_metal_1}
                            alt="laser_cutting_of_metal_first"
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
                            />
                        </Box>
                        <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "end" }}>
                            <MoreButton />
                        </Box>
                    </Box>
                    {/* xs */}
                    <Box sx={{ display: { lg: "none", xs: "block" }, mt: "40px" }}>
                        <Box sx={{ display: "flex", alignItems: "center", mb: "20px" }}>
                            <img
                                src={metal_cover_small_1}
                                alt="metal_cover_small_1"
                                style={{ marginRight: "15px" }}
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
                        />
                    </Box>
                    <Box sx={{ display: { lg: "none", xs: "block" }, mt: "50px" }}>
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
                            />
                        </Box>
                        <img
                            src={armature_small_2}
                            alt="armature_small_2"
                        />
                    </Box>
                    <Box sx={{ display: { lg: "none", xs: "block" }, mt: "50px" }}>
                        <Box sx={{ display: "flex", alignItems: "center", mb: "20px" }}>
                            <img
                                src={laser_cutting_of_metal_small_1}
                                alt="laser_cutting_of_metal_small_1"
                                style={{ marginRight: "15px" }}
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
                        />
                    </Box>
                </Box>
                {/* Відгуки */}
                <Box sx={{ mt: { lg: "150px", xs: "60px" }, px: { lg: "77.5px" } }}>
                    <Typography align="center" variant="h2" fontFamily="Jura" fontWeight="700">
                        {t("pages.home.reviews")}
                    </Typography>
                    <Box sx={{ display: { lg: "block", xs: "none" } }}>
                        <img
                            src={palette.mode === "dark" ? reviews_dark : reviews_light}
                            alt="reviews"
                            style={{ marginTop: "50px" }}
                        />
                    </Box>
                    <Box sx={{ display: { lg: "none", xs: "flex" }, justifyContent: "center" }}>
                        <img
                            src={palette.mode === "dark" ? reviews_dark_small : reviews_light_small}
                            alt="reviews"
                            style={{ marginTop: "40px" }}
                        />
                    </Box>
                </Box>
                {/* Хочете замовити виріб або обговорити замовлення? */}
                <Box sx={{ mt: { lg: "200px", xs: "60px" }, px: { lg: "347.5px", xs: "18.5px" } }}>
                    <Typography align="center" variant="h2" fontFamily="Jura" fontWeight="700">
                        {t("pages.home.do-you-want-to-order-a-product")}
                    </Typography>
                    <FormikProvider value={formik} >
                        <Form autoComplete="off" noValidate onSubmit={handleSubmit} >
                            <Grid container sx={{ mt: { lg: "44px", xs: "28px" }, "&>*:nth-of-type(1)": { pt: "0px" } }} rowSpacing={{ lg: "28px", xs: "14px" }}>
                                <Grid item xs={12} >
                                    <TextField
                                        fullWidth
                                        variant="standard"
                                        type="text"
                                        label={t("validationProps.name")}
                                        size="small"
                                        {...getFieldProps('name')}
                                        error={Boolean(touched.name && errors.name)}
                                        helperText={touched.name && errors.name}
                                    />
                                </Grid>
                                <Grid item xs={12} >
                                    <TextField
                                        fullWidth
                                        variant="standard"
                                        type="text"
                                        label={t("validationProps.phone")}
                                        size="small"
                                        {...getFieldProps('phone')}
                                        error={Boolean(touched.phone && errors.phone)}
                                        helperText={touched.phone && errors.phone}
                                    />
                                </Grid>
                                <Grid item xs={12} >
                                    <TextField
                                        fullWidth
                                        variant="standard"
                                        type="text"
                                        label={t("validationProps.email")}
                                        size="small"
                                        {...getFieldProps('email')}
                                        error={Boolean(touched.email && errors.email)}
                                        helperText={touched.email && errors.email}
                                    />
                                </Grid>
                                <Grid item xs={12} >
                                    <TextField
                                        fullWidth
                                        variant="standard"
                                        type="text"
                                        label={t("validationProps.message")}
                                        size="small"
                                        {...getFieldProps('message')}
                                        error={Boolean(touched.message && errors.message)}
                                        helperText={touched.message && errors.message}
                                    />
                                </Grid>
                            </Grid>
                            <Box sx={{ mt: { lg: "74px", xs: "40px" }, display: "flex", justifyContent: "center" }}>
                                <Button
                                    variant="contained"
                                    sx={{
                                        width: "118px",
                                        height: "43px",
                                        px: 0,
                                        borderRadius: 0,
                                        textTransform: "none",
                                        fontSize: "20px"
                                    }}
                                    type="submit"
                                >
                                    {t("pages.home.send")}
                                </Button>
                            </Box>
                        </Form>
                    </FormikProvider>
                </Box>
            </Container>
            <Box
                component="footer"
                sx={{
                    mt: { lg: "153px", xs: "77px" },
                    pt: { lg: "20px", xs: "10px" },
                    pb: { lg: "130px", xs: "30px" },
                    borderTop: `1px solid ${palette.text.primary}`,
                    background: palette.background.default
                }}
            >
                <Container sx={{ maxWidth: { lg: "1270px", md: "350px" } }}>
                    {/* lg */}
                    <Grid container sx={{ display: { lg: "flex", xs: "none" }, px: "5px" }}>
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
                    {/* xs */}
                    <Grid container columns={5} sx={{ display: { lg: "none", xs: "flex" } }}>
                        <Grid item xs={3}>
                            <Typography variant="h2" fontFamily="Jura" fontWeight="700">
                                {t("containers.footer.contacts")}
                            </Typography>
                            <Typography variant="h3" fontFamily="Jura" fontWeight="600" sx={{ mt: "20px", mb: "5px" }}>
                                + 380 98 2567 85
                            </Typography>
                            <Typography variant="h3" fontFamily="Raleway" fontWeight="500">
                                metalinvest@gmail.com
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