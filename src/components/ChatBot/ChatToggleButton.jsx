import { Fab, Tooltip } from '@mui/material'
import ChatIcon from '@mui/icons-material/Chat'
import CloseIcon from '@mui/icons-material/Close'

export const ChatToggleButton = ({ isOpen, onClick }) => {
  return (
    <Tooltip title={isOpen ? 'Close chat' : 'Open chat'}>
      <Fab
        color="primary"
        aria-label="chat"
        onClick={onClick}
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          zIndex: 10000,
          backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#d3e4f8ff' : '#313232ff',
          '&:hover': {
            backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#a8a8a8ff' : '#000000ff',
            transform: 'scale(1.1)'
          },
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 12px rgba(25, 118, 210, 0.3)'
        }}
      >
        {isOpen ? <CloseIcon /> : <ChatIcon />}
      </Fab>
    </Tooltip>
  )
}