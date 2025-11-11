import { Box, Fade } from '@mui/material'
import { useState } from 'react'
import { ChatToggleButton } from './ChatToggleButton'
import { ChatHeader } from './ChatHeader'
import { ChatMessages } from './ChatMessages'

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <ChatToggleButton
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      />

      <Fade in={isOpen}>
        <Box sx={{
          position: 'fixed',
          bottom: 90,
          right: 20,
          width: 350,
          height: 510,
          backgroundColor: '#63c6f0ff',
          borderRadius: '12px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 9999
        }}>
          <ChatHeader />
          <ChatMessages />
        </Box>
      </Fade>
    </>
  )
}

export default ChatBot