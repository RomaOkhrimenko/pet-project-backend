const Router = require('express')
const feedbackController = require('../controllers/feedbackController')

const router = new Router()

router.route('/feedbacks').get(feedbackController.getAllFeedback)
router.route('/create/feedback').post(feedbackController.createFeedback)

module.exports = router