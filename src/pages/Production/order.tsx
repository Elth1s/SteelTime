import { Box } from "@mui/material"
import { useNavigate } from "react-router-dom"

import AskOrOrderForm from "../../components/AskOrOrderForm"

import arrow_left_orange from "../../assets/icons/arrow-left-orange.svg"

const ProductionOrder = () => {
    const navigate = useNavigate();

    return (
        <>
            <Box sx={{ display: "flex", mt: { lg: "80px", xs: "50px" } }}>
                <img
                    src={arrow_left_orange}
                    alt="arrow_left_orange"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                        navigate("/production")
                        window.scrollTo(0, 0);
                    }}
                />
            </Box>
            <Box sx={{ mt: { lg: "125px", xs: "45px" }, mb: { lg: "195px", xs: "187px" }, px: { lg: "347px", xs: "19px" } }}>
                <AskOrOrderForm />
            </Box>
        </>
    )
}

export default ProductionOrder