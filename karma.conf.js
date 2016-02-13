module.exports = function(config) {
  config.set({
    
    frameworks: ['jasmine'],

    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'src/**/*.js',
      'test/**/*.js'
    ],

    port: 9001,

    browsers: ['Chrome'],

    singleRun: true
  });
};