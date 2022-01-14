import React from 'react'
import { AppBar, Button, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'


// const primary = lightBlue[200]

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    navbar: {
        backgroundColor: '#2196f3', 
    },
    title: {
        flexGrow: 1
    },

}))

function Navbar() {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <AppBar position='sticky' className={classes.navbar}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        f6
                    </Typography>
                    
                    {/* <Button color="inherit">Logout</Button> */}
                    <IconButton edge="start" color="inherit" aria-label='menu'>
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
