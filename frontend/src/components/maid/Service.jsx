import React, { useState } from 'react'
import { Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { blue, green } from '@mui/material/colors';
import { alpha, styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import serviceListServices from '../services/serviceList'

const GreenSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
        color: green[600],
        '&:hover': {
            backgroundColor: alpha(green[600], theme.palette.action.hoverOpacity),
        },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
        backgroundColor: green[600],
    },
}));

const Service = ({ service, setServiceList ,index}) => {
    const [currservice, setcurrService] = useState(service)
    const [editable, seteditable] = useState(false);
    const handleSave =async  () => {
        // Update the service list with the updated service
        setServiceList((prevServiceList) =>
        prevServiceList.map((prevService) =>
        prevService._id === currservice._id ? currservice : prevService
        )
        );
        seteditable(false);
        await serviceListServices.update({currservice})

        // console.log(currservice) // Set editable to true after saving


    };

    const deleteHandle =  async ()  => {
        await serviceListServices.deleteServiceList(currservice)
        // console.log(currservice)
        setServiceList(prev => prev.filter(item => item._id != currservice._id && item._id !== undefined));
    }

    const handleChange = (event) => {
        setcurrService({
            ...currservice,
            time: event.target.value
        });
    };

    
    

    return (
        <div className={index%2==0?'bg-slate-100':''}>
        <div className='flex flex-row ' >
            <input className='w-48 m-4' placeholder='Service Type' disabled={!editable} value={currservice.serviceName } 
            onChange={(e)=> {setcurrService({...currservice,serviceName:e.target.value})}}></input>
            <Select
                id="Time"
                value={currservice.time}
                onChange={handleChange}
                disabled={!editable}
                sx={{
                    margin: '1rem',
                    height: '3rem', // Adjust the height as needed
                    border: 'none', // Remove the border
                    "& fieldset": {
                        border: "none" // Remove the fieldset border
                    }
                }}
            >
                <MenuItem value={'Morning(7AM-9AM)'} >{'Morning(7AM-9AM)'}</MenuItem>
                <MenuItem value={'Evening(5PM-8PM)'} >{'Evening(5PM-8PM)'}</MenuItem>
            </Select>
            <input className='w-48 m-4' placeholder='Price' disabled={!editable} value={currservice.price} onChange={(e)=> {setcurrService({...currservice,price:e.target.value})}}></input>
            {
                service.available ? <GreenSwitch disabled={!editable} defaultChecked className='m-4' value={currservice.available} /> : <GreenSwitch disabled={!editable} className='m-4' value={currservice.available} />
            }
            {
                editable ? <Button onClick={handleSave} className='h-20'  color='error'>Save</Button>
                    : <Button className='h-20' onClick={() => seteditable((curr) => !curr)}>Edit</Button>
            }
            <Button startIcon={<DeleteIcon />} onClick={deleteHandle} color='error'>Delete</Button>
        </div >
        </div>
    )
}

export default Service
