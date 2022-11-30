import { Box, Grid, Typography, useTheme } from "@mui/material"
import { useTranslation } from "react-i18next"

import { DetailsButton, OrderButton } from "../../components/Buttons"
import LinkRouter from "../../components/LinkRouter"

import steel_building_structures from "../../assets/backgrounds/production/steel-building-structures.png"
import steel_building_structures_small from "../../assets/backgrounds/production/steel-building-structures-small.png"
import designer_steel_products from "../../assets/backgrounds/production/designer-steel-products.png"
import designer_steel_products_small from "../../assets/backgrounds/production/designer-steel-products-small.png"
import furnace from "../../assets/backgrounds/production/furnace.png"
import furnace_small from "../../assets/backgrounds/production/furnace-small.png"
import protective_container_for_generator from "../../assets/backgrounds/production/protective-container-for-generator.png"
import protective_container_for_generator_small from "../../assets/backgrounds/production/protective-container-for-generator-small.png"

const Production = () => {
    const { t } = useTranslation();
    const { palette } = useTheme();
    return (
        <Grid
            container
            rowSpacing={{ lg: "50px", xs: "80px" }}
            columnSpacing="33px"
            sx={{
                mt: {
                    lg: "183px",
                    xs: "38px"
                },
                mb: {
                    lg: "284px",
                    xs: "89px"
                },
                "&>*:nth-of-type(1)": { pt: "0px" },
                "&>*:nth-of-type(2n)": { pt: { lg: "50px", xs: "30px" } },
                "&>*:nth-of-type(6)": { pt: { lg: "50px", xs: "80px" } },
                "&>*:nth-of-type(7)": { pt: { lg: "50px", xs: "30px" } },
                "&>*:nth-of-type(8)": { pt: { lg: "50px", xs: "80px" } },
                "&>*:nth-of-type(9)": { pt: { lg: "50px", xs: "30px" } },
            }}
        >
            {/* Сталеві будівельні конструкції */}
            <Grid item xs={12} lg={6}>
                <Box sx={{ display: { lg: "block", xs: "none" } }}>
                    <img
                        src={steel_building_structures}
                        alt="steel_building_structures"
                    />
                </Box>
                <Box sx={{ display: { lg: "none", xs: "block" } }}>
                    <img
                        src={steel_building_structures_small}
                        alt="steel_building_structures"
                    />
                </Box>
            </Grid>
            <Grid item xs={12} lg={6} sx={{ my: "auto" }}>
                <Typography variant="h3" fontWeight="600" fontFamily="Jura" align="center" color="primary">
                    {t("pages.production.steel-building-structures")}
                </Typography>
                <Typography component="p" variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ mt: "15px" }}>
                    {t("pages.production.steel-building-structures-p")}
                </Typography>
                <LinkRouter underline="always" color="inherit" to="building-metal-structures" onClick={() => window.scrollTo(0, 0)} sx={{ "&:hover": { color: palette.primary.main } }}>
                    <Typography variant="h4" fontWeight="500" fontFamily="Jura" sx={{ display: { lg: "block", xs: "none" }, mt: { lg: "50px", xs: "30px" } }}>
                        {t("pages.production.building-metal-structures")}
                    </Typography>
                    <Typography variant="h3" fontWeight="500" fontFamily="Jura" sx={{ display: { lg: "none", xs: "block" }, mt: { lg: "50px", xs: "30px" } }}>
                        {t("pages.production.building-metal-structures")}
                    </Typography>
                </LinkRouter>
                <Box sx={{ ml: "20px", mt: "20px" }}>
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
                    <LinkRouter underline="always" color="inherit" to="input-goup" onClick={() => window.scrollTo(0, 0)} sx={{ "&:hover": { color: palette.primary.main } }}>
                        <Typography variant="h5" fontWeight="400" fontFamily="Raleway" >
                            {t("pages.production.building-metal-structures-p4")}
                        </Typography>
                    </LinkRouter>
                </Box>
                <LinkRouter underline="always" color="inherit" to="non-standard-metal-structures-and-equipment" onClick={() => window.scrollTo(0, 0)} sx={{ "&:hover": { color: palette.primary.main } }}>
                    <Typography variant="h4" fontWeight="500" fontFamily="Jura" sx={{ display: { lg: "block", xs: "none" }, mt: "70px", mb: "50px" }}>
                        {t("pages.production.non-standard-metal-structures-and-equipment")}
                    </Typography>
                    <Typography variant="h3" fontWeight="500" fontFamily="Jura" sx={{ display: { lg: "none", xs: "block" }, mt: "70px", mb: "25px" }}>
                        {t("pages.production.non-standard-metal-structures-and-equipment")}
                    </Typography>
                </LinkRouter>
                <Box sx={{ display: "flex", justifyContent: { lg: "start", xs: "center" } }}>
                    <OrderButton />
                </Box>
            </Grid>
            {/* Дизайнерські сталеві вироби */}
            <Grid item xs={12} lg={6} sx={{ display: { lg: "none", xs: "block" } }}>
                <img
                    src={designer_steel_products_small}
                    alt="designer_steel_products"
                />
            </Grid>
            <Grid item xs={12} lg={6} sx={{ my: "auto" }}>
                <Typography variant="h3" fontWeight="600" fontFamily="Jura" align="center" color="primary">
                    {t("pages.production.designer-steel-products")}
                </Typography>
                <Typography component="p" variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ mt: "15px" }}>
                    {t("pages.production.designer-steel-products-p1")}
                </Typography>
                <LinkRouter underline="always" color="inherit" to="loft-style-furniture-and-partitions" onClick={() => window.scrollTo(0, 0)} sx={{ "&:hover": { color: palette.primary.main } }}>
                    <Typography variant="h4" fontWeight="400" fontFamily="Raleway" sx={{ display: { lg: "block", xs: "none" }, my: "50px" }}>
                        {t("pages.production.designer-steel-products-p2")}
                    </Typography>
                    <Typography variant="h3" fontWeight="400" fontFamily="Raleway" sx={{ display: { lg: "none", xs: "block" }, mt: "30px", mb: "50px" }}>
                        {t("pages.production.designer-steel-products-p2")}
                    </Typography>
                </LinkRouter>
                <Box sx={{ display: "flex", justifyContent: { lg: "start", xs: "center" } }}>
                    <OrderButton />
                </Box>
            </Grid>
            <Grid item xs={12} lg={6} sx={{ display: { lg: "block", xs: "none" } }}>
                <img
                    src={designer_steel_products}
                    alt="designer_steel_products"
                />
            </Grid>
            {/* Піч “буржуки” */}
            <Grid item xs={12} lg={6}>
                <Box sx={{ display: { lg: "block", xs: "none" } }}>
                    <img
                        src={furnace}
                        alt="furnace"
                    />
                </Box>
                <Box sx={{ display: { lg: "none", xs: "block" } }}>
                    <img
                        src={furnace_small}
                        alt="furnace"
                    />
                </Box>
            </Grid>
            <Grid item xs={12} lg={6} sx={{ my: "auto" }}>
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
                <Box sx={{ display: "flex", justifyContent: "center", mt: { lg: "80px", xs: "35px" } }}>
                    <OrderButton marginRight="30px" />
                    <DetailsButton link="furnace" />
                </Box>
            </Grid>
            {/* Захисний контейнер для генератора */}
            <Grid item xs={12} sx={{ display: { lg: "none", xs: "block" } }}>
                <img
                    src={protective_container_for_generator_small}
                    alt="protective_container_for_generator"
                />
            </Grid>
            <Grid item xs={12} lg={6}>
                <Typography variant="h3" fontWeight="600" fontFamily="Jura" align="center" color="primary">
                    {t("pages.production.protective-container-for-generator")}
                </Typography>
                <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ my: "15px" }}>
                    {t("pages.production.protective-container-for-generator-h1")}
                </Typography>
                <Box sx={{ ml: "35px" }}>
                    <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ mb: "10px", display: "list-item" }}>
                        {t("pages.production.protective-container-for-generator-h1-p1")}
                    </Typography>
                    <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ mb: "10px", display: "list-item" }}>
                        {t("pages.production.protective-container-for-generator-h1-p2")}
                    </Typography>
                    <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ mb: "10px", display: "list-item" }}>
                        {t("pages.production.protective-container-for-generator-h1-p3")}
                    </Typography>
                    <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ display: "list-item" }}>
                        {t("pages.production.protective-container-for-generator-h1-p4")}
                    </Typography>
                </Box>
                <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ my: "15px" }}>
                    {t("pages.production.protective-container-for-generator-h2")}
                </Typography>
                <Box sx={{ ml: "35px" }}>
                    <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ mb: "10px", display: "list-item" }}>
                        {t("pages.production.protective-container-for-generator-h2-p1")}
                    </Typography>
                    <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ mb: "10px", display: "list-item" }}>
                        {t("pages.production.protective-container-for-generator-h2-p2")}
                    </Typography>
                    <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ mb: "10px", display: "list-item" }}>
                        {t("pages.production.protective-container-for-generator-h2-p3")}
                    </Typography>
                </Box>
                <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ my: "20px" }}>
                    {t("pages.production.protective-container-for-generator-h3")}
                </Typography>
                <Typography variant="h5" fontWeight="400" fontFamily="Raleway" >
                    {t("pages.production.protective-container-for-generator-h4")}
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center", mt: { lg: "70px", xs: "25px" } }}>
                    <OrderButton marginRight="30px" />
                    <DetailsButton link="protective-container-for-generator" />
                </Box>
            </Grid>
            <Grid item lg={6} sx={{ display: { lg: "block", xs: "none" } }}>
                <img
                    src={protective_container_for_generator}
                    alt="protective_container_for_generator"
                />
            </Grid>
        </Grid >
    )
}

export default Production