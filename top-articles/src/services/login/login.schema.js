// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import { dataValidator, queryValidator } from '../../validators.js'

// Main data model schema
export const loginSchema = Type.Object(
  {
    id: Type.Number(),
    email: Type.String(),
    password: Type.Optional(Type.String())
  },
  { $id: 'Login', additionalProperties: false }
)
export const loginValidator = getValidator(loginSchema, dataValidator)
export const loginResolver = resolve({})

export const loginExternalResolver = resolve({})

// Schema for creating new entries
export const loginDataSchema = Type.Pick(loginSchema, ['text'], {
  $id: 'LoginData'
})
export const loginDataValidator = getValidator(loginDataSchema, dataValidator)
export const loginDataResolver = resolve({})

// Schema for updating existing entries
export const loginPatchSchema = Type.Partial(loginSchema, {
  $id: 'LoginPatch'
})
export const loginPatchValidator = getValidator(loginPatchSchema, dataValidator)
export const loginPatchResolver = resolve({})

// Schema for allowed query properties
export const loginQueryProperties = Type.Pick(loginSchema, ['id', 'text'])
export const loginQuerySchema = Type.Intersect(
  [
    querySyntax(loginQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export const loginQueryValidator = getValidator(loginQuerySchema, queryValidator)
export const loginQueryResolver = resolve({})
