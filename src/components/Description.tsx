/* eslint-disable @typescript-eslint/no-unused-vars */
import { handleScrollToElement } from "@/utils/scroll";
import {
  Box,
  Button,
  Link,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FC } from "react";

const DescriptionDesktop: FC = () => {
  const theme = useTheme();
  const large = useMediaQuery(theme.breakpoints.up("lg"));
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      sx={{
        backgroundImage: "#E3F2FF",
      }}
    >
      <Box
        id="description"
        sx={{
          backgroundImage: "url(/images/description_new.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          aspectRatio: "1170/811",
        }}
      >
        <Stack
          pt="188px"
          px={large ? "167px" : "40px"}
          direction="row"
          justifyContent="flex-end"
        >
          <Box>
            <Typography
              sx={{
                mb: "64px",
                textIndent: "32px",
                maxWidth: "400px",
                fontFamily: "Gotham Pro Medium",
                fontSize: large ? "24px" : "18px",
                color: "#0F2572",
                lineHeight: "120%",
                fontWeight: 400,
              }}
            >
              13 сентября 2025 года в Крылатском пройдет массовый забег «Кросс
              нации» для взрослых и детей на дистанциях 1 км, 5 км и 10 км.
              Забег подходит, как новичкам, которые хотят проверить свои силы,
              так и любителям, которые хотят подготовиться к марафонам.
            </Typography>
            <Stack px="50px" justifyContent="center">
              {/* <Button
                onClick={handleScrollToElement("park")}
                sx={{
                  position: "relative",
                  bgcolor: "#E7352E",
                  boxShadow: "0px 4px 0px rgba(0, 0, 0, 0.16)",
                  borderRadius: "8px",
                  fontFamily: "Gotham Pro Bold",
                  fontSize: large ? "18px" : "16px",
                  lineHeight: "152%",
                  color: "#FFFFFF",
                  px: large ? "40px" : "20px",
                  py: large ? "20px" : "16px",
                  "& .MuiTouchRipple-root": {
                    color: "#FFFFFF", // Change this to the desired ripple color
                  },
                  ":hover":  {
                    color: "#E7352E"
                  }
                }}
              >
                РЕЗУЛЬТАТЫ
              </Button> */}
              <Button
                fullWidth={matches ? false : true}
                onClick={() => {
                  const link =
                    "https://grom.place/competitions/kross-nacii-2025";

                  window.open(link, "_blank");
                }}
                sx={{
                  mx: matches ? "56px" : "0px",
                  background: "#E7352E",
                  borderRadius: "8px",
                  px: "40px",
                  py: "20px",
                  color: "#FFFFFF",
                  "& .MuiTouchRipple-root": {
                    color: "#FFFFFF", // Change this to the desired ripple color
                  },
                  ":hover": {
                    color: "#E7352E",

                    border: "1px solid #E7352E",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Gotham Pro Bold",
                    fontSize: "18px",
                    lineHeight: "152%",
                  }}
                >
                  ЗАРЕГИСТРИРОВАТЬСЯ
                </Typography>
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

const DescriptionMobile: FC = () => {
  const small = useMediaQuery("(min-width:480px)");
  // const medium = useMediaQuery("(min-width:1100px)");

  return (
    <Box
      id="description"
      pb="40px"
      sx={{
        backgroundImage: "url(/images/mobile/description.svg)",

        backgroundRepeat: "no-repeat",
        backgroundPosition: small ? "center" : "right",
        backgroundSize: "cover",

        aspectRatio: "480/694",
      }}
    >
      <Stack px="8px" pt={!small ? "128px" : "140px"} direction="row">
        <Box width="50%">
          <Box
            width="100%"
            component="img"
            src="/images/description_logo.svg"
          />
        </Box>

        <Box px="10px">
          <Typography
            sx={{
              mb: "16px",
              textIndent: "32px",
              maxWidth: "234px",
              fontFamily: "Gotham Pro Regular",
              fontSize: "16px",
              color: "#0F2572",
              lineHeight: "120%",
            }}
          >
            13 сентября 2025 года в Крылатском пройдет массовый забег «Кросс
            нации» для взрослых и детей на дистанциях 1 км, 5 км и 10 км. Забег
            подходит, как новичкам, которые хотят проверить свои силы, так и
            любителям, которые хотят подготовиться к марафонам.
          </Typography>
        </Box>
      </Stack>
      <Stack pt="16px" direction="row" justifyContent="center">
        <Button
          onClick={() => {
            const link = "https://grom.place/competitions/kross-nacii-2025";

            window.open(link, "_blank");
          }}
          sx={{
            position: "relative",
            bgcolor: "#E7352E",
            boxShadow: "0px 4px 0px rgba(0, 0, 0, 0.16)",
            borderRadius: "8px",
            fontFamily: "Gotham Pro Bold",
            fontSize: "16px",
            lineHeight: "152%",
            color: "#FFFFFF",
            px: "20px",
            py: "16px",
            "& .MuiTouchRipple-root": {
              color: "#FFFFFF", // Change this to the desired ripple color
            },
          }}
        >
          ЗАРЕГИСТРИРОВАТЬСЯ
        </Button>
      </Stack>
      {/* <Stack alignItems="center" pt="42px" px="60px">
          <Typography
            sx={{
              maxWidth: "350px",
              fontFamily: "Gotham Pro Bold",
              fontSize: "24px",
              color: "#0F2572",
              lineHeight: "23px",
              textAlign: "center",
            }}
          >
            Все участники получат дипломы и медаль финишера, а победители и
            призеры - медали и памятные призы
          </Typography>

          <Link
            target="_blank"
            href="https://disk.yandex.ru/d/rfFIi_cmXKRnrw"
            sx={{
              fontFamily: "Gotham Pro Bold",
              fontSize: "18px",
              lineHeight: "152%",
              color: "#0461B5",
              textDecoration: "underline",
            }}
          >
            <br />
            Положение о мероприятии
          </Link>
        </Stack>
        <Stack px="64px" pt="42px" alignItems="center">
          <Box
            width="100%"
            height="auto"
            component="img"
            src="/images/medal.svg"
          />
        </Stack> */}
    </Box>
  );
};

const Description: FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return <>{matches ? <DescriptionDesktop /> : <DescriptionMobile />}</>;
};

export default Description;
