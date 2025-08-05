import {
  ToggleButtonGroup,
  ToggleButton,
  Stack,
  Typography,
} from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import { useDispatch, useSelector } from "react-redux";
import type { ThemeModeObj } from "../../types/types";
import type { ThemeMode } from "../../app/types";
import type { AppDispatch, RootState } from "../../app/store";
import { setThemeMode } from "../../app/themeSlice";

export default function ThemeModeSettings() {
  const dispatch = useDispatch<AppDispatch>();
  const themeMode = useSelector((state: RootState) => state.theme.mode);

  const handleChange = (_: React.MouseEvent<HTMLElement>, mode: ThemeMode) => {
    dispatch(setThemeMode(mode));
  };

  const modes: ThemeModeObj[] = [
    { mode: "light", icon: <LightModeIcon /> },
    { mode: "system", icon: <SettingsBrightnessIcon /> },
    { mode: "dark", icon: <DarkModeIcon /> },
  ];

  const modeButtons = modes.map((themeMode) => {
    const { icon, mode } = themeMode;
    return (
      <ToggleButton value={mode} size="medium">
        <Stack direction="row" spacing={1}>
          {icon}
          <Typography variant="body1" textTransform="capitalize">
            {mode.charAt(0).toUpperCase() + themeMode.mode.slice(1)}
          </Typography>
        </Stack>
      </ToggleButton>
    );
  });

  return (
    <ToggleButtonGroup
      color="primary"
      value={themeMode}
      exclusive
      onChange={handleChange}
      aria-label="theme-mode"
    >
      {modeButtons}
    </ToggleButtonGroup>
  );
}
