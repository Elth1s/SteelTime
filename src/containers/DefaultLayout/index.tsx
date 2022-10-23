import { Box, Container } from "@mui/material";

import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

const DefaultLayout = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                width: "100%"
            }}
        >
            {/* <Header /> */}
            <Container component="main" sx={{ maxWidth: { lg: "lg", md: "md" } }}>
                <Outlet />
            </Container>
            {/* <Footer /> */}
        </Box>
    );
}

export default DefaultLayout;