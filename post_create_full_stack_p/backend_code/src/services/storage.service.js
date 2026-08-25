import imagekit from "@imagekit/nodejs"

const imagekits = new imagekit({
    privateKey : process.env.IMAGEKIT_PRIVATE_KEY
})
async function uploadimage(buffer) {
     const result = await imagekits.files.upload({
        file :buffer.toString("base64"),
        fileName :"image.jpg"
     })
     return result
}
export default uploadimage
