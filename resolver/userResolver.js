var bcrypt = require('bcryptjs');
const User = require('../model/userSchema');

// Define resolvers
const resolvers = {
  getUserDetail: {
    id: ({ id }) => {
      return User.findOne(user => user.id === id);
    },
  },
  getAllUsers: () => {
    return User;
  },
  
  createUser: async ({ email, password }) => {
    try {
      let checkForEmail = await User.findOne({ email : email });
      if (checkForEmail) {
        throw new Error('User with this email already exists');
      }

      // Await bcrypt.hash to ensure you get the hashed password
      let hashPassword = await bcrypt.hash(password, 12);
      
      // Create a new user with the hashed password
      const user = new User({
        email,
        password: hashPassword
      });

      // Save the user in the database
      await user.save();
     // Exclude password from the returned user object
     const userWithoutPassword = {
      id: user._id,
      email: user.email,
    };

    return userWithoutPassword;
      
    } catch (error) {

      throw new Error(error.message);// Updated error message
    }
  },
};

module.exports = resolvers;
