import {
    Avatar,
    Box,
    Button,
    Container,
    hexToRgb,
    Typography,
} from "@mui/material";

import LinkRouter from "../../components/LinkRouter";

import homepage_header from "../../assets/backgrounds/homepage-header.png";
import header_logo_light_svg from "../../assets/logos/header-logo-light.svg";
import instagram_light_svg from "../../assets/icons/instagram-light.svg";
import facebook_light_svg from "../../assets/icons/facebook-light.svg";

import abous_us from "../../assets/backgrounds/about-us.png";

import building_metal_structures from "../../assets/backgrounds/building-metal-structures.png"
import metal_products from "../../assets/backgrounds/metal-products.png"
import unusual_metal_structures from "../../assets/backgrounds/unusual-metal-structures.png"

interface IMenuItem {
    title: string,
    link: string,
    children?: Array<IMenuItem>
}

interface IWorkWithUsInfo {
    title: string,
    description: string
}

interface IProduction {
    title: string,
    image: string
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

    const workWithUsInfos: Array<IWorkWithUsInfo> = [
        {
            title: "Індивідуальний підхід",
            description: "Пропонуємо розробку вашого унікального виробу. Аналізуємо та проєктуємо."
        },
        {
            title: "Власні виробничі площі",
            description: "Використовуємо своє обладнення, щоб виготовити ваш виріб."
        },
        {
            title: "Високоточне обладнення",
            description: "Працюємо з обладненням різної складності. У тому числі з високоточним."
        },
        {
            title: "Готові вироби",
            description: "Пропонуємо виготовлення виробів за готовими вирізками."
        },
        {
            title: "Швидкі терміни",
            description: "Вчасно виконуємо замовлення в обумовлені терміни, або раніше."
        },
        {
            title: "Доставка",
            description: "Маємо власний транспорт, яким здійснюємо доставку ваших виробів в межах Києва."
        },
    ]

    const production: Array<IProduction> = [
        {
            title: "Будівельні металоконструкції",
            image: building_metal_structures
        },
        {
            title: "Вироби з металу",
            image: metal_products
        },
        {
            title: "Нетипові металоконструкції",
            image: unusual_metal_structures
        }
    ]

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
                                    <LinkRouter key={`header_menu_item_${index}`} underline="none" color="inherit" to={item.link} sx={{ mr: "30px" }}>
                                        <Typography variant="h4" fontFamily="Jura" fontWeight="600">
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
                        <Typography variant="h1" fontWeight="700" fontFamily="Raleway" sx={{ width: "630px" }}>
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
                <Container sx={{ maxWidth: { lg: "lg", md: "md" } }}>
                    <Box sx={{ mt: "100px", px: "46px" }}>
                        <Typography align="center" variant="h2" fontFamily="Jura" fontWeight="700">
                            Про нас
                        </Typography>
                        <Box sx={{ display: "flex", alignItems: "center", mt: "40px" }}>
                            <img
                                src={abous_us}
                                alt="about_us"
                            />
                            <Box sx={{ ml: "120px" }}>
                                <Typography variant="h4" fontFamily="Raleway">
                                    Ми готові запропонувати вам весь спектр послуг з виготовлення та транспортування металоконструкцій.
                                    Незважаючи на те, що багато підприємств намагаються будь-якими засобами нарощувати темпи виробництва,
                                    ми ретельно стежимо за якістю продукції, адже саме від цього залежить безпека та надійність.
                                    <br />
                                    <br />
                                    Також ми, «СП Металлінвест», тісно співпрацюємо з провідними виробниками металопрокату та їх дилерами по всій Україні та регіонах,
                                    що дозволяє максимально оперативно купувати необхідні для виконання замовлень матеріали.
                                    Власна служба доставки здійснює доставку металоконструкцій, металопрокату, матеріалів, комплектуючих та виробів до об'єкта, де проводиться монтаж.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ mt: "150px", px: "159px" }}>
                        <Typography align="center" variant="h2" fontFamily="Jura" fontWeight="700">
                            Чому варто працювати з нами?
                        </Typography>
                        <Box sx={{ display: "flex", flexWrap: 'wrap', justifyContent: "space-between", mt: "50px" }}>
                            {workWithUsInfos.map((item, index) => {
                                return (
                                    <Box sx={{ width: "299px", p: "10px", mb: (index < 3 ? "30px" : "0px"), boxShadow: "2px 2px 10px #E55C0F" }}>
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
                    <Box sx={{ mt: "150px", px: "135px" }}>
                        <Typography align="center" variant="h2" fontFamily="Jura" fontWeight="700">
                            Виробництво
                        </Typography>
                        <Box sx={{ display: "flex", justifyContent: "space-between", mt: "50px" }}>
                            {/* Будівельні металоконструкції */}
                            <Box sx={{ width: "288px", height: "fit-content", p: "20px 10px 10px 10px", boxShadow: "2px 2px 10px #E55C0F" }}>
                                <Typography align="center" variant="h4" fontFamily="Raleway" fontWeight="500">
                                    Будівельні металоконструкції
                                </Typography>
                                <img
                                    src={building_metal_structures}
                                    alt="building_metal_structures"
                                    style={{ marginTop: "36px" }}
                                />
                            </Box>

                            {/* Вироби з металу */}
                            <Box sx={{ width: "325px", p: "20px 10px 10px 10px", boxShadow: "2px 2px 10px #E55C0F" }}>
                                <Typography align="center" variant="h4" fontFamily="Raleway" fontWeight="500">
                                    Вироби з металу
                                </Typography>
                                <img
                                    src={metal_products}
                                    alt="metal_products"
                                    style={{ marginTop: "36px" }}
                                />
                            </Box>

                            {/* Нетипові металоконструкції */}
                            <Box sx={{ width: "288px", height: "fit-content", p: "20px 10px 10px 10px", boxShadow: "2px 2px 10px #E55C0F" }}>
                                <Typography align="center" variant="h4" fontFamily="Raleway" fontWeight="500">
                                    Нетипові металоконструкції
                                </Typography>
                                <img
                                    src={unusual_metal_structures}
                                    alt="unusual_metal_structures"
                                    style={{ marginTop: "36px" }}
                                />
                            </Box>
                        </Box>
                        <Button
                            variant="contained"
                            sx={{
                                width: "187px",
                                height: "43px",
                                borderRadius: 0,
                                textTransform: "none",
                                fontSize: "20px",
                                mt: "70px"
                            }}
                        >
                            Дізнатись більше
                        </Button>
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default Header;