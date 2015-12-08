'use strict';

module.exports = {
  options: {
    root: '<%=yo.app%>',
    dest: '<%=yo.dist%>',
    flow: {
      html: {
        steps: {
          js: ['concat', 'uglifyjs'],
          css: ['cssmin']
        },
        post: {}
      }
    }
  },
  // Entrance files to find usemin block
  html: '<%=yo.app%>/views/**/*.html'
};
