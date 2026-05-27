import React, { useState, useEffect } from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { getPatients, getDoctors, getAppointments } from '../api';

function Dashboard() {
    const [patientCount, setPatientCount] = useState(0);
    const [doctorCount, setDoctorCount] = useState(0);
    const [appointmentCount, setAppointmentCount] = useState(0);

    useEffect(() => {
        getPatients().then(res => setPatientCount(res.data.length));
        getDoctors().then(res => setDoctorCount(res.data.length));
        getAppointments().then(res => setAppointmentCount(res.data.length));
    }, []);

    return (
        <Box p={3}>
            <Typography variant="h4" fontWeight="bold" mb={4}>
                Welcome to Hospital Management System
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <Paper elevation={3} sx={{ p: 3, textAlign: 'center', bgcolor: '#1976d2', color: 'white' }}>
                        <PeopleIcon sx={{ fontSize: 50 }} />
                        <Typography variant="h4" mt={1}>{patientCount}</Typography>
                        <Typography variant="h6">Patients</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper elevation={3} sx={{ p: 3, textAlign: 'center', bgcolor: '#388e3c', color: 'white' }}>
                        <LocalHospitalIcon sx={{ fontSize: 50 }} />
                        <Typography variant="h4" mt={1}>{doctorCount}</Typography>
                        <Typography variant="h6">Doctors</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper elevation={3} sx={{ p: 3, textAlign: 'center', bgcolor: '#f57c00', color: 'white' }}>
                        <CalendarMonthIcon sx={{ fontSize: 50 }} />
                        <Typography variant="h4" mt={1}>{appointmentCount}</Typography>
                        <Typography variant="h6">Appointments</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Dashboard;