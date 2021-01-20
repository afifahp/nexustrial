// api/app.ts

import { server } from './server'

server.listen().then(({ url }) => {

  console.log(`Server Siap di ${url}`)

})