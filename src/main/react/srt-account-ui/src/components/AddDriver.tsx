import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { FormTextController } from "./common/FormTextController";
import { Box, Button, Grid } from "@mui/material";
import { FormRadioController } from "./common/FormRadioController";
import { DriversList } from "./DriversList";
import { addOrUpdateDriver } from "services/DriverService";

export const AddDriver = () => {
  const { control, handleSubmit, formState: { errors }, } = useForm();
  const [driverId, setDriverId] = useState<any>(0);

  const [genders, setGenders] = useState([
    { key: "M", label: "Male" },
    { key: "F", label: "Female" },
    { key: "O", label: "Others" }
  ])
  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    addOrUpdateDriver(data).then(resp => {
      if (resp?.id) {
        setDriverId(resp?.id);
      } else {
        console.error('Driver details not added/updated: ', resp);
      }
    }).catch(err => console.warn("Record submission failed: ", err));
  };

  return (
    <Fragment key={driverId}>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Grid container size={12} columnSpacing={0.5}>
          <Grid size={2}>
            <FormTextController control={control} errors={errors}
              name="driverName" label="Driver Name"
              labelSize={4} compSize={8} parentGridSize={12}
            />
          </Grid>
          <Grid size={3}>
            <FormTextController control={control} errors={errors}
              name="driverAddress" label="Driver Address"
              labelSize={3} compSize={9} parentGridSize={12}
            />
          </Grid>
          <Grid size={2}>
            <FormTextController control={control} errors={errors}
              name="phoneNumber" label="Driver Phone"
              labelSize={6} compSize={6} parentGridSize={12}
            />
          </Grid>
          <Grid size={3}>
            <FormRadioController control={control} rules={undefined}
              name="gender" label="Gender" defaultValue={"M"}
              labelSize={3} compSize={9} parentGridSize={12}
              menuItems={genders} />
          </Grid>
          <Grid size={2}>
            <Button type="submit" variant="contained" color="success" size="small">
              Add Driver
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <DriversList />
      </Box>
    </Fragment>
  );
};
