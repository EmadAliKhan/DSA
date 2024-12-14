import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LogoutIcon from "@mui/icons-material/Logout";
import { Avatar } from "@mui/material";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
// import ReactVirtualizedTable from "./Customer";
import { Route, Routes, useNavigate } from "react-router-dom";

import RequestPageIcon from "@mui/icons-material/RequestPage";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
// import RequestDetail from "./RequestDetail";
import ReservationCalender from "../../Dashboard/ReservationCalender";
import RequestForm from "./RequestForm";
const drawerWidth = 240;
import ContactPageIcon from "@mui/icons-material/ContactPage";
const routes1 = [
  {
    name: "RequestForm",
    path: "requestForm",
    element: <RequestForm />,
    icon: <ContactPageIcon />,
  },
  {
    name: "Calender",
    path: "calender",
    element: <ReservationCalender />,
    icon: <CalendarMonthIcon />,
  },
];

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

export default function SocietyDashboard() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [page, setPage] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();
  const navigateHandler = (path) => {
    navigate(path);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "black",
        }}
        open={open}
      >
        <Toolbar>
          <IconButton
            className="text-white"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 5,
              },
              open && { display: "none" },
            ]}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h4"
            sx={{ color: "white" }}
            noWrap
            component="div"
          >
            <span className="jacques-francois-shadow-regular">
              <b>Society</b> <span className="fw-light">Dashboard</span>
            </span>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader
          style={{
            backgroundColor: "black",
          }}
        >
          {open && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                padding: "10px 0",
                margin: "10px",
              }}
            >
              <Avatar
                sx={{ width: 90, height: 90 }}
                className="border border-white border-2"
                alt="Remy Sharp"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFzKngKTe0LsQY81ISNZ4eJ_YN6ro6K_63nsNal3ybnUudcjW-WiLzjaOvLwf079HZPHA&usqp=CAU"
              />
            </Box>
          )}

          <IconButton
            onClick={handleDrawerClose}
            className="bg-white text-black"
          >
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List
          style={{
            backgroundColor: "black",
            color: "white",
          }}
        >
          {routes1.map((route, index) => (
            <ListItem
              onClick={() => {
                setPage(false);
              }}
              key={index}
              disablePadding
            >
              <ListItemButton onClick={() => navigateHandler(route.path)}>
                <ListItemIcon sx={{ minWidth: "48px", color: "white" }}>
                  {React.cloneElement(route.icon, { sx: { fontSize: "2rem" } })}
                </ListItemIcon>
                <ListItemText
                  primary={route.name}
                  primaryTypographyProps={{
                    fontSize: "1.2rem",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}

          <Divider sx={{ backgroundColor: "white", height: "3px" }} />
          <div
            className="d-flex justify-content-center align-item-center"
            style={{ marginTop: "100px", marginBottom: "100px" }}
          >
            {open ? (
              <button
                className="btn btn-light px-3"
                onClick={() => {
                  localStorage.clear();
                  navigate("/");
                }}
              >
                <LogoutIcon /> Logout
              </button>
            ) : (
              <button
                className="btn btn-light px-3"
                onClick={() => {
                  localStorage.clear();
                  navigate("/");
                }}
              >
                <LogoutIcon />
              </button>
            )}
          </div>
        </List>
        <Divider />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />

        <Routes>
          {routes1.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Box>
    </Box>
  );
}
