'use strict';

module.exports = {
    options:{
        "outputStyle":"expanded"
    },
    hehe: {
        expand: true,
        cwd: '<%=yo.app%>/static/styles',
        src: ['**/*.scss'],
        dest: '<%=yo.app%>/static/styles',
        ext: '.css'
    },
    build: {
        expand: true,
        cwd: '<%=yo.app%>/static/styles',
        src: ['**/*.scss'],
        dest: '.tmp/static/styles',
        ext: '.css'
    }
}
