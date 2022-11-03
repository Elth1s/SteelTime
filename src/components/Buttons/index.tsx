import { Box, Typography } from "@mui/material"

import arrow_right_light from "../../assets/icons/arrow-right-light.svg"

export const MoreButton = () => {
    return (
        <Box
            sx={{
                width: "105px",
                height: "93px",
                border: "1px solid #FCFDFF",
                borderRadius: "100px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <Typography variant="h4" fontWeight="500" fontFamily="Raleway" sx={{ mb: "10px" }}>
                Більше
            </Typography>
            <img
                src={arrow_right_light}
                alt="arrow_right_light"
            />
        </Box>
    )
}