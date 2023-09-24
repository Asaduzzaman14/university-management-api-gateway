import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';

cloudinary.config({
  cloud_name: 'dyowhux5e',
  api_key: '432486579644692',
  api_secret: 'J4M8qmEoUFezE0EX_l_nDgsswNI'
});

const stroage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, 'uploads/');
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  }
});

const uploder = multer({ storage: stroage });

const uplodeToCloudunary = async () => {
  cloudinary.uploader.upload(
    'https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg',
    { public_id: 'olympic_flag' },
    function (error, result) {
      console.log(result);
    }
  );
};

export const fileUploaderhealper = {
  uplodeToCloudunary,
  uploder
};
