module.exports = {
    // Your existing Webpack configuration...
  
    resolve: {
      fallback: {
        stream: require.resolve('stream-browserify'),
      },
    },

    plugins: [
      // Other plugins...
      new Dotenv({
        systemvars: true, // Access environment variables set in the Linux environment.
      }),
    ],
  };
  
