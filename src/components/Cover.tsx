import { Box, Container, Stack, useMediaQuery, useTheme } from "@mui/material";
import { FC } from "react";
import Image from "next/image";

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
              position: "relative",
              aspectRatio: "480/320",
            }}
          >
            <Image
              src="/images/cover.png"
              alt="Cover image"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </Box>
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
          {/* <a target="_blank" href="https://mosgorsport.ru/">
            <Box
              height={matches ? "65px" : small ? "45px" : "25px"}
              component="img"
              src="/images/icons/mgs.svg"
            />
          </a> */}

          <a target="_blank" href="https://www.mos.ru/moskomsport/">
            <Image
              src="/images/icons/dsgm.svg"
              alt="Department of Sports and Tourism of Moscow"
              width={matches ? 65 : small ? 45 : 25}
              height={matches ? 65 : small ? 45 : 25}
              style={{ height: "auto" }}
            />
          </a>

          <a target="_blank" href="https://sport.moscow">
            <Image
              src="/images/icons/ms.svg"
              alt="Moscow Sports"
              width={matches ? 65 : small ? 45 : 25}
              height={matches ? 65 : small ? 45 : 25}
              style={{ height: "auto" }}
            />
          </a>
        </Stack>
      </Container>
    </>
  );
};

export default Cover;
