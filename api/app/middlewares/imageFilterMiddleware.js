const imageFilter = function(req, file, cb) {
	// Accept images only
	if (!file.mimetype.match('image/jpeg|image/png')) {
		req.fileValidationError = "Only image files are allowed!";
		return cb(new Error("Only image files are allowed!"), false);
	}
	cb(null, true);
};
// eslint-disable-next-line no-undef
exports.imageFilter = imageFilter;
