/* eslint-disable @typescript-eslint/no-explicit-any */

import { GraphQLResolveInfo } from 'graphql'
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
  }

  export type Author = {
    __typename?: 'Author'
    id?: Maybe<Scalars['String']>
    name?: Maybe<Scalars['String']>
    createdAt?: Maybe<Scalars['String']>
    updatedAt?: Maybe<Scalars['String']>
    books?: Maybe<Array<Maybe<Book>>>
  }

  export type AuthorBooksArgs = {
    id?: Maybe<Scalars['String']>
    title?: Maybe<Scalars['String']>
    authorId?: Maybe<Scalars['String']>
    createdAt?: Maybe<Scalars['String']>
    updatedAt?: Maybe<Scalars['String']>
    idEq?: Maybe<Scalars['String']>
    titleEq?: Maybe<Scalars['String']>
    authorIdEq?: Maybe<Scalars['String']>
    createdAtEq?: Maybe<Scalars['String']>
    updatedAtEq?: Maybe<Scalars['String']>
    idGt?: Maybe<Scalars['String']>
    titleGt?: Maybe<Scalars['String']>
    authorIdGt?: Maybe<Scalars['String']>
    createdAtGt?: Maybe<Scalars['String']>
    updatedAtGt?: Maybe<Scalars['String']>
    idGte?: Maybe<Scalars['String']>
    titleGte?: Maybe<Scalars['String']>
    authorIdGte?: Maybe<Scalars['String']>
    createdAtGte?: Maybe<Scalars['String']>
    updatedAtGte?: Maybe<Scalars['String']>
    idLt?: Maybe<Scalars['String']>
    titleLt?: Maybe<Scalars['String']>
    authorIdLt?: Maybe<Scalars['String']>
    createdAtLt?: Maybe<Scalars['String']>
    updatedAtLt?: Maybe<Scalars['String']>
    idLte?: Maybe<Scalars['String']>
    titleLte?: Maybe<Scalars['String']>
    authorIdLte?: Maybe<Scalars['String']>
    createdAtLte?: Maybe<Scalars['String']>
    updatedAtLte?: Maybe<Scalars['String']>
    idLike?: Maybe<Scalars['String']>
    titleLike?: Maybe<Scalars['String']>
    authorIdLike?: Maybe<Scalars['String']>
    createdAtLike?: Maybe<Scalars['String']>
    updatedAtLike?: Maybe<Scalars['String']>
    idIsNull?: Maybe<Scalars['Boolean']>
    titleIsNull?: Maybe<Scalars['Boolean']>
    authorIdIsNull?: Maybe<Scalars['Boolean']>
    createdAtIsNull?: Maybe<Scalars['Boolean']>
    updatedAtIsNull?: Maybe<Scalars['Boolean']>
    idIn?: Maybe<Array<Maybe<Scalars['String']>>>
    titleIn?: Maybe<Array<Maybe<Scalars['String']>>>
    authorIdIn?: Maybe<Array<Maybe<Scalars['String']>>>
    createdAtIn?: Maybe<Array<Maybe<Scalars['String']>>>
    updatedAtIn?: Maybe<Array<Maybe<Scalars['String']>>>
    idNotIn?: Maybe<Array<Maybe<Scalars['String']>>>
    titleNotIn?: Maybe<Array<Maybe<Scalars['String']>>>
    authorIdNotIn?: Maybe<Array<Maybe<Scalars['String']>>>
    createdAtNotIn?: Maybe<Array<Maybe<Scalars['String']>>>
    updatedAtNotIn?: Maybe<Array<Maybe<Scalars['String']>>>
    idLikeNoCase?: Maybe<Scalars['String']>
    titleLikeNoCase?: Maybe<Scalars['String']>
    authorIdLikeNoCase?: Maybe<Scalars['String']>
    createdAtLikeNoCase?: Maybe<Scalars['String']>
    updatedAtLikeNoCase?: Maybe<Scalars['String']>
    orderBy?: Maybe<BookPropertiesEnum>
    orderByDesc?: Maybe<BookPropertiesEnum>
    limit?: Maybe<Array<Maybe<Scalars['Int']>>>
    offset?: Maybe<Array<Maybe<Scalars['Int']>>>
  }

  export enum AuthorPropertiesEnum {
    Id = 'id',
    Name = 'name',
    CreatedAt = 'createdAt',
    UpdatedAt = 'updatedAt',
  }

  export type Book = {
    __typename?: 'Book'
    id?: Maybe<Scalars['String']>
    title?: Maybe<Scalars['String']>
    authorId?: Maybe<Scalars['String']>
    createdAt?: Maybe<Scalars['String']>
    updatedAt?: Maybe<Scalars['String']>
    author?: Maybe<Author>
  }

  export type BookAuthorArgs = {
    id?: Maybe<Scalars['String']>
    name?: Maybe<Scalars['String']>
    createdAt?: Maybe<Scalars['String']>
    updatedAt?: Maybe<Scalars['String']>
    idEq?: Maybe<Scalars['String']>
    nameEq?: Maybe<Scalars['String']>
    createdAtEq?: Maybe<Scalars['String']>
    updatedAtEq?: Maybe<Scalars['String']>
    idGt?: Maybe<Scalars['String']>
    nameGt?: Maybe<Scalars['String']>
    createdAtGt?: Maybe<Scalars['String']>
    updatedAtGt?: Maybe<Scalars['String']>
    idGte?: Maybe<Scalars['String']>
    nameGte?: Maybe<Scalars['String']>
    createdAtGte?: Maybe<Scalars['String']>
    updatedAtGte?: Maybe<Scalars['String']>
    idLt?: Maybe<Scalars['String']>
    nameLt?: Maybe<Scalars['String']>
    createdAtLt?: Maybe<Scalars['String']>
    updatedAtLt?: Maybe<Scalars['String']>
    idLte?: Maybe<Scalars['String']>
    nameLte?: Maybe<Scalars['String']>
    createdAtLte?: Maybe<Scalars['String']>
    updatedAtLte?: Maybe<Scalars['String']>
    idLike?: Maybe<Scalars['String']>
    nameLike?: Maybe<Scalars['String']>
    createdAtLike?: Maybe<Scalars['String']>
    updatedAtLike?: Maybe<Scalars['String']>
    idIsNull?: Maybe<Scalars['Boolean']>
    nameIsNull?: Maybe<Scalars['Boolean']>
    createdAtIsNull?: Maybe<Scalars['Boolean']>
    updatedAtIsNull?: Maybe<Scalars['Boolean']>
    idIn?: Maybe<Array<Maybe<Scalars['String']>>>
    nameIn?: Maybe<Array<Maybe<Scalars['String']>>>
    createdAtIn?: Maybe<Array<Maybe<Scalars['String']>>>
    updatedAtIn?: Maybe<Array<Maybe<Scalars['String']>>>
    idNotIn?: Maybe<Array<Maybe<Scalars['String']>>>
    nameNotIn?: Maybe<Array<Maybe<Scalars['String']>>>
    createdAtNotIn?: Maybe<Array<Maybe<Scalars['String']>>>
    updatedAtNotIn?: Maybe<Array<Maybe<Scalars['String']>>>
    idLikeNoCase?: Maybe<Scalars['String']>
    nameLikeNoCase?: Maybe<Scalars['String']>
    createdAtLikeNoCase?: Maybe<Scalars['String']>
    updatedAtLikeNoCase?: Maybe<Scalars['String']>
    orderBy?: Maybe<AuthorPropertiesEnum>
    orderByDesc?: Maybe<AuthorPropertiesEnum>
    limit?: Maybe<Array<Maybe<Scalars['Int']>>>
    offset?: Maybe<Array<Maybe<Scalars['Int']>>>
  }

  export enum BookPropertiesEnum {
    Id = 'id',
    Title = 'title',
    AuthorId = 'authorId',
    CreatedAt = 'createdAt',
    UpdatedAt = 'updatedAt',
  }

  export type Query = {
    __typename?: 'Query'
    author?: Maybe<Author>
    authors?: Maybe<Array<Maybe<Author>>>
    book?: Maybe<Book>
    books?: Maybe<Array<Maybe<Book>>>
  }

  export type QueryAuthorArgs = {
    id?: Maybe<Scalars['String']>
    name?: Maybe<Scalars['String']>
    createdAt?: Maybe<Scalars['String']>
    updatedAt?: Maybe<Scalars['String']>
    idEq?: Maybe<Scalars['String']>
    nameEq?: Maybe<Scalars['String']>
    createdAtEq?: Maybe<Scalars['String']>
    updatedAtEq?: Maybe<Scalars['String']>
    idGt?: Maybe<Scalars['String']>
    nameGt?: Maybe<Scalars['String']>
    createdAtGt?: Maybe<Scalars['String']>
    updatedAtGt?: Maybe<Scalars['String']>
    idGte?: Maybe<Scalars['String']>
    nameGte?: Maybe<Scalars['String']>
    createdAtGte?: Maybe<Scalars['String']>
    updatedAtGte?: Maybe<Scalars['String']>
    idLt?: Maybe<Scalars['String']>
    nameLt?: Maybe<Scalars['String']>
    createdAtLt?: Maybe<Scalars['String']>
    updatedAtLt?: Maybe<Scalars['String']>
    idLte?: Maybe<Scalars['String']>
    nameLte?: Maybe<Scalars['String']>
    createdAtLte?: Maybe<Scalars['String']>
    updatedAtLte?: Maybe<Scalars['String']>
    idLike?: Maybe<Scalars['String']>
    nameLike?: Maybe<Scalars['String']>
    createdAtLike?: Maybe<Scalars['String']>
    updatedAtLike?: Maybe<Scalars['String']>
    idIsNull?: Maybe<Scalars['Boolean']>
    nameIsNull?: Maybe<Scalars['Boolean']>
    createdAtIsNull?: Maybe<Scalars['Boolean']>
    updatedAtIsNull?: Maybe<Scalars['Boolean']>
    idIn?: Maybe<Array<Maybe<Scalars['String']>>>
    nameIn?: Maybe<Array<Maybe<Scalars['String']>>>
    createdAtIn?: Maybe<Array<Maybe<Scalars['String']>>>
    updatedAtIn?: Maybe<Array<Maybe<Scalars['String']>>>
    idNotIn?: Maybe<Array<Maybe<Scalars['String']>>>
    nameNotIn?: Maybe<Array<Maybe<Scalars['String']>>>
    createdAtNotIn?: Maybe<Array<Maybe<Scalars['String']>>>
    updatedAtNotIn?: Maybe<Array<Maybe<Scalars['String']>>>
    idLikeNoCase?: Maybe<Scalars['String']>
    nameLikeNoCase?: Maybe<Scalars['String']>
    createdAtLikeNoCase?: Maybe<Scalars['String']>
    updatedAtLikeNoCase?: Maybe<Scalars['String']>
    orderBy?: Maybe<AuthorPropertiesEnum>
    orderByDesc?: Maybe<AuthorPropertiesEnum>
    range?: Maybe<Array<Maybe<Scalars['Int']>>>
    limit?: Maybe<Array<Maybe<Scalars['Int']>>>
    offset?: Maybe<Array<Maybe<Scalars['Int']>>>
  }

  export type QueryAuthorsArgs = {
    id?: Maybe<Scalars['String']>
    name?: Maybe<Scalars['String']>
    createdAt?: Maybe<Scalars['String']>
    updatedAt?: Maybe<Scalars['String']>
    idEq?: Maybe<Scalars['String']>
    nameEq?: Maybe<Scalars['String']>
    createdAtEq?: Maybe<Scalars['String']>
    updatedAtEq?: Maybe<Scalars['String']>
    idGt?: Maybe<Scalars['String']>
    nameGt?: Maybe<Scalars['String']>
    createdAtGt?: Maybe<Scalars['String']>
    updatedAtGt?: Maybe<Scalars['String']>
    idGte?: Maybe<Scalars['String']>
    nameGte?: Maybe<Scalars['String']>
    createdAtGte?: Maybe<Scalars['String']>
    updatedAtGte?: Maybe<Scalars['String']>
    idLt?: Maybe<Scalars['String']>
    nameLt?: Maybe<Scalars['String']>
    createdAtLt?: Maybe<Scalars['String']>
    updatedAtLt?: Maybe<Scalars['String']>
    idLte?: Maybe<Scalars['String']>
    nameLte?: Maybe<Scalars['String']>
    createdAtLte?: Maybe<Scalars['String']>
    updatedAtLte?: Maybe<Scalars['String']>
    idLike?: Maybe<Scalars['String']>
    nameLike?: Maybe<Scalars['String']>
    createdAtLike?: Maybe<Scalars['String']>
    updatedAtLike?: Maybe<Scalars['String']>
    idIsNull?: Maybe<Scalars['Boolean']>
    nameIsNull?: Maybe<Scalars['Boolean']>
    createdAtIsNull?: Maybe<Scalars['Boolean']>
    updatedAtIsNull?: Maybe<Scalars['Boolean']>
    idIn?: Maybe<Array<Maybe<Scalars['String']>>>
    nameIn?: Maybe<Array<Maybe<Scalars['String']>>>
    createdAtIn?: Maybe<Array<Maybe<Scalars['String']>>>
    updatedAtIn?: Maybe<Array<Maybe<Scalars['String']>>>
    idNotIn?: Maybe<Array<Maybe<Scalars['String']>>>
    nameNotIn?: Maybe<Array<Maybe<Scalars['String']>>>
    createdAtNotIn?: Maybe<Array<Maybe<Scalars['String']>>>
    updatedAtNotIn?: Maybe<Array<Maybe<Scalars['String']>>>
    idLikeNoCase?: Maybe<Scalars['String']>
    nameLikeNoCase?: Maybe<Scalars['String']>
    createdAtLikeNoCase?: Maybe<Scalars['String']>
    updatedAtLikeNoCase?: Maybe<Scalars['String']>
    orderBy?: Maybe<AuthorPropertiesEnum>
    orderByDesc?: Maybe<AuthorPropertiesEnum>
    range?: Maybe<Array<Maybe<Scalars['Int']>>>
    limit?: Maybe<Array<Maybe<Scalars['Int']>>>
    offset?: Maybe<Array<Maybe<Scalars['Int']>>>
  }

  export type QueryBookArgs = {
    id?: Maybe<Scalars['String']>
    title?: Maybe<Scalars['String']>
    authorId?: Maybe<Scalars['String']>
    createdAt?: Maybe<Scalars['String']>
    updatedAt?: Maybe<Scalars['String']>
    idEq?: Maybe<Scalars['String']>
    titleEq?: Maybe<Scalars['String']>
    authorIdEq?: Maybe<Scalars['String']>
    createdAtEq?: Maybe<Scalars['String']>
    updatedAtEq?: Maybe<Scalars['String']>
    idGt?: Maybe<Scalars['String']>
    titleGt?: Maybe<Scalars['String']>
    authorIdGt?: Maybe<Scalars['String']>
    createdAtGt?: Maybe<Scalars['String']>
    updatedAtGt?: Maybe<Scalars['String']>
    idGte?: Maybe<Scalars['String']>
    titleGte?: Maybe<Scalars['String']>
    authorIdGte?: Maybe<Scalars['String']>
    createdAtGte?: Maybe<Scalars['String']>
    updatedAtGte?: Maybe<Scalars['String']>
    idLt?: Maybe<Scalars['String']>
    titleLt?: Maybe<Scalars['String']>
    authorIdLt?: Maybe<Scalars['String']>
    createdAtLt?: Maybe<Scalars['String']>
    updatedAtLt?: Maybe<Scalars['String']>
    idLte?: Maybe<Scalars['String']>
    titleLte?: Maybe<Scalars['String']>
    authorIdLte?: Maybe<Scalars['String']>
    createdAtLte?: Maybe<Scalars['String']>
    updatedAtLte?: Maybe<Scalars['String']>
    idLike?: Maybe<Scalars['String']>
    titleLike?: Maybe<Scalars['String']>
    authorIdLike?: Maybe<Scalars['String']>
    createdAtLike?: Maybe<Scalars['String']>
    updatedAtLike?: Maybe<Scalars['String']>
    idIsNull?: Maybe<Scalars['Boolean']>
    titleIsNull?: Maybe<Scalars['Boolean']>
    authorIdIsNull?: Maybe<Scalars['Boolean']>
    createdAtIsNull?: Maybe<Scalars['Boolean']>
    updatedAtIsNull?: Maybe<Scalars['Boolean']>
    idIn?: Maybe<Array<Maybe<Scalars['String']>>>
    titleIn?: Maybe<Array<Maybe<Scalars['String']>>>
    authorIdIn?: Maybe<Array<Maybe<Scalars['String']>>>
    createdAtIn?: Maybe<Array<Maybe<Scalars['String']>>>
    updatedAtIn?: Maybe<Array<Maybe<Scalars['String']>>>
    idNotIn?: Maybe<Array<Maybe<Scalars['String']>>>
    titleNotIn?: Maybe<Array<Maybe<Scalars['String']>>>
    authorIdNotIn?: Maybe<Array<Maybe<Scalars['String']>>>
    createdAtNotIn?: Maybe<Array<Maybe<Scalars['String']>>>
    updatedAtNotIn?: Maybe<Array<Maybe<Scalars['String']>>>
    idLikeNoCase?: Maybe<Scalars['String']>
    titleLikeNoCase?: Maybe<Scalars['String']>
    authorIdLikeNoCase?: Maybe<Scalars['String']>
    createdAtLikeNoCase?: Maybe<Scalars['String']>
    updatedAtLikeNoCase?: Maybe<Scalars['String']>
    orderBy?: Maybe<BookPropertiesEnum>
    orderByDesc?: Maybe<BookPropertiesEnum>
    range?: Maybe<Array<Maybe<Scalars['Int']>>>
    limit?: Maybe<Array<Maybe<Scalars['Int']>>>
    offset?: Maybe<Array<Maybe<Scalars['Int']>>>
  }

  export type QueryBooksArgs = {
    id?: Maybe<Scalars['String']>
    title?: Maybe<Scalars['String']>
    authorId?: Maybe<Scalars['String']>
    createdAt?: Maybe<Scalars['String']>
    updatedAt?: Maybe<Scalars['String']>
    idEq?: Maybe<Scalars['String']>
    titleEq?: Maybe<Scalars['String']>
    authorIdEq?: Maybe<Scalars['String']>
    createdAtEq?: Maybe<Scalars['String']>
    updatedAtEq?: Maybe<Scalars['String']>
    idGt?: Maybe<Scalars['String']>
    titleGt?: Maybe<Scalars['String']>
    authorIdGt?: Maybe<Scalars['String']>
    createdAtGt?: Maybe<Scalars['String']>
    updatedAtGt?: Maybe<Scalars['String']>
    idGte?: Maybe<Scalars['String']>
    titleGte?: Maybe<Scalars['String']>
    authorIdGte?: Maybe<Scalars['String']>
    createdAtGte?: Maybe<Scalars['String']>
    updatedAtGte?: Maybe<Scalars['String']>
    idLt?: Maybe<Scalars['String']>
    titleLt?: Maybe<Scalars['String']>
    authorIdLt?: Maybe<Scalars['String']>
    createdAtLt?: Maybe<Scalars['String']>
    updatedAtLt?: Maybe<Scalars['String']>
    idLte?: Maybe<Scalars['String']>
    titleLte?: Maybe<Scalars['String']>
    authorIdLte?: Maybe<Scalars['String']>
    createdAtLte?: Maybe<Scalars['String']>
    updatedAtLte?: Maybe<Scalars['String']>
    idLike?: Maybe<Scalars['String']>
    titleLike?: Maybe<Scalars['String']>
    authorIdLike?: Maybe<Scalars['String']>
    createdAtLike?: Maybe<Scalars['String']>
    updatedAtLike?: Maybe<Scalars['String']>
    idIsNull?: Maybe<Scalars['Boolean']>
    titleIsNull?: Maybe<Scalars['Boolean']>
    authorIdIsNull?: Maybe<Scalars['Boolean']>
    createdAtIsNull?: Maybe<Scalars['Boolean']>
    updatedAtIsNull?: Maybe<Scalars['Boolean']>
    idIn?: Maybe<Array<Maybe<Scalars['String']>>>
    titleIn?: Maybe<Array<Maybe<Scalars['String']>>>
    authorIdIn?: Maybe<Array<Maybe<Scalars['String']>>>
    createdAtIn?: Maybe<Array<Maybe<Scalars['String']>>>
    updatedAtIn?: Maybe<Array<Maybe<Scalars['String']>>>
    idNotIn?: Maybe<Array<Maybe<Scalars['String']>>>
    titleNotIn?: Maybe<Array<Maybe<Scalars['String']>>>
    authorIdNotIn?: Maybe<Array<Maybe<Scalars['String']>>>
    createdAtNotIn?: Maybe<Array<Maybe<Scalars['String']>>>
    updatedAtNotIn?: Maybe<Array<Maybe<Scalars['String']>>>
    idLikeNoCase?: Maybe<Scalars['String']>
    titleLikeNoCase?: Maybe<Scalars['String']>
    authorIdLikeNoCase?: Maybe<Scalars['String']>
    createdAtLikeNoCase?: Maybe<Scalars['String']>
    updatedAtLikeNoCase?: Maybe<Scalars['String']>
    orderBy?: Maybe<BookPropertiesEnum>
    orderByDesc?: Maybe<BookPropertiesEnum>
    range?: Maybe<Array<Maybe<Scalars['Int']>>>
    limit?: Maybe<Array<Maybe<Scalars['Int']>>>
    offset?: Maybe<Array<Maybe<Scalars['Int']>>>
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
    String: ResolverTypeWrapper<Scalars['String']>
    Boolean: ResolverTypeWrapper<Scalars['Boolean']>
    AuthorPropertiesEnum: AuthorPropertiesEnum
    Int: ResolverTypeWrapper<Scalars['Int']>
    Author: ResolverTypeWrapper<Author>
    BookPropertiesEnum: BookPropertiesEnum
    Book: ResolverTypeWrapper<Book>
  }

  /** Mapping between all available schema types and the resolvers parents */
  export type ResolversParentTypes = {
    Query: {}
    String: Scalars['String']
    Boolean: Scalars['Boolean']
    AuthorPropertiesEnum: AuthorPropertiesEnum
    Int: Scalars['Int']
    Author: Author
    BookPropertiesEnum: BookPropertiesEnum
    Book: Book
  }

  export type AuthorResolvers<
    ContextType = AppContext,
    ParentType extends ResolversParentTypes['Author'] = ResolversParentTypes['Author']
  > = {
    id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
    createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
    updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
    books?: Resolver<Maybe<Array<Maybe<ResolversTypes['Book']>>>, ParentType, ContextType, AuthorBooksArgs>
    __isTypeOf?: isTypeOfResolverFn<ParentType>
  }

  export type BookResolvers<
    ContextType = AppContext,
    ParentType extends ResolversParentTypes['Book'] = ResolversParentTypes['Book']
  > = {
    id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
    title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
    authorId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
    createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
    updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
    author?: Resolver<Maybe<ResolversTypes['Author']>, ParentType, ContextType, BookAuthorArgs>
    __isTypeOf?: isTypeOfResolverFn<ParentType>
  }

  export type QueryResolvers<
    ContextType = AppContext,
    ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
  > = {
    author?: Resolver<Maybe<ResolversTypes['Author']>, ParentType, ContextType, QueryAuthorArgs>
    authors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Author']>>>, ParentType, ContextType, QueryAuthorsArgs>
    book?: Resolver<Maybe<ResolversTypes['Book']>, ParentType, ContextType, QueryBookArgs>
    books?: Resolver<Maybe<Array<Maybe<ResolversTypes['Book']>>>, ParentType, ContextType, QueryBooksArgs>
  }

  export type Resolvers<ContextType = AppContext> = {
    Author?: AuthorResolvers<ContextType>
    Book?: BookResolvers<ContextType>
    Query?: QueryResolvers<ContextType>
  }

  /**
   * @deprecated
   * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
   */
  export type IResolvers<ContextType = AppContext> = Resolvers<ContextType>
}
