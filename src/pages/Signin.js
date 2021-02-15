import React from 'react';
import { Button, TextField, Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Formik } from "formik";

const styles = makeStyles({
    wrapper: {
        marginTop: "3rem",
        height: "calc(100vh - 19.0625rem)",
        textAlign: "center",
        marginBottom: "9rem",
    },
  });

const initialValues = {
    email: "",
    password: "",
  };
  const handleFormSubmit = (values) => {
      alert(JSON.stringify(values, null, 2))

  }

const Signin = () => {

    const signinStyles = styles();  
     

    return(
        <Container className={signinStyles.wrapper} maxWidth="sm">
            <Formik
                initialValues = {initialValues}
                onSubmit = {handleFormSubmit}
            >
                {({ handleSubmit, handleChange, values })=>(
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <TextField 
                                    name="email" 
                                    label="Email" 
                                    variant="outlined" 
                                    fullWidth
                                    value={values.email}
                                    onChange={handleChange}
                                    />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField 
                                    name="password" 
                                    label="Password" 
                                    variant="outlined" 
                                    fullWidth
                                    type="password"
                                    value={values.password}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button 
                                    type="submit" 
                                    variant="contained" 
                                    color="primary" 
                                    fullWidth
                                    >
                                        Login
                                </Button>
                            </Grid>
                        </Grid>
                </form>
                )}    
            </Formik>
        </Container>
    )
}

export default Signin;
