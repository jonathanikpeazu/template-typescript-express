/* eslint-disable @typescript-eslint/no-explicit-any */

import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql'
import { AppContext } from './types.d'

export namespace GraphQL { /* eslint-disable-line */
  export type Maybe<T> = T | null

  /** All built-in and custom scalars, mapped to their actual values */
  export type Scalars = {
    ID: string
    String: string
    Boolean: boolean
    Int: number
    Float: number
    DateTime: any
  }

  export type Author = {
    __typename?: 'Author'
    id: Scalars['ID']
    name?: Maybe<Scalars['String']>
    books?: Maybe<Array<Book>>
    createdAt: Scalars['DateTime']
    updatedAt?: Maybe<Scalars['DateTime']>
  }

  export type Book = {
    __typename?: 'Book'
    id: Scalars['ID']
    authorId?: Maybe<Scalars['ID']>
    title?: Maybe<Scalars['String']>
    author?: Maybe<Author>
    createdAt: Scalars['DateTime']
    updatedAt?: Maybe<Scalars['DateTime']>
  }

  export type Query = {
    __typename?: 'Query'
    books: Array<Book>
    authors: Array<Author>
  }

  export type ResolverTypeWrapper<T> = Promise<T> | T

  export type ResolverFn<TResult, TParent, TContext, TArgs> = (
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo,
  ) => Promise<TResult> | TResult

  export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
    fragment: string
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>
  }

  export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
    | ResolverFn<TResult, TParent, TContext, TArgs>
    | StitchingResolver<TResult, TParent, TContext, TArgs>

  export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo,
  ) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>

  export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo,
  ) => TResult | Promise<TResult>

  export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>
    resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>
  }

  export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
    resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
  }

  export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
    | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
    | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

  export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
    | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
    | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

  export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
    parent: TParent,
    context: TContext,
    info: GraphQLResolveInfo,
  ) => Maybe<TTypes>

  export type isTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean

  export type NextResolverFn<T> = () => Promise<T>

  export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
    next: NextResolverFn<TResult>,
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo,
  ) => TResult | Promise<TResult>

  /** Mapping between all available schema types and the resolvers types */
  export type ResolversTypes = {
    Query: ResolverTypeWrapper<{}>
    Book: ResolverTypeWrapper<Book>
    ID: ResolverTypeWrapper<Scalars['ID']>
    String: ResolverTypeWrapper<Scalars['String']>
    Author: ResolverTypeWrapper<Author>
    DateTime: ResolverTypeWrapper<Scalars['DateTime']>
    Boolean: ResolverTypeWrapper<Scalars['Boolean']>
  }

  /** Mapping between all available schema types and the resolvers parents */
  export type ResolversParentTypes = {
    Query: {}
    Book: Book
    ID: Scalars['ID']
    String: Scalars['String']
    Author: Author
    DateTime: Scalars['DateTime']
    Boolean: Scalars['Boolean']
  }

  export type AuthorResolvers<
    ContextType = AppContext,
    ParentType extends ResolversParentTypes['Author'] = ResolversParentTypes['Author']
  > = {
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
    books?: Resolver<Maybe<Array<ResolversTypes['Book']>>, ParentType, ContextType>
    createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
    updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>
    __isTypeOf?: isTypeOfResolverFn<ParentType>
  }

  export type BookResolvers<
    ContextType = AppContext,
    ParentType extends ResolversParentTypes['Book'] = ResolversParentTypes['Book']
  > = {
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
    authorId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
    title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
    author?: Resolver<Maybe<ResolversTypes['Author']>, ParentType, ContextType>
    createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>
    updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>
    __isTypeOf?: isTypeOfResolverFn<ParentType>
  }

  export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
    name: 'DateTime'
  }

  export type QueryResolvers<
    ContextType = AppContext,
    ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
  > = {
    books?: Resolver<Array<ResolversTypes['Book']>, ParentType, ContextType>
    authors?: Resolver<Array<ResolversTypes['Author']>, ParentType, ContextType>
  }

  export type Resolvers<ContextType = AppContext> = {
    Author?: AuthorResolvers<ContextType>
    Book?: BookResolvers<ContextType>
    DateTime?: GraphQLScalarType
    Query?: QueryResolvers<ContextType>
  }

  /**
   * @deprecated
   * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
   */
  export type IResolvers<ContextType = AppContext> = Resolvers<ContextType>
}
