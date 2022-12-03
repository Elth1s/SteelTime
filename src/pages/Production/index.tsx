import { Box, Grid, Typography, useTheme } from "@mui/material"
import { useTranslation } from "react-i18next"
import { Helmet } from "react-helmet"

import { DetailsButton, OrderButton } from "../../components/Buttons"
import LinkRouter from "../../components/LinkRouter"

import {
    steel_building_structures,
    steel_building_structures_small,
    designer_steel_products,
    designer_steel_products_small,
    furnace,
    furnace_small,
    protective_container_for_generator,
    protective_container_for_generator_small
} from "../../assets/backgrounds/production"

const Production = () => {
    const { t } = useTranslation();
    const { palette } = useTheme();
    return (
        <>
            <Helmet>
                <title>{t("meta-info.production.title")}</title>
                <meta name="og:title"
                    content={t("meta-info.production.title")} />
                <meta name="description"
                    content={t("meta-info.production.description")} />
                <meta name="og:description"
                    content={t("meta-info.production.description")} />
                <link rel="canonical" href="/production" />
            </Helmet>
            <Grid
                container
                rowSpacing={{ md: "45px", xs: "80px" }}
                columnSpacing="33px"
                sx={{
                    mt: {
                        lg: "183px",
                        md: "80px",
                        xs: "38px"
                    },
                    mb: {
                        lg: "284px",
                        md: "116px",
                        xs: "89px"
                    },
                    "&>*:nth-of-type(1)": { pt: "0px" },
                    "&>*:nth-of-type(2n)": { pt: { md: "45px", xs: "30px" } },
                    "&>*:nth-of-type(2)": { pt: { lg: "0px", md: "0px" } },
                    "&>*:nth-of-type(6)": { pt: { md: "45px", xs: "80px" } },
                    "&>*:nth-of-type(7)": { pt: { md: "45px", xs: "30px" } },
                    "&>*:nth-of-type(8)": { pt: { md: "45px", xs: "80px" } },
                    "&>*:nth-of-type(9)": { pt: { md: "45px", xs: "30px" } },
                }}
            >
                {/* Сталеві будівельні конструкції */}
                <Grid item lg={6} md={6} xs={12}>
                    <Box sx={{ display: { lg: "block", md: "block", xs: "none" }, width: { lg: "auto", md: "440px" } }}>
                        <img
                            style={{ width: "100%" }}
                            src={steel_building_structures}
                            alt="steel_building_structures"
                            loading="lazy"
                        />
                    </Box>
                    <Box sx={{ display: { lg: "none", md: "none", xs: "block" } }}>
                        <img
                            src={steel_building_structures_small}
                            alt="steel_building_structures"
                            loading="lazy"
                        />
                    </Box>
                </Grid>
                <Grid item lg={6} md={6} xs={12} sx={{ my: "auto" }}>
                    <Typography variant="h3" fontWeight="600" fontFamily="Jura" align="center" color="primary">
                        {t("pages.production.steel-building-structures")}
                    </Typography>
                    <Typography component="p" variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ mt: { lg: "15px", md: "5px", xs: "15px" } }}>
                        {t("pages.production.steel-building-structures-p")}
                    </Typography>
                    <LinkRouter underline="always" color="inherit" to="building-metal-structures" onClick={() => window.scrollTo(0, 0)} sx={{ "&:hover": { color: palette.primary.main } }}>
                        <Typography variant="h4" fontWeight="500" fontFamily="Jura" sx={{ display: { lg: "block", md: "block", xs: "none" }, mt: { lg: "50px", md: "5px", xs: "30px" } }}>
                            {t("pages.production.building-metal-structures")}
                        </Typography>
                        <Typography variant="h3" fontWeight="500" fontFamily="Jura" sx={{ display: { lg: "none", md: "none", xs: "block" }, mt: { lg: "50px", md: "5px", xs: "30px" } }}>
                            {t("pages.production.building-metal-structures")}
                        </Typography>
                    </LinkRouter>
                    <Box sx={{ ml: "20px", mt: { lg: "20px", md: "5px", xs: "20px" } }}>
                        <LinkRouter underline="always" color="inherit" to="reinforcement-frames-and-embedded-products" onClick={() => window.scrollTo(0, 0)} sx={{ "&:hover": { color: palette.primary.main } }}>
                            <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ mb: "10px" }}>
                                {t("pages.production.building-metal-structures-p1")}
                            </Typography>
                        </LinkRouter>
                        <LinkRouter underline="always" color="inherit" to="anchor-blocks-and-foundation-bolts" onClick={() => window.scrollTo(0, 0)} sx={{ "&:hover": { color: palette.primary.main } }}>
                            <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ mb: "10px" }}>
                                {t("pages.production.building-metal-structures-p2")}
                            </Typography>
                        </LinkRouter>
                        <LinkRouter underline="always" color="inherit" to="support-fasteners-of-tower-cranes" onClick={() => window.scrollTo(0, 0)} sx={{ "&:hover": { color: palette.primary.main } }}>
                            <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ mb: "10px" }}>
                                {t("pages.production.building-metal-structures-p3")}
                            </Typography>
                        </LinkRouter>
                        <LinkRouter underline="always" color="inherit" to="input-group" onClick={() => window.scrollTo(0, 0)} sx={{ "&:hover": { color: palette.primary.main } }}>
                            <Typography variant="h5" fontWeight="400" fontFamily="Raleway" >
                                {t("pages.production.building-metal-structures-p4")}
                            </Typography>
                        </LinkRouter>
                    </Box>
                    <LinkRouter underline="always" color="inherit" to="non-standard-metal-structures-and-equipment" onClick={() => window.scrollTo(0, 0)} sx={{ "&:hover": { color: palette.primary.main } }}>
                        <Typography variant="h4" fontWeight="500" fontFamily="Jura" sx={{ display: { lg: "block", md: "block", xs: "none" }, mt: { lg: "70px", md: "10px", xs: "50px" }, mb: { lg: "50px", md: "10px" } }}>
                            {t("pages.production.non-standard-metal-structures-and-equipment")}
                        </Typography>
                        <Typography variant="h3" fontWeight="500" fontFamily="Jura" sx={{ display: { lg: "none", md: "none", xs: "block" }, mt: { lg: "70px", md: "5px", xs: "50px" }, mb: "25px" }}>
                            {t("pages.production.non-standard-metal-structures-and-equipment")}
                        </Typography>
                    </LinkRouter>
                    <Box sx={{ display: "flex", justifyContent: { lg: "start", md: "start", xs: "center" } }}>
                        <OrderButton />
                    </Box>
                </Grid>
                {/* Дизайнерські сталеві вироби */}
                <Grid item xs={12} sx={{ display: { lg: "none", md: "none", xs: "block" } }}>
                    <img
                        src={designer_steel_products_small}
                        alt="designer_steel_products"
                        loading="lazy"
                    />
                </Grid>
                <Grid item lg={6} md={6} xs={12} sx={{ my: "auto" }}>
                    <Typography variant="h3" fontWeight="600" fontFamily="Jura" align="center" color="primary">
                        {t("pages.production.designer-steel-products")}
                    </Typography>
                    <Typography component="p" variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ mt: "15px" }}>
                        {t("pages.production.designer-steel-products-p1")}
                    </Typography>
                    <LinkRouter underline="always" color="inherit" to="loft-style-furniture-and-partitions" onClick={() => window.scrollTo(0, 0)} sx={{ "&:hover": { color: palette.primary.main } }}>
                        <Typography variant="h4" fontWeight="400" fontFamily="Raleway" sx={{ display: { lg: "block", md: "block", xs: "none" }, my: "50px" }}>
                            {t("pages.production.designer-steel-products-p2")}
                        </Typography>
                        <Typography variant="h3" fontWeight="400" fontFamily="Raleway" sx={{ display: { lg: "none", md: "none", xs: "block" }, mt: "30px", mb: "50px" }}>
                            {t("pages.production.designer-steel-products-p2")}
                        </Typography>
                    </LinkRouter>
                    <Box sx={{ display: "flex", justifyContent: { lg: "start", md: "start", xs: "center" } }}>
                        <OrderButton />
                    </Box>
                </Grid>
                <Grid item lg={6} md={6} xs={12} sx={{ display: { lg: "block", md: "block", xs: "none" } }}>
                    <Box sx={{ width: { lg: "auto", md: "440px" } }}>
                        <img
                            style={{ width: "100%" }}
                            src={designer_steel_products}
                            alt="designer_steel_products"
                            loading="lazy"
                        />
                    </Box>
                </Grid>
                {/* Піч “буржуки” */}
                <Grid item lg={6} md={6} xs={12}>
                    <Box sx={{ display: { lg: "block", md: "block", xs: "none" }, width: { lg: "auto", md: "440px" } }}>
                        <img
                            style={{ width: "100%" }}
                            src={furnace}
                            alt="furnace"
                            loading="lazy"
                        />
                    </Box>
                    <Box sx={{ display: { lg: "none", md: "none", xs: "block" } }}>
                        <img
                            src={furnace_small}
                            alt="furnace"
                            loading="lazy"
                        />
                    </Box>
                </Grid>
                <Grid item lg={6} md={6} xs={12} sx={{ my: "auto" }}>
                    <Typography variant="h3" fontWeight="600" fontFamily="Jura" align="center" color="primary">
                        {t("pages.production.furnace")}
                    </Typography>
                    <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ display: { lg: "block", xs: "none" }, mt: "15px", mb: "10px" }}>
                        {t("pages.production.furnace-h")}
                    </Typography>
                    <Typography variant="h3" fontWeight="400" fontFamily="Raleway" sx={{ display: { lg: "none", xs: "block" }, mt: "15px", mb: "10px" }}>
                        {t("pages.production.furnace-h")}
                    </Typography>
                    <Box sx={{ ml: "35px" }}>
                        <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ mb: "10px", display: "list-item" }}>
                            {t("pages.production.furnace-p1")}
                        </Typography>
                        <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ mb: "10px", display: "list-item" }}>
                            {t("pages.production.furnace-p2")}
                        </Typography>
                        <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ mb: "10px", display: "list-item" }}>
                            {t("pages.production.furnace-p3")}
                        </Typography>
                        <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ display: "list-item" }}>
                            {t("pages.production.furnace-p4")}
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: { lg: "start", md: "start", xs: "center" }, mt: { lg: "80px", xs: "35px" } }}>
                        <OrderButton marginRight="30px" />
                        <DetailsButton link="furnace" />
                    </Box>
                </Grid>
                {/* Захисний контейнер для генератора */}
                <Grid item xs={12} sx={{ display: { lg: "none", md: "none", xs: "block" } }}>
                    <img
                        src={protective_container_for_generator_small}
                        alt="protective_container_for_generator"
                        loading="lazy"
                    />
                </Grid>
                <Grid item lg={6} md={6} xs={12}>
                    <Typography variant="h3" fontWeight="600" fontFamily="Jura" align="center" color="primary">
                        {t("pages.production.protective-container-for-generator")}
                    </Typography>
                    <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ my: { lg: "15px", md: "5px", xs: "15px" } }}>
                        {t("pages.production.protective-container-for-generator-h1")}
                    </Typography>
                    <Box sx={{ ml: "35px" }}>
                        <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ mb: { lg: "10px", md: "0px", xs: "10px" }, display: "list-item" }}>
                            {t("pages.production.protective-container-for-generator-h1-p1")}
                        </Typography>
                        <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ mb: { lg: "10px", md: "0px", xs: "10px" }, display: "list-item" }}>
                            {t("pages.production.protective-container-for-generator-h1-p2")}
                        </Typography>
                        <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ mb: { lg: "10px", md: "0px", xs: "10px" }, display: "list-item" }}>
                            {t("pages.production.protective-container-for-generator-h1-p3")}
                        </Typography>
                        <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ display: "list-item" }}>
                            {t("pages.production.protective-container-for-generator-h1-p4")}
                        </Typography>
                    </Box>
                    <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ my: { lg: "15px", md: "5px", xs: "15px" } }}>
                        {t("pages.production.protective-container-for-generator-h2")}
                    </Typography>
                    <Box sx={{ ml: "35px" }}>
                        <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ mb: { lg: "10px", md: "0px", xs: "10px" }, display: "list-item" }}>
                            {t("pages.production.protective-container-for-generator-h2-p1")}
                        </Typography>
                        <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ mb: { lg: "10px", md: "0px", xs: "10px" }, display: "list-item" }}>
                            {t("pages.production.protective-container-for-generator-h2-p2")}
                        </Typography>
                        <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ mb: { lg: "10px", md: "0px", xs: "10px" }, display: "list-item" }}>
                            {t("pages.production.protective-container-for-generator-h2-p3")}
                        </Typography>
                    </Box>
                    <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ my: "20px" }}>
                        {t("pages.production.protective-container-for-generator-h3")}
                    </Typography>
                    <Typography variant="h5" fontWeight="400" fontFamily="Raleway" >
                        {t("pages.production.protective-container-for-generator-h4")}
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: { lg: "start", md: "start", xs: "center" }, mt: { lg: "70px", xs: "25px" } }}>
                        <OrderButton marginRight="30px" />
                        <DetailsButton link="protective-container-for-generator" />
                    </Box>
                </Grid>
                <Grid item lg={6} md={6} sx={{ display: { lg: "block", md: "block", xs: "none" } }}>
                    <Box sx={{ width: { lg: "auto", md: "440px" }, height: { lg: "auto", md: "521px" } }}>
                        <img
                            style={{ width: "100%", height: "100%" }}
                            src={protective_container_for_generator}
                            alt="protective_container_for_generator"
                            loading="lazy"
                        />
                    </Box>
                </Grid>
            </Grid >
        </>
    )
}

export default Production