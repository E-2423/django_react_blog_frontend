import React from 'react';
import { Button, TextField, Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useFormik } from "formik";

const styles = makeStyles({
    wrapper: {
        marginTop: "3rem",
        height: "calc(100vh - 19.0625rem)",
        textAlign: "center",
        marginBottom: "9rem",
    },
    signUp: {
        margin: "1rem",
      },
      login: {
        textDecoration: 'none',
        fontWeight: '600',
        paddingLeft : '0.5rem'
      }  
  });

const Signup = () => {
    const formik = useFormik({
        initialValues: {
            username:"",
            email: '',
            password:"",
            password2:"",
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });

    const signupStyles = styles();
    console.log(formik)
    return(
        <Container className={signupStyles.wrapper} maxWidth="sm">
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField 
                            name="username"
                            label="Username"
                            variant="outlined" 
                            fullWidth
                            onChange={formik.handleChange}
                            value={formik.values.username}
  
                            />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            name="email" 
                            label="Email" 
                            variant="outlined" 
                            fullWidth
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            name="password" 
                            label="Password" 
                            variant="outlined" 
                            fullWidth
                            type="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        name="password2"
                        label="Password Again"
                        variant="outlined"
                        type="password"
                        fullWidth
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button 
                            type="submit" 
                            variant="contained" 
                            color="primary" 
                            fullWidth>
                                Register
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    )
}

export default Signup;
