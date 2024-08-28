"use client";

import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#b21eb2", // Основной цвет
    },
    background: {
      default: "#131313", // Фон для страницы
      paper: "#1f1f1f", // Фон для компонентов
    },
    text: {
      primary: "#ffffff", // Основной цвет текста
      secondary: "#a1a1a1", // Вторичный цвет текста
    },
  },
});
