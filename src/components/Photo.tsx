/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FC, useEffect, useState } from "react";

const Photo: FC = () => {
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.up("xs"));
  const md = useMediaQuery("(min-width:1100px)");
  const sm = useMediaQuery("(min-width:480px)");

  const [images, setImages] = useState<string[]>([
    "https://i.ibb.co/B52TFvC8/ART-4201.jpg",
    "https://i.ibb.co/S4PXXGHN/ART-4249.jpg",
    "https://i.ibb.co/K1SjXDJ/ART-4269.jpg",
    "https://i.ibb.co/LzBztntY/ART-4300.jpg",
    "https://i.ibb.co/sd4ZcfNk/ART-4454.jpg",
    "https://i.ibb.co/C5YhjqzD/ART-4523.jpg",
    "https://i.ibb.co/3yQMZMsv/ART-4562.jpg",
    "https://i.ibb.co/qFRhT4Rb/ART-4682.jpg",
    "https://i.ibb.co/rRBFG1sT/ART-4754.jpg",
    "https://i.ibb.co/RTq10vdz/ART-4820.jpg",
    "https://i.ibb.co/4n7brN57/ART-4853.jpg",
    "https://i.ibb.co/0j9qM5yR/ART-4223.jpg",
  ]);

  //https://disk.yandex.ru/d/wz42WKkLsQqODw

  return (
    <Box
      sx={{
        bgcolor: "#FFFFFF",
      }}
    >
      <Box paddingY="32px" id="photo">
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "Mossport",
            color: "#E7352E",
            fontSize: md ? "128px" : "96px",
            lineHeight: md ? "128px" : "96px",
          }}
        >
          ФОТО
        </Typography>

        <Grid px={md ? "100px" : "10px"} container spacing="6px">
          {images
            .map((image, i) => (
              <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
                <Box
                  component="img"
                  src={image}
                  width="100%"
                  height="100%"
                  sx={{
                    objectFit: "cover",
                    aspectRatio: "235/167",
                  }}
                  alt=""
                />
              </Grid>
            ))
            .slice(0, md ? 12 : sm ? 6 : 3)}
        </Grid>

        {/* <Box
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            mt: "40px",
          }}
        >
          <Button
            target="_blank"
            href="https://disk.yandex.ru/d/wz42WKkLsQqODw"
            sx={{
              background: "linear-gradient(90deg, #FFD324 0%, #FF8900 100%)",
              boxShadow: "0px 4px 0px rgba(0, 0, 0, 0.16)",
              borderRadius: "8px",
              fontFamily: "Gotham Pro Bold",
              fontSize: "18px",
              lineHeight: "152%",
              color: "#31313E",
              padding: "20px 40px",
              "& .MuiTouchRipple-root": {
                color: "#FFFFFF", // Change this to the desired ripple color
              },
            }}
          >
            ФОТО
          </Button>
        </Box> */}
      </Box>
    </Box>
  );
};

export default Photo;
