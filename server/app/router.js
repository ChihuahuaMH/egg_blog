'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/posts', controller.posts.list);
  router.get('/posts/:id', controller.posts.show);
  router.post('/posts', controller.posts.add);
  router.put('/posts/:id', controller.posts.edit);
  router.delete('/posts/:id', controller.posts.destroy);
};
