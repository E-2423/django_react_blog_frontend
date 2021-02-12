import React from 'react';
import { Button, TextField, Grid } from '@material-ui/core';

const Signup = () => {
    return(
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField 
                        name="username"
                        label="Username"
                        variant="outlined" 
                        fullWidth 
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        name="email" 
                        label="Email" 
                        variant="outlined" 
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        name="password" 
                        label="Password" 
                        variant="outlined" 
                        fullWidth/>
                </Grid>
                <Grid item xs={12}>
                <TextField
                    name="password2"
                    label="Password Again"
                    variant="outlined"
                    type="password"
                    fullWidth
                />
                </Grid>
                <Grid item xs={12}>
                    <Button 
                        type="submit" 
                        variant="contained" 
                        color="primary" 
                        fullWidth>Register
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default Signup;
