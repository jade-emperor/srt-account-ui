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
        <Typography key={'lbl-'+name}>{label}</Typography>
      </Grid>
      <Grid size={compSize}>
        <Controller key={'ctrl-'+name}
          name={name}
          control={control}
          rules={rules ? rules : undefined}
          defaultValue={""}
          render={({ field }) => (
            <TextField key={'txt-'+name}
              fullWidth
              error={!!name && !!errors[name]}
              helperText={errors[name]?.message}
              {...field}
              sx={{"width": "100%",
                "& .MuiInputBase-input.MuiOutlinedInput-input": {padding: "5px !important"}
              }}
            />
          )}
          
        />
      </Grid>
    </Grid>
  );
};
