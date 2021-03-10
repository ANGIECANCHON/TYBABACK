const Env = use('Env')
const Request = require('request-promise')

class NearbySearchService {
    async search(latitude, longitude, radius, type) {
        const options = {
          uri: `${Env.get('SEARCHPLACE')}?location=${latitude},${longitude}&radius=${radius}&type=${type}&keyword=cruise&key=${Env.get('KEY')}`,
          headers: {
              'Content-Type': 'application/json',
            },
            json: true,
        }
        let response = await Request.get(options)
        return response
    }
}

module.exports = NearbySearchService
