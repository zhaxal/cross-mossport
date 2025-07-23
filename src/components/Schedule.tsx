/* eslint-disable @typescript-eslint/no-unused-vars */
import { handleScrollToElement } from "@/utils/scroll";
import {
  Box,
  Button,
  Grid,
  Link,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FC } from "react";

interface TableRowProps {
  time: string;
  description: string;
}

const TableRow: FC<TableRowProps> = ({ time, description }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      sx={{
        background: "#26336A",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        p: "8px 16px",
      }}
    >
      <Grid container>
        <Grid item md={3} xs={12} alignContent={"center"}>
          <Typography
            sx={{
              fontFamily: matches ? "Gotham Pro Regular" : "Gotham Pro Bold",
              fontSize: "20px",
              lineHeight: "120%",
              textAlign: "center",
              color: "#FFFFFF",
            }}
          >
            {time}
          </Typography>
        </Grid>
        <Grid item md={9} xs={12}>
          <Typography
            sx={{
              fontFamily: "Gotham Pro Regular",
              fontSize: "20px",
              lineHeight: "120%",
              color: "#FFFFFF",
            }}
          >
            {description}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

const Schedule: FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const medium = useMediaQuery("(min-width:1100px)");
  const sm = useMediaQuery("(min-width:480px)");

  return (
    <Box
      sx={{
        pb: "80px",
      }}
    >
      <Box
        id="schedule"
        sx={{
          backgroundRepeat: "no-repeat",
          backgroundPosition: matches ? "center" : "bottom",
          backgroundSize: "cover",
          aspectRatio: matches ? "1070/866" : sm ? "480/600" : "480/1257",
        }}
      >
        <Typography
          sx={{
            mb: "28px",
            textAlign: "center",
            fontFamily: "Mossport",
            color: "#E7352E",
            fontSize: medium ? "128px" : "96px",
            lineHeight: medium ? "128px" : "96px",
          }}
        >
          ПРОГРАММА
        </Typography>

        {/* <Typography
          sx={{
            mb: "40px",
            textAlign: "center",
            fontFamily: "Gotham Pro Bold",
            fontSize: matches ? "32px" : "28px",
            color: "#1F1F1F",
            lineHeight: matches ? "31px" : "27px",
          }}
        >
          Стадион «Авангард»
        </Typography> */}

        <Stack
          mb="40px"
          px={matches ? (medium ? "210px" : "20px") : "20px"}
          spacing="8px"
        >
          <TableRow
            time="09:00"
            description="Начало выдачи стартовых номеров (до 11:45)"
          />
          <TableRow
            time="10:00"
            description="Торжественное открытие соревнований"
          />
          <TableRow time="10:20" description="Разминка" />
          <TableRow time="10:30" description="Старт на дистанцию 1 километр" />
          <TableRow time="10:50" description="Разминка" />
          <TableRow time="11:00" description="Старт на дистанцию 5 километров" />
          <TableRow
            time="11:20"
            description="Церемония награждения участников дистанции 1 километр"
          />
          <TableRow time="11:30" description="Разминка" />
          <TableRow
            time="12:10"
            description="Церемония награждения участников дистанции 5 километра"
          />
          <TableRow time="12:20" description="Разминка" />
          <TableRow time="12:30" description="Старт на дистанцию 10 километров" />
          <TableRow
            time="13:40"
            description="Церемония награждения участников дистанции 10 километров"
          />
          <TableRow time="13:50" description="Закрытие мероприятия" />
        </Stack>

        {/* <Typography
          sx={{
            mb: "40px",
            textAlign: "center",
            fontFamily: "Gotham Pro Bold",
            fontSize: matches ? "32px" : "28px",
            color: "#1F1F1F",
            lineHeight: matches ? "31px" : "27px",
          }}
        >
          Остальные площадки
        </Typography>

        <Stack
          mb="40px"
          px={matches ? (medium ? "210px" : "20px") : "20px"}
          spacing="8px"
        >
          <TableRow
            time="09:00"
            description="Начало выдачи стартовых номеров (до 11:45)"
          />
          <TableRow
            time="10:00"
            description="Торжественное открытие соревнований"
          />
          <TableRow time="10:20" description="Разминка" />
          <TableRow time="10:30" description="Старт на дистанцию 500 метров" />
          <TableRow time="10:50" description="Разминка" />
          <TableRow time="11:00" description="Старт на дистанцию 1 км" />
          <TableRow
            time="11:20"
            description="Церемония награждения участников дистанции 1 км"
          />
          <TableRow time="11:30" description="Разминка" />
          <TableRow time="11:40" description="Старт на дистанцию 3 км" />
          <TableRow
            time="12:10"
            description="Церемония награждения участников дистанции 3 км"
          />
          <TableRow time="12:20" description="Разминка" />
          <TableRow time="12:30" description="Старт на дистанцию 5 км" />
          <TableRow
            time="13:10"
            description="Церемония награждения участников дистанции 5 км"
          />
          <TableRow time="13:30" description="Закрытие мероприятия" />
        </Stack> */}

        <Stack
          pb={medium ? "0px" : "80px"}
          justifyContent={matches ? "flex-end" : "centesdr"}
          px={matches ? "210px" : "0px"}
          alignItems="center"
          direction={matches ? "row" : "column-reverse"}
          spacing={matches ? "10px" : "10px"}
        >
          {/* <Link
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
            Положение о мероприятии
          </Link> */}
          <Button
            fullWidth
            sx={{
              mx: matches ? "56px" : "0px",
              background: "#E7352E",
              borderRadius: "8px",
              px: "40px",
              py: "20px",
              "& .MuiTouchRipple-root": {
                color: "#FFFFFF", // Change this to the desired ripple color
              },
            }}
          >
            <Typography
              onClick={handleScrollToElement("park")}
              sx={{
                fontFamily: "Gotham Pro Bold",
                fontSize: "18px",
                lineHeight: "152%",
                color: "#FFFFFF",
              }}
            >
              ЗАРЕГИСТРИРОВАТЬСЯ
            </Typography>
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Schedule;
