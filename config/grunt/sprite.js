'use strict';

module.exports = {
    build1:{
        src: [
            '<%=yo.app%>/static/images/forbid/sprite/*.png'
        ],
        dest: '<%=yo.app%>/static/images/forbid/sprite.png',
        destCss: '<%=yo.app%>/static/styles/common/_sprite_forbid.scss',
        imgPath: '/static/images/forbid/sprite.png',
        cssFormat: 'scss'
    },
    build2:{
        src: [
            '<%=yo.app%>/static/images/dialog/sprite/*.png'
        ],
        dest: '<%=yo.app%>/static/images/dialog/sprite.png',
        destCss: '<%=yo.app%>/static/styles/common/_sprite.scss',
        imgPath: '/static/images/dialog/sprite.png',
        cssFormat: 'scss'
    }
};
