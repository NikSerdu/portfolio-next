import { useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";
export const useColorMode = () => {
  const [colorMode, setColorMode] = useLocalStorage("color-theme", "dark");
  useEffect(() => {
    const className = "dark";
    const bodyClass = window.document.body.classList;

    colorMode === "dark"
      ? bodyClass.add(className)
      : bodyClass.remove(className);
  }, [colorMode]);

  const handleChange = () => {
    setColorMode(colorMode === "dark" ? "light" : "dark");
  };

  return { colorMode, setColorMode, handleChange };
};
