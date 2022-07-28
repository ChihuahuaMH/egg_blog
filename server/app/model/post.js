module.exports = (app) => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const PostSchema = new Schema({
        title: String,
        content: String,
        createdAt: { type: Date, default: Date.now },
    });

    return mongoose.model('Post', PostSchema);
}