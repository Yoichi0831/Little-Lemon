import React from 'react';
import { Grid, Typography, Paper } from '@mui/material';

const Footer = () => {
    return (
        <Grid container component="footer" style={{ backgroundColor: 'olive', padding: '20px 0', height: '30px' }}>
            <Grid item xs={12}>
                <Paper elevation={3} style={{ backgroundColor: 'transparent', padding: '20px', textAlign: 'center' }}>
                    <Typography variant="h6" style={{ fontWeight: 'bold', color: 'white' }}>
                        Yoichi Minanokawa
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default Footer;
