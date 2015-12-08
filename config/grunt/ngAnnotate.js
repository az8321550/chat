module.exports = {
    dist: {
        files: [{
            expand: true,
            cwd: '.tmp/concat/static/scripts',
            src: ['*.js', '!oldieshim.js'],
            dest: '.tmp/concat/static/scripts'
        }]
    }
}