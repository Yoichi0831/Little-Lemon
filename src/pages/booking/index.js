import react, { Component, useEffect, useState } from 'react'
import { Grid2 as Grid, Paper, Typography } from '@mui/material';
import littleLemonImg from '../../statics/images/little-lemon.jpg';
import BookingForm from './components/BookingForm'
import { ChakraProvider } from "@chakra-ui/react";
import { AlertProvider } from "../context/alertContext";
import {
    Box,
} from "@chakra-ui/react";
const Booking = (props) => {
    const [availableSlots, setAvailableSlots] = useState([
        '10:00 AM - 11:00 AM',
        '11:00 AM - 12:00 PM',
        '1:00 PM - 2:00 PM',
        '2:00 PM - 3:00 PM',
        '3:00 PM - 4:00 PM',
        '4:00 PM - 5:00 PM',
        '5:00 PM - 6:00 PM',
        '6:00 PM - 7:00 PM',
        '7:00 PM - 8:00 PM',
        '8:00 PM - 9:00 PM',
      ]);

      const handleSlotSelect = (selectedSlot) => {
        console.log(`Selected slot: ${selectedSlot}`);
      };



    return (
        <Grid container spacing={2} style={{
            minHeight: '100vh',
            backgroundSize: 'calc(100% / 12) 100%',
            padding: '20px'
        }}>
            <Grid item xs={12} sm={4} md={3} style={{ display: 'flex', justifyContent: 'center' }}>
                <Paper elevation={3} style={{ minHeight: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Box p={2} style={{ display: 'flex', justifyContent: 'center'}}>
                        <img className='little_lemon_img' src={littleLemonImg} alt="littleLemonImg" style={{ width: '30%' }} />
                    </Box>

                    <ChakraProvider>
                        <AlertProvider>
                            <BookingForm availableSlots={availableSlots} onSlotSelect={handleSlotSelect}/>
                        </AlertProvider>
                    </ChakraProvider>

                </Paper>
            </Grid>
        </Grid>
    )
}


export default Booking;