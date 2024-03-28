import { Avatar, Box, Grid, Typography } from "@mui/material";
import useResponsive from "Hooks/useResponsive";
import ProfileForm from "components/forms/models/profile";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "redux/features/user/userSlice";

const Profile = () => {
  const userData = useSelector(selectUser);

  return (
    <Grid
      container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
        height: "70vh",
        padding: "2rem",
        // border: "1px solid black",
      }}
    >
      <Grid
        item
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <Typography variant="h6" component="h1">
          Firstname: {userData.firstname}
        </Typography>
        <Typography variant="h6" component="h1">
          Lastname: {userData.lastname}
        </Typography>
        <Typography variant="h6" component="h1">
          Email: {userData.email}
        </Typography>
      </Grid>
      <Grid
        item
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <Typography variant="h5" component="h1">
          Update password
        </Typography>
        <ProfileForm />
      </Grid>
    </Grid>
  );
};

export default Profile;
