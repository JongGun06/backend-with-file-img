const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const multerStorageCloudinary = require('multer-storage-cloudinary').CloudinaryStorage;

// Настройка Cloudinary
cloudinary.config({
  cloud_name: 'dohjmgahn',
  api_key: '588694332726324',
  api_secret: '2NNzvC6eTRiGv4stXO7cldH1ERw',
});

// Настройка хранилища для multer с Cloudinary
const storage = new multerStorageCloudinary({
  cloudinary: cloudinary,
  params: {
    folder: 'todo_images', // Папка в Cloudinary
    allowed_formats: ['jpg', 'jpeg', 'png', 'gif'], // Разрешенные форматы
  },
});

const upload = multer({ storage });

module.exports = upload;
