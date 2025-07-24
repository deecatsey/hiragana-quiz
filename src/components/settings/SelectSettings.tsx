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

import { useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import CancelIcon from "@mui/icons-material/Cancel";
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

  const settingsButtonSx = {
    position: "fixed",
    right: 0,
    top: 0,
  };

  return (
    <>
      <IconButton onClick={() => setOpen(true)} sx={settingsButtonSx}>
        <SettingsIcon />
      </IconButton>

      <SwipeableDrawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        // hideBackdrop
      >
        <IconButton onClick={() => setOpen(false)} sx={settingsButtonSx}>
          <CancelIcon />
        </IconButton>
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
