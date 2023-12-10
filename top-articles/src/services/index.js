import { favorites } from './favorites/favorites.js'

import { user } from './users/users.js'

import { login } from './login/login.js'

import { login } from './login/login.js'

import { login } from './users/users.js'

export const services = (app) => {
  app.configure(favorites)

  app.configure(user)

  app.configure(login)

  app.configure(login)

  app.configure(login)

  // All services will be registered here
}
