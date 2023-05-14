const http = require('http')
const {api, city} = require('./config')

const accessKey = process.env.accessKey
const url = `${api}current?access_key=${accessKey}&query=${city}`

http.get(url, (res) => {
    const {statusCode} = res;
    if (statusCode !== 200) {
        return console.log(`Ошибка ${statusCode}`)
    }
    
    res.setEncoding('utf8')
    let rowData = ''
    res.on('data', (chunk) => rowData += chunk)
    res.on('end', () => {
        const json = JSON.parse(rowData)
        console.log(json);
    }).on('error', (error) => console.error(error))
})