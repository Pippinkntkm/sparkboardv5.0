import React, { useState, useRef, useEffect } from 'react'
import { Send, Bot, User } from 'lucide-react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

const RooAI = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm ROO-AI, your startup assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputText, setInputText] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputText.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputText('')
    setIsLoading(true)

    // Simulate AI response (replace with actual API call)
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputText),
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
      setIsLoading(false)
    }, 1000)
  }

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()
    
    if (input.includes('hello') || input.includes('hi')) {
      return "Hello! I'm here to help with your startup journey. What would you like to know?"
    }
    if (input.includes('funding') || input.includes('investor')) {
      return "I can help you with funding strategies, investor outreach, and pitch deck optimization. What specific aspect would you like to explore?"
    }
    if (input.includes('business plan') || input.includes('strategy')) {
      return "Great! Let's work on your business strategy. I can help with market analysis, competitive positioning, and growth planning."
    }
    if (input.includes('marketing') || input.includes('growth')) {
      return "Marketing and growth are crucial for startups. I can assist with customer acquisition strategies, digital marketing, and growth hacking techniques."
    }
    if (input.includes('team') || input.includes('hiring')) {
      return "Building the right team is essential. I can help with hiring strategies, team structure, and company culture development."
    }
    
    return "That's an interesting question! I'm here to help with various aspects of your startup journey including funding, strategy, marketing, team building, and more. Could you tell me more about what you're working on?"
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="h-[calc(100vh-120px)] w-full bg-gradient-to-br from-boomerang-black via-boomerang-navy to-boomerang-blue flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-center p-6 border-b border-boomerang-silver/20">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-boomerang-light-blue to-boomerang-blue rounded-full flex items-center justify-center">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-boomerang-silver">ROO-AI</h1>
            <p className="text-sm text-boomerang-silver/70">Your Startup Assistant</p>
          </div>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[70%] rounded-2xl px-4 py-3 ${
                message.sender === 'user'
                  ? 'bg-boomerang-light-blue text-white'
                  : 'bg-boomerang-silver/10 text-boomerang-silver border border-boomerang-silver/20'
              }`}
            >
              <div className="flex items-start space-x-2">
                {message.sender === 'bot' && (
                  <Bot className="w-5 h-5 text-boomerang-light-blue mt-0.5 flex-shrink-0" />
                )}
                <div className="flex-1">
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  <p className="text-xs opacity-60 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
                {message.sender === 'user' && (
                  <User className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                )}
              </div>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-boomerang-silver/10 text-boomerang-silver border border-boomerang-silver/20 rounded-2xl px-4 py-3">
              <div className="flex items-center space-x-2">
                <Bot className="w-5 h-5 text-boomerang-light-blue" />
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-boomerang-light-blue rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-boomerang-light-blue rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-boomerang-light-blue rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-boomerang-silver/20">
        <div className="flex items-end space-x-3">
          <div className="flex-1 relative">
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything about your startup..."
              className="w-full bg-boomerang-silver/10 border border-boomerang-silver/20 rounded-2xl px-4 py-3 text-boomerang-silver placeholder-boomerang-silver/50 resize-none focus:outline-none focus:border-boomerang-light-blue transition-colors"
              rows={1}
              style={{ minHeight: '48px', maxHeight: '120px' }}
            />
          </div>
          <button
            onClick={handleSendMessage}
            disabled={!inputText.trim() || isLoading}
            className="bg-boomerang-light-blue hover:bg-boomerang-blue disabled:bg-boomerang-silver/30 disabled:cursor-not-allowed text-white rounded-2xl p-3 transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
        
        {/* Quick Suggestions */}
        <div className="mt-3 flex flex-wrap gap-2">
          {['Help with funding', 'Business strategy', 'Marketing tips', 'Team building'].map((suggestion) => (
            <button
              key={suggestion}
              onClick={() => setInputText(suggestion)}
              className="text-xs bg-boomerang-silver/10 hover:bg-boomerang-silver/20 text-boomerang-silver px-3 py-1 rounded-full border border-boomerang-silver/20 transition-colors"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RooAI 