const express = require('express');
const multer  = require('multer');
const AWS = require('aws-sdk');
const { aws: { iamAccessKey, iamSecret } } = require('../../config')
const { Picture, User, Comment } = require('../../db/models')
const fs = require('fs');
const asyncHandler = require('express-async-handler');
const router = express.Router();

// configuring the DiscStorage engine.
const storage = multer.diskStorage({
    destination : 'uploads/',
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage });

//setting the credentials
//The region should be the region of the bucket that you created
//Visit this if you have any confusion - https://docs.aws.amazon.com/general/latest/gr/rande.html
AWS.config.update({
    accessKeyId: iamAccessKey,
    secretAccessKey: iamSecret,
    region: 'us-west-2',
});

//Creating a new instance of S3:
const s3 = new AWS.S3();

//POST method route for uploading file
router.post('/', upload.single('demo_file'), asyncHandler(async function (req, res) {
  //Multer middleware adds file(in case of single file ) or files(multiple files) object to the request object.
  //req.file is the demo_file
  console.log(req.file)
  uploadFile(req.file.path, req.file.filename ,res);
  console.log(req.body)
  const { title, body, tags, userId } = req.body
  const image = `https://twtchr-img.s3-us-west-2.amazonaws.com/images/${req.file.filename}`
  const picture = await Picture.create({urlRef: image, title, body, tags, userId })

  const pictures = await Picture.findAll({include: [{model: User}], where :{
    userId: userId
  }})
  res.json( {pictures} )
}))


router.get('/', asyncHandler(async function (req, res) {
  const pictures = await Picture.findAll({ include: [{
    model: User
  }]})
  res.json( { pictures } )
}))

router.get('/:id', asyncHandler(async function (req, res) {
  const picture = await Picture.findAll({ include: [{
    model: User
  }], where: { id: req.params.id}
})
  res.json( { picture } )
}))

router.post('photo/:id', asyncHandler(async function (req, res) {
  const comment = await Comment.create( {userId : req.userId, pictureId: req.pictureId, comment: req.comment })
  res.json( { comment } )
}))


router.get('photo/:id', asyncHandler(async function (req, res) {
  const comment = await Comment.findAll({ include: [{
    model: User
  }], where: { id: req.params.id}
})
  res.json( { comment } )
}))

//GET method route for downloading/retrieving file
router.get('/get_file/:file_name',(req,res)=>{
  retrieveFile(req.params.file_name, res);
});

//The uploadFile function
function uploadFile(source,targetName,res){
    console.log('preparing to upload...');
    fs.readFile(source, function (err, filedata) {
      if (!err) {
        // console.log(targetName, source, filedata)
        const putParams = {
            Bucket      : 'twtchr-img/images',
            Key         : targetName,
            Body        : filedata,
            ACL         : 'public-read'
        };
        s3.putObject(putParams, function(err, data){
          if (err) {
            console.log('Could nor upload the file. Error :',err);
            return;
          } 
          else{
            // fs.unlink(source);// Deleting the file from uploads folder(Optional).Do Whatever you prefer.
            console.log('Successfully uploaded the file');
            return;
          }
        });
      }
      else{
        console.log({'err':err});
      }
    });
  }

//The retrieveFile function
function retrieveFile(filename,res){

  const getParams = {
    Bucket: 'twtchr-img/images',
    Key: filename
  };

  s3.getObject(getParams, function(err, data) {
    if (err){
      return res.status(400).send({success:false,err:err});
    }
    else{
      return res.send(data.Body);
    }
  });
}

module.exports = router;