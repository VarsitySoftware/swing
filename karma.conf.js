module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['mocha', 'sinon-chai'],
        files: [
            'dist/*',
            'tests/*.js'
        ],
        exclude: [
            'dist/swing.min.js'
        ],
        reporters: [
            'progress'
        ],
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: false
    });
};