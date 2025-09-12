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
          {`КАК ДОБРАТЬСЯ
          
          На автомобиле:
          По улице Крылатская до адреса «ул. Крылатская, д. 16с2».
          Большая Платная парковка расположена рядом с Ледовым Дворцом (70 руб/час).
          Строго не рекомендуем оставлять автомобили в зоне действия знака «Парковка запрещена».
          Внимание! Улица Крылатская будет перекрыта со стороны улицы Нижние Мнёвники до Ледового дворца. Заезд на парковку возможен только со стороны проспекта Маршала Жукова.
          
          Пешком:
          От станции Крылатское Наиболее короткий пешеходный маршрут ведет от Осеннего бульвара через сквозной проезд до светофора на ул. Крылатские Холмы и далее к Церкви Рождества Богородицы. Ее нужно обогнуть с южной стороны и идти по дорожке к ул. Крылатской, а на ней повернуть налево и идти до катка все время прямо. Общая протяженность маршрута около 3,5 км, время в пути порядка 40 минут.
          
          Автобусы:
          Специально для болельщиков и участников забега 13 сентября с 15:00 до 21:00 каждые 10 минут будут курсировать шаттлы.
          Маршрут: м. Крылатское (выход 5) Крылатские холмы 21 - Ледовый дворец и обратно.`}
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
