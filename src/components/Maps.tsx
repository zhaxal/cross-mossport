/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Modal,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import CloseIcon from "@mui/icons-material/Close";
import { FC, useEffect, useState } from "react";
import { title } from "process";

function Maps() {
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.up("xs"));
  const md = useMediaQuery("(min-width:1100px)");
  const sm = useMediaQuery("(min-width:480px)");

  const [expanded, setExpanded] = useState<string | false>(false);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const handleFullscreen = (image: string) => {
    setFullscreenImage(image);
  };

  const handleCloseFullscreen = () => {
    setFullscreenImage(null);
  };

  const distanceData = [
    {
      id: "panel1",
      title: "Схема дистанции 1 км",
      image: "/images/1km.jpeg", // замените на актуальную схему
    },
    {
      id: "panel2",
      title: "Схема дистанции 5 км",
      image: "/images/5km.jpeg", // замените на актуальную схему
    },
    {
      id: "panel3",
      title: "Схема дистанции 10 км",
      image: "/images/10km.jpeg", // замените на актуальную схему
    },
    {
      id: "panel4",
      title: "Cхема стартового городка",
      image: "/images/scheme.jpg", // замените на актуальную схему
    }
  ];

  return (
    <Box
      sx={{
        bgcolor: "#FFFFFF",
      }}
    >
      <Box paddingBottom="32px" id="maps">
        {/* <Typography
          sx={{
            textAlign: "center",
            fontFamily: "Mossport",
            color: "#E7352E",
            fontSize: md ? "128px" : "96px",
            lineHeight: md ? "128px" : "96px",
            mb: "40px",
          }}
        >
          СХЕМЫ ДИСТАНЦИЙ
        </Typography> */}

        <Box px={md ? "100px" : "20px"}>
          {distanceData.map((distance) => (
            <Accordion
              key={distance.id}
              expanded={expanded === distance.id}
              onChange={handleChange(distance.id)}
              sx={{
                mb: "16px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
                "&:before": {
                  display: "none",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#E7352E" }} />}
                aria-controls={`${distance.id}-content`}
                id={`${distance.id}-header`}
                sx={{
                  backgroundColor: "#F5F5F5",
                  borderRadius: "8px",
                  "&.Mui-expanded": {
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                  },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Gotham Pro Bold",
                    fontSize: md ? "24px" : "20px",
                    color: "#31313E",
                    fontWeight: "bold",
                  }}
                >
                  {distance.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  padding: "20px",
                  display: "flex",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                <Box sx={{ position: "relative", display: "inline-block" }}>
                  <Box
                    component="img"
                    src={distance.image}
                    sx={{
                      maxWidth: "100%",
                      height: "auto",
                      borderRadius: "8px",
                      boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
                      cursor: "pointer",
                    }}
                    alt={distance.title}
                    onClick={() => handleFullscreen(distance.image)}
                  />
                  <IconButton
                    onClick={() => handleFullscreen(distance.image)}
                    sx={{
                      position: "absolute",
                      top: 8,
                      right: 8,
                      backgroundColor: "rgba(0, 0, 0, 0.6)",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                      },
                    }}
                  >
                    <FullscreenIcon />
                  </IconButton>
                </Box>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>

      {/* Fullscreen Modal */}
      <Modal
        open={!!fullscreenImage}
        onClose={handleCloseFullscreen}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(0, 0, 0, 0.9)",
          padding: "20px",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            outline: "none",
          }}
        >
          <IconButton
            onClick={handleCloseFullscreen}
            sx={{
              position: "fixed",
              top: 20,
              right: 20,
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 2,
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.7)",
              },
            }}
          >
            <CloseIcon />
          </IconButton>
          {fullscreenImage && (
            <Box
              component="img"
              src={fullscreenImage}
              sx={{
                maxWidth: "calc(100vw - 40px)",
                maxHeight: "calc(100vh - 40px)",
                objectFit: "contain",
                borderRadius: "4px",
              }}
              alt="Fullscreen map"
            />
          )}
        </Box>
      </Modal>
    </Box>
  );
}

export default Maps;
