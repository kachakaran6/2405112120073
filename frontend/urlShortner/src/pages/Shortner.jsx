import { useState } from "react";
import UrlForm from "../components/URLForm";
import UrlTable from "../components/URLTable";
import { Snackbar, Alert, Box, Paper, Typography } from "@mui/material";

const Shortener = () => {
  const [results, setResults] = useState([]);
  const [toastOpen, setToastOpen] = useState(false); // ✅ Added

  const handleShorten = (inputData) => {
    const data = inputData.map((entry) => {
      const valid = parseInt(entry.valid) || 30;
      const shortcode =
        entry.shortcode || Math.random().toString(36).substr(2, 6);
      return {
        original: entry.url,
        short: `http://localhost:3000/${shortcode}`,
        valid,
        expiry: new Date(Date.now() + valid * 60000).toLocaleString(),
      };
    });

    setResults(data);
    setToastOpen(true); // ✅ Show toast
  };

  return (
    <Box sx={{ padding: 1 }}>
      <Paper
        elevation={3}
        sx={{
          padding: 2,
          backgroundColor: "#000",
          color: "white",
          marginBottom: 2,
        }}
      >
        <Typography variant="h5" align="center">
          Shorten URLs
        </Typography>
      </Paper>

      <UrlForm onSubmit={handleShorten} />
      <Box mt={3}>
        <UrlTable results={results} />
      </Box>

      <Snackbar
        open={toastOpen}
        autoHideDuration={3000}
        onClose={() => setToastOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="success" onClose={() => setToastOpen(false)}>
          URLs shortened successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Shortener;
