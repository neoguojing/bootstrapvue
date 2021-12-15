import client from '@/conf/axios.js'
import conf from '@/conf'

var apis = {
    UploadFiles:async function(type,files) {
        console.log(files)
        let filePath
        var data = new FormData()
        data.append('type',type)
        data.append('files',files)
        await client.post(conf.urlUpload, data, {headers: {'Content-Type': 'multipart/form-data'}})
        .then(res => {
            console.log(res)
            filePath = res.data.data
        });
        return filePath
    },
    FileDownload:async function(imagePath) {
        let base64Data
        await client.get(imagePath, {responseType: 'arraybuffer'})
        .then(res => {
            var contentType = res.headers['content-type']
            return 'data:'+contentType+';base64,'+Buffer.from(res.data, 'binary').toString('base64')
        }).then(function(data) {
            base64Data = data
        });
        return base64Data
    },
}

export default apis;