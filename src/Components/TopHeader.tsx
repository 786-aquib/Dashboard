import React from "react";
import { Typography, TextField, IconButton, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

import SearchIcon from '@mui/icons-material/Search';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import NotificationAddSharpIcon from '@mui/icons-material/NotificationAddSharp';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import LeftHeader from "./LeftHeader";

function TopHeader() {
    return (
        <Box sx={{ padding: '7px', backgroundColor: 'white', boxShadow: '0 1px 1px rgba(0,0,0,0.2)' }}>
            <Grid container justifyContent="space-between" alignItems="center">
               
                <Grid >
                    <LeftHeader />
                </Grid>

                
                <Grid >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '30px', marginRight: 2 }}>
                        <TextField
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: 2, 
                                    backgroundColor: 'whitesmoke',
                                },
                                "& .MuiOutlinedInput-input": {
                                    padding: '6px 10px', 
                                },
                            }}
                            color='primary'
                            variant="outlined"
                            placeholder="Search anything..."
                            size="small"
                            InputProps={{
                                endAdornment: (
                                    <IconButton>
                                        <SearchIcon />
                                    </IconButton>
                                ),
                            }}
                        />
                        <Typography>
                            <EmailSharpIcon color=  'info' />
                        </Typography>
                        <Typography>
                            <NotificationAddSharpIcon color='info'/>
                        </Typography>
                        <Typography>
                            <AccountCircleSharpIcon color='info'/>
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </Box>
    );
}

export default TopHeader;