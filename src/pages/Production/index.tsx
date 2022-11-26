import { Box, Grid, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"

import { DetailsButton, OrderButton } from "../../components/Buttons"

import steel_building_structures from "../../assets/backgrounds/production/steel-building-structures.png"
import designer_steel_products from "../../assets/backgrounds/production/designer-steel-products.png"
import furnace from "../../assets/backgrounds/production/furnace.png"
import protective_container_for_generator from "../../assets/backgrounds/production/protective-container-for-generator.png"

const Production = () => {
    const { t } = useTranslation();
    return (
        <Grid container rowSpacing="50px" columnSpacing="33px" sx={{ mt: "183px", mb: "284px" }}>
            {/* Сталеві будівельні конструкції */}
            <Grid item xs={6}>
                <img
                    src={steel_building_structures}
                    alt="steel_building_structures"
                />
            </Grid>
            <Grid item xs={6} sx={{ my: "auto" }}>
                <Typography variant="h3" fontWeight="600" fontFamily="Jura" align="center" color="primary">
                    {t("pages.production.steel-building-structures")}
                </Typography>
                <Typography component="p" variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ mt: "15px" }}>
                    {t("pages.production.steel-building-structures-p")}
                </Typography>
                <Typography variant="h4" fontWeight="500" fontFamily="Jura" sx={{ mt: "50px" }}>
                    {t("pages.production.building-metal-structures")}
                </Typography>
                <Box sx={{ ml: "20px", mt: "20px" }}>
                    <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ mb: "10px" }}>
                        {t("pages.production.building-metal-structures-p1")}
                    </Typography>
                    <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ mb: "10px" }}>
                        {t("pages.production.building-metal-structures-p2")}
                    </Typography>
                    <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ mb: "10px" }}>
                        {t("pages.production.building-metal-structures-p3")}
                    </Typography>
                    <Typography variant="h5" fontWeight="400" fontFamily="Raleway" >
                        {t("pages.production.building-metal-structures-p4")}
                    </Typography>
                </Box>
                <Typography variant="h4" fontWeight="500" fontFamily="Jura" sx={{ mt: "70px", mb: "50px" }}>
                    {t("pages.production.non-standard-metal-structures-and-equipment")}
                </Typography>
                <OrderButton />
            </Grid>
            {/* Дизайнерські сталеві вироби */}
            <Grid item xs={6} sx={{ my: "auto" }}>
                <Typography variant="h3" fontWeight="600" fontFamily="Jura" align="center" color="primary">
                    {t("pages.production.designer-steel-products")}
                </Typography>
                <Typography component="p" variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ mt: "15px" }}>
                    {t("pages.production.designer-steel-products-p1")}
                </Typography>
                <Typography variant="h4" fontWeight="400" fontFamily="Raleway" sx={{ my: "50px" }}>
                    {t("pages.production.designer-steel-products-p2")}
                </Typography>
                <OrderButton />
            </Grid>
            <Grid item xs={6}>
                <img
                    src={designer_steel_products}
                    alt="designer_steel_products"
                />
            </Grid>
            {/* Піч “буржуки” */}
            <Grid item xs={6}>
                <img
                    src={furnace}
                    alt="furnace"
                />
            </Grid>
            <Grid item xs={6} sx={{ my: "auto" }}>
                <Typography variant="h3" fontWeight="600" fontFamily="Jura" align="center" color="primary">
                    {t("pages.production.furnace")}
                </Typography>
                <Typography variant="h5" fontWeight="400" fontFamily="Raleway" sx={{ mt: "15px", mb: "10px" }}>
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
                <Box sx={{ display: "flex", mt: "80px" }}>
                    <OrderButton marginRight="30px" />
                    <DetailsButton link="furnace" />
                </Box>
            </Grid>
            {/* Захисний контейнер для генератора */}
            <Grid item xs={6} >
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
                <Box sx={{ display: "flex", mt: "70px" }}>
                    <OrderButton marginRight="30px" />
                    <DetailsButton link="" />
                </Box>
            </Grid>
            <Grid item xs={6}>
                <img
                    src={protective_container_for_generator}
                    alt="protective_container_for_generator"
                />
            </Grid>
        </Grid>
    )
}

export default Production