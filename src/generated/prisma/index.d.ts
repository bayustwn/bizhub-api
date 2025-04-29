
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model file
 * 
 */
export type file = $Result.DefaultSelection<Prisma.$filePayload>
/**
 * Model laporan_bulanan
 * 
 */
export type laporan_bulanan = $Result.DefaultSelection<Prisma.$laporan_bulananPayload>
/**
 * Model tugas
 * 
 */
export type tugas = $Result.DefaultSelection<Prisma.$tugasPayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model user_tugas
 * 
 */
export type user_tugas = $Result.DefaultSelection<Prisma.$user_tugasPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Files
 * const files = await prisma.file.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Files
   * const files = await prisma.file.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.file`: Exposes CRUD operations for the **file** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Files
    * const files = await prisma.file.findMany()
    * ```
    */
  get file(): Prisma.fileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.laporan_bulanan`: Exposes CRUD operations for the **laporan_bulanan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Laporan_bulanans
    * const laporan_bulanans = await prisma.laporan_bulanan.findMany()
    * ```
    */
  get laporan_bulanan(): Prisma.laporan_bulananDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tugas`: Exposes CRUD operations for the **tugas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tugases
    * const tugases = await prisma.tugas.findMany()
    * ```
    */
  get tugas(): Prisma.tugasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_tugas`: Exposes CRUD operations for the **user_tugas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_tugases
    * const user_tugases = await prisma.user_tugas.findMany()
    * ```
    */
  get user_tugas(): Prisma.user_tugasDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    file: 'file',
    laporan_bulanan: 'laporan_bulanan',
    tugas: 'tugas',
    user: 'user',
    user_tugas: 'user_tugas'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "file" | "laporan_bulanan" | "tugas" | "user" | "user_tugas"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      file: {
        payload: Prisma.$filePayload<ExtArgs>
        fields: Prisma.fileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.fileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.fileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filePayload>
          }
          findFirst: {
            args: Prisma.fileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.fileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filePayload>
          }
          findMany: {
            args: Prisma.fileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filePayload>[]
          }
          create: {
            args: Prisma.fileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filePayload>
          }
          createMany: {
            args: Prisma.fileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.fileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filePayload>
          }
          update: {
            args: Prisma.fileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filePayload>
          }
          deleteMany: {
            args: Prisma.fileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.fileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.fileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filePayload>
          }
          aggregate: {
            args: Prisma.FileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFile>
          }
          groupBy: {
            args: Prisma.fileGroupByArgs<ExtArgs>
            result: $Utils.Optional<FileGroupByOutputType>[]
          }
          count: {
            args: Prisma.fileCountArgs<ExtArgs>
            result: $Utils.Optional<FileCountAggregateOutputType> | number
          }
        }
      }
      laporan_bulanan: {
        payload: Prisma.$laporan_bulananPayload<ExtArgs>
        fields: Prisma.laporan_bulananFieldRefs
        operations: {
          findUnique: {
            args: Prisma.laporan_bulananFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$laporan_bulananPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.laporan_bulananFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$laporan_bulananPayload>
          }
          findFirst: {
            args: Prisma.laporan_bulananFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$laporan_bulananPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.laporan_bulananFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$laporan_bulananPayload>
          }
          findMany: {
            args: Prisma.laporan_bulananFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$laporan_bulananPayload>[]
          }
          create: {
            args: Prisma.laporan_bulananCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$laporan_bulananPayload>
          }
          createMany: {
            args: Prisma.laporan_bulananCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.laporan_bulananDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$laporan_bulananPayload>
          }
          update: {
            args: Prisma.laporan_bulananUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$laporan_bulananPayload>
          }
          deleteMany: {
            args: Prisma.laporan_bulananDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.laporan_bulananUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.laporan_bulananUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$laporan_bulananPayload>
          }
          aggregate: {
            args: Prisma.Laporan_bulananAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLaporan_bulanan>
          }
          groupBy: {
            args: Prisma.laporan_bulananGroupByArgs<ExtArgs>
            result: $Utils.Optional<Laporan_bulananGroupByOutputType>[]
          }
          count: {
            args: Prisma.laporan_bulananCountArgs<ExtArgs>
            result: $Utils.Optional<Laporan_bulananCountAggregateOutputType> | number
          }
        }
      }
      tugas: {
        payload: Prisma.$tugasPayload<ExtArgs>
        fields: Prisma.tugasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tugasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tugasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tugasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tugasPayload>
          }
          findFirst: {
            args: Prisma.tugasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tugasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tugasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tugasPayload>
          }
          findMany: {
            args: Prisma.tugasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tugasPayload>[]
          }
          create: {
            args: Prisma.tugasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tugasPayload>
          }
          createMany: {
            args: Prisma.tugasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tugasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tugasPayload>
          }
          update: {
            args: Prisma.tugasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tugasPayload>
          }
          deleteMany: {
            args: Prisma.tugasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tugasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tugasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tugasPayload>
          }
          aggregate: {
            args: Prisma.TugasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTugas>
          }
          groupBy: {
            args: Prisma.tugasGroupByArgs<ExtArgs>
            result: $Utils.Optional<TugasGroupByOutputType>[]
          }
          count: {
            args: Prisma.tugasCountArgs<ExtArgs>
            result: $Utils.Optional<TugasCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      user_tugas: {
        payload: Prisma.$user_tugasPayload<ExtArgs>
        fields: Prisma.user_tugasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_tugasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tugasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_tugasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tugasPayload>
          }
          findFirst: {
            args: Prisma.user_tugasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tugasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_tugasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tugasPayload>
          }
          findMany: {
            args: Prisma.user_tugasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tugasPayload>[]
          }
          create: {
            args: Prisma.user_tugasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tugasPayload>
          }
          createMany: {
            args: Prisma.user_tugasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.user_tugasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tugasPayload>
          }
          update: {
            args: Prisma.user_tugasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tugasPayload>
          }
          deleteMany: {
            args: Prisma.user_tugasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_tugasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.user_tugasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_tugasPayload>
          }
          aggregate: {
            args: Prisma.User_tugasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_tugas>
          }
          groupBy: {
            args: Prisma.user_tugasGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_tugasGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_tugasCountArgs<ExtArgs>
            result: $Utils.Optional<User_tugasCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    file?: fileOmit
    laporan_bulanan?: laporan_bulananOmit
    tugas?: tugasOmit
    user?: userOmit
    user_tugas?: user_tugasOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TugasCountOutputType
   */

  export type TugasCountOutputType = {
    file: number
    user_tugas: number
  }

  export type TugasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    file?: boolean | TugasCountOutputTypeCountFileArgs
    user_tugas?: boolean | TugasCountOutputTypeCountUser_tugasArgs
  }

  // Custom InputTypes
  /**
   * TugasCountOutputType without action
   */
  export type TugasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TugasCountOutputType
     */
    select?: TugasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TugasCountOutputType without action
   */
  export type TugasCountOutputTypeCountFileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: fileWhereInput
  }

  /**
   * TugasCountOutputType without action
   */
  export type TugasCountOutputTypeCountUser_tugasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_tugasWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    laporan_bulanan: number
    tugas: number
    user_tugas: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    laporan_bulanan?: boolean | UserCountOutputTypeCountLaporan_bulananArgs
    tugas?: boolean | UserCountOutputTypeCountTugasArgs
    user_tugas?: boolean | UserCountOutputTypeCountUser_tugasArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLaporan_bulananArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: laporan_bulananWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTugasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tugasWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUser_tugasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_tugasWhereInput
  }


  /**
   * Models
   */

  /**
   * Model file
   */

  export type AggregateFile = {
    _count: FileCountAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  export type FileMinAggregateOutputType = {
    id: string | null
    nama_file: string | null
    url: string | null
    id_tugas: string | null
    tanggal_upload: Date | null
  }

  export type FileMaxAggregateOutputType = {
    id: string | null
    nama_file: string | null
    url: string | null
    id_tugas: string | null
    tanggal_upload: Date | null
  }

  export type FileCountAggregateOutputType = {
    id: number
    nama_file: number
    url: number
    id_tugas: number
    tanggal_upload: number
    _all: number
  }


  export type FileMinAggregateInputType = {
    id?: true
    nama_file?: true
    url?: true
    id_tugas?: true
    tanggal_upload?: true
  }

  export type FileMaxAggregateInputType = {
    id?: true
    nama_file?: true
    url?: true
    id_tugas?: true
    tanggal_upload?: true
  }

  export type FileCountAggregateInputType = {
    id?: true
    nama_file?: true
    url?: true
    id_tugas?: true
    tanggal_upload?: true
    _all?: true
  }

  export type FileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which file to aggregate.
     */
    where?: fileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of files to fetch.
     */
    orderBy?: fileOrderByWithRelationInput | fileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: fileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned files
    **/
    _count?: true | FileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FileMaxAggregateInputType
  }

  export type GetFileAggregateType<T extends FileAggregateArgs> = {
        [P in keyof T & keyof AggregateFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFile[P]>
      : GetScalarType<T[P], AggregateFile[P]>
  }




  export type fileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: fileWhereInput
    orderBy?: fileOrderByWithAggregationInput | fileOrderByWithAggregationInput[]
    by: FileScalarFieldEnum[] | FileScalarFieldEnum
    having?: fileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FileCountAggregateInputType | true
    _min?: FileMinAggregateInputType
    _max?: FileMaxAggregateInputType
  }

  export type FileGroupByOutputType = {
    id: string
    nama_file: string
    url: string
    id_tugas: string
    tanggal_upload: Date
    _count: FileCountAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  type GetFileGroupByPayload<T extends fileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FileGroupByOutputType[P]>
            : GetScalarType<T[P], FileGroupByOutputType[P]>
        }
      >
    >


  export type fileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama_file?: boolean
    url?: boolean
    id_tugas?: boolean
    tanggal_upload?: boolean
    tugas?: boolean | tugasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["file"]>



  export type fileSelectScalar = {
    id?: boolean
    nama_file?: boolean
    url?: boolean
    id_tugas?: boolean
    tanggal_upload?: boolean
  }

  export type fileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama_file" | "url" | "id_tugas" | "tanggal_upload", ExtArgs["result"]["file"]>
  export type fileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tugas?: boolean | tugasDefaultArgs<ExtArgs>
  }

  export type $filePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "file"
    objects: {
      tugas: Prisma.$tugasPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama_file: string
      url: string
      id_tugas: string
      tanggal_upload: Date
    }, ExtArgs["result"]["file"]>
    composites: {}
  }

  type fileGetPayload<S extends boolean | null | undefined | fileDefaultArgs> = $Result.GetResult<Prisma.$filePayload, S>

  type fileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<fileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FileCountAggregateInputType | true
    }

  export interface fileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['file'], meta: { name: 'file' } }
    /**
     * Find zero or one File that matches the filter.
     * @param {fileFindUniqueArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends fileFindUniqueArgs>(args: SelectSubset<T, fileFindUniqueArgs<ExtArgs>>): Prisma__fileClient<$Result.GetResult<Prisma.$filePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one File that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {fileFindUniqueOrThrowArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends fileFindUniqueOrThrowArgs>(args: SelectSubset<T, fileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__fileClient<$Result.GetResult<Prisma.$filePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first File that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fileFindFirstArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends fileFindFirstArgs>(args?: SelectSubset<T, fileFindFirstArgs<ExtArgs>>): Prisma__fileClient<$Result.GetResult<Prisma.$filePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first File that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fileFindFirstOrThrowArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends fileFindFirstOrThrowArgs>(args?: SelectSubset<T, fileFindFirstOrThrowArgs<ExtArgs>>): Prisma__fileClient<$Result.GetResult<Prisma.$filePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Files
     * const files = await prisma.file.findMany()
     * 
     * // Get first 10 Files
     * const files = await prisma.file.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fileWithIdOnly = await prisma.file.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends fileFindManyArgs>(args?: SelectSubset<T, fileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$filePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a File.
     * @param {fileCreateArgs} args - Arguments to create a File.
     * @example
     * // Create one File
     * const File = await prisma.file.create({
     *   data: {
     *     // ... data to create a File
     *   }
     * })
     * 
     */
    create<T extends fileCreateArgs>(args: SelectSubset<T, fileCreateArgs<ExtArgs>>): Prisma__fileClient<$Result.GetResult<Prisma.$filePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Files.
     * @param {fileCreateManyArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const file = await prisma.file.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends fileCreateManyArgs>(args?: SelectSubset<T, fileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a File.
     * @param {fileDeleteArgs} args - Arguments to delete one File.
     * @example
     * // Delete one File
     * const File = await prisma.file.delete({
     *   where: {
     *     // ... filter to delete one File
     *   }
     * })
     * 
     */
    delete<T extends fileDeleteArgs>(args: SelectSubset<T, fileDeleteArgs<ExtArgs>>): Prisma__fileClient<$Result.GetResult<Prisma.$filePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one File.
     * @param {fileUpdateArgs} args - Arguments to update one File.
     * @example
     * // Update one File
     * const file = await prisma.file.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends fileUpdateArgs>(args: SelectSubset<T, fileUpdateArgs<ExtArgs>>): Prisma__fileClient<$Result.GetResult<Prisma.$filePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Files.
     * @param {fileDeleteManyArgs} args - Arguments to filter Files to delete.
     * @example
     * // Delete a few Files
     * const { count } = await prisma.file.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends fileDeleteManyArgs>(args?: SelectSubset<T, fileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Files
     * const file = await prisma.file.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends fileUpdateManyArgs>(args: SelectSubset<T, fileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one File.
     * @param {fileUpsertArgs} args - Arguments to update or create a File.
     * @example
     * // Update or create a File
     * const file = await prisma.file.upsert({
     *   create: {
     *     // ... data to create a File
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the File we want to update
     *   }
     * })
     */
    upsert<T extends fileUpsertArgs>(args: SelectSubset<T, fileUpsertArgs<ExtArgs>>): Prisma__fileClient<$Result.GetResult<Prisma.$filePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fileCountArgs} args - Arguments to filter Files to count.
     * @example
     * // Count the number of Files
     * const count = await prisma.file.count({
     *   where: {
     *     // ... the filter for the Files we want to count
     *   }
     * })
    **/
    count<T extends fileCountArgs>(
      args?: Subset<T, fileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FileAggregateArgs>(args: Subset<T, FileAggregateArgs>): Prisma.PrismaPromise<GetFileAggregateType<T>>

    /**
     * Group by File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends fileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: fileGroupByArgs['orderBy'] }
        : { orderBy?: fileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, fileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the file model
   */
  readonly fields: fileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for file.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__fileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tugas<T extends tugasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tugasDefaultArgs<ExtArgs>>): Prisma__tugasClient<$Result.GetResult<Prisma.$tugasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the file model
   */
  interface fileFieldRefs {
    readonly id: FieldRef<"file", 'String'>
    readonly nama_file: FieldRef<"file", 'String'>
    readonly url: FieldRef<"file", 'String'>
    readonly id_tugas: FieldRef<"file", 'String'>
    readonly tanggal_upload: FieldRef<"file", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * file findUnique
   */
  export type fileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the file
     */
    select?: fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the file
     */
    omit?: fileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fileInclude<ExtArgs> | null
    /**
     * Filter, which file to fetch.
     */
    where: fileWhereUniqueInput
  }

  /**
   * file findUniqueOrThrow
   */
  export type fileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the file
     */
    select?: fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the file
     */
    omit?: fileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fileInclude<ExtArgs> | null
    /**
     * Filter, which file to fetch.
     */
    where: fileWhereUniqueInput
  }

  /**
   * file findFirst
   */
  export type fileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the file
     */
    select?: fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the file
     */
    omit?: fileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fileInclude<ExtArgs> | null
    /**
     * Filter, which file to fetch.
     */
    where?: fileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of files to fetch.
     */
    orderBy?: fileOrderByWithRelationInput | fileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for files.
     */
    cursor?: fileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of files.
     */
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * file findFirstOrThrow
   */
  export type fileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the file
     */
    select?: fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the file
     */
    omit?: fileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fileInclude<ExtArgs> | null
    /**
     * Filter, which file to fetch.
     */
    where?: fileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of files to fetch.
     */
    orderBy?: fileOrderByWithRelationInput | fileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for files.
     */
    cursor?: fileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of files.
     */
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * file findMany
   */
  export type fileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the file
     */
    select?: fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the file
     */
    omit?: fileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fileInclude<ExtArgs> | null
    /**
     * Filter, which files to fetch.
     */
    where?: fileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of files to fetch.
     */
    orderBy?: fileOrderByWithRelationInput | fileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing files.
     */
    cursor?: fileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` files.
     */
    skip?: number
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * file create
   */
  export type fileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the file
     */
    select?: fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the file
     */
    omit?: fileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fileInclude<ExtArgs> | null
    /**
     * The data needed to create a file.
     */
    data: XOR<fileCreateInput, fileUncheckedCreateInput>
  }

  /**
   * file createMany
   */
  export type fileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many files.
     */
    data: fileCreateManyInput | fileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * file update
   */
  export type fileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the file
     */
    select?: fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the file
     */
    omit?: fileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fileInclude<ExtArgs> | null
    /**
     * The data needed to update a file.
     */
    data: XOR<fileUpdateInput, fileUncheckedUpdateInput>
    /**
     * Choose, which file to update.
     */
    where: fileWhereUniqueInput
  }

  /**
   * file updateMany
   */
  export type fileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update files.
     */
    data: XOR<fileUpdateManyMutationInput, fileUncheckedUpdateManyInput>
    /**
     * Filter which files to update
     */
    where?: fileWhereInput
    /**
     * Limit how many files to update.
     */
    limit?: number
  }

  /**
   * file upsert
   */
  export type fileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the file
     */
    select?: fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the file
     */
    omit?: fileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fileInclude<ExtArgs> | null
    /**
     * The filter to search for the file to update in case it exists.
     */
    where: fileWhereUniqueInput
    /**
     * In case the file found by the `where` argument doesn't exist, create a new file with this data.
     */
    create: XOR<fileCreateInput, fileUncheckedCreateInput>
    /**
     * In case the file was found with the provided `where` argument, update it with this data.
     */
    update: XOR<fileUpdateInput, fileUncheckedUpdateInput>
  }

  /**
   * file delete
   */
  export type fileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the file
     */
    select?: fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the file
     */
    omit?: fileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fileInclude<ExtArgs> | null
    /**
     * Filter which file to delete.
     */
    where: fileWhereUniqueInput
  }

  /**
   * file deleteMany
   */
  export type fileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which files to delete
     */
    where?: fileWhereInput
    /**
     * Limit how many files to delete.
     */
    limit?: number
  }

  /**
   * file without action
   */
  export type fileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the file
     */
    select?: fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the file
     */
    omit?: fileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fileInclude<ExtArgs> | null
  }


  /**
   * Model laporan_bulanan
   */

  export type AggregateLaporan_bulanan = {
    _count: Laporan_bulananCountAggregateOutputType | null
    _avg: Laporan_bulananAvgAggregateOutputType | null
    _sum: Laporan_bulananSumAggregateOutputType | null
    _min: Laporan_bulananMinAggregateOutputType | null
    _max: Laporan_bulananMaxAggregateOutputType | null
  }

  export type Laporan_bulananAvgAggregateOutputType = {
    tahun: number | null
    total_tugas: number | null
    tugas_selesai: number | null
    tugas_terlambat: number | null
  }

  export type Laporan_bulananSumAggregateOutputType = {
    tahun: number | null
    total_tugas: number | null
    tugas_selesai: number | null
    tugas_terlambat: number | null
  }

  export type Laporan_bulananMinAggregateOutputType = {
    id: string | null
    bulan: string | null
    tahun: number | null
    id_user: string | null
    total_tugas: number | null
    tugas_selesai: number | null
    tugas_terlambat: number | null
  }

  export type Laporan_bulananMaxAggregateOutputType = {
    id: string | null
    bulan: string | null
    tahun: number | null
    id_user: string | null
    total_tugas: number | null
    tugas_selesai: number | null
    tugas_terlambat: number | null
  }

  export type Laporan_bulananCountAggregateOutputType = {
    id: number
    bulan: number
    tahun: number
    id_user: number
    total_tugas: number
    tugas_selesai: number
    tugas_terlambat: number
    _all: number
  }


  export type Laporan_bulananAvgAggregateInputType = {
    tahun?: true
    total_tugas?: true
    tugas_selesai?: true
    tugas_terlambat?: true
  }

  export type Laporan_bulananSumAggregateInputType = {
    tahun?: true
    total_tugas?: true
    tugas_selesai?: true
    tugas_terlambat?: true
  }

  export type Laporan_bulananMinAggregateInputType = {
    id?: true
    bulan?: true
    tahun?: true
    id_user?: true
    total_tugas?: true
    tugas_selesai?: true
    tugas_terlambat?: true
  }

  export type Laporan_bulananMaxAggregateInputType = {
    id?: true
    bulan?: true
    tahun?: true
    id_user?: true
    total_tugas?: true
    tugas_selesai?: true
    tugas_terlambat?: true
  }

  export type Laporan_bulananCountAggregateInputType = {
    id?: true
    bulan?: true
    tahun?: true
    id_user?: true
    total_tugas?: true
    tugas_selesai?: true
    tugas_terlambat?: true
    _all?: true
  }

  export type Laporan_bulananAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which laporan_bulanan to aggregate.
     */
    where?: laporan_bulananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of laporan_bulanans to fetch.
     */
    orderBy?: laporan_bulananOrderByWithRelationInput | laporan_bulananOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: laporan_bulananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` laporan_bulanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` laporan_bulanans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned laporan_bulanans
    **/
    _count?: true | Laporan_bulananCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Laporan_bulananAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Laporan_bulananSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Laporan_bulananMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Laporan_bulananMaxAggregateInputType
  }

  export type GetLaporan_bulananAggregateType<T extends Laporan_bulananAggregateArgs> = {
        [P in keyof T & keyof AggregateLaporan_bulanan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLaporan_bulanan[P]>
      : GetScalarType<T[P], AggregateLaporan_bulanan[P]>
  }




  export type laporan_bulananGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: laporan_bulananWhereInput
    orderBy?: laporan_bulananOrderByWithAggregationInput | laporan_bulananOrderByWithAggregationInput[]
    by: Laporan_bulananScalarFieldEnum[] | Laporan_bulananScalarFieldEnum
    having?: laporan_bulananScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Laporan_bulananCountAggregateInputType | true
    _avg?: Laporan_bulananAvgAggregateInputType
    _sum?: Laporan_bulananSumAggregateInputType
    _min?: Laporan_bulananMinAggregateInputType
    _max?: Laporan_bulananMaxAggregateInputType
  }

  export type Laporan_bulananGroupByOutputType = {
    id: string
    bulan: string
    tahun: number
    id_user: string
    total_tugas: number
    tugas_selesai: number
    tugas_terlambat: number
    _count: Laporan_bulananCountAggregateOutputType | null
    _avg: Laporan_bulananAvgAggregateOutputType | null
    _sum: Laporan_bulananSumAggregateOutputType | null
    _min: Laporan_bulananMinAggregateOutputType | null
    _max: Laporan_bulananMaxAggregateOutputType | null
  }

  type GetLaporan_bulananGroupByPayload<T extends laporan_bulananGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Laporan_bulananGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Laporan_bulananGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Laporan_bulananGroupByOutputType[P]>
            : GetScalarType<T[P], Laporan_bulananGroupByOutputType[P]>
        }
      >
    >


  export type laporan_bulananSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bulan?: boolean
    tahun?: boolean
    id_user?: boolean
    total_tugas?: boolean
    tugas_selesai?: boolean
    tugas_terlambat?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["laporan_bulanan"]>



  export type laporan_bulananSelectScalar = {
    id?: boolean
    bulan?: boolean
    tahun?: boolean
    id_user?: boolean
    total_tugas?: boolean
    tugas_selesai?: boolean
    tugas_terlambat?: boolean
  }

  export type laporan_bulananOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bulan" | "tahun" | "id_user" | "total_tugas" | "tugas_selesai" | "tugas_terlambat", ExtArgs["result"]["laporan_bulanan"]>
  export type laporan_bulananInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $laporan_bulananPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "laporan_bulanan"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bulan: string
      tahun: number
      id_user: string
      total_tugas: number
      tugas_selesai: number
      tugas_terlambat: number
    }, ExtArgs["result"]["laporan_bulanan"]>
    composites: {}
  }

  type laporan_bulananGetPayload<S extends boolean | null | undefined | laporan_bulananDefaultArgs> = $Result.GetResult<Prisma.$laporan_bulananPayload, S>

  type laporan_bulananCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<laporan_bulananFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Laporan_bulananCountAggregateInputType | true
    }

  export interface laporan_bulananDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['laporan_bulanan'], meta: { name: 'laporan_bulanan' } }
    /**
     * Find zero or one Laporan_bulanan that matches the filter.
     * @param {laporan_bulananFindUniqueArgs} args - Arguments to find a Laporan_bulanan
     * @example
     * // Get one Laporan_bulanan
     * const laporan_bulanan = await prisma.laporan_bulanan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends laporan_bulananFindUniqueArgs>(args: SelectSubset<T, laporan_bulananFindUniqueArgs<ExtArgs>>): Prisma__laporan_bulananClient<$Result.GetResult<Prisma.$laporan_bulananPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Laporan_bulanan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {laporan_bulananFindUniqueOrThrowArgs} args - Arguments to find a Laporan_bulanan
     * @example
     * // Get one Laporan_bulanan
     * const laporan_bulanan = await prisma.laporan_bulanan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends laporan_bulananFindUniqueOrThrowArgs>(args: SelectSubset<T, laporan_bulananFindUniqueOrThrowArgs<ExtArgs>>): Prisma__laporan_bulananClient<$Result.GetResult<Prisma.$laporan_bulananPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Laporan_bulanan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {laporan_bulananFindFirstArgs} args - Arguments to find a Laporan_bulanan
     * @example
     * // Get one Laporan_bulanan
     * const laporan_bulanan = await prisma.laporan_bulanan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends laporan_bulananFindFirstArgs>(args?: SelectSubset<T, laporan_bulananFindFirstArgs<ExtArgs>>): Prisma__laporan_bulananClient<$Result.GetResult<Prisma.$laporan_bulananPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Laporan_bulanan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {laporan_bulananFindFirstOrThrowArgs} args - Arguments to find a Laporan_bulanan
     * @example
     * // Get one Laporan_bulanan
     * const laporan_bulanan = await prisma.laporan_bulanan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends laporan_bulananFindFirstOrThrowArgs>(args?: SelectSubset<T, laporan_bulananFindFirstOrThrowArgs<ExtArgs>>): Prisma__laporan_bulananClient<$Result.GetResult<Prisma.$laporan_bulananPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Laporan_bulanans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {laporan_bulananFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Laporan_bulanans
     * const laporan_bulanans = await prisma.laporan_bulanan.findMany()
     * 
     * // Get first 10 Laporan_bulanans
     * const laporan_bulanans = await prisma.laporan_bulanan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const laporan_bulananWithIdOnly = await prisma.laporan_bulanan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends laporan_bulananFindManyArgs>(args?: SelectSubset<T, laporan_bulananFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$laporan_bulananPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Laporan_bulanan.
     * @param {laporan_bulananCreateArgs} args - Arguments to create a Laporan_bulanan.
     * @example
     * // Create one Laporan_bulanan
     * const Laporan_bulanan = await prisma.laporan_bulanan.create({
     *   data: {
     *     // ... data to create a Laporan_bulanan
     *   }
     * })
     * 
     */
    create<T extends laporan_bulananCreateArgs>(args: SelectSubset<T, laporan_bulananCreateArgs<ExtArgs>>): Prisma__laporan_bulananClient<$Result.GetResult<Prisma.$laporan_bulananPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Laporan_bulanans.
     * @param {laporan_bulananCreateManyArgs} args - Arguments to create many Laporan_bulanans.
     * @example
     * // Create many Laporan_bulanans
     * const laporan_bulanan = await prisma.laporan_bulanan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends laporan_bulananCreateManyArgs>(args?: SelectSubset<T, laporan_bulananCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Laporan_bulanan.
     * @param {laporan_bulananDeleteArgs} args - Arguments to delete one Laporan_bulanan.
     * @example
     * // Delete one Laporan_bulanan
     * const Laporan_bulanan = await prisma.laporan_bulanan.delete({
     *   where: {
     *     // ... filter to delete one Laporan_bulanan
     *   }
     * })
     * 
     */
    delete<T extends laporan_bulananDeleteArgs>(args: SelectSubset<T, laporan_bulananDeleteArgs<ExtArgs>>): Prisma__laporan_bulananClient<$Result.GetResult<Prisma.$laporan_bulananPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Laporan_bulanan.
     * @param {laporan_bulananUpdateArgs} args - Arguments to update one Laporan_bulanan.
     * @example
     * // Update one Laporan_bulanan
     * const laporan_bulanan = await prisma.laporan_bulanan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends laporan_bulananUpdateArgs>(args: SelectSubset<T, laporan_bulananUpdateArgs<ExtArgs>>): Prisma__laporan_bulananClient<$Result.GetResult<Prisma.$laporan_bulananPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Laporan_bulanans.
     * @param {laporan_bulananDeleteManyArgs} args - Arguments to filter Laporan_bulanans to delete.
     * @example
     * // Delete a few Laporan_bulanans
     * const { count } = await prisma.laporan_bulanan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends laporan_bulananDeleteManyArgs>(args?: SelectSubset<T, laporan_bulananDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Laporan_bulanans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {laporan_bulananUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Laporan_bulanans
     * const laporan_bulanan = await prisma.laporan_bulanan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends laporan_bulananUpdateManyArgs>(args: SelectSubset<T, laporan_bulananUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Laporan_bulanan.
     * @param {laporan_bulananUpsertArgs} args - Arguments to update or create a Laporan_bulanan.
     * @example
     * // Update or create a Laporan_bulanan
     * const laporan_bulanan = await prisma.laporan_bulanan.upsert({
     *   create: {
     *     // ... data to create a Laporan_bulanan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Laporan_bulanan we want to update
     *   }
     * })
     */
    upsert<T extends laporan_bulananUpsertArgs>(args: SelectSubset<T, laporan_bulananUpsertArgs<ExtArgs>>): Prisma__laporan_bulananClient<$Result.GetResult<Prisma.$laporan_bulananPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Laporan_bulanans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {laporan_bulananCountArgs} args - Arguments to filter Laporan_bulanans to count.
     * @example
     * // Count the number of Laporan_bulanans
     * const count = await prisma.laporan_bulanan.count({
     *   where: {
     *     // ... the filter for the Laporan_bulanans we want to count
     *   }
     * })
    **/
    count<T extends laporan_bulananCountArgs>(
      args?: Subset<T, laporan_bulananCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Laporan_bulananCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Laporan_bulanan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Laporan_bulananAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Laporan_bulananAggregateArgs>(args: Subset<T, Laporan_bulananAggregateArgs>): Prisma.PrismaPromise<GetLaporan_bulananAggregateType<T>>

    /**
     * Group by Laporan_bulanan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {laporan_bulananGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends laporan_bulananGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: laporan_bulananGroupByArgs['orderBy'] }
        : { orderBy?: laporan_bulananGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, laporan_bulananGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLaporan_bulananGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the laporan_bulanan model
   */
  readonly fields: laporan_bulananFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for laporan_bulanan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__laporan_bulananClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the laporan_bulanan model
   */
  interface laporan_bulananFieldRefs {
    readonly id: FieldRef<"laporan_bulanan", 'String'>
    readonly bulan: FieldRef<"laporan_bulanan", 'String'>
    readonly tahun: FieldRef<"laporan_bulanan", 'Int'>
    readonly id_user: FieldRef<"laporan_bulanan", 'String'>
    readonly total_tugas: FieldRef<"laporan_bulanan", 'Int'>
    readonly tugas_selesai: FieldRef<"laporan_bulanan", 'Int'>
    readonly tugas_terlambat: FieldRef<"laporan_bulanan", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * laporan_bulanan findUnique
   */
  export type laporan_bulananFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the laporan_bulanan
     */
    select?: laporan_bulananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the laporan_bulanan
     */
    omit?: laporan_bulananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: laporan_bulananInclude<ExtArgs> | null
    /**
     * Filter, which laporan_bulanan to fetch.
     */
    where: laporan_bulananWhereUniqueInput
  }

  /**
   * laporan_bulanan findUniqueOrThrow
   */
  export type laporan_bulananFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the laporan_bulanan
     */
    select?: laporan_bulananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the laporan_bulanan
     */
    omit?: laporan_bulananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: laporan_bulananInclude<ExtArgs> | null
    /**
     * Filter, which laporan_bulanan to fetch.
     */
    where: laporan_bulananWhereUniqueInput
  }

  /**
   * laporan_bulanan findFirst
   */
  export type laporan_bulananFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the laporan_bulanan
     */
    select?: laporan_bulananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the laporan_bulanan
     */
    omit?: laporan_bulananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: laporan_bulananInclude<ExtArgs> | null
    /**
     * Filter, which laporan_bulanan to fetch.
     */
    where?: laporan_bulananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of laporan_bulanans to fetch.
     */
    orderBy?: laporan_bulananOrderByWithRelationInput | laporan_bulananOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for laporan_bulanans.
     */
    cursor?: laporan_bulananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` laporan_bulanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` laporan_bulanans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of laporan_bulanans.
     */
    distinct?: Laporan_bulananScalarFieldEnum | Laporan_bulananScalarFieldEnum[]
  }

  /**
   * laporan_bulanan findFirstOrThrow
   */
  export type laporan_bulananFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the laporan_bulanan
     */
    select?: laporan_bulananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the laporan_bulanan
     */
    omit?: laporan_bulananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: laporan_bulananInclude<ExtArgs> | null
    /**
     * Filter, which laporan_bulanan to fetch.
     */
    where?: laporan_bulananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of laporan_bulanans to fetch.
     */
    orderBy?: laporan_bulananOrderByWithRelationInput | laporan_bulananOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for laporan_bulanans.
     */
    cursor?: laporan_bulananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` laporan_bulanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` laporan_bulanans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of laporan_bulanans.
     */
    distinct?: Laporan_bulananScalarFieldEnum | Laporan_bulananScalarFieldEnum[]
  }

  /**
   * laporan_bulanan findMany
   */
  export type laporan_bulananFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the laporan_bulanan
     */
    select?: laporan_bulananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the laporan_bulanan
     */
    omit?: laporan_bulananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: laporan_bulananInclude<ExtArgs> | null
    /**
     * Filter, which laporan_bulanans to fetch.
     */
    where?: laporan_bulananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of laporan_bulanans to fetch.
     */
    orderBy?: laporan_bulananOrderByWithRelationInput | laporan_bulananOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing laporan_bulanans.
     */
    cursor?: laporan_bulananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` laporan_bulanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` laporan_bulanans.
     */
    skip?: number
    distinct?: Laporan_bulananScalarFieldEnum | Laporan_bulananScalarFieldEnum[]
  }

  /**
   * laporan_bulanan create
   */
  export type laporan_bulananCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the laporan_bulanan
     */
    select?: laporan_bulananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the laporan_bulanan
     */
    omit?: laporan_bulananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: laporan_bulananInclude<ExtArgs> | null
    /**
     * The data needed to create a laporan_bulanan.
     */
    data: XOR<laporan_bulananCreateInput, laporan_bulananUncheckedCreateInput>
  }

  /**
   * laporan_bulanan createMany
   */
  export type laporan_bulananCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many laporan_bulanans.
     */
    data: laporan_bulananCreateManyInput | laporan_bulananCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * laporan_bulanan update
   */
  export type laporan_bulananUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the laporan_bulanan
     */
    select?: laporan_bulananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the laporan_bulanan
     */
    omit?: laporan_bulananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: laporan_bulananInclude<ExtArgs> | null
    /**
     * The data needed to update a laporan_bulanan.
     */
    data: XOR<laporan_bulananUpdateInput, laporan_bulananUncheckedUpdateInput>
    /**
     * Choose, which laporan_bulanan to update.
     */
    where: laporan_bulananWhereUniqueInput
  }

  /**
   * laporan_bulanan updateMany
   */
  export type laporan_bulananUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update laporan_bulanans.
     */
    data: XOR<laporan_bulananUpdateManyMutationInput, laporan_bulananUncheckedUpdateManyInput>
    /**
     * Filter which laporan_bulanans to update
     */
    where?: laporan_bulananWhereInput
    /**
     * Limit how many laporan_bulanans to update.
     */
    limit?: number
  }

  /**
   * laporan_bulanan upsert
   */
  export type laporan_bulananUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the laporan_bulanan
     */
    select?: laporan_bulananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the laporan_bulanan
     */
    omit?: laporan_bulananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: laporan_bulananInclude<ExtArgs> | null
    /**
     * The filter to search for the laporan_bulanan to update in case it exists.
     */
    where: laporan_bulananWhereUniqueInput
    /**
     * In case the laporan_bulanan found by the `where` argument doesn't exist, create a new laporan_bulanan with this data.
     */
    create: XOR<laporan_bulananCreateInput, laporan_bulananUncheckedCreateInput>
    /**
     * In case the laporan_bulanan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<laporan_bulananUpdateInput, laporan_bulananUncheckedUpdateInput>
  }

  /**
   * laporan_bulanan delete
   */
  export type laporan_bulananDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the laporan_bulanan
     */
    select?: laporan_bulananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the laporan_bulanan
     */
    omit?: laporan_bulananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: laporan_bulananInclude<ExtArgs> | null
    /**
     * Filter which laporan_bulanan to delete.
     */
    where: laporan_bulananWhereUniqueInput
  }

  /**
   * laporan_bulanan deleteMany
   */
  export type laporan_bulananDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which laporan_bulanans to delete
     */
    where?: laporan_bulananWhereInput
    /**
     * Limit how many laporan_bulanans to delete.
     */
    limit?: number
  }

  /**
   * laporan_bulanan without action
   */
  export type laporan_bulananDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the laporan_bulanan
     */
    select?: laporan_bulananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the laporan_bulanan
     */
    omit?: laporan_bulananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: laporan_bulananInclude<ExtArgs> | null
  }


  /**
   * Model tugas
   */

  export type AggregateTugas = {
    _count: TugasCountAggregateOutputType | null
    _avg: TugasAvgAggregateOutputType | null
    _sum: TugasSumAggregateOutputType | null
    _min: TugasMinAggregateOutputType | null
    _max: TugasMaxAggregateOutputType | null
  }

  export type TugasAvgAggregateOutputType = {
    kuantitas: number | null
  }

  export type TugasSumAggregateOutputType = {
    kuantitas: number | null
  }

  export type TugasMinAggregateOutputType = {
    id: string | null
    judul: string | null
    brief: string | null
    kuantitas: number | null
    deadline: Date | null
    status: string | null
    id_admin: string | null
    tanggal_dibuat: Date | null
    tanggal_diubah: Date | null
  }

  export type TugasMaxAggregateOutputType = {
    id: string | null
    judul: string | null
    brief: string | null
    kuantitas: number | null
    deadline: Date | null
    status: string | null
    id_admin: string | null
    tanggal_dibuat: Date | null
    tanggal_diubah: Date | null
  }

  export type TugasCountAggregateOutputType = {
    id: number
    judul: number
    brief: number
    kuantitas: number
    deadline: number
    status: number
    id_admin: number
    tanggal_dibuat: number
    tanggal_diubah: number
    _all: number
  }


  export type TugasAvgAggregateInputType = {
    kuantitas?: true
  }

  export type TugasSumAggregateInputType = {
    kuantitas?: true
  }

  export type TugasMinAggregateInputType = {
    id?: true
    judul?: true
    brief?: true
    kuantitas?: true
    deadline?: true
    status?: true
    id_admin?: true
    tanggal_dibuat?: true
    tanggal_diubah?: true
  }

  export type TugasMaxAggregateInputType = {
    id?: true
    judul?: true
    brief?: true
    kuantitas?: true
    deadline?: true
    status?: true
    id_admin?: true
    tanggal_dibuat?: true
    tanggal_diubah?: true
  }

  export type TugasCountAggregateInputType = {
    id?: true
    judul?: true
    brief?: true
    kuantitas?: true
    deadline?: true
    status?: true
    id_admin?: true
    tanggal_dibuat?: true
    tanggal_diubah?: true
    _all?: true
  }

  export type TugasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tugas to aggregate.
     */
    where?: tugasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tugases to fetch.
     */
    orderBy?: tugasOrderByWithRelationInput | tugasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tugasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tugases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tugases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tugases
    **/
    _count?: true | TugasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TugasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TugasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TugasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TugasMaxAggregateInputType
  }

  export type GetTugasAggregateType<T extends TugasAggregateArgs> = {
        [P in keyof T & keyof AggregateTugas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTugas[P]>
      : GetScalarType<T[P], AggregateTugas[P]>
  }




  export type tugasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tugasWhereInput
    orderBy?: tugasOrderByWithAggregationInput | tugasOrderByWithAggregationInput[]
    by: TugasScalarFieldEnum[] | TugasScalarFieldEnum
    having?: tugasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TugasCountAggregateInputType | true
    _avg?: TugasAvgAggregateInputType
    _sum?: TugasSumAggregateInputType
    _min?: TugasMinAggregateInputType
    _max?: TugasMaxAggregateInputType
  }

  export type TugasGroupByOutputType = {
    id: string
    judul: string
    brief: string | null
    kuantitas: number | null
    deadline: Date | null
    status: string | null
    id_admin: string | null
    tanggal_dibuat: Date | null
    tanggal_diubah: Date | null
    _count: TugasCountAggregateOutputType | null
    _avg: TugasAvgAggregateOutputType | null
    _sum: TugasSumAggregateOutputType | null
    _min: TugasMinAggregateOutputType | null
    _max: TugasMaxAggregateOutputType | null
  }

  type GetTugasGroupByPayload<T extends tugasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TugasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TugasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TugasGroupByOutputType[P]>
            : GetScalarType<T[P], TugasGroupByOutputType[P]>
        }
      >
    >


  export type tugasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    judul?: boolean
    brief?: boolean
    kuantitas?: boolean
    deadline?: boolean
    status?: boolean
    id_admin?: boolean
    tanggal_dibuat?: boolean
    tanggal_diubah?: boolean
    file?: boolean | tugas$fileArgs<ExtArgs>
    user?: boolean | tugas$userArgs<ExtArgs>
    user_tugas?: boolean | tugas$user_tugasArgs<ExtArgs>
    _count?: boolean | TugasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tugas"]>



  export type tugasSelectScalar = {
    id?: boolean
    judul?: boolean
    brief?: boolean
    kuantitas?: boolean
    deadline?: boolean
    status?: boolean
    id_admin?: boolean
    tanggal_dibuat?: boolean
    tanggal_diubah?: boolean
  }

  export type tugasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "judul" | "brief" | "kuantitas" | "deadline" | "status" | "id_admin" | "tanggal_dibuat" | "tanggal_diubah", ExtArgs["result"]["tugas"]>
  export type tugasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    file?: boolean | tugas$fileArgs<ExtArgs>
    user?: boolean | tugas$userArgs<ExtArgs>
    user_tugas?: boolean | tugas$user_tugasArgs<ExtArgs>
    _count?: boolean | TugasCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tugasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tugas"
    objects: {
      file: Prisma.$filePayload<ExtArgs>[]
      user: Prisma.$userPayload<ExtArgs> | null
      user_tugas: Prisma.$user_tugasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      judul: string
      brief: string | null
      kuantitas: number | null
      deadline: Date | null
      status: string | null
      id_admin: string | null
      tanggal_dibuat: Date | null
      tanggal_diubah: Date | null
    }, ExtArgs["result"]["tugas"]>
    composites: {}
  }

  type tugasGetPayload<S extends boolean | null | undefined | tugasDefaultArgs> = $Result.GetResult<Prisma.$tugasPayload, S>

  type tugasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tugasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TugasCountAggregateInputType | true
    }

  export interface tugasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tugas'], meta: { name: 'tugas' } }
    /**
     * Find zero or one Tugas that matches the filter.
     * @param {tugasFindUniqueArgs} args - Arguments to find a Tugas
     * @example
     * // Get one Tugas
     * const tugas = await prisma.tugas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tugasFindUniqueArgs>(args: SelectSubset<T, tugasFindUniqueArgs<ExtArgs>>): Prisma__tugasClient<$Result.GetResult<Prisma.$tugasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tugas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tugasFindUniqueOrThrowArgs} args - Arguments to find a Tugas
     * @example
     * // Get one Tugas
     * const tugas = await prisma.tugas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tugasFindUniqueOrThrowArgs>(args: SelectSubset<T, tugasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tugasClient<$Result.GetResult<Prisma.$tugasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tugas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tugasFindFirstArgs} args - Arguments to find a Tugas
     * @example
     * // Get one Tugas
     * const tugas = await prisma.tugas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tugasFindFirstArgs>(args?: SelectSubset<T, tugasFindFirstArgs<ExtArgs>>): Prisma__tugasClient<$Result.GetResult<Prisma.$tugasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tugas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tugasFindFirstOrThrowArgs} args - Arguments to find a Tugas
     * @example
     * // Get one Tugas
     * const tugas = await prisma.tugas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tugasFindFirstOrThrowArgs>(args?: SelectSubset<T, tugasFindFirstOrThrowArgs<ExtArgs>>): Prisma__tugasClient<$Result.GetResult<Prisma.$tugasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tugases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tugasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tugases
     * const tugases = await prisma.tugas.findMany()
     * 
     * // Get first 10 Tugases
     * const tugases = await prisma.tugas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tugasWithIdOnly = await prisma.tugas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tugasFindManyArgs>(args?: SelectSubset<T, tugasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tugasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tugas.
     * @param {tugasCreateArgs} args - Arguments to create a Tugas.
     * @example
     * // Create one Tugas
     * const Tugas = await prisma.tugas.create({
     *   data: {
     *     // ... data to create a Tugas
     *   }
     * })
     * 
     */
    create<T extends tugasCreateArgs>(args: SelectSubset<T, tugasCreateArgs<ExtArgs>>): Prisma__tugasClient<$Result.GetResult<Prisma.$tugasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tugases.
     * @param {tugasCreateManyArgs} args - Arguments to create many Tugases.
     * @example
     * // Create many Tugases
     * const tugas = await prisma.tugas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tugasCreateManyArgs>(args?: SelectSubset<T, tugasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tugas.
     * @param {tugasDeleteArgs} args - Arguments to delete one Tugas.
     * @example
     * // Delete one Tugas
     * const Tugas = await prisma.tugas.delete({
     *   where: {
     *     // ... filter to delete one Tugas
     *   }
     * })
     * 
     */
    delete<T extends tugasDeleteArgs>(args: SelectSubset<T, tugasDeleteArgs<ExtArgs>>): Prisma__tugasClient<$Result.GetResult<Prisma.$tugasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tugas.
     * @param {tugasUpdateArgs} args - Arguments to update one Tugas.
     * @example
     * // Update one Tugas
     * const tugas = await prisma.tugas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tugasUpdateArgs>(args: SelectSubset<T, tugasUpdateArgs<ExtArgs>>): Prisma__tugasClient<$Result.GetResult<Prisma.$tugasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tugases.
     * @param {tugasDeleteManyArgs} args - Arguments to filter Tugases to delete.
     * @example
     * // Delete a few Tugases
     * const { count } = await prisma.tugas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tugasDeleteManyArgs>(args?: SelectSubset<T, tugasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tugases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tugasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tugases
     * const tugas = await prisma.tugas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tugasUpdateManyArgs>(args: SelectSubset<T, tugasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tugas.
     * @param {tugasUpsertArgs} args - Arguments to update or create a Tugas.
     * @example
     * // Update or create a Tugas
     * const tugas = await prisma.tugas.upsert({
     *   create: {
     *     // ... data to create a Tugas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tugas we want to update
     *   }
     * })
     */
    upsert<T extends tugasUpsertArgs>(args: SelectSubset<T, tugasUpsertArgs<ExtArgs>>): Prisma__tugasClient<$Result.GetResult<Prisma.$tugasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tugases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tugasCountArgs} args - Arguments to filter Tugases to count.
     * @example
     * // Count the number of Tugases
     * const count = await prisma.tugas.count({
     *   where: {
     *     // ... the filter for the Tugases we want to count
     *   }
     * })
    **/
    count<T extends tugasCountArgs>(
      args?: Subset<T, tugasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TugasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tugas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TugasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TugasAggregateArgs>(args: Subset<T, TugasAggregateArgs>): Prisma.PrismaPromise<GetTugasAggregateType<T>>

    /**
     * Group by Tugas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tugasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tugasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tugasGroupByArgs['orderBy'] }
        : { orderBy?: tugasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tugasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTugasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tugas model
   */
  readonly fields: tugasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tugas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tugasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    file<T extends tugas$fileArgs<ExtArgs> = {}>(args?: Subset<T, tugas$fileArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$filePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends tugas$userArgs<ExtArgs> = {}>(args?: Subset<T, tugas$userArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user_tugas<T extends tugas$user_tugasArgs<ExtArgs> = {}>(args?: Subset<T, tugas$user_tugasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_tugasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tugas model
   */
  interface tugasFieldRefs {
    readonly id: FieldRef<"tugas", 'String'>
    readonly judul: FieldRef<"tugas", 'String'>
    readonly brief: FieldRef<"tugas", 'String'>
    readonly kuantitas: FieldRef<"tugas", 'Int'>
    readonly deadline: FieldRef<"tugas", 'DateTime'>
    readonly status: FieldRef<"tugas", 'String'>
    readonly id_admin: FieldRef<"tugas", 'String'>
    readonly tanggal_dibuat: FieldRef<"tugas", 'DateTime'>
    readonly tanggal_diubah: FieldRef<"tugas", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tugas findUnique
   */
  export type tugasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tugas
     */
    select?: tugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tugas
     */
    omit?: tugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tugasInclude<ExtArgs> | null
    /**
     * Filter, which tugas to fetch.
     */
    where: tugasWhereUniqueInput
  }

  /**
   * tugas findUniqueOrThrow
   */
  export type tugasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tugas
     */
    select?: tugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tugas
     */
    omit?: tugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tugasInclude<ExtArgs> | null
    /**
     * Filter, which tugas to fetch.
     */
    where: tugasWhereUniqueInput
  }

  /**
   * tugas findFirst
   */
  export type tugasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tugas
     */
    select?: tugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tugas
     */
    omit?: tugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tugasInclude<ExtArgs> | null
    /**
     * Filter, which tugas to fetch.
     */
    where?: tugasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tugases to fetch.
     */
    orderBy?: tugasOrderByWithRelationInput | tugasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tugases.
     */
    cursor?: tugasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tugases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tugases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tugases.
     */
    distinct?: TugasScalarFieldEnum | TugasScalarFieldEnum[]
  }

  /**
   * tugas findFirstOrThrow
   */
  export type tugasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tugas
     */
    select?: tugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tugas
     */
    omit?: tugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tugasInclude<ExtArgs> | null
    /**
     * Filter, which tugas to fetch.
     */
    where?: tugasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tugases to fetch.
     */
    orderBy?: tugasOrderByWithRelationInput | tugasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tugases.
     */
    cursor?: tugasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tugases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tugases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tugases.
     */
    distinct?: TugasScalarFieldEnum | TugasScalarFieldEnum[]
  }

  /**
   * tugas findMany
   */
  export type tugasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tugas
     */
    select?: tugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tugas
     */
    omit?: tugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tugasInclude<ExtArgs> | null
    /**
     * Filter, which tugases to fetch.
     */
    where?: tugasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tugases to fetch.
     */
    orderBy?: tugasOrderByWithRelationInput | tugasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tugases.
     */
    cursor?: tugasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tugases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tugases.
     */
    skip?: number
    distinct?: TugasScalarFieldEnum | TugasScalarFieldEnum[]
  }

  /**
   * tugas create
   */
  export type tugasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tugas
     */
    select?: tugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tugas
     */
    omit?: tugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tugasInclude<ExtArgs> | null
    /**
     * The data needed to create a tugas.
     */
    data: XOR<tugasCreateInput, tugasUncheckedCreateInput>
  }

  /**
   * tugas createMany
   */
  export type tugasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tugases.
     */
    data: tugasCreateManyInput | tugasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tugas update
   */
  export type tugasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tugas
     */
    select?: tugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tugas
     */
    omit?: tugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tugasInclude<ExtArgs> | null
    /**
     * The data needed to update a tugas.
     */
    data: XOR<tugasUpdateInput, tugasUncheckedUpdateInput>
    /**
     * Choose, which tugas to update.
     */
    where: tugasWhereUniqueInput
  }

  /**
   * tugas updateMany
   */
  export type tugasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tugases.
     */
    data: XOR<tugasUpdateManyMutationInput, tugasUncheckedUpdateManyInput>
    /**
     * Filter which tugases to update
     */
    where?: tugasWhereInput
    /**
     * Limit how many tugases to update.
     */
    limit?: number
  }

  /**
   * tugas upsert
   */
  export type tugasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tugas
     */
    select?: tugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tugas
     */
    omit?: tugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tugasInclude<ExtArgs> | null
    /**
     * The filter to search for the tugas to update in case it exists.
     */
    where: tugasWhereUniqueInput
    /**
     * In case the tugas found by the `where` argument doesn't exist, create a new tugas with this data.
     */
    create: XOR<tugasCreateInput, tugasUncheckedCreateInput>
    /**
     * In case the tugas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tugasUpdateInput, tugasUncheckedUpdateInput>
  }

  /**
   * tugas delete
   */
  export type tugasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tugas
     */
    select?: tugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tugas
     */
    omit?: tugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tugasInclude<ExtArgs> | null
    /**
     * Filter which tugas to delete.
     */
    where: tugasWhereUniqueInput
  }

  /**
   * tugas deleteMany
   */
  export type tugasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tugases to delete
     */
    where?: tugasWhereInput
    /**
     * Limit how many tugases to delete.
     */
    limit?: number
  }

  /**
   * tugas.file
   */
  export type tugas$fileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the file
     */
    select?: fileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the file
     */
    omit?: fileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fileInclude<ExtArgs> | null
    where?: fileWhereInput
    orderBy?: fileOrderByWithRelationInput | fileOrderByWithRelationInput[]
    cursor?: fileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * tugas.user
   */
  export type tugas$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
  }

  /**
   * tugas.user_tugas
   */
  export type tugas$user_tugasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tugas
     */
    select?: user_tugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tugas
     */
    omit?: user_tugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tugasInclude<ExtArgs> | null
    where?: user_tugasWhereInput
    orderBy?: user_tugasOrderByWithRelationInput | user_tugasOrderByWithRelationInput[]
    cursor?: user_tugasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_tugasScalarFieldEnum | User_tugasScalarFieldEnum[]
  }

  /**
   * tugas without action
   */
  export type tugasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tugas
     */
    select?: tugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tugas
     */
    omit?: tugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tugasInclude<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    nama: string | null
    email: string | null
    password: string | null
    posisi: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    email: string | null
    password: string | null
    posisi: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    nama: number
    email: number
    password: number
    posisi: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    nama?: true
    email?: true
    password?: true
    posisi?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    nama?: true
    email?: true
    password?: true
    posisi?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    nama?: true
    email?: true
    password?: true
    posisi?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    nama: string
    email: string
    password: string
    posisi: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    email?: boolean
    password?: boolean
    posisi?: boolean
    laporan_bulanan?: boolean | user$laporan_bulananArgs<ExtArgs>
    tugas?: boolean | user$tugasArgs<ExtArgs>
    user_tugas?: boolean | user$user_tugasArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type userSelectScalar = {
    id?: boolean
    nama?: boolean
    email?: boolean
    password?: boolean
    posisi?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "email" | "password" | "posisi", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    laporan_bulanan?: boolean | user$laporan_bulananArgs<ExtArgs>
    tugas?: boolean | user$tugasArgs<ExtArgs>
    user_tugas?: boolean | user$user_tugasArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      laporan_bulanan: Prisma.$laporan_bulananPayload<ExtArgs>[]
      tugas: Prisma.$tugasPayload<ExtArgs>[]
      user_tugas: Prisma.$user_tugasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      email: string
      password: string
      posisi: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    laporan_bulanan<T extends user$laporan_bulananArgs<ExtArgs> = {}>(args?: Subset<T, user$laporan_bulananArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$laporan_bulananPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tugas<T extends user$tugasArgs<ExtArgs> = {}>(args?: Subset<T, user$tugasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tugasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_tugas<T extends user$user_tugasArgs<ExtArgs> = {}>(args?: Subset<T, user$user_tugasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_tugasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'String'>
    readonly nama: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly posisi: FieldRef<"user", 'String'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.laporan_bulanan
   */
  export type user$laporan_bulananArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the laporan_bulanan
     */
    select?: laporan_bulananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the laporan_bulanan
     */
    omit?: laporan_bulananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: laporan_bulananInclude<ExtArgs> | null
    where?: laporan_bulananWhereInput
    orderBy?: laporan_bulananOrderByWithRelationInput | laporan_bulananOrderByWithRelationInput[]
    cursor?: laporan_bulananWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Laporan_bulananScalarFieldEnum | Laporan_bulananScalarFieldEnum[]
  }

  /**
   * user.tugas
   */
  export type user$tugasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tugas
     */
    select?: tugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tugas
     */
    omit?: tugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tugasInclude<ExtArgs> | null
    where?: tugasWhereInput
    orderBy?: tugasOrderByWithRelationInput | tugasOrderByWithRelationInput[]
    cursor?: tugasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TugasScalarFieldEnum | TugasScalarFieldEnum[]
  }

  /**
   * user.user_tugas
   */
  export type user$user_tugasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tugas
     */
    select?: user_tugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tugas
     */
    omit?: user_tugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tugasInclude<ExtArgs> | null
    where?: user_tugasWhereInput
    orderBy?: user_tugasOrderByWithRelationInput | user_tugasOrderByWithRelationInput[]
    cursor?: user_tugasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_tugasScalarFieldEnum | User_tugasScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model user_tugas
   */

  export type AggregateUser_tugas = {
    _count: User_tugasCountAggregateOutputType | null
    _min: User_tugasMinAggregateOutputType | null
    _max: User_tugasMaxAggregateOutputType | null
  }

  export type User_tugasMinAggregateOutputType = {
    id_user: string | null
    id_tugas: string | null
  }

  export type User_tugasMaxAggregateOutputType = {
    id_user: string | null
    id_tugas: string | null
  }

  export type User_tugasCountAggregateOutputType = {
    id_user: number
    id_tugas: number
    _all: number
  }


  export type User_tugasMinAggregateInputType = {
    id_user?: true
    id_tugas?: true
  }

  export type User_tugasMaxAggregateInputType = {
    id_user?: true
    id_tugas?: true
  }

  export type User_tugasCountAggregateInputType = {
    id_user?: true
    id_tugas?: true
    _all?: true
  }

  export type User_tugasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_tugas to aggregate.
     */
    where?: user_tugasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_tugases to fetch.
     */
    orderBy?: user_tugasOrderByWithRelationInput | user_tugasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_tugasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_tugases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_tugases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_tugases
    **/
    _count?: true | User_tugasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_tugasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_tugasMaxAggregateInputType
  }

  export type GetUser_tugasAggregateType<T extends User_tugasAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_tugas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_tugas[P]>
      : GetScalarType<T[P], AggregateUser_tugas[P]>
  }




  export type user_tugasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_tugasWhereInput
    orderBy?: user_tugasOrderByWithAggregationInput | user_tugasOrderByWithAggregationInput[]
    by: User_tugasScalarFieldEnum[] | User_tugasScalarFieldEnum
    having?: user_tugasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_tugasCountAggregateInputType | true
    _min?: User_tugasMinAggregateInputType
    _max?: User_tugasMaxAggregateInputType
  }

  export type User_tugasGroupByOutputType = {
    id_user: string
    id_tugas: string
    _count: User_tugasCountAggregateOutputType | null
    _min: User_tugasMinAggregateOutputType | null
    _max: User_tugasMaxAggregateOutputType | null
  }

  type GetUser_tugasGroupByPayload<T extends user_tugasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_tugasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_tugasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_tugasGroupByOutputType[P]>
            : GetScalarType<T[P], User_tugasGroupByOutputType[P]>
        }
      >
    >


  export type user_tugasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_user?: boolean
    id_tugas?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    tugas?: boolean | tugasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_tugas"]>



  export type user_tugasSelectScalar = {
    id_user?: boolean
    id_tugas?: boolean
  }

  export type user_tugasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_user" | "id_tugas", ExtArgs["result"]["user_tugas"]>
  export type user_tugasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    tugas?: boolean | tugasDefaultArgs<ExtArgs>
  }

  export type $user_tugasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_tugas"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      tugas: Prisma.$tugasPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_user: string
      id_tugas: string
    }, ExtArgs["result"]["user_tugas"]>
    composites: {}
  }

  type user_tugasGetPayload<S extends boolean | null | undefined | user_tugasDefaultArgs> = $Result.GetResult<Prisma.$user_tugasPayload, S>

  type user_tugasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_tugasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_tugasCountAggregateInputType | true
    }

  export interface user_tugasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_tugas'], meta: { name: 'user_tugas' } }
    /**
     * Find zero or one User_tugas that matches the filter.
     * @param {user_tugasFindUniqueArgs} args - Arguments to find a User_tugas
     * @example
     * // Get one User_tugas
     * const user_tugas = await prisma.user_tugas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_tugasFindUniqueArgs>(args: SelectSubset<T, user_tugasFindUniqueArgs<ExtArgs>>): Prisma__user_tugasClient<$Result.GetResult<Prisma.$user_tugasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_tugas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_tugasFindUniqueOrThrowArgs} args - Arguments to find a User_tugas
     * @example
     * // Get one User_tugas
     * const user_tugas = await prisma.user_tugas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_tugasFindUniqueOrThrowArgs>(args: SelectSubset<T, user_tugasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_tugasClient<$Result.GetResult<Prisma.$user_tugasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_tugas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_tugasFindFirstArgs} args - Arguments to find a User_tugas
     * @example
     * // Get one User_tugas
     * const user_tugas = await prisma.user_tugas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_tugasFindFirstArgs>(args?: SelectSubset<T, user_tugasFindFirstArgs<ExtArgs>>): Prisma__user_tugasClient<$Result.GetResult<Prisma.$user_tugasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_tugas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_tugasFindFirstOrThrowArgs} args - Arguments to find a User_tugas
     * @example
     * // Get one User_tugas
     * const user_tugas = await prisma.user_tugas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_tugasFindFirstOrThrowArgs>(args?: SelectSubset<T, user_tugasFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_tugasClient<$Result.GetResult<Prisma.$user_tugasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_tugases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_tugasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_tugases
     * const user_tugases = await prisma.user_tugas.findMany()
     * 
     * // Get first 10 User_tugases
     * const user_tugases = await prisma.user_tugas.findMany({ take: 10 })
     * 
     * // Only select the `id_user`
     * const user_tugasWithId_userOnly = await prisma.user_tugas.findMany({ select: { id_user: true } })
     * 
     */
    findMany<T extends user_tugasFindManyArgs>(args?: SelectSubset<T, user_tugasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_tugasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_tugas.
     * @param {user_tugasCreateArgs} args - Arguments to create a User_tugas.
     * @example
     * // Create one User_tugas
     * const User_tugas = await prisma.user_tugas.create({
     *   data: {
     *     // ... data to create a User_tugas
     *   }
     * })
     * 
     */
    create<T extends user_tugasCreateArgs>(args: SelectSubset<T, user_tugasCreateArgs<ExtArgs>>): Prisma__user_tugasClient<$Result.GetResult<Prisma.$user_tugasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_tugases.
     * @param {user_tugasCreateManyArgs} args - Arguments to create many User_tugases.
     * @example
     * // Create many User_tugases
     * const user_tugas = await prisma.user_tugas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_tugasCreateManyArgs>(args?: SelectSubset<T, user_tugasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User_tugas.
     * @param {user_tugasDeleteArgs} args - Arguments to delete one User_tugas.
     * @example
     * // Delete one User_tugas
     * const User_tugas = await prisma.user_tugas.delete({
     *   where: {
     *     // ... filter to delete one User_tugas
     *   }
     * })
     * 
     */
    delete<T extends user_tugasDeleteArgs>(args: SelectSubset<T, user_tugasDeleteArgs<ExtArgs>>): Prisma__user_tugasClient<$Result.GetResult<Prisma.$user_tugasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_tugas.
     * @param {user_tugasUpdateArgs} args - Arguments to update one User_tugas.
     * @example
     * // Update one User_tugas
     * const user_tugas = await prisma.user_tugas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_tugasUpdateArgs>(args: SelectSubset<T, user_tugasUpdateArgs<ExtArgs>>): Prisma__user_tugasClient<$Result.GetResult<Prisma.$user_tugasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_tugases.
     * @param {user_tugasDeleteManyArgs} args - Arguments to filter User_tugases to delete.
     * @example
     * // Delete a few User_tugases
     * const { count } = await prisma.user_tugas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_tugasDeleteManyArgs>(args?: SelectSubset<T, user_tugasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_tugases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_tugasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_tugases
     * const user_tugas = await prisma.user_tugas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_tugasUpdateManyArgs>(args: SelectSubset<T, user_tugasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_tugas.
     * @param {user_tugasUpsertArgs} args - Arguments to update or create a User_tugas.
     * @example
     * // Update or create a User_tugas
     * const user_tugas = await prisma.user_tugas.upsert({
     *   create: {
     *     // ... data to create a User_tugas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_tugas we want to update
     *   }
     * })
     */
    upsert<T extends user_tugasUpsertArgs>(args: SelectSubset<T, user_tugasUpsertArgs<ExtArgs>>): Prisma__user_tugasClient<$Result.GetResult<Prisma.$user_tugasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_tugases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_tugasCountArgs} args - Arguments to filter User_tugases to count.
     * @example
     * // Count the number of User_tugases
     * const count = await prisma.user_tugas.count({
     *   where: {
     *     // ... the filter for the User_tugases we want to count
     *   }
     * })
    **/
    count<T extends user_tugasCountArgs>(
      args?: Subset<T, user_tugasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_tugasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_tugas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_tugasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_tugasAggregateArgs>(args: Subset<T, User_tugasAggregateArgs>): Prisma.PrismaPromise<GetUser_tugasAggregateType<T>>

    /**
     * Group by User_tugas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_tugasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends user_tugasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_tugasGroupByArgs['orderBy'] }
        : { orderBy?: user_tugasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, user_tugasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_tugasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_tugas model
   */
  readonly fields: user_tugasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_tugas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_tugasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tugas<T extends tugasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tugasDefaultArgs<ExtArgs>>): Prisma__tugasClient<$Result.GetResult<Prisma.$tugasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user_tugas model
   */
  interface user_tugasFieldRefs {
    readonly id_user: FieldRef<"user_tugas", 'String'>
    readonly id_tugas: FieldRef<"user_tugas", 'String'>
  }
    

  // Custom InputTypes
  /**
   * user_tugas findUnique
   */
  export type user_tugasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tugas
     */
    select?: user_tugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tugas
     */
    omit?: user_tugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tugasInclude<ExtArgs> | null
    /**
     * Filter, which user_tugas to fetch.
     */
    where: user_tugasWhereUniqueInput
  }

  /**
   * user_tugas findUniqueOrThrow
   */
  export type user_tugasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tugas
     */
    select?: user_tugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tugas
     */
    omit?: user_tugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tugasInclude<ExtArgs> | null
    /**
     * Filter, which user_tugas to fetch.
     */
    where: user_tugasWhereUniqueInput
  }

  /**
   * user_tugas findFirst
   */
  export type user_tugasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tugas
     */
    select?: user_tugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tugas
     */
    omit?: user_tugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tugasInclude<ExtArgs> | null
    /**
     * Filter, which user_tugas to fetch.
     */
    where?: user_tugasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_tugases to fetch.
     */
    orderBy?: user_tugasOrderByWithRelationInput | user_tugasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_tugases.
     */
    cursor?: user_tugasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_tugases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_tugases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_tugases.
     */
    distinct?: User_tugasScalarFieldEnum | User_tugasScalarFieldEnum[]
  }

  /**
   * user_tugas findFirstOrThrow
   */
  export type user_tugasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tugas
     */
    select?: user_tugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tugas
     */
    omit?: user_tugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tugasInclude<ExtArgs> | null
    /**
     * Filter, which user_tugas to fetch.
     */
    where?: user_tugasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_tugases to fetch.
     */
    orderBy?: user_tugasOrderByWithRelationInput | user_tugasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_tugases.
     */
    cursor?: user_tugasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_tugases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_tugases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_tugases.
     */
    distinct?: User_tugasScalarFieldEnum | User_tugasScalarFieldEnum[]
  }

  /**
   * user_tugas findMany
   */
  export type user_tugasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tugas
     */
    select?: user_tugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tugas
     */
    omit?: user_tugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tugasInclude<ExtArgs> | null
    /**
     * Filter, which user_tugases to fetch.
     */
    where?: user_tugasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_tugases to fetch.
     */
    orderBy?: user_tugasOrderByWithRelationInput | user_tugasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_tugases.
     */
    cursor?: user_tugasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_tugases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_tugases.
     */
    skip?: number
    distinct?: User_tugasScalarFieldEnum | User_tugasScalarFieldEnum[]
  }

  /**
   * user_tugas create
   */
  export type user_tugasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tugas
     */
    select?: user_tugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tugas
     */
    omit?: user_tugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tugasInclude<ExtArgs> | null
    /**
     * The data needed to create a user_tugas.
     */
    data: XOR<user_tugasCreateInput, user_tugasUncheckedCreateInput>
  }

  /**
   * user_tugas createMany
   */
  export type user_tugasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_tugases.
     */
    data: user_tugasCreateManyInput | user_tugasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_tugas update
   */
  export type user_tugasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tugas
     */
    select?: user_tugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tugas
     */
    omit?: user_tugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tugasInclude<ExtArgs> | null
    /**
     * The data needed to update a user_tugas.
     */
    data: XOR<user_tugasUpdateInput, user_tugasUncheckedUpdateInput>
    /**
     * Choose, which user_tugas to update.
     */
    where: user_tugasWhereUniqueInput
  }

  /**
   * user_tugas updateMany
   */
  export type user_tugasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_tugases.
     */
    data: XOR<user_tugasUpdateManyMutationInput, user_tugasUncheckedUpdateManyInput>
    /**
     * Filter which user_tugases to update
     */
    where?: user_tugasWhereInput
    /**
     * Limit how many user_tugases to update.
     */
    limit?: number
  }

  /**
   * user_tugas upsert
   */
  export type user_tugasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tugas
     */
    select?: user_tugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tugas
     */
    omit?: user_tugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tugasInclude<ExtArgs> | null
    /**
     * The filter to search for the user_tugas to update in case it exists.
     */
    where: user_tugasWhereUniqueInput
    /**
     * In case the user_tugas found by the `where` argument doesn't exist, create a new user_tugas with this data.
     */
    create: XOR<user_tugasCreateInput, user_tugasUncheckedCreateInput>
    /**
     * In case the user_tugas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_tugasUpdateInput, user_tugasUncheckedUpdateInput>
  }

  /**
   * user_tugas delete
   */
  export type user_tugasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tugas
     */
    select?: user_tugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tugas
     */
    omit?: user_tugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tugasInclude<ExtArgs> | null
    /**
     * Filter which user_tugas to delete.
     */
    where: user_tugasWhereUniqueInput
  }

  /**
   * user_tugas deleteMany
   */
  export type user_tugasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_tugases to delete
     */
    where?: user_tugasWhereInput
    /**
     * Limit how many user_tugases to delete.
     */
    limit?: number
  }

  /**
   * user_tugas without action
   */
  export type user_tugasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_tugas
     */
    select?: user_tugasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_tugas
     */
    omit?: user_tugasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_tugasInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const FileScalarFieldEnum: {
    id: 'id',
    nama_file: 'nama_file',
    url: 'url',
    id_tugas: 'id_tugas',
    tanggal_upload: 'tanggal_upload'
  };

  export type FileScalarFieldEnum = (typeof FileScalarFieldEnum)[keyof typeof FileScalarFieldEnum]


  export const Laporan_bulananScalarFieldEnum: {
    id: 'id',
    bulan: 'bulan',
    tahun: 'tahun',
    id_user: 'id_user',
    total_tugas: 'total_tugas',
    tugas_selesai: 'tugas_selesai',
    tugas_terlambat: 'tugas_terlambat'
  };

  export type Laporan_bulananScalarFieldEnum = (typeof Laporan_bulananScalarFieldEnum)[keyof typeof Laporan_bulananScalarFieldEnum]


  export const TugasScalarFieldEnum: {
    id: 'id',
    judul: 'judul',
    brief: 'brief',
    kuantitas: 'kuantitas',
    deadline: 'deadline',
    status: 'status',
    id_admin: 'id_admin',
    tanggal_dibuat: 'tanggal_dibuat',
    tanggal_diubah: 'tanggal_diubah'
  };

  export type TugasScalarFieldEnum = (typeof TugasScalarFieldEnum)[keyof typeof TugasScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    email: 'email',
    password: 'password',
    posisi: 'posisi'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const User_tugasScalarFieldEnum: {
    id_user: 'id_user',
    id_tugas: 'id_tugas'
  };

  export type User_tugasScalarFieldEnum = (typeof User_tugasScalarFieldEnum)[keyof typeof User_tugasScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const fileOrderByRelevanceFieldEnum: {
    id: 'id',
    nama_file: 'nama_file',
    url: 'url',
    id_tugas: 'id_tugas'
  };

  export type fileOrderByRelevanceFieldEnum = (typeof fileOrderByRelevanceFieldEnum)[keyof typeof fileOrderByRelevanceFieldEnum]


  export const laporan_bulananOrderByRelevanceFieldEnum: {
    id: 'id',
    bulan: 'bulan',
    id_user: 'id_user'
  };

  export type laporan_bulananOrderByRelevanceFieldEnum = (typeof laporan_bulananOrderByRelevanceFieldEnum)[keyof typeof laporan_bulananOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const tugasOrderByRelevanceFieldEnum: {
    id: 'id',
    judul: 'judul',
    brief: 'brief',
    status: 'status',
    id_admin: 'id_admin'
  };

  export type tugasOrderByRelevanceFieldEnum = (typeof tugasOrderByRelevanceFieldEnum)[keyof typeof tugasOrderByRelevanceFieldEnum]


  export const userOrderByRelevanceFieldEnum: {
    id: 'id',
    nama: 'nama',
    email: 'email',
    password: 'password',
    posisi: 'posisi'
  };

  export type userOrderByRelevanceFieldEnum = (typeof userOrderByRelevanceFieldEnum)[keyof typeof userOrderByRelevanceFieldEnum]


  export const user_tugasOrderByRelevanceFieldEnum: {
    id_user: 'id_user',
    id_tugas: 'id_tugas'
  };

  export type user_tugasOrderByRelevanceFieldEnum = (typeof user_tugasOrderByRelevanceFieldEnum)[keyof typeof user_tugasOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type fileWhereInput = {
    AND?: fileWhereInput | fileWhereInput[]
    OR?: fileWhereInput[]
    NOT?: fileWhereInput | fileWhereInput[]
    id?: StringFilter<"file"> | string
    nama_file?: StringFilter<"file"> | string
    url?: StringFilter<"file"> | string
    id_tugas?: StringFilter<"file"> | string
    tanggal_upload?: DateTimeFilter<"file"> | Date | string
    tugas?: XOR<TugasScalarRelationFilter, tugasWhereInput>
  }

  export type fileOrderByWithRelationInput = {
    id?: SortOrder
    nama_file?: SortOrder
    url?: SortOrder
    id_tugas?: SortOrder
    tanggal_upload?: SortOrder
    tugas?: tugasOrderByWithRelationInput
    _relevance?: fileOrderByRelevanceInput
  }

  export type fileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: fileWhereInput | fileWhereInput[]
    OR?: fileWhereInput[]
    NOT?: fileWhereInput | fileWhereInput[]
    nama_file?: StringFilter<"file"> | string
    url?: StringFilter<"file"> | string
    id_tugas?: StringFilter<"file"> | string
    tanggal_upload?: DateTimeFilter<"file"> | Date | string
    tugas?: XOR<TugasScalarRelationFilter, tugasWhereInput>
  }, "id">

  export type fileOrderByWithAggregationInput = {
    id?: SortOrder
    nama_file?: SortOrder
    url?: SortOrder
    id_tugas?: SortOrder
    tanggal_upload?: SortOrder
    _count?: fileCountOrderByAggregateInput
    _max?: fileMaxOrderByAggregateInput
    _min?: fileMinOrderByAggregateInput
  }

  export type fileScalarWhereWithAggregatesInput = {
    AND?: fileScalarWhereWithAggregatesInput | fileScalarWhereWithAggregatesInput[]
    OR?: fileScalarWhereWithAggregatesInput[]
    NOT?: fileScalarWhereWithAggregatesInput | fileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"file"> | string
    nama_file?: StringWithAggregatesFilter<"file"> | string
    url?: StringWithAggregatesFilter<"file"> | string
    id_tugas?: StringWithAggregatesFilter<"file"> | string
    tanggal_upload?: DateTimeWithAggregatesFilter<"file"> | Date | string
  }

  export type laporan_bulananWhereInput = {
    AND?: laporan_bulananWhereInput | laporan_bulananWhereInput[]
    OR?: laporan_bulananWhereInput[]
    NOT?: laporan_bulananWhereInput | laporan_bulananWhereInput[]
    id?: StringFilter<"laporan_bulanan"> | string
    bulan?: StringFilter<"laporan_bulanan"> | string
    tahun?: IntFilter<"laporan_bulanan"> | number
    id_user?: StringFilter<"laporan_bulanan"> | string
    total_tugas?: IntFilter<"laporan_bulanan"> | number
    tugas_selesai?: IntFilter<"laporan_bulanan"> | number
    tugas_terlambat?: IntFilter<"laporan_bulanan"> | number
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type laporan_bulananOrderByWithRelationInput = {
    id?: SortOrder
    bulan?: SortOrder
    tahun?: SortOrder
    id_user?: SortOrder
    total_tugas?: SortOrder
    tugas_selesai?: SortOrder
    tugas_terlambat?: SortOrder
    user?: userOrderByWithRelationInput
    _relevance?: laporan_bulananOrderByRelevanceInput
  }

  export type laporan_bulananWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: laporan_bulananWhereInput | laporan_bulananWhereInput[]
    OR?: laporan_bulananWhereInput[]
    NOT?: laporan_bulananWhereInput | laporan_bulananWhereInput[]
    bulan?: StringFilter<"laporan_bulanan"> | string
    tahun?: IntFilter<"laporan_bulanan"> | number
    id_user?: StringFilter<"laporan_bulanan"> | string
    total_tugas?: IntFilter<"laporan_bulanan"> | number
    tugas_selesai?: IntFilter<"laporan_bulanan"> | number
    tugas_terlambat?: IntFilter<"laporan_bulanan"> | number
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id">

  export type laporan_bulananOrderByWithAggregationInput = {
    id?: SortOrder
    bulan?: SortOrder
    tahun?: SortOrder
    id_user?: SortOrder
    total_tugas?: SortOrder
    tugas_selesai?: SortOrder
    tugas_terlambat?: SortOrder
    _count?: laporan_bulananCountOrderByAggregateInput
    _avg?: laporan_bulananAvgOrderByAggregateInput
    _max?: laporan_bulananMaxOrderByAggregateInput
    _min?: laporan_bulananMinOrderByAggregateInput
    _sum?: laporan_bulananSumOrderByAggregateInput
  }

  export type laporan_bulananScalarWhereWithAggregatesInput = {
    AND?: laporan_bulananScalarWhereWithAggregatesInput | laporan_bulananScalarWhereWithAggregatesInput[]
    OR?: laporan_bulananScalarWhereWithAggregatesInput[]
    NOT?: laporan_bulananScalarWhereWithAggregatesInput | laporan_bulananScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"laporan_bulanan"> | string
    bulan?: StringWithAggregatesFilter<"laporan_bulanan"> | string
    tahun?: IntWithAggregatesFilter<"laporan_bulanan"> | number
    id_user?: StringWithAggregatesFilter<"laporan_bulanan"> | string
    total_tugas?: IntWithAggregatesFilter<"laporan_bulanan"> | number
    tugas_selesai?: IntWithAggregatesFilter<"laporan_bulanan"> | number
    tugas_terlambat?: IntWithAggregatesFilter<"laporan_bulanan"> | number
  }

  export type tugasWhereInput = {
    AND?: tugasWhereInput | tugasWhereInput[]
    OR?: tugasWhereInput[]
    NOT?: tugasWhereInput | tugasWhereInput[]
    id?: StringFilter<"tugas"> | string
    judul?: StringFilter<"tugas"> | string
    brief?: StringNullableFilter<"tugas"> | string | null
    kuantitas?: IntNullableFilter<"tugas"> | number | null
    deadline?: DateTimeNullableFilter<"tugas"> | Date | string | null
    status?: StringNullableFilter<"tugas"> | string | null
    id_admin?: StringNullableFilter<"tugas"> | string | null
    tanggal_dibuat?: DateTimeNullableFilter<"tugas"> | Date | string | null
    tanggal_diubah?: DateTimeNullableFilter<"tugas"> | Date | string | null
    file?: FileListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
    user_tugas?: User_tugasListRelationFilter
  }

  export type tugasOrderByWithRelationInput = {
    id?: SortOrder
    judul?: SortOrder
    brief?: SortOrderInput | SortOrder
    kuantitas?: SortOrderInput | SortOrder
    deadline?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    id_admin?: SortOrderInput | SortOrder
    tanggal_dibuat?: SortOrderInput | SortOrder
    tanggal_diubah?: SortOrderInput | SortOrder
    file?: fileOrderByRelationAggregateInput
    user?: userOrderByWithRelationInput
    user_tugas?: user_tugasOrderByRelationAggregateInput
    _relevance?: tugasOrderByRelevanceInput
  }

  export type tugasWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: tugasWhereInput | tugasWhereInput[]
    OR?: tugasWhereInput[]
    NOT?: tugasWhereInput | tugasWhereInput[]
    judul?: StringFilter<"tugas"> | string
    brief?: StringNullableFilter<"tugas"> | string | null
    kuantitas?: IntNullableFilter<"tugas"> | number | null
    deadline?: DateTimeNullableFilter<"tugas"> | Date | string | null
    status?: StringNullableFilter<"tugas"> | string | null
    id_admin?: StringNullableFilter<"tugas"> | string | null
    tanggal_dibuat?: DateTimeNullableFilter<"tugas"> | Date | string | null
    tanggal_diubah?: DateTimeNullableFilter<"tugas"> | Date | string | null
    file?: FileListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
    user_tugas?: User_tugasListRelationFilter
  }, "id">

  export type tugasOrderByWithAggregationInput = {
    id?: SortOrder
    judul?: SortOrder
    brief?: SortOrderInput | SortOrder
    kuantitas?: SortOrderInput | SortOrder
    deadline?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    id_admin?: SortOrderInput | SortOrder
    tanggal_dibuat?: SortOrderInput | SortOrder
    tanggal_diubah?: SortOrderInput | SortOrder
    _count?: tugasCountOrderByAggregateInput
    _avg?: tugasAvgOrderByAggregateInput
    _max?: tugasMaxOrderByAggregateInput
    _min?: tugasMinOrderByAggregateInput
    _sum?: tugasSumOrderByAggregateInput
  }

  export type tugasScalarWhereWithAggregatesInput = {
    AND?: tugasScalarWhereWithAggregatesInput | tugasScalarWhereWithAggregatesInput[]
    OR?: tugasScalarWhereWithAggregatesInput[]
    NOT?: tugasScalarWhereWithAggregatesInput | tugasScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"tugas"> | string
    judul?: StringWithAggregatesFilter<"tugas"> | string
    brief?: StringNullableWithAggregatesFilter<"tugas"> | string | null
    kuantitas?: IntNullableWithAggregatesFilter<"tugas"> | number | null
    deadline?: DateTimeNullableWithAggregatesFilter<"tugas"> | Date | string | null
    status?: StringNullableWithAggregatesFilter<"tugas"> | string | null
    id_admin?: StringNullableWithAggregatesFilter<"tugas"> | string | null
    tanggal_dibuat?: DateTimeNullableWithAggregatesFilter<"tugas"> | Date | string | null
    tanggal_diubah?: DateTimeNullableWithAggregatesFilter<"tugas"> | Date | string | null
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: StringFilter<"user"> | string
    nama?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    posisi?: StringFilter<"user"> | string
    laporan_bulanan?: Laporan_bulananListRelationFilter
    tugas?: TugasListRelationFilter
    user_tugas?: User_tugasListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    password?: SortOrder
    posisi?: SortOrder
    laporan_bulanan?: laporan_bulananOrderByRelationAggregateInput
    tugas?: tugasOrderByRelationAggregateInput
    user_tugas?: user_tugasOrderByRelationAggregateInput
    _relevance?: userOrderByRelevanceInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    nama?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    posisi?: StringFilter<"user"> | string
    laporan_bulanan?: Laporan_bulananListRelationFilter
    tugas?: TugasListRelationFilter
    user_tugas?: User_tugasListRelationFilter
  }, "id" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    password?: SortOrder
    posisi?: SortOrder
    _count?: userCountOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"user"> | string
    nama?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    posisi?: StringWithAggregatesFilter<"user"> | string
  }

  export type user_tugasWhereInput = {
    AND?: user_tugasWhereInput | user_tugasWhereInput[]
    OR?: user_tugasWhereInput[]
    NOT?: user_tugasWhereInput | user_tugasWhereInput[]
    id_user?: StringFilter<"user_tugas"> | string
    id_tugas?: StringFilter<"user_tugas"> | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    tugas?: XOR<TugasScalarRelationFilter, tugasWhereInput>
  }

  export type user_tugasOrderByWithRelationInput = {
    id_user?: SortOrder
    id_tugas?: SortOrder
    user?: userOrderByWithRelationInput
    tugas?: tugasOrderByWithRelationInput
    _relevance?: user_tugasOrderByRelevanceInput
  }

  export type user_tugasWhereUniqueInput = Prisma.AtLeast<{
    id_user_id_tugas?: user_tugasId_userId_tugasCompoundUniqueInput
    AND?: user_tugasWhereInput | user_tugasWhereInput[]
    OR?: user_tugasWhereInput[]
    NOT?: user_tugasWhereInput | user_tugasWhereInput[]
    id_user?: StringFilter<"user_tugas"> | string
    id_tugas?: StringFilter<"user_tugas"> | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    tugas?: XOR<TugasScalarRelationFilter, tugasWhereInput>
  }, "id_user_id_tugas">

  export type user_tugasOrderByWithAggregationInput = {
    id_user?: SortOrder
    id_tugas?: SortOrder
    _count?: user_tugasCountOrderByAggregateInput
    _max?: user_tugasMaxOrderByAggregateInput
    _min?: user_tugasMinOrderByAggregateInput
  }

  export type user_tugasScalarWhereWithAggregatesInput = {
    AND?: user_tugasScalarWhereWithAggregatesInput | user_tugasScalarWhereWithAggregatesInput[]
    OR?: user_tugasScalarWhereWithAggregatesInput[]
    NOT?: user_tugasScalarWhereWithAggregatesInput | user_tugasScalarWhereWithAggregatesInput[]
    id_user?: StringWithAggregatesFilter<"user_tugas"> | string
    id_tugas?: StringWithAggregatesFilter<"user_tugas"> | string
  }

  export type fileCreateInput = {
    id: string
    nama_file: string
    url: string
    tanggal_upload?: Date | string
    tugas: tugasCreateNestedOneWithoutFileInput
  }

  export type fileUncheckedCreateInput = {
    id: string
    nama_file: string
    url: string
    id_tugas: string
    tanggal_upload?: Date | string
  }

  export type fileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama_file?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    tanggal_upload?: DateTimeFieldUpdateOperationsInput | Date | string
    tugas?: tugasUpdateOneRequiredWithoutFileNestedInput
  }

  export type fileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama_file?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    id_tugas?: StringFieldUpdateOperationsInput | string
    tanggal_upload?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type fileCreateManyInput = {
    id: string
    nama_file: string
    url: string
    id_tugas: string
    tanggal_upload?: Date | string
  }

  export type fileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama_file?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    tanggal_upload?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type fileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama_file?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    id_tugas?: StringFieldUpdateOperationsInput | string
    tanggal_upload?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type laporan_bulananCreateInput = {
    id: string
    bulan: string
    tahun: number
    total_tugas: number
    tugas_selesai: number
    tugas_terlambat: number
    user: userCreateNestedOneWithoutLaporan_bulananInput
  }

  export type laporan_bulananUncheckedCreateInput = {
    id: string
    bulan: string
    tahun: number
    id_user: string
    total_tugas: number
    tugas_selesai: number
    tugas_terlambat: number
  }

  export type laporan_bulananUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bulan?: StringFieldUpdateOperationsInput | string
    tahun?: IntFieldUpdateOperationsInput | number
    total_tugas?: IntFieldUpdateOperationsInput | number
    tugas_selesai?: IntFieldUpdateOperationsInput | number
    tugas_terlambat?: IntFieldUpdateOperationsInput | number
    user?: userUpdateOneRequiredWithoutLaporan_bulananNestedInput
  }

  export type laporan_bulananUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bulan?: StringFieldUpdateOperationsInput | string
    tahun?: IntFieldUpdateOperationsInput | number
    id_user?: StringFieldUpdateOperationsInput | string
    total_tugas?: IntFieldUpdateOperationsInput | number
    tugas_selesai?: IntFieldUpdateOperationsInput | number
    tugas_terlambat?: IntFieldUpdateOperationsInput | number
  }

  export type laporan_bulananCreateManyInput = {
    id: string
    bulan: string
    tahun: number
    id_user: string
    total_tugas: number
    tugas_selesai: number
    tugas_terlambat: number
  }

  export type laporan_bulananUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bulan?: StringFieldUpdateOperationsInput | string
    tahun?: IntFieldUpdateOperationsInput | number
    total_tugas?: IntFieldUpdateOperationsInput | number
    tugas_selesai?: IntFieldUpdateOperationsInput | number
    tugas_terlambat?: IntFieldUpdateOperationsInput | number
  }

  export type laporan_bulananUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bulan?: StringFieldUpdateOperationsInput | string
    tahun?: IntFieldUpdateOperationsInput | number
    id_user?: StringFieldUpdateOperationsInput | string
    total_tugas?: IntFieldUpdateOperationsInput | number
    tugas_selesai?: IntFieldUpdateOperationsInput | number
    tugas_terlambat?: IntFieldUpdateOperationsInput | number
  }

  export type tugasCreateInput = {
    id: string
    judul: string
    brief?: string | null
    kuantitas?: number | null
    deadline?: Date | string | null
    status?: string | null
    tanggal_dibuat?: Date | string | null
    tanggal_diubah?: Date | string | null
    file?: fileCreateNestedManyWithoutTugasInput
    user?: userCreateNestedOneWithoutTugasInput
    user_tugas?: user_tugasCreateNestedManyWithoutTugasInput
  }

  export type tugasUncheckedCreateInput = {
    id: string
    judul: string
    brief?: string | null
    kuantitas?: number | null
    deadline?: Date | string | null
    status?: string | null
    id_admin?: string | null
    tanggal_dibuat?: Date | string | null
    tanggal_diubah?: Date | string | null
    file?: fileUncheckedCreateNestedManyWithoutTugasInput
    user_tugas?: user_tugasUncheckedCreateNestedManyWithoutTugasInput
  }

  export type tugasUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    brief?: NullableStringFieldUpdateOperationsInput | string | null
    kuantitas?: NullableIntFieldUpdateOperationsInput | number | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_dibuat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_diubah?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    file?: fileUpdateManyWithoutTugasNestedInput
    user?: userUpdateOneWithoutTugasNestedInput
    user_tugas?: user_tugasUpdateManyWithoutTugasNestedInput
  }

  export type tugasUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    brief?: NullableStringFieldUpdateOperationsInput | string | null
    kuantitas?: NullableIntFieldUpdateOperationsInput | number | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    id_admin?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_dibuat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_diubah?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    file?: fileUncheckedUpdateManyWithoutTugasNestedInput
    user_tugas?: user_tugasUncheckedUpdateManyWithoutTugasNestedInput
  }

  export type tugasCreateManyInput = {
    id: string
    judul: string
    brief?: string | null
    kuantitas?: number | null
    deadline?: Date | string | null
    status?: string | null
    id_admin?: string | null
    tanggal_dibuat?: Date | string | null
    tanggal_diubah?: Date | string | null
  }

  export type tugasUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    brief?: NullableStringFieldUpdateOperationsInput | string | null
    kuantitas?: NullableIntFieldUpdateOperationsInput | number | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_dibuat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_diubah?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tugasUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    brief?: NullableStringFieldUpdateOperationsInput | string | null
    kuantitas?: NullableIntFieldUpdateOperationsInput | number | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    id_admin?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_dibuat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_diubah?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userCreateInput = {
    id: string
    nama: string
    email: string
    password: string
    posisi: string
    laporan_bulanan?: laporan_bulananCreateNestedManyWithoutUserInput
    tugas?: tugasCreateNestedManyWithoutUserInput
    user_tugas?: user_tugasCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id: string
    nama: string
    email: string
    password: string
    posisi: string
    laporan_bulanan?: laporan_bulananUncheckedCreateNestedManyWithoutUserInput
    tugas?: tugasUncheckedCreateNestedManyWithoutUserInput
    user_tugas?: user_tugasUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    posisi?: StringFieldUpdateOperationsInput | string
    laporan_bulanan?: laporan_bulananUpdateManyWithoutUserNestedInput
    tugas?: tugasUpdateManyWithoutUserNestedInput
    user_tugas?: user_tugasUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    posisi?: StringFieldUpdateOperationsInput | string
    laporan_bulanan?: laporan_bulananUncheckedUpdateManyWithoutUserNestedInput
    tugas?: tugasUncheckedUpdateManyWithoutUserNestedInput
    user_tugas?: user_tugasUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id: string
    nama: string
    email: string
    password: string
    posisi: string
  }

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    posisi?: StringFieldUpdateOperationsInput | string
  }

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    posisi?: StringFieldUpdateOperationsInput | string
  }

  export type user_tugasCreateInput = {
    user: userCreateNestedOneWithoutUser_tugasInput
    tugas: tugasCreateNestedOneWithoutUser_tugasInput
  }

  export type user_tugasUncheckedCreateInput = {
    id_user: string
    id_tugas: string
  }

  export type user_tugasUpdateInput = {
    user?: userUpdateOneRequiredWithoutUser_tugasNestedInput
    tugas?: tugasUpdateOneRequiredWithoutUser_tugasNestedInput
  }

  export type user_tugasUncheckedUpdateInput = {
    id_user?: StringFieldUpdateOperationsInput | string
    id_tugas?: StringFieldUpdateOperationsInput | string
  }

  export type user_tugasCreateManyInput = {
    id_user: string
    id_tugas: string
  }

  export type user_tugasUpdateManyMutationInput = {

  }

  export type user_tugasUncheckedUpdateManyInput = {
    id_user?: StringFieldUpdateOperationsInput | string
    id_tugas?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TugasScalarRelationFilter = {
    is?: tugasWhereInput
    isNot?: tugasWhereInput
  }

  export type fileOrderByRelevanceInput = {
    fields: fileOrderByRelevanceFieldEnum | fileOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type fileCountOrderByAggregateInput = {
    id?: SortOrder
    nama_file?: SortOrder
    url?: SortOrder
    id_tugas?: SortOrder
    tanggal_upload?: SortOrder
  }

  export type fileMaxOrderByAggregateInput = {
    id?: SortOrder
    nama_file?: SortOrder
    url?: SortOrder
    id_tugas?: SortOrder
    tanggal_upload?: SortOrder
  }

  export type fileMinOrderByAggregateInput = {
    id?: SortOrder
    nama_file?: SortOrder
    url?: SortOrder
    id_tugas?: SortOrder
    tanggal_upload?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type laporan_bulananOrderByRelevanceInput = {
    fields: laporan_bulananOrderByRelevanceFieldEnum | laporan_bulananOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type laporan_bulananCountOrderByAggregateInput = {
    id?: SortOrder
    bulan?: SortOrder
    tahun?: SortOrder
    id_user?: SortOrder
    total_tugas?: SortOrder
    tugas_selesai?: SortOrder
    tugas_terlambat?: SortOrder
  }

  export type laporan_bulananAvgOrderByAggregateInput = {
    tahun?: SortOrder
    total_tugas?: SortOrder
    tugas_selesai?: SortOrder
    tugas_terlambat?: SortOrder
  }

  export type laporan_bulananMaxOrderByAggregateInput = {
    id?: SortOrder
    bulan?: SortOrder
    tahun?: SortOrder
    id_user?: SortOrder
    total_tugas?: SortOrder
    tugas_selesai?: SortOrder
    tugas_terlambat?: SortOrder
  }

  export type laporan_bulananMinOrderByAggregateInput = {
    id?: SortOrder
    bulan?: SortOrder
    tahun?: SortOrder
    id_user?: SortOrder
    total_tugas?: SortOrder
    tugas_selesai?: SortOrder
    tugas_terlambat?: SortOrder
  }

  export type laporan_bulananSumOrderByAggregateInput = {
    tahun?: SortOrder
    total_tugas?: SortOrder
    tugas_selesai?: SortOrder
    tugas_terlambat?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FileListRelationFilter = {
    every?: fileWhereInput
    some?: fileWhereInput
    none?: fileWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: userWhereInput | null
    isNot?: userWhereInput | null
  }

  export type User_tugasListRelationFilter = {
    every?: user_tugasWhereInput
    some?: user_tugasWhereInput
    none?: user_tugasWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type fileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type user_tugasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tugasOrderByRelevanceInput = {
    fields: tugasOrderByRelevanceFieldEnum | tugasOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tugasCountOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    brief?: SortOrder
    kuantitas?: SortOrder
    deadline?: SortOrder
    status?: SortOrder
    id_admin?: SortOrder
    tanggal_dibuat?: SortOrder
    tanggal_diubah?: SortOrder
  }

  export type tugasAvgOrderByAggregateInput = {
    kuantitas?: SortOrder
  }

  export type tugasMaxOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    brief?: SortOrder
    kuantitas?: SortOrder
    deadline?: SortOrder
    status?: SortOrder
    id_admin?: SortOrder
    tanggal_dibuat?: SortOrder
    tanggal_diubah?: SortOrder
  }

  export type tugasMinOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    brief?: SortOrder
    kuantitas?: SortOrder
    deadline?: SortOrder
    status?: SortOrder
    id_admin?: SortOrder
    tanggal_dibuat?: SortOrder
    tanggal_diubah?: SortOrder
  }

  export type tugasSumOrderByAggregateInput = {
    kuantitas?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type Laporan_bulananListRelationFilter = {
    every?: laporan_bulananWhereInput
    some?: laporan_bulananWhereInput
    none?: laporan_bulananWhereInput
  }

  export type TugasListRelationFilter = {
    every?: tugasWhereInput
    some?: tugasWhereInput
    none?: tugasWhereInput
  }

  export type laporan_bulananOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tugasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userOrderByRelevanceInput = {
    fields: userOrderByRelevanceFieldEnum | userOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    password?: SortOrder
    posisi?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    password?: SortOrder
    posisi?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    password?: SortOrder
    posisi?: SortOrder
  }

  export type user_tugasOrderByRelevanceInput = {
    fields: user_tugasOrderByRelevanceFieldEnum | user_tugasOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type user_tugasId_userId_tugasCompoundUniqueInput = {
    id_user: string
    id_tugas: string
  }

  export type user_tugasCountOrderByAggregateInput = {
    id_user?: SortOrder
    id_tugas?: SortOrder
  }

  export type user_tugasMaxOrderByAggregateInput = {
    id_user?: SortOrder
    id_tugas?: SortOrder
  }

  export type user_tugasMinOrderByAggregateInput = {
    id_user?: SortOrder
    id_tugas?: SortOrder
  }

  export type tugasCreateNestedOneWithoutFileInput = {
    create?: XOR<tugasCreateWithoutFileInput, tugasUncheckedCreateWithoutFileInput>
    connectOrCreate?: tugasCreateOrConnectWithoutFileInput
    connect?: tugasWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type tugasUpdateOneRequiredWithoutFileNestedInput = {
    create?: XOR<tugasCreateWithoutFileInput, tugasUncheckedCreateWithoutFileInput>
    connectOrCreate?: tugasCreateOrConnectWithoutFileInput
    upsert?: tugasUpsertWithoutFileInput
    connect?: tugasWhereUniqueInput
    update?: XOR<XOR<tugasUpdateToOneWithWhereWithoutFileInput, tugasUpdateWithoutFileInput>, tugasUncheckedUpdateWithoutFileInput>
  }

  export type userCreateNestedOneWithoutLaporan_bulananInput = {
    create?: XOR<userCreateWithoutLaporan_bulananInput, userUncheckedCreateWithoutLaporan_bulananInput>
    connectOrCreate?: userCreateOrConnectWithoutLaporan_bulananInput
    connect?: userWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type userUpdateOneRequiredWithoutLaporan_bulananNestedInput = {
    create?: XOR<userCreateWithoutLaporan_bulananInput, userUncheckedCreateWithoutLaporan_bulananInput>
    connectOrCreate?: userCreateOrConnectWithoutLaporan_bulananInput
    upsert?: userUpsertWithoutLaporan_bulananInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutLaporan_bulananInput, userUpdateWithoutLaporan_bulananInput>, userUncheckedUpdateWithoutLaporan_bulananInput>
  }

  export type fileCreateNestedManyWithoutTugasInput = {
    create?: XOR<fileCreateWithoutTugasInput, fileUncheckedCreateWithoutTugasInput> | fileCreateWithoutTugasInput[] | fileUncheckedCreateWithoutTugasInput[]
    connectOrCreate?: fileCreateOrConnectWithoutTugasInput | fileCreateOrConnectWithoutTugasInput[]
    createMany?: fileCreateManyTugasInputEnvelope
    connect?: fileWhereUniqueInput | fileWhereUniqueInput[]
  }

  export type userCreateNestedOneWithoutTugasInput = {
    create?: XOR<userCreateWithoutTugasInput, userUncheckedCreateWithoutTugasInput>
    connectOrCreate?: userCreateOrConnectWithoutTugasInput
    connect?: userWhereUniqueInput
  }

  export type user_tugasCreateNestedManyWithoutTugasInput = {
    create?: XOR<user_tugasCreateWithoutTugasInput, user_tugasUncheckedCreateWithoutTugasInput> | user_tugasCreateWithoutTugasInput[] | user_tugasUncheckedCreateWithoutTugasInput[]
    connectOrCreate?: user_tugasCreateOrConnectWithoutTugasInput | user_tugasCreateOrConnectWithoutTugasInput[]
    createMany?: user_tugasCreateManyTugasInputEnvelope
    connect?: user_tugasWhereUniqueInput | user_tugasWhereUniqueInput[]
  }

  export type fileUncheckedCreateNestedManyWithoutTugasInput = {
    create?: XOR<fileCreateWithoutTugasInput, fileUncheckedCreateWithoutTugasInput> | fileCreateWithoutTugasInput[] | fileUncheckedCreateWithoutTugasInput[]
    connectOrCreate?: fileCreateOrConnectWithoutTugasInput | fileCreateOrConnectWithoutTugasInput[]
    createMany?: fileCreateManyTugasInputEnvelope
    connect?: fileWhereUniqueInput | fileWhereUniqueInput[]
  }

  export type user_tugasUncheckedCreateNestedManyWithoutTugasInput = {
    create?: XOR<user_tugasCreateWithoutTugasInput, user_tugasUncheckedCreateWithoutTugasInput> | user_tugasCreateWithoutTugasInput[] | user_tugasUncheckedCreateWithoutTugasInput[]
    connectOrCreate?: user_tugasCreateOrConnectWithoutTugasInput | user_tugasCreateOrConnectWithoutTugasInput[]
    createMany?: user_tugasCreateManyTugasInputEnvelope
    connect?: user_tugasWhereUniqueInput | user_tugasWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type fileUpdateManyWithoutTugasNestedInput = {
    create?: XOR<fileCreateWithoutTugasInput, fileUncheckedCreateWithoutTugasInput> | fileCreateWithoutTugasInput[] | fileUncheckedCreateWithoutTugasInput[]
    connectOrCreate?: fileCreateOrConnectWithoutTugasInput | fileCreateOrConnectWithoutTugasInput[]
    upsert?: fileUpsertWithWhereUniqueWithoutTugasInput | fileUpsertWithWhereUniqueWithoutTugasInput[]
    createMany?: fileCreateManyTugasInputEnvelope
    set?: fileWhereUniqueInput | fileWhereUniqueInput[]
    disconnect?: fileWhereUniqueInput | fileWhereUniqueInput[]
    delete?: fileWhereUniqueInput | fileWhereUniqueInput[]
    connect?: fileWhereUniqueInput | fileWhereUniqueInput[]
    update?: fileUpdateWithWhereUniqueWithoutTugasInput | fileUpdateWithWhereUniqueWithoutTugasInput[]
    updateMany?: fileUpdateManyWithWhereWithoutTugasInput | fileUpdateManyWithWhereWithoutTugasInput[]
    deleteMany?: fileScalarWhereInput | fileScalarWhereInput[]
  }

  export type userUpdateOneWithoutTugasNestedInput = {
    create?: XOR<userCreateWithoutTugasInput, userUncheckedCreateWithoutTugasInput>
    connectOrCreate?: userCreateOrConnectWithoutTugasInput
    upsert?: userUpsertWithoutTugasInput
    disconnect?: userWhereInput | boolean
    delete?: userWhereInput | boolean
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutTugasInput, userUpdateWithoutTugasInput>, userUncheckedUpdateWithoutTugasInput>
  }

  export type user_tugasUpdateManyWithoutTugasNestedInput = {
    create?: XOR<user_tugasCreateWithoutTugasInput, user_tugasUncheckedCreateWithoutTugasInput> | user_tugasCreateWithoutTugasInput[] | user_tugasUncheckedCreateWithoutTugasInput[]
    connectOrCreate?: user_tugasCreateOrConnectWithoutTugasInput | user_tugasCreateOrConnectWithoutTugasInput[]
    upsert?: user_tugasUpsertWithWhereUniqueWithoutTugasInput | user_tugasUpsertWithWhereUniqueWithoutTugasInput[]
    createMany?: user_tugasCreateManyTugasInputEnvelope
    set?: user_tugasWhereUniqueInput | user_tugasWhereUniqueInput[]
    disconnect?: user_tugasWhereUniqueInput | user_tugasWhereUniqueInput[]
    delete?: user_tugasWhereUniqueInput | user_tugasWhereUniqueInput[]
    connect?: user_tugasWhereUniqueInput | user_tugasWhereUniqueInput[]
    update?: user_tugasUpdateWithWhereUniqueWithoutTugasInput | user_tugasUpdateWithWhereUniqueWithoutTugasInput[]
    updateMany?: user_tugasUpdateManyWithWhereWithoutTugasInput | user_tugasUpdateManyWithWhereWithoutTugasInput[]
    deleteMany?: user_tugasScalarWhereInput | user_tugasScalarWhereInput[]
  }

  export type fileUncheckedUpdateManyWithoutTugasNestedInput = {
    create?: XOR<fileCreateWithoutTugasInput, fileUncheckedCreateWithoutTugasInput> | fileCreateWithoutTugasInput[] | fileUncheckedCreateWithoutTugasInput[]
    connectOrCreate?: fileCreateOrConnectWithoutTugasInput | fileCreateOrConnectWithoutTugasInput[]
    upsert?: fileUpsertWithWhereUniqueWithoutTugasInput | fileUpsertWithWhereUniqueWithoutTugasInput[]
    createMany?: fileCreateManyTugasInputEnvelope
    set?: fileWhereUniqueInput | fileWhereUniqueInput[]
    disconnect?: fileWhereUniqueInput | fileWhereUniqueInput[]
    delete?: fileWhereUniqueInput | fileWhereUniqueInput[]
    connect?: fileWhereUniqueInput | fileWhereUniqueInput[]
    update?: fileUpdateWithWhereUniqueWithoutTugasInput | fileUpdateWithWhereUniqueWithoutTugasInput[]
    updateMany?: fileUpdateManyWithWhereWithoutTugasInput | fileUpdateManyWithWhereWithoutTugasInput[]
    deleteMany?: fileScalarWhereInput | fileScalarWhereInput[]
  }

  export type user_tugasUncheckedUpdateManyWithoutTugasNestedInput = {
    create?: XOR<user_tugasCreateWithoutTugasInput, user_tugasUncheckedCreateWithoutTugasInput> | user_tugasCreateWithoutTugasInput[] | user_tugasUncheckedCreateWithoutTugasInput[]
    connectOrCreate?: user_tugasCreateOrConnectWithoutTugasInput | user_tugasCreateOrConnectWithoutTugasInput[]
    upsert?: user_tugasUpsertWithWhereUniqueWithoutTugasInput | user_tugasUpsertWithWhereUniqueWithoutTugasInput[]
    createMany?: user_tugasCreateManyTugasInputEnvelope
    set?: user_tugasWhereUniqueInput | user_tugasWhereUniqueInput[]
    disconnect?: user_tugasWhereUniqueInput | user_tugasWhereUniqueInput[]
    delete?: user_tugasWhereUniqueInput | user_tugasWhereUniqueInput[]
    connect?: user_tugasWhereUniqueInput | user_tugasWhereUniqueInput[]
    update?: user_tugasUpdateWithWhereUniqueWithoutTugasInput | user_tugasUpdateWithWhereUniqueWithoutTugasInput[]
    updateMany?: user_tugasUpdateManyWithWhereWithoutTugasInput | user_tugasUpdateManyWithWhereWithoutTugasInput[]
    deleteMany?: user_tugasScalarWhereInput | user_tugasScalarWhereInput[]
  }

  export type laporan_bulananCreateNestedManyWithoutUserInput = {
    create?: XOR<laporan_bulananCreateWithoutUserInput, laporan_bulananUncheckedCreateWithoutUserInput> | laporan_bulananCreateWithoutUserInput[] | laporan_bulananUncheckedCreateWithoutUserInput[]
    connectOrCreate?: laporan_bulananCreateOrConnectWithoutUserInput | laporan_bulananCreateOrConnectWithoutUserInput[]
    createMany?: laporan_bulananCreateManyUserInputEnvelope
    connect?: laporan_bulananWhereUniqueInput | laporan_bulananWhereUniqueInput[]
  }

  export type tugasCreateNestedManyWithoutUserInput = {
    create?: XOR<tugasCreateWithoutUserInput, tugasUncheckedCreateWithoutUserInput> | tugasCreateWithoutUserInput[] | tugasUncheckedCreateWithoutUserInput[]
    connectOrCreate?: tugasCreateOrConnectWithoutUserInput | tugasCreateOrConnectWithoutUserInput[]
    createMany?: tugasCreateManyUserInputEnvelope
    connect?: tugasWhereUniqueInput | tugasWhereUniqueInput[]
  }

  export type user_tugasCreateNestedManyWithoutUserInput = {
    create?: XOR<user_tugasCreateWithoutUserInput, user_tugasUncheckedCreateWithoutUserInput> | user_tugasCreateWithoutUserInput[] | user_tugasUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_tugasCreateOrConnectWithoutUserInput | user_tugasCreateOrConnectWithoutUserInput[]
    createMany?: user_tugasCreateManyUserInputEnvelope
    connect?: user_tugasWhereUniqueInput | user_tugasWhereUniqueInput[]
  }

  export type laporan_bulananUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<laporan_bulananCreateWithoutUserInput, laporan_bulananUncheckedCreateWithoutUserInput> | laporan_bulananCreateWithoutUserInput[] | laporan_bulananUncheckedCreateWithoutUserInput[]
    connectOrCreate?: laporan_bulananCreateOrConnectWithoutUserInput | laporan_bulananCreateOrConnectWithoutUserInput[]
    createMany?: laporan_bulananCreateManyUserInputEnvelope
    connect?: laporan_bulananWhereUniqueInput | laporan_bulananWhereUniqueInput[]
  }

  export type tugasUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<tugasCreateWithoutUserInput, tugasUncheckedCreateWithoutUserInput> | tugasCreateWithoutUserInput[] | tugasUncheckedCreateWithoutUserInput[]
    connectOrCreate?: tugasCreateOrConnectWithoutUserInput | tugasCreateOrConnectWithoutUserInput[]
    createMany?: tugasCreateManyUserInputEnvelope
    connect?: tugasWhereUniqueInput | tugasWhereUniqueInput[]
  }

  export type user_tugasUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<user_tugasCreateWithoutUserInput, user_tugasUncheckedCreateWithoutUserInput> | user_tugasCreateWithoutUserInput[] | user_tugasUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_tugasCreateOrConnectWithoutUserInput | user_tugasCreateOrConnectWithoutUserInput[]
    createMany?: user_tugasCreateManyUserInputEnvelope
    connect?: user_tugasWhereUniqueInput | user_tugasWhereUniqueInput[]
  }

  export type laporan_bulananUpdateManyWithoutUserNestedInput = {
    create?: XOR<laporan_bulananCreateWithoutUserInput, laporan_bulananUncheckedCreateWithoutUserInput> | laporan_bulananCreateWithoutUserInput[] | laporan_bulananUncheckedCreateWithoutUserInput[]
    connectOrCreate?: laporan_bulananCreateOrConnectWithoutUserInput | laporan_bulananCreateOrConnectWithoutUserInput[]
    upsert?: laporan_bulananUpsertWithWhereUniqueWithoutUserInput | laporan_bulananUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: laporan_bulananCreateManyUserInputEnvelope
    set?: laporan_bulananWhereUniqueInput | laporan_bulananWhereUniqueInput[]
    disconnect?: laporan_bulananWhereUniqueInput | laporan_bulananWhereUniqueInput[]
    delete?: laporan_bulananWhereUniqueInput | laporan_bulananWhereUniqueInput[]
    connect?: laporan_bulananWhereUniqueInput | laporan_bulananWhereUniqueInput[]
    update?: laporan_bulananUpdateWithWhereUniqueWithoutUserInput | laporan_bulananUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: laporan_bulananUpdateManyWithWhereWithoutUserInput | laporan_bulananUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: laporan_bulananScalarWhereInput | laporan_bulananScalarWhereInput[]
  }

  export type tugasUpdateManyWithoutUserNestedInput = {
    create?: XOR<tugasCreateWithoutUserInput, tugasUncheckedCreateWithoutUserInput> | tugasCreateWithoutUserInput[] | tugasUncheckedCreateWithoutUserInput[]
    connectOrCreate?: tugasCreateOrConnectWithoutUserInput | tugasCreateOrConnectWithoutUserInput[]
    upsert?: tugasUpsertWithWhereUniqueWithoutUserInput | tugasUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: tugasCreateManyUserInputEnvelope
    set?: tugasWhereUniqueInput | tugasWhereUniqueInput[]
    disconnect?: tugasWhereUniqueInput | tugasWhereUniqueInput[]
    delete?: tugasWhereUniqueInput | tugasWhereUniqueInput[]
    connect?: tugasWhereUniqueInput | tugasWhereUniqueInput[]
    update?: tugasUpdateWithWhereUniqueWithoutUserInput | tugasUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: tugasUpdateManyWithWhereWithoutUserInput | tugasUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: tugasScalarWhereInput | tugasScalarWhereInput[]
  }

  export type user_tugasUpdateManyWithoutUserNestedInput = {
    create?: XOR<user_tugasCreateWithoutUserInput, user_tugasUncheckedCreateWithoutUserInput> | user_tugasCreateWithoutUserInput[] | user_tugasUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_tugasCreateOrConnectWithoutUserInput | user_tugasCreateOrConnectWithoutUserInput[]
    upsert?: user_tugasUpsertWithWhereUniqueWithoutUserInput | user_tugasUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: user_tugasCreateManyUserInputEnvelope
    set?: user_tugasWhereUniqueInput | user_tugasWhereUniqueInput[]
    disconnect?: user_tugasWhereUniqueInput | user_tugasWhereUniqueInput[]
    delete?: user_tugasWhereUniqueInput | user_tugasWhereUniqueInput[]
    connect?: user_tugasWhereUniqueInput | user_tugasWhereUniqueInput[]
    update?: user_tugasUpdateWithWhereUniqueWithoutUserInput | user_tugasUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: user_tugasUpdateManyWithWhereWithoutUserInput | user_tugasUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: user_tugasScalarWhereInput | user_tugasScalarWhereInput[]
  }

  export type laporan_bulananUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<laporan_bulananCreateWithoutUserInput, laporan_bulananUncheckedCreateWithoutUserInput> | laporan_bulananCreateWithoutUserInput[] | laporan_bulananUncheckedCreateWithoutUserInput[]
    connectOrCreate?: laporan_bulananCreateOrConnectWithoutUserInput | laporan_bulananCreateOrConnectWithoutUserInput[]
    upsert?: laporan_bulananUpsertWithWhereUniqueWithoutUserInput | laporan_bulananUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: laporan_bulananCreateManyUserInputEnvelope
    set?: laporan_bulananWhereUniqueInput | laporan_bulananWhereUniqueInput[]
    disconnect?: laporan_bulananWhereUniqueInput | laporan_bulananWhereUniqueInput[]
    delete?: laporan_bulananWhereUniqueInput | laporan_bulananWhereUniqueInput[]
    connect?: laporan_bulananWhereUniqueInput | laporan_bulananWhereUniqueInput[]
    update?: laporan_bulananUpdateWithWhereUniqueWithoutUserInput | laporan_bulananUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: laporan_bulananUpdateManyWithWhereWithoutUserInput | laporan_bulananUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: laporan_bulananScalarWhereInput | laporan_bulananScalarWhereInput[]
  }

  export type tugasUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<tugasCreateWithoutUserInput, tugasUncheckedCreateWithoutUserInput> | tugasCreateWithoutUserInput[] | tugasUncheckedCreateWithoutUserInput[]
    connectOrCreate?: tugasCreateOrConnectWithoutUserInput | tugasCreateOrConnectWithoutUserInput[]
    upsert?: tugasUpsertWithWhereUniqueWithoutUserInput | tugasUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: tugasCreateManyUserInputEnvelope
    set?: tugasWhereUniqueInput | tugasWhereUniqueInput[]
    disconnect?: tugasWhereUniqueInput | tugasWhereUniqueInput[]
    delete?: tugasWhereUniqueInput | tugasWhereUniqueInput[]
    connect?: tugasWhereUniqueInput | tugasWhereUniqueInput[]
    update?: tugasUpdateWithWhereUniqueWithoutUserInput | tugasUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: tugasUpdateManyWithWhereWithoutUserInput | tugasUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: tugasScalarWhereInput | tugasScalarWhereInput[]
  }

  export type user_tugasUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<user_tugasCreateWithoutUserInput, user_tugasUncheckedCreateWithoutUserInput> | user_tugasCreateWithoutUserInput[] | user_tugasUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_tugasCreateOrConnectWithoutUserInput | user_tugasCreateOrConnectWithoutUserInput[]
    upsert?: user_tugasUpsertWithWhereUniqueWithoutUserInput | user_tugasUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: user_tugasCreateManyUserInputEnvelope
    set?: user_tugasWhereUniqueInput | user_tugasWhereUniqueInput[]
    disconnect?: user_tugasWhereUniqueInput | user_tugasWhereUniqueInput[]
    delete?: user_tugasWhereUniqueInput | user_tugasWhereUniqueInput[]
    connect?: user_tugasWhereUniqueInput | user_tugasWhereUniqueInput[]
    update?: user_tugasUpdateWithWhereUniqueWithoutUserInput | user_tugasUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: user_tugasUpdateManyWithWhereWithoutUserInput | user_tugasUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: user_tugasScalarWhereInput | user_tugasScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutUser_tugasInput = {
    create?: XOR<userCreateWithoutUser_tugasInput, userUncheckedCreateWithoutUser_tugasInput>
    connectOrCreate?: userCreateOrConnectWithoutUser_tugasInput
    connect?: userWhereUniqueInput
  }

  export type tugasCreateNestedOneWithoutUser_tugasInput = {
    create?: XOR<tugasCreateWithoutUser_tugasInput, tugasUncheckedCreateWithoutUser_tugasInput>
    connectOrCreate?: tugasCreateOrConnectWithoutUser_tugasInput
    connect?: tugasWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutUser_tugasNestedInput = {
    create?: XOR<userCreateWithoutUser_tugasInput, userUncheckedCreateWithoutUser_tugasInput>
    connectOrCreate?: userCreateOrConnectWithoutUser_tugasInput
    upsert?: userUpsertWithoutUser_tugasInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutUser_tugasInput, userUpdateWithoutUser_tugasInput>, userUncheckedUpdateWithoutUser_tugasInput>
  }

  export type tugasUpdateOneRequiredWithoutUser_tugasNestedInput = {
    create?: XOR<tugasCreateWithoutUser_tugasInput, tugasUncheckedCreateWithoutUser_tugasInput>
    connectOrCreate?: tugasCreateOrConnectWithoutUser_tugasInput
    upsert?: tugasUpsertWithoutUser_tugasInput
    connect?: tugasWhereUniqueInput
    update?: XOR<XOR<tugasUpdateToOneWithWhereWithoutUser_tugasInput, tugasUpdateWithoutUser_tugasInput>, tugasUncheckedUpdateWithoutUser_tugasInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type tugasCreateWithoutFileInput = {
    id: string
    judul: string
    brief?: string | null
    kuantitas?: number | null
    deadline?: Date | string | null
    status?: string | null
    tanggal_dibuat?: Date | string | null
    tanggal_diubah?: Date | string | null
    user?: userCreateNestedOneWithoutTugasInput
    user_tugas?: user_tugasCreateNestedManyWithoutTugasInput
  }

  export type tugasUncheckedCreateWithoutFileInput = {
    id: string
    judul: string
    brief?: string | null
    kuantitas?: number | null
    deadline?: Date | string | null
    status?: string | null
    id_admin?: string | null
    tanggal_dibuat?: Date | string | null
    tanggal_diubah?: Date | string | null
    user_tugas?: user_tugasUncheckedCreateNestedManyWithoutTugasInput
  }

  export type tugasCreateOrConnectWithoutFileInput = {
    where: tugasWhereUniqueInput
    create: XOR<tugasCreateWithoutFileInput, tugasUncheckedCreateWithoutFileInput>
  }

  export type tugasUpsertWithoutFileInput = {
    update: XOR<tugasUpdateWithoutFileInput, tugasUncheckedUpdateWithoutFileInput>
    create: XOR<tugasCreateWithoutFileInput, tugasUncheckedCreateWithoutFileInput>
    where?: tugasWhereInput
  }

  export type tugasUpdateToOneWithWhereWithoutFileInput = {
    where?: tugasWhereInput
    data: XOR<tugasUpdateWithoutFileInput, tugasUncheckedUpdateWithoutFileInput>
  }

  export type tugasUpdateWithoutFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    brief?: NullableStringFieldUpdateOperationsInput | string | null
    kuantitas?: NullableIntFieldUpdateOperationsInput | number | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_dibuat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_diubah?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneWithoutTugasNestedInput
    user_tugas?: user_tugasUpdateManyWithoutTugasNestedInput
  }

  export type tugasUncheckedUpdateWithoutFileInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    brief?: NullableStringFieldUpdateOperationsInput | string | null
    kuantitas?: NullableIntFieldUpdateOperationsInput | number | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    id_admin?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_dibuat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_diubah?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_tugas?: user_tugasUncheckedUpdateManyWithoutTugasNestedInput
  }

  export type userCreateWithoutLaporan_bulananInput = {
    id: string
    nama: string
    email: string
    password: string
    posisi: string
    tugas?: tugasCreateNestedManyWithoutUserInput
    user_tugas?: user_tugasCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutLaporan_bulananInput = {
    id: string
    nama: string
    email: string
    password: string
    posisi: string
    tugas?: tugasUncheckedCreateNestedManyWithoutUserInput
    user_tugas?: user_tugasUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutLaporan_bulananInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutLaporan_bulananInput, userUncheckedCreateWithoutLaporan_bulananInput>
  }

  export type userUpsertWithoutLaporan_bulananInput = {
    update: XOR<userUpdateWithoutLaporan_bulananInput, userUncheckedUpdateWithoutLaporan_bulananInput>
    create: XOR<userCreateWithoutLaporan_bulananInput, userUncheckedCreateWithoutLaporan_bulananInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutLaporan_bulananInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutLaporan_bulananInput, userUncheckedUpdateWithoutLaporan_bulananInput>
  }

  export type userUpdateWithoutLaporan_bulananInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    posisi?: StringFieldUpdateOperationsInput | string
    tugas?: tugasUpdateManyWithoutUserNestedInput
    user_tugas?: user_tugasUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutLaporan_bulananInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    posisi?: StringFieldUpdateOperationsInput | string
    tugas?: tugasUncheckedUpdateManyWithoutUserNestedInput
    user_tugas?: user_tugasUncheckedUpdateManyWithoutUserNestedInput
  }

  export type fileCreateWithoutTugasInput = {
    id: string
    nama_file: string
    url: string
    tanggal_upload?: Date | string
  }

  export type fileUncheckedCreateWithoutTugasInput = {
    id: string
    nama_file: string
    url: string
    tanggal_upload?: Date | string
  }

  export type fileCreateOrConnectWithoutTugasInput = {
    where: fileWhereUniqueInput
    create: XOR<fileCreateWithoutTugasInput, fileUncheckedCreateWithoutTugasInput>
  }

  export type fileCreateManyTugasInputEnvelope = {
    data: fileCreateManyTugasInput | fileCreateManyTugasInput[]
    skipDuplicates?: boolean
  }

  export type userCreateWithoutTugasInput = {
    id: string
    nama: string
    email: string
    password: string
    posisi: string
    laporan_bulanan?: laporan_bulananCreateNestedManyWithoutUserInput
    user_tugas?: user_tugasCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutTugasInput = {
    id: string
    nama: string
    email: string
    password: string
    posisi: string
    laporan_bulanan?: laporan_bulananUncheckedCreateNestedManyWithoutUserInput
    user_tugas?: user_tugasUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutTugasInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutTugasInput, userUncheckedCreateWithoutTugasInput>
  }

  export type user_tugasCreateWithoutTugasInput = {
    user: userCreateNestedOneWithoutUser_tugasInput
  }

  export type user_tugasUncheckedCreateWithoutTugasInput = {
    id_user: string
  }

  export type user_tugasCreateOrConnectWithoutTugasInput = {
    where: user_tugasWhereUniqueInput
    create: XOR<user_tugasCreateWithoutTugasInput, user_tugasUncheckedCreateWithoutTugasInput>
  }

  export type user_tugasCreateManyTugasInputEnvelope = {
    data: user_tugasCreateManyTugasInput | user_tugasCreateManyTugasInput[]
    skipDuplicates?: boolean
  }

  export type fileUpsertWithWhereUniqueWithoutTugasInput = {
    where: fileWhereUniqueInput
    update: XOR<fileUpdateWithoutTugasInput, fileUncheckedUpdateWithoutTugasInput>
    create: XOR<fileCreateWithoutTugasInput, fileUncheckedCreateWithoutTugasInput>
  }

  export type fileUpdateWithWhereUniqueWithoutTugasInput = {
    where: fileWhereUniqueInput
    data: XOR<fileUpdateWithoutTugasInput, fileUncheckedUpdateWithoutTugasInput>
  }

  export type fileUpdateManyWithWhereWithoutTugasInput = {
    where: fileScalarWhereInput
    data: XOR<fileUpdateManyMutationInput, fileUncheckedUpdateManyWithoutTugasInput>
  }

  export type fileScalarWhereInput = {
    AND?: fileScalarWhereInput | fileScalarWhereInput[]
    OR?: fileScalarWhereInput[]
    NOT?: fileScalarWhereInput | fileScalarWhereInput[]
    id?: StringFilter<"file"> | string
    nama_file?: StringFilter<"file"> | string
    url?: StringFilter<"file"> | string
    id_tugas?: StringFilter<"file"> | string
    tanggal_upload?: DateTimeFilter<"file"> | Date | string
  }

  export type userUpsertWithoutTugasInput = {
    update: XOR<userUpdateWithoutTugasInput, userUncheckedUpdateWithoutTugasInput>
    create: XOR<userCreateWithoutTugasInput, userUncheckedCreateWithoutTugasInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutTugasInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutTugasInput, userUncheckedUpdateWithoutTugasInput>
  }

  export type userUpdateWithoutTugasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    posisi?: StringFieldUpdateOperationsInput | string
    laporan_bulanan?: laporan_bulananUpdateManyWithoutUserNestedInput
    user_tugas?: user_tugasUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutTugasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    posisi?: StringFieldUpdateOperationsInput | string
    laporan_bulanan?: laporan_bulananUncheckedUpdateManyWithoutUserNestedInput
    user_tugas?: user_tugasUncheckedUpdateManyWithoutUserNestedInput
  }

  export type user_tugasUpsertWithWhereUniqueWithoutTugasInput = {
    where: user_tugasWhereUniqueInput
    update: XOR<user_tugasUpdateWithoutTugasInput, user_tugasUncheckedUpdateWithoutTugasInput>
    create: XOR<user_tugasCreateWithoutTugasInput, user_tugasUncheckedCreateWithoutTugasInput>
  }

  export type user_tugasUpdateWithWhereUniqueWithoutTugasInput = {
    where: user_tugasWhereUniqueInput
    data: XOR<user_tugasUpdateWithoutTugasInput, user_tugasUncheckedUpdateWithoutTugasInput>
  }

  export type user_tugasUpdateManyWithWhereWithoutTugasInput = {
    where: user_tugasScalarWhereInput
    data: XOR<user_tugasUpdateManyMutationInput, user_tugasUncheckedUpdateManyWithoutTugasInput>
  }

  export type user_tugasScalarWhereInput = {
    AND?: user_tugasScalarWhereInput | user_tugasScalarWhereInput[]
    OR?: user_tugasScalarWhereInput[]
    NOT?: user_tugasScalarWhereInput | user_tugasScalarWhereInput[]
    id_user?: StringFilter<"user_tugas"> | string
    id_tugas?: StringFilter<"user_tugas"> | string
  }

  export type laporan_bulananCreateWithoutUserInput = {
    id: string
    bulan: string
    tahun: number
    total_tugas: number
    tugas_selesai: number
    tugas_terlambat: number
  }

  export type laporan_bulananUncheckedCreateWithoutUserInput = {
    id: string
    bulan: string
    tahun: number
    total_tugas: number
    tugas_selesai: number
    tugas_terlambat: number
  }

  export type laporan_bulananCreateOrConnectWithoutUserInput = {
    where: laporan_bulananWhereUniqueInput
    create: XOR<laporan_bulananCreateWithoutUserInput, laporan_bulananUncheckedCreateWithoutUserInput>
  }

  export type laporan_bulananCreateManyUserInputEnvelope = {
    data: laporan_bulananCreateManyUserInput | laporan_bulananCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type tugasCreateWithoutUserInput = {
    id: string
    judul: string
    brief?: string | null
    kuantitas?: number | null
    deadline?: Date | string | null
    status?: string | null
    tanggal_dibuat?: Date | string | null
    tanggal_diubah?: Date | string | null
    file?: fileCreateNestedManyWithoutTugasInput
    user_tugas?: user_tugasCreateNestedManyWithoutTugasInput
  }

  export type tugasUncheckedCreateWithoutUserInput = {
    id: string
    judul: string
    brief?: string | null
    kuantitas?: number | null
    deadline?: Date | string | null
    status?: string | null
    tanggal_dibuat?: Date | string | null
    tanggal_diubah?: Date | string | null
    file?: fileUncheckedCreateNestedManyWithoutTugasInput
    user_tugas?: user_tugasUncheckedCreateNestedManyWithoutTugasInput
  }

  export type tugasCreateOrConnectWithoutUserInput = {
    where: tugasWhereUniqueInput
    create: XOR<tugasCreateWithoutUserInput, tugasUncheckedCreateWithoutUserInput>
  }

  export type tugasCreateManyUserInputEnvelope = {
    data: tugasCreateManyUserInput | tugasCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type user_tugasCreateWithoutUserInput = {
    tugas: tugasCreateNestedOneWithoutUser_tugasInput
  }

  export type user_tugasUncheckedCreateWithoutUserInput = {
    id_tugas: string
  }

  export type user_tugasCreateOrConnectWithoutUserInput = {
    where: user_tugasWhereUniqueInput
    create: XOR<user_tugasCreateWithoutUserInput, user_tugasUncheckedCreateWithoutUserInput>
  }

  export type user_tugasCreateManyUserInputEnvelope = {
    data: user_tugasCreateManyUserInput | user_tugasCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type laporan_bulananUpsertWithWhereUniqueWithoutUserInput = {
    where: laporan_bulananWhereUniqueInput
    update: XOR<laporan_bulananUpdateWithoutUserInput, laporan_bulananUncheckedUpdateWithoutUserInput>
    create: XOR<laporan_bulananCreateWithoutUserInput, laporan_bulananUncheckedCreateWithoutUserInput>
  }

  export type laporan_bulananUpdateWithWhereUniqueWithoutUserInput = {
    where: laporan_bulananWhereUniqueInput
    data: XOR<laporan_bulananUpdateWithoutUserInput, laporan_bulananUncheckedUpdateWithoutUserInput>
  }

  export type laporan_bulananUpdateManyWithWhereWithoutUserInput = {
    where: laporan_bulananScalarWhereInput
    data: XOR<laporan_bulananUpdateManyMutationInput, laporan_bulananUncheckedUpdateManyWithoutUserInput>
  }

  export type laporan_bulananScalarWhereInput = {
    AND?: laporan_bulananScalarWhereInput | laporan_bulananScalarWhereInput[]
    OR?: laporan_bulananScalarWhereInput[]
    NOT?: laporan_bulananScalarWhereInput | laporan_bulananScalarWhereInput[]
    id?: StringFilter<"laporan_bulanan"> | string
    bulan?: StringFilter<"laporan_bulanan"> | string
    tahun?: IntFilter<"laporan_bulanan"> | number
    id_user?: StringFilter<"laporan_bulanan"> | string
    total_tugas?: IntFilter<"laporan_bulanan"> | number
    tugas_selesai?: IntFilter<"laporan_bulanan"> | number
    tugas_terlambat?: IntFilter<"laporan_bulanan"> | number
  }

  export type tugasUpsertWithWhereUniqueWithoutUserInput = {
    where: tugasWhereUniqueInput
    update: XOR<tugasUpdateWithoutUserInput, tugasUncheckedUpdateWithoutUserInput>
    create: XOR<tugasCreateWithoutUserInput, tugasUncheckedCreateWithoutUserInput>
  }

  export type tugasUpdateWithWhereUniqueWithoutUserInput = {
    where: tugasWhereUniqueInput
    data: XOR<tugasUpdateWithoutUserInput, tugasUncheckedUpdateWithoutUserInput>
  }

  export type tugasUpdateManyWithWhereWithoutUserInput = {
    where: tugasScalarWhereInput
    data: XOR<tugasUpdateManyMutationInput, tugasUncheckedUpdateManyWithoutUserInput>
  }

  export type tugasScalarWhereInput = {
    AND?: tugasScalarWhereInput | tugasScalarWhereInput[]
    OR?: tugasScalarWhereInput[]
    NOT?: tugasScalarWhereInput | tugasScalarWhereInput[]
    id?: StringFilter<"tugas"> | string
    judul?: StringFilter<"tugas"> | string
    brief?: StringNullableFilter<"tugas"> | string | null
    kuantitas?: IntNullableFilter<"tugas"> | number | null
    deadline?: DateTimeNullableFilter<"tugas"> | Date | string | null
    status?: StringNullableFilter<"tugas"> | string | null
    id_admin?: StringNullableFilter<"tugas"> | string | null
    tanggal_dibuat?: DateTimeNullableFilter<"tugas"> | Date | string | null
    tanggal_diubah?: DateTimeNullableFilter<"tugas"> | Date | string | null
  }

  export type user_tugasUpsertWithWhereUniqueWithoutUserInput = {
    where: user_tugasWhereUniqueInput
    update: XOR<user_tugasUpdateWithoutUserInput, user_tugasUncheckedUpdateWithoutUserInput>
    create: XOR<user_tugasCreateWithoutUserInput, user_tugasUncheckedCreateWithoutUserInput>
  }

  export type user_tugasUpdateWithWhereUniqueWithoutUserInput = {
    where: user_tugasWhereUniqueInput
    data: XOR<user_tugasUpdateWithoutUserInput, user_tugasUncheckedUpdateWithoutUserInput>
  }

  export type user_tugasUpdateManyWithWhereWithoutUserInput = {
    where: user_tugasScalarWhereInput
    data: XOR<user_tugasUpdateManyMutationInput, user_tugasUncheckedUpdateManyWithoutUserInput>
  }

  export type userCreateWithoutUser_tugasInput = {
    id: string
    nama: string
    email: string
    password: string
    posisi: string
    laporan_bulanan?: laporan_bulananCreateNestedManyWithoutUserInput
    tugas?: tugasCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutUser_tugasInput = {
    id: string
    nama: string
    email: string
    password: string
    posisi: string
    laporan_bulanan?: laporan_bulananUncheckedCreateNestedManyWithoutUserInput
    tugas?: tugasUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutUser_tugasInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutUser_tugasInput, userUncheckedCreateWithoutUser_tugasInput>
  }

  export type tugasCreateWithoutUser_tugasInput = {
    id: string
    judul: string
    brief?: string | null
    kuantitas?: number | null
    deadline?: Date | string | null
    status?: string | null
    tanggal_dibuat?: Date | string | null
    tanggal_diubah?: Date | string | null
    file?: fileCreateNestedManyWithoutTugasInput
    user?: userCreateNestedOneWithoutTugasInput
  }

  export type tugasUncheckedCreateWithoutUser_tugasInput = {
    id: string
    judul: string
    brief?: string | null
    kuantitas?: number | null
    deadline?: Date | string | null
    status?: string | null
    id_admin?: string | null
    tanggal_dibuat?: Date | string | null
    tanggal_diubah?: Date | string | null
    file?: fileUncheckedCreateNestedManyWithoutTugasInput
  }

  export type tugasCreateOrConnectWithoutUser_tugasInput = {
    where: tugasWhereUniqueInput
    create: XOR<tugasCreateWithoutUser_tugasInput, tugasUncheckedCreateWithoutUser_tugasInput>
  }

  export type userUpsertWithoutUser_tugasInput = {
    update: XOR<userUpdateWithoutUser_tugasInput, userUncheckedUpdateWithoutUser_tugasInput>
    create: XOR<userCreateWithoutUser_tugasInput, userUncheckedCreateWithoutUser_tugasInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutUser_tugasInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutUser_tugasInput, userUncheckedUpdateWithoutUser_tugasInput>
  }

  export type userUpdateWithoutUser_tugasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    posisi?: StringFieldUpdateOperationsInput | string
    laporan_bulanan?: laporan_bulananUpdateManyWithoutUserNestedInput
    tugas?: tugasUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutUser_tugasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    posisi?: StringFieldUpdateOperationsInput | string
    laporan_bulanan?: laporan_bulananUncheckedUpdateManyWithoutUserNestedInput
    tugas?: tugasUncheckedUpdateManyWithoutUserNestedInput
  }

  export type tugasUpsertWithoutUser_tugasInput = {
    update: XOR<tugasUpdateWithoutUser_tugasInput, tugasUncheckedUpdateWithoutUser_tugasInput>
    create: XOR<tugasCreateWithoutUser_tugasInput, tugasUncheckedCreateWithoutUser_tugasInput>
    where?: tugasWhereInput
  }

  export type tugasUpdateToOneWithWhereWithoutUser_tugasInput = {
    where?: tugasWhereInput
    data: XOR<tugasUpdateWithoutUser_tugasInput, tugasUncheckedUpdateWithoutUser_tugasInput>
  }

  export type tugasUpdateWithoutUser_tugasInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    brief?: NullableStringFieldUpdateOperationsInput | string | null
    kuantitas?: NullableIntFieldUpdateOperationsInput | number | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_dibuat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_diubah?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    file?: fileUpdateManyWithoutTugasNestedInput
    user?: userUpdateOneWithoutTugasNestedInput
  }

  export type tugasUncheckedUpdateWithoutUser_tugasInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    brief?: NullableStringFieldUpdateOperationsInput | string | null
    kuantitas?: NullableIntFieldUpdateOperationsInput | number | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    id_admin?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_dibuat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_diubah?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    file?: fileUncheckedUpdateManyWithoutTugasNestedInput
  }

  export type fileCreateManyTugasInput = {
    id: string
    nama_file: string
    url: string
    tanggal_upload?: Date | string
  }

  export type user_tugasCreateManyTugasInput = {
    id_user: string
  }

  export type fileUpdateWithoutTugasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama_file?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    tanggal_upload?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type fileUncheckedUpdateWithoutTugasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama_file?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    tanggal_upload?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type fileUncheckedUpdateManyWithoutTugasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama_file?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    tanggal_upload?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_tugasUpdateWithoutTugasInput = {
    user?: userUpdateOneRequiredWithoutUser_tugasNestedInput
  }

  export type user_tugasUncheckedUpdateWithoutTugasInput = {
    id_user?: StringFieldUpdateOperationsInput | string
  }

  export type user_tugasUncheckedUpdateManyWithoutTugasInput = {
    id_user?: StringFieldUpdateOperationsInput | string
  }

  export type laporan_bulananCreateManyUserInput = {
    id: string
    bulan: string
    tahun: number
    total_tugas: number
    tugas_selesai: number
    tugas_terlambat: number
  }

  export type tugasCreateManyUserInput = {
    id: string
    judul: string
    brief?: string | null
    kuantitas?: number | null
    deadline?: Date | string | null
    status?: string | null
    tanggal_dibuat?: Date | string | null
    tanggal_diubah?: Date | string | null
  }

  export type user_tugasCreateManyUserInput = {
    id_tugas: string
  }

  export type laporan_bulananUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bulan?: StringFieldUpdateOperationsInput | string
    tahun?: IntFieldUpdateOperationsInput | number
    total_tugas?: IntFieldUpdateOperationsInput | number
    tugas_selesai?: IntFieldUpdateOperationsInput | number
    tugas_terlambat?: IntFieldUpdateOperationsInput | number
  }

  export type laporan_bulananUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bulan?: StringFieldUpdateOperationsInput | string
    tahun?: IntFieldUpdateOperationsInput | number
    total_tugas?: IntFieldUpdateOperationsInput | number
    tugas_selesai?: IntFieldUpdateOperationsInput | number
    tugas_terlambat?: IntFieldUpdateOperationsInput | number
  }

  export type laporan_bulananUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bulan?: StringFieldUpdateOperationsInput | string
    tahun?: IntFieldUpdateOperationsInput | number
    total_tugas?: IntFieldUpdateOperationsInput | number
    tugas_selesai?: IntFieldUpdateOperationsInput | number
    tugas_terlambat?: IntFieldUpdateOperationsInput | number
  }

  export type tugasUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    brief?: NullableStringFieldUpdateOperationsInput | string | null
    kuantitas?: NullableIntFieldUpdateOperationsInput | number | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_dibuat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_diubah?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    file?: fileUpdateManyWithoutTugasNestedInput
    user_tugas?: user_tugasUpdateManyWithoutTugasNestedInput
  }

  export type tugasUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    brief?: NullableStringFieldUpdateOperationsInput | string | null
    kuantitas?: NullableIntFieldUpdateOperationsInput | number | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_dibuat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_diubah?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    file?: fileUncheckedUpdateManyWithoutTugasNestedInput
    user_tugas?: user_tugasUncheckedUpdateManyWithoutTugasNestedInput
  }

  export type tugasUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    brief?: NullableStringFieldUpdateOperationsInput | string | null
    kuantitas?: NullableIntFieldUpdateOperationsInput | number | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_dibuat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_diubah?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_tugasUpdateWithoutUserInput = {
    tugas?: tugasUpdateOneRequiredWithoutUser_tugasNestedInput
  }

  export type user_tugasUncheckedUpdateWithoutUserInput = {
    id_tugas?: StringFieldUpdateOperationsInput | string
  }

  export type user_tugasUncheckedUpdateManyWithoutUserInput = {
    id_tugas?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}