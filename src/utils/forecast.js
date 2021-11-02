const request = require('request')

const forecast =(latitude, longtitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=4bc81dd432f3cf75af76892766df9a8e&query=' + latitude + ',' + longtitude  + '&units=f'

        request({ url, json: true}, (error, { body }) => { 
            if (error){
                callback('Unable to connect to weather service', undefined)
            } else if (body.error) {
                callback('unable to find location', undefined)
            } else {
                callback(undefined, body.current.weather_descriptions[0] + '. It is curretly ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out. The humidity is ' + body.current.humidity + '%.')
            }
        })
}

 module.exports = forecast