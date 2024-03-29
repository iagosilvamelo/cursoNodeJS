const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');

const ProductSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},

	description: {
		type: String,
		required: true,
	},

	url: {
		type: String,
		required: true,
	},

	created_at: {
		type: Date,
		default: Date.now,
	},
});

mongoose.plugin(paginate);
mongoose.model('Product', ProductSchema);
