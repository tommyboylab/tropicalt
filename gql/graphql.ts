/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** A string used to identify an i18n locale */
  I18NLocaleCode: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type About = {
  __typename?: 'About';
  AboutCard: Array<Maybe<ComponentAboutAboutCard>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<AboutRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type AboutAboutCardArgs = {
  filters?: InputMaybe<ComponentAboutAboutCardFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type AboutLocalizationsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type AboutEntity = {
  __typename?: 'AboutEntity';
  attributes?: Maybe<About>;
  id?: Maybe<Scalars['ID']>;
};

export type AboutEntityResponse = {
  __typename?: 'AboutEntityResponse';
  data?: Maybe<AboutEntity>;
};

export type AboutInput = {
  AboutCard?: InputMaybe<Array<InputMaybe<ComponentAboutAboutCardInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type AboutRelationResponseCollection = {
  __typename?: 'AboutRelationResponseCollection';
  data: Array<AboutEntity>;
};

export type Album = {
  __typename?: 'Album';
  Cover?: Maybe<ComponentMediaImg>;
  Date?: Maybe<Scalars['Date']>;
  GPhotoId: Scalars['String'];
  Location?: Maybe<Enum_Album_Location>;
  Name?: Maybe<Scalars['String']>;
  Photographer?: Maybe<UsersPermissionsUserEntityResponse>;
  Slug?: Maybe<Scalars['String']>;
  Tagline?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<AlbumRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type AlbumLocalizationsArgs = {
  filters?: InputMaybe<AlbumFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type AlbumEntity = {
  __typename?: 'AlbumEntity';
  attributes?: Maybe<Album>;
  id?: Maybe<Scalars['ID']>;
};

export type AlbumEntityResponse = {
  __typename?: 'AlbumEntityResponse';
  data?: Maybe<AlbumEntity>;
};

export type AlbumEntityResponseCollection = {
  __typename?: 'AlbumEntityResponseCollection';
  data: Array<AlbumEntity>;
  meta: ResponseCollectionMeta;
};

export type AlbumFiltersInput = {
  Cover?: InputMaybe<ComponentMediaImgFiltersInput>;
  Date?: InputMaybe<DateFilterInput>;
  GPhotoId?: InputMaybe<StringFilterInput>;
  Location?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  Photographer?: InputMaybe<UsersPermissionsUserFiltersInput>;
  Slug?: InputMaybe<StringFilterInput>;
  Tagline?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<AlbumFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<AlbumFiltersInput>;
  not?: InputMaybe<AlbumFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<AlbumFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type AlbumInput = {
  Cover?: InputMaybe<ComponentMediaImgInput>;
  Date?: InputMaybe<Scalars['Date']>;
  GPhotoId?: InputMaybe<Scalars['String']>;
  Location?: InputMaybe<Enum_Album_Location>;
  Name?: InputMaybe<Scalars['String']>;
  Photographer?: InputMaybe<Scalars['ID']>;
  Slug?: InputMaybe<Scalars['String']>;
  Tagline?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type AlbumRelationResponseCollection = {
  __typename?: 'AlbumRelationResponseCollection';
  data: Array<AlbumEntity>;
};

export type Article = {
  __typename?: 'Article';
  Author?: Maybe<UsersPermissionsUserEntityResponse>;
  Content: Scalars['String'];
  Cover?: Maybe<ComponentMediaImg>;
  Published?: Maybe<Scalars['Date']>;
  Slug?: Maybe<Scalars['String']>;
  Tagline?: Maybe<Scalars['String']>;
  Tags?: Maybe<Array<Maybe<ComponentBlogTag>>>;
  Title: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<ArticleRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type ArticleTagsArgs = {
  filters?: InputMaybe<ComponentBlogTagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ArticleLocalizationsArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ArticleEntity = {
  __typename?: 'ArticleEntity';
  attributes?: Maybe<Article>;
  id?: Maybe<Scalars['ID']>;
};

export type ArticleEntityResponse = {
  __typename?: 'ArticleEntityResponse';
  data?: Maybe<ArticleEntity>;
};

export type ArticleEntityResponseCollection = {
  __typename?: 'ArticleEntityResponseCollection';
  data: Array<ArticleEntity>;
  meta: ResponseCollectionMeta;
};

export type ArticleFiltersInput = {
  Author?: InputMaybe<UsersPermissionsUserFiltersInput>;
  Content?: InputMaybe<StringFilterInput>;
  Cover?: InputMaybe<ComponentMediaImgFiltersInput>;
  Published?: InputMaybe<DateFilterInput>;
  Slug?: InputMaybe<StringFilterInput>;
  Tagline?: InputMaybe<StringFilterInput>;
  Tags?: InputMaybe<ComponentBlogTagFiltersInput>;
  Title?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ArticleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<ArticleFiltersInput>;
  not?: InputMaybe<ArticleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ArticleFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ArticleInput = {
  Author?: InputMaybe<Scalars['ID']>;
  Content?: InputMaybe<Scalars['String']>;
  Cover?: InputMaybe<ComponentMediaImgInput>;
  Published?: InputMaybe<Scalars['Date']>;
  Slug?: InputMaybe<Scalars['String']>;
  Tagline?: InputMaybe<Scalars['String']>;
  Tags?: InputMaybe<Array<InputMaybe<ComponentBlogTagInput>>>;
  Title?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ArticleRelationResponseCollection = {
  __typename?: 'ArticleRelationResponseCollection';
  data: Array<ArticleEntity>;
};

export type Blog = {
  __typename?: 'Blog';
  Description: Scalars['String'];
  Title: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<BlogRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type BlogLocalizationsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type BlogEntity = {
  __typename?: 'BlogEntity';
  attributes?: Maybe<Blog>;
  id?: Maybe<Scalars['ID']>;
};

export type BlogEntityResponse = {
  __typename?: 'BlogEntityResponse';
  data?: Maybe<BlogEntity>;
};

export type BlogInput = {
  Description?: InputMaybe<Scalars['String']>;
  Title?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BlogRelationResponseCollection = {
  __typename?: 'BlogRelationResponseCollection';
  data: Array<BlogEntity>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  eqi?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type Comment = {
  __typename?: 'Comment';
  Author?: Maybe<UsersPermissionsUserEntityResponse>;
  Children?: Maybe<CommentRelationResponseCollection>;
  Content?: Maybe<Scalars['String']>;
  Depth?: Maybe<Scalars['Int']>;
  Dislikes?: Maybe<Array<Maybe<ComponentCommentLikes>>>;
  Flagged?: Maybe<Scalars['Boolean']>;
  Likes?: Maybe<Array<Maybe<ComponentCommentLikes>>>;
  Parent?: Maybe<CommentEntityResponse>;
  Published?: Maybe<Scalars['DateTime']>;
  article?: Maybe<ArticleEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type CommentChildrenArgs = {
  filters?: InputMaybe<CommentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CommentDislikesArgs = {
  filters?: InputMaybe<ComponentCommentLikesFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CommentLikesArgs = {
  filters?: InputMaybe<ComponentCommentLikesFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CommentEntity = {
  __typename?: 'CommentEntity';
  attributes?: Maybe<Comment>;
  id?: Maybe<Scalars['ID']>;
};

export type CommentEntityResponse = {
  __typename?: 'CommentEntityResponse';
  data?: Maybe<CommentEntity>;
};

export type CommentEntityResponseCollection = {
  __typename?: 'CommentEntityResponseCollection';
  data: Array<CommentEntity>;
  meta: ResponseCollectionMeta;
};

export type CommentFiltersInput = {
  Author?: InputMaybe<UsersPermissionsUserFiltersInput>;
  Children?: InputMaybe<CommentFiltersInput>;
  Content?: InputMaybe<StringFilterInput>;
  Depth?: InputMaybe<IntFilterInput>;
  Dislikes?: InputMaybe<ComponentCommentLikesFiltersInput>;
  Flagged?: InputMaybe<BooleanFilterInput>;
  Likes?: InputMaybe<ComponentCommentLikesFiltersInput>;
  Parent?: InputMaybe<CommentFiltersInput>;
  Published?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<CommentFiltersInput>>>;
  article?: InputMaybe<ArticleFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<CommentFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CommentFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CommentInput = {
  Author?: InputMaybe<Scalars['ID']>;
  Children?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  Content?: InputMaybe<Scalars['String']>;
  Depth?: InputMaybe<Scalars['Int']>;
  Dislikes?: InputMaybe<Array<InputMaybe<ComponentCommentLikesInput>>>;
  Flagged?: InputMaybe<Scalars['Boolean']>;
  Likes?: InputMaybe<Array<InputMaybe<ComponentCommentLikesInput>>>;
  Parent?: InputMaybe<Scalars['ID']>;
  Published?: InputMaybe<Scalars['DateTime']>;
  article?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CommentRelationResponseCollection = {
  __typename?: 'CommentRelationResponseCollection';
  data: Array<CommentEntity>;
};

export type ComponentAboutAboutCard = {
  __typename?: 'ComponentAboutAboutCard';
  Extension: Scalars['String'];
  Img?: Maybe<Array<Maybe<ComponentMediaImg>>>;
  Tagline: Scalars['String'];
  id: Scalars['ID'];
};


export type ComponentAboutAboutCardImgArgs = {
  filters?: InputMaybe<ComponentMediaImgFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentAboutAboutCardFiltersInput = {
  Extension?: InputMaybe<StringFilterInput>;
  Img?: InputMaybe<ComponentMediaImgFiltersInput>;
  Tagline?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentAboutAboutCardFiltersInput>>>;
  not?: InputMaybe<ComponentAboutAboutCardFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentAboutAboutCardFiltersInput>>>;
};

export type ComponentAboutAboutCardInput = {
  Extension?: InputMaybe<Scalars['String']>;
  Img?: InputMaybe<Array<InputMaybe<ComponentMediaImgInput>>>;
  Tagline?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type ComponentBlogComment = {
  __typename?: 'ComponentBlogComment';
  Content?: Maybe<Scalars['String']>;
  Depth: Scalars['Int'];
  Dislikes?: Maybe<Array<Maybe<ComponentCommentLikes>>>;
  Flagged?: Maybe<Scalars['Boolean']>;
  Likes?: Maybe<Array<Maybe<ComponentCommentLikes>>>;
  Published?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  users_permissions_user?: Maybe<UsersPermissionsUserEntityResponse>;
};


export type ComponentBlogCommentDislikesArgs = {
  filters?: InputMaybe<ComponentCommentLikesFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ComponentBlogCommentLikesArgs = {
  filters?: InputMaybe<ComponentCommentLikesFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentBlogTag = {
  __typename?: 'ComponentBlogTag';
  Name: Enum_Componentblogtag_Name;
  id: Scalars['ID'];
};

export type ComponentBlogTagFiltersInput = {
  Name?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentBlogTagFiltersInput>>>;
  not?: InputMaybe<ComponentBlogTagFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlogTagFiltersInput>>>;
};

export type ComponentBlogTagInput = {
  Name?: InputMaybe<Enum_Componentblogtag_Name>;
  id?: InputMaybe<Scalars['ID']>;
};

export type ComponentCommentLikes = {
  __typename?: 'ComponentCommentLikes';
  UserId?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
};

export type ComponentCommentLikesFiltersInput = {
  UserId?: InputMaybe<IntFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentCommentLikesFiltersInput>>>;
  not?: InputMaybe<ComponentCommentLikesFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentCommentLikesFiltersInput>>>;
};

export type ComponentCommentLikesInput = {
  UserId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type ComponentHomeHero = {
  __typename?: 'ComponentHomeHero';
  Caption: Scalars['String'];
  Img?: Maybe<Array<Maybe<ComponentMediaImg>>>;
  id: Scalars['ID'];
};


export type ComponentHomeHeroImgArgs = {
  filters?: InputMaybe<ComponentMediaImgFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentHomeHeroFiltersInput = {
  Caption?: InputMaybe<StringFilterInput>;
  Img?: InputMaybe<ComponentMediaImgFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentHomeHeroFiltersInput>>>;
  not?: InputMaybe<ComponentHomeHeroFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentHomeHeroFiltersInput>>>;
};

export type ComponentHomeHeroInput = {
  Caption?: InputMaybe<Scalars['String']>;
  Img?: InputMaybe<Array<InputMaybe<ComponentMediaImgInput>>>;
  id?: InputMaybe<Scalars['ID']>;
};

export type ComponentMediaImg = {
  __typename?: 'ComponentMediaImg';
  id: Scalars['ID'];
  img: UploadFileEntityResponse;
};

export type ComponentMediaImgFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentMediaImgFiltersInput>>>;
  not?: InputMaybe<ComponentMediaImgFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentMediaImgFiltersInput>>>;
};

export type ComponentMediaImgInput = {
  id?: InputMaybe<Scalars['ID']>;
  img?: InputMaybe<Scalars['ID']>;
};

export type ComponentNavigationLink = {
  __typename?: 'ComponentNavigationLink';
  Name: Scalars['String'];
  URL: Scalars['String'];
  id: Scalars['ID'];
};

export type ComponentNavigationLinkFiltersInput = {
  Name?: InputMaybe<StringFilterInput>;
  URL?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentNavigationLinkFiltersInput>>>;
  not?: InputMaybe<ComponentNavigationLinkFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentNavigationLinkFiltersInput>>>;
};

export type ComponentNavigationLinkInput = {
  Name?: InputMaybe<Scalars['String']>;
  URL?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type Contact = {
  __typename?: 'Contact';
  Email?: Maybe<Scalars['String']>;
  Message?: Maybe<Scalars['String']>;
  Name?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ContactEntity = {
  __typename?: 'ContactEntity';
  attributes?: Maybe<Contact>;
  id?: Maybe<Scalars['ID']>;
};

export type ContactEntityResponse = {
  __typename?: 'ContactEntityResponse';
  data?: Maybe<ContactEntity>;
};

export type ContactEntityResponseCollection = {
  __typename?: 'ContactEntityResponseCollection';
  data: Array<ContactEntity>;
  meta: ResponseCollectionMeta;
};

export type ContactFiltersInput = {
  Email?: InputMaybe<StringFilterInput>;
  Message?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ContactFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<ContactFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ContactFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ContactInput = {
  Email?: InputMaybe<Scalars['String']>;
  Message?: InputMaybe<Scalars['String']>;
  Name?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type DateFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  contains?: InputMaybe<Scalars['Date']>;
  containsi?: InputMaybe<Scalars['Date']>;
  endsWith?: InputMaybe<Scalars['Date']>;
  eq?: InputMaybe<Scalars['Date']>;
  eqi?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  not?: InputMaybe<DateFilterInput>;
  notContains?: InputMaybe<Scalars['Date']>;
  notContainsi?: InputMaybe<Scalars['Date']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  startsWith?: InputMaybe<Scalars['Date']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  contains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  eq?: InputMaybe<Scalars['DateTime']>;
  eqi?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
};

export enum Enum_Album_Location {
  Bahamas = 'Bahamas',
  Canada = 'Canada',
  Czechia = 'Czechia',
  Germany = 'Germany',
  Hungary = 'Hungary',
  Italy = 'Italy',
  Spain = 'Spain',
  Uk = 'UK',
  Usa = 'USA'
}

export enum Enum_Componentblogtag_Name {
  Css = 'CSS',
  Diy = 'DIY',
  Html = 'HTML',
  Js = 'JS',
  Life = 'Life',
  Photography = 'Photography',
  Tech = 'Tech',
  Work = 'Work'
}

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  eqi?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

export type Gallery = {
  __typename?: 'Gallery';
  Title?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<GalleryRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type GalleryLocalizationsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type GalleryEntity = {
  __typename?: 'GalleryEntity';
  attributes?: Maybe<Gallery>;
  id?: Maybe<Scalars['ID']>;
};

export type GalleryEntityResponse = {
  __typename?: 'GalleryEntityResponse';
  data?: Maybe<GalleryEntity>;
};

export type GalleryInput = {
  Title?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type GalleryRelationResponseCollection = {
  __typename?: 'GalleryRelationResponseCollection';
  data: Array<GalleryEntity>;
};

export type GenericMorph = About | Album | Article | Blog | Comment | ComponentAboutAboutCard | ComponentBlogComment | ComponentBlogTag | ComponentCommentLikes | ComponentHomeHero | ComponentMediaImg | ComponentNavigationLink | Contact | Gallery | Home | I18NLocale | NavLink | Resume | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type Home = {
  __typename?: 'Home';
  Hero?: Maybe<Array<Maybe<ComponentHomeHero>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<HomeRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type HomeHeroArgs = {
  filters?: InputMaybe<ComponentHomeHeroFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type HomeLocalizationsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type HomeEntity = {
  __typename?: 'HomeEntity';
  attributes?: Maybe<Home>;
  id?: Maybe<Scalars['ID']>;
};

export type HomeEntityResponse = {
  __typename?: 'HomeEntityResponse';
  data?: Maybe<HomeEntity>;
};

export type HomeInput = {
  Hero?: InputMaybe<Array<InputMaybe<ComponentHomeHeroInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type HomeRelationResponseCollection = {
  __typename?: 'HomeRelationResponseCollection';
  data: Array<HomeEntity>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  eqi?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startsWith?: InputMaybe<Scalars['ID']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  eqi?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startsWith?: InputMaybe<Scalars['Int']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  contains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  eq?: InputMaybe<Scalars['JSON']>;
  eqi?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith?: InputMaybe<Scalars['JSON']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createAboutLocalization?: Maybe<AboutEntityResponse>;
  createAlbum?: Maybe<AlbumEntityResponse>;
  createAlbumLocalization?: Maybe<AlbumEntityResponse>;
  createArticle?: Maybe<ArticleEntityResponse>;
  createArticleLocalization?: Maybe<ArticleEntityResponse>;
  createBlogLocalization?: Maybe<BlogEntityResponse>;
  createComment?: Maybe<CommentEntityResponse>;
  createContact?: Maybe<ContactEntityResponse>;
  createGalleryLocalization?: Maybe<GalleryEntityResponse>;
  createHomeLocalization?: Maybe<HomeEntityResponse>;
  createNavLinkLocalization?: Maybe<NavLinkEntityResponse>;
  createResumeLocalization?: Maybe<ResumeEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteAbout?: Maybe<AboutEntityResponse>;
  deleteAlbum?: Maybe<AlbumEntityResponse>;
  deleteArticle?: Maybe<ArticleEntityResponse>;
  deleteBlog?: Maybe<BlogEntityResponse>;
  deleteComment?: Maybe<CommentEntityResponse>;
  deleteContact?: Maybe<ContactEntityResponse>;
  deleteGallery?: Maybe<GalleryEntityResponse>;
  deleteHome?: Maybe<HomeEntityResponse>;
  deleteNavLink?: Maybe<NavLinkEntityResponse>;
  deleteResume?: Maybe<ResumeEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateAbout?: Maybe<AboutEntityResponse>;
  updateAlbum?: Maybe<AlbumEntityResponse>;
  updateArticle?: Maybe<ArticleEntityResponse>;
  updateBlog?: Maybe<BlogEntityResponse>;
  updateComment?: Maybe<CommentEntityResponse>;
  updateContact?: Maybe<ContactEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateGallery?: Maybe<GalleryEntityResponse>;
  updateHome?: Maybe<HomeEntityResponse>;
  updateNavLink?: Maybe<NavLinkEntityResponse>;
  updateResume?: Maybe<ResumeEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationCreateAboutLocalizationArgs = {
  data?: InputMaybe<AboutInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateAlbumArgs = {
  data: AlbumInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateAlbumLocalizationArgs = {
  data?: InputMaybe<AlbumInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateArticleArgs = {
  data: ArticleInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateArticleLocalizationArgs = {
  data?: InputMaybe<ArticleInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateBlogLocalizationArgs = {
  data?: InputMaybe<BlogInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateCommentArgs = {
  data: CommentInput;
};


export type MutationCreateContactArgs = {
  data: ContactInput;
};


export type MutationCreateGalleryLocalizationArgs = {
  data?: InputMaybe<GalleryInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateHomeLocalizationArgs = {
  data?: InputMaybe<HomeInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateNavLinkLocalizationArgs = {
  data?: InputMaybe<NavLinkInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateResumeLocalizationArgs = {
  data?: InputMaybe<ResumeInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteAboutArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteAlbumArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteArticleArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteBlogArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteCommentArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteContactArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteGalleryArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteHomeArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteNavLinkArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteResumeArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateAboutArgs = {
  data: AboutInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateAlbumArgs = {
  data: AlbumInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateArticleArgs = {
  data: ArticleInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateBlogArgs = {
  data: BlogInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateCommentArgs = {
  data: CommentInput;
  id: Scalars['ID'];
};


export type MutationUpdateContactArgs = {
  data: ContactInput;
  id: Scalars['ID'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateGalleryArgs = {
  data: GalleryInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateHomeArgs = {
  data: HomeInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateNavLinkArgs = {
  data: NavLinkInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateResumeArgs = {
  data: ResumeInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type NavLink = {
  __typename?: 'NavLink';
  Link: Array<Maybe<ComponentNavigationLink>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<NavLinkRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type NavLinkLinkArgs = {
  filters?: InputMaybe<ComponentNavigationLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type NavLinkLocalizationsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type NavLinkEntity = {
  __typename?: 'NavLinkEntity';
  attributes?: Maybe<NavLink>;
  id?: Maybe<Scalars['ID']>;
};

export type NavLinkEntityResponse = {
  __typename?: 'NavLinkEntityResponse';
  data?: Maybe<NavLinkEntity>;
};

export type NavLinkInput = {
  Link?: InputMaybe<Array<InputMaybe<ComponentNavigationLinkInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type NavLinkRelationResponseCollection = {
  __typename?: 'NavLinkRelationResponseCollection';
  data: Array<NavLinkEntity>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  about?: Maybe<AboutEntityResponse>;
  album?: Maybe<AlbumEntityResponse>;
  albums?: Maybe<AlbumEntityResponseCollection>;
  article?: Maybe<ArticleEntityResponse>;
  articles?: Maybe<ArticleEntityResponseCollection>;
  blog?: Maybe<BlogEntityResponse>;
  comment?: Maybe<CommentEntityResponse>;
  comments?: Maybe<CommentEntityResponseCollection>;
  contact?: Maybe<ContactEntityResponse>;
  contacts?: Maybe<ContactEntityResponseCollection>;
  gallery?: Maybe<GalleryEntityResponse>;
  home?: Maybe<HomeEntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  navLink?: Maybe<NavLinkEntityResponse>;
  resume?: Maybe<ResumeEntityResponse>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryAboutArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryAlbumArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryAlbumsArgs = {
  filters?: InputMaybe<AlbumFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryArticleArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryBlogArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryCommentArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCommentsArgs = {
  filters?: InputMaybe<CommentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryContactArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryContactsArgs = {
  filters?: InputMaybe<ContactFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryGalleryArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryHomeArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryNavLinkArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryResumeArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type Resume = {
  __typename?: 'Resume';
  Address?: Maybe<Scalars['String']>;
  Education?: Maybe<Scalars['String']>;
  Experience?: Maybe<Scalars['String']>;
  Hobbies?: Maybe<Scalars['String']>;
  Img?: Maybe<ComponentMediaImg>;
  Name?: Maybe<Scalars['String']>;
  Phone?: Maybe<Scalars['String']>;
  Skills?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<ResumeRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type ResumeLocalizationsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type ResumeEntity = {
  __typename?: 'ResumeEntity';
  attributes?: Maybe<Resume>;
  id?: Maybe<Scalars['ID']>;
};

export type ResumeEntityResponse = {
  __typename?: 'ResumeEntityResponse';
  data?: Maybe<ResumeEntity>;
};

export type ResumeInput = {
  Address?: InputMaybe<Scalars['String']>;
  Education?: InputMaybe<Scalars['String']>;
  Experience?: InputMaybe<Scalars['String']>;
  Hobbies?: InputMaybe<Scalars['String']>;
  Img?: InputMaybe<ComponentMediaImgInput>;
  Name?: InputMaybe<Scalars['String']>;
  Phone?: InputMaybe<Scalars['String']>;
  Skills?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ResumeRelationResponseCollection = {
  __typename?: 'ResumeRelationResponseCollection';
  data: Array<ResumeEntity>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  eqi?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  folder?: InputMaybe<Scalars['ID']>;
  folderPath?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String'];
  pathId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<Scalars['ID']>;
  path?: InputMaybe<Scalars['String']>;
  pathId?: InputMaybe<Scalars['Int']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  avatar?: Maybe<ComponentMediaImg>;
  biography?: Maybe<Scalars['String']>;
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  avatar?: InputMaybe<ComponentMediaImgFiltersInput>;
  biography?: InputMaybe<StringFilterInput>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  avatar?: InputMaybe<ComponentMediaImgInput>;
  biography?: InputMaybe<Scalars['String']>;
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type AboutCardFragmentFragment = { __typename?: 'Query', about?: { __typename?: 'AboutEntityResponse', data?: { __typename?: 'AboutEntity', attributes?: { __typename?: 'About', AboutCard: Array<{ __typename?: 'ComponentAboutAboutCard', id: string, Tagline: string, Extension: string, Img?: Array<{ __typename?: 'ComponentMediaImg', img: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, hash: string } | null } | null } } | null> | null } | null> } | null } | null } | null };

export type ArticleListFragmentFragment = { __typename?: 'Query', list?: { __typename?: 'ArticleEntityResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', Slug?: string | null, Title: string, Tagline?: string | null, Published?: any | null, Author?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', attributes?: { __typename?: 'UsersPermissionsUser', username: string } | null } | null } | null, Cover?: { __typename?: 'ComponentMediaImg', img: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, hash: string } | null } | null } } | null } | null }> } | null };

export type UpdateCommentLikesMutationVariables = Exact<{
  commentId: Scalars['ID'];
  likes: Scalars['Int'];
  dislikes: Scalars['Int'];
}>;


export type UpdateCommentLikesMutation = { __typename?: 'Mutation', updateComment?: { __typename?: 'CommentEntityResponse', data?: { __typename?: 'CommentEntity', id?: string | null, attributes?: { __typename?: 'Comment', Likes?: Array<{ __typename?: 'ComponentCommentLikes', UserId?: number | null } | null> | null, Dislikes?: Array<{ __typename?: 'ComponentCommentLikes', UserId?: number | null } | null> | null } | null } | null } | null };

export type GetUserQueryVariables = Exact<{
  userId: Scalars['ID'];
}>;


export type GetUserQuery = { __typename?: 'Query', usersPermissionsUser?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', attributes?: { __typename?: 'UsersPermissionsUser', username: string, avatar?: { __typename?: 'ComponentMediaImg', img: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, hash: string } | null } | null } } | null } | null } | null } | null };

export type AddCommentMutationVariables = Exact<{
  articleId: Scalars['ID'];
  userId: Scalars['ID'];
  content: Scalars['String'];
  date: Scalars['DateTime'];
  parentId?: InputMaybe<Scalars['ID']>;
}>;


export type AddCommentMutation = { __typename?: 'Mutation', createComment?: { __typename?: 'CommentEntityResponse', data?: { __typename?: 'CommentEntity', id?: string | null, attributes?: { __typename?: 'Comment', Content?: string | null, Published?: any | null, Author?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null } | null } | null, article?: { __typename?: 'ArticleEntityResponse', data?: { __typename?: 'ArticleEntity', id?: string | null } | null } | null, Parent?: { __typename?: 'CommentEntityResponse', data?: { __typename?: 'CommentEntity', id?: string | null } | null } | null } | null } | null } | null };

export type CommentsQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;


export type CommentsQuery = { __typename?: 'Query', me?: { __typename?: 'UsersPermissionsMe', id: string } | null, comments?: { __typename?: 'CommentEntityResponseCollection', data: Array<{ __typename?: 'CommentEntity', id?: string | null, attributes?: { __typename?: 'Comment', Content?: string | null, createdAt?: any | null, updatedAt?: any | null, article?: { __typename?: 'ArticleEntityResponse', data?: { __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', Slug?: string | null } | null } | null } | null, Author?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', attributes?: { __typename?: 'UsersPermissionsUser', username: string, avatar?: { __typename?: 'ComponentMediaImg', img: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, hash: string } | null } | null } } | null } | null } | null } | null, Children?: { __typename?: 'CommentRelationResponseCollection', data: Array<{ __typename?: 'CommentEntity', attributes?: { __typename?: 'Comment', Content?: string | null, createdAt?: any | null, updatedAt?: any | null, Likes?: Array<{ __typename?: 'ComponentCommentLikes', UserId?: number | null } | null> | null, Dislikes?: Array<{ __typename?: 'ComponentCommentLikes', UserId?: number | null } | null> | null, Author?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', attributes?: { __typename?: 'UsersPermissionsUser', username: string, avatar?: { __typename?: 'ComponentMediaImg', img: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, hash: string } | null } | null } } | null } | null } | null } | null } | null }> } | null, Likes?: Array<{ __typename?: 'ComponentCommentLikes', UserId?: number | null } | null> | null, Dislikes?: Array<{ __typename?: 'ComponentCommentLikes', UserId?: number | null } | null> | null } | null }> } | null };

export type SidebarArticlesFragmentFragment = { __typename?: 'Query', sidebar?: { __typename?: 'ArticleEntityResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', Slug?: string | null, Title: string, Tagline?: string | null, Published?: any | null, Author?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', attributes?: { __typename?: 'UsersPermissionsUser', username: string, avatar?: { __typename?: 'ComponentMediaImg', img: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, hash: string } | null } | null } } | null } | null } | null } | null, Cover?: { __typename?: 'ComponentMediaImg', img: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, hash: string } | null } | null } } | null } | null }> } | null };

export type AddEmailMutationVariables = Exact<{
  name: Scalars['String'];
  email: Scalars['String'];
  message: Scalars['String'];
}>;


export type AddEmailMutation = { __typename?: 'Mutation', createContact?: { __typename?: 'ContactEntityResponse', data?: { __typename?: 'ContactEntity', attributes?: { __typename?: 'Contact', Name?: string | null, Email?: string | null, Message?: string | null } | null } | null } | null };

export type GetAlbumsQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GetAlbumsQuery = { __typename?: 'Query', albums?: { __typename?: 'AlbumEntityResponseCollection', data: Array<{ __typename?: 'AlbumEntity', attributes?: { __typename?: 'Album', Name?: string | null, Tagline?: string | null, Slug?: string | null, GPhotoId: string, Cover?: { __typename?: 'ComponentMediaImg', img: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, hash: string } | null } | null } } | null } | null }> } | null };

export type AlbumFragmentFragment = { __typename?: 'Query', albums?: { __typename?: 'AlbumEntityResponseCollection', data: Array<{ __typename?: 'AlbumEntity', id?: string | null, attributes?: { __typename?: 'Album', Name?: string | null, Tagline?: string | null, Slug?: string | null, Date?: any | null, Location?: Enum_Album_Location | null, GPhotoId: string, Photographer?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', attributes?: { __typename?: 'UsersPermissionsUser', username: string } | null } | null } | null, Cover?: { __typename?: 'ComponentMediaImg', img: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, hash: string } | null } | null } } | null } | null }> } | null };

export type BiographyFragmentFragment = { __typename?: 'Query', usersPermissionsUser?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', biography?: string | null, avatar?: { __typename?: 'ComponentMediaImg', img: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, hash: string } | null } | null } } | null } | null } | null } | null };

export type HeroFragmentFragment = { __typename?: 'Query', home?: { __typename?: 'HomeEntityResponse', data?: { __typename?: 'HomeEntity', attributes?: { __typename?: 'Home', Hero?: Array<{ __typename?: 'ComponentHomeHero', id: string, Caption: string, Img?: Array<{ __typename?: 'ComponentMediaImg', img: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, hash: string } | null } | null } } | null> | null } | null> | null } | null } | null } | null };

export type RecentAlbumsFragmentFragment = { __typename?: 'Query', albums?: { __typename?: 'AlbumEntityResponseCollection', data: Array<{ __typename?: 'AlbumEntity', id?: string | null, attributes?: { __typename?: 'Album', Slug?: string | null, Name?: string | null, Tagline?: string | null, Date?: any | null, Location?: Enum_Album_Location | null, Photographer?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', attributes?: { __typename?: 'UsersPermissionsUser', username: string } | null } | null } | null, Cover?: { __typename?: 'ComponentMediaImg', img: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, hash: string } | null } | null } } | null } | null }> } | null };

export type RecentArticlesFragmentFragment = { __typename?: 'Query', articles?: { __typename?: 'ArticleEntityResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', Slug?: string | null, Title: string, Tagline?: string | null, Published?: any | null, Author?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', attributes?: { __typename?: 'UsersPermissionsUser', username: string } | null } | null } | null, Cover?: { __typename?: 'ComponentMediaImg', img: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, hash: string } | null } | null } } | null } | null }> } | null };

export type NavigationFragmentFragment = { __typename?: 'Query', navLink?: { __typename?: 'NavLinkEntityResponse', data?: { __typename?: 'NavLinkEntity', attributes?: { __typename?: 'NavLink', Link: Array<{ __typename?: 'ComponentNavigationLink', id: string, Name: string, URL: string } | null> } | null } | null } | null };

export type NewNavigationFragmentFragment = { __typename?: 'Query', navLink?: { __typename?: 'NavLinkEntityResponse', data?: { __typename?: 'NavLinkEntity', attributes?: { __typename?: 'NavLink', Link: Array<{ __typename?: 'ComponentNavigationLink', id: string, Name: string, URL: string } | null> } | null } | null } | null };

export type ContactFragmentFragment = { __typename?: 'Resume', Address?: string | null, Phone?: string | null };

export type EducationFragmentFragment = { __typename?: 'Resume', Education?: string | null };

export type HobbiesFragmentFragment = { __typename?: 'Resume', Hobbies?: string | null };

export type HighlightImgFragmentFragment = { __typename?: 'Resume', Img?: { __typename?: 'ComponentMediaImg', img: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, hash: string } | null } | null } } | null };

export type ResumeEmailFragmentFragment = { __typename?: 'Resume', email?: string | null };

export type SkillsFragmentFragment = { __typename?: 'Resume', Skills?: string | null };

export type WorkExpFragmentFragment = { __typename?: 'Resume', Experience?: string | null };

export type GetAboutPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAboutPageQuery = { __typename?: 'Query', navLink?: { __typename?: 'NavLinkEntityResponse', data?: { __typename?: 'NavLinkEntity', attributes?: { __typename?: 'NavLink', Link: Array<{ __typename?: 'ComponentNavigationLink', id: string, Name: string, URL: string } | null> } | null } | null } | null, about?: { __typename?: 'AboutEntityResponse', data?: { __typename?: 'AboutEntity', attributes?: { __typename?: 'About', AboutCard: Array<{ __typename?: 'ComponentAboutAboutCard', id: string, Tagline: string, Extension: string, Img?: Array<{ __typename?: 'ComponentMediaImg', img: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, hash: string } | null } | null } } | null> | null } | null> } | null } | null } | null };

export type GetAlbumPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAlbumPageQuery = { __typename?: 'Query', navLink?: { __typename?: 'NavLinkEntityResponse', data?: { __typename?: 'NavLinkEntity', attributes?: { __typename?: 'NavLink', Link: Array<{ __typename?: 'ComponentNavigationLink', id: string, Name: string, URL: string } | null> } | null } | null } | null, albums?: { __typename?: 'AlbumEntityResponseCollection', data: Array<{ __typename?: 'AlbumEntity', id?: string | null, attributes?: { __typename?: 'Album', Name?: string | null, Tagline?: string | null, Slug?: string | null, Date?: any | null, Location?: Enum_Album_Location | null, GPhotoId: string, Photographer?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', attributes?: { __typename?: 'UsersPermissionsUser', username: string } | null } | null } | null, Cover?: { __typename?: 'ComponentMediaImg', img: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, hash: string } | null } | null } } | null } | null }> } | null };

export type GetArticlesQueryVariables = Exact<{
  start: Scalars['Int'];
}>;


export type GetArticlesQuery = { __typename?: 'Query', navLink?: { __typename?: 'NavLinkEntityResponse', data?: { __typename?: 'NavLinkEntity', attributes?: { __typename?: 'NavLink', Link: Array<{ __typename?: 'ComponentNavigationLink', id: string, Name: string, URL: string } | null> } | null } | null } | null, list?: { __typename?: 'ArticleEntityResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', Slug?: string | null, Title: string, Tagline?: string | null, Published?: any | null, Author?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', attributes?: { __typename?: 'UsersPermissionsUser', username: string } | null } | null } | null, Cover?: { __typename?: 'ComponentMediaImg', img: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, hash: string } | null } | null } } | null } | null }> } | null, sidebar?: { __typename?: 'ArticleEntityResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', Slug?: string | null, Title: string, Tagline?: string | null, Published?: any | null, Author?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', attributes?: { __typename?: 'UsersPermissionsUser', username: string, avatar?: { __typename?: 'ComponentMediaImg', img: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, hash: string } | null } | null } } | null } | null } | null } | null, Cover?: { __typename?: 'ComponentMediaImg', img: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, hash: string } | null } | null } } | null } | null }> } | null };

export type ArticlesQueryVariables = Exact<{ [key: string]: never; }>;


export type ArticlesQuery = { __typename?: 'Query', articles?: { __typename?: 'ArticleEntityResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', Slug?: string | null } | null }> } | null };

export type ArticleQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;


export type ArticleQuery = { __typename?: 'Query', articles?: { __typename?: 'ArticleEntityResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', Slug?: string | null, Title: string, Tagline?: string | null, Published?: any | null, Content: string, Author?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', attributes?: { __typename?: 'UsersPermissionsUser', username: string } | null } | null } | null, Cover?: { __typename?: 'ComponentMediaImg', img: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, hash: string } | null } | null } } | null } | null }> } | null, navLink?: { __typename?: 'NavLinkEntityResponse', data?: { __typename?: 'NavLinkEntity', attributes?: { __typename?: 'NavLink', Link: Array<{ __typename?: 'ComponentNavigationLink', id: string, Name: string, URL: string } | null> } | null } | null } | null, sidebar?: { __typename?: 'ArticleEntityResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', Slug?: string | null, Title: string, Tagline?: string | null, Published?: any | null, Author?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', attributes?: { __typename?: 'UsersPermissionsUser', username: string, avatar?: { __typename?: 'ComponentMediaImg', img: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, hash: string } | null } | null } } | null } | null } | null } | null, Cover?: { __typename?: 'ComponentMediaImg', img: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, hash: string } | null } | null } } | null } | null }> } | null };

export type GetContactPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetContactPageQuery = { __typename?: 'Query', navLink?: { __typename?: 'NavLinkEntityResponse', data?: { __typename?: 'NavLinkEntity', attributes?: { __typename?: 'NavLink', Link: Array<{ __typename?: 'ComponentNavigationLink', id: string, Name: string, URL: string } | null> } | null } | null } | null };

export type GetHomePageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHomePageQuery = { __typename?: 'Query', navLink?: { __typename?: 'NavLinkEntityResponse', data?: { __typename?: 'NavLinkEntity', attributes?: { __typename?: 'NavLink', Link: Array<{ __typename?: 'ComponentNavigationLink', id: string, Name: string, URL: string } | null> } | null } | null } | null, home?: { __typename?: 'HomeEntityResponse', data?: { __typename?: 'HomeEntity', attributes?: { __typename?: 'Home', Hero?: Array<{ __typename?: 'ComponentHomeHero', id: string, Caption: string, Img?: Array<{ __typename?: 'ComponentMediaImg', img: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, hash: string } | null } | null } } | null> | null } | null> | null } | null } | null } | null, usersPermissionsUser?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', biography?: string | null, avatar?: { __typename?: 'ComponentMediaImg', img: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, hash: string } | null } | null } } | null } | null } | null } | null, articles?: { __typename?: 'ArticleEntityResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', Slug?: string | null, Title: string, Tagline?: string | null, Published?: any | null, Author?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', attributes?: { __typename?: 'UsersPermissionsUser', username: string } | null } | null } | null, Cover?: { __typename?: 'ComponentMediaImg', img: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, hash: string } | null } | null } } | null } | null }> } | null, albums?: { __typename?: 'AlbumEntityResponseCollection', data: Array<{ __typename?: 'AlbumEntity', id?: string | null, attributes?: { __typename?: 'Album', Slug?: string | null, Name?: string | null, Tagline?: string | null, Date?: any | null, Location?: Enum_Album_Location | null, Photographer?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', attributes?: { __typename?: 'UsersPermissionsUser', username: string } | null } | null } | null, Cover?: { __typename?: 'ComponentMediaImg', img: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, hash: string } | null } | null } } | null } | null }> } | null };

export type GetResumeQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetResumeQueryQuery = { __typename?: 'Query', resume?: { __typename?: 'ResumeEntityResponse', data?: { __typename?: 'ResumeEntity', id?: string | null, attributes?: { __typename?: 'Resume', Address?: string | null, Phone?: string | null, Experience?: string | null, Education?: string | null, Skills?: string | null, Hobbies?: string | null, email?: string | null, Img?: { __typename?: 'ComponentMediaImg', img: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, hash: string } | null } | null } } | null } | null } | null } | null };

export const AboutCardFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AboutCardFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Query"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"about"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AboutCard"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Tagline"}},{"kind":"Field","name":{"kind":"Name","value":"Extension"}},{"kind":"Field","name":{"kind":"Name","value":"Img"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"img"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<AboutCardFragmentFragment, unknown>;
export const ArticleListFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArticleListFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Query"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"list"},"name":{"kind":"Name","value":"articles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"StringValue","value":"Published:desc","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"start"},"value":{"kind":"Variable","name":{"kind":"Name","value":"start"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"7"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Slug"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"Tagline"}},{"kind":"Field","name":{"kind":"Name","value":"Published"}},{"kind":"Field","name":{"kind":"Name","value":"Author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Cover"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"img"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<ArticleListFragmentFragment, unknown>;
export const SidebarArticlesFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SidebarArticlesFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Query"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"sidebar"},"name":{"kind":"Name","value":"articles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"StringValue","value":"Published:desc","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"4"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Slug"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"Tagline"}},{"kind":"Field","name":{"kind":"Name","value":"Published"}},{"kind":"Field","name":{"kind":"Name","value":"Author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"img"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}}]}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Cover"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"img"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<SidebarArticlesFragmentFragment, unknown>;
export const AlbumFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AlbumFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Query"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"albums"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"StringValue","value":"Date:desc","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"Tagline"}},{"kind":"Field","name":{"kind":"Name","value":"Slug"}},{"kind":"Field","name":{"kind":"Name","value":"Date"}},{"kind":"Field","name":{"kind":"Name","value":"Location"}},{"kind":"Field","name":{"kind":"Name","value":"Photographer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Cover"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"img"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"GPhotoId"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AlbumFragmentFragment, unknown>;
export const BiographyFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BiographyFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Query"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"usersPermissionsUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"biography"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"img"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<BiographyFragmentFragment, unknown>;
export const HeroFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Query"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"home"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Hero"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Img"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"img"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Caption"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<HeroFragmentFragment, unknown>;
export const RecentAlbumsFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RecentAlbumsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Query"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"albums"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"StringValue","value":"Date:desc","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"start"},"value":{"kind":"IntValue","value":"0"}},{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"4"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Slug"}},{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"Tagline"}},{"kind":"Field","name":{"kind":"Name","value":"Date"}},{"kind":"Field","name":{"kind":"Name","value":"Location"}},{"kind":"Field","name":{"kind":"Name","value":"Photographer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Cover"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"img"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<RecentAlbumsFragmentFragment, unknown>;
export const RecentArticlesFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RecentArticlesFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Query"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"articles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"StringValue","value":"Published:desc","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"start"},"value":{"kind":"IntValue","value":"0"}},{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"3"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Slug"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"Tagline"}},{"kind":"Field","name":{"kind":"Name","value":"Published"}},{"kind":"Field","name":{"kind":"Name","value":"Author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Cover"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"img"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<RecentArticlesFragmentFragment, unknown>;
export const NavigationFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NavigationFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Query"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"navLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<NavigationFragmentFragment, unknown>;
export const NewNavigationFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NewNavigationFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Query"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"navLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"URL"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<NewNavigationFragmentFragment, unknown>;
export const ContactFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContactFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Resume"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Address"}},{"kind":"Field","name":{"kind":"Name","value":"Phone"}}]}}]} as unknown as DocumentNode<ContactFragmentFragment, unknown>;
export const EducationFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EducationFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Resume"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Education"}}]}}]} as unknown as DocumentNode<EducationFragmentFragment, unknown>;
export const HobbiesFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HobbiesFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Resume"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Hobbies"}}]}}]} as unknown as DocumentNode<HobbiesFragmentFragment, unknown>;
export const HighlightImgFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HighlightImgFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Resume"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Img"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"img"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<HighlightImgFragmentFragment, unknown>;
export const ResumeEmailFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ResumeEmailFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Resume"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]} as unknown as DocumentNode<ResumeEmailFragmentFragment, unknown>;
export const SkillsFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SkillsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Resume"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Skills"}}]}}]} as unknown as DocumentNode<SkillsFragmentFragment, unknown>;
export const WorkExpFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WorkExpFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Resume"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Experience"}}]}}]} as unknown as DocumentNode<WorkExpFragmentFragment, unknown>;
export const UpdateCommentLikesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateCommentLikes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"likes"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dislikes"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"Likes"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"UserId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"likes"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"Dislikes"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"UserId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dislikes"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Likes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"UserId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Dislikes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"UserId"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<UpdateCommentLikesMutation, UpdateCommentLikesMutationVariables>;
export const GetUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"usersPermissionsUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"img"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;
export const AddCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"articleId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"content"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"date"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"parentId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"article"},"value":{"kind":"Variable","name":{"kind":"Name","value":"articleId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"Author"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"Content"},"value":{"kind":"Variable","name":{"kind":"Name","value":"content"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"Published"},"value":{"kind":"Variable","name":{"kind":"Name","value":"date"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"Parent"},"value":{"kind":"Variable","name":{"kind":"Name","value":"parentId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Content"}},{"kind":"Field","name":{"kind":"Name","value":"Author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"article"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Published"}},{"kind":"Field","name":{"kind":"Name","value":"Parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<AddCommentMutation, AddCommentMutationVariables>;
export const CommentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Comments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"article"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"Slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"Parent"},"value":{"kind":"NullValue"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"article"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Slug"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"img"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}}]}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Content"}},{"kind":"Field","name":{"kind":"Name","value":"Children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Content"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"Likes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"UserId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Dislikes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"UserId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"img"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"Likes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"UserId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Dislikes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"UserId"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<CommentsQuery, CommentsQueryVariables>;
export const AddEmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddEmail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"message"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createContact"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"Name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"Email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"Message"},"value":{"kind":"Variable","name":{"kind":"Name","value":"message"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"Email"}},{"kind":"Field","name":{"kind":"Name","value":"Message"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AddEmailMutation, AddEmailMutationVariables>;
export const GetAlbumsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAlbums"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"albums"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"Slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"Tagline"}},{"kind":"Field","name":{"kind":"Name","value":"Slug"}},{"kind":"Field","name":{"kind":"Name","value":"Cover"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"img"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"GPhotoId"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetAlbumsQuery, GetAlbumsQueryVariables>;
export const GetAboutPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAboutPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavigationFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"AboutCardFragment"}}]}},...NavigationFragmentFragmentDoc.definitions,...AboutCardFragmentFragmentDoc.definitions]} as unknown as DocumentNode<GetAboutPageQuery, GetAboutPageQueryVariables>;
export const GetAlbumPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAlbumPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavigationFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"AlbumFragment"}}]}},...NavigationFragmentFragmentDoc.definitions,...AlbumFragmentFragmentDoc.definitions]} as unknown as DocumentNode<GetAlbumPageQuery, GetAlbumPageQueryVariables>;
export const GetArticlesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetArticles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"start"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavigationFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArticleListFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SidebarArticlesFragment"}}]}},...NavigationFragmentFragmentDoc.definitions,...ArticleListFragmentFragmentDoc.definitions,...SidebarArticlesFragmentFragmentDoc.definitions]} as unknown as DocumentNode<GetArticlesQuery, GetArticlesQueryVariables>;
export const ArticlesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Articles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"articles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Slug"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ArticlesQuery, ArticlesQueryVariables>;
export const ArticleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Article"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavigationFragment"}},{"kind":"Field","name":{"kind":"Name","value":"articles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"Slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Slug"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"Tagline"}},{"kind":"Field","name":{"kind":"Name","value":"Published"}},{"kind":"Field","name":{"kind":"Name","value":"Content"}},{"kind":"Field","name":{"kind":"Name","value":"Author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Cover"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"img"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}}]}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SidebarArticlesFragment"}}]}},...NavigationFragmentFragmentDoc.definitions,...SidebarArticlesFragmentFragmentDoc.definitions]} as unknown as DocumentNode<ArticleQuery, ArticleQueryVariables>;
export const GetContactPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetContactPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavigationFragment"}}]}},...NavigationFragmentFragmentDoc.definitions]} as unknown as DocumentNode<GetContactPageQuery, GetContactPageQueryVariables>;
export const GetHomePageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetHomePage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavigationFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BiographyFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RecentArticlesFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RecentAlbumsFragment"}}]}},...NavigationFragmentFragmentDoc.definitions,...HeroFragmentFragmentDoc.definitions,...BiographyFragmentFragmentDoc.definitions,...RecentArticlesFragmentFragmentDoc.definitions,...RecentAlbumsFragmentFragmentDoc.definitions]} as unknown as DocumentNode<GetHomePageQuery, GetHomePageQueryVariables>;
export const GetResumeQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetResumeQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resume"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContactFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"WorkExpFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"EducationFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SkillsFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HighlightImgFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HobbiesFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ResumeEmailFragment"}}]}}]}}]}}]}},...ContactFragmentFragmentDoc.definitions,...WorkExpFragmentFragmentDoc.definitions,...EducationFragmentFragmentDoc.definitions,...SkillsFragmentFragmentDoc.definitions,...HighlightImgFragmentFragmentDoc.definitions,...HobbiesFragmentFragmentDoc.definitions,...ResumeEmailFragmentFragmentDoc.definitions]} as unknown as DocumentNode<GetResumeQueryQuery, GetResumeQueryQueryVariables>;