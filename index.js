const {Storage} = require('@google-cloud/storage');


// const storage = new Storage('essential-hawk-425712-k5');
const storage = new Storage({
    keyFilename: 'key.json'
});

const getB = async () => {
    const [buckets] = await storage.getBuckets();
    // const bucket = await storage.bucket('gcp-express-bucket').file('IMG_1113.heic').download();
    const bucket = await storage.bucket('gcp-express-bucket')
    const imageBuffer = await bucket.file('IMG_1113.heic').download();
    const signedURL = await bucket.file('IMG_1113.heic').getSignedUrl({
        action: 'read',
        expires: Date.now() + 60 * 60 * 1000
    })
    // const a = await bucket.getFiles();
    // const b = await a.file('IMG_1113.heic');
    // console.log(bucketList[0])
    // buckets.forEach(bucket => {
    //     console.log(bucket.name);
    //   });
    // console.log(buckets)
    // console.log(imageBuffer[0])
    // console.log(signedURL)
    // console.log(bucket3)
};

getB()

// gcp-express-addon
// gcp-express-addon@essential-hawk-425712-k5.iam.gserviceaccount.com