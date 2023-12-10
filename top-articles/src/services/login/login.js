// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'
import {
  loginDataValidator,
  loginPatchValidator,
  loginQueryValidator,
  loginResolver,
  loginExternalResolver,
  loginDataResolver,
  loginPatchResolver,
  loginQueryResolver
} from './login.schema.js'
import { LoginService, getOptions } from './login.class.js'

export const loginPath = 'login'
export const loginMethods = ['find', 'get', 'create', 'patch', 'remove']

export * from './login.class.js'
export * from './login.schema.js'

// A configure function that registers the service and its hooks via `app.configure`
export const login = (app) => {
  // Register our service on the Feathers application
  app.use(loginPath, new LoginService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: loginMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(loginPath).hooks({
    around: {
      all: [
        authenticate('jwt'),
        schemaHooks.resolveExternal(loginExternalResolver),
        schemaHooks.resolveResult(loginResolver)
      ]
    },
    before: {
      all: [schemaHooks.validateQuery(loginQueryValidator), schemaHooks.resolveQuery(loginQueryResolver)],
      find: [],
      get: [],
      create: [schemaHooks.validateData(loginDataValidator), schemaHooks.resolveData(loginDataResolver)],
      patch: [schemaHooks.validateData(loginPatchValidator), schemaHooks.resolveData(loginPatchResolver)],
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
