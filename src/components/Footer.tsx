/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Box,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FC } from "react";

const Footer: FC = () => {
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.up("xs"));
  const md = useMediaQuery("(min-width:1100px)");
  const sm = useMediaQuery("(min-width:480px)");

  return (
    <Box
      id="footer"
      sx={{
        backgroundColor: "#FFFFFF",
      }}
    >
      <Grid
        px={sm ? "64px" : "20px"}
        pb="36px"
        pt={sm ? "220px" : "260px"}
        container
        spacing="16px"
      >
        <Grid position="relative" item xs={sm ? 4 : 12}>
          <Box
            width={sm ? "100%" : "50%"}
            height="auto"
            component="img"
            sx={{
              position: "absolute",
              bottom: "40%",
            }}
            src="/images/description_logo.svg"
          ></Box>
        </Grid>
        <Grid item xs={sm ? 8 : 12}>
          <Stack spacing="16px" px={!sm ? "0px" : "25px"}>
            <Stack spacing="16px" direction={!sm ? "column-reverse" : "column"}>
              <Stack spacing="30px" direction="row">
                <a target="_blank" href="https://www.mos.ru/moskomsport/">
                  <Box
                    height={md ? "55px" : sm ? "45px" : "25px"}
                    component="img"
                    src="/images/icons/dep_blue.svg"
                  />
                </a>
                <a target="_blank" href="https://sport.moscow/">
                  <Box
                    height={md ? "55px" : sm ? "45px" : "25px"}
                    component="img"
                    src="/images/icons/mos_blue.svg"
                  />
                </a>
              </Stack>
              <Typography
                sx={{
                  maxWidth: !sm ? "75%" : "100%",
                  fontFamily: "Gotham Pro Bold",
                  fontSize: sm ? "32px" : "24px",
                  color: "#26336A",
                  lineHeight: sm ? "31px" : "23px",
                }}
              >
                Массовый забег «Кросс нации»
              </Typography>
            </Stack>

            <Stack spacing="16px">
              <Stack
                component="a"
                alignItems="center"
                spacing="20px"
                direction="row"
                href="mailto:cross.sport.mos@mail.ru"
              >
                <Box component="img" src="/images/icons/mail.svg" />
                <Typography
                  sx={{
                    fontFamily: "Gotham Pro Medium",
                    fontSize: sm ? "24px" : "20px",
                    color: "#26336A",
                    lineHeight: sm ? "23px" : "19px",
                    textDecoration: "underline",
                  }}
                >
                  cross.sport.mos@mail.ru
                </Typography>
              </Stack>

              <Stack alignItems="center" spacing="20px" direction="row">
                <a href="https://vk.com/moscowsportofficial">
                  <Box component="img" src="/images/icons/vk.svg" />
                </a>
                <a href="https://t.me/MoscowSportOfficial">
                  <Box component="img" src="/images/icons/tg.svg" />
                </a>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
      </Grid>

      <Box pb="12px" px={sm ? "64px" : "10px"}>
        <Typography
          sx={{
            fontFamily: "Gotham Pro Light",
            fontSize: sm ? "24px" : "16px",
            color: "#26336A",
            lineHeight: sm ? "23px" : "15px",
            textAlign: "justify",
          }}
        >
          2025 г. АНО “Спортивная лаборатория”
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
