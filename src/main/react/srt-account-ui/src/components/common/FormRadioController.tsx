import {
    FormControlLabel,
    Grid,
    Radio,
    RadioGroup,
    Typography,
} from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";

export const FormRadioController = ({
    control,
    rules,
    name,
    label,
    parentGridSize,
    compSize,
    labelSize,
    menuItems,
    defaultValue
}) => {
    return (
        <Grid container size={parentGridSize}>
            <Grid size={labelSize}>
                <Typography>{label}</Typography>
            </Grid>
            <Grid size={compSize}>
                <Controller name={name} control={control} rules={rules} defaultValue={defaultValue}
                    render={({ field }) => (
                        <RadioGroup {...field} row> 
                            {menuItems.map((item) => {
                                return (
                                    <FormControlLabel key={'lbl-'+item?.key} value={item?.key} label={item?.label}
                                        control={<Radio key={item?.key} />} />
                                );
                            })}
                        </RadioGroup>
                    )}
                />
            </Grid>
        </Grid>
    );
};
