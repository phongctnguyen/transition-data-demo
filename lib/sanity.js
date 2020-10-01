// import sanityClient from '@sanity/client';

const dotenv = require('dotenv');
const sanityClient = require('@sanity/client');
dotenv.config({ path: './.env' });

console.log(process.env.SANITY_PROJECT_ID);
const options = {
	dataset: process.env.SANITY_DATASET_NAME,
	projectId: process.env.SANITY_PROJECT_ID,
	useCdn: process.env.NODE_ENV === 'production',
	// useCdn === true, gives you fast response, it will get you
	// cached data
	// useCdn === false, give you little bit slower response, but
	// latest data
};

// export default sanityClient(options);
module.exports = sanityClient(options);
