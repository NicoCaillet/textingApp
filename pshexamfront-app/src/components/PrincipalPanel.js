import { Grid, Typography, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import logo from "../assets/img/user.jpg";
import { contacts } from "../data/contacts";
import "./index.css";
import "react-chat-elements/dist/main.css";
import ChatBoxComponent from "./chatBox";
import NoChatMainPage from "./noMessageView";
import ContactBox from "./ContactBox";

const useStyles = makeStyles((theme) => ({
  padre: {
    width: "100%",
    height: "100%",
    borderRadius: "14px",
  },
  body: {
    backgroundColor: "ligth-gray",
  },
  container: {
    margin: "auto",
    marginTop: "60px",
    height: "850px",
    width: "65%",
    display: "flex",
  },
  contactos: {
    width: "30%",
  },
  chat: {
    width: "70%",
  },
  logoDiv: {
    backgroundColor: "darkslategray",
    display: "flex",
  },
  imgPsh: {
    width: "82px",
    height: "74px",
    borderRadius: "59px",
    padding: "20px",
    paddingLeft: "-22px",
    marginLeft: "-12px",
  },
  reactApp: {
    display: "inline-flex",
    alignItems: "center",
    color: "white",
    fontFamily: "Montserrat",
    fontSize: "28px",
    fontWeight: "bold",
    textAlign: "left",
  },
  divBlack: {
    backgroundColor: "#31170E",
    height: "700px",
  },
  imgContactChat: {
    borderRadius: "50%",
    width: "90px",
    heoght: "90px",
    display: "inline-flex",
    justifyContent: "flex-start",
    marginLeft: "25px",
    padding: "25px",
  },
  contactTitle: {
    width: "100%",
    backgroundColor: "white",
  },
  chatInputs: {
    width: "100%",
    backgroundColor: "#E9E9E9",
    height: "670px",
    overflowY: "auto",
  },
  infoIndividualchat: {
    display: "flex",
  },
  messageBoxStyles: {},
  containerMessage: {
    height: "112px",
    marginBottom: "25px",
  },
  divnombreChat: {
    marginTop: "35px",
  },
  nombreChat: {
    fontSize: "30px",
    fontFamily: "Courier New",
    fontWeight: "bold",
    textAlign: "left",
  },
  puesto: {
    textAlign: "left",
    fontSize: "16px",
    fontWeight: "bold",
    color: "gray",
    marginTop: "-8px",
  },
  hora: {
    color: "gray",
    fontSize: "11px",
    marginBottom: "-20px",
    marginLeft: "19px",
  },
  createMessage: {
    display: "flex",
    width: "100%",
    marginTop: "9px",
  },
  divInput: {
    position: "fixed",
    marginTop: "-69px",
    width: "45.5%",
    backgroundColor: "white",
    height: "70px",
  },
  inputAlone: {
    width: "77%",
    borderRadius: "10px",
    outline: "none",
    marginLeft: "10px",
    border: "2px solid #EEEEEE",
    backgroundColor: "#F2F1F1",
  },
  buttonStyles: {
    borderRadius: "10px",
    marginLeft: "10px",
    width: "16%",
    color: "gray",
    fontWeight: "bold",
    height: "40px",
  },
  contactDetail: {
    height: "110px",
    display: "flex",
    borderBottom: "1px solid white",
    cursor: "pointer",
    justifyContent: "space-between",
  },
  nameContact: {
    color: "white",
    textAlign: "left",
  },
  imgContact: {
    width: "65px",
    height: "62px",
    marginTop: "21px",
    borderRadius: "50%",
  },
  lastmessage: {
    color: "lightgray",
    fontFamily: "Montserrat",
    textAlign: "left",
    fontSize: "13px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
  lastmessageHour: {
    color: "lightgray",
    fontFamily: "Montserrat",
    textAlign: "left",
    fontSize: "13px",
    whiteSpace: "nowrap",
  },
  divContactImg: {
    marginLeft: "10px",
  },
  divContactName: {
    marginTop: "10px",
    marginLeft: "5px",
    width: "133px",
  },
  divContactHour: {
    display: "inline-flex",
    marginRight: "10px",
    marginTop: "10px",
  },
  line: {
    alignItems: "center",
    borderBottom: "1px solid #dadde1",
    display: "flex",
    margin: "5px -4px",
    textAlign: "center",
  },
  createNew: {
    height: "80px",
    display: "flex",
    justifyContent: "center",
    marginRight: "15px",
  },
  createNewText: {
    color: "white",
    display: "inline-flex",
    alignItems: "center",
    fontSize: "20px",
    fontWeight: "bold",
    fontFamily: "Lucida Console",
  },
  addIcon: {
    color: "white",
    display: "inline-flex",
    alignItems: "center",
    marginTop: "22px",
    marginRight: "10px",
  },
  EstaNasheMal : {
    background: 'rgba( 255, 255, 255, 0.25 )',
    boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
    backdropFilter: 'blur( 4px )',
    webkitBackdropFilter: 'blur( 4px )',
    borderRadius: '10px',
    border: '1px solid rgba( 255, 255, 255, 0.18 )',
  },
  EstaDeRuta : {
    backgroundColor: 'lightblue',
    height: '300px'
  }
}));

function PrincipalPanel() {
  const [currentChat, setCurrentChat] = useState();
  const classes = useStyles();

  // const getItemLastMessage = (index) => {
  //     console.log(JSON.parse(localStorage.getItem(`${contacts[0].name}`)))
  //     const localStorageState = JSON.parse(localStorage.getItem(`${contacts[0].name}`))
  //     const lastPosition = localStorageState.length-1
  //     return localStorageState[lastPosition].message
  // }

  // console.log("funcion de nico", getItemLastMessage())

  const getCurrentChat = (person) => {
    const { id } = person;

    const currentPerson = contacts.find((item) => item.id === id);
    const currentMessages =
      JSON.parse(localStorage.getItem(`${person.name}`)) || [];
    setCurrentChat({ info: currentPerson, messages: currentMessages });
  };

  return (
    <Grid className={classes.padre}>
      <Grid className={classes.container}>
        <Grid className={classes.contactos}>
          <Grid className={classes.logoDiv}>
            <img src={logo} alt="psh react exam" className={classes.imgPsh} />
            <Typography className={classes.reactApp}> React Chat</Typography>
          </Grid>
          <Grid className={classes.divBlack}>
            {contacts.map((item) => {
              if (item.isActive) {
                return (
                  <ContactBox
                    key={item.id}
                    object={item}
                    getPerson={getCurrentChat}
                  />
                );
              } else {
                return <Grid></Grid>;
              }
            })}
            {/* <Grid className={classes.createNew}>
                        <AddIcon fontSize="large" color="disabled" className={classes.addIcon}/>
                        <Typography className={classes.createNewText}> Create New</Typography>
                    </Grid> */}
          </Grid>
        </Grid>
        <Grid className={classes.chat}>
          {currentChat ? (
            <ChatBoxComponent
              updateContact={getCurrentChat}
              object={currentChat.info}
              arrayMessages={currentChat.messages}
            />
          ) : (
            <NoChatMainPage />
          )}
        </Grid>
      </Grid>
      {/* <Grid className={classes.EstaDeRuta}>
        <Grid className={classes.EstaNasheMal}>  
          <Typography> Pero que de ruta esta esta muchacha</Typography>
        </Grid> 
      </Grid> */}
    </Grid>
  );
}

export default PrincipalPanel;
