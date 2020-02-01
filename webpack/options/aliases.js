module.exports = () => {
  return {
    resolve: {
      alias: {
        '$': require('path').resolve('./src'),
        '$c': require('path').resolve('./src/components'),
        '$p': require('path').resolve('./src/pages'),
        '$redux': require('path').resolve('./src/redux'),
        '$reducers': require('path').resolve('./src/redux/reducers'),
        '$store': require('path').resolve('./src/redux/store.js'),
        '$actions': require('path').resolve('./src/redux/actions'),
        '$utils': require('path').resolve('./src/utils')
      }
    }
  };
};
