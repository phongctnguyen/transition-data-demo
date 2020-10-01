const mongoose = require('mongoose');
const dotenv = require('dotenv');

const Blog = require('./models/blogModel');
const getAllBlogs = require('./lib/api');

dotenv.config({ path: './.env' });

const DB = process.env.DATABASE

mongoose
	.connect(DB, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
	})
  .then(() => console.log('DB connection successful!'));

// IMPORT DATA INTO DB
const importData = async () => {
	try {
    const blogs = await getAllBlogs();
    await Blog.create(blogs);
    console.log(blogs)
		console.log('Data successfully loaded!');
	} catch (err) {
		console.log(err);
	}
	process.exit();
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
	try {
		await Blog.deleteMany();
		console.log('Data successfully deleted!');
	} catch (err) {
		console.log(err);
	}
	process.exit();
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
	deleteData();
}
