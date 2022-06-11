import { ActionIcon } from "@mantine/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Sun, MoonStars } from "tabler-icons-react";
import { RootState } from "../../Redux/store";
import { toggleTheme } from "./themeSlice";

function ThemeModeButton() {
  const theme = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();
  return (
    <ActionIcon
      variant="outline"
      onClick={() => {
        dispatch(toggleTheme);
      }}
      title="Toggle color scheme"
      m={10}
    >
      {theme.darkMode ? <Sun size={20} /> : <MoonStars size={20} />}
    </ActionIcon>
  );
}

export default ThemeModeButton;
