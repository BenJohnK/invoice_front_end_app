import { AppBar, Toolbar, Typography, Box } from '@mui/material'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Invoices App
          </Typography>
        </Toolbar>
      </AppBar>

      <Box sx={{ p: 3 }}>
        {children}
      </Box>
    </Box>
  )
}