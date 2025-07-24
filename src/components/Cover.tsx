import { Box, Container, Stack, useMediaQuery, useTheme } from "@mui/material";
import { FC } from "react";

const Cover: FC = () => {
  const theme = useTheme();
  const large = useMediaQuery(theme.breakpoints.up("lg"));
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const small = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <>
      <Container maxWidth="lg">
        <Box
          sx={{
            minHeight: "96px",
          }}
        ></Box>
      </Container>
      <Box
        sx={{
          backgroundColor: "#2A325A",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              backgroundImage: "url(/images/cover.png)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              aspectRatio: "480/320",
            }}
          ></Box>
        </Container>
      </Box>
      <Container maxWidth="lg">
        <Stack
          px={large ? "130px" : "16px"}
          py="16px"
          spacing="30px"
          justifyContent="center"
          alignItems="center"
          direction="row"
        >
          <a target="_blank" href="https://mosgorsport.ru/">
            <Box
              height={matches ? "65px" : small ? "45px" : "25px"}
              component="img"
              src="/images/icons/mgs.svg"
            />
          </a>

          <a target="_blank" href="https://sport.moscow">
            <Box
              height={matches ? "65px" : small ? "45px" : "25px"}
              component="img"
              src="/images/icons/ms.svg"
            />
          </a>

          {/* <a target="_blank" href="https://www.mos.ru/moskomsport/">
          <Box
            height={matches ? "65px" : small ? "45px" : "25px"}
            component="img"
            src="/images/icons/dsgm.svg"
          />
        </a> */}
        </Stack>
      </Container>
    </>
  );
};

export default Cover;
