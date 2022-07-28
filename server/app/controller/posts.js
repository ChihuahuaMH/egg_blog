'use strict';
const Controller = require('egg').Controller;

class PostsController extends Controller {
  async list() {
    const { ctx } = this;
    const queryStr = ctx.query;
    ctx.body = queryStr ? await ctx.service.post.findPost(queryStr) : await ctx.service.post.findPost({})
  }

  async show() {
    const { ctx } = this;
    let postDetail = await ctx.service.post.showPostDetail(ctx.params.id);

    if (!postDetail) {
      ctx.body = `NO RESULTS FOUND`;
      return;
    }

    ctx.body = postDetail;
  }

  async add() {
    const { ctx } = this;
    const data = ctx.request.body;
    ctx.body = await ctx.service.post.addPost(data);
  }

  async edit() {
    const { ctx } = this;
    const { id } = ctx.params;
    const data = ctx.request.body;
    ctx.body = await ctx.service.post.editPost(id, data);
  }

  async destroy() {
    const { ctx } = this;
    ctx.body = await ctx.service.post.deletePost(ctx.params.id);
  }
}

module.exports = PostsController;
