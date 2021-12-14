import client from '@/conf/axios.js'
import conf from '@/conf'

var apis = {
    UploadFiles: function(type,files) {
        console.log(files)

        var data = new FormData()
        data.append('type',type)
        data.append('files',files)
        client.post(conf.urlUpload, data, {headers: {'Content-Type': 'multipart/form-data'}})
        .then(res => {
            console.log(res)
            return res.data.data
        });
    }
}

export default apis;