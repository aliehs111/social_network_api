const usersSeedData = [
    {
      username: 'user1',
      email: 'user1@example.com',
      thoughts: [], 
      friends: [], 
    },
    {
      username: 'user2',
      email: 'user2@example.com',
      thoughts: [], 
      friends: [], 
    },
    {
      username: 'user3',
      email: 'user3@example.com',
      thoughts: [], 
      friends: [], 
    },
  ];
  

  const thoughtsSeedData = [
    {
      thoughtText: 'Thought 1 from user1',
      username: 'user1',
      reactions: [
        { reactionBody: 'Reaction 1 to Thought 1', username: 'user1' },
        { reactionBody: 'Reaction 2 to Thought 1', username: 'user2' },
      ],
    },
 
  ];
  
  module.exports = { usersSeedData, thoughtsSeedData, reactionsSeedData };
  