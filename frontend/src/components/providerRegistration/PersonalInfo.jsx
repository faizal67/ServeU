import React from 'react';
import {
  TextField,
  Grid,
  FormHelperText,
  MenuItem
} from '@mui/material';

const PersonalInfo = ({ formik }) => {
  return (
    <Grid
      container
      spacing={2}
    >
      <Grid
        item
        xs={6}
      >
        <TextField
          name="displayName"
          label="Full Name"
          variant="outlined"
          size="small"
          fullWidth
          value={formik.values.displayName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.displayName && !!formik.errors.displayName}
          helperText={formik.touched.displayName && formik.errors.displayName}
        />
      </Grid>
      <Grid
        item
        xs={6}
      >
        <TextField
          select
          name="gender"
          label="Gender"
          variant="outlined"
          size="small"
          fullWidth
          value={formik.values.gender}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.gender && Boolean(formik.errors.gender)}
          helperText={formik.touched.gender && formik.errors.gender}
        >
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
          <MenuItem value="other">Other</MenuItem>
        </TextField>
      </Grid>
      <Grid
        item
        xs={6}
      >
        <TextField
          name="age"
          label="Age"
          variant="outlined"
          size="small"
          fullWidth
          select
          value={formik.values.age}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.age && Boolean(formik.errors.age)}
          helperText={formik.touched.age && formik.errors.age}
        >
          {Array.from({ length: 100 }, (_, i) => i + 1).map((age) => (
            <MenuItem key={age} value={age}>
              {age}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid
        item
        xs={6}
      >
        <TextField
          name="education"
          label="Education"
          variant="outlined"
          size="small"
          fullWidth
          select
          value={formik.values.education}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.education && Boolean(formik.errors.education)}
          helperText={formik.touched.education && formik.errors.education}
        >
          <MenuItem value="uptoClass5">Up to Class 5</MenuItem>
          <MenuItem value="uptoClass8">Up to Class 8</MenuItem>
          <MenuItem value="uptoClass10">Up to Class 10</MenuItem>
          <MenuItem value="uptoClass12">Up to Class 12</MenuItem>
          <MenuItem value="graduate">Graduate</MenuItem>

        </TextField>
      </Grid>
      <Grid
        item
        xs={12}
      >
        <TextField
          name="email"
          label="email"
          variant="outlined"
          type="phone"
          fullWidth
          size="small"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
      </Grid>
      <Grid
        item
        xs={12}
      >
        <TextField
          name="mobile"
          label="Mobile No."
          variant="outlined"
          type="phone"
          fullWidth
          size="small"
          value={formik.values.mobile}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.mobile && Boolean(formik.errors.mobile)}
          helperText={formik.touched.mobile && formik.errors.mobile}
        />
      </Grid>
      <Grid
        item
        xs={12}
      >
        <TextField
          name="address"
          label="Address"
          variant="outlined"
          size="small"
          fullWidth
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.address && Boolean(formik.errors.address)}
          helperText={formik.touched.address && formik.errors.address}
        />
      </Grid>
      {formik.errors.submit && (
        <Grid
          item
          xs={12}
        >
          <FormHelperText error>
            {formik.errors.submit}
          </FormHelperText>
        </Grid>
      )}
    </Grid>
  );
}

export default PersonalInfo;
