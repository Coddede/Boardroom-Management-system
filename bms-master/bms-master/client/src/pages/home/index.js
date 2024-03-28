import { Box, Grid, Typography } from "@mui/material";
import { MuiButton } from "components/common/Button";
import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <Grid
      container
      //   sx={{
      //     display: "flex",
      //     flexDirection: "column",
      //     gap: 2,
      //   }}
    >
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
          gap: 2,
          backgroundImage: "url('hero.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: "white !important",

            // textShadow: "2px 2px 4px #000000",
          }}
        >
          Effortless Boardroom Booking
        </Typography>
        <Typography
          variant="h4"
          sx={{
            color: "white !important",
            // textShadow: "2px 2px 4px #000000",
          }}
        >
          Streamline your meeting schedules with our intuitive management
          system.
        </Typography>
        <MuiButton
          variant="contained"
          content="Get Started"
          onClick={() => navigate("/register")}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          px: 5,
          my: 5,
        }}
        id="about"
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Typography variant="h1">About Us</Typography>

            <Typography
              variant="body1"
              sx={{
                width: 600,
              }}
            >
              Our platform is designed to help you manage your boardroom
              bookings with ease. We provide a seamless experience for both
              administrators and users. Whether you need to schedule a meeting,
              check availability, or make changes to your bookings, our
              intuitive management system has got you covered. With Effortless
              Boardroom Booking, you can streamline your meeting schedules and
              ensure a smooth and efficient process. Say goodbye to the hassle
              of manual booking systems and embrace the convenience of our
              platform. Try it out today and experience the difference.
            </Typography>
          </Box>

          <Box>
            <img src="about.jpg" alt="about us" width={600} />
          </Box>
        </Box>
      </Grid>

      <Grid
        item
        xs={12}
        sx={{
          px: 5,
        }}
        id="contact"
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <img src="contact.jpg" alt="contact us" width={600} />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Typography variant="h1">Contact Us</Typography>

            <Typography
              variant="body1"
              sx={{
                width: 600,
              }}
            >
              For any inquiries, feedback, or assistance, feel free to contact
              us. Our team is always ready to help and provide the support you
              need. You can reach out to us via email, phone, or visit our
              office. We are committed to ensuring that you have a seamless
              experience with our platform. Contact us today and let us help you
              streamline your boardroom bookings.
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Typography variant="h5">
                Email:
                <Typography variant="body1">support@bms.com</Typography>
              </Typography>
              <Typography variant="h5">
                Phone:
                <Typography variant="body1">+254 123 456 789</Typography>
              </Typography>
              <Typography variant="h5">
                Location:
                <Typography variant="body1">
                  Kabarak University, Main Campus
                </Typography>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 5,
            width: "100vw",
            backgroundColor: "black",
            color: "white",
          }}
        >
          <Typography variant="body1">
            &copy; 2024 Boardroom Management System
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default HomePage;
