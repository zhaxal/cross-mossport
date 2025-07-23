/* eslint-disable @typescript-eslint/no-unused-vars */
import Cover from "@/components/Cover";
import Description from "@/components/Description";
import Distance from "@/components/Distance";
import Footer from "@/components/Footer";
import Guide from "@/components/Guide";
import ImagePlace from "@/components/ImagePlace";
import Navbar from "@/components/Navbar";
import Park from "@/components/Park";
import Photo from "@/components/Photo";
import Schedule from "@/components/Schedule";

import {
  Box,
  Container,
  CssBaseline,
  useMediaQuery,
  useTheme,
} from "@mui/material";

export default function Preview() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <CssBaseline />
      <Navbar />
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

          <Schedule />
          <Guide />

          <Photo />

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
