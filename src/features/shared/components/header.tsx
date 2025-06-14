import { AppBar, Box, Button, Icon, IconButton, Toolbar, Typography } from "@mui/material"
import { Logout, NotificationsNone } from "@mui/icons-material"

export const Header = () => {
  return (
    <AppBar position="fixed">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box
          component="img"
          src="/images/logo.png"
          alt="Logo"
          sx={{
            borderRadius: 2,
          }}
        />


        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton aria-label="notification">
            <NotificationsNone />
          </IconButton>

          <Button
            startIcon={<Logout />}
            aria-label="Logout"
            variant="text"
            sx={{ color: "MenuText" }}
          >
            <Typography variant="body2" component="span">
              Logout
            </Typography>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
} 