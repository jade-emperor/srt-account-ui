import React from "react";
import { Grid, TextField, Typography } from "@mui/material";
import { Controller } from "react-hook-form";
import { FormProps } from "model/FormProps";

export const FormTextController = ({
  control,
  rules,
  errors,
  name,
  label,
  parentGridSize,
  labelSize,
  compSize,
}: FormProps) => {
  return (
    <Grid container size={parentGridSize}>
      <Grid size={labelSize}>
        <Typography>{label}</Typography>
      </Grid>
      <Grid size={compSize}>
        <Controller
          name={name}
          control={control}
          defaultValue=""
          rules={rules ? rules : undefined}
          render={({ field }) => (
            <TextField
              fullWidth
              error={!!name && !!errors[name]}
              helperText={errors[name]?.message}
              {...field}
            />
          )}
        />
      </Grid>
    </Grid>
  );
};
