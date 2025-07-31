import {
  Divider,
  IconButton,
  Stack,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import type {
  KanaSystemSettingsKey,
  KanaTableSettingsKey,
} from "../../types/types";
import { initialKanaSettings } from "../../app/kanaSlice";
import CloseIcon from "@mui/icons-material/Close";

import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { KanaTableSettingComponent } from "./KanaTableSettingComponent";
import { KanaSystemSettingComponent } from "./KanaSystemSettingComponent";
import QuizModeRadio from "./QuizMode";

export default function SelectSettings() {
  const [open, setOpen] = useState<boolean>(false);

  const tableSettings = Object.entries(initialKanaSettings.tables).map(
    (setting) => {
      const [key] = setting;
      return (
        <KanaTableSettingComponent
          key={key}
          kanaKey={key as KanaTableSettingsKey}
        />
      );
    }
  );

  const systemSettings = Object.entries(initialKanaSettings.systems).map(
    (setting) => {
      const [key] = setting;
      return (
        <KanaSystemSettingComponent
          key={key}
          kanaKey={key as KanaSystemSettingsKey}
        />
      );
    }
  );

  return (
    <>
      <IconButton
        size="large"
        onClick={() => setOpen(true)}
        sx={{
          position: "absolute",
          right: "2rem",
          top: "2rem",
          "&:focus": { outline: "none" },
        }}
      >
        <MenuIcon fontSize="inherit" />
      </IconButton>

      <SwipeableDrawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        <Stack direction="row" justifyContent="end" p={2}>
          <IconButton size="large" onClick={() => setOpen(false)}>
            <CloseIcon fontSize="inherit" />
          </IconButton>
        </Stack>
        <Stack alignItems="start" justifyContent="center" height="100%">
          <Stack alignItems="center" justifyContent="center" width="100%">
            <Typography variant="h6">Quiz Mode:</Typography>
          </Stack>
          <QuizModeRadio />
          <Divider flexItem sx={{ m: 5 }} />
          <Stack alignItems="center" justifyContent="center" width="100%">
            <Typography variant="h6">Include Kana:</Typography>
          </Stack>
          {systemSettings}
          {tableSettings}
        </Stack>
      </SwipeableDrawer>
    </>
  );
}
