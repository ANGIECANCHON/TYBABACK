'use strict'
const User = use('App/Models/User')

class UserController {

    async login(request, response) {

    }

    async register( { request } ) {
        request = request._body

        const user = new User()
        user.username = request.username
        user.email = request.email
        user.password = request.password
        user.address = request.address

        const findUser = await User.findBy('email', request.email)
        if (findUser) {
            return { success: false, message: "user already exist" }
        }
        return { success: true, data: await user.save() }
    }
}

module.exports = UserController
