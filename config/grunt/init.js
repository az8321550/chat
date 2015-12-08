module.exports = {
    test1: {
        options: {
            key: process.env.test||'test',
            dest: './'
        },
        files: {
            'test': ['app.js']
        }
    },
    test2: {
        options: {
            key: process.env.test||'test',
            dest: './',
            test: true
        },
        files: {
            'test': ['app.js']
        }
    }
}