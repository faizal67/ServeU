import React from 'react';
import {
  Typography,
  List,
  ListItem,
  ListItemText
} from '@mui/material';

const ReviewInfo = ({ formik }) => {
  const user = formik.values
  return (
    <div className=' flex flex-row space-x-10'>
      <div>
        <Typography variant="overline">
          Personal Details
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="Full Name"
              secondary={user.displayName}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Email"
              secondary={user.email}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Mobile"
              secondary={user.mobile}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Address"
              secondary={user.address}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Gender"
              secondary={user.gender}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Age"
              secondary={user.age}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Education"
              secondary={user.education}
            />
          </ListItem>
        </List>
      </div>
      <div>
        <Typography variant="overline">
          Personal Information
        </Typography>
        <List>

          <ListItem>
            <ListItemText
              primary="Business Name"
              secondary={user.businessName}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Category"
              secondary={user.category}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Description"
              secondary={user.description}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Experience"
              secondary={user.experience}
            />
          </ListItem>
        </List>
      </div>
    </div>
  );
}

export default ReviewInfo;
