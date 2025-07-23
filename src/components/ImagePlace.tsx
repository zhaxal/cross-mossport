import { Box, Container } from "@mui/material";

function ImagePlace() {
  return (
    <Box
      sx={{
        bgcolor: "#26336A",
      }}
    >
      <Container maxWidth="lg">
        <Box component="img" src="/images/running.png" alt="Description" />
      </Container>
    </Box>
  );
}

export default ImagePlace;
