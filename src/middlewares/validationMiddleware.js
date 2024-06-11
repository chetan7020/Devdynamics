// validationMiddleware.js

exports.validateInput = (req, res, next) => {
    const { topicId, subscriberId } = req.body;
  
    if (!topicId || !subscriberId) {
      return res.status(400).json({ error: 'Topic ID and subscriber ID are required.' });
    }
  
    next();
  };
  