const likeAndDislikeMockData = {
  likeInput: {
    status: 200,
    response: {
      message: 'like successfully',
      payload: [
        {
          LikesDislikes: {
            dislikeCounter: 1,
            updatedAt: '2020-01-24T14:29:50.618Z',
            userId: 15,
          },
        },
      ],
    },
  },

  likeExpectedResponse: [
    {
      type: 'LIKES_SUCCESS',
      payload: {
        message: 'like successfully',
        payload: [{
          LikesDislikes: {
            dislikeCounter: 1,
            updatedAt: '2020-01-24T14:29:50.618Z',
            userId: 15,
          },
        }],
      },
    },
  ],

  dislikeInput: {
    status: 200,
    response: {
      message: 'dislike successfully',
      payload: [
        {
          LikesDislikes: {
            dislikeCounter: 1,
            updatedAt: '2020-01-24T14:29:50.618Z',
            userId: 15,
          },
        },
      ],
    },
  },
  dislikeExpectedResponse: [
    {
      type: 'DISLIKES_SUCCESS',
      payload: {
        message: 'dislike successfully',
        payload: [{
          LikesDislikes: {
            dislikeCounter: 1,
            updatedAt: '2020-01-24T14:29:50.618Z',
            userId: 15,
          },
        }],
      },
    },
  ],

};
export default likeAndDislikeMockData;
