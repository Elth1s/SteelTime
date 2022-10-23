import {
    Avatar,
    Box,
    Button,
    Container,
    Typography,
} from "@mui/material";

import LinkRouter from "../../components/LinkRouter";

import homepage_header from "../../assets/backgrounds/homepage-header.png";
import header_logo_light_svg from "../../assets/logos/header-logo-light.svg";
import header_logo_light from "../../assets/logos/header-logo-light.png";
import instagram_light_svg from "../../assets/icons/instagram-light.svg";
import instagram_light from "../../assets/icons/instagram-light.png";
import facebook_light_svg from "../../assets/icons/facebook-light.svg";
import facebook_light from "../../assets/icons/facebook-light.png";

interface IMenuItem {
    title: string,
    link: string,
    children?: Array<IMenuItem>
}

const Header = () => {

    const links: Array<IMenuItem> = [
        {
            title: "Головна",
            link: "/"
        },
        {
            title: "Про нас",
            link: "/"
        },
        {
            title: "Виробництво",
            link: "/"
        },
        {
            title: "Послуги",
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
            title: "Контакти",
            link: "/"
        },
        {
            title: "Галерея",
            link: "/"
        },
    ];

    return (
        <>
            {/* Box for background image */}
            <Box component="header" sx={{ width: "1512px", height: "960px", backgroundImage: `url(${homepage_header})`, mx: "auto" }}>
                <Container sx={{ maxWidth: { lg: "lg", md: "md" } }}>
                    <Box key="navbar" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", pt: "74px" }}>
                        <img
                            src={header_logo_light_svg}
                            alt="logo"
                        />
                        <Box sx={{ display: "flex", "&:last-child": { mr: 0 } }}>
                            {links.map((item, index) => {
                                return (
                                    <LinkRouter key={`header_menu_item_${index}`} underline="none" color="inherit" to={item.link} sx={{ mr: "30px" }}>
                                        <Typography variant="h4" fontFamily="Jura">
                                            {item.title}
                                        </Typography>
                                    </LinkRouter>
                                );
                            })}
                        </Box>
                        <Box sx={{ display: "flex" }}>
                            <img
                                src={instagram_light_svg}
                                alt="instagram"
                                style={{ marginRight: "20px", cursor: "pointer" }}
                            />
                            <img
                                src={facebook_light_svg}
                                alt="facebook"
                                style={{ cursor: "pointer" }}
                            />
                        </Box>
                    </Box>
                    <Box sx={{ pl: "112px", mt: "186px", width: "630px" }}>
                        <Typography variant="h1" fontWeight="bold" fontFamily="Raleway" sx={{ width: "630px" }}>
                            Обробка металу чи меблі в стилі лофт?
                        </Typography>
                        <Typography variant="h3" fontFamily="Raleway" sx={{ width: "445px", pt: "20px" }}>
                            Різні види металоконструкцій,  дизайн декору, вхідні матеріали та інше.
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
                            Розрахувати вартість
                        </Button>
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default Header;