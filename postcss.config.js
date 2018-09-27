module.exports = {
    plugins: [
        require('autoprefixer')({
            browsers: ['Android >= 4', 'ChromeAndroid >= 46', 'iOS >= 8']
        })
    ]
};
