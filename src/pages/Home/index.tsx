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

import { Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";

import LinkRouter from "../../components/LinkRouter";
import { MoreButton } from "../../components/Buttons";

import homepage_header from "../../assets/backgrounds/homepage-header.png";
import header_logo_light_svg from "../../assets/logos/header-logo-light.svg";
import instagram_small_light_svg from "../../assets/icons/instagram-small-light.svg";
import facebook_small_light_svg from "../../assets/icons/facebook-small-light.svg";
import menu_light from "../../assets/icons/menu-light.svg";

import abous_us from "../../assets/backgrounds/about-us.png";

import building_metal_structures from "../../assets/backgrounds/building-metal-structures.png"
import metal_products from "../../assets/backgrounds/metal-products.png"
import unusual_metal_structures from "../../assets/backgrounds/unusual-metal-structures.png"

import metal_cover_1 from "../../assets/backgrounds/metal-cover-1.png"
import metal_cover_2 from "../../assets/backgrounds/metal-cover-2.png"
import armature_1 from "../../assets/backgrounds/armature-1.png"
import armature_2 from "../../assets/backgrounds/armature-2.png"
import laser_cutting_of_metal_1 from "../../assets/backgrounds/laser-cutting-of-metal-1.png"
import laser_cutting_of_metal_2 from "../../assets/backgrounds/laser-cutting-of-metal-2.png"


import reviews from "../../assets/backgrounds/reviews.png"

import footer_logo_light from "../../assets/logos/footer-logo-light.svg"
import instagram_medium_light from "../../assets/icons/instagram-medium-light.svg";
import facebook_medium_light from "../../assets/icons/facebook-medium-light.svg";
import HeaderMenu from "../../components/HeaderMenu";
import { useTranslation } from "react-i18next";
import HashLinkRouter from "../../components/HashLinkRouter";


interface IMenuItem {
    title: string,
    link: string,
    children?: Array<IMenuItem>,
    isId?: boolean
}

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

    const links: Array<IMenuItem> = [
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
            link: "/#production",
            isId: true
        },
        {
            title: t("containers.header.services"),
            link: "",
            children: [
                {
                    title: "Сварочні роботи",
                    link: "/"
                },
                {
                    title: "Токарні та фрезерні роботи",
                    link: "/"
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
        name: Yup.string().required().min(6).max(50).label("Name"),
        phone: Yup.string().required().matches(phoneRegExp, 'Phone is not valid').label("Phone"),
        email: Yup.string().email().required().label("Email"),
        message: Yup.string().required().min(10).max(150).label("Message"),
    });

    const formik = useFormik({
        initialValues: sendEmailModel,
        // validationSchema: SendEmailSchema,
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

    const { errors, touched, isSubmitting, handleSubmit, getFieldProps } = formik;

    return (
        <>
            <Box component="header" sx={{
                width: "100%",
                height: "960px",
                mx: "auto",
                backgroundImage: `url(${homepage_header})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                boxShadow: `0px 0px 15px ${hexToRgb("#EF5803")}`
            }}>
                <Container sx={{ maxWidth: { lg: "lg", md: "md" }, height: "960px" }}>
                    <Box key="navbar" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", pt: "74px" }}>
                        <img
                            src={header_logo_light_svg}
                            alt="logo"
                        />
                        <Box sx={{ display: "flex", "&:last-child": { mr: 0 } }}>
                            {links.map((item, index) => {
                                return (
                                    (item.isId == true
                                        ? <HashLinkRouter key={`header_menu_item_${index}`} underline="none" color="inherit" to={item.link} sx={{ mr: "30px" }}>
                                            <Typography variant="h4" fontFamily="Jura" fontWeight="600">
                                                {item.title}
                                            </Typography>
                                        </HashLinkRouter>
                                        : <LinkRouter key={`header_menu_item_${index}`} underline="none" color="inherit" to={item.link} sx={{ mr: "30px" }}>
                                            <Typography variant="h4" fontFamily="Jura" fontWeight="600">
                                                {item.title}
                                            </Typography>
                                        </LinkRouter>)
                                );
                            })}
                        </Box>
                        <HeaderMenu />
                    </Box>
                    <Box sx={{ pl: "112px", mt: "186px", width: "630px" }}>
                        <Typography variant="h1" fontWeight="700" fontFamily="Raleway" sx={{ width: "630px" }}>
                            {t("pages.home.metalwork-or-loft-style-furniture")}
                        </Typography>
                        <Typography variant="h3" fontFamily="Raleway" sx={{ width: "445px", pt: "20px" }}>
                            {t("pages.home.various-types-of-metal-structures")}
                        </Typography>
                        <Button
                            variant="contained"
                            sx={{
                                width: "278px",
                                height: "58px",
                                borderRadius: 0,
                                textTransform: "none",
                                fontSize: "24px",
                                mt: "70px"
                            }}
                        >
                            {t("pages.home.calculate-the-cost")}
                        </Button>
                    </Box>
                </Container>
            </Box>
            <Container component="main" sx={{ maxWidth: { lg: "lg", md: "md" } }}>
                {/* Про нас */}
                <Box id="about-us" sx={{ mt: "100px", px: "46px" }}>
                    <Typography align="center" variant="h2" fontFamily="Jura" fontWeight="700">
                        {t("containers.header.about-us")}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", mt: "40px" }}>
                        <img
                            src={abous_us}
                            alt="about_us"
                        />
                        <Box sx={{ ml: "120px" }}>
                            <Typography variant="h4" fontFamily="Raleway">
                                {t("pages.home.about-us-first-p")}
                                <br />
                                <br />
                                {t("pages.home.about-us-second-p")}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                {/* Чому варто працювати з нами? */}
                <Box sx={{ mt: "150px", px: "159px" }}>
                    <Typography align="center" variant="h2" fontFamily="Jura" fontWeight="700">
                        {t("pages.home.why-should-you-work-with-us")}
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: 'wrap', justifyContent: "space-between", mt: "50px" }}>
                        {workWithUsInfos.map((item, index) => {
                            return (
                                <Box key={`work_with_us_${index}`} sx={{ width: "299px", p: "10px", mb: (index < 3 ? "30px" : "0px"), boxShadow: "2px 2px 10px #E55C0F" }}>
                                    <Typography variant="h4" fontFamily="Jura" fontWeight="700">
                                        {item.title}
                                    </Typography>
                                    <Typography variant="h5" fontFamily="Raleway">
                                        {item.description}
                                    </Typography>
                                </Box>
                            );
                        })}
                    </Box>
                </Box>
                {/* Виробництво */}
                <Box id="production" sx={{ mt: "150px", px: "135.5px" }}>
                    <Typography align="center" variant="h2" fontFamily="Jura" fontWeight="700">
                        {t("containers.header.production")}
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "space-between", mt: "50px" }}>
                        <Box sx={{ width: "288px", height: "379px", p: "20px 10px 10px 10px", boxShadow: "2px 2px 10px #E55C0F" }}>
                            <Typography align="center" variant="h4" fontFamily="Raleway" fontWeight="500">
                                {t("pages.home.building-metal-structures")}
                            </Typography>
                            <img
                                src={building_metal_structures}
                                alt="building_metal_structures"
                                style={{ marginTop: "36px" }}
                            />
                        </Box>
                        <Box sx={{ width: "325px", height: "394px", p: "20px 10px 10px 10px", boxShadow: "2px 2px 10px #E55C0F" }}>
                            <Typography align="center" variant="h4" fontFamily="Raleway" fontWeight="500">
                                {t("pages.home.metal-products")}
                            </Typography>
                            <img
                                src={metal_products}
                                alt="metal_products"
                                style={{ marginTop: "36px" }}
                            />
                        </Box>
                        <Box sx={{ width: "288px", height: "379px", p: "20px 10px 10px 10px", boxShadow: "2px 2px 10px #E55C0F" }}>
                            <Typography align="center" variant="h4" fontFamily="Raleway" fontWeight="500">
                                {t("pages.home.unusual-metal-structures")}
                            </Typography>
                            <img
                                src={unusual_metal_structures}
                                alt="unusual_metal_structures"
                                style={{ marginTop: "36px" }}
                            />
                        </Box>
                    </Box>
                    <Box sx={{ mt: "70px", display: "flex", justifyContent: "center" }}>
                        <Button
                            variant="contained"
                            sx={{
                                width: "187px",
                                height: "43px",
                                px: 0,
                                borderRadius: 0,
                                textTransform: "none",
                                fontSize: "20px"
                            }}
                        >
                            {t("pages.home.learn-more")}
                        </Button>
                    </Box>
                </Box>
                {/* Галерея */}
                <Box id="gallery" sx={{ mt: "150px", px: "2px" }}>
                    <Typography align="center" variant="h2" fontFamily="Jura" fontWeight="700">
                        {t("containers.header.gallery")}
                    </Typography>
                    <Box sx={{ display: "flex", mt: "50px" }}>
                        <img
                            src={metal_cover_1}
                            alt="metal_cover_first"
                        />
                        <Box sx={{ mx: "50px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                            <Box>
                                <Typography variant="h4" fontFamily="Jura" fontWeight="600">
                                    {t("pages.home.metal-cover")}
                                </Typography>
                                <Typography variant="h5" fontFamily="Raleway" fontWeight="400" sx={{ mt: "10px" }}>
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
                    <Box sx={{ display: "flex", mt: "100px" }}>
                        <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "end" }}>
                            <MoreButton />
                        </Box>
                        <Box sx={{ mx: "50px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                            <Box>
                                <Typography variant="h4" fontFamily="Jura" fontWeight="600" align="right">
                                    {t("pages.home.armature")}
                                </Typography>
                                <Typography variant="h5" fontFamily="Raleway" fontWeight="400" align="right" sx={{ mt: "10px" }}>
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
                    <Box sx={{ display: "flex", mt: "100px" }}>
                        <img
                            src={laser_cutting_of_metal_1}
                            alt="laser_cutting_of_metal_first"
                        />
                        <Box sx={{ mx: "50px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                            <Box>
                                <Typography variant="h4" fontFamily="Jura" fontWeight="600">
                                    {t("pages.home.laser-cutting-of-metal")}
                                </Typography>
                                <Typography variant="h5" fontFamily="Raleway" fontWeight="400" sx={{ mt: "10px" }}>
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
                </Box>
                {/* Відгуки */}
                <Box sx={{ mt: "150px", px: "77.5px" }}>
                    <Typography align="center" variant="h2" fontFamily="Jura" fontWeight="700">
                        {t("pages.home.reviews")}
                    </Typography>
                    <img
                        src={reviews}
                        alt="reviews"
                        style={{ marginTop: "50px" }}
                    />
                </Box>
                {/* Хочете замовити виріб або обговорити замовлення? */}
                <Box sx={{ mt: "200px", px: "347.5px" }}>
                    <Typography align="center" variant="h2" fontFamily="Jura" fontWeight="700">
                        {t("pages.home.do-you-want-to-order-a-product")}
                    </Typography>
                    <FormikProvider value={formik} >
                        <Form autoComplete="off" noValidate onSubmit={handleSubmit} >
                            <Grid container sx={{ mt: "44px", "&>*:nth-of-type(1)": { pt: "0px" } }} rowSpacing="28px">
                                <Grid item xs={12} sx={{ pt: "0px" }}>
                                    <TextField
                                        fullWidth
                                        variant="standard"
                                        type="text"
                                        label="Name"
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
                                        label="Phone"
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
                                        label="Email"
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
                                        label="Message"
                                        size="small"
                                        {...getFieldProps('message')}
                                        error={Boolean(touched.message && errors.message)}
                                        helperText={touched.message && errors.message}
                                    />
                                </Grid>
                            </Grid>
                            <Box sx={{ mt: "74px", display: "flex", justifyContent: "center" }}>
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
                    mt: "153px",
                    pt: "20px",
                    pb: "130px",
                    borderTop: "1px solid #FCFDFF",
                    background: palette.background.default
                }}
            >
                <Container sx={{ maxWidth: { lg: "lg", md: "md" } }}>
                    <Grid container sx={{ px: "5px" }}>
                        <Grid item xs={2}>
                            <img
                                src={footer_logo_light}
                                alt="footer_logo_light"
                            />
                        </Grid>
                        <Grid item xs={4} />
                        <Grid item xs={3}>
                            <Typography variant="h4" fontFamily="Jura" fontWeight="700">
                                Контакти
                            </Typography>
                            <Typography variant="h4" fontFamily="Jura" fontWeight="600" sx={{ mt: "40px", mb: "10px" }}>
                                + 380 98 2567 85
                            </Typography>
                            <Typography variant="h4" fontFamily="Raleway" fontWeight="500">
                                metalinvest@gmail.com
                            </Typography>
                        </Grid>
                        <Grid item xs={1} />
                        <Grid item xs={2}>
                            <Typography variant="h4" fontFamily="Jura" fontWeight="700" align="right">
                                Соцмережі
                            </Typography>
                            <Box sx={{ display: "flex", justifyContent: "end", mt: "40px" }}>
                                <img
                                    src={instagram_medium_light}
                                    alt="instagram"
                                    style={{ marginRight: "20px", cursor: "pointer" }}
                                />
                                <img
                                    src={facebook_medium_light}
                                    alt="facebook"
                                    style={{ cursor: "pointer" }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default Header;