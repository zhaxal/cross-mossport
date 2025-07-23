import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";

function Description() {
  const theme = useTheme();
  const large = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Stack direction="row" pt="68px">
      <Box
        sx={{
          width: "50%",
        }}
      >
        <Box
          component="img"
          src="/images/description_logo.svg"
          sx={{
            width: "100%",
            height: "auto",
          }}
        />
      </Box>

      <Stack direction="column-reverse">
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
          13 сентября 2025 года в Крылатском пройдет ассовый забег в рамках
          Всероссийского дня бега “Кросс нации” для взрослых и детей на
          дистанциях 1 км, 5 км и 10 км. Подойдет как новичкам, которые хотят
          поучаствовать в массовом состязании, так и любителям, которые хотят
          подготовиться к марафонам.
        </Typography>
      </Stack>
    </Stack>
  );
}

export default Description;
