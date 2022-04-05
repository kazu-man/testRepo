'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('myeditor')
      .service('myService')
      .getWelcomeMessage();
  },
};
