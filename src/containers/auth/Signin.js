import React from "react"
import {
    Avatar,
    Box,
    Button,
    Checkbox,
    Container,
    FormControlLabel,
    Grid,
    Link,
    makeStyles,
    TextField,
    Typography
} from "@material-ui/core";
import AcUnitIcon from "@material-ui/icons/AcUnit"

function Copyright(){
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright ® '}
            <Link href="#">Your website</Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {

      },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
        // justifyContent: 'center'
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(2)
    },
    submit: {
        margin: theme.spacing(3,0,2),
        // backgroundColor: '#2196f3',    
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
}))

export default function Signin(){

    const classes = useStyles()

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <AcUnitIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form}>  
                    <TextField 
                        label="Username"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        required
                    />
                    <TextField
                        name="password"
                        label="Password"
                        fullWidth
                        margin="normal"
                        type="password"
                        variant="outlined"
                        required
                    />
                    
                    <FormControlLabel 
                        label="Remember me"
                        control={<Checkbox value="remember" color="primary" />}
                    />
        
                    <Button
                        variant="contained"
                        // style={{
                        //     color: "#fff",
                        //     backgroundColor: "#1976d2",
                        // }}
                        color="primary"
                        fullWidth
                        className={classes.submit}
                        >
                        Sign In
                    </Button>

                    <Grid container direction="row" justifyContent="space-between" alignItems="center">
                        <Grid item>
                            <Link href="#" variant="body2">
                            Forgot password?
                            </Link>
                        </Grid>
                        <Grid item >
                            <Link href="#" variant="body2">
                            Don't have an account? Sign Up
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    )
}