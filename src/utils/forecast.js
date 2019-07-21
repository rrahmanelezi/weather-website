const request = require('request')

const forecast = (longitude,latitude,callback) => {
    const url = 'https://api.darksky.net/forecast/7eeaa198d797c39fe8dcefd907cce036/'+latitude+','+longitude +'?units=si'

    request({url , json:true},(error,{body})=>{
        if(error){
            callback('Unable to connect to weather service!',undefined)

        }else if (body.error) {

            callback('Unable to find location!',undefined)
        }else {
            const data = body.daily.data[0].summary+' '+'It is currently'+' '+body.currently.temperature+' '+'degrees out there.'+'There is a'+' '+body.currently.precipProbability+'%'+' '+'chance of rain.'+'Max temperature: '+body.daily.data[0].temperatureMax+".Min temperature"+body.daily.data[0].temperatureMin+"."
             callback(undefined,data)

        }


    })


}


module.exports = forecast