import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
    TextField,
    Grid,
    FormHelperText,
    Autocomplete,
    Button
} from '@mui/material';

const user = {
    firstName: 'mohammad',
    lastName: 'Faizal',
    phone: '912343054',
    address: 'pragati vihar Khora colony',
    businessName: 'ServeU',
    serviceType: 'Maid',
    serviceDiscription: 'I am the best ',
    experience: 1,
}
const serviceTypes = [
    { label: 'Maid', id: 1 },
    { label: 'Cook', id: 2 },
    { label: 'Tiffin', id: 3 },
    { label: 'Laundry', id: 4 },
]

const ProfileSetting = () => {
    const [disable, setdisable] = useState(true)
    const [serviceType, setServiceType] = useState(user.serviceType)
    const formik = useFormik({
        initialValues: {
            firstName: user.firstName,
            lastName: user.lastName,
            phone: user.phone,
            address: user.address,
            businessName: user.businessName,
            serviceType: user.serviceType,
            serviceDiscription: user.serviceDiscription,
            experience: user.experience,
        },
        validationSchema: Yup.object().shape({
            businessName: Yup.string()
                .required('Business name is required')
                .min(3),
            businessAddress: Yup.string()
                .required('Business Address is required')
                .min(10),
            phone: Yup.string()
                .min(10),
            serviceType: Yup.string()
                .required('Type correct Servie Type'),
        }),
        onSubmit: () => {

        }
    });


    const saveHandler = () => {
        setdisable((prev)=>!prev)
        const updatedUser = {
            firstName: formik.values.firstName,
            lastName: formik.values.lastName,
            phone: formik.values.phone,
            address: formik.values.address,
            businessName: formik.values.businessName,
            serviceType: serviceType,
            serviceDiscription: formik.values.serviceDiscription,
            experience: formik.values.experience,
        }
        console.log(updatedUser)
        
    }
    return (

        <div className='flex flex-col items-center'>
            <h1 className='section-heading'>Profile Settings</h1>
            {
                disable?<Button onClick={()=>setdisable((prev)=>!prev)}>Edit</Button>
                :<Button onClick={saveHandler}>Save</Button>
            }
            <div className='border-solid border-2 border-slate-400 flex flex-col space-y-5 w-3/4 p-5 rounded'>
                <div className='flex flex-row space-x-20  ' >
                    <TextField
                        name="firstName"
                        label="First Name"
                        variant="outlined"
                        // size='small'
                        className='w-200'
                        disabled={disable}
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                        helperText={formik.touched.firstName && formik.errors.firstName}
                    />
                    <TextField
                        name="lastName"
                        label="Last Name"
                        variant="outlined"
                        // size="small"
                        width='100%'
                        disabled={disable}
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                        helperText={formik.touched.lastName && formik.errors.lastName}
                    />
                </div>

                <TextField
                    name="phone"
                    label="Phone Number"
                    variant="outlined"
                    type="phone"
                    // width='100%'
                    className='w-1/2 m-5 p-1'
                    disabled={disable}
                    // size="small"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    helperText={formik.touched.phone && formik.errors.phone}
                />
                <TextField
                    name="address"
                    label="Address"
                    variant="outlined"
                    disabled={disable}
                    // size="small"
                    width='100%'
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    error={formik.touched.residence && Boolean(formik.errors.residence)}
                    helperText={formik.touched.residence && formik.errors.residence}
                />
                <TextField
                    name="businessName"
                    label="Business Name"
                    variant="outlined"
                    disabled={disable}
                    // size="small"
                    width='100%'
                    value={formik.values.businessName}
                    onChange={formik.handleChange}
                />
                <Autocomplete
                    disablePortal
                    onChange={(event, value) => setServiceType(value.label)}
                    id="serviceType"
                    options={serviceTypes}
                    disabled={disable}
                    className='w-1/2'
                    value={serviceType}
                    renderInput={(params) => <TextField {...params} label="Type of service Offered" />}
                />
                <TextField
                    name="serviceDiscription"
                    label="Discription"
                    variant="outlined"
                    // size='small'
                    type="text"
                    disabled={disable}
                    width='100%'
                    onChange={formik.handleChange}
                    value={formik.values.serviceDiscription}
                    helperText={formik.touched.password && formik.errors.password}
                />
                <TextField
                    name="experience"
                    label="Year of Experience"
                    variant="outlined"
                    disabled={disable}
                    // size="small"
                    type="number"
                    width='100%'
                    onChange={formik.handleChange}
                    value={formik.values.experience}
                    helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                />
                {formik.errors.submit && (
                    <Grid item xs={12} >
                        <FormHelperText error>
                            {formik.errors.submit}
                        </FormHelperText>
                    </Grid>
                )}
            </div>
        </div>
    )
}

export default ProfileSetting
