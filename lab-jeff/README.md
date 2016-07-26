![Triforce](./resources/triforce2.gif)

#Express API#

###Summary###


###Instructions###
From the root directory of 'lab-jeff' run the following command in your terminal:

`npm install`


###Test###

To run the tests, linter, watcher and start the server type the command:
`gulp`


POST: `curl -H "Content-Type: application/json" -X POST -d '{"pokeName":"charizard", "pokeType":"fire"}' http://localhost:3000/api/pokemon/`

To retrieve a Pokemon follow the below format, "name" must match pokemon your created with POST.

GET: `curl http://localhost:3000/api/pokemon/pokeId/`

DELETE: 'curl -X "DELETE" http:/localhost:3000/api/remove/pokemon/pokeID/'


`Jeff Gebhardt - CF JS 401`
