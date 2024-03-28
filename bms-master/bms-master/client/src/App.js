import { Navigate, Route, Routes } from "react-router-dom";
import RootLayout from "components/Layouts/RootLayout";
import HomeLayout from "components/Layouts/HomeLayout";
import Dashboard from "pages/Dashboard";
import Login from "pages/Auth/login";
import Logout from "pages/Auth/logout";
import Register from "pages/Auth/register";
import ForgotPassword from "pages/Auth/forgotPassword";
import MessageModal from "components/messages";
import Profile from "pages/Profile";
import { ThemeProvider } from "@mui/material";
import useStyledTheme from "./Hooks/useStyledTheme";
import CreateBooking from "pages/Bookings/create";
import ViewBookings from "pages/Bookings/view";
import HomePage from "pages/home";
import CreateRoom from "pages/rooms/create";
import EditRoom from "pages/rooms/edit";

function App() {
  const theme = useStyledTheme();
  return (
    <ThemeProvider theme={theme}>
      <MessageModal />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route element={<HomeLayout />}>
          <Route path="home" element={<HomePage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="admin">
            <Route path="register" element={<Register isAdmin={true} />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
          </Route>
        </Route>

        <Route path="logout" element={<Logout />} />
        <Route element={<RootLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="bookings">
            <Route path="create/:roomName" element={<CreateBooking />} />
            <Route path="view" element={<ViewBookings />} />
            <Route path="view/:bookingId" element={<ViewBookings />} />
            {/* <Route path="edit" element={<Navigate to="/login" />} />
            <Route path="view" element={<Navigate to="/login" />} /> */}
          </Route>
          <Route path="rooms">
            <Route path="create" element={<CreateRoom />} />
            <Route path="edit/:name" element={<EditRoom />} />
          </Route>
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
