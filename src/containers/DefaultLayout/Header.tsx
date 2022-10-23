import {
    Box,
    Container,
    Typography,
} from "@mui/material";

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
        <Container component="header" sx={{ display: "flex", justifyContent: "space-between", maxWidth: { xl: "xl", lg: "lg", md: "md" } }}>
            <img
                src={""}
                alt="logo"
            />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                {links.map((item, index) => {
                    return (
                        <Typography >

                        </Typography>
                    );
                })}
            </Box>
            <Box>

            </Box>
        </Container>
    );
};

export default Header;