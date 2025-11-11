export const ChatBotResponseMock = (userInput) => {
  const input = userInput.toLowerCase()

  if (input.includes('introduce') || input.includes('who are you')) {
    return 'Hello! I\'m your friendly chatbot, here to assist you with any questions or tasks you have. How can I help you today?'
  }

  if (input.includes('location') || input.includes('where') || input.includes('address')) {
    return 'Aroma Beans Coffee is located at 123 Coffee Lane, Brew City, CA 90210.'
  }

  if (input.includes('menu') || input.includes('coffee') || input.includes('drink')) {
    return 'We have a wide variety of coffee drinks including espresso, cappuccino, latte, americano, and many specialty drinks. We also serve pastries, sandwiches, and light meals. Would you like to know about any specific item?'
  }

  if (input.includes('hours') || input.includes('open') || input.includes('time')) {
    return 'We\'re open Monday through Friday 6:00 AM - 8:00 PM, and weekends 7:00 AM - 9:00 PM. We\'d love to see you!'
  }

  if (input.includes('thank') || input.includes('thanks')) {
    return 'You\'re very welcome! Is there anything else I can help you with today?'
  }

  return 'I\'d be happy to help you with that! Could you tell me more about what you\'re looking for? I can assist with our menu, location, hours, or any other questions about Aroma Beans Coffee.'
}