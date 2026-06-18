const multer = require("multer");
const cloudinary = require("./config/cloudinary");
const { Readable } = require("stream");

// Custom Cloudinary storage engine for multer (compatible with cloudinary v2)
class CloudinaryStorage {
    constructor({ cloudinary, folder }) {
        this.cloudinary = cloudinary;
        this.folder = folder;
    }

    _handleFile(req, file, cb) {
        const uploadStream = this.cloudinary.uploader.upload_stream(
            {
                folder: this.folder,
                resource_type: "image",
                allowed_formats: ["jpg", "jpeg", "png"]
            },
            (error, result) => {
                if (error) return cb(error);
                cb(null, {
                    path: result.secure_url,
                    filename: result.public_id,
                    size: result.bytes
                });
            }
        );

        // Pipe the incoming file buffer stream to Cloudinary
        const readable = new Readable();
        readable._read = () => {};
        file.stream.pipe(uploadStream);
    }

    _removeFile(req, file, cb) {
        if (file.filename) {
            this.cloudinary.uploader.destroy(file.filename, cb);
        } else {
            cb(null);
        }
    }
}

const upload = multer({
    storage: new CloudinaryStorage({
        cloudinary: cloudinary,
        folder: "cocktails"
    })
});

module.exports = upload;
