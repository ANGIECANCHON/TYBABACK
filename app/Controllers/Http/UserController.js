'use strict'
const User = use('App/Models/User')

class UserController {

    static get inject () {
        return [
            'App/Services/GeocodeService.js',
            'App/Services/NearbySearchService.js']
      }
    
      constructor (GeocodeService, NearbySearchService) { 
          this.GeocodeService = GeocodeService,
          this.NearbySearchService = NearbySearchService }

    async register({ request: { body }, auth }) {

        let data = await this.GeocodeService.geocode(body.address)

        let user = new User()
        user.username = body.username
        user.email = body.email
        user.password = body.password
        user.address = body.address
        user.latitude = data.lat
        user.longitude = data.lng

        const findUser = await User.findBy('email', body.email)
        if (findUser) {
            return { success: false, message: "user already exist" }
        }

        await user.save()
        let accessToken = await auth.generate(user)
        return { success: true, "user": user, "access_token": accessToken }
    }

    async login({ request: { body }, auth }) {
        let email = body.email
        let password = body.password

        try {
            if (await auth.attempt(email, password)) {
                let user = await User.findBy('email', email)
                let accessToken = await auth.generate(user)
                return { success: true, "user": user, "access_token": accessToken }
            }

        }
        catch (err) {
            return { success: false, message: 'Invalid user' }
        }

    }

    async getLocationByUser({ request: { body } }) {
        let id = body.id
        let radius = body.radius
        let type = body.type

        let user = await User.find(id)
        if(user){
            let latitude = user.latitude
            let longitude = user.longitude
            const data = await this.NearbySearchService.search(latitude, longitude, radius, type)

            return { success: true, data }

        }

    }
}

module.exports = UserController
