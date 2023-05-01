import jwt from 'jsonwebtoken';

function authMaker(req, res, next) {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const makerId = decodedToken.makerId;
    if (req.body.makerId && req.body.makerId !== makerId) {
      throw 'Invalid maker ID';
    } else {
      req.makerId = makerId;
      next();
    }
  } catch (error) {
    res.status(401).json({ message: 'Invalid or missing token' });
  }
}

export default authMaker;
