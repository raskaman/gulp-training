module.exports = function () {
    var client = './src/client/';
    var config = {
        temp: './.tmp',
        // all js vet
        alljs: [
            './src/**/*.js',
            './*js'
        ],
        less: client + 'styles/styles.less'
    };
    return config;
};