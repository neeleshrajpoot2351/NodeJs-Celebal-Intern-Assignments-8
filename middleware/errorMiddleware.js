// middleware/errorMiddleware.js

const notFound = (req, res, next) => {
  res.status(404);
  res.json({ message: 'Not Found' });
};

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(err.statusCode || 500).json({
    message: err.message || 'Internal Server Error',
  });
};

module.exports = {
  notFound,
  errorHandler,
};
