/* eslint-disable @typescript-eslint/no-unused-vars */
import Cover from "@/components/Cover";
import Description from "@/components/Description";
import Distance from "@/components/Distance";
import Find from "@/components/Find";
import Footer from "@/components/Footer";
import Guide from "@/components/Guide";
import ImagePlace from "@/components/ImagePlace";
import Maps from "@/components/Maps";
import Navbar from "@/components/Navbar";
import Park from "@/components/Park";
import Photo from "@/components/Photo";
import Schedule from "@/components/Schedule";
import { Snackbar, Alert } from "@mui/material";

import {
  Box,
  Container,
  CssBaseline,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Head from "next/head";
import { useState, useEffect } from "react";

export default function Preview() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    setSnackbarOpen(true);
  }, []);

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      <Head>
        <title>Кросс нации 2025</title>
      </Head>
      <CssBaseline />
      <Navbar />

      <Snackbar
        open={snackbarOpen}
        onClose={handleSnackbarClose}
        autoHideDuration={null}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        sx={{ marginTop: "64px" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="warning"
          sx={{
            "& .MuiAlert-message": {
              whiteSpace: "pre-line",
              fontSize: "14px",
            },
          }}
        >
 {`РЕГИСТРАЦИЯ ЗАКРЫТА
 
ВНИМАНИЕ! Изменения в выдаче стартовых пакетов

Выдача стартовых номеров только ПРЕДВАРИТЕЛЬНАЯ! 

По адресу: Москва, ул. Крылатская, д.16с2

11 сентября с 13:00 до 21:00
12 сентября с 13:00 до 21:00

Выдачи стартовых номеров в день старта НЕ БУДЕТ!`}
        </Alert>
      </Snackbar>

      {matches && (
        <>
          <Cover />
          <Container maxWidth="lg">
            <Description />
          </Container>
          <ImagePlace />

          <Container maxWidth="lg">
            {/* <Distance /> */}
            <Schedule />
            <Maps />
            <Guide />
            {/* <Park /> */}
            <Photo />
            {/* <Box
            sx={{
              backgroundImage: "url(/images/block.svg)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              minHeight: 297,
            }}
          /> */}
            <Find />
            <Footer />
          </Container>
        </>
      )}
      {!matches && (
        <Box
          sx={{
            borderCollapse: "collapse",
          }}
        >
          <Cover />
          <Description />
          <ImagePlace />

          <Schedule />

          <Maps />
          <Guide />

          <Photo />
          <Find />
          <Footer />
          {/* 
        
      
  
     
        <Box
          sx={{
            backgroundImage: "url(/images/block.svg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            minHeight: 297,
          }}
        />
        <Footer /> */}
        </Box>
      )}
    </>
  );
}
