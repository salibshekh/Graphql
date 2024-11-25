const Event = require('../model/eventSchema');
const User = require('../model/userSchema'); 

// Define resolvers
const eventResolvers = {
  getEventDetail: async ({ id }) => {
    try {
      
      return await Event.findById(id);  // Correct usage of findById
    } catch (error) {
      throw new Error('Error fetching event');
    }
  },

  getAllEvents: async () => {
    try {
      return await Event.find();
    } catch (error) {
      throw new Error('Error fetching events');
    }
  },
  
  createEvent: async ({ title, description, price, date }) => {
    const event = new Event({
      title,
      description,
      price,
      date,
      creater : '670392e5deac2d3c2a513421'
    });

    try {
         // Save the event to the database                                          
         let result = await event.save();

         if (result) {
           // Find the user by their ID
           let findUser = await User.findById('670392e5deac2d3c2a513421');
           
           if (findUser) {
             // Add the event's ID to the user's createEvents array
             findUser.createEvents.push(event._id);
   
             // Save the user with the updated createEvents array
             await findUser.save();
           } else {
             throw new Error('User not found');
           }
         }
   
         // Return the created event
         return event;
    } catch (error) {
        // Log the error for debugging purposes
        console.error('Error in createEvent:', error.message);

        // Throw an error with a more detailed message
        throw new Error('Error creating event: ' + error.message);
    }
  },
};

module.exports = eventResolvers;
