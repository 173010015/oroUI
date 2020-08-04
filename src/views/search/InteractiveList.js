import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import PhoneIcon from '@material-ui/icons/Phone';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

const getSearchItems = () =>{
  var json =
  {
      "data": [
          {
              "id": 1,
              "vehicleName": "Mahindra",
              "OwnerName": "Pradaaep",
              "Address": "123,Avas Vikas"
          },
          {
              "id": 2,
              "vehicleName": "Mahindra",
              "OwnerName": "Sudeep",
              "Address": "123,Avas Vikas"
          },
          {
              "id": 3,
              "vehicleName": "Mahindra",
              "OwnerName": "Jayedeep",
              "Address": "123,Avas Vikas"
          }
      ]
  }
  return json;
}


export default function InteractiveList() {
  const classes = useStyles();
  const items = getSearchItems();
  const [dense] = React.useState(false);


  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={12}>
          <Typography variant="h6" className={classes.title}>
            Avatar with text and icon
          </Typography>
          <div className={classes.demo}>
            {
            items.data.map((list)=>{
              return(
            <List dense={dense}>
                <ListItem >
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary= {list.OwnerName}
                    secondary={
                      <div>
                        <div>{list.Address}</div>
                        <div>{list.vehicleName}</div>
                      </div>
                    }
                    
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                     <PhoneIcon/>
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>,
                <Divider/>
            </List>
              )
            })
            }
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
