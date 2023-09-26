module.exports = {
    // Your existing Webpack configuration...
  
    resolve: {
      fallback: {
        stream: require.resolve('stream-browserify'),
      },
    },
  };
  
