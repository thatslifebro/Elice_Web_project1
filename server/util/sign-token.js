import jwt from 'jsonwebtoken';

const signToken = async (id, role) => {
  const token = await jwt.sign(
    {
      userId: id,
      role: role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '1h', //1분
      issuer: '6team',
    },
  );
  return token;
};

export default signToken;
