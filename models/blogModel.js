const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema(
	{
		title: {
			type: String,
		},
		subtitle: {
			type: String,
		},
	},
	{
		toJSON: { virtuals: true },
		toObject: { virtuals: true },
	}
);

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
