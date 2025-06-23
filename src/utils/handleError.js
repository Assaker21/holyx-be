export function handleError(res, err) {
  console.error(err);
  res.status(500).json({ error: err.message ?? "Server error" });
}
