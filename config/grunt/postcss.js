module.exports = {
    options: {
        processors: [
            require('autoprefixer-core')({browsers: ['last 40 version']})
        ]
    },
    dist: {
        files: [{
            expand: true,
            cwd: '.tmp/static/styles',
            src: '**/*.css',
            dest: '.tmp/static/styles'
        }]
    }
};
