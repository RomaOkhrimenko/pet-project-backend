const Feedback = require('../model/feedbackModel')

class FeedbackController {
    async getAllFeedback(req, res) {
        const orders = await Feedback.find()
        return res.status(201).json(orders)
    }

    async createFeedback(req, res) {
        console.log(req.body)
        try {
            const product = await Feedback.create(req.body)

            return res.json(product)
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new FeedbackController()