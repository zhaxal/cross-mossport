import { Box, Container } from "@mui/material";

function ImagePlace() {
  return (
    <Box
      sx={{
        bgcolor: "#26336A",
      }}
    >
      <Container maxWidth="lg">
        <Box component="img" src="/images/deti.jpg" alt="Description" />
      </Container>
    </Box>
  );
}

export default ImagePlace;
