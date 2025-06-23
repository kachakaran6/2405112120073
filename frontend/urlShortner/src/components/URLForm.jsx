import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import logEvent from "../logger";

const UrlForm = ({ onSubmit }) => {
  const [inputs, setInputs] = useState([{ url: "", valid: "", shortcode: "" }]);

  const handleChange = (i, field, value) => {
    const newInputs = [...inputs];
    newInputs[i][field] = value;
    setInputs(newInputs);
  };

  const addMore = () => {
    if (inputs.length < 5)
      setInputs([...inputs, { url: "", valid: "", shortcode: "" }]);
  };

  const handleSubmit = () => {
    onSubmit(inputs);
    logEvent("User submitted URLs", { inputs });
  };

  function isValid(string) {
    try {
      new URL(string);
      return true;
      // eslint-disable-next-line no-unused-vars
    } catch (_) {
      return false;
    }
  }

  return (
    <div>
      {inputs.map((input, i) => (
        <Box
          key={i}
          sx={{
            marginBottom: 2,
            padding: 1,
            border: "1px solid #ddd",
            borderRadius: 1,
          }}
        >
          <TextField
            fullWidth
            label="Long URL"
            type="url"
            value={input.url}
            onChange={(e) => handleChange(i, "url", e.target.value)}
            error={input.url && !isValid(input.url)}
            helperText={
              input.url && !isValid(input.url)
                ? "Enter a valid URL (example., https://example.com)"
                : ""
            }
            sx={{ marginBottom: 2 }}
          />

          <TextField
            label="Validity (min)"
            type="number"
            value={input.valid}
            onChange={(e) => handleChange(i, "valid", e.target.value)}
            sx={{ marginRight: 2 }}
          />
          <TextField
            label="Shortcode (optional)"
            value={input.shortcode}
            onChange={(e) => handleChange(i, "shortcode", e.target.value)}
          />
        </Box>
      ))}
      <Button onClick={addMore}>Add More</Button>
      <Button onClick={handleSubmit} variant="contained">
        Shorten
      </Button>
    </div>
  );
};

export default UrlForm;
