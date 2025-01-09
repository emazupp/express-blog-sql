function errorsHandler(err, req, res, next) {
  res.status(err.code ?? 500);
  res.json({ error: err.message });
}

module.exports = errorsHandler;
