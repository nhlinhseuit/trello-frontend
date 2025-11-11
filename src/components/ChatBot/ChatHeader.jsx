import { Box, IconButton, Typography } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { ChatBotIcon } from './ChatBotIcon'

export const ChatHeader = () => {
  return (
    <Box sx={{
      backgroundColor: '#7223faff',
      color: 'white',
      padding: '12px 15px',
      borderTopLeftRadius: '12px',
      borderTopRightRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      minHeight: '56px'
    }}>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2
      }}>
        <Box sx={{
          width: 36,
          height: 36,
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <ChatBotIcon />
        </Box>

        <Typography
          variant='h6'
          sx={{
            fontWeight: 600,
            fontSize: '18px',
            color: 'white'
          }}
        >
          Chatbot
        </Typography>
      </Box>

      <IconButton
        sx={{
          color: 'white',
          padding: '8px',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)'
          }
        }}
      >
        <KeyboardArrowDownIcon />
      </IconButton>
    </Box>
  )
}