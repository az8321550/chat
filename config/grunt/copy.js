'use strict';

module.exports = {
    css: {
        expand: true,
        dot: true,
        cwd: '<%=yo.app%>/static/styles',
        dest: '.tmp/static/styles',
        src: [
            '**/*',
            '!**/*.scss'
        ]
    },
    js: {
        expand: true,
        dot: true,
        cwd: '<%=yo.app%>/static/scripts',
        dest: '<%=yo.dist%>/static/scripts',
        src: '**/*.js'
    },
    vendor:{
        expand: true,
        dot: true,
        cwd: '<%=yo.app%>/static/vendor',
        dest: '<%=yo.app%>/static/plugin',
        src: '**/*'
    },
    plugin: {
        expand: true,
        dot: true,
        cwd: '<%=yo.app%>/static/plugin',
        dest: '<%=yo.dist%>/static/plugin',
        src: '**/*'
    },
    // 将压缩后的图片拷贝到dist目录
    image: {
        expand: true,
        dot: true,
        cwd: '<%=yo.app%>/static/',
        dest: '<%=yo.dist%>/static/',
        src: [
            '**/*.{png,jpg,jpeg,gif}',
            '!vendor/**/*'
        ]
    },
    vm: {
        expand: true,
        cwd: '<%=yo.app%>/views/',
        src: '**/*.{vm,html}',
        dest: '<%=yo.dist%>/views/'
    },
    others: {
        expand: true,
        cwd: '<%=yo.app%>/static',
        dest: '<%=yo.dist%>/static',
        src: '**/*.{ttf,eot,otf,svg,woff,woff2,swf,mp3,ico}'
    },
    local: {
        expand: true,
        cwd: '<%=yo.app%>/static/local',
        dest: '<%=yo.dist%>/static/local',
        src: '**'
    }
};
