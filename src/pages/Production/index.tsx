import { Box, Grid, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"


import steel_building_structures from "../../assets/backgrounds/steel-building-structures.png"
import designer_steel_products from "../../assets/backgrounds/designer-steel-products.png"

const Production = () => {
    const { t } = useTranslation();
    return (
        <Grid container rowSpacing="50px" columnSpacing="33px" sx={{ mt: "183px", mb: "284px" }}>
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
                <Typography variant="h5" fontFamily="Raleway" sx={{ mt: "15px" }}>
                    {t("pages.production.steel-building-structures-p")}
                </Typography>
                <Typography variant="h4" fontWeight="500" fontFamily="Jura" sx={{ mt: "100px" }}>
                    {t("pages.production.building-metal-structures")}
                </Typography>
                <Box sx={{ ml: "20px", mt: "20px", "&:last-child": { mb: 0 } }}>
                    <Typography variant="h5" fontFamily="Raleway" sx={{ mb: "10px" }}>
                        {t("pages.production.building-metal-structures-p1")}
                    </Typography>
                    <Typography variant="h5" fontFamily="Raleway" sx={{ mb: "10px" }}>
                        {t("pages.production.building-metal-structures-p2")}
                    </Typography>
                    <Typography variant="h5" fontFamily="Raleway" sx={{ mb: "10px" }}>
                        {t("pages.production.building-metal-structures-p3")}
                    </Typography>
                    <Typography variant="h5" fontFamily="Raleway" sx={{ mb: "10px" }}>
                        {t("pages.production.building-metal-structures-p4")}
                    </Typography>
                </Box>
                <Typography variant="h4" fontWeight="500" fontFamily="Jura" sx={{ mt: "70px" }}>
                    {t("pages.production.non-standard-metal-structures-and-equipment")}
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h3" fontWeight="600" fontFamily="Jura" align="center" color="primary">
                    {t("pages.production.designer-steel-products")}
                </Typography>
                <Typography variant="h5" fontFamily="Raleway" sx={{ mt: "15px" }}>
                    {t("pages.production.steel-building-structures-p")}
                </Typography>
                <Typography variant="h4" fontWeight="500" fontFamily="Jura" sx={{ mt: "100px" }}>
                    {t("pages.production.building-metal-structures")}
                </Typography>
                <Box sx={{ ml: "20px", mt: "20px", "&:last-child": { mb: 0 } }}>
                    <Typography variant="h5" fontFamily="Raleway" sx={{ mb: "10px" }}>
                        {t("pages.production.building-metal-structures-p1")}
                    </Typography>
                    <Typography variant="h5" fontFamily="Raleway" sx={{ mb: "10px" }}>
                        {t("pages.production.building-metal-structures-p2")}
                    </Typography>
                    <Typography variant="h5" fontFamily="Raleway" sx={{ mb: "10px" }}>
                        {t("pages.production.building-metal-structures-p3")}
                    </Typography>
                    <Typography variant="h5" fontFamily="Raleway" sx={{ mb: "10px" }}>
                        {t("pages.production.building-metal-structures-p4")}
                    </Typography>
                </Box>
                <Typography variant="h4" fontWeight="500" fontFamily="Jura" sx={{ mt: "70px" }}>
                    {t("pages.production.non-standard-metal-structures-and-equipment")}
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <img
                    src={designer_steel_products}
                    alt="designer_steel_products"
                />
            </Grid>
        </Grid>
    )
}

export default Production