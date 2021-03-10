const Env = use('Env')
const Request = require('request-promise')

class GeocodeService {
    async geocode(address) {
        const options = {
          uri: `${Env.get('GEOCODE')}?address=${address}&key=${Env.get('KEY')}`,
          headers: {
              'Content-Type': 'application/json',
            },
            json: true,
        }
        let response = await Request.get(options)
        response = response.results[0].geometry.location
        return response
    }
}

module.exports = GeocodeService
