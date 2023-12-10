// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import { hooks as schemaHooks } from '@feathersjs/schema'
import {
  favoritesDataValidator,
  favoritesPatchValidator,
  favoritesQueryValidator,
  favoritesResolver,
  favoritesExternalResolver,
  favoritesDataResolver,
  favoritesPatchResolver,
  favoritesQueryResolver
} from './favorites.schema.js'
import { FavoritesService, getOptions } from './favorites.class.js'

export const favoritesPath = 'favorites'
export const favoritesMethods = ['find', 'get', 'create', 'patch', 'remove']

export * from './favorites.class.js'
export * from './favorites.schema.js'

// A configure function that registers the service and its hooks via `app.configure`
export const favorites = (app) => {
  // Register our service on the Feathers application
  app.use(favoritesPath, new FavoritesService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: favoritesMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(favoritesPath).hooks({
    around: {
      all: [
        schemaHooks.resolveExternal(favoritesExternalResolver),
        schemaHooks.resolveResult(favoritesResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(favoritesQueryValidator),
        schemaHooks.resolveQuery(favoritesQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(favoritesDataValidator),
        schemaHooks.resolveData(favoritesDataResolver)
      ],
      patch: [
        schemaHooks.validateData(favoritesPatchValidator),
        schemaHooks.resolveData(favoritesPatchResolver)
      ],
      remove: []
    },
    after: {
      all: []
    },
    error: {
      all: []
    }
  })
}
