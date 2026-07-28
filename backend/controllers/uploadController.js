const { uploadImage } = require('../services/cloudinaryService');
const { sendResponse, sendError } = require('../utils/responseHandler');

exports.uploadImage = async (req, res) => {
    try {
        if (!req.file) {
            return sendError(res, 400, 'No image file provided');
        }

        const result = await uploadImage(req.file.path);
        sendResponse(res, 200, {
            url: result.secure_url,
            publicId: result.public_id
        }, 'Image uploaded successfully');
    } catch (error) {
        sendError(res, 500, error.message);
    }
};
