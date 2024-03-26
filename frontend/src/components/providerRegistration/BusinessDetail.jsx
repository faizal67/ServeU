import React from 'react';
import {
    Grid,
    TextField,
    FormHelperText,
    MenuItem
} from "@mui/material";

const BusinessDetail = (props) => {
    const { formik } = props;

    return (
        <Grid container spacing={2} >
            <Grid item xs={12} >
                <TextField
                    name="businessName"
                    label="Business Name"
                    variant="outlined"
                    type="text"
                    fullWidth
                    size="small"
                    onChange={formik.handleChange}
                    value={formik.values.businessName}
                    error={formik.touched.businessName && Boolean(formik.errors.businessName)}
                    helperText={formik.touched.businessName && formik.errors.businessName ? formik.errors.businessName : ""}
                />
            </Grid>
            <Grid item xs={12} >
            <TextField
          select
          name="category"
          label="category"
          variant="outlined"
          size="small"
          fullWidth
          value={formik.values.category}
          onChange={formik.handleChange}
          error={formik.touched.category && Boolean(formik.errors.category)}
          helperText={formik.touched.category && formik.errors.category}
        >
                    <MenuItem value="cook">Cook</MenuItem>
                    <MenuItem value="maid">Maid</MenuItem>
                    <MenuItem value="tiffin">Tiffin/Mess</MenuItem>
                    <MenuItem value="laundry">Laundry</MenuItem>
                </TextField>
            </Grid>
            <Grid item xs={12} >
                <TextField
                    name="description"
                    label="Description"
                    variant="outlined"
                    size='small'
                    type="text"
                    fullWidth
                    onChange={formik.handleChange}
                    value={formik.values.description}
                    error={formik.touched.description && Boolean(formik.errors.description)}
                    helperText={formik.touched.description && formik.errors.description ? formik.errors.description : ""}
                />
            </Grid>
            <Grid item xs={12} >
                <TextField
                    name="experience"
                    label="Year of Experience"
                    variant="outlined"
                    size="small"
                    type="number"
                    fullWidth
                    onChange={formik.handleChange}
                    value={formik.values.experience}
                    error={formik.touched.experience && Boolean(formik.errors.experience)}
                    helperText={formik.touched.experience && formik.errors.experience ? formik.errors.experience : ""}
                />
            </Grid>
            {formik.errors.submit && (
                <Grid item xs={12} >
                    <FormHelperText error>
                        {formik.errors.submit}
                    </FormHelperText>
                </Grid>
            )}
        </Grid>
    )
}

export default BusinessDetail;
