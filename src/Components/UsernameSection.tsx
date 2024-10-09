import React from 'react';
import { Box, Typography } from '@mui/material';
import  Grid  from '@mui/material/Grid2';

import AccessTimeSharpIcon from '@mui/icons-material/AccessTimeSharp';

function UsernameSection() {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const formattedTime = currentDate.toLocaleTimeString();

    return (
        <Box sx={{ padding: 2, width: '100%', display: 'flex', flexDirection: 'column' }}>
            <Grid container spacing={2} sx={{ width: '100%' }}>
                <Grid size = {{  xs:12, md:6 }}>
                    <Box sx={{ width: '100%' }}>
                        <Typography variant="h5" fontWeight='bold'>Good afternoon, Aquib!</Typography>
                        <Typography variant="body2" sx={{ marginTop: 1, fontFamily: 'serif' }}>
                            You have 2 leave requests pending
                        </Typography>
                    </Box>
                </Grid>

                <Grid size = {{xs:12, md:6 }} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Box 
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            backgroundColor: 'white',
                            boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
                            borderRadius: 2,
                            padding: 1,
                            marginRight: "32px",
                            width: 'max-content',
                        }}
                    >   
                        <Typography variant="body2" sx={{ marginBottom: 0.5 }}>
                            Current Time
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant="body1" sx={{ marginRight: 1 }}>
                                {`${formattedDate}, ${formattedTime}`}
                            </Typography>
                            <AccessTimeSharpIcon />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default UsernameSection; 