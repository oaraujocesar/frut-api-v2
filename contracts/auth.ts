/**
 * Contract source: https://git.io/JvyKD
 *
 * Feel free to let us know via PR, if you find something broken in this
 * file.
 */

// import { OATGuardContract, OATGuardConfig } from '@ioc:Adonis/Addons/Auth'

declare module '@ioc:Adonis/Addons/Auth' {
  /*
  |--------------------------------------------------------------------------
  | Providers
  |--------------------------------------------------------------------------
  |
  | The providers are used to fetch users. The Auth module comes pre-bundled
  | with two providers that are `Lucid` and `Database`. Both uses database
  | to fetch user details.
  |
  | You can also create and register your own custom providers.
  |
  */
  interface ProvidersList {
    /*
    |--------------------------------------------------------------------------
    | User Provider
    |--------------------------------------------------------------------------
    |
    | The following provider directlly uses Database query builder for fetching
    | user details from the database for authentication.
    |
    | You can create multiple providers using the same underlying driver with
    | different database tables.
    |
    */
    user: {
      implementation: DatabaseProviderContract<DatabaseProviderRow>,
      config: DatabaseProviderConfig,
    }
  }
  // |--------------------------------------------------------------------------
  // |
  // | Every guard needs a provider for looking up users from the database.
  // |
  // */
  interface GuardsList {
    api: {
      implementation: OATGuardContract<'user', 'api'>,
      config: OATGuardConfig<'user'>,
    },
  }
}
