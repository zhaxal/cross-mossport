/* eslint-disable @typescript-eslint/no-unused-vars */
import { Stack, Typography, useTheme, useMediaQuery, Box } from "@mui/material";

function Find() {
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.up("xs"));
  const md = useMediaQuery("(min-width:1100px)");
  const sm = useMediaQuery("(min-width:480px)");
  return (
    <Stack py="60px" spacing="30px" px="20px">
      <Typography
        sx={{
          textAlign: "center",
          fontFamily: "Mossport",
          color: "#E7352E",
          fontSize: md ? "128px" : "96px",
          lineHeight: md ? "128px" : "96px",
        }}
      >
        КАК НАС НАЙТИ
      </Typography>

      <Stack spacing="40px" direction={sm ? "row" : "column-reverse"}>
        <Box
          component="iframe"
          src="https://yandex.com/map-widget/v1/?um=constructor%3Aa91e31f85a66e709918147a9d9ce025f11bc3be1f0860f1e83552186944ef610&amp;source=constructor"
          height="500px"
          width={sm ? "50%" : "100%"}
        />

        <Stack spacing="40px" width={sm ? "50%" : "100%"}>
          <Typography
            sx={{
              fontFamily: "Gotham Pro Bold",
              fontSize: sm ? "32px" : "24px",
              color: "#26336A",
              lineHeight: sm ? "31px" : "23px",
            }}
          >
            АДРЕС ПРОВЕДЕНИЯ:
          </Typography>

          <Typography
            sx={{
              fontFamily: "Gotham Pro Medium",
              fontSize: sm ? "20px" : "24px",
              color: "#26336A",
              lineHeight: sm ? "19px" : "23px",
              textDecoration: "underline",
            }}
          >
            г. Москва, ул. Крылатская, 10
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Find;
