const request = require('request')

const forecast = (lat, lng, callback) => {
    const url = 'https://api.darksky.net/forecast/3a9c6dfad63463da2280fa26e24fdbcb/37.8267,-122.4233?units=si&lang=en'

    request({ url, json: true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect to service!',undefined)
        } 
        else if(body.error) {
            callback('Unable to find location', undefined)
        }else {
            callback(undefined, {
                temperature : body.currently.temperature,
                summary: body.daily.data[0].summary,
                dailyStatus: body.daily.summary
            })
        }
    })
}

module.exports = forecast