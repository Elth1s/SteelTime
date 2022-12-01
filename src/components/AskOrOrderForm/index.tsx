import {
    Typography,
    TextField,
    Grid,
    Box,
    Button
} from "@mui/material";

import emailjs from '@emailjs/browser';
import { Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";

import { useTranslation } from "react-i18next";
import CompleteForm from "../CompleteForm";
import { useState } from "react";


interface ISendEmail {
    name: string,
    phone: string,
    email: string,
    message: string
}

const AskOrOrderForm = () => {
    const { t } = useTranslation();

    const [open, setOpen] = useState(false);

    const sendEmailModel: ISendEmail = { name: '', phone: '', email: '', message: '' };

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const SendEmailSchema = Yup.object().shape({
        name: Yup.string()
            .required(`${t("validationProps.name")} ${t("validationMessages.is-required-first")}`)
            .label(t("validationProps.name")),
        phone: Yup.string()
            .required(`${t("validationProps.phone")} ${t("validationMessages.is-required-first")}`)
            .matches(phoneRegExp, `${t("validationProps.phone")} ${t("validationMessages.is-not-valid-first")}`)
            .label(t("validationProps.phone")),
        email: Yup.string()
            .required(`${t("validationProps.email")} ${t("validationMessages.is-required-second")}`)
            .email(`${t("validationProps.email")} ${t("validationMessages.is-not-valid-second")}`)
            .label(t("validationProps.email")),
        message: Yup.string()
            .required(`${t("validationProps.message")} ${t("validationMessages.is-required-third")}`)
            .label(t("validationProps.message")),
    });

    const formik = useFormik({
        initialValues: sendEmailModel,
        validationSchema: SendEmailSchema,
        onSubmit: (values) => {
            try {
                emailjs.send("service_wo53sfi", "template_u43mirn", {
                    name: values.name,
                    phone: values.phone,
                    email: values.email,
                    message: values.message,
                }, "1iJ6GF35nBLPxGys3");
                displayCompleteIcon()
                resetForm();
            }
            catch (ex) {
                console.log(ex)
                // toast.warning("Something went wrong")
            }

        }
    });

    const displayCompleteIcon = () => {
        if (!open) {
            setOpen(true); // show tooltip
            setTimeout(() => {
                setOpen(false); // remove/hide tooltip
            }, 1000);
        }
    };

    const { errors, touched, handleSubmit, getFieldProps, resetForm } = formik;

    return (
        <>
            <Typography align="center" variant="h2" fontFamily="Jura" fontWeight="700" sx={{ px: { lg: "0px", md: "75px" } }}>
                {t("pages.home.do-you-want-to-order-a-product")}
            </Typography>
            <FormikProvider value={formik} >
                <Form autoComplete="off" noValidate onSubmit={handleSubmit} >
                    <Grid container sx={{ mt: { lg: "44px", xs: "28px" }, "&>*:nth-of-type(1)": { pt: "0px" } }} rowSpacing={{ lg: "28px", xs: "14px" }}>
                        <Grid item xs={12} >
                            <TextField
                                fullWidth
                                variant="standard"
                                type="text"
                                label={t("validationProps.name")}
                                size="small"
                                {...getFieldProps('name')}
                                error={Boolean(touched.name && errors.name)}
                                helperText={touched.name && errors.name}
                            />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField
                                fullWidth
                                variant="standard"
                                type="text"
                                label={t("validationProps.phone")}
                                size="small"
                                {...getFieldProps('phone')}
                                error={Boolean(touched.phone && errors.phone)}
                                helperText={touched.phone && errors.phone}
                            />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField
                                fullWidth
                                variant="standard"
                                type="text"
                                label={t("validationProps.email")}
                                size="small"
                                {...getFieldProps('email')}
                                error={Boolean(touched.email && errors.email)}
                                helperText={touched.email && errors.email}
                            />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField
                                fullWidth
                                variant="standard"
                                type="text"
                                label={t("validationProps.message")}
                                size="small"
                                {...getFieldProps('message')}
                                error={Boolean(touched.message && errors.message)}
                                helperText={touched.message && errors.message}
                            />
                        </Grid>
                    </Grid>
                    <Box sx={{ mt: { lg: "74px", xs: "40px" }, display: "flex", justifyContent: "center" }}>
                        <Button
                            variant="contained"
                            sx={{
                                width: "118px",
                                height: "43px",
                                px: 0,
                                borderRadius: 0,
                                textTransform: "none",
                                fontSize: "20px"
                            }}
                            type="submit"
                        >
                            {t("pages.home.send")}
                        </Button>
                    </Box>
                </Form>
            </FormikProvider>
            <CompleteForm open={open} />
        </>
    )
}

export default AskOrOrderForm