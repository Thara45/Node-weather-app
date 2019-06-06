const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoidGhhcmEtZyIsImEiOiJjanc5YTE2eXYyeHdrNDVtbWk5aml4bjFtIn0.6gMSW8x8aYUlba6JZphxRA'

    request({ url, json: true}, (error, { body }) => {
        if(error) {
            callback('Unable to connect to service!',undefined)
        } 
        else if(body.features.length === 0) {
            callback('Unable to find location', undefined)
        }else {
            callback(undefined, {
                latitude : body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name,
            })
        }
    })
}

module.exports = geocode