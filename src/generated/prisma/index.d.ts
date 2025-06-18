
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
 * Model berkas
 * 
 */
export type berkas = $Result.DefaultSelection<Prisma.$berkasPayload>
/**
 * Model tugas
 * 
 */
export type tugas = $Result.DefaultSelection<Prisma.$tugasPayload>
/**
 * Model pengguna
 * 
 */
export type pengguna = $Result.DefaultSelection<Prisma.$penggunaPayload>
/**
 * Model tugas_pengguna
 * 
 */
export type tugas_pengguna = $Result.DefaultSelection<Prisma.$tugas_penggunaPayload>
/**
 * Model token_notifikasi
 * 
 */
export type token_notifikasi = $Result.DefaultSelection<Prisma.$token_notifikasiPayload>
/**
 * Model posisi
 * 
 */
export type posisi = $Result.DefaultSelection<Prisma.$posisiPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Berkas
 * const berkas = await prisma.berkas.findMany()
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
   * // Fetch zero or more Berkas
   * const berkas = await prisma.berkas.findMany()
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
   * `prisma.berkas`: Exposes CRUD operations for the **berkas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Berkas
    * const berkas = await prisma.berkas.findMany()
    * ```
    */
  get berkas(): Prisma.berkasDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.pengguna`: Exposes CRUD operations for the **pengguna** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Penggunas
    * const penggunas = await prisma.pengguna.findMany()
    * ```
    */
  get pengguna(): Prisma.penggunaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tugas_pengguna`: Exposes CRUD operations for the **tugas_pengguna** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tugas_penggunas
    * const tugas_penggunas = await prisma.tugas_pengguna.findMany()
    * ```
    */
  get tugas_pengguna(): Prisma.tugas_penggunaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.token_notifikasi`: Exposes CRUD operations for the **token_notifikasi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Token_notifikasis
    * const token_notifikasis = await prisma.token_notifikasi.findMany()
    * ```
    */
  get token_notifikasi(): Prisma.token_notifikasiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.posisi`: Exposes CRUD operations for the **posisi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posisis
    * const posisis = await prisma.posisi.findMany()
    * ```
    */
  get posisi(): Prisma.posisiDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.10.0
   * Query Engine version: aee10d5a411e4360c6d3445ce4810ca65adbf3e8
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
    berkas: 'berkas',
    tugas: 'tugas',
    pengguna: 'pengguna',
    tugas_pengguna: 'tugas_pengguna',
    token_notifikasi: 'token_notifikasi',
    posisi: 'posisi'
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
      modelProps: "berkas" | "tugas" | "pengguna" | "tugas_pengguna" | "token_notifikasi" | "posisi"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      berkas: {
        payload: Prisma.$berkasPayload<ExtArgs>
        fields: Prisma.berkasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.berkasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$berkasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.berkasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$berkasPayload>
          }
          findFirst: {
            args: Prisma.berkasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$berkasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.berkasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$berkasPayload>
          }
          findMany: {
            args: Prisma.berkasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$berkasPayload>[]
          }
          create: {
            args: Prisma.berkasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$berkasPayload>
          }
          createMany: {
            args: Prisma.berkasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.berkasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$berkasPayload>
          }
          update: {
            args: Prisma.berkasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$berkasPayload>
          }
          deleteMany: {
            args: Prisma.berkasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.berkasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.berkasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$berkasPayload>
          }
          aggregate: {
            args: Prisma.BerkasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBerkas>
          }
          groupBy: {
            args: Prisma.berkasGroupByArgs<ExtArgs>
            result: $Utils.Optional<BerkasGroupByOutputType>[]
          }
          count: {
            args: Prisma.berkasCountArgs<ExtArgs>
            result: $Utils.Optional<BerkasCountAggregateOutputType> | number
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
      pengguna: {
        payload: Prisma.$penggunaPayload<ExtArgs>
        fields: Prisma.penggunaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.penggunaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penggunaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.penggunaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penggunaPayload>
          }
          findFirst: {
            args: Prisma.penggunaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penggunaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.penggunaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penggunaPayload>
          }
          findMany: {
            args: Prisma.penggunaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penggunaPayload>[]
          }
          create: {
            args: Prisma.penggunaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penggunaPayload>
          }
          createMany: {
            args: Prisma.penggunaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.penggunaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penggunaPayload>
          }
          update: {
            args: Prisma.penggunaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penggunaPayload>
          }
          deleteMany: {
            args: Prisma.penggunaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.penggunaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.penggunaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$penggunaPayload>
          }
          aggregate: {
            args: Prisma.PenggunaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePengguna>
          }
          groupBy: {
            args: Prisma.penggunaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PenggunaGroupByOutputType>[]
          }
          count: {
            args: Prisma.penggunaCountArgs<ExtArgs>
            result: $Utils.Optional<PenggunaCountAggregateOutputType> | number
          }
        }
      }
      tugas_pengguna: {
        payload: Prisma.$tugas_penggunaPayload<ExtArgs>
        fields: Prisma.tugas_penggunaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tugas_penggunaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tugas_penggunaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tugas_penggunaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tugas_penggunaPayload>
          }
          findFirst: {
            args: Prisma.tugas_penggunaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tugas_penggunaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tugas_penggunaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tugas_penggunaPayload>
          }
          findMany: {
            args: Prisma.tugas_penggunaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tugas_penggunaPayload>[]
          }
          create: {
            args: Prisma.tugas_penggunaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tugas_penggunaPayload>
          }
          createMany: {
            args: Prisma.tugas_penggunaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tugas_penggunaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tugas_penggunaPayload>
          }
          update: {
            args: Prisma.tugas_penggunaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tugas_penggunaPayload>
          }
          deleteMany: {
            args: Prisma.tugas_penggunaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tugas_penggunaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tugas_penggunaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tugas_penggunaPayload>
          }
          aggregate: {
            args: Prisma.Tugas_penggunaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTugas_pengguna>
          }
          groupBy: {
            args: Prisma.tugas_penggunaGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tugas_penggunaGroupByOutputType>[]
          }
          count: {
            args: Prisma.tugas_penggunaCountArgs<ExtArgs>
            result: $Utils.Optional<Tugas_penggunaCountAggregateOutputType> | number
          }
        }
      }
      token_notifikasi: {
        payload: Prisma.$token_notifikasiPayload<ExtArgs>
        fields: Prisma.token_notifikasiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.token_notifikasiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$token_notifikasiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.token_notifikasiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$token_notifikasiPayload>
          }
          findFirst: {
            args: Prisma.token_notifikasiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$token_notifikasiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.token_notifikasiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$token_notifikasiPayload>
          }
          findMany: {
            args: Prisma.token_notifikasiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$token_notifikasiPayload>[]
          }
          create: {
            args: Prisma.token_notifikasiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$token_notifikasiPayload>
          }
          createMany: {
            args: Prisma.token_notifikasiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.token_notifikasiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$token_notifikasiPayload>
          }
          update: {
            args: Prisma.token_notifikasiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$token_notifikasiPayload>
          }
          deleteMany: {
            args: Prisma.token_notifikasiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.token_notifikasiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.token_notifikasiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$token_notifikasiPayload>
          }
          aggregate: {
            args: Prisma.Token_notifikasiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateToken_notifikasi>
          }
          groupBy: {
            args: Prisma.token_notifikasiGroupByArgs<ExtArgs>
            result: $Utils.Optional<Token_notifikasiGroupByOutputType>[]
          }
          count: {
            args: Prisma.token_notifikasiCountArgs<ExtArgs>
            result: $Utils.Optional<Token_notifikasiCountAggregateOutputType> | number
          }
        }
      }
      posisi: {
        payload: Prisma.$posisiPayload<ExtArgs>
        fields: Prisma.posisiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.posisiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$posisiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.posisiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$posisiPayload>
          }
          findFirst: {
            args: Prisma.posisiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$posisiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.posisiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$posisiPayload>
          }
          findMany: {
            args: Prisma.posisiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$posisiPayload>[]
          }
          create: {
            args: Prisma.posisiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$posisiPayload>
          }
          createMany: {
            args: Prisma.posisiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.posisiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$posisiPayload>
          }
          update: {
            args: Prisma.posisiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$posisiPayload>
          }
          deleteMany: {
            args: Prisma.posisiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.posisiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.posisiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$posisiPayload>
          }
          aggregate: {
            args: Prisma.PosisiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePosisi>
          }
          groupBy: {
            args: Prisma.posisiGroupByArgs<ExtArgs>
            result: $Utils.Optional<PosisiGroupByOutputType>[]
          }
          count: {
            args: Prisma.posisiCountArgs<ExtArgs>
            result: $Utils.Optional<PosisiCountAggregateOutputType> | number
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
    berkas?: berkasOmit
    tugas?: tugasOmit
    pengguna?: penggunaOmit
    tugas_pengguna?: tugas_penggunaOmit
    token_notifikasi?: token_notifikasiOmit
    posisi?: posisiOmit
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
    berkas: number
    tugas_pengguna: number
  }

  export type TugasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    berkas?: boolean | TugasCountOutputTypeCountBerkasArgs
    tugas_pengguna?: boolean | TugasCountOutputTypeCountTugas_penggunaArgs
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
  export type TugasCountOutputTypeCountBerkasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: berkasWhereInput
  }

  /**
   * TugasCountOutputType without action
   */
  export type TugasCountOutputTypeCountTugas_penggunaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tugas_penggunaWhereInput
  }


  /**
   * Count Type PenggunaCountOutputType
   */

  export type PenggunaCountOutputType = {
    token_notifikasi: number
    tugas: number
    tugas_pengguna: number
  }

  export type PenggunaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    token_notifikasi?: boolean | PenggunaCountOutputTypeCountToken_notifikasiArgs
    tugas?: boolean | PenggunaCountOutputTypeCountTugasArgs
    tugas_pengguna?: boolean | PenggunaCountOutputTypeCountTugas_penggunaArgs
  }

  // Custom InputTypes
  /**
   * PenggunaCountOutputType without action
   */
  export type PenggunaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PenggunaCountOutputType
     */
    select?: PenggunaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PenggunaCountOutputType without action
   */
  export type PenggunaCountOutputTypeCountToken_notifikasiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: token_notifikasiWhereInput
  }

  /**
   * PenggunaCountOutputType without action
   */
  export type PenggunaCountOutputTypeCountTugasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tugasWhereInput
  }

  /**
   * PenggunaCountOutputType without action
   */
  export type PenggunaCountOutputTypeCountTugas_penggunaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tugas_penggunaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model berkas
   */

  export type AggregateBerkas = {
    _count: BerkasCountAggregateOutputType | null
    _min: BerkasMinAggregateOutputType | null
    _max: BerkasMaxAggregateOutputType | null
  }

  export type BerkasMinAggregateOutputType = {
    id: string | null
    nama: string | null
    nama_file: string | null
    url: string | null
    id_tugas: string | null
    tanggal_upload: Date | null
  }

  export type BerkasMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    nama_file: string | null
    url: string | null
    id_tugas: string | null
    tanggal_upload: Date | null
  }

  export type BerkasCountAggregateOutputType = {
    id: number
    nama: number
    nama_file: number
    url: number
    id_tugas: number
    tanggal_upload: number
    _all: number
  }


  export type BerkasMinAggregateInputType = {
    id?: true
    nama?: true
    nama_file?: true
    url?: true
    id_tugas?: true
    tanggal_upload?: true
  }

  export type BerkasMaxAggregateInputType = {
    id?: true
    nama?: true
    nama_file?: true
    url?: true
    id_tugas?: true
    tanggal_upload?: true
  }

  export type BerkasCountAggregateInputType = {
    id?: true
    nama?: true
    nama_file?: true
    url?: true
    id_tugas?: true
    tanggal_upload?: true
    _all?: true
  }

  export type BerkasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which berkas to aggregate.
     */
    where?: berkasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of berkas to fetch.
     */
    orderBy?: berkasOrderByWithRelationInput | berkasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: berkasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` berkas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` berkas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned berkas
    **/
    _count?: true | BerkasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BerkasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BerkasMaxAggregateInputType
  }

  export type GetBerkasAggregateType<T extends BerkasAggregateArgs> = {
        [P in keyof T & keyof AggregateBerkas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBerkas[P]>
      : GetScalarType<T[P], AggregateBerkas[P]>
  }




  export type berkasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: berkasWhereInput
    orderBy?: berkasOrderByWithAggregationInput | berkasOrderByWithAggregationInput[]
    by: BerkasScalarFieldEnum[] | BerkasScalarFieldEnum
    having?: berkasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BerkasCountAggregateInputType | true
    _min?: BerkasMinAggregateInputType
    _max?: BerkasMaxAggregateInputType
  }

  export type BerkasGroupByOutputType = {
    id: string
    nama: string
    nama_file: string
    url: string
    id_tugas: string
    tanggal_upload: Date
    _count: BerkasCountAggregateOutputType | null
    _min: BerkasMinAggregateOutputType | null
    _max: BerkasMaxAggregateOutputType | null
  }

  type GetBerkasGroupByPayload<T extends berkasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BerkasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BerkasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BerkasGroupByOutputType[P]>
            : GetScalarType<T[P], BerkasGroupByOutputType[P]>
        }
      >
    >


  export type berkasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    nama_file?: boolean
    url?: boolean
    id_tugas?: boolean
    tanggal_upload?: boolean
    tugas?: boolean | tugasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["berkas"]>



  export type berkasSelectScalar = {
    id?: boolean
    nama?: boolean
    nama_file?: boolean
    url?: boolean
    id_tugas?: boolean
    tanggal_upload?: boolean
  }

  export type berkasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "nama_file" | "url" | "id_tugas" | "tanggal_upload", ExtArgs["result"]["berkas"]>
  export type berkasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tugas?: boolean | tugasDefaultArgs<ExtArgs>
  }

  export type $berkasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "berkas"
    objects: {
      tugas: Prisma.$tugasPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      nama_file: string
      url: string
      id_tugas: string
      tanggal_upload: Date
    }, ExtArgs["result"]["berkas"]>
    composites: {}
  }

  type berkasGetPayload<S extends boolean | null | undefined | berkasDefaultArgs> = $Result.GetResult<Prisma.$berkasPayload, S>

  type berkasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<berkasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BerkasCountAggregateInputType | true
    }

  export interface berkasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['berkas'], meta: { name: 'berkas' } }
    /**
     * Find zero or one Berkas that matches the filter.
     * @param {berkasFindUniqueArgs} args - Arguments to find a Berkas
     * @example
     * // Get one Berkas
     * const berkas = await prisma.berkas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends berkasFindUniqueArgs>(args: SelectSubset<T, berkasFindUniqueArgs<ExtArgs>>): Prisma__berkasClient<$Result.GetResult<Prisma.$berkasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Berkas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {berkasFindUniqueOrThrowArgs} args - Arguments to find a Berkas
     * @example
     * // Get one Berkas
     * const berkas = await prisma.berkas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends berkasFindUniqueOrThrowArgs>(args: SelectSubset<T, berkasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__berkasClient<$Result.GetResult<Prisma.$berkasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Berkas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {berkasFindFirstArgs} args - Arguments to find a Berkas
     * @example
     * // Get one Berkas
     * const berkas = await prisma.berkas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends berkasFindFirstArgs>(args?: SelectSubset<T, berkasFindFirstArgs<ExtArgs>>): Prisma__berkasClient<$Result.GetResult<Prisma.$berkasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Berkas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {berkasFindFirstOrThrowArgs} args - Arguments to find a Berkas
     * @example
     * // Get one Berkas
     * const berkas = await prisma.berkas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends berkasFindFirstOrThrowArgs>(args?: SelectSubset<T, berkasFindFirstOrThrowArgs<ExtArgs>>): Prisma__berkasClient<$Result.GetResult<Prisma.$berkasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Berkas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {berkasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Berkas
     * const berkas = await prisma.berkas.findMany()
     * 
     * // Get first 10 Berkas
     * const berkas = await prisma.berkas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const berkasWithIdOnly = await prisma.berkas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends berkasFindManyArgs>(args?: SelectSubset<T, berkasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$berkasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Berkas.
     * @param {berkasCreateArgs} args - Arguments to create a Berkas.
     * @example
     * // Create one Berkas
     * const Berkas = await prisma.berkas.create({
     *   data: {
     *     // ... data to create a Berkas
     *   }
     * })
     * 
     */
    create<T extends berkasCreateArgs>(args: SelectSubset<T, berkasCreateArgs<ExtArgs>>): Prisma__berkasClient<$Result.GetResult<Prisma.$berkasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Berkas.
     * @param {berkasCreateManyArgs} args - Arguments to create many Berkas.
     * @example
     * // Create many Berkas
     * const berkas = await prisma.berkas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends berkasCreateManyArgs>(args?: SelectSubset<T, berkasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Berkas.
     * @param {berkasDeleteArgs} args - Arguments to delete one Berkas.
     * @example
     * // Delete one Berkas
     * const Berkas = await prisma.berkas.delete({
     *   where: {
     *     // ... filter to delete one Berkas
     *   }
     * })
     * 
     */
    delete<T extends berkasDeleteArgs>(args: SelectSubset<T, berkasDeleteArgs<ExtArgs>>): Prisma__berkasClient<$Result.GetResult<Prisma.$berkasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Berkas.
     * @param {berkasUpdateArgs} args - Arguments to update one Berkas.
     * @example
     * // Update one Berkas
     * const berkas = await prisma.berkas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends berkasUpdateArgs>(args: SelectSubset<T, berkasUpdateArgs<ExtArgs>>): Prisma__berkasClient<$Result.GetResult<Prisma.$berkasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Berkas.
     * @param {berkasDeleteManyArgs} args - Arguments to filter Berkas to delete.
     * @example
     * // Delete a few Berkas
     * const { count } = await prisma.berkas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends berkasDeleteManyArgs>(args?: SelectSubset<T, berkasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Berkas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {berkasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Berkas
     * const berkas = await prisma.berkas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends berkasUpdateManyArgs>(args: SelectSubset<T, berkasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Berkas.
     * @param {berkasUpsertArgs} args - Arguments to update or create a Berkas.
     * @example
     * // Update or create a Berkas
     * const berkas = await prisma.berkas.upsert({
     *   create: {
     *     // ... data to create a Berkas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Berkas we want to update
     *   }
     * })
     */
    upsert<T extends berkasUpsertArgs>(args: SelectSubset<T, berkasUpsertArgs<ExtArgs>>): Prisma__berkasClient<$Result.GetResult<Prisma.$berkasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Berkas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {berkasCountArgs} args - Arguments to filter Berkas to count.
     * @example
     * // Count the number of Berkas
     * const count = await prisma.berkas.count({
     *   where: {
     *     // ... the filter for the Berkas we want to count
     *   }
     * })
    **/
    count<T extends berkasCountArgs>(
      args?: Subset<T, berkasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BerkasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Berkas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BerkasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BerkasAggregateArgs>(args: Subset<T, BerkasAggregateArgs>): Prisma.PrismaPromise<GetBerkasAggregateType<T>>

    /**
     * Group by Berkas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {berkasGroupByArgs} args - Group by arguments.
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
      T extends berkasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: berkasGroupByArgs['orderBy'] }
        : { orderBy?: berkasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, berkasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBerkasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the berkas model
   */
  readonly fields: berkasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for berkas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__berkasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the berkas model
   */
  interface berkasFieldRefs {
    readonly id: FieldRef<"berkas", 'String'>
    readonly nama: FieldRef<"berkas", 'String'>
    readonly nama_file: FieldRef<"berkas", 'String'>
    readonly url: FieldRef<"berkas", 'String'>
    readonly id_tugas: FieldRef<"berkas", 'String'>
    readonly tanggal_upload: FieldRef<"berkas", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * berkas findUnique
   */
  export type berkasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the berkas
     */
    select?: berkasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the berkas
     */
    omit?: berkasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: berkasInclude<ExtArgs> | null
    /**
     * Filter, which berkas to fetch.
     */
    where: berkasWhereUniqueInput
  }

  /**
   * berkas findUniqueOrThrow
   */
  export type berkasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the berkas
     */
    select?: berkasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the berkas
     */
    omit?: berkasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: berkasInclude<ExtArgs> | null
    /**
     * Filter, which berkas to fetch.
     */
    where: berkasWhereUniqueInput
  }

  /**
   * berkas findFirst
   */
  export type berkasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the berkas
     */
    select?: berkasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the berkas
     */
    omit?: berkasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: berkasInclude<ExtArgs> | null
    /**
     * Filter, which berkas to fetch.
     */
    where?: berkasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of berkas to fetch.
     */
    orderBy?: berkasOrderByWithRelationInput | berkasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for berkas.
     */
    cursor?: berkasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` berkas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` berkas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of berkas.
     */
    distinct?: BerkasScalarFieldEnum | BerkasScalarFieldEnum[]
  }

  /**
   * berkas findFirstOrThrow
   */
  export type berkasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the berkas
     */
    select?: berkasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the berkas
     */
    omit?: berkasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: berkasInclude<ExtArgs> | null
    /**
     * Filter, which berkas to fetch.
     */
    where?: berkasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of berkas to fetch.
     */
    orderBy?: berkasOrderByWithRelationInput | berkasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for berkas.
     */
    cursor?: berkasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` berkas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` berkas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of berkas.
     */
    distinct?: BerkasScalarFieldEnum | BerkasScalarFieldEnum[]
  }

  /**
   * berkas findMany
   */
  export type berkasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the berkas
     */
    select?: berkasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the berkas
     */
    omit?: berkasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: berkasInclude<ExtArgs> | null
    /**
     * Filter, which berkas to fetch.
     */
    where?: berkasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of berkas to fetch.
     */
    orderBy?: berkasOrderByWithRelationInput | berkasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing berkas.
     */
    cursor?: berkasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` berkas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` berkas.
     */
    skip?: number
    distinct?: BerkasScalarFieldEnum | BerkasScalarFieldEnum[]
  }

  /**
   * berkas create
   */
  export type berkasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the berkas
     */
    select?: berkasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the berkas
     */
    omit?: berkasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: berkasInclude<ExtArgs> | null
    /**
     * The data needed to create a berkas.
     */
    data: XOR<berkasCreateInput, berkasUncheckedCreateInput>
  }

  /**
   * berkas createMany
   */
  export type berkasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many berkas.
     */
    data: berkasCreateManyInput | berkasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * berkas update
   */
  export type berkasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the berkas
     */
    select?: berkasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the berkas
     */
    omit?: berkasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: berkasInclude<ExtArgs> | null
    /**
     * The data needed to update a berkas.
     */
    data: XOR<berkasUpdateInput, berkasUncheckedUpdateInput>
    /**
     * Choose, which berkas to update.
     */
    where: berkasWhereUniqueInput
  }

  /**
   * berkas updateMany
   */
  export type berkasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update berkas.
     */
    data: XOR<berkasUpdateManyMutationInput, berkasUncheckedUpdateManyInput>
    /**
     * Filter which berkas to update
     */
    where?: berkasWhereInput
    /**
     * Limit how many berkas to update.
     */
    limit?: number
  }

  /**
   * berkas upsert
   */
  export type berkasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the berkas
     */
    select?: berkasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the berkas
     */
    omit?: berkasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: berkasInclude<ExtArgs> | null
    /**
     * The filter to search for the berkas to update in case it exists.
     */
    where: berkasWhereUniqueInput
    /**
     * In case the berkas found by the `where` argument doesn't exist, create a new berkas with this data.
     */
    create: XOR<berkasCreateInput, berkasUncheckedCreateInput>
    /**
     * In case the berkas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<berkasUpdateInput, berkasUncheckedUpdateInput>
  }

  /**
   * berkas delete
   */
  export type berkasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the berkas
     */
    select?: berkasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the berkas
     */
    omit?: berkasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: berkasInclude<ExtArgs> | null
    /**
     * Filter which berkas to delete.
     */
    where: berkasWhereUniqueInput
  }

  /**
   * berkas deleteMany
   */
  export type berkasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which berkas to delete
     */
    where?: berkasWhereInput
    /**
     * Limit how many berkas to delete.
     */
    limit?: number
  }

  /**
   * berkas without action
   */
  export type berkasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the berkas
     */
    select?: berkasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the berkas
     */
    omit?: berkasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: berkasInclude<ExtArgs> | null
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
    terlambat: boolean | null
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
    terlambat: boolean | null
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
    terlambat: number
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
    terlambat?: true
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
    terlambat?: true
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
    terlambat?: true
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
    terlambat: boolean
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
    terlambat?: boolean
    status?: boolean
    id_admin?: boolean
    tanggal_dibuat?: boolean
    tanggal_diubah?: boolean
    berkas?: boolean | tugas$berkasArgs<ExtArgs>
    pengguna?: boolean | tugas$penggunaArgs<ExtArgs>
    tugas_pengguna?: boolean | tugas$tugas_penggunaArgs<ExtArgs>
    _count?: boolean | TugasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tugas"]>



  export type tugasSelectScalar = {
    id?: boolean
    judul?: boolean
    brief?: boolean
    kuantitas?: boolean
    deadline?: boolean
    terlambat?: boolean
    status?: boolean
    id_admin?: boolean
    tanggal_dibuat?: boolean
    tanggal_diubah?: boolean
  }

  export type tugasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "judul" | "brief" | "kuantitas" | "deadline" | "terlambat" | "status" | "id_admin" | "tanggal_dibuat" | "tanggal_diubah", ExtArgs["result"]["tugas"]>
  export type tugasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    berkas?: boolean | tugas$berkasArgs<ExtArgs>
    pengguna?: boolean | tugas$penggunaArgs<ExtArgs>
    tugas_pengguna?: boolean | tugas$tugas_penggunaArgs<ExtArgs>
    _count?: boolean | TugasCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tugasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tugas"
    objects: {
      berkas: Prisma.$berkasPayload<ExtArgs>[]
      pengguna: Prisma.$penggunaPayload<ExtArgs> | null
      tugas_pengguna: Prisma.$tugas_penggunaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      judul: string
      brief: string | null
      kuantitas: number | null
      deadline: Date | null
      terlambat: boolean
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
    berkas<T extends tugas$berkasArgs<ExtArgs> = {}>(args?: Subset<T, tugas$berkasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$berkasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pengguna<T extends tugas$penggunaArgs<ExtArgs> = {}>(args?: Subset<T, tugas$penggunaArgs<ExtArgs>>): Prisma__penggunaClient<$Result.GetResult<Prisma.$penggunaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tugas_pengguna<T extends tugas$tugas_penggunaArgs<ExtArgs> = {}>(args?: Subset<T, tugas$tugas_penggunaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tugas_penggunaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly terlambat: FieldRef<"tugas", 'Boolean'>
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
   * tugas.berkas
   */
  export type tugas$berkasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the berkas
     */
    select?: berkasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the berkas
     */
    omit?: berkasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: berkasInclude<ExtArgs> | null
    where?: berkasWhereInput
    orderBy?: berkasOrderByWithRelationInput | berkasOrderByWithRelationInput[]
    cursor?: berkasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BerkasScalarFieldEnum | BerkasScalarFieldEnum[]
  }

  /**
   * tugas.pengguna
   */
  export type tugas$penggunaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengguna
     */
    select?: penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengguna
     */
    omit?: penggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penggunaInclude<ExtArgs> | null
    where?: penggunaWhereInput
  }

  /**
   * tugas.tugas_pengguna
   */
  export type tugas$tugas_penggunaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tugas_pengguna
     */
    select?: tugas_penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tugas_pengguna
     */
    omit?: tugas_penggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tugas_penggunaInclude<ExtArgs> | null
    where?: tugas_penggunaWhereInput
    orderBy?: tugas_penggunaOrderByWithRelationInput | tugas_penggunaOrderByWithRelationInput[]
    cursor?: tugas_penggunaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tugas_penggunaScalarFieldEnum | Tugas_penggunaScalarFieldEnum[]
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
   * Model pengguna
   */

  export type AggregatePengguna = {
    _count: PenggunaCountAggregateOutputType | null
    _min: PenggunaMinAggregateOutputType | null
    _max: PenggunaMaxAggregateOutputType | null
  }

  export type PenggunaMinAggregateOutputType = {
    id: string | null
    nama: string | null
    email: string | null
    posisi: string | null
    password: string | null
  }

  export type PenggunaMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    email: string | null
    posisi: string | null
    password: string | null
  }

  export type PenggunaCountAggregateOutputType = {
    id: number
    nama: number
    email: number
    posisi: number
    password: number
    _all: number
  }


  export type PenggunaMinAggregateInputType = {
    id?: true
    nama?: true
    email?: true
    posisi?: true
    password?: true
  }

  export type PenggunaMaxAggregateInputType = {
    id?: true
    nama?: true
    email?: true
    posisi?: true
    password?: true
  }

  export type PenggunaCountAggregateInputType = {
    id?: true
    nama?: true
    email?: true
    posisi?: true
    password?: true
    _all?: true
  }

  export type PenggunaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pengguna to aggregate.
     */
    where?: penggunaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of penggunas to fetch.
     */
    orderBy?: penggunaOrderByWithRelationInput | penggunaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: penggunaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` penggunas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` penggunas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned penggunas
    **/
    _count?: true | PenggunaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PenggunaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PenggunaMaxAggregateInputType
  }

  export type GetPenggunaAggregateType<T extends PenggunaAggregateArgs> = {
        [P in keyof T & keyof AggregatePengguna]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePengguna[P]>
      : GetScalarType<T[P], AggregatePengguna[P]>
  }




  export type penggunaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: penggunaWhereInput
    orderBy?: penggunaOrderByWithAggregationInput | penggunaOrderByWithAggregationInput[]
    by: PenggunaScalarFieldEnum[] | PenggunaScalarFieldEnum
    having?: penggunaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PenggunaCountAggregateInputType | true
    _min?: PenggunaMinAggregateInputType
    _max?: PenggunaMaxAggregateInputType
  }

  export type PenggunaGroupByOutputType = {
    id: string
    nama: string
    email: string
    posisi: string
    password: string
    _count: PenggunaCountAggregateOutputType | null
    _min: PenggunaMinAggregateOutputType | null
    _max: PenggunaMaxAggregateOutputType | null
  }

  type GetPenggunaGroupByPayload<T extends penggunaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PenggunaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PenggunaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PenggunaGroupByOutputType[P]>
            : GetScalarType<T[P], PenggunaGroupByOutputType[P]>
        }
      >
    >


  export type penggunaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    email?: boolean
    posisi?: boolean
    password?: boolean
    token_notifikasi?: boolean | pengguna$token_notifikasiArgs<ExtArgs>
    tugas?: boolean | pengguna$tugasArgs<ExtArgs>
    tugas_pengguna?: boolean | pengguna$tugas_penggunaArgs<ExtArgs>
    _count?: boolean | PenggunaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pengguna"]>



  export type penggunaSelectScalar = {
    id?: boolean
    nama?: boolean
    email?: boolean
    posisi?: boolean
    password?: boolean
  }

  export type penggunaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "email" | "posisi" | "password", ExtArgs["result"]["pengguna"]>
  export type penggunaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    token_notifikasi?: boolean | pengguna$token_notifikasiArgs<ExtArgs>
    tugas?: boolean | pengguna$tugasArgs<ExtArgs>
    tugas_pengguna?: boolean | pengguna$tugas_penggunaArgs<ExtArgs>
    _count?: boolean | PenggunaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $penggunaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pengguna"
    objects: {
      token_notifikasi: Prisma.$token_notifikasiPayload<ExtArgs>[]
      tugas: Prisma.$tugasPayload<ExtArgs>[]
      tugas_pengguna: Prisma.$tugas_penggunaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      email: string
      posisi: string
      password: string
    }, ExtArgs["result"]["pengguna"]>
    composites: {}
  }

  type penggunaGetPayload<S extends boolean | null | undefined | penggunaDefaultArgs> = $Result.GetResult<Prisma.$penggunaPayload, S>

  type penggunaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<penggunaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PenggunaCountAggregateInputType | true
    }

  export interface penggunaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pengguna'], meta: { name: 'pengguna' } }
    /**
     * Find zero or one Pengguna that matches the filter.
     * @param {penggunaFindUniqueArgs} args - Arguments to find a Pengguna
     * @example
     * // Get one Pengguna
     * const pengguna = await prisma.pengguna.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends penggunaFindUniqueArgs>(args: SelectSubset<T, penggunaFindUniqueArgs<ExtArgs>>): Prisma__penggunaClient<$Result.GetResult<Prisma.$penggunaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pengguna that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {penggunaFindUniqueOrThrowArgs} args - Arguments to find a Pengguna
     * @example
     * // Get one Pengguna
     * const pengguna = await prisma.pengguna.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends penggunaFindUniqueOrThrowArgs>(args: SelectSubset<T, penggunaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__penggunaClient<$Result.GetResult<Prisma.$penggunaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pengguna that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {penggunaFindFirstArgs} args - Arguments to find a Pengguna
     * @example
     * // Get one Pengguna
     * const pengguna = await prisma.pengguna.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends penggunaFindFirstArgs>(args?: SelectSubset<T, penggunaFindFirstArgs<ExtArgs>>): Prisma__penggunaClient<$Result.GetResult<Prisma.$penggunaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pengguna that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {penggunaFindFirstOrThrowArgs} args - Arguments to find a Pengguna
     * @example
     * // Get one Pengguna
     * const pengguna = await prisma.pengguna.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends penggunaFindFirstOrThrowArgs>(args?: SelectSubset<T, penggunaFindFirstOrThrowArgs<ExtArgs>>): Prisma__penggunaClient<$Result.GetResult<Prisma.$penggunaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Penggunas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {penggunaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Penggunas
     * const penggunas = await prisma.pengguna.findMany()
     * 
     * // Get first 10 Penggunas
     * const penggunas = await prisma.pengguna.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const penggunaWithIdOnly = await prisma.pengguna.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends penggunaFindManyArgs>(args?: SelectSubset<T, penggunaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$penggunaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pengguna.
     * @param {penggunaCreateArgs} args - Arguments to create a Pengguna.
     * @example
     * // Create one Pengguna
     * const Pengguna = await prisma.pengguna.create({
     *   data: {
     *     // ... data to create a Pengguna
     *   }
     * })
     * 
     */
    create<T extends penggunaCreateArgs>(args: SelectSubset<T, penggunaCreateArgs<ExtArgs>>): Prisma__penggunaClient<$Result.GetResult<Prisma.$penggunaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Penggunas.
     * @param {penggunaCreateManyArgs} args - Arguments to create many Penggunas.
     * @example
     * // Create many Penggunas
     * const pengguna = await prisma.pengguna.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends penggunaCreateManyArgs>(args?: SelectSubset<T, penggunaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pengguna.
     * @param {penggunaDeleteArgs} args - Arguments to delete one Pengguna.
     * @example
     * // Delete one Pengguna
     * const Pengguna = await prisma.pengguna.delete({
     *   where: {
     *     // ... filter to delete one Pengguna
     *   }
     * })
     * 
     */
    delete<T extends penggunaDeleteArgs>(args: SelectSubset<T, penggunaDeleteArgs<ExtArgs>>): Prisma__penggunaClient<$Result.GetResult<Prisma.$penggunaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pengguna.
     * @param {penggunaUpdateArgs} args - Arguments to update one Pengguna.
     * @example
     * // Update one Pengguna
     * const pengguna = await prisma.pengguna.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends penggunaUpdateArgs>(args: SelectSubset<T, penggunaUpdateArgs<ExtArgs>>): Prisma__penggunaClient<$Result.GetResult<Prisma.$penggunaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Penggunas.
     * @param {penggunaDeleteManyArgs} args - Arguments to filter Penggunas to delete.
     * @example
     * // Delete a few Penggunas
     * const { count } = await prisma.pengguna.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends penggunaDeleteManyArgs>(args?: SelectSubset<T, penggunaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Penggunas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {penggunaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Penggunas
     * const pengguna = await prisma.pengguna.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends penggunaUpdateManyArgs>(args: SelectSubset<T, penggunaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pengguna.
     * @param {penggunaUpsertArgs} args - Arguments to update or create a Pengguna.
     * @example
     * // Update or create a Pengguna
     * const pengguna = await prisma.pengguna.upsert({
     *   create: {
     *     // ... data to create a Pengguna
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pengguna we want to update
     *   }
     * })
     */
    upsert<T extends penggunaUpsertArgs>(args: SelectSubset<T, penggunaUpsertArgs<ExtArgs>>): Prisma__penggunaClient<$Result.GetResult<Prisma.$penggunaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Penggunas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {penggunaCountArgs} args - Arguments to filter Penggunas to count.
     * @example
     * // Count the number of Penggunas
     * const count = await prisma.pengguna.count({
     *   where: {
     *     // ... the filter for the Penggunas we want to count
     *   }
     * })
    **/
    count<T extends penggunaCountArgs>(
      args?: Subset<T, penggunaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PenggunaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pengguna.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenggunaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PenggunaAggregateArgs>(args: Subset<T, PenggunaAggregateArgs>): Prisma.PrismaPromise<GetPenggunaAggregateType<T>>

    /**
     * Group by Pengguna.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {penggunaGroupByArgs} args - Group by arguments.
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
      T extends penggunaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: penggunaGroupByArgs['orderBy'] }
        : { orderBy?: penggunaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, penggunaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPenggunaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pengguna model
   */
  readonly fields: penggunaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pengguna.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__penggunaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    token_notifikasi<T extends pengguna$token_notifikasiArgs<ExtArgs> = {}>(args?: Subset<T, pengguna$token_notifikasiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$token_notifikasiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tugas<T extends pengguna$tugasArgs<ExtArgs> = {}>(args?: Subset<T, pengguna$tugasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tugasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tugas_pengguna<T extends pengguna$tugas_penggunaArgs<ExtArgs> = {}>(args?: Subset<T, pengguna$tugas_penggunaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tugas_penggunaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the pengguna model
   */
  interface penggunaFieldRefs {
    readonly id: FieldRef<"pengguna", 'String'>
    readonly nama: FieldRef<"pengguna", 'String'>
    readonly email: FieldRef<"pengguna", 'String'>
    readonly posisi: FieldRef<"pengguna", 'String'>
    readonly password: FieldRef<"pengguna", 'String'>
  }
    

  // Custom InputTypes
  /**
   * pengguna findUnique
   */
  export type penggunaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengguna
     */
    select?: penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengguna
     */
    omit?: penggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penggunaInclude<ExtArgs> | null
    /**
     * Filter, which pengguna to fetch.
     */
    where: penggunaWhereUniqueInput
  }

  /**
   * pengguna findUniqueOrThrow
   */
  export type penggunaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengguna
     */
    select?: penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengguna
     */
    omit?: penggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penggunaInclude<ExtArgs> | null
    /**
     * Filter, which pengguna to fetch.
     */
    where: penggunaWhereUniqueInput
  }

  /**
   * pengguna findFirst
   */
  export type penggunaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengguna
     */
    select?: penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengguna
     */
    omit?: penggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penggunaInclude<ExtArgs> | null
    /**
     * Filter, which pengguna to fetch.
     */
    where?: penggunaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of penggunas to fetch.
     */
    orderBy?: penggunaOrderByWithRelationInput | penggunaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for penggunas.
     */
    cursor?: penggunaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` penggunas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` penggunas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of penggunas.
     */
    distinct?: PenggunaScalarFieldEnum | PenggunaScalarFieldEnum[]
  }

  /**
   * pengguna findFirstOrThrow
   */
  export type penggunaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengguna
     */
    select?: penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengguna
     */
    omit?: penggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penggunaInclude<ExtArgs> | null
    /**
     * Filter, which pengguna to fetch.
     */
    where?: penggunaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of penggunas to fetch.
     */
    orderBy?: penggunaOrderByWithRelationInput | penggunaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for penggunas.
     */
    cursor?: penggunaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` penggunas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` penggunas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of penggunas.
     */
    distinct?: PenggunaScalarFieldEnum | PenggunaScalarFieldEnum[]
  }

  /**
   * pengguna findMany
   */
  export type penggunaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengguna
     */
    select?: penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengguna
     */
    omit?: penggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penggunaInclude<ExtArgs> | null
    /**
     * Filter, which penggunas to fetch.
     */
    where?: penggunaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of penggunas to fetch.
     */
    orderBy?: penggunaOrderByWithRelationInput | penggunaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing penggunas.
     */
    cursor?: penggunaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` penggunas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` penggunas.
     */
    skip?: number
    distinct?: PenggunaScalarFieldEnum | PenggunaScalarFieldEnum[]
  }

  /**
   * pengguna create
   */
  export type penggunaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengguna
     */
    select?: penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengguna
     */
    omit?: penggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penggunaInclude<ExtArgs> | null
    /**
     * The data needed to create a pengguna.
     */
    data: XOR<penggunaCreateInput, penggunaUncheckedCreateInput>
  }

  /**
   * pengguna createMany
   */
  export type penggunaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many penggunas.
     */
    data: penggunaCreateManyInput | penggunaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pengguna update
   */
  export type penggunaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengguna
     */
    select?: penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengguna
     */
    omit?: penggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penggunaInclude<ExtArgs> | null
    /**
     * The data needed to update a pengguna.
     */
    data: XOR<penggunaUpdateInput, penggunaUncheckedUpdateInput>
    /**
     * Choose, which pengguna to update.
     */
    where: penggunaWhereUniqueInput
  }

  /**
   * pengguna updateMany
   */
  export type penggunaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update penggunas.
     */
    data: XOR<penggunaUpdateManyMutationInput, penggunaUncheckedUpdateManyInput>
    /**
     * Filter which penggunas to update
     */
    where?: penggunaWhereInput
    /**
     * Limit how many penggunas to update.
     */
    limit?: number
  }

  /**
   * pengguna upsert
   */
  export type penggunaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengguna
     */
    select?: penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengguna
     */
    omit?: penggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penggunaInclude<ExtArgs> | null
    /**
     * The filter to search for the pengguna to update in case it exists.
     */
    where: penggunaWhereUniqueInput
    /**
     * In case the pengguna found by the `where` argument doesn't exist, create a new pengguna with this data.
     */
    create: XOR<penggunaCreateInput, penggunaUncheckedCreateInput>
    /**
     * In case the pengguna was found with the provided `where` argument, update it with this data.
     */
    update: XOR<penggunaUpdateInput, penggunaUncheckedUpdateInput>
  }

  /**
   * pengguna delete
   */
  export type penggunaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengguna
     */
    select?: penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengguna
     */
    omit?: penggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penggunaInclude<ExtArgs> | null
    /**
     * Filter which pengguna to delete.
     */
    where: penggunaWhereUniqueInput
  }

  /**
   * pengguna deleteMany
   */
  export type penggunaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which penggunas to delete
     */
    where?: penggunaWhereInput
    /**
     * Limit how many penggunas to delete.
     */
    limit?: number
  }

  /**
   * pengguna.token_notifikasi
   */
  export type pengguna$token_notifikasiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token_notifikasi
     */
    select?: token_notifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token_notifikasi
     */
    omit?: token_notifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: token_notifikasiInclude<ExtArgs> | null
    where?: token_notifikasiWhereInput
    orderBy?: token_notifikasiOrderByWithRelationInput | token_notifikasiOrderByWithRelationInput[]
    cursor?: token_notifikasiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Token_notifikasiScalarFieldEnum | Token_notifikasiScalarFieldEnum[]
  }

  /**
   * pengguna.tugas
   */
  export type pengguna$tugasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * pengguna.tugas_pengguna
   */
  export type pengguna$tugas_penggunaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tugas_pengguna
     */
    select?: tugas_penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tugas_pengguna
     */
    omit?: tugas_penggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tugas_penggunaInclude<ExtArgs> | null
    where?: tugas_penggunaWhereInput
    orderBy?: tugas_penggunaOrderByWithRelationInput | tugas_penggunaOrderByWithRelationInput[]
    cursor?: tugas_penggunaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tugas_penggunaScalarFieldEnum | Tugas_penggunaScalarFieldEnum[]
  }

  /**
   * pengguna without action
   */
  export type penggunaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengguna
     */
    select?: penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengguna
     */
    omit?: penggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: penggunaInclude<ExtArgs> | null
  }


  /**
   * Model tugas_pengguna
   */

  export type AggregateTugas_pengguna = {
    _count: Tugas_penggunaCountAggregateOutputType | null
    _min: Tugas_penggunaMinAggregateOutputType | null
    _max: Tugas_penggunaMaxAggregateOutputType | null
  }

  export type Tugas_penggunaMinAggregateOutputType = {
    id: string | null
    id_user: string | null
    id_tugas: string | null
  }

  export type Tugas_penggunaMaxAggregateOutputType = {
    id: string | null
    id_user: string | null
    id_tugas: string | null
  }

  export type Tugas_penggunaCountAggregateOutputType = {
    id: number
    id_user: number
    id_tugas: number
    _all: number
  }


  export type Tugas_penggunaMinAggregateInputType = {
    id?: true
    id_user?: true
    id_tugas?: true
  }

  export type Tugas_penggunaMaxAggregateInputType = {
    id?: true
    id_user?: true
    id_tugas?: true
  }

  export type Tugas_penggunaCountAggregateInputType = {
    id?: true
    id_user?: true
    id_tugas?: true
    _all?: true
  }

  export type Tugas_penggunaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tugas_pengguna to aggregate.
     */
    where?: tugas_penggunaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tugas_penggunas to fetch.
     */
    orderBy?: tugas_penggunaOrderByWithRelationInput | tugas_penggunaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tugas_penggunaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tugas_penggunas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tugas_penggunas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tugas_penggunas
    **/
    _count?: true | Tugas_penggunaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tugas_penggunaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tugas_penggunaMaxAggregateInputType
  }

  export type GetTugas_penggunaAggregateType<T extends Tugas_penggunaAggregateArgs> = {
        [P in keyof T & keyof AggregateTugas_pengguna]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTugas_pengguna[P]>
      : GetScalarType<T[P], AggregateTugas_pengguna[P]>
  }




  export type tugas_penggunaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tugas_penggunaWhereInput
    orderBy?: tugas_penggunaOrderByWithAggregationInput | tugas_penggunaOrderByWithAggregationInput[]
    by: Tugas_penggunaScalarFieldEnum[] | Tugas_penggunaScalarFieldEnum
    having?: tugas_penggunaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tugas_penggunaCountAggregateInputType | true
    _min?: Tugas_penggunaMinAggregateInputType
    _max?: Tugas_penggunaMaxAggregateInputType
  }

  export type Tugas_penggunaGroupByOutputType = {
    id: string
    id_user: string
    id_tugas: string
    _count: Tugas_penggunaCountAggregateOutputType | null
    _min: Tugas_penggunaMinAggregateOutputType | null
    _max: Tugas_penggunaMaxAggregateOutputType | null
  }

  type GetTugas_penggunaGroupByPayload<T extends tugas_penggunaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tugas_penggunaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tugas_penggunaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tugas_penggunaGroupByOutputType[P]>
            : GetScalarType<T[P], Tugas_penggunaGroupByOutputType[P]>
        }
      >
    >


  export type tugas_penggunaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_user?: boolean
    id_tugas?: boolean
    pengguna?: boolean | penggunaDefaultArgs<ExtArgs>
    tugas?: boolean | tugasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tugas_pengguna"]>



  export type tugas_penggunaSelectScalar = {
    id?: boolean
    id_user?: boolean
    id_tugas?: boolean
  }

  export type tugas_penggunaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_user" | "id_tugas", ExtArgs["result"]["tugas_pengguna"]>
  export type tugas_penggunaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pengguna?: boolean | penggunaDefaultArgs<ExtArgs>
    tugas?: boolean | tugasDefaultArgs<ExtArgs>
  }

  export type $tugas_penggunaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tugas_pengguna"
    objects: {
      pengguna: Prisma.$penggunaPayload<ExtArgs>
      tugas: Prisma.$tugasPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      id_user: string
      id_tugas: string
    }, ExtArgs["result"]["tugas_pengguna"]>
    composites: {}
  }

  type tugas_penggunaGetPayload<S extends boolean | null | undefined | tugas_penggunaDefaultArgs> = $Result.GetResult<Prisma.$tugas_penggunaPayload, S>

  type tugas_penggunaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tugas_penggunaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tugas_penggunaCountAggregateInputType | true
    }

  export interface tugas_penggunaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tugas_pengguna'], meta: { name: 'tugas_pengguna' } }
    /**
     * Find zero or one Tugas_pengguna that matches the filter.
     * @param {tugas_penggunaFindUniqueArgs} args - Arguments to find a Tugas_pengguna
     * @example
     * // Get one Tugas_pengguna
     * const tugas_pengguna = await prisma.tugas_pengguna.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tugas_penggunaFindUniqueArgs>(args: SelectSubset<T, tugas_penggunaFindUniqueArgs<ExtArgs>>): Prisma__tugas_penggunaClient<$Result.GetResult<Prisma.$tugas_penggunaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tugas_pengguna that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tugas_penggunaFindUniqueOrThrowArgs} args - Arguments to find a Tugas_pengguna
     * @example
     * // Get one Tugas_pengguna
     * const tugas_pengguna = await prisma.tugas_pengguna.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tugas_penggunaFindUniqueOrThrowArgs>(args: SelectSubset<T, tugas_penggunaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tugas_penggunaClient<$Result.GetResult<Prisma.$tugas_penggunaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tugas_pengguna that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tugas_penggunaFindFirstArgs} args - Arguments to find a Tugas_pengguna
     * @example
     * // Get one Tugas_pengguna
     * const tugas_pengguna = await prisma.tugas_pengguna.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tugas_penggunaFindFirstArgs>(args?: SelectSubset<T, tugas_penggunaFindFirstArgs<ExtArgs>>): Prisma__tugas_penggunaClient<$Result.GetResult<Prisma.$tugas_penggunaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tugas_pengguna that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tugas_penggunaFindFirstOrThrowArgs} args - Arguments to find a Tugas_pengguna
     * @example
     * // Get one Tugas_pengguna
     * const tugas_pengguna = await prisma.tugas_pengguna.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tugas_penggunaFindFirstOrThrowArgs>(args?: SelectSubset<T, tugas_penggunaFindFirstOrThrowArgs<ExtArgs>>): Prisma__tugas_penggunaClient<$Result.GetResult<Prisma.$tugas_penggunaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tugas_penggunas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tugas_penggunaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tugas_penggunas
     * const tugas_penggunas = await prisma.tugas_pengguna.findMany()
     * 
     * // Get first 10 Tugas_penggunas
     * const tugas_penggunas = await prisma.tugas_pengguna.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tugas_penggunaWithIdOnly = await prisma.tugas_pengguna.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tugas_penggunaFindManyArgs>(args?: SelectSubset<T, tugas_penggunaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tugas_penggunaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tugas_pengguna.
     * @param {tugas_penggunaCreateArgs} args - Arguments to create a Tugas_pengguna.
     * @example
     * // Create one Tugas_pengguna
     * const Tugas_pengguna = await prisma.tugas_pengguna.create({
     *   data: {
     *     // ... data to create a Tugas_pengguna
     *   }
     * })
     * 
     */
    create<T extends tugas_penggunaCreateArgs>(args: SelectSubset<T, tugas_penggunaCreateArgs<ExtArgs>>): Prisma__tugas_penggunaClient<$Result.GetResult<Prisma.$tugas_penggunaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tugas_penggunas.
     * @param {tugas_penggunaCreateManyArgs} args - Arguments to create many Tugas_penggunas.
     * @example
     * // Create many Tugas_penggunas
     * const tugas_pengguna = await prisma.tugas_pengguna.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tugas_penggunaCreateManyArgs>(args?: SelectSubset<T, tugas_penggunaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tugas_pengguna.
     * @param {tugas_penggunaDeleteArgs} args - Arguments to delete one Tugas_pengguna.
     * @example
     * // Delete one Tugas_pengguna
     * const Tugas_pengguna = await prisma.tugas_pengguna.delete({
     *   where: {
     *     // ... filter to delete one Tugas_pengguna
     *   }
     * })
     * 
     */
    delete<T extends tugas_penggunaDeleteArgs>(args: SelectSubset<T, tugas_penggunaDeleteArgs<ExtArgs>>): Prisma__tugas_penggunaClient<$Result.GetResult<Prisma.$tugas_penggunaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tugas_pengguna.
     * @param {tugas_penggunaUpdateArgs} args - Arguments to update one Tugas_pengguna.
     * @example
     * // Update one Tugas_pengguna
     * const tugas_pengguna = await prisma.tugas_pengguna.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tugas_penggunaUpdateArgs>(args: SelectSubset<T, tugas_penggunaUpdateArgs<ExtArgs>>): Prisma__tugas_penggunaClient<$Result.GetResult<Prisma.$tugas_penggunaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tugas_penggunas.
     * @param {tugas_penggunaDeleteManyArgs} args - Arguments to filter Tugas_penggunas to delete.
     * @example
     * // Delete a few Tugas_penggunas
     * const { count } = await prisma.tugas_pengguna.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tugas_penggunaDeleteManyArgs>(args?: SelectSubset<T, tugas_penggunaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tugas_penggunas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tugas_penggunaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tugas_penggunas
     * const tugas_pengguna = await prisma.tugas_pengguna.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tugas_penggunaUpdateManyArgs>(args: SelectSubset<T, tugas_penggunaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tugas_pengguna.
     * @param {tugas_penggunaUpsertArgs} args - Arguments to update or create a Tugas_pengguna.
     * @example
     * // Update or create a Tugas_pengguna
     * const tugas_pengguna = await prisma.tugas_pengguna.upsert({
     *   create: {
     *     // ... data to create a Tugas_pengguna
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tugas_pengguna we want to update
     *   }
     * })
     */
    upsert<T extends tugas_penggunaUpsertArgs>(args: SelectSubset<T, tugas_penggunaUpsertArgs<ExtArgs>>): Prisma__tugas_penggunaClient<$Result.GetResult<Prisma.$tugas_penggunaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tugas_penggunas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tugas_penggunaCountArgs} args - Arguments to filter Tugas_penggunas to count.
     * @example
     * // Count the number of Tugas_penggunas
     * const count = await prisma.tugas_pengguna.count({
     *   where: {
     *     // ... the filter for the Tugas_penggunas we want to count
     *   }
     * })
    **/
    count<T extends tugas_penggunaCountArgs>(
      args?: Subset<T, tugas_penggunaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tugas_penggunaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tugas_pengguna.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tugas_penggunaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tugas_penggunaAggregateArgs>(args: Subset<T, Tugas_penggunaAggregateArgs>): Prisma.PrismaPromise<GetTugas_penggunaAggregateType<T>>

    /**
     * Group by Tugas_pengguna.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tugas_penggunaGroupByArgs} args - Group by arguments.
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
      T extends tugas_penggunaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tugas_penggunaGroupByArgs['orderBy'] }
        : { orderBy?: tugas_penggunaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tugas_penggunaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTugas_penggunaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tugas_pengguna model
   */
  readonly fields: tugas_penggunaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tugas_pengguna.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tugas_penggunaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pengguna<T extends penggunaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, penggunaDefaultArgs<ExtArgs>>): Prisma__penggunaClient<$Result.GetResult<Prisma.$penggunaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the tugas_pengguna model
   */
  interface tugas_penggunaFieldRefs {
    readonly id: FieldRef<"tugas_pengguna", 'String'>
    readonly id_user: FieldRef<"tugas_pengguna", 'String'>
    readonly id_tugas: FieldRef<"tugas_pengguna", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tugas_pengguna findUnique
   */
  export type tugas_penggunaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tugas_pengguna
     */
    select?: tugas_penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tugas_pengguna
     */
    omit?: tugas_penggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tugas_penggunaInclude<ExtArgs> | null
    /**
     * Filter, which tugas_pengguna to fetch.
     */
    where: tugas_penggunaWhereUniqueInput
  }

  /**
   * tugas_pengguna findUniqueOrThrow
   */
  export type tugas_penggunaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tugas_pengguna
     */
    select?: tugas_penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tugas_pengguna
     */
    omit?: tugas_penggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tugas_penggunaInclude<ExtArgs> | null
    /**
     * Filter, which tugas_pengguna to fetch.
     */
    where: tugas_penggunaWhereUniqueInput
  }

  /**
   * tugas_pengguna findFirst
   */
  export type tugas_penggunaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tugas_pengguna
     */
    select?: tugas_penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tugas_pengguna
     */
    omit?: tugas_penggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tugas_penggunaInclude<ExtArgs> | null
    /**
     * Filter, which tugas_pengguna to fetch.
     */
    where?: tugas_penggunaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tugas_penggunas to fetch.
     */
    orderBy?: tugas_penggunaOrderByWithRelationInput | tugas_penggunaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tugas_penggunas.
     */
    cursor?: tugas_penggunaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tugas_penggunas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tugas_penggunas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tugas_penggunas.
     */
    distinct?: Tugas_penggunaScalarFieldEnum | Tugas_penggunaScalarFieldEnum[]
  }

  /**
   * tugas_pengguna findFirstOrThrow
   */
  export type tugas_penggunaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tugas_pengguna
     */
    select?: tugas_penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tugas_pengguna
     */
    omit?: tugas_penggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tugas_penggunaInclude<ExtArgs> | null
    /**
     * Filter, which tugas_pengguna to fetch.
     */
    where?: tugas_penggunaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tugas_penggunas to fetch.
     */
    orderBy?: tugas_penggunaOrderByWithRelationInput | tugas_penggunaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tugas_penggunas.
     */
    cursor?: tugas_penggunaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tugas_penggunas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tugas_penggunas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tugas_penggunas.
     */
    distinct?: Tugas_penggunaScalarFieldEnum | Tugas_penggunaScalarFieldEnum[]
  }

  /**
   * tugas_pengguna findMany
   */
  export type tugas_penggunaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tugas_pengguna
     */
    select?: tugas_penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tugas_pengguna
     */
    omit?: tugas_penggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tugas_penggunaInclude<ExtArgs> | null
    /**
     * Filter, which tugas_penggunas to fetch.
     */
    where?: tugas_penggunaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tugas_penggunas to fetch.
     */
    orderBy?: tugas_penggunaOrderByWithRelationInput | tugas_penggunaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tugas_penggunas.
     */
    cursor?: tugas_penggunaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tugas_penggunas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tugas_penggunas.
     */
    skip?: number
    distinct?: Tugas_penggunaScalarFieldEnum | Tugas_penggunaScalarFieldEnum[]
  }

  /**
   * tugas_pengguna create
   */
  export type tugas_penggunaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tugas_pengguna
     */
    select?: tugas_penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tugas_pengguna
     */
    omit?: tugas_penggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tugas_penggunaInclude<ExtArgs> | null
    /**
     * The data needed to create a tugas_pengguna.
     */
    data: XOR<tugas_penggunaCreateInput, tugas_penggunaUncheckedCreateInput>
  }

  /**
   * tugas_pengguna createMany
   */
  export type tugas_penggunaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tugas_penggunas.
     */
    data: tugas_penggunaCreateManyInput | tugas_penggunaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tugas_pengguna update
   */
  export type tugas_penggunaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tugas_pengguna
     */
    select?: tugas_penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tugas_pengguna
     */
    omit?: tugas_penggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tugas_penggunaInclude<ExtArgs> | null
    /**
     * The data needed to update a tugas_pengguna.
     */
    data: XOR<tugas_penggunaUpdateInput, tugas_penggunaUncheckedUpdateInput>
    /**
     * Choose, which tugas_pengguna to update.
     */
    where: tugas_penggunaWhereUniqueInput
  }

  /**
   * tugas_pengguna updateMany
   */
  export type tugas_penggunaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tugas_penggunas.
     */
    data: XOR<tugas_penggunaUpdateManyMutationInput, tugas_penggunaUncheckedUpdateManyInput>
    /**
     * Filter which tugas_penggunas to update
     */
    where?: tugas_penggunaWhereInput
    /**
     * Limit how many tugas_penggunas to update.
     */
    limit?: number
  }

  /**
   * tugas_pengguna upsert
   */
  export type tugas_penggunaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tugas_pengguna
     */
    select?: tugas_penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tugas_pengguna
     */
    omit?: tugas_penggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tugas_penggunaInclude<ExtArgs> | null
    /**
     * The filter to search for the tugas_pengguna to update in case it exists.
     */
    where: tugas_penggunaWhereUniqueInput
    /**
     * In case the tugas_pengguna found by the `where` argument doesn't exist, create a new tugas_pengguna with this data.
     */
    create: XOR<tugas_penggunaCreateInput, tugas_penggunaUncheckedCreateInput>
    /**
     * In case the tugas_pengguna was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tugas_penggunaUpdateInput, tugas_penggunaUncheckedUpdateInput>
  }

  /**
   * tugas_pengguna delete
   */
  export type tugas_penggunaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tugas_pengguna
     */
    select?: tugas_penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tugas_pengguna
     */
    omit?: tugas_penggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tugas_penggunaInclude<ExtArgs> | null
    /**
     * Filter which tugas_pengguna to delete.
     */
    where: tugas_penggunaWhereUniqueInput
  }

  /**
   * tugas_pengguna deleteMany
   */
  export type tugas_penggunaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tugas_penggunas to delete
     */
    where?: tugas_penggunaWhereInput
    /**
     * Limit how many tugas_penggunas to delete.
     */
    limit?: number
  }

  /**
   * tugas_pengguna without action
   */
  export type tugas_penggunaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tugas_pengguna
     */
    select?: tugas_penggunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tugas_pengguna
     */
    omit?: tugas_penggunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tugas_penggunaInclude<ExtArgs> | null
  }


  /**
   * Model token_notifikasi
   */

  export type AggregateToken_notifikasi = {
    _count: Token_notifikasiCountAggregateOutputType | null
    _min: Token_notifikasiMinAggregateOutputType | null
    _max: Token_notifikasiMaxAggregateOutputType | null
  }

  export type Token_notifikasiMinAggregateOutputType = {
    token: string | null
    id_user: string | null
  }

  export type Token_notifikasiMaxAggregateOutputType = {
    token: string | null
    id_user: string | null
  }

  export type Token_notifikasiCountAggregateOutputType = {
    token: number
    id_user: number
    _all: number
  }


  export type Token_notifikasiMinAggregateInputType = {
    token?: true
    id_user?: true
  }

  export type Token_notifikasiMaxAggregateInputType = {
    token?: true
    id_user?: true
  }

  export type Token_notifikasiCountAggregateInputType = {
    token?: true
    id_user?: true
    _all?: true
  }

  export type Token_notifikasiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which token_notifikasi to aggregate.
     */
    where?: token_notifikasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of token_notifikasis to fetch.
     */
    orderBy?: token_notifikasiOrderByWithRelationInput | token_notifikasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: token_notifikasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` token_notifikasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` token_notifikasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned token_notifikasis
    **/
    _count?: true | Token_notifikasiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Token_notifikasiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Token_notifikasiMaxAggregateInputType
  }

  export type GetToken_notifikasiAggregateType<T extends Token_notifikasiAggregateArgs> = {
        [P in keyof T & keyof AggregateToken_notifikasi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToken_notifikasi[P]>
      : GetScalarType<T[P], AggregateToken_notifikasi[P]>
  }




  export type token_notifikasiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: token_notifikasiWhereInput
    orderBy?: token_notifikasiOrderByWithAggregationInput | token_notifikasiOrderByWithAggregationInput[]
    by: Token_notifikasiScalarFieldEnum[] | Token_notifikasiScalarFieldEnum
    having?: token_notifikasiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Token_notifikasiCountAggregateInputType | true
    _min?: Token_notifikasiMinAggregateInputType
    _max?: Token_notifikasiMaxAggregateInputType
  }

  export type Token_notifikasiGroupByOutputType = {
    token: string
    id_user: string
    _count: Token_notifikasiCountAggregateOutputType | null
    _min: Token_notifikasiMinAggregateOutputType | null
    _max: Token_notifikasiMaxAggregateOutputType | null
  }

  type GetToken_notifikasiGroupByPayload<T extends token_notifikasiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Token_notifikasiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Token_notifikasiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Token_notifikasiGroupByOutputType[P]>
            : GetScalarType<T[P], Token_notifikasiGroupByOutputType[P]>
        }
      >
    >


  export type token_notifikasiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    token?: boolean
    id_user?: boolean
    pengguna?: boolean | penggunaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token_notifikasi"]>



  export type token_notifikasiSelectScalar = {
    token?: boolean
    id_user?: boolean
  }

  export type token_notifikasiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"token" | "id_user", ExtArgs["result"]["token_notifikasi"]>
  export type token_notifikasiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pengguna?: boolean | penggunaDefaultArgs<ExtArgs>
  }

  export type $token_notifikasiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "token_notifikasi"
    objects: {
      pengguna: Prisma.$penggunaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      token: string
      id_user: string
    }, ExtArgs["result"]["token_notifikasi"]>
    composites: {}
  }

  type token_notifikasiGetPayload<S extends boolean | null | undefined | token_notifikasiDefaultArgs> = $Result.GetResult<Prisma.$token_notifikasiPayload, S>

  type token_notifikasiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<token_notifikasiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Token_notifikasiCountAggregateInputType | true
    }

  export interface token_notifikasiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['token_notifikasi'], meta: { name: 'token_notifikasi' } }
    /**
     * Find zero or one Token_notifikasi that matches the filter.
     * @param {token_notifikasiFindUniqueArgs} args - Arguments to find a Token_notifikasi
     * @example
     * // Get one Token_notifikasi
     * const token_notifikasi = await prisma.token_notifikasi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends token_notifikasiFindUniqueArgs>(args: SelectSubset<T, token_notifikasiFindUniqueArgs<ExtArgs>>): Prisma__token_notifikasiClient<$Result.GetResult<Prisma.$token_notifikasiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Token_notifikasi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {token_notifikasiFindUniqueOrThrowArgs} args - Arguments to find a Token_notifikasi
     * @example
     * // Get one Token_notifikasi
     * const token_notifikasi = await prisma.token_notifikasi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends token_notifikasiFindUniqueOrThrowArgs>(args: SelectSubset<T, token_notifikasiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__token_notifikasiClient<$Result.GetResult<Prisma.$token_notifikasiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token_notifikasi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {token_notifikasiFindFirstArgs} args - Arguments to find a Token_notifikasi
     * @example
     * // Get one Token_notifikasi
     * const token_notifikasi = await prisma.token_notifikasi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends token_notifikasiFindFirstArgs>(args?: SelectSubset<T, token_notifikasiFindFirstArgs<ExtArgs>>): Prisma__token_notifikasiClient<$Result.GetResult<Prisma.$token_notifikasiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token_notifikasi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {token_notifikasiFindFirstOrThrowArgs} args - Arguments to find a Token_notifikasi
     * @example
     * // Get one Token_notifikasi
     * const token_notifikasi = await prisma.token_notifikasi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends token_notifikasiFindFirstOrThrowArgs>(args?: SelectSubset<T, token_notifikasiFindFirstOrThrowArgs<ExtArgs>>): Prisma__token_notifikasiClient<$Result.GetResult<Prisma.$token_notifikasiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Token_notifikasis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {token_notifikasiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Token_notifikasis
     * const token_notifikasis = await prisma.token_notifikasi.findMany()
     * 
     * // Get first 10 Token_notifikasis
     * const token_notifikasis = await prisma.token_notifikasi.findMany({ take: 10 })
     * 
     * // Only select the `token`
     * const token_notifikasiWithTokenOnly = await prisma.token_notifikasi.findMany({ select: { token: true } })
     * 
     */
    findMany<T extends token_notifikasiFindManyArgs>(args?: SelectSubset<T, token_notifikasiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$token_notifikasiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Token_notifikasi.
     * @param {token_notifikasiCreateArgs} args - Arguments to create a Token_notifikasi.
     * @example
     * // Create one Token_notifikasi
     * const Token_notifikasi = await prisma.token_notifikasi.create({
     *   data: {
     *     // ... data to create a Token_notifikasi
     *   }
     * })
     * 
     */
    create<T extends token_notifikasiCreateArgs>(args: SelectSubset<T, token_notifikasiCreateArgs<ExtArgs>>): Prisma__token_notifikasiClient<$Result.GetResult<Prisma.$token_notifikasiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Token_notifikasis.
     * @param {token_notifikasiCreateManyArgs} args - Arguments to create many Token_notifikasis.
     * @example
     * // Create many Token_notifikasis
     * const token_notifikasi = await prisma.token_notifikasi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends token_notifikasiCreateManyArgs>(args?: SelectSubset<T, token_notifikasiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Token_notifikasi.
     * @param {token_notifikasiDeleteArgs} args - Arguments to delete one Token_notifikasi.
     * @example
     * // Delete one Token_notifikasi
     * const Token_notifikasi = await prisma.token_notifikasi.delete({
     *   where: {
     *     // ... filter to delete one Token_notifikasi
     *   }
     * })
     * 
     */
    delete<T extends token_notifikasiDeleteArgs>(args: SelectSubset<T, token_notifikasiDeleteArgs<ExtArgs>>): Prisma__token_notifikasiClient<$Result.GetResult<Prisma.$token_notifikasiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Token_notifikasi.
     * @param {token_notifikasiUpdateArgs} args - Arguments to update one Token_notifikasi.
     * @example
     * // Update one Token_notifikasi
     * const token_notifikasi = await prisma.token_notifikasi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends token_notifikasiUpdateArgs>(args: SelectSubset<T, token_notifikasiUpdateArgs<ExtArgs>>): Prisma__token_notifikasiClient<$Result.GetResult<Prisma.$token_notifikasiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Token_notifikasis.
     * @param {token_notifikasiDeleteManyArgs} args - Arguments to filter Token_notifikasis to delete.
     * @example
     * // Delete a few Token_notifikasis
     * const { count } = await prisma.token_notifikasi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends token_notifikasiDeleteManyArgs>(args?: SelectSubset<T, token_notifikasiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Token_notifikasis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {token_notifikasiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Token_notifikasis
     * const token_notifikasi = await prisma.token_notifikasi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends token_notifikasiUpdateManyArgs>(args: SelectSubset<T, token_notifikasiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Token_notifikasi.
     * @param {token_notifikasiUpsertArgs} args - Arguments to update or create a Token_notifikasi.
     * @example
     * // Update or create a Token_notifikasi
     * const token_notifikasi = await prisma.token_notifikasi.upsert({
     *   create: {
     *     // ... data to create a Token_notifikasi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Token_notifikasi we want to update
     *   }
     * })
     */
    upsert<T extends token_notifikasiUpsertArgs>(args: SelectSubset<T, token_notifikasiUpsertArgs<ExtArgs>>): Prisma__token_notifikasiClient<$Result.GetResult<Prisma.$token_notifikasiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Token_notifikasis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {token_notifikasiCountArgs} args - Arguments to filter Token_notifikasis to count.
     * @example
     * // Count the number of Token_notifikasis
     * const count = await prisma.token_notifikasi.count({
     *   where: {
     *     // ... the filter for the Token_notifikasis we want to count
     *   }
     * })
    **/
    count<T extends token_notifikasiCountArgs>(
      args?: Subset<T, token_notifikasiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Token_notifikasiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Token_notifikasi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Token_notifikasiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Token_notifikasiAggregateArgs>(args: Subset<T, Token_notifikasiAggregateArgs>): Prisma.PrismaPromise<GetToken_notifikasiAggregateType<T>>

    /**
     * Group by Token_notifikasi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {token_notifikasiGroupByArgs} args - Group by arguments.
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
      T extends token_notifikasiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: token_notifikasiGroupByArgs['orderBy'] }
        : { orderBy?: token_notifikasiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, token_notifikasiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetToken_notifikasiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the token_notifikasi model
   */
  readonly fields: token_notifikasiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for token_notifikasi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__token_notifikasiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pengguna<T extends penggunaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, penggunaDefaultArgs<ExtArgs>>): Prisma__penggunaClient<$Result.GetResult<Prisma.$penggunaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the token_notifikasi model
   */
  interface token_notifikasiFieldRefs {
    readonly token: FieldRef<"token_notifikasi", 'String'>
    readonly id_user: FieldRef<"token_notifikasi", 'String'>
  }
    

  // Custom InputTypes
  /**
   * token_notifikasi findUnique
   */
  export type token_notifikasiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token_notifikasi
     */
    select?: token_notifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token_notifikasi
     */
    omit?: token_notifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: token_notifikasiInclude<ExtArgs> | null
    /**
     * Filter, which token_notifikasi to fetch.
     */
    where: token_notifikasiWhereUniqueInput
  }

  /**
   * token_notifikasi findUniqueOrThrow
   */
  export type token_notifikasiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token_notifikasi
     */
    select?: token_notifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token_notifikasi
     */
    omit?: token_notifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: token_notifikasiInclude<ExtArgs> | null
    /**
     * Filter, which token_notifikasi to fetch.
     */
    where: token_notifikasiWhereUniqueInput
  }

  /**
   * token_notifikasi findFirst
   */
  export type token_notifikasiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token_notifikasi
     */
    select?: token_notifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token_notifikasi
     */
    omit?: token_notifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: token_notifikasiInclude<ExtArgs> | null
    /**
     * Filter, which token_notifikasi to fetch.
     */
    where?: token_notifikasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of token_notifikasis to fetch.
     */
    orderBy?: token_notifikasiOrderByWithRelationInput | token_notifikasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for token_notifikasis.
     */
    cursor?: token_notifikasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` token_notifikasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` token_notifikasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of token_notifikasis.
     */
    distinct?: Token_notifikasiScalarFieldEnum | Token_notifikasiScalarFieldEnum[]
  }

  /**
   * token_notifikasi findFirstOrThrow
   */
  export type token_notifikasiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token_notifikasi
     */
    select?: token_notifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token_notifikasi
     */
    omit?: token_notifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: token_notifikasiInclude<ExtArgs> | null
    /**
     * Filter, which token_notifikasi to fetch.
     */
    where?: token_notifikasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of token_notifikasis to fetch.
     */
    orderBy?: token_notifikasiOrderByWithRelationInput | token_notifikasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for token_notifikasis.
     */
    cursor?: token_notifikasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` token_notifikasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` token_notifikasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of token_notifikasis.
     */
    distinct?: Token_notifikasiScalarFieldEnum | Token_notifikasiScalarFieldEnum[]
  }

  /**
   * token_notifikasi findMany
   */
  export type token_notifikasiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token_notifikasi
     */
    select?: token_notifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token_notifikasi
     */
    omit?: token_notifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: token_notifikasiInclude<ExtArgs> | null
    /**
     * Filter, which token_notifikasis to fetch.
     */
    where?: token_notifikasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of token_notifikasis to fetch.
     */
    orderBy?: token_notifikasiOrderByWithRelationInput | token_notifikasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing token_notifikasis.
     */
    cursor?: token_notifikasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` token_notifikasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` token_notifikasis.
     */
    skip?: number
    distinct?: Token_notifikasiScalarFieldEnum | Token_notifikasiScalarFieldEnum[]
  }

  /**
   * token_notifikasi create
   */
  export type token_notifikasiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token_notifikasi
     */
    select?: token_notifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token_notifikasi
     */
    omit?: token_notifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: token_notifikasiInclude<ExtArgs> | null
    /**
     * The data needed to create a token_notifikasi.
     */
    data: XOR<token_notifikasiCreateInput, token_notifikasiUncheckedCreateInput>
  }

  /**
   * token_notifikasi createMany
   */
  export type token_notifikasiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many token_notifikasis.
     */
    data: token_notifikasiCreateManyInput | token_notifikasiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * token_notifikasi update
   */
  export type token_notifikasiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token_notifikasi
     */
    select?: token_notifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token_notifikasi
     */
    omit?: token_notifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: token_notifikasiInclude<ExtArgs> | null
    /**
     * The data needed to update a token_notifikasi.
     */
    data: XOR<token_notifikasiUpdateInput, token_notifikasiUncheckedUpdateInput>
    /**
     * Choose, which token_notifikasi to update.
     */
    where: token_notifikasiWhereUniqueInput
  }

  /**
   * token_notifikasi updateMany
   */
  export type token_notifikasiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update token_notifikasis.
     */
    data: XOR<token_notifikasiUpdateManyMutationInput, token_notifikasiUncheckedUpdateManyInput>
    /**
     * Filter which token_notifikasis to update
     */
    where?: token_notifikasiWhereInput
    /**
     * Limit how many token_notifikasis to update.
     */
    limit?: number
  }

  /**
   * token_notifikasi upsert
   */
  export type token_notifikasiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token_notifikasi
     */
    select?: token_notifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token_notifikasi
     */
    omit?: token_notifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: token_notifikasiInclude<ExtArgs> | null
    /**
     * The filter to search for the token_notifikasi to update in case it exists.
     */
    where: token_notifikasiWhereUniqueInput
    /**
     * In case the token_notifikasi found by the `where` argument doesn't exist, create a new token_notifikasi with this data.
     */
    create: XOR<token_notifikasiCreateInput, token_notifikasiUncheckedCreateInput>
    /**
     * In case the token_notifikasi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<token_notifikasiUpdateInput, token_notifikasiUncheckedUpdateInput>
  }

  /**
   * token_notifikasi delete
   */
  export type token_notifikasiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token_notifikasi
     */
    select?: token_notifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token_notifikasi
     */
    omit?: token_notifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: token_notifikasiInclude<ExtArgs> | null
    /**
     * Filter which token_notifikasi to delete.
     */
    where: token_notifikasiWhereUniqueInput
  }

  /**
   * token_notifikasi deleteMany
   */
  export type token_notifikasiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which token_notifikasis to delete
     */
    where?: token_notifikasiWhereInput
    /**
     * Limit how many token_notifikasis to delete.
     */
    limit?: number
  }

  /**
   * token_notifikasi without action
   */
  export type token_notifikasiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the token_notifikasi
     */
    select?: token_notifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the token_notifikasi
     */
    omit?: token_notifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: token_notifikasiInclude<ExtArgs> | null
  }


  /**
   * Model posisi
   */

  export type AggregatePosisi = {
    _count: PosisiCountAggregateOutputType | null
    _min: PosisiMinAggregateOutputType | null
    _max: PosisiMaxAggregateOutputType | null
  }

  export type PosisiMinAggregateOutputType = {
    id: string | null
    posisi: string | null
  }

  export type PosisiMaxAggregateOutputType = {
    id: string | null
    posisi: string | null
  }

  export type PosisiCountAggregateOutputType = {
    id: number
    posisi: number
    _all: number
  }


  export type PosisiMinAggregateInputType = {
    id?: true
    posisi?: true
  }

  export type PosisiMaxAggregateInputType = {
    id?: true
    posisi?: true
  }

  export type PosisiCountAggregateInputType = {
    id?: true
    posisi?: true
    _all?: true
  }

  export type PosisiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which posisi to aggregate.
     */
    where?: posisiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posisis to fetch.
     */
    orderBy?: posisiOrderByWithRelationInput | posisiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: posisiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posisis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posisis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned posisis
    **/
    _count?: true | PosisiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PosisiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PosisiMaxAggregateInputType
  }

  export type GetPosisiAggregateType<T extends PosisiAggregateArgs> = {
        [P in keyof T & keyof AggregatePosisi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePosisi[P]>
      : GetScalarType<T[P], AggregatePosisi[P]>
  }




  export type posisiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: posisiWhereInput
    orderBy?: posisiOrderByWithAggregationInput | posisiOrderByWithAggregationInput[]
    by: PosisiScalarFieldEnum[] | PosisiScalarFieldEnum
    having?: posisiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PosisiCountAggregateInputType | true
    _min?: PosisiMinAggregateInputType
    _max?: PosisiMaxAggregateInputType
  }

  export type PosisiGroupByOutputType = {
    id: string
    posisi: string
    _count: PosisiCountAggregateOutputType | null
    _min: PosisiMinAggregateOutputType | null
    _max: PosisiMaxAggregateOutputType | null
  }

  type GetPosisiGroupByPayload<T extends posisiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PosisiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PosisiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PosisiGroupByOutputType[P]>
            : GetScalarType<T[P], PosisiGroupByOutputType[P]>
        }
      >
    >


  export type posisiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    posisi?: boolean
  }, ExtArgs["result"]["posisi"]>



  export type posisiSelectScalar = {
    id?: boolean
    posisi?: boolean
  }

  export type posisiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "posisi", ExtArgs["result"]["posisi"]>

  export type $posisiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "posisi"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      posisi: string
    }, ExtArgs["result"]["posisi"]>
    composites: {}
  }

  type posisiGetPayload<S extends boolean | null | undefined | posisiDefaultArgs> = $Result.GetResult<Prisma.$posisiPayload, S>

  type posisiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<posisiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PosisiCountAggregateInputType | true
    }

  export interface posisiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['posisi'], meta: { name: 'posisi' } }
    /**
     * Find zero or one Posisi that matches the filter.
     * @param {posisiFindUniqueArgs} args - Arguments to find a Posisi
     * @example
     * // Get one Posisi
     * const posisi = await prisma.posisi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends posisiFindUniqueArgs>(args: SelectSubset<T, posisiFindUniqueArgs<ExtArgs>>): Prisma__posisiClient<$Result.GetResult<Prisma.$posisiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Posisi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {posisiFindUniqueOrThrowArgs} args - Arguments to find a Posisi
     * @example
     * // Get one Posisi
     * const posisi = await prisma.posisi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends posisiFindUniqueOrThrowArgs>(args: SelectSubset<T, posisiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__posisiClient<$Result.GetResult<Prisma.$posisiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Posisi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {posisiFindFirstArgs} args - Arguments to find a Posisi
     * @example
     * // Get one Posisi
     * const posisi = await prisma.posisi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends posisiFindFirstArgs>(args?: SelectSubset<T, posisiFindFirstArgs<ExtArgs>>): Prisma__posisiClient<$Result.GetResult<Prisma.$posisiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Posisi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {posisiFindFirstOrThrowArgs} args - Arguments to find a Posisi
     * @example
     * // Get one Posisi
     * const posisi = await prisma.posisi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends posisiFindFirstOrThrowArgs>(args?: SelectSubset<T, posisiFindFirstOrThrowArgs<ExtArgs>>): Prisma__posisiClient<$Result.GetResult<Prisma.$posisiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posisis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {posisiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posisis
     * const posisis = await prisma.posisi.findMany()
     * 
     * // Get first 10 Posisis
     * const posisis = await prisma.posisi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const posisiWithIdOnly = await prisma.posisi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends posisiFindManyArgs>(args?: SelectSubset<T, posisiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$posisiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Posisi.
     * @param {posisiCreateArgs} args - Arguments to create a Posisi.
     * @example
     * // Create one Posisi
     * const Posisi = await prisma.posisi.create({
     *   data: {
     *     // ... data to create a Posisi
     *   }
     * })
     * 
     */
    create<T extends posisiCreateArgs>(args: SelectSubset<T, posisiCreateArgs<ExtArgs>>): Prisma__posisiClient<$Result.GetResult<Prisma.$posisiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posisis.
     * @param {posisiCreateManyArgs} args - Arguments to create many Posisis.
     * @example
     * // Create many Posisis
     * const posisi = await prisma.posisi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends posisiCreateManyArgs>(args?: SelectSubset<T, posisiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Posisi.
     * @param {posisiDeleteArgs} args - Arguments to delete one Posisi.
     * @example
     * // Delete one Posisi
     * const Posisi = await prisma.posisi.delete({
     *   where: {
     *     // ... filter to delete one Posisi
     *   }
     * })
     * 
     */
    delete<T extends posisiDeleteArgs>(args: SelectSubset<T, posisiDeleteArgs<ExtArgs>>): Prisma__posisiClient<$Result.GetResult<Prisma.$posisiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Posisi.
     * @param {posisiUpdateArgs} args - Arguments to update one Posisi.
     * @example
     * // Update one Posisi
     * const posisi = await prisma.posisi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends posisiUpdateArgs>(args: SelectSubset<T, posisiUpdateArgs<ExtArgs>>): Prisma__posisiClient<$Result.GetResult<Prisma.$posisiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posisis.
     * @param {posisiDeleteManyArgs} args - Arguments to filter Posisis to delete.
     * @example
     * // Delete a few Posisis
     * const { count } = await prisma.posisi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends posisiDeleteManyArgs>(args?: SelectSubset<T, posisiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posisis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {posisiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posisis
     * const posisi = await prisma.posisi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends posisiUpdateManyArgs>(args: SelectSubset<T, posisiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Posisi.
     * @param {posisiUpsertArgs} args - Arguments to update or create a Posisi.
     * @example
     * // Update or create a Posisi
     * const posisi = await prisma.posisi.upsert({
     *   create: {
     *     // ... data to create a Posisi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Posisi we want to update
     *   }
     * })
     */
    upsert<T extends posisiUpsertArgs>(args: SelectSubset<T, posisiUpsertArgs<ExtArgs>>): Prisma__posisiClient<$Result.GetResult<Prisma.$posisiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posisis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {posisiCountArgs} args - Arguments to filter Posisis to count.
     * @example
     * // Count the number of Posisis
     * const count = await prisma.posisi.count({
     *   where: {
     *     // ... the filter for the Posisis we want to count
     *   }
     * })
    **/
    count<T extends posisiCountArgs>(
      args?: Subset<T, posisiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PosisiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Posisi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PosisiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PosisiAggregateArgs>(args: Subset<T, PosisiAggregateArgs>): Prisma.PrismaPromise<GetPosisiAggregateType<T>>

    /**
     * Group by Posisi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {posisiGroupByArgs} args - Group by arguments.
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
      T extends posisiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: posisiGroupByArgs['orderBy'] }
        : { orderBy?: posisiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, posisiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPosisiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the posisi model
   */
  readonly fields: posisiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for posisi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__posisiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the posisi model
   */
  interface posisiFieldRefs {
    readonly id: FieldRef<"posisi", 'String'>
    readonly posisi: FieldRef<"posisi", 'String'>
  }
    

  // Custom InputTypes
  /**
   * posisi findUnique
   */
  export type posisiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posisi
     */
    select?: posisiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posisi
     */
    omit?: posisiOmit<ExtArgs> | null
    /**
     * Filter, which posisi to fetch.
     */
    where: posisiWhereUniqueInput
  }

  /**
   * posisi findUniqueOrThrow
   */
  export type posisiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posisi
     */
    select?: posisiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posisi
     */
    omit?: posisiOmit<ExtArgs> | null
    /**
     * Filter, which posisi to fetch.
     */
    where: posisiWhereUniqueInput
  }

  /**
   * posisi findFirst
   */
  export type posisiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posisi
     */
    select?: posisiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posisi
     */
    omit?: posisiOmit<ExtArgs> | null
    /**
     * Filter, which posisi to fetch.
     */
    where?: posisiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posisis to fetch.
     */
    orderBy?: posisiOrderByWithRelationInput | posisiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for posisis.
     */
    cursor?: posisiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posisis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posisis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of posisis.
     */
    distinct?: PosisiScalarFieldEnum | PosisiScalarFieldEnum[]
  }

  /**
   * posisi findFirstOrThrow
   */
  export type posisiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posisi
     */
    select?: posisiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posisi
     */
    omit?: posisiOmit<ExtArgs> | null
    /**
     * Filter, which posisi to fetch.
     */
    where?: posisiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posisis to fetch.
     */
    orderBy?: posisiOrderByWithRelationInput | posisiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for posisis.
     */
    cursor?: posisiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posisis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posisis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of posisis.
     */
    distinct?: PosisiScalarFieldEnum | PosisiScalarFieldEnum[]
  }

  /**
   * posisi findMany
   */
  export type posisiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posisi
     */
    select?: posisiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posisi
     */
    omit?: posisiOmit<ExtArgs> | null
    /**
     * Filter, which posisis to fetch.
     */
    where?: posisiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posisis to fetch.
     */
    orderBy?: posisiOrderByWithRelationInput | posisiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing posisis.
     */
    cursor?: posisiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posisis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posisis.
     */
    skip?: number
    distinct?: PosisiScalarFieldEnum | PosisiScalarFieldEnum[]
  }

  /**
   * posisi create
   */
  export type posisiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posisi
     */
    select?: posisiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posisi
     */
    omit?: posisiOmit<ExtArgs> | null
    /**
     * The data needed to create a posisi.
     */
    data: XOR<posisiCreateInput, posisiUncheckedCreateInput>
  }

  /**
   * posisi createMany
   */
  export type posisiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many posisis.
     */
    data: posisiCreateManyInput | posisiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * posisi update
   */
  export type posisiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posisi
     */
    select?: posisiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posisi
     */
    omit?: posisiOmit<ExtArgs> | null
    /**
     * The data needed to update a posisi.
     */
    data: XOR<posisiUpdateInput, posisiUncheckedUpdateInput>
    /**
     * Choose, which posisi to update.
     */
    where: posisiWhereUniqueInput
  }

  /**
   * posisi updateMany
   */
  export type posisiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update posisis.
     */
    data: XOR<posisiUpdateManyMutationInput, posisiUncheckedUpdateManyInput>
    /**
     * Filter which posisis to update
     */
    where?: posisiWhereInput
    /**
     * Limit how many posisis to update.
     */
    limit?: number
  }

  /**
   * posisi upsert
   */
  export type posisiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posisi
     */
    select?: posisiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posisi
     */
    omit?: posisiOmit<ExtArgs> | null
    /**
     * The filter to search for the posisi to update in case it exists.
     */
    where: posisiWhereUniqueInput
    /**
     * In case the posisi found by the `where` argument doesn't exist, create a new posisi with this data.
     */
    create: XOR<posisiCreateInput, posisiUncheckedCreateInput>
    /**
     * In case the posisi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<posisiUpdateInput, posisiUncheckedUpdateInput>
  }

  /**
   * posisi delete
   */
  export type posisiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posisi
     */
    select?: posisiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posisi
     */
    omit?: posisiOmit<ExtArgs> | null
    /**
     * Filter which posisi to delete.
     */
    where: posisiWhereUniqueInput
  }

  /**
   * posisi deleteMany
   */
  export type posisiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which posisis to delete
     */
    where?: posisiWhereInput
    /**
     * Limit how many posisis to delete.
     */
    limit?: number
  }

  /**
   * posisi without action
   */
  export type posisiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posisi
     */
    select?: posisiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posisi
     */
    omit?: posisiOmit<ExtArgs> | null
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


  export const BerkasScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    nama_file: 'nama_file',
    url: 'url',
    id_tugas: 'id_tugas',
    tanggal_upload: 'tanggal_upload'
  };

  export type BerkasScalarFieldEnum = (typeof BerkasScalarFieldEnum)[keyof typeof BerkasScalarFieldEnum]


  export const TugasScalarFieldEnum: {
    id: 'id',
    judul: 'judul',
    brief: 'brief',
    kuantitas: 'kuantitas',
    deadline: 'deadline',
    terlambat: 'terlambat',
    status: 'status',
    id_admin: 'id_admin',
    tanggal_dibuat: 'tanggal_dibuat',
    tanggal_diubah: 'tanggal_diubah'
  };

  export type TugasScalarFieldEnum = (typeof TugasScalarFieldEnum)[keyof typeof TugasScalarFieldEnum]


  export const PenggunaScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    email: 'email',
    posisi: 'posisi',
    password: 'password'
  };

  export type PenggunaScalarFieldEnum = (typeof PenggunaScalarFieldEnum)[keyof typeof PenggunaScalarFieldEnum]


  export const Tugas_penggunaScalarFieldEnum: {
    id: 'id',
    id_user: 'id_user',
    id_tugas: 'id_tugas'
  };

  export type Tugas_penggunaScalarFieldEnum = (typeof Tugas_penggunaScalarFieldEnum)[keyof typeof Tugas_penggunaScalarFieldEnum]


  export const Token_notifikasiScalarFieldEnum: {
    token: 'token',
    id_user: 'id_user'
  };

  export type Token_notifikasiScalarFieldEnum = (typeof Token_notifikasiScalarFieldEnum)[keyof typeof Token_notifikasiScalarFieldEnum]


  export const PosisiScalarFieldEnum: {
    id: 'id',
    posisi: 'posisi'
  };

  export type PosisiScalarFieldEnum = (typeof PosisiScalarFieldEnum)[keyof typeof PosisiScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const berkasOrderByRelevanceFieldEnum: {
    id: 'id',
    nama: 'nama',
    nama_file: 'nama_file',
    url: 'url',
    id_tugas: 'id_tugas'
  };

  export type berkasOrderByRelevanceFieldEnum = (typeof berkasOrderByRelevanceFieldEnum)[keyof typeof berkasOrderByRelevanceFieldEnum]


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


  export const penggunaOrderByRelevanceFieldEnum: {
    id: 'id',
    nama: 'nama',
    email: 'email',
    posisi: 'posisi',
    password: 'password'
  };

  export type penggunaOrderByRelevanceFieldEnum = (typeof penggunaOrderByRelevanceFieldEnum)[keyof typeof penggunaOrderByRelevanceFieldEnum]


  export const tugas_penggunaOrderByRelevanceFieldEnum: {
    id: 'id',
    id_user: 'id_user',
    id_tugas: 'id_tugas'
  };

  export type tugas_penggunaOrderByRelevanceFieldEnum = (typeof tugas_penggunaOrderByRelevanceFieldEnum)[keyof typeof tugas_penggunaOrderByRelevanceFieldEnum]


  export const token_notifikasiOrderByRelevanceFieldEnum: {
    token: 'token',
    id_user: 'id_user'
  };

  export type token_notifikasiOrderByRelevanceFieldEnum = (typeof token_notifikasiOrderByRelevanceFieldEnum)[keyof typeof token_notifikasiOrderByRelevanceFieldEnum]


  export const posisiOrderByRelevanceFieldEnum: {
    id: 'id',
    posisi: 'posisi'
  };

  export type posisiOrderByRelevanceFieldEnum = (typeof posisiOrderByRelevanceFieldEnum)[keyof typeof posisiOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type berkasWhereInput = {
    AND?: berkasWhereInput | berkasWhereInput[]
    OR?: berkasWhereInput[]
    NOT?: berkasWhereInput | berkasWhereInput[]
    id?: StringFilter<"berkas"> | string
    nama?: StringFilter<"berkas"> | string
    nama_file?: StringFilter<"berkas"> | string
    url?: StringFilter<"berkas"> | string
    id_tugas?: StringFilter<"berkas"> | string
    tanggal_upload?: DateTimeFilter<"berkas"> | Date | string
    tugas?: XOR<TugasScalarRelationFilter, tugasWhereInput>
  }

  export type berkasOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    nama_file?: SortOrder
    url?: SortOrder
    id_tugas?: SortOrder
    tanggal_upload?: SortOrder
    tugas?: tugasOrderByWithRelationInput
    _relevance?: berkasOrderByRelevanceInput
  }

  export type berkasWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: berkasWhereInput | berkasWhereInput[]
    OR?: berkasWhereInput[]
    NOT?: berkasWhereInput | berkasWhereInput[]
    nama?: StringFilter<"berkas"> | string
    nama_file?: StringFilter<"berkas"> | string
    url?: StringFilter<"berkas"> | string
    id_tugas?: StringFilter<"berkas"> | string
    tanggal_upload?: DateTimeFilter<"berkas"> | Date | string
    tugas?: XOR<TugasScalarRelationFilter, tugasWhereInput>
  }, "id">

  export type berkasOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    nama_file?: SortOrder
    url?: SortOrder
    id_tugas?: SortOrder
    tanggal_upload?: SortOrder
    _count?: berkasCountOrderByAggregateInput
    _max?: berkasMaxOrderByAggregateInput
    _min?: berkasMinOrderByAggregateInput
  }

  export type berkasScalarWhereWithAggregatesInput = {
    AND?: berkasScalarWhereWithAggregatesInput | berkasScalarWhereWithAggregatesInput[]
    OR?: berkasScalarWhereWithAggregatesInput[]
    NOT?: berkasScalarWhereWithAggregatesInput | berkasScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"berkas"> | string
    nama?: StringWithAggregatesFilter<"berkas"> | string
    nama_file?: StringWithAggregatesFilter<"berkas"> | string
    url?: StringWithAggregatesFilter<"berkas"> | string
    id_tugas?: StringWithAggregatesFilter<"berkas"> | string
    tanggal_upload?: DateTimeWithAggregatesFilter<"berkas"> | Date | string
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
    terlambat?: BoolFilter<"tugas"> | boolean
    status?: StringNullableFilter<"tugas"> | string | null
    id_admin?: StringNullableFilter<"tugas"> | string | null
    tanggal_dibuat?: DateTimeNullableFilter<"tugas"> | Date | string | null
    tanggal_diubah?: DateTimeNullableFilter<"tugas"> | Date | string | null
    berkas?: BerkasListRelationFilter
    pengguna?: XOR<PenggunaNullableScalarRelationFilter, penggunaWhereInput> | null
    tugas_pengguna?: Tugas_penggunaListRelationFilter
  }

  export type tugasOrderByWithRelationInput = {
    id?: SortOrder
    judul?: SortOrder
    brief?: SortOrderInput | SortOrder
    kuantitas?: SortOrderInput | SortOrder
    deadline?: SortOrderInput | SortOrder
    terlambat?: SortOrder
    status?: SortOrderInput | SortOrder
    id_admin?: SortOrderInput | SortOrder
    tanggal_dibuat?: SortOrderInput | SortOrder
    tanggal_diubah?: SortOrderInput | SortOrder
    berkas?: berkasOrderByRelationAggregateInput
    pengguna?: penggunaOrderByWithRelationInput
    tugas_pengguna?: tugas_penggunaOrderByRelationAggregateInput
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
    terlambat?: BoolFilter<"tugas"> | boolean
    status?: StringNullableFilter<"tugas"> | string | null
    id_admin?: StringNullableFilter<"tugas"> | string | null
    tanggal_dibuat?: DateTimeNullableFilter<"tugas"> | Date | string | null
    tanggal_diubah?: DateTimeNullableFilter<"tugas"> | Date | string | null
    berkas?: BerkasListRelationFilter
    pengguna?: XOR<PenggunaNullableScalarRelationFilter, penggunaWhereInput> | null
    tugas_pengguna?: Tugas_penggunaListRelationFilter
  }, "id">

  export type tugasOrderByWithAggregationInput = {
    id?: SortOrder
    judul?: SortOrder
    brief?: SortOrderInput | SortOrder
    kuantitas?: SortOrderInput | SortOrder
    deadline?: SortOrderInput | SortOrder
    terlambat?: SortOrder
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
    terlambat?: BoolWithAggregatesFilter<"tugas"> | boolean
    status?: StringNullableWithAggregatesFilter<"tugas"> | string | null
    id_admin?: StringNullableWithAggregatesFilter<"tugas"> | string | null
    tanggal_dibuat?: DateTimeNullableWithAggregatesFilter<"tugas"> | Date | string | null
    tanggal_diubah?: DateTimeNullableWithAggregatesFilter<"tugas"> | Date | string | null
  }

  export type penggunaWhereInput = {
    AND?: penggunaWhereInput | penggunaWhereInput[]
    OR?: penggunaWhereInput[]
    NOT?: penggunaWhereInput | penggunaWhereInput[]
    id?: StringFilter<"pengguna"> | string
    nama?: StringFilter<"pengguna"> | string
    email?: StringFilter<"pengguna"> | string
    posisi?: StringFilter<"pengguna"> | string
    password?: StringFilter<"pengguna"> | string
    token_notifikasi?: Token_notifikasiListRelationFilter
    tugas?: TugasListRelationFilter
    tugas_pengguna?: Tugas_penggunaListRelationFilter
  }

  export type penggunaOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    posisi?: SortOrder
    password?: SortOrder
    token_notifikasi?: token_notifikasiOrderByRelationAggregateInput
    tugas?: tugasOrderByRelationAggregateInput
    tugas_pengguna?: tugas_penggunaOrderByRelationAggregateInput
    _relevance?: penggunaOrderByRelevanceInput
  }

  export type penggunaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: penggunaWhereInput | penggunaWhereInput[]
    OR?: penggunaWhereInput[]
    NOT?: penggunaWhereInput | penggunaWhereInput[]
    nama?: StringFilter<"pengguna"> | string
    posisi?: StringFilter<"pengguna"> | string
    password?: StringFilter<"pengguna"> | string
    token_notifikasi?: Token_notifikasiListRelationFilter
    tugas?: TugasListRelationFilter
    tugas_pengguna?: Tugas_penggunaListRelationFilter
  }, "id" | "email">

  export type penggunaOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    posisi?: SortOrder
    password?: SortOrder
    _count?: penggunaCountOrderByAggregateInput
    _max?: penggunaMaxOrderByAggregateInput
    _min?: penggunaMinOrderByAggregateInput
  }

  export type penggunaScalarWhereWithAggregatesInput = {
    AND?: penggunaScalarWhereWithAggregatesInput | penggunaScalarWhereWithAggregatesInput[]
    OR?: penggunaScalarWhereWithAggregatesInput[]
    NOT?: penggunaScalarWhereWithAggregatesInput | penggunaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"pengguna"> | string
    nama?: StringWithAggregatesFilter<"pengguna"> | string
    email?: StringWithAggregatesFilter<"pengguna"> | string
    posisi?: StringWithAggregatesFilter<"pengguna"> | string
    password?: StringWithAggregatesFilter<"pengguna"> | string
  }

  export type tugas_penggunaWhereInput = {
    AND?: tugas_penggunaWhereInput | tugas_penggunaWhereInput[]
    OR?: tugas_penggunaWhereInput[]
    NOT?: tugas_penggunaWhereInput | tugas_penggunaWhereInput[]
    id?: StringFilter<"tugas_pengguna"> | string
    id_user?: StringFilter<"tugas_pengguna"> | string
    id_tugas?: StringFilter<"tugas_pengguna"> | string
    pengguna?: XOR<PenggunaScalarRelationFilter, penggunaWhereInput>
    tugas?: XOR<TugasScalarRelationFilter, tugasWhereInput>
  }

  export type tugas_penggunaOrderByWithRelationInput = {
    id?: SortOrder
    id_user?: SortOrder
    id_tugas?: SortOrder
    pengguna?: penggunaOrderByWithRelationInput
    tugas?: tugasOrderByWithRelationInput
    _relevance?: tugas_penggunaOrderByRelevanceInput
  }

  export type tugas_penggunaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: tugas_penggunaWhereInput | tugas_penggunaWhereInput[]
    OR?: tugas_penggunaWhereInput[]
    NOT?: tugas_penggunaWhereInput | tugas_penggunaWhereInput[]
    id_user?: StringFilter<"tugas_pengguna"> | string
    id_tugas?: StringFilter<"tugas_pengguna"> | string
    pengguna?: XOR<PenggunaScalarRelationFilter, penggunaWhereInput>
    tugas?: XOR<TugasScalarRelationFilter, tugasWhereInput>
  }, "id">

  export type tugas_penggunaOrderByWithAggregationInput = {
    id?: SortOrder
    id_user?: SortOrder
    id_tugas?: SortOrder
    _count?: tugas_penggunaCountOrderByAggregateInput
    _max?: tugas_penggunaMaxOrderByAggregateInput
    _min?: tugas_penggunaMinOrderByAggregateInput
  }

  export type tugas_penggunaScalarWhereWithAggregatesInput = {
    AND?: tugas_penggunaScalarWhereWithAggregatesInput | tugas_penggunaScalarWhereWithAggregatesInput[]
    OR?: tugas_penggunaScalarWhereWithAggregatesInput[]
    NOT?: tugas_penggunaScalarWhereWithAggregatesInput | tugas_penggunaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"tugas_pengguna"> | string
    id_user?: StringWithAggregatesFilter<"tugas_pengguna"> | string
    id_tugas?: StringWithAggregatesFilter<"tugas_pengguna"> | string
  }

  export type token_notifikasiWhereInput = {
    AND?: token_notifikasiWhereInput | token_notifikasiWhereInput[]
    OR?: token_notifikasiWhereInput[]
    NOT?: token_notifikasiWhereInput | token_notifikasiWhereInput[]
    token?: StringFilter<"token_notifikasi"> | string
    id_user?: StringFilter<"token_notifikasi"> | string
    pengguna?: XOR<PenggunaScalarRelationFilter, penggunaWhereInput>
  }

  export type token_notifikasiOrderByWithRelationInput = {
    token?: SortOrder
    id_user?: SortOrder
    pengguna?: penggunaOrderByWithRelationInput
    _relevance?: token_notifikasiOrderByRelevanceInput
  }

  export type token_notifikasiWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    AND?: token_notifikasiWhereInput | token_notifikasiWhereInput[]
    OR?: token_notifikasiWhereInput[]
    NOT?: token_notifikasiWhereInput | token_notifikasiWhereInput[]
    id_user?: StringFilter<"token_notifikasi"> | string
    pengguna?: XOR<PenggunaScalarRelationFilter, penggunaWhereInput>
  }, "token">

  export type token_notifikasiOrderByWithAggregationInput = {
    token?: SortOrder
    id_user?: SortOrder
    _count?: token_notifikasiCountOrderByAggregateInput
    _max?: token_notifikasiMaxOrderByAggregateInput
    _min?: token_notifikasiMinOrderByAggregateInput
  }

  export type token_notifikasiScalarWhereWithAggregatesInput = {
    AND?: token_notifikasiScalarWhereWithAggregatesInput | token_notifikasiScalarWhereWithAggregatesInput[]
    OR?: token_notifikasiScalarWhereWithAggregatesInput[]
    NOT?: token_notifikasiScalarWhereWithAggregatesInput | token_notifikasiScalarWhereWithAggregatesInput[]
    token?: StringWithAggregatesFilter<"token_notifikasi"> | string
    id_user?: StringWithAggregatesFilter<"token_notifikasi"> | string
  }

  export type posisiWhereInput = {
    AND?: posisiWhereInput | posisiWhereInput[]
    OR?: posisiWhereInput[]
    NOT?: posisiWhereInput | posisiWhereInput[]
    id?: StringFilter<"posisi"> | string
    posisi?: StringFilter<"posisi"> | string
  }

  export type posisiOrderByWithRelationInput = {
    id?: SortOrder
    posisi?: SortOrder
    _relevance?: posisiOrderByRelevanceInput
  }

  export type posisiWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: posisiWhereInput | posisiWhereInput[]
    OR?: posisiWhereInput[]
    NOT?: posisiWhereInput | posisiWhereInput[]
    posisi?: StringFilter<"posisi"> | string
  }, "id">

  export type posisiOrderByWithAggregationInput = {
    id?: SortOrder
    posisi?: SortOrder
    _count?: posisiCountOrderByAggregateInput
    _max?: posisiMaxOrderByAggregateInput
    _min?: posisiMinOrderByAggregateInput
  }

  export type posisiScalarWhereWithAggregatesInput = {
    AND?: posisiScalarWhereWithAggregatesInput | posisiScalarWhereWithAggregatesInput[]
    OR?: posisiScalarWhereWithAggregatesInput[]
    NOT?: posisiScalarWhereWithAggregatesInput | posisiScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"posisi"> | string
    posisi?: StringWithAggregatesFilter<"posisi"> | string
  }

  export type berkasCreateInput = {
    id: string
    nama: string
    nama_file: string
    url: string
    tanggal_upload?: Date | string
    tugas: tugasCreateNestedOneWithoutBerkasInput
  }

  export type berkasUncheckedCreateInput = {
    id: string
    nama: string
    nama_file: string
    url: string
    id_tugas: string
    tanggal_upload?: Date | string
  }

  export type berkasUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    nama_file?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    tanggal_upload?: DateTimeFieldUpdateOperationsInput | Date | string
    tugas?: tugasUpdateOneRequiredWithoutBerkasNestedInput
  }

  export type berkasUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    nama_file?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    id_tugas?: StringFieldUpdateOperationsInput | string
    tanggal_upload?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type berkasCreateManyInput = {
    id: string
    nama: string
    nama_file: string
    url: string
    id_tugas: string
    tanggal_upload?: Date | string
  }

  export type berkasUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    nama_file?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    tanggal_upload?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type berkasUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    nama_file?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    id_tugas?: StringFieldUpdateOperationsInput | string
    tanggal_upload?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tugasCreateInput = {
    id: string
    judul: string
    brief?: string | null
    kuantitas?: number | null
    deadline?: Date | string | null
    terlambat?: boolean
    status?: string | null
    tanggal_dibuat?: Date | string | null
    tanggal_diubah?: Date | string | null
    berkas?: berkasCreateNestedManyWithoutTugasInput
    pengguna?: penggunaCreateNestedOneWithoutTugasInput
    tugas_pengguna?: tugas_penggunaCreateNestedManyWithoutTugasInput
  }

  export type tugasUncheckedCreateInput = {
    id: string
    judul: string
    brief?: string | null
    kuantitas?: number | null
    deadline?: Date | string | null
    terlambat?: boolean
    status?: string | null
    id_admin?: string | null
    tanggal_dibuat?: Date | string | null
    tanggal_diubah?: Date | string | null
    berkas?: berkasUncheckedCreateNestedManyWithoutTugasInput
    tugas_pengguna?: tugas_penggunaUncheckedCreateNestedManyWithoutTugasInput
  }

  export type tugasUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    brief?: NullableStringFieldUpdateOperationsInput | string | null
    kuantitas?: NullableIntFieldUpdateOperationsInput | number | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    terlambat?: BoolFieldUpdateOperationsInput | boolean
    status?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_dibuat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_diubah?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    berkas?: berkasUpdateManyWithoutTugasNestedInput
    pengguna?: penggunaUpdateOneWithoutTugasNestedInput
    tugas_pengguna?: tugas_penggunaUpdateManyWithoutTugasNestedInput
  }

  export type tugasUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    brief?: NullableStringFieldUpdateOperationsInput | string | null
    kuantitas?: NullableIntFieldUpdateOperationsInput | number | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    terlambat?: BoolFieldUpdateOperationsInput | boolean
    status?: NullableStringFieldUpdateOperationsInput | string | null
    id_admin?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_dibuat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_diubah?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    berkas?: berkasUncheckedUpdateManyWithoutTugasNestedInput
    tugas_pengguna?: tugas_penggunaUncheckedUpdateManyWithoutTugasNestedInput
  }

  export type tugasCreateManyInput = {
    id: string
    judul: string
    brief?: string | null
    kuantitas?: number | null
    deadline?: Date | string | null
    terlambat?: boolean
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
    terlambat?: BoolFieldUpdateOperationsInput | boolean
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
    terlambat?: BoolFieldUpdateOperationsInput | boolean
    status?: NullableStringFieldUpdateOperationsInput | string | null
    id_admin?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_dibuat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_diubah?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type penggunaCreateInput = {
    id: string
    nama: string
    email: string
    posisi: string
    password: string
    token_notifikasi?: token_notifikasiCreateNestedManyWithoutPenggunaInput
    tugas?: tugasCreateNestedManyWithoutPenggunaInput
    tugas_pengguna?: tugas_penggunaCreateNestedManyWithoutPenggunaInput
  }

  export type penggunaUncheckedCreateInput = {
    id: string
    nama: string
    email: string
    posisi: string
    password: string
    token_notifikasi?: token_notifikasiUncheckedCreateNestedManyWithoutPenggunaInput
    tugas?: tugasUncheckedCreateNestedManyWithoutPenggunaInput
    tugas_pengguna?: tugas_penggunaUncheckedCreateNestedManyWithoutPenggunaInput
  }

  export type penggunaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    posisi?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    token_notifikasi?: token_notifikasiUpdateManyWithoutPenggunaNestedInput
    tugas?: tugasUpdateManyWithoutPenggunaNestedInput
    tugas_pengguna?: tugas_penggunaUpdateManyWithoutPenggunaNestedInput
  }

  export type penggunaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    posisi?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    token_notifikasi?: token_notifikasiUncheckedUpdateManyWithoutPenggunaNestedInput
    tugas?: tugasUncheckedUpdateManyWithoutPenggunaNestedInput
    tugas_pengguna?: tugas_penggunaUncheckedUpdateManyWithoutPenggunaNestedInput
  }

  export type penggunaCreateManyInput = {
    id: string
    nama: string
    email: string
    posisi: string
    password: string
  }

  export type penggunaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    posisi?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type penggunaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    posisi?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type tugas_penggunaCreateInput = {
    id: string
    pengguna: penggunaCreateNestedOneWithoutTugas_penggunaInput
    tugas: tugasCreateNestedOneWithoutTugas_penggunaInput
  }

  export type tugas_penggunaUncheckedCreateInput = {
    id: string
    id_user: string
    id_tugas: string
  }

  export type tugas_penggunaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pengguna?: penggunaUpdateOneRequiredWithoutTugas_penggunaNestedInput
    tugas?: tugasUpdateOneRequiredWithoutTugas_penggunaNestedInput
  }

  export type tugas_penggunaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    id_user?: StringFieldUpdateOperationsInput | string
    id_tugas?: StringFieldUpdateOperationsInput | string
  }

  export type tugas_penggunaCreateManyInput = {
    id: string
    id_user: string
    id_tugas: string
  }

  export type tugas_penggunaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type tugas_penggunaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    id_user?: StringFieldUpdateOperationsInput | string
    id_tugas?: StringFieldUpdateOperationsInput | string
  }

  export type token_notifikasiCreateInput = {
    token: string
    pengguna: penggunaCreateNestedOneWithoutToken_notifikasiInput
  }

  export type token_notifikasiUncheckedCreateInput = {
    token: string
    id_user: string
  }

  export type token_notifikasiUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    pengguna?: penggunaUpdateOneRequiredWithoutToken_notifikasiNestedInput
  }

  export type token_notifikasiUncheckedUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    id_user?: StringFieldUpdateOperationsInput | string
  }

  export type token_notifikasiCreateManyInput = {
    token: string
    id_user: string
  }

  export type token_notifikasiUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
  }

  export type token_notifikasiUncheckedUpdateManyInput = {
    token?: StringFieldUpdateOperationsInput | string
    id_user?: StringFieldUpdateOperationsInput | string
  }

  export type posisiCreateInput = {
    id: string
    posisi: string
  }

  export type posisiUncheckedCreateInput = {
    id: string
    posisi: string
  }

  export type posisiUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    posisi?: StringFieldUpdateOperationsInput | string
  }

  export type posisiUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    posisi?: StringFieldUpdateOperationsInput | string
  }

  export type posisiCreateManyInput = {
    id: string
    posisi: string
  }

  export type posisiUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    posisi?: StringFieldUpdateOperationsInput | string
  }

  export type posisiUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    posisi?: StringFieldUpdateOperationsInput | string
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

  export type berkasOrderByRelevanceInput = {
    fields: berkasOrderByRelevanceFieldEnum | berkasOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type berkasCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    nama_file?: SortOrder
    url?: SortOrder
    id_tugas?: SortOrder
    tanggal_upload?: SortOrder
  }

  export type berkasMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    nama_file?: SortOrder
    url?: SortOrder
    id_tugas?: SortOrder
    tanggal_upload?: SortOrder
  }

  export type berkasMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BerkasListRelationFilter = {
    every?: berkasWhereInput
    some?: berkasWhereInput
    none?: berkasWhereInput
  }

  export type PenggunaNullableScalarRelationFilter = {
    is?: penggunaWhereInput | null
    isNot?: penggunaWhereInput | null
  }

  export type Tugas_penggunaListRelationFilter = {
    every?: tugas_penggunaWhereInput
    some?: tugas_penggunaWhereInput
    none?: tugas_penggunaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type berkasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tugas_penggunaOrderByRelationAggregateInput = {
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
    terlambat?: SortOrder
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
    terlambat?: SortOrder
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
    terlambat?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type Token_notifikasiListRelationFilter = {
    every?: token_notifikasiWhereInput
    some?: token_notifikasiWhereInput
    none?: token_notifikasiWhereInput
  }

  export type TugasListRelationFilter = {
    every?: tugasWhereInput
    some?: tugasWhereInput
    none?: tugasWhereInput
  }

  export type token_notifikasiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tugasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type penggunaOrderByRelevanceInput = {
    fields: penggunaOrderByRelevanceFieldEnum | penggunaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type penggunaCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    posisi?: SortOrder
    password?: SortOrder
  }

  export type penggunaMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    posisi?: SortOrder
    password?: SortOrder
  }

  export type penggunaMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    posisi?: SortOrder
    password?: SortOrder
  }

  export type PenggunaScalarRelationFilter = {
    is?: penggunaWhereInput
    isNot?: penggunaWhereInput
  }

  export type tugas_penggunaOrderByRelevanceInput = {
    fields: tugas_penggunaOrderByRelevanceFieldEnum | tugas_penggunaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tugas_penggunaCountOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
    id_tugas?: SortOrder
  }

  export type tugas_penggunaMaxOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
    id_tugas?: SortOrder
  }

  export type tugas_penggunaMinOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
    id_tugas?: SortOrder
  }

  export type token_notifikasiOrderByRelevanceInput = {
    fields: token_notifikasiOrderByRelevanceFieldEnum | token_notifikasiOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type token_notifikasiCountOrderByAggregateInput = {
    token?: SortOrder
    id_user?: SortOrder
  }

  export type token_notifikasiMaxOrderByAggregateInput = {
    token?: SortOrder
    id_user?: SortOrder
  }

  export type token_notifikasiMinOrderByAggregateInput = {
    token?: SortOrder
    id_user?: SortOrder
  }

  export type posisiOrderByRelevanceInput = {
    fields: posisiOrderByRelevanceFieldEnum | posisiOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type posisiCountOrderByAggregateInput = {
    id?: SortOrder
    posisi?: SortOrder
  }

  export type posisiMaxOrderByAggregateInput = {
    id?: SortOrder
    posisi?: SortOrder
  }

  export type posisiMinOrderByAggregateInput = {
    id?: SortOrder
    posisi?: SortOrder
  }

  export type tugasCreateNestedOneWithoutBerkasInput = {
    create?: XOR<tugasCreateWithoutBerkasInput, tugasUncheckedCreateWithoutBerkasInput>
    connectOrCreate?: tugasCreateOrConnectWithoutBerkasInput
    connect?: tugasWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type tugasUpdateOneRequiredWithoutBerkasNestedInput = {
    create?: XOR<tugasCreateWithoutBerkasInput, tugasUncheckedCreateWithoutBerkasInput>
    connectOrCreate?: tugasCreateOrConnectWithoutBerkasInput
    upsert?: tugasUpsertWithoutBerkasInput
    connect?: tugasWhereUniqueInput
    update?: XOR<XOR<tugasUpdateToOneWithWhereWithoutBerkasInput, tugasUpdateWithoutBerkasInput>, tugasUncheckedUpdateWithoutBerkasInput>
  }

  export type berkasCreateNestedManyWithoutTugasInput = {
    create?: XOR<berkasCreateWithoutTugasInput, berkasUncheckedCreateWithoutTugasInput> | berkasCreateWithoutTugasInput[] | berkasUncheckedCreateWithoutTugasInput[]
    connectOrCreate?: berkasCreateOrConnectWithoutTugasInput | berkasCreateOrConnectWithoutTugasInput[]
    createMany?: berkasCreateManyTugasInputEnvelope
    connect?: berkasWhereUniqueInput | berkasWhereUniqueInput[]
  }

  export type penggunaCreateNestedOneWithoutTugasInput = {
    create?: XOR<penggunaCreateWithoutTugasInput, penggunaUncheckedCreateWithoutTugasInput>
    connectOrCreate?: penggunaCreateOrConnectWithoutTugasInput
    connect?: penggunaWhereUniqueInput
  }

  export type tugas_penggunaCreateNestedManyWithoutTugasInput = {
    create?: XOR<tugas_penggunaCreateWithoutTugasInput, tugas_penggunaUncheckedCreateWithoutTugasInput> | tugas_penggunaCreateWithoutTugasInput[] | tugas_penggunaUncheckedCreateWithoutTugasInput[]
    connectOrCreate?: tugas_penggunaCreateOrConnectWithoutTugasInput | tugas_penggunaCreateOrConnectWithoutTugasInput[]
    createMany?: tugas_penggunaCreateManyTugasInputEnvelope
    connect?: tugas_penggunaWhereUniqueInput | tugas_penggunaWhereUniqueInput[]
  }

  export type berkasUncheckedCreateNestedManyWithoutTugasInput = {
    create?: XOR<berkasCreateWithoutTugasInput, berkasUncheckedCreateWithoutTugasInput> | berkasCreateWithoutTugasInput[] | berkasUncheckedCreateWithoutTugasInput[]
    connectOrCreate?: berkasCreateOrConnectWithoutTugasInput | berkasCreateOrConnectWithoutTugasInput[]
    createMany?: berkasCreateManyTugasInputEnvelope
    connect?: berkasWhereUniqueInput | berkasWhereUniqueInput[]
  }

  export type tugas_penggunaUncheckedCreateNestedManyWithoutTugasInput = {
    create?: XOR<tugas_penggunaCreateWithoutTugasInput, tugas_penggunaUncheckedCreateWithoutTugasInput> | tugas_penggunaCreateWithoutTugasInput[] | tugas_penggunaUncheckedCreateWithoutTugasInput[]
    connectOrCreate?: tugas_penggunaCreateOrConnectWithoutTugasInput | tugas_penggunaCreateOrConnectWithoutTugasInput[]
    createMany?: tugas_penggunaCreateManyTugasInputEnvelope
    connect?: tugas_penggunaWhereUniqueInput | tugas_penggunaWhereUniqueInput[]
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

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type berkasUpdateManyWithoutTugasNestedInput = {
    create?: XOR<berkasCreateWithoutTugasInput, berkasUncheckedCreateWithoutTugasInput> | berkasCreateWithoutTugasInput[] | berkasUncheckedCreateWithoutTugasInput[]
    connectOrCreate?: berkasCreateOrConnectWithoutTugasInput | berkasCreateOrConnectWithoutTugasInput[]
    upsert?: berkasUpsertWithWhereUniqueWithoutTugasInput | berkasUpsertWithWhereUniqueWithoutTugasInput[]
    createMany?: berkasCreateManyTugasInputEnvelope
    set?: berkasWhereUniqueInput | berkasWhereUniqueInput[]
    disconnect?: berkasWhereUniqueInput | berkasWhereUniqueInput[]
    delete?: berkasWhereUniqueInput | berkasWhereUniqueInput[]
    connect?: berkasWhereUniqueInput | berkasWhereUniqueInput[]
    update?: berkasUpdateWithWhereUniqueWithoutTugasInput | berkasUpdateWithWhereUniqueWithoutTugasInput[]
    updateMany?: berkasUpdateManyWithWhereWithoutTugasInput | berkasUpdateManyWithWhereWithoutTugasInput[]
    deleteMany?: berkasScalarWhereInput | berkasScalarWhereInput[]
  }

  export type penggunaUpdateOneWithoutTugasNestedInput = {
    create?: XOR<penggunaCreateWithoutTugasInput, penggunaUncheckedCreateWithoutTugasInput>
    connectOrCreate?: penggunaCreateOrConnectWithoutTugasInput
    upsert?: penggunaUpsertWithoutTugasInput
    disconnect?: penggunaWhereInput | boolean
    delete?: penggunaWhereInput | boolean
    connect?: penggunaWhereUniqueInput
    update?: XOR<XOR<penggunaUpdateToOneWithWhereWithoutTugasInput, penggunaUpdateWithoutTugasInput>, penggunaUncheckedUpdateWithoutTugasInput>
  }

  export type tugas_penggunaUpdateManyWithoutTugasNestedInput = {
    create?: XOR<tugas_penggunaCreateWithoutTugasInput, tugas_penggunaUncheckedCreateWithoutTugasInput> | tugas_penggunaCreateWithoutTugasInput[] | tugas_penggunaUncheckedCreateWithoutTugasInput[]
    connectOrCreate?: tugas_penggunaCreateOrConnectWithoutTugasInput | tugas_penggunaCreateOrConnectWithoutTugasInput[]
    upsert?: tugas_penggunaUpsertWithWhereUniqueWithoutTugasInput | tugas_penggunaUpsertWithWhereUniqueWithoutTugasInput[]
    createMany?: tugas_penggunaCreateManyTugasInputEnvelope
    set?: tugas_penggunaWhereUniqueInput | tugas_penggunaWhereUniqueInput[]
    disconnect?: tugas_penggunaWhereUniqueInput | tugas_penggunaWhereUniqueInput[]
    delete?: tugas_penggunaWhereUniqueInput | tugas_penggunaWhereUniqueInput[]
    connect?: tugas_penggunaWhereUniqueInput | tugas_penggunaWhereUniqueInput[]
    update?: tugas_penggunaUpdateWithWhereUniqueWithoutTugasInput | tugas_penggunaUpdateWithWhereUniqueWithoutTugasInput[]
    updateMany?: tugas_penggunaUpdateManyWithWhereWithoutTugasInput | tugas_penggunaUpdateManyWithWhereWithoutTugasInput[]
    deleteMany?: tugas_penggunaScalarWhereInput | tugas_penggunaScalarWhereInput[]
  }

  export type berkasUncheckedUpdateManyWithoutTugasNestedInput = {
    create?: XOR<berkasCreateWithoutTugasInput, berkasUncheckedCreateWithoutTugasInput> | berkasCreateWithoutTugasInput[] | berkasUncheckedCreateWithoutTugasInput[]
    connectOrCreate?: berkasCreateOrConnectWithoutTugasInput | berkasCreateOrConnectWithoutTugasInput[]
    upsert?: berkasUpsertWithWhereUniqueWithoutTugasInput | berkasUpsertWithWhereUniqueWithoutTugasInput[]
    createMany?: berkasCreateManyTugasInputEnvelope
    set?: berkasWhereUniqueInput | berkasWhereUniqueInput[]
    disconnect?: berkasWhereUniqueInput | berkasWhereUniqueInput[]
    delete?: berkasWhereUniqueInput | berkasWhereUniqueInput[]
    connect?: berkasWhereUniqueInput | berkasWhereUniqueInput[]
    update?: berkasUpdateWithWhereUniqueWithoutTugasInput | berkasUpdateWithWhereUniqueWithoutTugasInput[]
    updateMany?: berkasUpdateManyWithWhereWithoutTugasInput | berkasUpdateManyWithWhereWithoutTugasInput[]
    deleteMany?: berkasScalarWhereInput | berkasScalarWhereInput[]
  }

  export type tugas_penggunaUncheckedUpdateManyWithoutTugasNestedInput = {
    create?: XOR<tugas_penggunaCreateWithoutTugasInput, tugas_penggunaUncheckedCreateWithoutTugasInput> | tugas_penggunaCreateWithoutTugasInput[] | tugas_penggunaUncheckedCreateWithoutTugasInput[]
    connectOrCreate?: tugas_penggunaCreateOrConnectWithoutTugasInput | tugas_penggunaCreateOrConnectWithoutTugasInput[]
    upsert?: tugas_penggunaUpsertWithWhereUniqueWithoutTugasInput | tugas_penggunaUpsertWithWhereUniqueWithoutTugasInput[]
    createMany?: tugas_penggunaCreateManyTugasInputEnvelope
    set?: tugas_penggunaWhereUniqueInput | tugas_penggunaWhereUniqueInput[]
    disconnect?: tugas_penggunaWhereUniqueInput | tugas_penggunaWhereUniqueInput[]
    delete?: tugas_penggunaWhereUniqueInput | tugas_penggunaWhereUniqueInput[]
    connect?: tugas_penggunaWhereUniqueInput | tugas_penggunaWhereUniqueInput[]
    update?: tugas_penggunaUpdateWithWhereUniqueWithoutTugasInput | tugas_penggunaUpdateWithWhereUniqueWithoutTugasInput[]
    updateMany?: tugas_penggunaUpdateManyWithWhereWithoutTugasInput | tugas_penggunaUpdateManyWithWhereWithoutTugasInput[]
    deleteMany?: tugas_penggunaScalarWhereInput | tugas_penggunaScalarWhereInput[]
  }

  export type token_notifikasiCreateNestedManyWithoutPenggunaInput = {
    create?: XOR<token_notifikasiCreateWithoutPenggunaInput, token_notifikasiUncheckedCreateWithoutPenggunaInput> | token_notifikasiCreateWithoutPenggunaInput[] | token_notifikasiUncheckedCreateWithoutPenggunaInput[]
    connectOrCreate?: token_notifikasiCreateOrConnectWithoutPenggunaInput | token_notifikasiCreateOrConnectWithoutPenggunaInput[]
    createMany?: token_notifikasiCreateManyPenggunaInputEnvelope
    connect?: token_notifikasiWhereUniqueInput | token_notifikasiWhereUniqueInput[]
  }

  export type tugasCreateNestedManyWithoutPenggunaInput = {
    create?: XOR<tugasCreateWithoutPenggunaInput, tugasUncheckedCreateWithoutPenggunaInput> | tugasCreateWithoutPenggunaInput[] | tugasUncheckedCreateWithoutPenggunaInput[]
    connectOrCreate?: tugasCreateOrConnectWithoutPenggunaInput | tugasCreateOrConnectWithoutPenggunaInput[]
    createMany?: tugasCreateManyPenggunaInputEnvelope
    connect?: tugasWhereUniqueInput | tugasWhereUniqueInput[]
  }

  export type tugas_penggunaCreateNestedManyWithoutPenggunaInput = {
    create?: XOR<tugas_penggunaCreateWithoutPenggunaInput, tugas_penggunaUncheckedCreateWithoutPenggunaInput> | tugas_penggunaCreateWithoutPenggunaInput[] | tugas_penggunaUncheckedCreateWithoutPenggunaInput[]
    connectOrCreate?: tugas_penggunaCreateOrConnectWithoutPenggunaInput | tugas_penggunaCreateOrConnectWithoutPenggunaInput[]
    createMany?: tugas_penggunaCreateManyPenggunaInputEnvelope
    connect?: tugas_penggunaWhereUniqueInput | tugas_penggunaWhereUniqueInput[]
  }

  export type token_notifikasiUncheckedCreateNestedManyWithoutPenggunaInput = {
    create?: XOR<token_notifikasiCreateWithoutPenggunaInput, token_notifikasiUncheckedCreateWithoutPenggunaInput> | token_notifikasiCreateWithoutPenggunaInput[] | token_notifikasiUncheckedCreateWithoutPenggunaInput[]
    connectOrCreate?: token_notifikasiCreateOrConnectWithoutPenggunaInput | token_notifikasiCreateOrConnectWithoutPenggunaInput[]
    createMany?: token_notifikasiCreateManyPenggunaInputEnvelope
    connect?: token_notifikasiWhereUniqueInput | token_notifikasiWhereUniqueInput[]
  }

  export type tugasUncheckedCreateNestedManyWithoutPenggunaInput = {
    create?: XOR<tugasCreateWithoutPenggunaInput, tugasUncheckedCreateWithoutPenggunaInput> | tugasCreateWithoutPenggunaInput[] | tugasUncheckedCreateWithoutPenggunaInput[]
    connectOrCreate?: tugasCreateOrConnectWithoutPenggunaInput | tugasCreateOrConnectWithoutPenggunaInput[]
    createMany?: tugasCreateManyPenggunaInputEnvelope
    connect?: tugasWhereUniqueInput | tugasWhereUniqueInput[]
  }

  export type tugas_penggunaUncheckedCreateNestedManyWithoutPenggunaInput = {
    create?: XOR<tugas_penggunaCreateWithoutPenggunaInput, tugas_penggunaUncheckedCreateWithoutPenggunaInput> | tugas_penggunaCreateWithoutPenggunaInput[] | tugas_penggunaUncheckedCreateWithoutPenggunaInput[]
    connectOrCreate?: tugas_penggunaCreateOrConnectWithoutPenggunaInput | tugas_penggunaCreateOrConnectWithoutPenggunaInput[]
    createMany?: tugas_penggunaCreateManyPenggunaInputEnvelope
    connect?: tugas_penggunaWhereUniqueInput | tugas_penggunaWhereUniqueInput[]
  }

  export type token_notifikasiUpdateManyWithoutPenggunaNestedInput = {
    create?: XOR<token_notifikasiCreateWithoutPenggunaInput, token_notifikasiUncheckedCreateWithoutPenggunaInput> | token_notifikasiCreateWithoutPenggunaInput[] | token_notifikasiUncheckedCreateWithoutPenggunaInput[]
    connectOrCreate?: token_notifikasiCreateOrConnectWithoutPenggunaInput | token_notifikasiCreateOrConnectWithoutPenggunaInput[]
    upsert?: token_notifikasiUpsertWithWhereUniqueWithoutPenggunaInput | token_notifikasiUpsertWithWhereUniqueWithoutPenggunaInput[]
    createMany?: token_notifikasiCreateManyPenggunaInputEnvelope
    set?: token_notifikasiWhereUniqueInput | token_notifikasiWhereUniqueInput[]
    disconnect?: token_notifikasiWhereUniqueInput | token_notifikasiWhereUniqueInput[]
    delete?: token_notifikasiWhereUniqueInput | token_notifikasiWhereUniqueInput[]
    connect?: token_notifikasiWhereUniqueInput | token_notifikasiWhereUniqueInput[]
    update?: token_notifikasiUpdateWithWhereUniqueWithoutPenggunaInput | token_notifikasiUpdateWithWhereUniqueWithoutPenggunaInput[]
    updateMany?: token_notifikasiUpdateManyWithWhereWithoutPenggunaInput | token_notifikasiUpdateManyWithWhereWithoutPenggunaInput[]
    deleteMany?: token_notifikasiScalarWhereInput | token_notifikasiScalarWhereInput[]
  }

  export type tugasUpdateManyWithoutPenggunaNestedInput = {
    create?: XOR<tugasCreateWithoutPenggunaInput, tugasUncheckedCreateWithoutPenggunaInput> | tugasCreateWithoutPenggunaInput[] | tugasUncheckedCreateWithoutPenggunaInput[]
    connectOrCreate?: tugasCreateOrConnectWithoutPenggunaInput | tugasCreateOrConnectWithoutPenggunaInput[]
    upsert?: tugasUpsertWithWhereUniqueWithoutPenggunaInput | tugasUpsertWithWhereUniqueWithoutPenggunaInput[]
    createMany?: tugasCreateManyPenggunaInputEnvelope
    set?: tugasWhereUniqueInput | tugasWhereUniqueInput[]
    disconnect?: tugasWhereUniqueInput | tugasWhereUniqueInput[]
    delete?: tugasWhereUniqueInput | tugasWhereUniqueInput[]
    connect?: tugasWhereUniqueInput | tugasWhereUniqueInput[]
    update?: tugasUpdateWithWhereUniqueWithoutPenggunaInput | tugasUpdateWithWhereUniqueWithoutPenggunaInput[]
    updateMany?: tugasUpdateManyWithWhereWithoutPenggunaInput | tugasUpdateManyWithWhereWithoutPenggunaInput[]
    deleteMany?: tugasScalarWhereInput | tugasScalarWhereInput[]
  }

  export type tugas_penggunaUpdateManyWithoutPenggunaNestedInput = {
    create?: XOR<tugas_penggunaCreateWithoutPenggunaInput, tugas_penggunaUncheckedCreateWithoutPenggunaInput> | tugas_penggunaCreateWithoutPenggunaInput[] | tugas_penggunaUncheckedCreateWithoutPenggunaInput[]
    connectOrCreate?: tugas_penggunaCreateOrConnectWithoutPenggunaInput | tugas_penggunaCreateOrConnectWithoutPenggunaInput[]
    upsert?: tugas_penggunaUpsertWithWhereUniqueWithoutPenggunaInput | tugas_penggunaUpsertWithWhereUniqueWithoutPenggunaInput[]
    createMany?: tugas_penggunaCreateManyPenggunaInputEnvelope
    set?: tugas_penggunaWhereUniqueInput | tugas_penggunaWhereUniqueInput[]
    disconnect?: tugas_penggunaWhereUniqueInput | tugas_penggunaWhereUniqueInput[]
    delete?: tugas_penggunaWhereUniqueInput | tugas_penggunaWhereUniqueInput[]
    connect?: tugas_penggunaWhereUniqueInput | tugas_penggunaWhereUniqueInput[]
    update?: tugas_penggunaUpdateWithWhereUniqueWithoutPenggunaInput | tugas_penggunaUpdateWithWhereUniqueWithoutPenggunaInput[]
    updateMany?: tugas_penggunaUpdateManyWithWhereWithoutPenggunaInput | tugas_penggunaUpdateManyWithWhereWithoutPenggunaInput[]
    deleteMany?: tugas_penggunaScalarWhereInput | tugas_penggunaScalarWhereInput[]
  }

  export type token_notifikasiUncheckedUpdateManyWithoutPenggunaNestedInput = {
    create?: XOR<token_notifikasiCreateWithoutPenggunaInput, token_notifikasiUncheckedCreateWithoutPenggunaInput> | token_notifikasiCreateWithoutPenggunaInput[] | token_notifikasiUncheckedCreateWithoutPenggunaInput[]
    connectOrCreate?: token_notifikasiCreateOrConnectWithoutPenggunaInput | token_notifikasiCreateOrConnectWithoutPenggunaInput[]
    upsert?: token_notifikasiUpsertWithWhereUniqueWithoutPenggunaInput | token_notifikasiUpsertWithWhereUniqueWithoutPenggunaInput[]
    createMany?: token_notifikasiCreateManyPenggunaInputEnvelope
    set?: token_notifikasiWhereUniqueInput | token_notifikasiWhereUniqueInput[]
    disconnect?: token_notifikasiWhereUniqueInput | token_notifikasiWhereUniqueInput[]
    delete?: token_notifikasiWhereUniqueInput | token_notifikasiWhereUniqueInput[]
    connect?: token_notifikasiWhereUniqueInput | token_notifikasiWhereUniqueInput[]
    update?: token_notifikasiUpdateWithWhereUniqueWithoutPenggunaInput | token_notifikasiUpdateWithWhereUniqueWithoutPenggunaInput[]
    updateMany?: token_notifikasiUpdateManyWithWhereWithoutPenggunaInput | token_notifikasiUpdateManyWithWhereWithoutPenggunaInput[]
    deleteMany?: token_notifikasiScalarWhereInput | token_notifikasiScalarWhereInput[]
  }

  export type tugasUncheckedUpdateManyWithoutPenggunaNestedInput = {
    create?: XOR<tugasCreateWithoutPenggunaInput, tugasUncheckedCreateWithoutPenggunaInput> | tugasCreateWithoutPenggunaInput[] | tugasUncheckedCreateWithoutPenggunaInput[]
    connectOrCreate?: tugasCreateOrConnectWithoutPenggunaInput | tugasCreateOrConnectWithoutPenggunaInput[]
    upsert?: tugasUpsertWithWhereUniqueWithoutPenggunaInput | tugasUpsertWithWhereUniqueWithoutPenggunaInput[]
    createMany?: tugasCreateManyPenggunaInputEnvelope
    set?: tugasWhereUniqueInput | tugasWhereUniqueInput[]
    disconnect?: tugasWhereUniqueInput | tugasWhereUniqueInput[]
    delete?: tugasWhereUniqueInput | tugasWhereUniqueInput[]
    connect?: tugasWhereUniqueInput | tugasWhereUniqueInput[]
    update?: tugasUpdateWithWhereUniqueWithoutPenggunaInput | tugasUpdateWithWhereUniqueWithoutPenggunaInput[]
    updateMany?: tugasUpdateManyWithWhereWithoutPenggunaInput | tugasUpdateManyWithWhereWithoutPenggunaInput[]
    deleteMany?: tugasScalarWhereInput | tugasScalarWhereInput[]
  }

  export type tugas_penggunaUncheckedUpdateManyWithoutPenggunaNestedInput = {
    create?: XOR<tugas_penggunaCreateWithoutPenggunaInput, tugas_penggunaUncheckedCreateWithoutPenggunaInput> | tugas_penggunaCreateWithoutPenggunaInput[] | tugas_penggunaUncheckedCreateWithoutPenggunaInput[]
    connectOrCreate?: tugas_penggunaCreateOrConnectWithoutPenggunaInput | tugas_penggunaCreateOrConnectWithoutPenggunaInput[]
    upsert?: tugas_penggunaUpsertWithWhereUniqueWithoutPenggunaInput | tugas_penggunaUpsertWithWhereUniqueWithoutPenggunaInput[]
    createMany?: tugas_penggunaCreateManyPenggunaInputEnvelope
    set?: tugas_penggunaWhereUniqueInput | tugas_penggunaWhereUniqueInput[]
    disconnect?: tugas_penggunaWhereUniqueInput | tugas_penggunaWhereUniqueInput[]
    delete?: tugas_penggunaWhereUniqueInput | tugas_penggunaWhereUniqueInput[]
    connect?: tugas_penggunaWhereUniqueInput | tugas_penggunaWhereUniqueInput[]
    update?: tugas_penggunaUpdateWithWhereUniqueWithoutPenggunaInput | tugas_penggunaUpdateWithWhereUniqueWithoutPenggunaInput[]
    updateMany?: tugas_penggunaUpdateManyWithWhereWithoutPenggunaInput | tugas_penggunaUpdateManyWithWhereWithoutPenggunaInput[]
    deleteMany?: tugas_penggunaScalarWhereInput | tugas_penggunaScalarWhereInput[]
  }

  export type penggunaCreateNestedOneWithoutTugas_penggunaInput = {
    create?: XOR<penggunaCreateWithoutTugas_penggunaInput, penggunaUncheckedCreateWithoutTugas_penggunaInput>
    connectOrCreate?: penggunaCreateOrConnectWithoutTugas_penggunaInput
    connect?: penggunaWhereUniqueInput
  }

  export type tugasCreateNestedOneWithoutTugas_penggunaInput = {
    create?: XOR<tugasCreateWithoutTugas_penggunaInput, tugasUncheckedCreateWithoutTugas_penggunaInput>
    connectOrCreate?: tugasCreateOrConnectWithoutTugas_penggunaInput
    connect?: tugasWhereUniqueInput
  }

  export type penggunaUpdateOneRequiredWithoutTugas_penggunaNestedInput = {
    create?: XOR<penggunaCreateWithoutTugas_penggunaInput, penggunaUncheckedCreateWithoutTugas_penggunaInput>
    connectOrCreate?: penggunaCreateOrConnectWithoutTugas_penggunaInput
    upsert?: penggunaUpsertWithoutTugas_penggunaInput
    connect?: penggunaWhereUniqueInput
    update?: XOR<XOR<penggunaUpdateToOneWithWhereWithoutTugas_penggunaInput, penggunaUpdateWithoutTugas_penggunaInput>, penggunaUncheckedUpdateWithoutTugas_penggunaInput>
  }

  export type tugasUpdateOneRequiredWithoutTugas_penggunaNestedInput = {
    create?: XOR<tugasCreateWithoutTugas_penggunaInput, tugasUncheckedCreateWithoutTugas_penggunaInput>
    connectOrCreate?: tugasCreateOrConnectWithoutTugas_penggunaInput
    upsert?: tugasUpsertWithoutTugas_penggunaInput
    connect?: tugasWhereUniqueInput
    update?: XOR<XOR<tugasUpdateToOneWithWhereWithoutTugas_penggunaInput, tugasUpdateWithoutTugas_penggunaInput>, tugasUncheckedUpdateWithoutTugas_penggunaInput>
  }

  export type penggunaCreateNestedOneWithoutToken_notifikasiInput = {
    create?: XOR<penggunaCreateWithoutToken_notifikasiInput, penggunaUncheckedCreateWithoutToken_notifikasiInput>
    connectOrCreate?: penggunaCreateOrConnectWithoutToken_notifikasiInput
    connect?: penggunaWhereUniqueInput
  }

  export type penggunaUpdateOneRequiredWithoutToken_notifikasiNestedInput = {
    create?: XOR<penggunaCreateWithoutToken_notifikasiInput, penggunaUncheckedCreateWithoutToken_notifikasiInput>
    connectOrCreate?: penggunaCreateOrConnectWithoutToken_notifikasiInput
    upsert?: penggunaUpsertWithoutToken_notifikasiInput
    connect?: penggunaWhereUniqueInput
    update?: XOR<XOR<penggunaUpdateToOneWithWhereWithoutToken_notifikasiInput, penggunaUpdateWithoutToken_notifikasiInput>, penggunaUncheckedUpdateWithoutToken_notifikasiInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type tugasCreateWithoutBerkasInput = {
    id: string
    judul: string
    brief?: string | null
    kuantitas?: number | null
    deadline?: Date | string | null
    terlambat?: boolean
    status?: string | null
    tanggal_dibuat?: Date | string | null
    tanggal_diubah?: Date | string | null
    pengguna?: penggunaCreateNestedOneWithoutTugasInput
    tugas_pengguna?: tugas_penggunaCreateNestedManyWithoutTugasInput
  }

  export type tugasUncheckedCreateWithoutBerkasInput = {
    id: string
    judul: string
    brief?: string | null
    kuantitas?: number | null
    deadline?: Date | string | null
    terlambat?: boolean
    status?: string | null
    id_admin?: string | null
    tanggal_dibuat?: Date | string | null
    tanggal_diubah?: Date | string | null
    tugas_pengguna?: tugas_penggunaUncheckedCreateNestedManyWithoutTugasInput
  }

  export type tugasCreateOrConnectWithoutBerkasInput = {
    where: tugasWhereUniqueInput
    create: XOR<tugasCreateWithoutBerkasInput, tugasUncheckedCreateWithoutBerkasInput>
  }

  export type tugasUpsertWithoutBerkasInput = {
    update: XOR<tugasUpdateWithoutBerkasInput, tugasUncheckedUpdateWithoutBerkasInput>
    create: XOR<tugasCreateWithoutBerkasInput, tugasUncheckedCreateWithoutBerkasInput>
    where?: tugasWhereInput
  }

  export type tugasUpdateToOneWithWhereWithoutBerkasInput = {
    where?: tugasWhereInput
    data: XOR<tugasUpdateWithoutBerkasInput, tugasUncheckedUpdateWithoutBerkasInput>
  }

  export type tugasUpdateWithoutBerkasInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    brief?: NullableStringFieldUpdateOperationsInput | string | null
    kuantitas?: NullableIntFieldUpdateOperationsInput | number | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    terlambat?: BoolFieldUpdateOperationsInput | boolean
    status?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_dibuat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_diubah?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pengguna?: penggunaUpdateOneWithoutTugasNestedInput
    tugas_pengguna?: tugas_penggunaUpdateManyWithoutTugasNestedInput
  }

  export type tugasUncheckedUpdateWithoutBerkasInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    brief?: NullableStringFieldUpdateOperationsInput | string | null
    kuantitas?: NullableIntFieldUpdateOperationsInput | number | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    terlambat?: BoolFieldUpdateOperationsInput | boolean
    status?: NullableStringFieldUpdateOperationsInput | string | null
    id_admin?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_dibuat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_diubah?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tugas_pengguna?: tugas_penggunaUncheckedUpdateManyWithoutTugasNestedInput
  }

  export type berkasCreateWithoutTugasInput = {
    id: string
    nama: string
    nama_file: string
    url: string
    tanggal_upload?: Date | string
  }

  export type berkasUncheckedCreateWithoutTugasInput = {
    id: string
    nama: string
    nama_file: string
    url: string
    tanggal_upload?: Date | string
  }

  export type berkasCreateOrConnectWithoutTugasInput = {
    where: berkasWhereUniqueInput
    create: XOR<berkasCreateWithoutTugasInput, berkasUncheckedCreateWithoutTugasInput>
  }

  export type berkasCreateManyTugasInputEnvelope = {
    data: berkasCreateManyTugasInput | berkasCreateManyTugasInput[]
    skipDuplicates?: boolean
  }

  export type penggunaCreateWithoutTugasInput = {
    id: string
    nama: string
    email: string
    posisi: string
    password: string
    token_notifikasi?: token_notifikasiCreateNestedManyWithoutPenggunaInput
    tugas_pengguna?: tugas_penggunaCreateNestedManyWithoutPenggunaInput
  }

  export type penggunaUncheckedCreateWithoutTugasInput = {
    id: string
    nama: string
    email: string
    posisi: string
    password: string
    token_notifikasi?: token_notifikasiUncheckedCreateNestedManyWithoutPenggunaInput
    tugas_pengguna?: tugas_penggunaUncheckedCreateNestedManyWithoutPenggunaInput
  }

  export type penggunaCreateOrConnectWithoutTugasInput = {
    where: penggunaWhereUniqueInput
    create: XOR<penggunaCreateWithoutTugasInput, penggunaUncheckedCreateWithoutTugasInput>
  }

  export type tugas_penggunaCreateWithoutTugasInput = {
    id: string
    pengguna: penggunaCreateNestedOneWithoutTugas_penggunaInput
  }

  export type tugas_penggunaUncheckedCreateWithoutTugasInput = {
    id: string
    id_user: string
  }

  export type tugas_penggunaCreateOrConnectWithoutTugasInput = {
    where: tugas_penggunaWhereUniqueInput
    create: XOR<tugas_penggunaCreateWithoutTugasInput, tugas_penggunaUncheckedCreateWithoutTugasInput>
  }

  export type tugas_penggunaCreateManyTugasInputEnvelope = {
    data: tugas_penggunaCreateManyTugasInput | tugas_penggunaCreateManyTugasInput[]
    skipDuplicates?: boolean
  }

  export type berkasUpsertWithWhereUniqueWithoutTugasInput = {
    where: berkasWhereUniqueInput
    update: XOR<berkasUpdateWithoutTugasInput, berkasUncheckedUpdateWithoutTugasInput>
    create: XOR<berkasCreateWithoutTugasInput, berkasUncheckedCreateWithoutTugasInput>
  }

  export type berkasUpdateWithWhereUniqueWithoutTugasInput = {
    where: berkasWhereUniqueInput
    data: XOR<berkasUpdateWithoutTugasInput, berkasUncheckedUpdateWithoutTugasInput>
  }

  export type berkasUpdateManyWithWhereWithoutTugasInput = {
    where: berkasScalarWhereInput
    data: XOR<berkasUpdateManyMutationInput, berkasUncheckedUpdateManyWithoutTugasInput>
  }

  export type berkasScalarWhereInput = {
    AND?: berkasScalarWhereInput | berkasScalarWhereInput[]
    OR?: berkasScalarWhereInput[]
    NOT?: berkasScalarWhereInput | berkasScalarWhereInput[]
    id?: StringFilter<"berkas"> | string
    nama?: StringFilter<"berkas"> | string
    nama_file?: StringFilter<"berkas"> | string
    url?: StringFilter<"berkas"> | string
    id_tugas?: StringFilter<"berkas"> | string
    tanggal_upload?: DateTimeFilter<"berkas"> | Date | string
  }

  export type penggunaUpsertWithoutTugasInput = {
    update: XOR<penggunaUpdateWithoutTugasInput, penggunaUncheckedUpdateWithoutTugasInput>
    create: XOR<penggunaCreateWithoutTugasInput, penggunaUncheckedCreateWithoutTugasInput>
    where?: penggunaWhereInput
  }

  export type penggunaUpdateToOneWithWhereWithoutTugasInput = {
    where?: penggunaWhereInput
    data: XOR<penggunaUpdateWithoutTugasInput, penggunaUncheckedUpdateWithoutTugasInput>
  }

  export type penggunaUpdateWithoutTugasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    posisi?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    token_notifikasi?: token_notifikasiUpdateManyWithoutPenggunaNestedInput
    tugas_pengguna?: tugas_penggunaUpdateManyWithoutPenggunaNestedInput
  }

  export type penggunaUncheckedUpdateWithoutTugasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    posisi?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    token_notifikasi?: token_notifikasiUncheckedUpdateManyWithoutPenggunaNestedInput
    tugas_pengguna?: tugas_penggunaUncheckedUpdateManyWithoutPenggunaNestedInput
  }

  export type tugas_penggunaUpsertWithWhereUniqueWithoutTugasInput = {
    where: tugas_penggunaWhereUniqueInput
    update: XOR<tugas_penggunaUpdateWithoutTugasInput, tugas_penggunaUncheckedUpdateWithoutTugasInput>
    create: XOR<tugas_penggunaCreateWithoutTugasInput, tugas_penggunaUncheckedCreateWithoutTugasInput>
  }

  export type tugas_penggunaUpdateWithWhereUniqueWithoutTugasInput = {
    where: tugas_penggunaWhereUniqueInput
    data: XOR<tugas_penggunaUpdateWithoutTugasInput, tugas_penggunaUncheckedUpdateWithoutTugasInput>
  }

  export type tugas_penggunaUpdateManyWithWhereWithoutTugasInput = {
    where: tugas_penggunaScalarWhereInput
    data: XOR<tugas_penggunaUpdateManyMutationInput, tugas_penggunaUncheckedUpdateManyWithoutTugasInput>
  }

  export type tugas_penggunaScalarWhereInput = {
    AND?: tugas_penggunaScalarWhereInput | tugas_penggunaScalarWhereInput[]
    OR?: tugas_penggunaScalarWhereInput[]
    NOT?: tugas_penggunaScalarWhereInput | tugas_penggunaScalarWhereInput[]
    id?: StringFilter<"tugas_pengguna"> | string
    id_user?: StringFilter<"tugas_pengguna"> | string
    id_tugas?: StringFilter<"tugas_pengguna"> | string
  }

  export type token_notifikasiCreateWithoutPenggunaInput = {
    token: string
  }

  export type token_notifikasiUncheckedCreateWithoutPenggunaInput = {
    token: string
  }

  export type token_notifikasiCreateOrConnectWithoutPenggunaInput = {
    where: token_notifikasiWhereUniqueInput
    create: XOR<token_notifikasiCreateWithoutPenggunaInput, token_notifikasiUncheckedCreateWithoutPenggunaInput>
  }

  export type token_notifikasiCreateManyPenggunaInputEnvelope = {
    data: token_notifikasiCreateManyPenggunaInput | token_notifikasiCreateManyPenggunaInput[]
    skipDuplicates?: boolean
  }

  export type tugasCreateWithoutPenggunaInput = {
    id: string
    judul: string
    brief?: string | null
    kuantitas?: number | null
    deadline?: Date | string | null
    terlambat?: boolean
    status?: string | null
    tanggal_dibuat?: Date | string | null
    tanggal_diubah?: Date | string | null
    berkas?: berkasCreateNestedManyWithoutTugasInput
    tugas_pengguna?: tugas_penggunaCreateNestedManyWithoutTugasInput
  }

  export type tugasUncheckedCreateWithoutPenggunaInput = {
    id: string
    judul: string
    brief?: string | null
    kuantitas?: number | null
    deadline?: Date | string | null
    terlambat?: boolean
    status?: string | null
    tanggal_dibuat?: Date | string | null
    tanggal_diubah?: Date | string | null
    berkas?: berkasUncheckedCreateNestedManyWithoutTugasInput
    tugas_pengguna?: tugas_penggunaUncheckedCreateNestedManyWithoutTugasInput
  }

  export type tugasCreateOrConnectWithoutPenggunaInput = {
    where: tugasWhereUniqueInput
    create: XOR<tugasCreateWithoutPenggunaInput, tugasUncheckedCreateWithoutPenggunaInput>
  }

  export type tugasCreateManyPenggunaInputEnvelope = {
    data: tugasCreateManyPenggunaInput | tugasCreateManyPenggunaInput[]
    skipDuplicates?: boolean
  }

  export type tugas_penggunaCreateWithoutPenggunaInput = {
    id: string
    tugas: tugasCreateNestedOneWithoutTugas_penggunaInput
  }

  export type tugas_penggunaUncheckedCreateWithoutPenggunaInput = {
    id: string
    id_tugas: string
  }

  export type tugas_penggunaCreateOrConnectWithoutPenggunaInput = {
    where: tugas_penggunaWhereUniqueInput
    create: XOR<tugas_penggunaCreateWithoutPenggunaInput, tugas_penggunaUncheckedCreateWithoutPenggunaInput>
  }

  export type tugas_penggunaCreateManyPenggunaInputEnvelope = {
    data: tugas_penggunaCreateManyPenggunaInput | tugas_penggunaCreateManyPenggunaInput[]
    skipDuplicates?: boolean
  }

  export type token_notifikasiUpsertWithWhereUniqueWithoutPenggunaInput = {
    where: token_notifikasiWhereUniqueInput
    update: XOR<token_notifikasiUpdateWithoutPenggunaInput, token_notifikasiUncheckedUpdateWithoutPenggunaInput>
    create: XOR<token_notifikasiCreateWithoutPenggunaInput, token_notifikasiUncheckedCreateWithoutPenggunaInput>
  }

  export type token_notifikasiUpdateWithWhereUniqueWithoutPenggunaInput = {
    where: token_notifikasiWhereUniqueInput
    data: XOR<token_notifikasiUpdateWithoutPenggunaInput, token_notifikasiUncheckedUpdateWithoutPenggunaInput>
  }

  export type token_notifikasiUpdateManyWithWhereWithoutPenggunaInput = {
    where: token_notifikasiScalarWhereInput
    data: XOR<token_notifikasiUpdateManyMutationInput, token_notifikasiUncheckedUpdateManyWithoutPenggunaInput>
  }

  export type token_notifikasiScalarWhereInput = {
    AND?: token_notifikasiScalarWhereInput | token_notifikasiScalarWhereInput[]
    OR?: token_notifikasiScalarWhereInput[]
    NOT?: token_notifikasiScalarWhereInput | token_notifikasiScalarWhereInput[]
    token?: StringFilter<"token_notifikasi"> | string
    id_user?: StringFilter<"token_notifikasi"> | string
  }

  export type tugasUpsertWithWhereUniqueWithoutPenggunaInput = {
    where: tugasWhereUniqueInput
    update: XOR<tugasUpdateWithoutPenggunaInput, tugasUncheckedUpdateWithoutPenggunaInput>
    create: XOR<tugasCreateWithoutPenggunaInput, tugasUncheckedCreateWithoutPenggunaInput>
  }

  export type tugasUpdateWithWhereUniqueWithoutPenggunaInput = {
    where: tugasWhereUniqueInput
    data: XOR<tugasUpdateWithoutPenggunaInput, tugasUncheckedUpdateWithoutPenggunaInput>
  }

  export type tugasUpdateManyWithWhereWithoutPenggunaInput = {
    where: tugasScalarWhereInput
    data: XOR<tugasUpdateManyMutationInput, tugasUncheckedUpdateManyWithoutPenggunaInput>
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
    terlambat?: BoolFilter<"tugas"> | boolean
    status?: StringNullableFilter<"tugas"> | string | null
    id_admin?: StringNullableFilter<"tugas"> | string | null
    tanggal_dibuat?: DateTimeNullableFilter<"tugas"> | Date | string | null
    tanggal_diubah?: DateTimeNullableFilter<"tugas"> | Date | string | null
  }

  export type tugas_penggunaUpsertWithWhereUniqueWithoutPenggunaInput = {
    where: tugas_penggunaWhereUniqueInput
    update: XOR<tugas_penggunaUpdateWithoutPenggunaInput, tugas_penggunaUncheckedUpdateWithoutPenggunaInput>
    create: XOR<tugas_penggunaCreateWithoutPenggunaInput, tugas_penggunaUncheckedCreateWithoutPenggunaInput>
  }

  export type tugas_penggunaUpdateWithWhereUniqueWithoutPenggunaInput = {
    where: tugas_penggunaWhereUniqueInput
    data: XOR<tugas_penggunaUpdateWithoutPenggunaInput, tugas_penggunaUncheckedUpdateWithoutPenggunaInput>
  }

  export type tugas_penggunaUpdateManyWithWhereWithoutPenggunaInput = {
    where: tugas_penggunaScalarWhereInput
    data: XOR<tugas_penggunaUpdateManyMutationInput, tugas_penggunaUncheckedUpdateManyWithoutPenggunaInput>
  }

  export type penggunaCreateWithoutTugas_penggunaInput = {
    id: string
    nama: string
    email: string
    posisi: string
    password: string
    token_notifikasi?: token_notifikasiCreateNestedManyWithoutPenggunaInput
    tugas?: tugasCreateNestedManyWithoutPenggunaInput
  }

  export type penggunaUncheckedCreateWithoutTugas_penggunaInput = {
    id: string
    nama: string
    email: string
    posisi: string
    password: string
    token_notifikasi?: token_notifikasiUncheckedCreateNestedManyWithoutPenggunaInput
    tugas?: tugasUncheckedCreateNestedManyWithoutPenggunaInput
  }

  export type penggunaCreateOrConnectWithoutTugas_penggunaInput = {
    where: penggunaWhereUniqueInput
    create: XOR<penggunaCreateWithoutTugas_penggunaInput, penggunaUncheckedCreateWithoutTugas_penggunaInput>
  }

  export type tugasCreateWithoutTugas_penggunaInput = {
    id: string
    judul: string
    brief?: string | null
    kuantitas?: number | null
    deadline?: Date | string | null
    terlambat?: boolean
    status?: string | null
    tanggal_dibuat?: Date | string | null
    tanggal_diubah?: Date | string | null
    berkas?: berkasCreateNestedManyWithoutTugasInput
    pengguna?: penggunaCreateNestedOneWithoutTugasInput
  }

  export type tugasUncheckedCreateWithoutTugas_penggunaInput = {
    id: string
    judul: string
    brief?: string | null
    kuantitas?: number | null
    deadline?: Date | string | null
    terlambat?: boolean
    status?: string | null
    id_admin?: string | null
    tanggal_dibuat?: Date | string | null
    tanggal_diubah?: Date | string | null
    berkas?: berkasUncheckedCreateNestedManyWithoutTugasInput
  }

  export type tugasCreateOrConnectWithoutTugas_penggunaInput = {
    where: tugasWhereUniqueInput
    create: XOR<tugasCreateWithoutTugas_penggunaInput, tugasUncheckedCreateWithoutTugas_penggunaInput>
  }

  export type penggunaUpsertWithoutTugas_penggunaInput = {
    update: XOR<penggunaUpdateWithoutTugas_penggunaInput, penggunaUncheckedUpdateWithoutTugas_penggunaInput>
    create: XOR<penggunaCreateWithoutTugas_penggunaInput, penggunaUncheckedCreateWithoutTugas_penggunaInput>
    where?: penggunaWhereInput
  }

  export type penggunaUpdateToOneWithWhereWithoutTugas_penggunaInput = {
    where?: penggunaWhereInput
    data: XOR<penggunaUpdateWithoutTugas_penggunaInput, penggunaUncheckedUpdateWithoutTugas_penggunaInput>
  }

  export type penggunaUpdateWithoutTugas_penggunaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    posisi?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    token_notifikasi?: token_notifikasiUpdateManyWithoutPenggunaNestedInput
    tugas?: tugasUpdateManyWithoutPenggunaNestedInput
  }

  export type penggunaUncheckedUpdateWithoutTugas_penggunaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    posisi?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    token_notifikasi?: token_notifikasiUncheckedUpdateManyWithoutPenggunaNestedInput
    tugas?: tugasUncheckedUpdateManyWithoutPenggunaNestedInput
  }

  export type tugasUpsertWithoutTugas_penggunaInput = {
    update: XOR<tugasUpdateWithoutTugas_penggunaInput, tugasUncheckedUpdateWithoutTugas_penggunaInput>
    create: XOR<tugasCreateWithoutTugas_penggunaInput, tugasUncheckedCreateWithoutTugas_penggunaInput>
    where?: tugasWhereInput
  }

  export type tugasUpdateToOneWithWhereWithoutTugas_penggunaInput = {
    where?: tugasWhereInput
    data: XOR<tugasUpdateWithoutTugas_penggunaInput, tugasUncheckedUpdateWithoutTugas_penggunaInput>
  }

  export type tugasUpdateWithoutTugas_penggunaInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    brief?: NullableStringFieldUpdateOperationsInput | string | null
    kuantitas?: NullableIntFieldUpdateOperationsInput | number | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    terlambat?: BoolFieldUpdateOperationsInput | boolean
    status?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_dibuat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_diubah?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    berkas?: berkasUpdateManyWithoutTugasNestedInput
    pengguna?: penggunaUpdateOneWithoutTugasNestedInput
  }

  export type tugasUncheckedUpdateWithoutTugas_penggunaInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    brief?: NullableStringFieldUpdateOperationsInput | string | null
    kuantitas?: NullableIntFieldUpdateOperationsInput | number | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    terlambat?: BoolFieldUpdateOperationsInput | boolean
    status?: NullableStringFieldUpdateOperationsInput | string | null
    id_admin?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_dibuat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_diubah?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    berkas?: berkasUncheckedUpdateManyWithoutTugasNestedInput
  }

  export type penggunaCreateWithoutToken_notifikasiInput = {
    id: string
    nama: string
    email: string
    posisi: string
    password: string
    tugas?: tugasCreateNestedManyWithoutPenggunaInput
    tugas_pengguna?: tugas_penggunaCreateNestedManyWithoutPenggunaInput
  }

  export type penggunaUncheckedCreateWithoutToken_notifikasiInput = {
    id: string
    nama: string
    email: string
    posisi: string
    password: string
    tugas?: tugasUncheckedCreateNestedManyWithoutPenggunaInput
    tugas_pengguna?: tugas_penggunaUncheckedCreateNestedManyWithoutPenggunaInput
  }

  export type penggunaCreateOrConnectWithoutToken_notifikasiInput = {
    where: penggunaWhereUniqueInput
    create: XOR<penggunaCreateWithoutToken_notifikasiInput, penggunaUncheckedCreateWithoutToken_notifikasiInput>
  }

  export type penggunaUpsertWithoutToken_notifikasiInput = {
    update: XOR<penggunaUpdateWithoutToken_notifikasiInput, penggunaUncheckedUpdateWithoutToken_notifikasiInput>
    create: XOR<penggunaCreateWithoutToken_notifikasiInput, penggunaUncheckedCreateWithoutToken_notifikasiInput>
    where?: penggunaWhereInput
  }

  export type penggunaUpdateToOneWithWhereWithoutToken_notifikasiInput = {
    where?: penggunaWhereInput
    data: XOR<penggunaUpdateWithoutToken_notifikasiInput, penggunaUncheckedUpdateWithoutToken_notifikasiInput>
  }

  export type penggunaUpdateWithoutToken_notifikasiInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    posisi?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    tugas?: tugasUpdateManyWithoutPenggunaNestedInput
    tugas_pengguna?: tugas_penggunaUpdateManyWithoutPenggunaNestedInput
  }

  export type penggunaUncheckedUpdateWithoutToken_notifikasiInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    posisi?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    tugas?: tugasUncheckedUpdateManyWithoutPenggunaNestedInput
    tugas_pengguna?: tugas_penggunaUncheckedUpdateManyWithoutPenggunaNestedInput
  }

  export type berkasCreateManyTugasInput = {
    id: string
    nama: string
    nama_file: string
    url: string
    tanggal_upload?: Date | string
  }

  export type tugas_penggunaCreateManyTugasInput = {
    id: string
    id_user: string
  }

  export type berkasUpdateWithoutTugasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    nama_file?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    tanggal_upload?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type berkasUncheckedUpdateWithoutTugasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    nama_file?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    tanggal_upload?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type berkasUncheckedUpdateManyWithoutTugasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    nama_file?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    tanggal_upload?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tugas_penggunaUpdateWithoutTugasInput = {
    id?: StringFieldUpdateOperationsInput | string
    pengguna?: penggunaUpdateOneRequiredWithoutTugas_penggunaNestedInput
  }

  export type tugas_penggunaUncheckedUpdateWithoutTugasInput = {
    id?: StringFieldUpdateOperationsInput | string
    id_user?: StringFieldUpdateOperationsInput | string
  }

  export type tugas_penggunaUncheckedUpdateManyWithoutTugasInput = {
    id?: StringFieldUpdateOperationsInput | string
    id_user?: StringFieldUpdateOperationsInput | string
  }

  export type token_notifikasiCreateManyPenggunaInput = {
    token: string
  }

  export type tugasCreateManyPenggunaInput = {
    id: string
    judul: string
    brief?: string | null
    kuantitas?: number | null
    deadline?: Date | string | null
    terlambat?: boolean
    status?: string | null
    tanggal_dibuat?: Date | string | null
    tanggal_diubah?: Date | string | null
  }

  export type tugas_penggunaCreateManyPenggunaInput = {
    id: string
    id_tugas: string
  }

  export type token_notifikasiUpdateWithoutPenggunaInput = {
    token?: StringFieldUpdateOperationsInput | string
  }

  export type token_notifikasiUncheckedUpdateWithoutPenggunaInput = {
    token?: StringFieldUpdateOperationsInput | string
  }

  export type token_notifikasiUncheckedUpdateManyWithoutPenggunaInput = {
    token?: StringFieldUpdateOperationsInput | string
  }

  export type tugasUpdateWithoutPenggunaInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    brief?: NullableStringFieldUpdateOperationsInput | string | null
    kuantitas?: NullableIntFieldUpdateOperationsInput | number | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    terlambat?: BoolFieldUpdateOperationsInput | boolean
    status?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_dibuat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_diubah?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    berkas?: berkasUpdateManyWithoutTugasNestedInput
    tugas_pengguna?: tugas_penggunaUpdateManyWithoutTugasNestedInput
  }

  export type tugasUncheckedUpdateWithoutPenggunaInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    brief?: NullableStringFieldUpdateOperationsInput | string | null
    kuantitas?: NullableIntFieldUpdateOperationsInput | number | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    terlambat?: BoolFieldUpdateOperationsInput | boolean
    status?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_dibuat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_diubah?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    berkas?: berkasUncheckedUpdateManyWithoutTugasNestedInput
    tugas_pengguna?: tugas_penggunaUncheckedUpdateManyWithoutTugasNestedInput
  }

  export type tugasUncheckedUpdateManyWithoutPenggunaInput = {
    id?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    brief?: NullableStringFieldUpdateOperationsInput | string | null
    kuantitas?: NullableIntFieldUpdateOperationsInput | number | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    terlambat?: BoolFieldUpdateOperationsInput | boolean
    status?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_dibuat?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_diubah?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tugas_penggunaUpdateWithoutPenggunaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tugas?: tugasUpdateOneRequiredWithoutTugas_penggunaNestedInput
  }

  export type tugas_penggunaUncheckedUpdateWithoutPenggunaInput = {
    id?: StringFieldUpdateOperationsInput | string
    id_tugas?: StringFieldUpdateOperationsInput | string
  }

  export type tugas_penggunaUncheckedUpdateManyWithoutPenggunaInput = {
    id?: StringFieldUpdateOperationsInput | string
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