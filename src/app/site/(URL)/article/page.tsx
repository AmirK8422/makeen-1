"use client";
import React from "react";
import { Box, Typography, Button, Paper } from "@mui/material";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import { keyframes } from "@emotion/react";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

function Page() {
  const handleClick = () => {
    window.location.href = "/"; 
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
              marginTop: "50PX",
        fontFamily: 'Kalameh',
      }}
    >
      <Paper
        elevation={4}
        sx={{
          p: 5,
          textAlign: "center",
          borderRadius: 4,
            maxWidth: 420,
          fontFamily: 'Kalameh',
        }}
      >
        <BuildCircleIcon
          sx={{
            fontSize: 80,
            color: "primary.main",
            mb: 2,
                      animation: `${spin} 4s linear infinite`,
            fontFamily: 'Kalameh',
          }}
        />
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          ما در حال کار روی این بخش هستیم. لطفاً به‌زودی دوباره سر بزنید
        </Typography>
        <Button variant="contained" color="primary" onClick={handleClick}>
          بازگشت به صفحه اصلی
        </Button>
      </Paper>
    </Box>
  );
}

export default Page;
