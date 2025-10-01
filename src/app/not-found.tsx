"use client";

import Link from "next/link";
import { Box, Typography, Button, Paper } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

export default function NotFound() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "amber.100",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 5,
          borderRadius: 3,
          textAlign: "center",
          maxWidth: 400,
          bgcolor: "white",
        }}
      >
        <ErrorOutlineIcon sx={{ fontSize: 60, color: "error.main" }} />
        <Typography variant="h4" component="h1" sx={{ mt: 2, fontWeight: "bold", color: "error.main" }}>
          404 - Not Found
        </Typography>
        <Typography variant="body1" sx={{ mt: 1, color: "text.secondary" }}>
          Oops! The page you are looking for doesn’t exist or has been moved.
        </Typography>

        <Button
          component={Link}
          href="/"
          variant="contained"
          sx={{
            mt: 3,
            bgcolor: "amber.500",
            "&:hover": { bgcolor: "amber.600" },
            borderRadius: 2,
            px: 3,
          }}
        >
          Return Home
        </Button>
      </Paper>
    </Box>
  );
}
