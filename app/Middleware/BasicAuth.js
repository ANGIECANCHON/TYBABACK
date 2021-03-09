const auth = use('basic-auth')

class BasicAuth {

  * handle (request, response, next) {
    const credentials = auth(request.request)

    if (!credentials) {
      response.status(401).send({
        error: 'Please enter your account credentials'
      })
      return
    }

  }

}

module.exports = BasicAuth