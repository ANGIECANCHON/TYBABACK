/**
 * @api {post} http://127.0.0.1:3331/register register user
 * @apiGroup Register new user
 * @apiName User
 *
 * @apiParam {String} username 
 * @apiParam {String} email 
 * @apiParam {String} password
 * @apiParam {String} address
 * 
 * @apiParamExample {json} Request-Example:
 * *   {
 *  "username":"nata2",
 *   "email":"nata1@mail.com",
 *   "password":"1234",
 *   "address":"calle 62 sur N46-15"
}
 *
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *    {
 *   "success": true,
 *   "user": {
 *       "username": "nata2",
 *       "email": "nata1@mail.com",
 *       "password": "$2a$10$xK3qxJnNvmgIOdaPHNZva.CbgDigl6UYgEWTtUz2K9whZ20wXcpPW",
 *      "address": "calle 62 sur N46-15",
 *       "latitude": 23.1545347,
 *       "longitude": -81.2485174,
 *       "created_at": "2021-03-09 18:45:30",
 *       "updated_at": "2021-03-09 18:45:30",
 *       "id": 3
 *   },
 *   "access_token": {
 *       "type": "bearer",
 *       "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjMsImlhdCI6MTYxNTMzMzUzMH0.28NF8DGkDP5r_DGGuVNFDYBHkA-Zq_2Pi_qKwSoFLUI",
 *       "refreshToken": null
 *   }
}
 */
/**
 * @api {post} http://127.0.0.1:3331/login login
 * @apiGroup login User
 * @apiName User
 *
 * @apiParam {String} email 
 * @apiParam {String} password
 * 
 * @apiParamExample {json} Request-Example:
*{
 *   "success": true,
 *   "user": {
 *       "id": 3,
 *       "username": "nata2",
 *       "email": "nata1@mail.com",
 *       "password": "$2a$10$xK3qxJnNvmgIOdaPHNZva.CbgDigl6UYgEWTtUz2K9whZ20wXcpPW",
 *       "address": "calle 62 sur N46-15",
 *       "latitude": 23.154535,
 *       "longitude": -81.24852,
 *       "created_at": "2021-03-09 13:45:30",
 *       "updated_at": "2021-03-09 13:45:30"
 *   },
 *   "access_token": {
 *       "type": "bearer",
 *      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjMsImlhdCI6MTYxNTMzNDcxNH0.tDDns9IEpya6JvM0weT7KSoOaVOI0gphf1Qky0sDxJQ",
 *       "refreshToken": null
 *   }
*}
 */
/**
 * @api {post} http://127.0.0.1:3331/nearbySearch search places nearby
 * @apiGroup Places
 * @apiName Nearby places
 *
 * @apiParam {int} id user id
 * @apiParam {int} radius radius to search
 * @apiParam {string} type type of place
 * 
 * @apiHeader [Bearer] [token] the token is from login

 * @apiParamExample {json} Request-Example:
*{
*    "id": 3,
*    "radius": 1500,
*    "type": "restaurant"
*}
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
*{
*  "html_attributions": [],
*    "results": [
*        {
*            "business_status": "OPERATIONAL",
*            "geometry": {
*                "location": {
*                    "lat": -33.8587323,
*                    "lng": 151.2100055
*                },
*                "viewport": {
*                    "northeast": {
*                        "lat": -33.85739417010727,
*                        "lng": 151.2112278798927
*                    },
*                    "southwest": {
*                        "lat": -33.86009382989272,
*                        "lng": 151.2085282201073
*                    }
*                }
*            },
*            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/bar-71.png",
*            "name": "Cruise Bar",
*            "opening_hours": {
*            },
*            },
*            "photos": [
*                {
*                    "height": 575,
*                    "html_attributions": [
*                        "<a href=\"https://maps.google.com/maps/contrib/112582655193348962755\">A Google User</a>"
*                    ],
*                    "photo_reference": "ATtYBwLA8FFIuXra4RRZMKikWH9zXGheShWIHfl1le2fEwl7hdlbI0cXaOybAwyRBOEF42GvTVcnT-JoRk-X2sgtEnybTkGCjVolnunS-1sU3Kb3by9XylLmdYTUMJC4J3XfApwRJT4OHLQ6evWk-hNQxQUjYP_eyPbHu9Z3ogW6SVyHUehV",
*                    "width": 766
*                }
*            ],
*            "place_id": "ChIJi6C1MxquEmsR9-c-3O48ykI",
*            "plus_code": {
*                "compound_code": "46R6+G2 The Rocks, New South Wales",
*                "global_code": "4RRH46R6+G2"
*           },
*            "price_level": 2,
*            "rating": 4.1,
*            "reference": "ChIJi6C1MxquEmsR9-c-3O48ykI",
*            "scope": "GOOGLE",
*            "types": [
*                "bar",
*                "restaurant",
*                "food",
*                "point_of_interest",
*                "establishment"
*            ],
*            "user_ratings_total": 1119,
*            "vicinity": "Level 1, 2 and 3, Overseas Passenger Terminal, Circular Quay W, The Rocks"
*        },
*    ],
*    "status": "OK"
}
 */