const multer = require('multer');
const helpers = require("../middlewares/imageFilterMiddleware");

const uploadController = {

	avatar: async(req, res) => { 

    const idString = req.params.idString;

		let storage =   multer.diskStorage({
			destination: function(req, file, cb) {
				cb(null, 'uploads/');
			},

			filename: function(req, file, cb) {
				cb(null, file.fieldname);
			}
		});

		let upload = await multer({ 
			storage : storage, 
			fileFilter: helpers.imageFilter 
		}).single(idString);
		
		upload(req,res,function(err) {
			if(err) {
				return res.end("Error uploading file.");
            }

			res.redirect('http://localhost:9090/profile');
		});
    },
};

module.exports = uploadController;