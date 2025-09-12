import React, { useState } from 'react';
import {
    Box,
    Paper,
    IconButton,
    TextField,
    Typography,
    Avatar,
    Fade,
    Slide,
} from '@mui/material';
import {
    Chat as ChatIcon,
    Close as CloseIcon,
    Send as SendIcon,
    SmartToy as BotIcon,
} from '@mui/icons-material';

interface Message {
    id: string;
    text: string;
    isUser: boolean;
    timestamp: Date;
}

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: "Hi! I'm your AI assistant. Ask me anything about this portfolio owner's experience, skills, or projects!",
            isUser: false,
            timestamp: new Date(),
        },
    ]);
    const [inputValue, setInputValue] = useState('');

    const handleSendMessage = async () => {
        if (!inputValue.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            text: inputValue,
            isUser: true,
            timestamp: new Date(),
        };

        setMessages(prev => [...prev, userMessage]);
        const currentInput = inputValue;
        setInputValue('');

        // Add loading message
        const loadingMessage: Message = {
            id: (Date.now() + 1).toString(),
            text: "Thinking...",
            isUser: false,
            timestamp: new Date(),
        };
        setMessages(prev => [...prev, loadingMessage]);

        try {
            // Call the chatbot API
            const response = await fetch('/api/chatbot/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: currentInput,
                    topK: 3,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to get response');
            }

            const data = await response.json();
            
            // Remove loading message and add actual response
            setMessages(prev => {
                const withoutLoading = prev.filter(msg => msg.id !== loadingMessage.id);
                return [...withoutLoading, {
                    id: (Date.now() + 2).toString(),
                    text: data.response,
                    isUser: false,
                    timestamp: new Date(),
                }];
            });

        } catch (error) {
            console.error('Chat error:', error);
            
            // Remove loading message and add error response
            setMessages(prev => {
                const withoutLoading = prev.filter(msg => msg.id !== loadingMessage.id);
                return [...withoutLoading, {
                    id: (Date.now() + 2).toString(),
                    text: "I apologize, but I'm having trouble processing your request right now. Please try again in a moment.",
                    isUser: false,
                    timestamp: new Date(),
                }];
            });
        }
    };

    const handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <>
            {/* Chat Toggle Button */}
            <Box
                sx={{
                    position: 'fixed',
                    bottom: 24,
                    right: 24,
                    zIndex: 1000,
                }}
            >
                <Fade in={!isOpen}>
                    <IconButton
                        onClick={() => setIsOpen(true)}
                        sx={{
                            backgroundColor: 'primary.main',
                            color: 'white',
                            width: 56,
                            height: 56,
                            boxShadow: 3,
                            '&:hover': {
                                backgroundColor: 'primary.dark',
                                transform: 'scale(1.1)',
                            },
                            transition: 'all 0.3s ease',
                        }}
                    >
                        <ChatIcon />
                    </IconButton>
                </Fade>
            </Box>

            {/* Chat Window */}
            <Slide direction="up" in={isOpen} mountOnEnter unmountOnExit>
                <Paper
                    elevation={8}
                    sx={{
                        position: 'fixed',
                        bottom: 24,
                        right: 24,
                        width: 350,
                        height: 500,
                        display: 'flex',
                        flexDirection: 'column',
                        zIndex: 1000,
                        borderRadius: 2,
                        overflow: 'hidden',
                    }}
                >
                    {/* Chat Header */}
                    <Box
                        sx={{
                            backgroundColor: 'primary.main',
                            color: 'white',
                            p: 2,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Avatar sx={{ width: 32, height: 32, backgroundColor: 'white', color: 'primary.main' }}>
                                <BotIcon />
                            </Avatar>
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                AI Assistant
                            </Typography>
                        </Box>
                        <IconButton
                            onClick={() => setIsOpen(false)}
                            sx={{ color: 'white' }}
                            size="small"
                        >
                            <CloseIcon />
                        </IconButton>
                    </Box>

                    {/* Messages Area */}
                    <Box
                        sx={{
                            flex: 1,
                            p: 2,
                            overflowY: 'auto',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                            backgroundColor: '#f5f5f5',
                        }}
                    >
                        {messages.map((message) => (
                            <Box
                                key={message.id}
                                sx={{
                                    display: 'flex',
                                    justifyContent: message.isUser ? 'flex-end' : 'flex-start',
                                    alignItems: 'flex-start',
                                    gap: 1,
                                }}
                            >
                                {!message.isUser && (
                                    <Avatar sx={{ width: 24, height: 24, backgroundColor: 'secondary.main' }}>
                                        <BotIcon sx={{ fontSize: 16 }} />
                                    </Avatar>
                                )}
                                <Paper
                                    elevation={1}
                                    sx={{
                                        p: 1.5,
                                        maxWidth: '80%',
                                        backgroundColor: message.isUser ? 'primary.main' : 'secondary.main',
                                        color: 'white',
                                        borderRadius: 2,
                                        wordBreak: 'break-word',
                                        '& .MuiTypography-root': {
                                            color: 'white',
                                        },
                                    }}
                                >
                                    <Typography variant="body2">
                                        {message.text}
                                    </Typography>
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            display: 'block',
                                            mt: 0.5,
                                            opacity: 0.7,
                                            fontSize: '0.7rem',
                                            color: 'white',
                                        }}
                                    >
                                        {message.timestamp.toLocaleTimeString([], {
                                            hour: '2-digit',
                                            minute: '2-digit'
                                        })}
                                    </Typography>
                                </Paper>
                                {message.isUser && (
                                    <Avatar sx={{ width: 24, height: 24, backgroundColor: 'secondary.main' }}>
                                        <Typography variant="caption" sx={{ fontSize: '0.7rem' }}>
                                            U
                                        </Typography>
                                    </Avatar>
                                )}
                            </Box>
                        ))}
                    </Box>

                    {/* Input Area */}
                    <Box
                        sx={{
                            p: 2,
                            backgroundColor: 'white',
                            borderTop: 1,
                            borderColor: 'divider',
                        }}
                    >
                        <Box sx={{ display: 'flex', gap: 1, alignItems: 'flex-end' }}>
                            <TextField
                                fullWidth
                                multiline
                                maxRows={3}
                                placeholder="Ask me about the portfolio owner..."
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyPress={handleKeyPress}
                                variant="outlined"
                                size="small"
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: 2,
                                        backgroundColor: 'white',
                                    },
                                    '& .MuiInputBase-input': {
                                        color: 'grey.900',
                                        '::placeholder': {
                                            color: 'grey.600',
                                            opacity: 1,
                                        },
                                    },
                                }}
                            />
                            <IconButton
                                onClick={handleSendMessage}
                                disabled={!inputValue.trim()}
                                sx={{
                                    backgroundColor: 'primary.main',
                                    color: 'white',
                                    '&:hover': {
                                        backgroundColor: 'primary.dark',
                                    },
                                    '&:disabled': {
                                        backgroundColor: 'grey.300',
                                        color: 'grey.500',
                                    },
                                }}
                            >
                                <SendIcon />
                            </IconButton>
                        </Box>
                    </Box>
                </Paper>
            </Slide>
        </>
    );
};

export default Chatbot;
