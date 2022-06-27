import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import styles from "./footer.module.scss"

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {`Copyright © ${new Date().getFullYear()}.  Developed by Jesús Cortés - `}
      <Link color="inherit" target="_blank" href="https://ctrlj.es/">
        ctrlj.es
      </Link>
    </Typography>
  );
}

const StickyFooter = () => {
  return (
    <Box>
      <Box
        className={styles.mainContainer}
        component="footer"
        sx={{
          mt: "auto",
          backgroundColor: "white",
          textAlign: "left",
        }}
      >
        <Container maxWidth="xl" sx={{ mt: 8, mb: 4 }}>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}

export default StickyFooter