import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
function Input() {
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="filled-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        
      />
    </form>
    // <div className="signInBox">
    //     <img className="signInLogo"></img>
    //     <div className="heading1-txt"></div>
    //     <Input></Input> {/*Username*/}
    //     <Input></Input> {/*Password*/}
    //     <Button></Button>{/*SignInBtn*/}

    // </div>
  );
}

export default Input;
