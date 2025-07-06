export default function permit(...roles) {
  return (req, res, next) => {
    if (roles.includes(req.user.role)) {
      return next();
    }

    res.sendStatus(401);
  };
}
