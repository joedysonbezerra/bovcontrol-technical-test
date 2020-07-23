<p align="center">
   <img alt="BovControl" title="BovControl-logo" src="https://user-images.githubusercontent.com/15707213/88344515-1dbd2400-cd1a-11ea-8754-df8cb72bc8b9.png">
</p>

<h2 align="center">
  Technical Test
</h2>

The challenge is create backend application (API) that will be able to create, query and edit animal records

## :information_source: How to start

1. Before start, we should install the dependencies:

```
$ yarn 

or 

$ npm install
```

2. Edit filename .env to .env.local and then add url mongodb: 

```
DATABASE_URL= 
PORT= 5000
```

3. start server in development environment: 

```
$ yarn dev 

or 

$ npm run dev
```

3. start server in production environment: 

```
$ yarn build
$ yarn start

or

$ npm run build
$ npm start
```

## :information_source: Endpoints

### POST `/animals`
This method must receive a new animal and insert it in a database to be consumed by the API itself.

```json
body
{
   "name": "any_name",
   "dateOfBirth": "2014-07-02T03:00:00.000Z",
   "type": "cow",
   "weight": 100

}
```
| field       | type   |
|-------------|--------|
| name        | String |
| dateOfBirth | Date   |
| type        | String |
| weight      | Number |


### GET `/animals/:id`
This method should return a possible animal

| Param       | type   |
|-------------|--------|
| id          | String |

```json
Possible expected result
{

  "_id": "5f1a07431e90ed001109b102",
  "name": "any_name",
  "age": "10 months",
  "type": "cow",
  "weight": 100,
  "createdAt": "2020-07-23T21:55:15.137Z",
  "updatedAt": "2020-07-23T21:55:15.137Z",
  "__v": 0

}
```

### PUT `/animals/:id`
This method should update a possible animal

| Param       | type   |
|-------------|--------|
| id          | String |

| field       | type   |
|-------------|--------|
| name        | String |
| dateOfBirth | Date   |
| type        | String |
| weight      | Number |

```json
body
{

   "name": "any_name3",
   "weight": 200
}
```

```json
Possible expected result
{

  "_id": "5f1a07431e90ed001109b102",
  "name": "any_name3",
  "age": "10 months",
  "type": "cow",
  "weight": 200,
  "createdAt": "2020-07-23T21:55:15.137Z",
  "updatedAt": "2020-07-23T21:55:15.137Z",
  "__v": 0

}
```

### 🚀 Start server with docker

1.Before start, verify if you have docker-compose installed

```
$ docker-compose --version
```

If you don't have, execute the commands, below

```
$ sudo curl -L https://github.com/docker/compose/releases/download/1.21.2/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
$ sudo chmod +x /usr/local/bin/docker-compose
```

2. Edit filename .env to .env.local and then add url mongodb: 

```
DATABASE_URL= mongodb://mongo:27017/bov-control
PORT= 5000

```

3. start server:
```
$ npm run docker:up
```

4. stop server:

```
$ npm run docker:down
```

## :white_check_mark: Test

1. start tests
```
$ yarn test:staged

or

$ npm run test:staged
```

## :wrench: Technologies

-  [Node.js](https://nodejs.org/en/)
-  [Express](https://expressjs.com/pt-br/)
-  [Date-fns](https://date-fns.org/)
-  [Mongoose](https://mongoosejs.com/)
-  [VS Code][vc] with [EditorConfig][vceditconfig] and [ESLint][vceslint]

---

Made with ♥ by Joédyson Bezerra :wave: [Get in touch!](https://www.linkedin.com/in/joedyson-bezerra/)

[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
