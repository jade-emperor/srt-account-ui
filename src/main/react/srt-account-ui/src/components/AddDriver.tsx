import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
import { FormTextController } from "./common/FormTextController";
import { Box, Button, Grid } from "@mui/material";

export const AddDriver = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };

  return (
    <Fragment>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <FormTextController
          control={control}
          errors={errors}
          name="driverName"
          label="Driver Name"
          labelSize={6}
          compSize={6}
          parentGridSize={12}
        />
        <FormTextController
          control={control}
          errors={errors}
          name="driverAddress"
          label="Driver Address"
          labelSize={6}
          compSize={6}
          parentGridSize={12}
        />
        <FormTextController
          control={control}
          errors={errors}
          name="driverPhone"
          label="Driver Phone"
          labelSize={6}
          compSize={6}
          parentGridSize={12}
        />

        <Grid size={12}>
          <Button type="submit" variant="contained" fullWidth size="large">
            Add Driver
          </Button>
        </Grid>
      </Box>
    </Fragment>
  );
};
