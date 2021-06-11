const express = require('express')
const router = express.Router()

const messageController = require('../controllers/message.controller')

const isAuthenticated = require('../middleware/auth.middleware')

// Get global messages
router.get('/global', isAuthenticated, messageController.getGlobalMessages)

// Post global message
router.post('/global', isAuthenticated, messageController.postGlobalMessages)

// Get conversations list
router.get(
  '/conversations',
  isAuthenticated,
  messageController.getAllAuthConversations
)

// Get messages from conversation
// based on to & from
router.get(
  '/conversations/query',
  isAuthenticated,
  messageController.getConversationMessagesByUserId
)

// Post private message
router.post('/', messageController.sendMessageToUserInConveration)

// PUT update a conversation
router.put('/conversations/:id', messageController.updateConversationById)

module.exports = router
