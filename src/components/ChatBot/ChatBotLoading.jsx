import { Box } from '@mui/material'

export const ChatBotLoading = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 0.5,
        padding: '12px 16px',
        borderRadius: '18px',
        backgroundColor: '#ffffff',
        boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
        maxWidth: '80px'
      }}
    >
      {[0, 1, 2].map((i) => (
        <Box
          key={i}
          sx={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            backgroundColor: '#7c3aed',
            animation: 'typing 1.4s infinite ease-in-out',
            animationDelay: `${i * 0.2}s`,
            '@keyframes typing': {
              '0%, 80%, 100%': {
                transform: 'scale(0.8)',
                opacity: 0.5
              },
              '40%': {
                transform: 'scale(1)',
                opacity: 1
              }
            }
          }}
        />
      ))}
    </Box>
  )
}