import React, {useState, useEffect} from 'react'
import { Grid, Typography, makeStyles } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import { contacts } from "../data/contacts";
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
    createNewText: {
        color: "white",
        display: "inline-flex",
        alignItems: "center",
        fontSize: "20px",
        fontWeight: "bold",
        fontFamily: "Lucida Console",
        marginTop: "4px",
       
      },
      container : {

      },
      addIcon: {
        color: "white",
        display: "inline-flex",
        alignItems: "center",
        marginRight: "10px",
        marginTop: '22px'
      },
      createNew: {
        height: "80px",
        display: "flex",
        justifyContent: "center",
        marginRight: "15px",
        cursor: "pointer"
    },
      containerForm : {
          height: "250px",
          width: '100%',
          background: 'rgba( 255, 255, 255, 0.2 )',
          boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
          backdropFilter: 'blur( 4px )',
          borderRadius: '10px',
          border: '1px solid rgba( 255, 255, 255, 0.18 )',
          
      }
}))

const CreateNew = () => {
const classes = useStyles();
const [contactsStorage, setContactsStorage] = useState()
const [handleForm, setHandleForm] = useState(false)

const handleOpenForm = () => {
    setHandleForm(true)
}

const handleCloseForm = () => {
    setHandleForm(false)
}

const setLocalStorageContacts = () => {
    localStorage.setItem('allContacts', JSON.stringify(contacts))
    setContactsStorage(JSON.parse(localStorage.getItem('allContacts')))
    // setContactsStorage([...contactsStorage, obj])
    localStorage.setItem('allContacts', JSON.stringify(contactsStorage))
  }

useEffect(() => {
setLocalStorageContacts()
}, [])

    return (
        <Grid className={classes.container}     > 
            <Grid className={classes.createNew}> 
                <AddIcon fontSize="large" color="disabled" className={classes.addIcon}/>
                <Typography className={classes.createNewText}> Create New</Typography>
            </Grid>
            {handleForm && 
                <Grid className={classes.containerForm}> 
                    <FormControl> 
                        <Grid>
                        <input
                        placeholder="Type your message..."
                        margin="normal"
                        color="secondary"
                        required
                        fullWidth
                        autoFocus
                        />
                        <input
                        placeholder="Type your message..."
                        margin="normal"
                        color="secondary"
                        required
                        fullWidth
                        autoFocus
                        />
                        <input
                        placeholder="Type your message..."
                        margin="normal"
                        color="secondary"
                        required
                        fullWidth
                        autoFocus
                        />
                        <input
                        placeholder="Type your message..."
                        margin="normal"
                        color="secondary"
                        required
                        fullWidth
                        autoFocus
                        />
                        </Grid> 
                    </FormControl>
                </Grid>
            }
        </Grid>
        
    )
}


export default CreateNew;
