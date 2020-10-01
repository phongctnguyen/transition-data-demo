// import client from './sanity';
const client = require('./sanity');

const blogFields = `
  title,
  subtitle,
`;

module.exports = async function getAllBlogs() {
	const results = await client.fetch(`*[_type == "blog"]{${blogFields}}`);
	return results;
}


