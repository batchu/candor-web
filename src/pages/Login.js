
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography
} from '@material-ui/core';
import FacebookIcon from 'src/icons/Facebook';
import GoogleIcon from 'src/icons/Google';
import GoogleLoginButton  from "../components/login/GoogleLoginButton";
import GoogleLogin from "react-google-login";
import React from "react";
import CookieHelper from "../components/helpers/CookieHelper";
import {bindActionCreators} from "redux";
import * as actions from "../redux/actions";
import {connect} from "react-redux";
import {useNavigate} from 'react-router-dom';


const Login = (props) => {
  const navigate = useNavigate();
  const onSuccess =(response) => {
    console.log(response)
    CookieHelper.set('access_token',response.accessToken, { path: '/' })
    props.userLoginGoogle(response.profileObj)
    navigate('/app/dashboard')
  }
 const onFailure = (response) => {
    console.log(response)
  }
  return (

    <>
      <Helmet>
        <title>Login | Material Kit</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center'
        }}
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              email: 'demo@devias.io',
              password: 'Password123'
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
              password: Yup.string().max(255).required('Password is required')
            })}
            onSubmit={() => {
              navigate('/app/dashboard', { replace: true });
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values
            }) => (
              <form onSubmit={handleSubmit}>
                <Box sx={{ mb: 3 }}>
                  <Typography
                    color="textPrimary"
                    variant="h2"
                  >
                    Sign in
                  </Typography>
                </Box>
                <Grid
                  container
                  spacing={3}
                >
                  <Grid
                    item
                    xs={12}
                    md={6}
                  >
                    <Button
                      color="primary"
                      fullWidth
                      startIcon={<FacebookIcon />}
                      onClick={handleSubmit}
                      size="large"
                      variant="contained"
                    >
                      Login with Facebook
                    </Button>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={6}
                  >
                    <GoogleLogin
                      clientId="56807133055-ho9mcuc5efuc2r22vea0tn1tr19cp17i.apps.googleusercontent.com"
                      render={renderProps => (
                        <Button
                          fullWidth
                          startIcon={<GoogleIcon />}
                          size="large"
                          variant="contained"
                          onClick={renderProps.onClick} disabled={renderProps.disabled}
                        >
                          Login with Google
                        </Button>
                      )}
                      buttonText="Login"
                      onSuccess={onSuccess}
                      onFailure={onFailure}
                      cookiePolicy={'single_host_origin'}
                    />
                  </Grid>
                </Grid>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};
function mapStateToProps(state){
  console.log(`state is ${state}`)
  return {
    user: state.user,
    settings:state.settings
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)

