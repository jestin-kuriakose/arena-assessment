import { PutObjectCommand, GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import crypto from 'crypto'

const randomImageName = (bytes = 32) => crypto.randomBytes(bytes).toString('hex')

const bucketName = 'fullstack-storage'
const bucketRegion = 'us-east-1'
const accessKey = 'AKIAUUGT2KHQAVCAM3CW'
const secretAccessKey = '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'

// Connecting to AWS S3
const s3 = new S3Client({
    credentials: {
        accessKeyId: accessKey,
        secretAccessKey: secretAccessKey
    },
    region: bucketRegion
});

export const getSignedUrlFromS3 = async(req) => {
//Uploading image to S3
let url = '';
let randomName = randomImageName()

if(req.file) {
    const params = {
        Bucket: bucketName,
        Key: randomName,
        Body: req.file.buffer,
        ContentType: req.file.mimetype
    }

    const command = new PutObjectCommand(params)

    await s3.send(command)

    //Getting a signed URL from S3 to add to the database. Inserted url to 'image' key in database
    const getObjectParams = {
        Bucket: bucketName,
        Key: randomName
    }
    const getUrlCommand = new GetObjectCommand(getObjectParams);
    url = await getSignedUrl(s3, getUrlCommand, { expiresIn: 3600 });
    return url
}
}

