'use strict'
const User = use('App/Models/User')

class UserController {

    async login({ request : { body }, auth}) {
        let email = body.email
        let password = body.password

        try {
            if (await auth.attempt(email, password)) {
              let user = await User.findBy('email', email)
              let accessToken = await auth.generate(user)
              return { success: true, "user":user, "access_token": accessToken }
            }
  
          }
          catch (err) {
            return {success: false, message: 'Invalid user'}
          }

    }

    async register( { request : { body }, auth} ) {

        let user = new User()
        user.username = body.username
        user.email = body.email
        user.password = body.password
        user.address = body.address

        const findUser = await User.findBy('email', body.email)
        if (findUser) {
            return { success: false, message: "user already exist" }
        }

        await user.save()
        let accessToken = await auth.generate(user)
        return { success: true, "user": user, "access_token": accessToken }
    }
}

module.exports = UserController
