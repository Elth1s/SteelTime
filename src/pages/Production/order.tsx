import { Box } from "@mui/material"
import { useNavigate } from "react-router-dom"

import AskOrOrderForm from "../../components/AskOrOrderForm"

import arrow_left_orange from "../../assets/icons/arrow-left-orange.svg"

const ProductionOrder = () => {
    const navigate = useNavigate();

    return (
        <>
            <img
                src={arrow_left_orange}
                alt="arrow_left_orange"
                style={{ marginTop: "80px", cursor: "pointer" }}
                onClick={() => {
                    navigate("/production")
                    window.scrollTo(0, 0);
                }}
            />
            <Box sx={{ mt: "125px", mb: "195px", px: "347px" }}>
                <AskOrOrderForm />
            </Box>
        </>
    )
}

export default ProductionOrder