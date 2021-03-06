define({ "api": [
  {
    "type": "post",
    "url": "http://127.0.0.1:3331/nearbySearch",
    "title": "search places nearby",
    "group": "Places",
    "name": "Nearby_places",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>user id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "radius",
            "description": "<p>radius to search</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>type of place</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"id\": 3,\n   \"radius\": 1500,\n   \"type\": \"restaurant\"\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": true,
            "field": "Bearer",
            "description": "<p>[token] xxx the token is from login</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"html_attributions\": [],\n   \"results\": [\n       {\n           \"business_status\": \"OPERATIONAL\",\n           \"geometry\": {\n               \"location\": {\n                   \"lat\": -33.8587323,\n                   \"lng\": 151.2100055\n               },\n               \"viewport\": {\n                   \"northeast\": {\n                       \"lat\": -33.85739417010727,\n                       \"lng\": 151.2112278798927\n                   },\n                   \"southwest\": {\n                       \"lat\": -33.86009382989272,\n                       \"lng\": 151.2085282201073\n                   }\n               }\n           },\n           \"icon\": \"https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/bar-71.png\",\n           \"name\": \"Cruise Bar\",\n           \"opening_hours\": {\n           },\n           },\n           \"photos\": [\n               {\n                   \"height\": 575,\n                   \"html_attributions\": [\n                       \"<a href=\\\"https://maps.google.com/maps/contrib/112582655193348962755\\\">A Google User</a>\"\n                   ],\n                   \"photo_reference\": \"ATtYBwLA8FFIuXra4RRZMKikWH9zXGheShWIHfl1le2fEwl7hdlbI0cXaOybAwyRBOEF42GvTVcnT-JoRk-X2sgtEnybTkGCjVolnunS-1sU3Kb3by9XylLmdYTUMJC4J3XfApwRJT4OHLQ6evWk-hNQxQUjYP_eyPbHu9Z3ogW6SVyHUehV\",\n                   \"width\": 766\n               }\n           ],\n           \"place_id\": \"ChIJi6C1MxquEmsR9-c-3O48ykI\",\n           \"plus_code\": {\n               \"compound_code\": \"46R6+G2 The Rocks, New South Wales\",\n               \"global_code\": \"4RRH46R6+G2\"\n          },\n           \"price_level\": 2,\n           \"rating\": 4.1,\n           \"reference\": \"ChIJi6C1MxquEmsR9-c-3O48ykI\",\n           \"scope\": \"GOOGLE\",\n           \"types\": [\n               \"bar\",\n               \"restaurant\",\n               \"food\",\n               \"point_of_interest\",\n               \"establishment\"\n           ],\n           \"user_ratings_total\": 1119,\n           \"vicinity\": \"Level 1, 2 and 3, Overseas Passenger Terminal, Circular Quay W, The Rocks\"\n       },\n   ],\n   \"status\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidoc/apidoc.js",
    "groupTitle": "Places"
  },
  {
    "type": "post",
    "url": "http://127.0.0.1:3331/register",
    "title": "register user",
    "group": "Register_new_user",
    "name": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "*   {\n \"username\":\"nata2\",\n  \"email\":\"nata1@mail.com\",\n  \"password\":\"1234\",\n  \"address\":\"calle 62 sur N46-15\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   {\n  \"success\": true,\n  \"user\": {\n      \"username\": \"nata2\",\n      \"email\": \"nata1@mail.com\",\n      \"password\": \"$2a$10$xK3qxJnNvmgIOdaPHNZva.CbgDigl6UYgEWTtUz2K9whZ20wXcpPW\",\n     \"address\": \"calle 62 sur N46-15\",\n      \"latitude\": 23.1545347,\n      \"longitude\": -81.2485174,\n      \"created_at\": \"2021-03-09 18:45:30\",\n      \"updated_at\": \"2021-03-09 18:45:30\",\n      \"id\": 3\n  },\n  \"access_token\": {\n      \"type\": \"bearer\",\n      \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjMsImlhdCI6MTYxNTMzMzUzMH0.28NF8DGkDP5r_DGGuVNFDYBHkA-Zq_2Pi_qKwSoFLUI\",\n      \"refreshToken\": null\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidoc/apidoc.js",
    "groupTitle": "Register_new_user"
  },
  {
    "type": "post",
    "url": "http://127.0.0.1:3331/login",
    "title": "login",
    "group": "login_User",
    "name": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"success\": true,\n  \"user\": {\n      \"id\": 3,\n      \"username\": \"nata2\",\n      \"email\": \"nata1@mail.com\",\n      \"password\": \"$2a$10$xK3qxJnNvmgIOdaPHNZva.CbgDigl6UYgEWTtUz2K9whZ20wXcpPW\",\n      \"address\": \"calle 62 sur N46-15\",\n      \"latitude\": 23.154535,\n      \"longitude\": -81.24852,\n      \"created_at\": \"2021-03-09 13:45:30\",\n      \"updated_at\": \"2021-03-09 13:45:30\"\n  },\n  \"access_token\": {\n      \"type\": \"bearer\",\n     \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjMsImlhdCI6MTYxNTMzNDcxNH0.tDDns9IEpya6JvM0weT7KSoOaVOI0gphf1Qky0sDxJQ\",\n      \"refreshToken\": null\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidoc/apidoc.js",
    "groupTitle": "login_User"
  }
] });
