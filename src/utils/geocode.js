 const request = require('request')

const geocode =(address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiY3Jpc3RpbmVzaXNvbiIsImEiOiJja3Y5NDB0ZmM0b3gzMndwNmQ4aWIybGZrIn0.K9I0URi8M6i1eNGaCjTF9g&limit=1'

        request({ url, json: true}, (error, { body }) => {
            if (error){
                callback('Unable to connect to location services!', undefined)
            } else if (body.features.length === 0) {
                callback('Unable to find location. Try another search.', undefined)
            } else {
                callback(undefined, {
                    latitude: body.features[0].center[1],
                    longtitude: body.features[0].center[0],
                    location: body.features[0].place_name
                })
            }
        })
}

 module.exports = geocode