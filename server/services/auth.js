const { User } = require('../db/model');
import bcrypt from 'bcrypt';
const saltRounds = 10;

import signToken from '../util/sign-token';

export class authService {
  static async login(email, password) {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('이메일이나 비번이 틀림');
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      throw new Error('이메일이나 비번이 틀림');
    }
    const token = await signToken(user.id, user.role);
    return token;
  }

  static async register(email, password, address, fullName, role) {
    const user = await User.findOne({ email });
    if (user) {
      throw new Error('이미 있는 이메일');
    }
    const newuser = await User.create({
      email,
      address,
      fullName,
      password: await bcrypt.hash(password, saltRounds),
      role,
    });
    const filtered = {
      email: newuser.email,
      address: newuser.address,
      fullName: newuser.fullName,
      role: newuser.role,
    };
    return filtered;
  }

  static async withdrawal(id, role, password) {
    if (role !== 'USER') {
      throw new Error('권한이 없다');
    }
    const user = await User.findOne({ id });
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      throw new Error('비번이 틀림');
    }
    await User.findByIdAndDelete(id);
  }
}