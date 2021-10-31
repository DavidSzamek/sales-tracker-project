const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');
const { Product } = require('../models');

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);
        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
    getAll: async (parent, args, context) => {
      return await Product.find();
    },
  },
  Mutation: {
    createProduct: async (parent, args, context) => {
      const { productName, size, rrp, promo, status } = args.post;
      const product = await new Product({ productName, size, rrp, promo, status }).save();
        return product;
    },
     updateProduct: async (parent, args, context) => {
      const {id} = args
      const { productName, size, rrp, promo, status } = args.post;
      const product = await Product.findByIdAndUpdate(
        id,
        { productName, size, rrp, promo, status },
        { new: true }
        );
        return product;
    },
    deleteProduct: async (parent, args, context) => {
      const {id} = args;
      await Product.findByIdAndDelete(id);
      return "Deleted!";
    },
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
  }
};

module.exports = resolvers;
