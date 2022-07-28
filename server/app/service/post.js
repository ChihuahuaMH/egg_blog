'use strict';
const Service = require('egg').Service;

class PostService extends Service {
    async findPost(queryStr) {
        const { ctx } = this;
        console.log(ctx.csrf);
        if (queryStr.title) return await ctx.model.Post.find({ title: { $regex: queryStr.title, $options: 'i' } })
        return await ctx.model.Post.find({});
    }

    async showPostDetail(id) {
        const { ctx } = this;
        return await ctx.model.Post.findOne({
            _id: id
        });
    }

    async addPost(data) {
        const { ctx } = this;
        return await ctx.model.Post.create(data);
    }

    async editPost(id, data) {
        const { ctx } = this;
        return await ctx.model.Post.findOneAndUpdate({ _id: id }, data);
    }

    async deletePost(id) {
        const { ctx } = this;
        return await ctx.model.Post.deleteOne({
            _id: id
        });
    }
}

module.exports = PostService;