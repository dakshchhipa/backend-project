const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(rerq, res, next)).catch((err) => next(err));
  };
};
export { asyncHandler };
