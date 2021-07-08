import React from "react";
import { Grid, Typography, makeStyles} from "@material-ui/core";
import 'react-chat-elements/dist/main.css';
import logo from '../assets/img/logo.svg'
const useStyles = makeStyles((theme) => ({
    contactTitle : {
        width: "100%",
        background: 'rgba( 255, 255, 255, 0.2 )',
        boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
        backdropFilter: 'blur( 4px )',
        borderRadius: '10px',
        border: '1px solid rgba( 255, 255, 255, 0.18 )',
        margin: '3px',
        height: "96.5%"
    },
    img : {
        marginTop: '13%',
        width: '341px'
    },
    title: {
        fontFamily: 'monospace',
        marginTop: '-20px',
        fontSize: '30px',
    }

  }));

const NoMessageView = () => {


const classes = useStyles()


    return( 
        <Grid className={classes.contactTitle}> 
            <Grid> 
                <img src={logo} alt="<3" className={classes.img}/>
                <Typography className={classes.title}> Welcome back!</Typography>    
            </Grid>
               
        </Grid>
    )
}

export default NoMessageView;