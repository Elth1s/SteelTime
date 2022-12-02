import { Box, Container } from "@mui/material";

import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

import "../../index.css"
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const DefaultLayout = () => {
    const { i18n } = useTranslation();

    useEffect(() => {
        document.body.className = "body-default-container-style"
        window.scrollTo(0, 0);
    }, []);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                width: "100%"
            }}
        >
            <Helmet>
                <html lang={i18n.language} />
            </Helmet>
            <Header />
            <Container component="main" sx={{ maxWidth: { lg: "lg", md: "910px", xs: "350px" } }}>
                <Outlet />
            </Container>
            <Footer />
        </Box>
    );
}

export default DefaultLayout;