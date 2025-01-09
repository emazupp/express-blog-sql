function notFound(req, res, next) {
  res.status(404);
  res.json({ error: "Page not found" });
}

module.exports = notFound;
