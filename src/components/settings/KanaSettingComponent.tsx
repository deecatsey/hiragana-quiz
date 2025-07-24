import { MenuItem, Stack, Switch, Typography } from "@mui/material";

export type KanaSettingComponentProps = {
  toggleSetting: () => void;
  checked?: boolean;
  label: string;
};

export function KanaSettingComponent({
  checked,
  label,
  toggleSetting,
}: KanaSettingComponentProps) {
  const setSetting = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    toggleSetting();
  };

  return (
    <MenuItem>
      <Stack direction="row" alignItems="center" onClick={setSetting}>
        <Switch checked={checked || false} />
        <Typography variant="body1">{label}</Typography>
      </Stack>
    </MenuItem>
  );
}
