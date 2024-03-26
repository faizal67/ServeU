import React, { useState, useEffect } from 'react';
import providerService from '../services/provider'
import { useNavigate } from "react-router-dom"

import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
    Box,
    Stepper,
    Step,
    StepLabel,
    Grid,
    FormHelperText,
    Button,
} from '@mui/material';
import PersonalInfo from '../providerRegistration/PersonalInfo';
import ReviewInfo from '../providerRegistration/ReviewInfo';
import BusinessDetail from '../providerRegistration/BusinessDetail';


const steps = ['Personal Info', 'Business Detail', 'Review and Submit'];

const ProviderRegistration = ({ user , setUserdata}) => {
    const [activeStep, setActiveStep] = useState(0);
    const navigate = useNavigate()
    const handleBack = () => {
        setActiveStep(prevStep => prevStep - 1);
    };

    
    const handleNext = async () => {
        // await formik.handleSubmit();
        if (activeStep === 0 && Object.keys(formik.errors).length <= 4){
            setActiveStep(prevStep => prevStep + 1);
        }
        if (activeStep === 1 && Object.keys(formik.errors).length === 0){

            setActiveStep(prevStep => prevStep + 1);
        }

    };
    const formik = useFormik({
        initialValues: {
            displayName: user.displayName,
            email: user.email,
            mobile: user.mobile,
            address: "",
            gender: "",
            age: '',
            education: '',
            businessName: "",
            category: "",
            description: "",
            experience: '',
        },
        validationSchema: Yup.object().shape({
            displayName: Yup.string()
                .min(2, 'Too Short!')
                .max(50, 'Too Long!')
                .required('Name is required'),
            email: Yup.string()
                .required('Email is required'),
            gender: Yup.string()
                .required('Please choose a gender'),
            age: Yup.string()
                .required('Required!'),
            education: Yup.string()
                .required('Required!'),
            category: Yup.string()
                .required('Required!'),
            description: Yup.string()
                .required('Required!'), // Corrected field name
            experience: Yup.string()
                .required('Required!'),
            businessName: Yup.string()
                .required('Business name is required')
                .min(3, 'Business name must be at least 3 characters'),
            address: Yup.string()
                .required('Business Address is required')
                .min(10, 'Business address must be at least 10 characters'),
            mobile: Yup.string()
                .required('Mobile number is required')
                .min(10, 'Mobile number must be at least 10 characters'),
        }),

        onSubmit: async (values)=> {
            // Handle form submission here
            const providerData = values
            try {
                // console.log('Form submitted:', values);
                 const savedValues  = await providerService.addProvider({user,provider:providerData})
                console.log('savedvalue:',savedValues)
                setUserdata({...user,type:'maid'})
                navigate('/dashboard')
            } catch (error) {
                console.log('something went wrong in saving provider data',error)
            }
        }

    });

    const formContent = (step) => {
        switch (step) {
            case 0:
                return <PersonalInfo formik={formik} />;
            case 1:
                return <BusinessDetail formik={formik} />;
            case 2:
                return <ReviewInfo formik={formik} />;
            default:
                return <div>404: Not Found</div>;
        }
    };

    return (
        <div className='pt-5 h-[25rem]'>
            <Box
                sx={{
                    maxWidth: '800px',
                    padding: 2
                }}
            >
                <Stepper
                    activeStep={activeStep}
                    orientation="horizontal"
                >
                    {steps.map((label, index) => (
                        <Step key={index}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <Grid container>
                    <Grid item xs={12} sx={{ padding: '20px' }}>
                        {formContent(activeStep)}
                    </Grid>
                    {formik.errors.submit && (
                        <Grid
                            item
                            xs={12}
                        >
                            <FormHelperText error>
                                <p>Error show here</p>
                                {formik.errors.submit}
                            </FormHelperText>
                        </Grid>
                    )}
                    <Grid
                        item
                        xs={12}
                    >
                        <Button
                            disabled={activeStep === 0}
                            onClick={handleBack}
                        >
                            Back
                        </Button>
                        {activeStep === steps.length - 1 ? (
                            <Button onClick={formik.handleSubmit}>
                                Submit
                            </Button>
                        ) : (
                            <Button onClick={handleNext}>
                                Next
                            </Button>
                        )}
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default ProviderRegistration;
