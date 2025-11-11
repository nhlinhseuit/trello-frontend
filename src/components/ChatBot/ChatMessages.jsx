import { Avatar, Box, Fade, TextField, Typography } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '~/redux/user/userSlice'
import { ChatBotIcon } from './ChatBotIcon'
import { IconButton, InputAdornment } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
// import { ChatBotResponseMock } from './ChatBotResponseMock'
import { fetchChatBotResponseAPI } from '~/apis/index'
import { ChatBotLoading } from './ChatBotLoading'

export const ChatMessages = () => {
  const currentUser = useSelector(selectCurrentUser)
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [messages, setMessages] = useState([
    // Example message structure
    {
      id: 1,
      content: 'Hello, how can I help you?',
      isBot: true,
      timestamp: new Date()
    }
  ])
  const messagesEndRef = useRef(null)


  // Auto scroll to bottom when new messages added
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ top: messagesEndRef.current.scrollHeight, behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (e) => {
    e.preventDefault()
    if (!inputMessage.trim()) return

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      content: inputMessage.trim(),
      isBot: false,
      timestamp: new Date()
    }
    setMessages([...messages, userMessage])
    setInputMessage('')
    setIsTyping(true)

    try {
      // Call API BE to get bot response
      const botResponseObject = await fetchChatBotResponseAPI(inputMessage.trim())
      const botResponse = botResponseObject.botResponse
      setIsTyping(false)
      const botMessage = {
        id: messages.length + 2,
        content: botResponse,
        isBot: true,
        timestamp: new Date()
      }
      setMessages(prevMessages => [...prevMessages, botMessage])
    } catch (error) {
      setIsTyping(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage(e)
    }
  }

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      flex: 1,
      minHeight: 0
    }}>
      <Box sx={{
        flex: 1,
        overflowY: 'auto',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        backgroundColor: '#f8effcff'
      }}>
        {messages.map((message) => (
          <Box
            key={message.id}
            sx={{
              display: 'flex',
              flexDirection: message.isBot ? 'row' : 'row-reverse',
              alignItems: 'flex-start',
              gap: 1
            }}
          >
            <Avatar
              sx={{
                width: 32,
                height: 32,
                backgroundColor: message.isBot ? '#7c3aed' : '#e0e0e0',
                fontSize: '14px'
              }}
              src={message.isBot ? undefined : currentUser?.avatar}
            >
              {message.isBot ? <ChatBotIcon /> : currentUser?.displayName?.charAt(0)}
            </Avatar>

            <Box
              sx={{
                maxWidth: '80%',
                padding: '12px 16px',
                borderRadius: '18px',
                backgroundColor: message.isBot ? '#ffffff' : '#7c3aed',
                color: message.isBot ? '#000000' : '#ffffff',
                boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
                wordBreak: 'break-word'
              }}
            >
              <Typography
                variant='body2'
                sx={{
                  fontSize: '14px',
                  lineHeight: 1.4
                }}
              >
                {message.content}
              </Typography>
            </Box>
          </Box>
        ))}
        {isTyping && (
          <Fade in={isTyping}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              gap: 1
            }}
            >
              <ChatBotIcon />
              <ChatBotLoading />
            </Box>
          </Fade>
        )}

        <div ref={messagesEndRef} />
      </Box>

      <Box sx={{
        padding: '16px',
        backgroundColor: '#f8effcff',
        borderTop: '1px solid #e0e0e0'
      }}>
        <form onSubmit={handleSendMessage}>
          <TextField
            fullWidth
            variant='outlined'
            placeholder='Type your message...'
            size='medium'
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '24px',
                backgroundColor: '#ffffff',
                '& fieldset': {
                  borderColor: '#e0e0e0'
                },
                '&:hover fieldset': {
                  borderColor: '#7c3aed'
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#7c3aed'
                }
              }
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    type="submit"
                    disabled={!inputMessage.trim()}
                    sx={{
                      color: '#7c3aed',
                      '&:disabled': {
                        color: '#ccc'
                      }
                    }}
                  >
                    <SendIcon />
                  </IconButton>
                </InputAdornment>
              )
            }}
          >
          </TextField>
        </form>
      </Box>
    </Box>
  )
}