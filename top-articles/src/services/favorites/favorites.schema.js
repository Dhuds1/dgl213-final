// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import { dataValidator, queryValidator } from '../../validators.js'

// Main data model schema
export const favoritesSchema = Type.Object(
  {
    id: Type.Number(),
    text: Type.Object()
  },
  { $id: 'Favorites', additionalProperties: false }
)
export const favoritesValidator = getValidator(favoritesSchema, dataValidator)
export const favoritesResolver = resolve({})

export const favoritesExternalResolver = resolve({})

// Schema for creating new entries
export const favoritesDataSchema = Type.Pick(favoritesSchema, ['text'], {
  $id: 'FavoritesData'
})
export const favoritesDataValidator = getValidator(favoritesDataSchema, dataValidator)
export const favoritesDataResolver = resolve({})

// Schema for updating existing entries
export const favoritesPatchSchema = Type.Partial(favoritesSchema, {
  $id: 'FavoritesPatch'
})
export const favoritesPatchValidator = getValidator(favoritesPatchSchema, dataValidator)
export const favoritesPatchResolver = resolve({})

// Schema for allowed query properties
export const favoritesQueryProperties = Type.Pick(favoritesSchema, ['id', 'text'])
export const favoritesQuerySchema = Type.Intersect(
  [
    querySyntax(favoritesQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export const favoritesQueryValidator = getValidator(favoritesQuerySchema, queryValidator)
export const favoritesQueryResolver = resolve({})
