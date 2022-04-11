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
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AboutCard = {
  __typename?: 'AboutCard';
  created_at: Scalars['DateTime'];
  excerpt: Scalars['String'];
  id: Scalars['ID'];
  img?: Maybe<ComponentOtherImg>;
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type AboutCardAggregator = {
  __typename?: 'AboutCardAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type AboutCardConnection = {
  __typename?: 'AboutCardConnection';
  aggregate?: Maybe<AboutCardAggregator>;
  groupBy?: Maybe<AboutCardGroupBy>;
  values?: Maybe<Array<Maybe<AboutCard>>>;
};

export type AboutCardConnectionCreated_At = {
  __typename?: 'AboutCardConnectionCreated_at';
  connection?: Maybe<AboutCardConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type AboutCardConnectionExcerpt = {
  __typename?: 'AboutCardConnectionExcerpt';
  connection?: Maybe<AboutCardConnection>;
  key?: Maybe<Scalars['String']>;
};

export type AboutCardConnectionId = {
  __typename?: 'AboutCardConnectionId';
  connection?: Maybe<AboutCardConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type AboutCardConnectionImg = {
  __typename?: 'AboutCardConnectionImg';
  connection?: Maybe<AboutCardConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type AboutCardConnectionTitle = {
  __typename?: 'AboutCardConnectionTitle';
  connection?: Maybe<AboutCardConnection>;
  key?: Maybe<Scalars['String']>;
};

export type AboutCardConnectionUpdated_At = {
  __typename?: 'AboutCardConnectionUpdated_at';
  connection?: Maybe<AboutCardConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type AboutCardGroupBy = {
  __typename?: 'AboutCardGroupBy';
  created_at?: Maybe<Array<Maybe<AboutCardConnectionCreated_At>>>;
  excerpt?: Maybe<Array<Maybe<AboutCardConnectionExcerpt>>>;
  id?: Maybe<Array<Maybe<AboutCardConnectionId>>>;
  img?: Maybe<Array<Maybe<AboutCardConnectionImg>>>;
  title?: Maybe<Array<Maybe<AboutCardConnectionTitle>>>;
  updated_at?: Maybe<Array<Maybe<AboutCardConnectionUpdated_At>>>;
};

export type AboutCardInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  excerpt: Scalars['String'];
  img: ComponentOtherImgInput;
  title: Scalars['String'];
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type AdminUser = {
  __typename?: 'AdminUser';
  firstname: Scalars['String'];
  id: Scalars['ID'];
  lastname: Scalars['String'];
  username?: Maybe<Scalars['String']>;
};

export type Album = {
  __typename?: 'Album';
  albumID: Scalars['String'];
  cover?: Maybe<ComponentOtherImg>;
  created_at: Scalars['DateTime'];
  date: Scalars['Date'];
  excerpt: Scalars['String'];
  id: Scalars['ID'];
  location: Enum_Album_Location;
  published?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
  user?: Maybe<UsersPermissionsUser>;
};

export type AlbumAggregator = {
  __typename?: 'AlbumAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type AlbumConnection = {
  __typename?: 'AlbumConnection';
  aggregate?: Maybe<AlbumAggregator>;
  groupBy?: Maybe<AlbumGroupBy>;
  values?: Maybe<Array<Maybe<Album>>>;
};

export type AlbumConnectionAlbumId = {
  __typename?: 'AlbumConnectionAlbumID';
  connection?: Maybe<AlbumConnection>;
  key?: Maybe<Scalars['String']>;
};

export type AlbumConnectionCover = {
  __typename?: 'AlbumConnectionCover';
  connection?: Maybe<AlbumConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type AlbumConnectionCreated_At = {
  __typename?: 'AlbumConnectionCreated_at';
  connection?: Maybe<AlbumConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type AlbumConnectionDate = {
  __typename?: 'AlbumConnectionDate';
  connection?: Maybe<AlbumConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type AlbumConnectionExcerpt = {
  __typename?: 'AlbumConnectionExcerpt';
  connection?: Maybe<AlbumConnection>;
  key?: Maybe<Scalars['String']>;
};

export type AlbumConnectionId = {
  __typename?: 'AlbumConnectionId';
  connection?: Maybe<AlbumConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type AlbumConnectionLocation = {
  __typename?: 'AlbumConnectionLocation';
  connection?: Maybe<AlbumConnection>;
  key?: Maybe<Scalars['String']>;
};

export type AlbumConnectionPublished = {
  __typename?: 'AlbumConnectionPublished';
  connection?: Maybe<AlbumConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type AlbumConnectionSlug = {
  __typename?: 'AlbumConnectionSlug';
  connection?: Maybe<AlbumConnection>;
  key?: Maybe<Scalars['String']>;
};

export type AlbumConnectionTitle = {
  __typename?: 'AlbumConnectionTitle';
  connection?: Maybe<AlbumConnection>;
  key?: Maybe<Scalars['String']>;
};

export type AlbumConnectionUpdated_At = {
  __typename?: 'AlbumConnectionUpdated_at';
  connection?: Maybe<AlbumConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type AlbumConnectionUser = {
  __typename?: 'AlbumConnectionUser';
  connection?: Maybe<AlbumConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type AlbumGroupBy = {
  __typename?: 'AlbumGroupBy';
  albumID?: Maybe<Array<Maybe<AlbumConnectionAlbumId>>>;
  cover?: Maybe<Array<Maybe<AlbumConnectionCover>>>;
  created_at?: Maybe<Array<Maybe<AlbumConnectionCreated_At>>>;
  date?: Maybe<Array<Maybe<AlbumConnectionDate>>>;
  excerpt?: Maybe<Array<Maybe<AlbumConnectionExcerpt>>>;
  id?: Maybe<Array<Maybe<AlbumConnectionId>>>;
  location?: Maybe<Array<Maybe<AlbumConnectionLocation>>>;
  published?: Maybe<Array<Maybe<AlbumConnectionPublished>>>;
  slug?: Maybe<Array<Maybe<AlbumConnectionSlug>>>;
  title?: Maybe<Array<Maybe<AlbumConnectionTitle>>>;
  updated_at?: Maybe<Array<Maybe<AlbumConnectionUpdated_At>>>;
  user?: Maybe<Array<Maybe<AlbumConnectionUser>>>;
};

export type AlbumInput = {
  albumID: Scalars['String'];
  cover: ComponentOtherImgInput;
  created_by?: InputMaybe<Scalars['ID']>;
  date: Scalars['Date'];
  excerpt: Scalars['String'];
  location: Enum_Album_Location;
  published?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updated_by?: InputMaybe<Scalars['ID']>;
  user?: InputMaybe<Scalars['ID']>;
};

export type Article = {
  __typename?: 'Article';
  comments?: Maybe<Array<Maybe<Comment>>>;
  content: Scalars['String'];
  cover?: Maybe<ComponentOtherImg>;
  created_at: Scalars['DateTime'];
  date: Scalars['Date'];
  excerpt: Scalars['String'];
  id: Scalars['ID'];
  published?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  tag?: Maybe<Array<Maybe<ComponentBlogTag>>>;
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
  user?: Maybe<UsersPermissionsUser>;
};


export type ArticleCommentsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type ArticleAggregator = {
  __typename?: 'ArticleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ArticleConnection = {
  __typename?: 'ArticleConnection';
  aggregate?: Maybe<ArticleAggregator>;
  groupBy?: Maybe<ArticleGroupBy>;
  values?: Maybe<Array<Maybe<Article>>>;
};

export type ArticleConnectionContent = {
  __typename?: 'ArticleConnectionContent';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ArticleConnectionCover = {
  __typename?: 'ArticleConnectionCover';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ArticleConnectionCreated_At = {
  __typename?: 'ArticleConnectionCreated_at';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ArticleConnectionDate = {
  __typename?: 'ArticleConnectionDate';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ArticleConnectionExcerpt = {
  __typename?: 'ArticleConnectionExcerpt';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ArticleConnectionId = {
  __typename?: 'ArticleConnectionId';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ArticleConnectionPublished = {
  __typename?: 'ArticleConnectionPublished';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type ArticleConnectionSlug = {
  __typename?: 'ArticleConnectionSlug';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ArticleConnectionTitle = {
  __typename?: 'ArticleConnectionTitle';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ArticleConnectionUpdated_At = {
  __typename?: 'ArticleConnectionUpdated_at';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ArticleConnectionUser = {
  __typename?: 'ArticleConnectionUser';
  connection?: Maybe<ArticleConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ArticleGroupBy = {
  __typename?: 'ArticleGroupBy';
  content?: Maybe<Array<Maybe<ArticleConnectionContent>>>;
  cover?: Maybe<Array<Maybe<ArticleConnectionCover>>>;
  created_at?: Maybe<Array<Maybe<ArticleConnectionCreated_At>>>;
  date?: Maybe<Array<Maybe<ArticleConnectionDate>>>;
  excerpt?: Maybe<Array<Maybe<ArticleConnectionExcerpt>>>;
  id?: Maybe<Array<Maybe<ArticleConnectionId>>>;
  published?: Maybe<Array<Maybe<ArticleConnectionPublished>>>;
  slug?: Maybe<Array<Maybe<ArticleConnectionSlug>>>;
  title?: Maybe<Array<Maybe<ArticleConnectionTitle>>>;
  updated_at?: Maybe<Array<Maybe<ArticleConnectionUpdated_At>>>;
  user?: Maybe<Array<Maybe<ArticleConnectionUser>>>;
};

export type ArticleInput = {
  comments?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  content: Scalars['String'];
  cover: ComponentOtherImgInput;
  created_by?: InputMaybe<Scalars['ID']>;
  date: Scalars['Date'];
  excerpt: Scalars['String'];
  published?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  tag?: InputMaybe<Array<ComponentBlogTagInput>>;
  title: Scalars['String'];
  updated_by?: InputMaybe<Scalars['ID']>;
  user?: InputMaybe<Scalars['ID']>;
};

export type Avatar = {
  __typename?: 'Avatar';
  alt: Scalars['String'];
  avatar?: Maybe<ComponentOtherImg>;
  bio: Scalars['String'];
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  updated_at: Scalars['DateTime'];
};

export type AvatarAggregator = {
  __typename?: 'AvatarAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type AvatarConnection = {
  __typename?: 'AvatarConnection';
  aggregate?: Maybe<AvatarAggregator>;
  groupBy?: Maybe<AvatarGroupBy>;
  values?: Maybe<Array<Maybe<Avatar>>>;
};

export type AvatarConnectionAlt = {
  __typename?: 'AvatarConnectionAlt';
  connection?: Maybe<AvatarConnection>;
  key?: Maybe<Scalars['String']>;
};

export type AvatarConnectionAvatar = {
  __typename?: 'AvatarConnectionAvatar';
  connection?: Maybe<AvatarConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type AvatarConnectionBio = {
  __typename?: 'AvatarConnectionBio';
  connection?: Maybe<AvatarConnection>;
  key?: Maybe<Scalars['String']>;
};

export type AvatarConnectionCreated_At = {
  __typename?: 'AvatarConnectionCreated_at';
  connection?: Maybe<AvatarConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type AvatarConnectionId = {
  __typename?: 'AvatarConnectionId';
  connection?: Maybe<AvatarConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type AvatarConnectionUpdated_At = {
  __typename?: 'AvatarConnectionUpdated_at';
  connection?: Maybe<AvatarConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type AvatarGroupBy = {
  __typename?: 'AvatarGroupBy';
  alt?: Maybe<Array<Maybe<AvatarConnectionAlt>>>;
  avatar?: Maybe<Array<Maybe<AvatarConnectionAvatar>>>;
  bio?: Maybe<Array<Maybe<AvatarConnectionBio>>>;
  created_at?: Maybe<Array<Maybe<AvatarConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<AvatarConnectionId>>>;
  updated_at?: Maybe<Array<Maybe<AvatarConnectionUpdated_At>>>;
};

export type AvatarInput = {
  alt: Scalars['String'];
  avatar: ComponentOtherImgInput;
  bio: Scalars['String'];
  created_by?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type Comment = {
  __typename?: 'Comment';
  article?: Maybe<Article>;
  children?: Maybe<Array<Maybe<Comment>>>;
  content?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  date?: Maybe<Scalars['DateTime']>;
  dislikes?: Maybe<Array<Maybe<ComponentBlogDislike>>>;
  flagged?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  likes?: Maybe<Array<Maybe<ComponentBlogLikes>>>;
  parent?: Maybe<Comment>;
  updated_at: Scalars['DateTime'];
  user?: Maybe<UsersPermissionsUser>;
};


export type CommentChildrenArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type CommentAggregator = {
  __typename?: 'CommentAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CommentConnection = {
  __typename?: 'CommentConnection';
  aggregate?: Maybe<CommentAggregator>;
  groupBy?: Maybe<CommentGroupBy>;
  values?: Maybe<Array<Maybe<Comment>>>;
};

export type CommentConnectionArticle = {
  __typename?: 'CommentConnectionArticle';
  connection?: Maybe<CommentConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type CommentConnectionContent = {
  __typename?: 'CommentConnectionContent';
  connection?: Maybe<CommentConnection>;
  key?: Maybe<Scalars['String']>;
};

export type CommentConnectionCreated_At = {
  __typename?: 'CommentConnectionCreated_at';
  connection?: Maybe<CommentConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type CommentConnectionDate = {
  __typename?: 'CommentConnectionDate';
  connection?: Maybe<CommentConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type CommentConnectionFlagged = {
  __typename?: 'CommentConnectionFlagged';
  connection?: Maybe<CommentConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type CommentConnectionId = {
  __typename?: 'CommentConnectionId';
  connection?: Maybe<CommentConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type CommentConnectionParent = {
  __typename?: 'CommentConnectionParent';
  connection?: Maybe<CommentConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type CommentConnectionUpdated_At = {
  __typename?: 'CommentConnectionUpdated_at';
  connection?: Maybe<CommentConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type CommentConnectionUser = {
  __typename?: 'CommentConnectionUser';
  connection?: Maybe<CommentConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type CommentGroupBy = {
  __typename?: 'CommentGroupBy';
  article?: Maybe<Array<Maybe<CommentConnectionArticle>>>;
  content?: Maybe<Array<Maybe<CommentConnectionContent>>>;
  created_at?: Maybe<Array<Maybe<CommentConnectionCreated_At>>>;
  date?: Maybe<Array<Maybe<CommentConnectionDate>>>;
  flagged?: Maybe<Array<Maybe<CommentConnectionFlagged>>>;
  id?: Maybe<Array<Maybe<CommentConnectionId>>>;
  parent?: Maybe<Array<Maybe<CommentConnectionParent>>>;
  updated_at?: Maybe<Array<Maybe<CommentConnectionUpdated_At>>>;
  user?: Maybe<Array<Maybe<CommentConnectionUser>>>;
};

export type CommentInput = {
  article?: InputMaybe<Scalars['ID']>;
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  content?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  date?: InputMaybe<Scalars['DateTime']>;
  dislikes?: InputMaybe<Array<InputMaybe<ComponentBlogDislikeInput>>>;
  flagged?: InputMaybe<Scalars['Boolean']>;
  likes?: InputMaybe<Array<InputMaybe<ComponentBlogLikeInput>>>;
  parent?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  user?: InputMaybe<Scalars['ID']>;
};

export type ComponentBlogDislike = {
  __typename?: 'ComponentBlogDislike';
  id: Scalars['ID'];
  user?: Maybe<UsersPermissionsUser>;
};

export type ComponentBlogDislikeInput = {
  user?: InputMaybe<Scalars['ID']>;
};

export type ComponentBlogLikeInput = {
  user?: InputMaybe<Scalars['ID']>;
};

export type ComponentBlogLikes = {
  __typename?: 'ComponentBlogLikes';
  id: Scalars['ID'];
  user?: Maybe<UsersPermissionsUser>;
};

export type ComponentBlogTag = {
  __typename?: 'ComponentBlogTag';
  id: Scalars['ID'];
  tag?: Maybe<Enum_Componentblogtag_Tag>;
};

export type ComponentBlogTagInput = {
  tag?: InputMaybe<Enum_Componentblogtag_Tag>;
};

export type ComponentHeroesHero = {
  __typename?: 'ComponentHeroesHero';
  cover?: Maybe<ComponentOtherImg>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type ComponentHeroesHeroInput = {
  cover?: InputMaybe<ComponentOtherImgInput>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentNavNav = {
  __typename?: 'ComponentNavNav';
  id: Scalars['ID'];
  title: Scalars['String'];
  url: Scalars['String'];
};

export type ComponentNavNavInput = {
  title: Scalars['String'];
  url: Scalars['String'];
};

export type ComponentOtherImg = {
  __typename?: 'ComponentOtherImg';
  id: Scalars['ID'];
  img?: Maybe<UploadFile>;
  placeholder?: Maybe<UploadFile>;
};

export type ComponentOtherImgInput = {
  img?: InputMaybe<Scalars['ID']>;
  placeholder?: InputMaybe<Scalars['ID']>;
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

export enum Enum_Componentblogtag_Tag {
  Css = 'CSS',
  Diy = 'DIY',
  Html = 'HTML',
  Js = 'JS',
  Life = 'Life',
  Photography = 'Photography',
  Tech = 'Tech',
  Work = 'Work'
}

export type Email = {
  __typename?: 'Email';
  created_at: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  message?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
};

export type EmailAggregator = {
  __typename?: 'EmailAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type EmailConnection = {
  __typename?: 'EmailConnection';
  aggregate?: Maybe<EmailAggregator>;
  groupBy?: Maybe<EmailGroupBy>;
  values?: Maybe<Array<Maybe<Email>>>;
};

export type EmailConnectionCreated_At = {
  __typename?: 'EmailConnectionCreated_at';
  connection?: Maybe<EmailConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type EmailConnectionEmail = {
  __typename?: 'EmailConnectionEmail';
  connection?: Maybe<EmailConnection>;
  key?: Maybe<Scalars['String']>;
};

export type EmailConnectionId = {
  __typename?: 'EmailConnectionId';
  connection?: Maybe<EmailConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type EmailConnectionMessage = {
  __typename?: 'EmailConnectionMessage';
  connection?: Maybe<EmailConnection>;
  key?: Maybe<Scalars['String']>;
};

export type EmailConnectionName = {
  __typename?: 'EmailConnectionName';
  connection?: Maybe<EmailConnection>;
  key?: Maybe<Scalars['String']>;
};

export type EmailConnectionUpdated_At = {
  __typename?: 'EmailConnectionUpdated_at';
  connection?: Maybe<EmailConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type EmailGroupBy = {
  __typename?: 'EmailGroupBy';
  created_at?: Maybe<Array<Maybe<EmailConnectionCreated_At>>>;
  email?: Maybe<Array<Maybe<EmailConnectionEmail>>>;
  id?: Maybe<Array<Maybe<EmailConnectionId>>>;
  message?: Maybe<Array<Maybe<EmailConnectionMessage>>>;
  name?: Maybe<Array<Maybe<EmailConnectionName>>>;
  updated_at?: Maybe<Array<Maybe<EmailConnectionUpdated_At>>>;
};

export type EmailInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  ext?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: InputMaybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: InputMaybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  related?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  size: Scalars['Float'];
  updated_by?: InputMaybe<Scalars['ID']>;
  url: Scalars['String'];
  width?: InputMaybe<Scalars['Int']>;
};

export type Hero = {
  __typename?: 'Hero';
  created_at: Scalars['DateTime'];
  hero?: Maybe<Array<Maybe<ComponentHeroesHero>>>;
  id: Scalars['ID'];
  updated_at: Scalars['DateTime'];
};

export type HeroAggregator = {
  __typename?: 'HeroAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type HeroConnection = {
  __typename?: 'HeroConnection';
  aggregate?: Maybe<HeroAggregator>;
  groupBy?: Maybe<HeroGroupBy>;
  values?: Maybe<Array<Maybe<Hero>>>;
};

export type HeroConnectionCreated_At = {
  __typename?: 'HeroConnectionCreated_at';
  connection?: Maybe<HeroConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type HeroConnectionId = {
  __typename?: 'HeroConnectionId';
  connection?: Maybe<HeroConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type HeroConnectionUpdated_At = {
  __typename?: 'HeroConnectionUpdated_at';
  connection?: Maybe<HeroConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type HeroGroupBy = {
  __typename?: 'HeroGroupBy';
  created_at?: Maybe<Array<Maybe<HeroConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<HeroConnectionId>>>;
  updated_at?: Maybe<Array<Maybe<HeroConnectionUpdated_At>>>;
};

export type HeroInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  hero?: InputMaybe<Array<ComponentHeroesHeroInput>>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type InputId = {
  id: Scalars['ID'];
};

export type Morph = AboutCard | AboutCardAggregator | AboutCardConnection | AboutCardConnectionCreated_At | AboutCardConnectionExcerpt | AboutCardConnectionId | AboutCardConnectionImg | AboutCardConnectionTitle | AboutCardConnectionUpdated_At | AboutCardGroupBy | Album | AlbumAggregator | AlbumConnection | AlbumConnectionAlbumId | AlbumConnectionCover | AlbumConnectionCreated_At | AlbumConnectionDate | AlbumConnectionExcerpt | AlbumConnectionId | AlbumConnectionLocation | AlbumConnectionPublished | AlbumConnectionSlug | AlbumConnectionTitle | AlbumConnectionUpdated_At | AlbumConnectionUser | AlbumGroupBy | Article | ArticleAggregator | ArticleConnection | ArticleConnectionContent | ArticleConnectionCover | ArticleConnectionCreated_At | ArticleConnectionDate | ArticleConnectionExcerpt | ArticleConnectionId | ArticleConnectionPublished | ArticleConnectionSlug | ArticleConnectionTitle | ArticleConnectionUpdated_At | ArticleConnectionUser | ArticleGroupBy | Avatar | AvatarAggregator | AvatarConnection | AvatarConnectionAlt | AvatarConnectionAvatar | AvatarConnectionBio | AvatarConnectionCreated_At | AvatarConnectionId | AvatarConnectionUpdated_At | AvatarGroupBy | Comment | CommentAggregator | CommentConnection | CommentConnectionArticle | CommentConnectionContent | CommentConnectionCreated_At | CommentConnectionDate | CommentConnectionFlagged | CommentConnectionId | CommentConnectionParent | CommentConnectionUpdated_At | CommentConnectionUser | CommentGroupBy | ComponentBlogDislike | ComponentBlogLikes | ComponentBlogTag | ComponentHeroesHero | ComponentNavNav | ComponentOtherImg | Email | EmailAggregator | EmailConnection | EmailConnectionCreated_At | EmailConnectionEmail | EmailConnectionId | EmailConnectionMessage | EmailConnectionName | EmailConnectionUpdated_At | EmailGroupBy | Hero | HeroAggregator | HeroConnection | HeroConnectionCreated_At | HeroConnectionId | HeroConnectionUpdated_At | HeroGroupBy | Nav | NavAggregator | NavConnection | NavConnectionCreated_At | NavConnectionId | NavConnectionUpdated_At | NavGroupBy | Resume | ResumeAggregator | ResumeConnection | ResumeConnectionAddress | ResumeConnectionCreated_At | ResumeConnectionEdu | ResumeConnectionEmail | ResumeConnectionHighlight | ResumeConnectionHobbies | ResumeConnectionId | ResumeConnectionPhoneNum | ResumeConnectionSkills | ResumeConnectionUpdated_At | ResumeConnectionWorkExp | ResumeGroupBy | UploadFile | UploadFileAggregator | UploadFileAggregatorAvg | UploadFileAggregatorMax | UploadFileAggregatorMin | UploadFileAggregatorSum | UploadFileConnection | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionCreated_At | UploadFileConnectionExt | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionHeight | UploadFileConnectionId | UploadFileConnectionMime | UploadFileConnectionName | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | UploadFileConnectionSize | UploadFileConnectionUpdated_At | UploadFileConnectionUrl | UploadFileConnectionWidth | UploadFileGroupBy | UserPermissionsPasswordPayload | UsersPermissionsLoginPayload | UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleAggregator | UsersPermissionsRoleConnection | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionType | UsersPermissionsRoleGroupBy | UsersPermissionsUser | UsersPermissionsUserAggregator | UsersPermissionsUserConnection | UsersPermissionsUserConnectionAvatar | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionCreated_At | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionRole | UsersPermissionsUserConnectionUpdated_At | UsersPermissionsUserConnectionUsername | UsersPermissionsUserGroupBy | Video | VideoAggregator | VideoConnection | VideoConnectionCover | VideoConnectionCreated_At | VideoConnectionDate | VideoConnectionExcerpt | VideoConnectionId | VideoConnectionPublished | VideoConnectionSlug | VideoConnectionTitle | VideoConnectionUpdated_At | VideoConnectionUser | VideoConnectionVideoId | VideoGroupBy | CreateAboutCardPayload | CreateAlbumPayload | CreateArticlePayload | CreateAvatarPayload | CreateCommentPayload | CreateEmailPayload | CreateHeroPayload | CreateNavPayload | CreateResumePayload | CreateRolePayload | CreateUserPayload | CreateVideoPayload | DeleteAboutCardPayload | DeleteAlbumPayload | DeleteArticlePayload | DeleteAvatarPayload | DeleteCommentPayload | DeleteEmailPayload | DeleteFilePayload | DeleteHeroPayload | DeleteNavPayload | DeleteResumePayload | DeleteRolePayload | DeleteUserPayload | DeleteVideoPayload | UpdateAboutCardPayload | UpdateAlbumPayload | UpdateArticlePayload | UpdateAvatarPayload | UpdateCommentPayload | UpdateEmailPayload | UpdateHeroPayload | UpdateNavPayload | UpdateResumePayload | UpdateRolePayload | UpdateUserPayload | UpdateVideoPayload;

export type Mutation = {
  __typename?: 'Mutation';
  createAboutCard?: Maybe<CreateAboutCardPayload>;
  createAlbum?: Maybe<CreateAlbumPayload>;
  createArticle?: Maybe<CreateArticlePayload>;
  createAvatar?: Maybe<CreateAvatarPayload>;
  createComment?: Maybe<CreateCommentPayload>;
  createEmail?: Maybe<CreateEmailPayload>;
  createHero?: Maybe<CreateHeroPayload>;
  createNav?: Maybe<CreateNavPayload>;
  createResume?: Maybe<CreateResumePayload>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  createVideo?: Maybe<CreateVideoPayload>;
  deleteAboutCard?: Maybe<DeleteAboutCardPayload>;
  deleteAlbum?: Maybe<DeleteAlbumPayload>;
  deleteArticle?: Maybe<DeleteArticlePayload>;
  deleteAvatar?: Maybe<DeleteAvatarPayload>;
  deleteComment?: Maybe<DeleteCommentPayload>;
  deleteEmail?: Maybe<DeleteEmailPayload>;
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>;
  deleteHero?: Maybe<DeleteHeroPayload>;
  deleteNav?: Maybe<DeleteNavPayload>;
  deleteResume?: Maybe<DeleteResumePayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  deleteVideo?: Maybe<DeleteVideoPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFile>>;
  register: UsersPermissionsLoginPayload;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateAboutCard?: Maybe<UpdateAboutCardPayload>;
  updateAlbum?: Maybe<UpdateAlbumPayload>;
  updateArticle?: Maybe<UpdateArticlePayload>;
  updateAvatar?: Maybe<UpdateAvatarPayload>;
  updateComment?: Maybe<UpdateCommentPayload>;
  updateEmail?: Maybe<UpdateEmailPayload>;
  updateFileInfo: UploadFile;
  updateHero?: Maybe<UpdateHeroPayload>;
  updateNav?: Maybe<UpdateNavPayload>;
  updateResume?: Maybe<UpdateResumePayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  updateVideo?: Maybe<UpdateVideoPayload>;
  upload: UploadFile;
};


export type MutationCreateAboutCardArgs = {
  input?: InputMaybe<CreateAboutCardInput>;
};


export type MutationCreateAlbumArgs = {
  input?: InputMaybe<CreateAlbumInput>;
};


export type MutationCreateArticleArgs = {
  input?: InputMaybe<CreateArticleInput>;
};


export type MutationCreateAvatarArgs = {
  input?: InputMaybe<CreateAvatarInput>;
};


export type MutationCreateCommentArgs = {
  input?: InputMaybe<CreateCommentInput>;
};


export type MutationCreateEmailArgs = {
  input?: InputMaybe<CreateEmailInput>;
};


export type MutationCreateHeroArgs = {
  input?: InputMaybe<CreateHeroInput>;
};


export type MutationCreateNavArgs = {
  input?: InputMaybe<CreateNavInput>;
};


export type MutationCreateResumeArgs = {
  input?: InputMaybe<CreateResumeInput>;
};


export type MutationCreateRoleArgs = {
  input?: InputMaybe<CreateRoleInput>;
};


export type MutationCreateUserArgs = {
  input?: InputMaybe<CreateUserInput>;
};


export type MutationCreateVideoArgs = {
  input?: InputMaybe<CreateVideoInput>;
};


export type MutationDeleteAboutCardArgs = {
  input?: InputMaybe<DeleteAboutCardInput>;
};


export type MutationDeleteAlbumArgs = {
  input?: InputMaybe<DeleteAlbumInput>;
};


export type MutationDeleteArticleArgs = {
  input?: InputMaybe<DeleteArticleInput>;
};


export type MutationDeleteAvatarArgs = {
  input?: InputMaybe<DeleteAvatarInput>;
};


export type MutationDeleteCommentArgs = {
  input?: InputMaybe<DeleteCommentInput>;
};


export type MutationDeleteEmailArgs = {
  input?: InputMaybe<DeleteEmailInput>;
};


export type MutationDeleteFileArgs = {
  input?: InputMaybe<DeleteFileInput>;
};


export type MutationDeleteHeroArgs = {
  input?: InputMaybe<DeleteHeroInput>;
};


export type MutationDeleteNavArgs = {
  input?: InputMaybe<DeleteNavInput>;
};


export type MutationDeleteResumeArgs = {
  input?: InputMaybe<DeleteResumeInput>;
};


export type MutationDeleteRoleArgs = {
  input?: InputMaybe<DeleteRoleInput>;
};


export type MutationDeleteUserArgs = {
  input?: InputMaybe<DeleteUserInput>;
};


export type MutationDeleteVideoArgs = {
  input?: InputMaybe<DeleteVideoInput>;
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
  source?: InputMaybe<Scalars['String']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateAboutCardArgs = {
  input?: InputMaybe<UpdateAboutCardInput>;
};


export type MutationUpdateAlbumArgs = {
  input?: InputMaybe<UpdateAlbumInput>;
};


export type MutationUpdateArticleArgs = {
  input?: InputMaybe<UpdateArticleInput>;
};


export type MutationUpdateAvatarArgs = {
  input?: InputMaybe<UpdateAvatarInput>;
};


export type MutationUpdateCommentArgs = {
  input?: InputMaybe<UpdateCommentInput>;
};


export type MutationUpdateEmailArgs = {
  input?: InputMaybe<UpdateEmailInput>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: FileInfoInput;
};


export type MutationUpdateHeroArgs = {
  input?: InputMaybe<UpdateHeroInput>;
};


export type MutationUpdateNavArgs = {
  input?: InputMaybe<UpdateNavInput>;
};


export type MutationUpdateResumeArgs = {
  input?: InputMaybe<UpdateResumeInput>;
};


export type MutationUpdateRoleArgs = {
  input?: InputMaybe<UpdateRoleInput>;
};


export type MutationUpdateUserArgs = {
  input?: InputMaybe<UpdateUserInput>;
};


export type MutationUpdateVideoArgs = {
  input?: InputMaybe<UpdateVideoInput>;
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
  source?: InputMaybe<Scalars['String']>;
};

export type Nav = {
  __typename?: 'Nav';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  nav?: Maybe<Array<Maybe<ComponentNavNav>>>;
  updated_at: Scalars['DateTime'];
};

export type NavAggregator = {
  __typename?: 'NavAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type NavConnection = {
  __typename?: 'NavConnection';
  aggregate?: Maybe<NavAggregator>;
  groupBy?: Maybe<NavGroupBy>;
  values?: Maybe<Array<Maybe<Nav>>>;
};

export type NavConnectionCreated_At = {
  __typename?: 'NavConnectionCreated_at';
  connection?: Maybe<NavConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type NavConnectionId = {
  __typename?: 'NavConnectionId';
  connection?: Maybe<NavConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type NavConnectionUpdated_At = {
  __typename?: 'NavConnectionUpdated_at';
  connection?: Maybe<NavConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type NavGroupBy = {
  __typename?: 'NavGroupBy';
  created_at?: Maybe<Array<Maybe<NavConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<NavConnectionId>>>;
  updated_at?: Maybe<Array<Maybe<NavConnectionUpdated_At>>>;
};

export type NavInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  nav?: InputMaybe<Array<InputMaybe<ComponentNavNavInput>>>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  aboutCard?: Maybe<AboutCard>;
  aboutCards?: Maybe<Array<Maybe<AboutCard>>>;
  aboutCardsConnection?: Maybe<AboutCardConnection>;
  album?: Maybe<Album>;
  albums?: Maybe<Array<Maybe<Album>>>;
  albumsConnection?: Maybe<AlbumConnection>;
  article?: Maybe<Article>;
  articles?: Maybe<Array<Maybe<Article>>>;
  articlesConnection?: Maybe<ArticleConnection>;
  avatar?: Maybe<Avatar>;
  avatars?: Maybe<Array<Maybe<Avatar>>>;
  avatarsConnection?: Maybe<AvatarConnection>;
  comment?: Maybe<Comment>;
  comments?: Maybe<Array<Maybe<Comment>>>;
  commentsConnection?: Maybe<CommentConnection>;
  email?: Maybe<Email>;
  emails?: Maybe<Array<Maybe<Email>>>;
  emailsConnection?: Maybe<EmailConnection>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  hero?: Maybe<Hero>;
  heroes?: Maybe<Array<Maybe<Hero>>>;
  heroesConnection?: Maybe<HeroConnection>;
  me?: Maybe<UsersPermissionsMe>;
  nav?: Maybe<Nav>;
  navs?: Maybe<Array<Maybe<Nav>>>;
  navsConnection?: Maybe<NavConnection>;
  resume?: Maybe<Resume>;
  resumes?: Maybe<Array<Maybe<Resume>>>;
  resumesConnection?: Maybe<ResumeConnection>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
  video?: Maybe<Video>;
  videos?: Maybe<Array<Maybe<Video>>>;
  videosConnection?: Maybe<VideoConnection>;
};


export type QueryAboutCardArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryAboutCardsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryAboutCardsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryAlbumArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryAlbumsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryAlbumsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryArticleArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryArticlesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryArticlesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryAvatarArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryAvatarsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryAvatarsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryCommentArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryCommentsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryCommentsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryEmailArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryEmailsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryEmailsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryFilesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryFilesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryHeroArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryHeroesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryHeroesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryNavArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryNavsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryNavsConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryResumeArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryResumesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryResumesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryRolesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryRolesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryUsersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryUsersConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryVideoArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryVideosArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryVideosConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type Resume = {
  __typename?: 'Resume';
  address: Scalars['String'];
  created_at: Scalars['DateTime'];
  edu: Scalars['String'];
  email: Scalars['String'];
  highlight?: Maybe<ComponentOtherImg>;
  hobbies: Scalars['String'];
  id: Scalars['ID'];
  phoneNum: Scalars['String'];
  skills: Scalars['String'];
  updated_at: Scalars['DateTime'];
  workExp: Scalars['String'];
};

export type ResumeAggregator = {
  __typename?: 'ResumeAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ResumeConnection = {
  __typename?: 'ResumeConnection';
  aggregate?: Maybe<ResumeAggregator>;
  groupBy?: Maybe<ResumeGroupBy>;
  values?: Maybe<Array<Maybe<Resume>>>;
};

export type ResumeConnectionAddress = {
  __typename?: 'ResumeConnectionAddress';
  connection?: Maybe<ResumeConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ResumeConnectionCreated_At = {
  __typename?: 'ResumeConnectionCreated_at';
  connection?: Maybe<ResumeConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ResumeConnectionEdu = {
  __typename?: 'ResumeConnectionEdu';
  connection?: Maybe<ResumeConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ResumeConnectionEmail = {
  __typename?: 'ResumeConnectionEmail';
  connection?: Maybe<ResumeConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ResumeConnectionHighlight = {
  __typename?: 'ResumeConnectionHighlight';
  connection?: Maybe<ResumeConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ResumeConnectionHobbies = {
  __typename?: 'ResumeConnectionHobbies';
  connection?: Maybe<ResumeConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ResumeConnectionId = {
  __typename?: 'ResumeConnectionId';
  connection?: Maybe<ResumeConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ResumeConnectionPhoneNum = {
  __typename?: 'ResumeConnectionPhoneNum';
  connection?: Maybe<ResumeConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ResumeConnectionSkills = {
  __typename?: 'ResumeConnectionSkills';
  connection?: Maybe<ResumeConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ResumeConnectionUpdated_At = {
  __typename?: 'ResumeConnectionUpdated_at';
  connection?: Maybe<ResumeConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ResumeConnectionWorkExp = {
  __typename?: 'ResumeConnectionWorkExp';
  connection?: Maybe<ResumeConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ResumeGroupBy = {
  __typename?: 'ResumeGroupBy';
  address?: Maybe<Array<Maybe<ResumeConnectionAddress>>>;
  created_at?: Maybe<Array<Maybe<ResumeConnectionCreated_At>>>;
  edu?: Maybe<Array<Maybe<ResumeConnectionEdu>>>;
  email?: Maybe<Array<Maybe<ResumeConnectionEmail>>>;
  highlight?: Maybe<Array<Maybe<ResumeConnectionHighlight>>>;
  hobbies?: Maybe<Array<Maybe<ResumeConnectionHobbies>>>;
  id?: Maybe<Array<Maybe<ResumeConnectionId>>>;
  phoneNum?: Maybe<Array<Maybe<ResumeConnectionPhoneNum>>>;
  skills?: Maybe<Array<Maybe<ResumeConnectionSkills>>>;
  updated_at?: Maybe<Array<Maybe<ResumeConnectionUpdated_At>>>;
  workExp?: Maybe<Array<Maybe<ResumeConnectionWorkExp>>>;
};

export type ResumeInput = {
  address: Scalars['String'];
  created_by?: InputMaybe<Scalars['ID']>;
  edu: Scalars['String'];
  email: Scalars['String'];
  highlight: ComponentOtherImgInput;
  hobbies: Scalars['String'];
  phoneNum: Scalars['String'];
  skills: Scalars['String'];
  updated_by?: InputMaybe<Scalars['ID']>;
  workExp: Scalars['String'];
};

export type RoleInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Morph>>>;
  size: Scalars['Float'];
  updated_at: Scalars['DateTime'];
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};


export type UploadFileRelatedArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  avg?: Maybe<UploadFileAggregatorAvg>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<UploadFileAggregatorMax>;
  min?: Maybe<UploadFileAggregatorMin>;
  sum?: Maybe<UploadFileAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  aggregate?: Maybe<UploadFileAggregator>;
  groupBy?: Maybe<UploadFileGroupBy>;
  values?: Maybe<Array<Maybe<UploadFile>>>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionCreated_At = {
  __typename?: 'UploadFileConnectionCreated_at';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['JSON']>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['JSON']>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Float']>;
};

export type UploadFileConnectionUpdated_At = {
  __typename?: 'UploadFileConnectionUpdated_at';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
};

export type UserInput = {
  albums?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  articles?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  avatar?: InputMaybe<Scalars['String']>;
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  created_by?: InputMaybe<Scalars['ID']>;
  email: Scalars['String'];
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  username: Scalars['String'];
  videos?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  avatar?: Maybe<Scalars['String']>;
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email: Scalars['String'];
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

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  controller: Scalars['String'];
  enabled: Scalars['Boolean'];
  id: Scalars['ID'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
  type: Scalars['String'];
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  type?: Maybe<Scalars['String']>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type UsersPermissionsRolePermissionsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type UsersPermissionsRoleUsersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  albums?: Maybe<Array<Maybe<Album>>>;
  articles?: Maybe<Array<Maybe<Article>>>;
  avatar?: Maybe<Scalars['String']>;
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  created_at: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
  updated_at: Scalars['DateTime'];
  username: Scalars['String'];
  videos?: Maybe<Array<Maybe<Video>>>;
};


export type UsersPermissionsUserAlbumsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type UsersPermissionsUserArticlesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type UsersPermissionsUserVideosArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};

export type UsersPermissionsUserConnectionAvatar = {
  __typename?: 'UsersPermissionsUserConnectionAvatar';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: 'UsersPermissionsUserConnectionCreated_at';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_at';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  avatar?: Maybe<Array<Maybe<UsersPermissionsUserConnectionAvatar>>>;
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
  updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
};

export type Video = {
  __typename?: 'Video';
  cover?: Maybe<ComponentOtherImg>;
  created_at: Scalars['DateTime'];
  date: Scalars['Date'];
  excerpt: Scalars['String'];
  id: Scalars['ID'];
  published?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  tag?: Maybe<Array<Maybe<ComponentBlogTag>>>;
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
  user?: Maybe<UsersPermissionsUser>;
  videoID: Scalars['String'];
};

export type VideoAggregator = {
  __typename?: 'VideoAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type VideoConnection = {
  __typename?: 'VideoConnection';
  aggregate?: Maybe<VideoAggregator>;
  groupBy?: Maybe<VideoGroupBy>;
  values?: Maybe<Array<Maybe<Video>>>;
};

export type VideoConnectionCover = {
  __typename?: 'VideoConnectionCover';
  connection?: Maybe<VideoConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type VideoConnectionCreated_At = {
  __typename?: 'VideoConnectionCreated_at';
  connection?: Maybe<VideoConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type VideoConnectionDate = {
  __typename?: 'VideoConnectionDate';
  connection?: Maybe<VideoConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type VideoConnectionExcerpt = {
  __typename?: 'VideoConnectionExcerpt';
  connection?: Maybe<VideoConnection>;
  key?: Maybe<Scalars['String']>;
};

export type VideoConnectionId = {
  __typename?: 'VideoConnectionId';
  connection?: Maybe<VideoConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type VideoConnectionPublished = {
  __typename?: 'VideoConnectionPublished';
  connection?: Maybe<VideoConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type VideoConnectionSlug = {
  __typename?: 'VideoConnectionSlug';
  connection?: Maybe<VideoConnection>;
  key?: Maybe<Scalars['String']>;
};

export type VideoConnectionTitle = {
  __typename?: 'VideoConnectionTitle';
  connection?: Maybe<VideoConnection>;
  key?: Maybe<Scalars['String']>;
};

export type VideoConnectionUpdated_At = {
  __typename?: 'VideoConnectionUpdated_at';
  connection?: Maybe<VideoConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type VideoConnectionUser = {
  __typename?: 'VideoConnectionUser';
  connection?: Maybe<VideoConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type VideoConnectionVideoId = {
  __typename?: 'VideoConnectionVideoID';
  connection?: Maybe<VideoConnection>;
  key?: Maybe<Scalars['String']>;
};

export type VideoGroupBy = {
  __typename?: 'VideoGroupBy';
  cover?: Maybe<Array<Maybe<VideoConnectionCover>>>;
  created_at?: Maybe<Array<Maybe<VideoConnectionCreated_At>>>;
  date?: Maybe<Array<Maybe<VideoConnectionDate>>>;
  excerpt?: Maybe<Array<Maybe<VideoConnectionExcerpt>>>;
  id?: Maybe<Array<Maybe<VideoConnectionId>>>;
  published?: Maybe<Array<Maybe<VideoConnectionPublished>>>;
  slug?: Maybe<Array<Maybe<VideoConnectionSlug>>>;
  title?: Maybe<Array<Maybe<VideoConnectionTitle>>>;
  updated_at?: Maybe<Array<Maybe<VideoConnectionUpdated_At>>>;
  user?: Maybe<Array<Maybe<VideoConnectionUser>>>;
  videoID?: Maybe<Array<Maybe<VideoConnectionVideoId>>>;
};

export type VideoInput = {
  cover: ComponentOtherImgInput;
  created_by?: InputMaybe<Scalars['ID']>;
  date: Scalars['Date'];
  excerpt: Scalars['String'];
  published?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  tag?: InputMaybe<Array<ComponentBlogTagInput>>;
  title: Scalars['String'];
  updated_by?: InputMaybe<Scalars['ID']>;
  user?: InputMaybe<Scalars['ID']>;
  videoID: Scalars['String'];
};

export type CreateAboutCardInput = {
  data?: InputMaybe<AboutCardInput>;
};

export type CreateAboutCardPayload = {
  __typename?: 'createAboutCardPayload';
  aboutCard?: Maybe<AboutCard>;
};

export type CreateAlbumInput = {
  data?: InputMaybe<AlbumInput>;
};

export type CreateAlbumPayload = {
  __typename?: 'createAlbumPayload';
  album?: Maybe<Album>;
};

export type CreateArticleInput = {
  data?: InputMaybe<ArticleInput>;
};

export type CreateArticlePayload = {
  __typename?: 'createArticlePayload';
  article?: Maybe<Article>;
};

export type CreateAvatarInput = {
  data?: InputMaybe<AvatarInput>;
};

export type CreateAvatarPayload = {
  __typename?: 'createAvatarPayload';
  avatar?: Maybe<Avatar>;
};

export type CreateCommentInput = {
  data?: InputMaybe<CommentInput>;
};

export type CreateCommentPayload = {
  __typename?: 'createCommentPayload';
  comment?: Maybe<Comment>;
};

export type CreateEmailInput = {
  data?: InputMaybe<EmailInput>;
};

export type CreateEmailPayload = {
  __typename?: 'createEmailPayload';
  email?: Maybe<Email>;
};

export type CreateHeroInput = {
  data?: InputMaybe<HeroInput>;
};

export type CreateHeroPayload = {
  __typename?: 'createHeroPayload';
  hero?: Maybe<Hero>;
};

export type CreateNavInput = {
  data?: InputMaybe<NavInput>;
};

export type CreateNavPayload = {
  __typename?: 'createNavPayload';
  nav?: Maybe<Nav>;
};

export type CreateResumeInput = {
  data?: InputMaybe<ResumeInput>;
};

export type CreateResumePayload = {
  __typename?: 'createResumePayload';
  resume?: Maybe<Resume>;
};

export type CreateRoleInput = {
  data?: InputMaybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type CreateUserInput = {
  data?: InputMaybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type CreateVideoInput = {
  data?: InputMaybe<VideoInput>;
};

export type CreateVideoPayload = {
  __typename?: 'createVideoPayload';
  video?: Maybe<Video>;
};

export type DeleteAboutCardInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteAboutCardPayload = {
  __typename?: 'deleteAboutCardPayload';
  aboutCard?: Maybe<AboutCard>;
};

export type DeleteAlbumInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteAlbumPayload = {
  __typename?: 'deleteAlbumPayload';
  album?: Maybe<Album>;
};

export type DeleteArticleInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteArticlePayload = {
  __typename?: 'deleteArticlePayload';
  article?: Maybe<Article>;
};

export type DeleteAvatarInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteAvatarPayload = {
  __typename?: 'deleteAvatarPayload';
  avatar?: Maybe<Avatar>;
};

export type DeleteCommentInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteCommentPayload = {
  __typename?: 'deleteCommentPayload';
  comment?: Maybe<Comment>;
};

export type DeleteEmailInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteEmailPayload = {
  __typename?: 'deleteEmailPayload';
  email?: Maybe<Email>;
};

export type DeleteFileInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload';
  file?: Maybe<UploadFile>;
};

export type DeleteHeroInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteHeroPayload = {
  __typename?: 'deleteHeroPayload';
  hero?: Maybe<Hero>;
};

export type DeleteNavInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteNavPayload = {
  __typename?: 'deleteNavPayload';
  nav?: Maybe<Nav>;
};

export type DeleteResumeInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteResumePayload = {
  __typename?: 'deleteResumePayload';
  resume?: Maybe<Resume>;
};

export type DeleteRoleInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteUserInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteVideoInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteVideoPayload = {
  __typename?: 'deleteVideoPayload';
  video?: Maybe<Video>;
};

export type EditAboutCardInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  excerpt?: InputMaybe<Scalars['String']>;
  img?: InputMaybe<EditComponentOtherImgInput>;
  title?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditAlbumInput = {
  albumID?: InputMaybe<Scalars['String']>;
  cover?: InputMaybe<EditComponentOtherImgInput>;
  created_by?: InputMaybe<Scalars['ID']>;
  date?: InputMaybe<Scalars['Date']>;
  excerpt?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Enum_Album_Location>;
  published?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  user?: InputMaybe<Scalars['ID']>;
};

export type EditArticleInput = {
  comments?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  content?: InputMaybe<Scalars['String']>;
  cover?: InputMaybe<EditComponentOtherImgInput>;
  created_by?: InputMaybe<Scalars['ID']>;
  date?: InputMaybe<Scalars['Date']>;
  excerpt?: InputMaybe<Scalars['String']>;
  published?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  tag?: InputMaybe<Array<InputMaybe<EditComponentBlogTagInput>>>;
  title?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  user?: InputMaybe<Scalars['ID']>;
};

export type EditAvatarInput = {
  alt?: InputMaybe<Scalars['String']>;
  avatar?: InputMaybe<EditComponentOtherImgInput>;
  bio?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditCommentInput = {
  article?: InputMaybe<Scalars['ID']>;
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  content?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  date?: InputMaybe<Scalars['DateTime']>;
  dislikes?: InputMaybe<Array<InputMaybe<EditComponentBlogDislikeInput>>>;
  flagged?: InputMaybe<Scalars['Boolean']>;
  likes?: InputMaybe<Array<InputMaybe<EditComponentBlogLikeInput>>>;
  parent?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  user?: InputMaybe<Scalars['ID']>;
};

export type EditComponentBlogDislikeInput = {
  id?: InputMaybe<Scalars['ID']>;
  user?: InputMaybe<Scalars['ID']>;
};

export type EditComponentBlogLikeInput = {
  id?: InputMaybe<Scalars['ID']>;
  user?: InputMaybe<Scalars['ID']>;
};

export type EditComponentBlogTagInput = {
  id?: InputMaybe<Scalars['ID']>;
  tag?: InputMaybe<Enum_Componentblogtag_Tag>;
};

export type EditComponentHeroesHeroInput = {
  cover?: InputMaybe<EditComponentOtherImgInput>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type EditComponentNavNavInput = {
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type EditComponentOtherImgInput = {
  id?: InputMaybe<Scalars['ID']>;
  img?: InputMaybe<Scalars['ID']>;
  placeholder?: InputMaybe<Scalars['ID']>;
};

export type EditEmailInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  ext?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  related?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  size?: InputMaybe<Scalars['Float']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type EditHeroInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  hero?: InputMaybe<Array<InputMaybe<EditComponentHeroesHeroInput>>>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditNavInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  nav?: InputMaybe<Array<InputMaybe<EditComponentNavNavInput>>>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditResumeInput = {
  address?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  edu?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  highlight?: InputMaybe<EditComponentOtherImgInput>;
  hobbies?: InputMaybe<Scalars['String']>;
  phoneNum?: InputMaybe<Scalars['String']>;
  skills?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  workExp?: InputMaybe<Scalars['String']>;
};

export type EditRoleInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type EditUserInput = {
  albums?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  articles?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  avatar?: InputMaybe<Scalars['String']>;
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  created_by?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
  videos?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type EditVideoInput = {
  cover?: InputMaybe<EditComponentOtherImgInput>;
  created_by?: InputMaybe<Scalars['ID']>;
  date?: InputMaybe<Scalars['Date']>;
  excerpt?: InputMaybe<Scalars['String']>;
  published?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  tag?: InputMaybe<Array<InputMaybe<EditComponentBlogTagInput>>>;
  title?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  user?: InputMaybe<Scalars['ID']>;
  videoID?: InputMaybe<Scalars['String']>;
};

export type UpdateAboutCardInput = {
  data?: InputMaybe<EditAboutCardInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateAboutCardPayload = {
  __typename?: 'updateAboutCardPayload';
  aboutCard?: Maybe<AboutCard>;
};

export type UpdateAlbumInput = {
  data?: InputMaybe<EditAlbumInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateAlbumPayload = {
  __typename?: 'updateAlbumPayload';
  album?: Maybe<Album>;
};

export type UpdateArticleInput = {
  data?: InputMaybe<EditArticleInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateArticlePayload = {
  __typename?: 'updateArticlePayload';
  article?: Maybe<Article>;
};

export type UpdateAvatarInput = {
  data?: InputMaybe<EditAvatarInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateAvatarPayload = {
  __typename?: 'updateAvatarPayload';
  avatar?: Maybe<Avatar>;
};

export type UpdateCommentInput = {
  data?: InputMaybe<EditCommentInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateCommentPayload = {
  __typename?: 'updateCommentPayload';
  comment?: Maybe<Comment>;
};

export type UpdateEmailInput = {
  data?: InputMaybe<EditEmailInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateEmailPayload = {
  __typename?: 'updateEmailPayload';
  email?: Maybe<Email>;
};

export type UpdateHeroInput = {
  data?: InputMaybe<EditHeroInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateHeroPayload = {
  __typename?: 'updateHeroPayload';
  hero?: Maybe<Hero>;
};

export type UpdateNavInput = {
  data?: InputMaybe<EditNavInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateNavPayload = {
  __typename?: 'updateNavPayload';
  nav?: Maybe<Nav>;
};

export type UpdateResumeInput = {
  data?: InputMaybe<EditResumeInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateResumePayload = {
  __typename?: 'updateResumePayload';
  resume?: Maybe<Resume>;
};

export type UpdateRoleInput = {
  data?: InputMaybe<EditRoleInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateUserInput = {
  data?: InputMaybe<EditUserInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type UpdateVideoInput = {
  data?: InputMaybe<EditVideoInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateVideoPayload = {
  __typename?: 'updateVideoPayload';
  video?: Maybe<Video>;
};

export type AboutCardFragmentFragment = { __typename?: 'Query', aboutCards?: Array<{ __typename?: 'AboutCard', id: string, title: string, excerpt: string, img?: { __typename?: 'ComponentOtherImg', img?: { __typename?: 'UploadFile', id: string, url: string, hash: string } | null } | null } | null> | null };

export type ArticleListFragmentFragment = { __typename?: 'Query', list?: Array<{ __typename?: 'Article', id: string, slug?: string | null, title: string, date: any, excerpt: string, cover?: { __typename?: 'ComponentOtherImg', img?: { __typename?: 'UploadFile', id: string, url: string, hash: string } | null } | null, user?: { __typename?: 'UsersPermissionsUser', username: string } | null } | null> | null };

export type AddCommentMutationVariables = Exact<{
  articleID: Scalars['ID'];
  userID: Scalars['ID'];
  content: Scalars['String'];
  date: Scalars['DateTime'];
  parentID?: InputMaybe<Scalars['ID']>;
}>;


export type AddCommentMutation = { __typename?: 'Mutation', createComment?: { __typename?: 'createCommentPayload', comment?: { __typename?: 'Comment', id: string, content?: string | null, date?: any | null, user?: { __typename?: 'UsersPermissionsUser', id: string } | null, article?: { __typename?: 'Article', id: string } | null, parent?: { __typename?: 'Comment', id: string } | null } | null } | null };

export type CommentsQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;


export type CommentsQuery = { __typename?: 'Query', me?: { __typename?: 'UsersPermissionsMe', id: string, username: string, avatar?: string | null } | null, comments?: Array<{ __typename?: 'Comment', id: string, content?: string | null, created_at: any, updated_at: any, article?: { __typename?: 'Article', id: string } | null, user?: { __typename?: 'UsersPermissionsUser', id: string, username: string, avatar?: string | null } | null, likes?: Array<{ __typename?: 'ComponentBlogLikes', user?: { __typename?: 'UsersPermissionsUser', id: string } | null } | null> | null, dislikes?: Array<{ __typename?: 'ComponentBlogDislike', user?: { __typename?: 'UsersPermissionsUser', id: string } | null } | null> | null, children?: Array<{ __typename?: 'Comment', id: string, content?: string | null, user?: { __typename?: 'UsersPermissionsUser', id: string, username: string, avatar?: string | null } | null, likes?: Array<{ __typename?: 'ComponentBlogLikes', user?: { __typename?: 'UsersPermissionsUser', id: string } | null } | null> | null, dislikes?: Array<{ __typename?: 'ComponentBlogDislike', user?: { __typename?: 'UsersPermissionsUser', id: string } | null } | null> | null } | null> | null } | null> | null };

export type SidebarArticlesFragmentFragment = { __typename?: 'Query', sidebar?: Array<{ __typename?: 'Article', id: string, slug?: string | null, title: string, date: any, excerpt: string, cover?: { __typename?: 'ComponentOtherImg', img?: { __typename?: 'UploadFile', id: string, url: string, hash: string } | null } | null, user?: { __typename?: 'UsersPermissionsUser', username: string } | null } | null> | null, avatar?: { __typename?: 'Avatar', avatar?: { __typename?: 'ComponentOtherImg', img?: { __typename?: 'UploadFile', id: string, url: string, hash: string } | null } | null } | null };

export type AddEmailMutationVariables = Exact<{
  name: Scalars['String'];
  email: Scalars['String'];
  message: Scalars['String'];
}>;


export type AddEmailMutation = { __typename?: 'Mutation', createEmail?: { __typename?: 'createEmailPayload', email?: { __typename?: 'Email', id: string, name?: string | null, email?: string | null, message?: string | null } | null } | null };

export type GetAlbumsQueryVariables = Exact<{
  slug?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type GetAlbumsQuery = { __typename?: 'Query', albums?: Array<{ __typename?: 'Album', id: string, title: string, slug?: string | null, excerpt: string, albumID: string, cover?: { __typename?: 'ComponentOtherImg', img?: { __typename?: 'UploadFile', id: string, url: string } | null } | null } | null> | null };

export type AlbumFragmentFragment = { __typename?: 'Query', albums?: Array<{ __typename?: 'Album', id: string, slug?: string | null, title: string, date: any, location: Enum_Album_Location, cover?: { __typename?: 'ComponentOtherImg', img?: { __typename?: 'UploadFile', id: string, url: string, hash: string } | null } | null, user?: { __typename?: 'UsersPermissionsUser', username: string } | null } | null> | null };

export type BiographyFragmentFragment = { __typename?: 'Query', avatar?: { __typename?: 'Avatar', id: string, bio: string, avatar?: { __typename?: 'ComponentOtherImg', img?: { __typename?: 'UploadFile', id: string, url: string, hash: string } | null } | null } | null };

export type ImageBannerFragmentFragment = { __typename?: 'Query', hero?: { __typename?: 'Hero', id: string, hero?: Array<{ __typename?: 'ComponentHeroesHero', id: string, title?: string | null, cover?: { __typename?: 'ComponentOtherImg', img?: { __typename?: 'UploadFile', id: string, url: string, hash: string } | null } | null } | null> | null } | null };

export type RecentAlbumFragmentFragment = { __typename?: 'Query', albums?: Array<{ __typename?: 'Album', slug?: string | null, id: string, title: string, date: any, location: Enum_Album_Location, cover?: { __typename?: 'ComponentOtherImg', img?: { __typename?: 'UploadFile', id: string, url: string, hash: string } | null } | null, user?: { __typename?: 'UsersPermissionsUser', username: string } | null } | null> | null };

export type RecentArticlesFragmentFragment = { __typename?: 'Query', articles?: Array<{ __typename?: 'Article', id: string, slug?: string | null, title: string, excerpt: string, date: any, cover?: { __typename?: 'ComponentOtherImg', img?: { __typename?: 'UploadFile', id: string, url: string, hash: string } | null } | null, user?: { __typename?: 'UsersPermissionsUser', username: string } | null } | null> | null };

export type NavigationFragmentFragment = { __typename?: 'Query', nav?: { __typename?: 'Nav', nav?: Array<{ __typename?: 'ComponentNavNav', id: string, title: string, url: string } | null> | null } | null };

export type AvatarFragmentFragment = { __typename?: 'Avatar', avatar?: { __typename?: 'ComponentOtherImg', img?: { __typename?: 'UploadFile', id: string, url: string, hash: string } | null } | null };

export type ContactFragmentFragment = { __typename?: 'Resume', address: string, phoneNum: string };

export type EducationFragmentFragment = { __typename?: 'Resume', edu: string };

export type HobbiesFragmentFragment = { __typename?: 'Resume', hobbies: string };

export type HighlightImgFragmentFragment = { __typename?: 'Resume', highlight?: { __typename?: 'ComponentOtherImg', img?: { __typename?: 'UploadFile', id: string, url: string, hash: string } | null } | null };

export type ResumeEmailFragmentFragment = { __typename?: 'Resume', email: string };

export type SkillsFragmentFragment = { __typename?: 'Resume', skills: string };

export type WorkExpFragmentFragment = { __typename?: 'Resume', workExp: string };

export type GetAboutCardsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAboutCardsQuery = { __typename?: 'Query', nav?: { __typename?: 'Nav', nav?: Array<{ __typename?: 'ComponentNavNav', id: string, title: string, url: string } | null> | null } | null, aboutCards?: Array<{ __typename?: 'AboutCard', id: string, title: string, excerpt: string, img?: { __typename?: 'ComponentOtherImg', img?: { __typename?: 'UploadFile', id: string, url: string, hash: string } | null } | null } | null> | null };

export type GetAlbumPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAlbumPageQuery = { __typename?: 'Query', nav?: { __typename?: 'Nav', nav?: Array<{ __typename?: 'ComponentNavNav', id: string, title: string, url: string } | null> | null } | null, albums?: Array<{ __typename?: 'Album', id: string, slug?: string | null, title: string, date: any, location: Enum_Album_Location, cover?: { __typename?: 'ComponentOtherImg', img?: { __typename?: 'UploadFile', id: string, url: string, hash: string } | null } | null, user?: { __typename?: 'UsersPermissionsUser', username: string } | null } | null> | null };

export type GetArticlesQueryVariables = Exact<{
  start: Scalars['Int'];
}>;


export type GetArticlesQuery = { __typename?: 'Query', nav?: { __typename?: 'Nav', nav?: Array<{ __typename?: 'ComponentNavNav', id: string, title: string, url: string } | null> | null } | null, list?: Array<{ __typename?: 'Article', id: string, slug?: string | null, title: string, date: any, excerpt: string, cover?: { __typename?: 'ComponentOtherImg', img?: { __typename?: 'UploadFile', id: string, url: string, hash: string } | null } | null, user?: { __typename?: 'UsersPermissionsUser', username: string } | null } | null> | null, sidebar?: Array<{ __typename?: 'Article', id: string, slug?: string | null, title: string, date: any, excerpt: string, cover?: { __typename?: 'ComponentOtherImg', img?: { __typename?: 'UploadFile', id: string, url: string, hash: string } | null } | null, user?: { __typename?: 'UsersPermissionsUser', username: string } | null } | null> | null, avatar?: { __typename?: 'Avatar', avatar?: { __typename?: 'ComponentOtherImg', img?: { __typename?: 'UploadFile', id: string, url: string, hash: string } | null } | null } | null };

export type ArticleQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;


export type ArticleQuery = { __typename?: 'Query', articles?: Array<{ __typename?: 'Article', id: string, slug?: string | null, title: string, excerpt: string, content: string, cover?: { __typename?: 'ComponentOtherImg', img?: { __typename?: 'UploadFile', id: string, url: string, hash: string } | null } | null, tag?: Array<{ __typename?: 'ComponentBlogTag', tag?: Enum_Componentblogtag_Tag | null } | null> | null } | null> | null, nav?: { __typename?: 'Nav', nav?: Array<{ __typename?: 'ComponentNavNav', id: string, title: string, url: string } | null> | null } | null, sidebar?: Array<{ __typename?: 'Article', id: string, slug?: string | null, title: string, date: any, excerpt: string, cover?: { __typename?: 'ComponentOtherImg', img?: { __typename?: 'UploadFile', id: string, url: string, hash: string } | null } | null, user?: { __typename?: 'UsersPermissionsUser', username: string } | null } | null> | null, avatar?: { __typename?: 'Avatar', avatar?: { __typename?: 'ComponentOtherImg', img?: { __typename?: 'UploadFile', id: string, url: string, hash: string } | null } | null } | null };

export type GetContactPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetContactPageQuery = { __typename?: 'Query', nav?: { __typename?: 'Nav', nav?: Array<{ __typename?: 'ComponentNavNav', id: string, title: string, url: string } | null> | null } | null };

export type GetHomePageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHomePageQuery = { __typename?: 'Query', nav?: { __typename?: 'Nav', nav?: Array<{ __typename?: 'ComponentNavNav', id: string, title: string, url: string } | null> | null } | null, hero?: { __typename?: 'Hero', id: string, hero?: Array<{ __typename?: 'ComponentHeroesHero', id: string, title?: string | null, cover?: { __typename?: 'ComponentOtherImg', img?: { __typename?: 'UploadFile', id: string, url: string, hash: string } | null } | null } | null> | null } | null, avatar?: { __typename?: 'Avatar', id: string, bio: string, avatar?: { __typename?: 'ComponentOtherImg', img?: { __typename?: 'UploadFile', id: string, url: string, hash: string } | null } | null } | null, articles?: Array<{ __typename?: 'Article', id: string, slug?: string | null, title: string, excerpt: string, date: any, cover?: { __typename?: 'ComponentOtherImg', img?: { __typename?: 'UploadFile', id: string, url: string, hash: string } | null } | null, user?: { __typename?: 'UsersPermissionsUser', username: string } | null } | null> | null, albums?: Array<{ __typename?: 'Album', slug?: string | null, id: string, title: string, date: any, location: Enum_Album_Location, cover?: { __typename?: 'ComponentOtherImg', img?: { __typename?: 'UploadFile', id: string, url: string, hash: string } | null } | null, user?: { __typename?: 'UsersPermissionsUser', username: string } | null } | null> | null };

export type GetResumeQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetResumeQueryQuery = { __typename?: 'Query', resume?: { __typename?: 'Resume', id: string, address: string, phoneNum: string, workExp: string, edu: string, skills: string, hobbies: string, email: string, highlight?: { __typename?: 'ComponentOtherImg', img?: { __typename?: 'UploadFile', id: string, url: string, hash: string } | null } | null } | null };

export const AboutCardFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AboutCardFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Query"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aboutCards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"excerpt"}},{"kind":"Field","name":{"kind":"Name","value":"img"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"img"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AboutCardFragmentFragment, unknown>;
export const ArticleListFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArticleListFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Query"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"list"},"name":{"kind":"Name","value":"articles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"7"}},{"kind":"Argument","name":{"kind":"Name","value":"start"},"value":{"kind":"Variable","name":{"kind":"Name","value":"start"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"StringValue","value":"date:desc","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"published"},"value":{"kind":"BooleanValue","value":true}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"cover"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"img"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"excerpt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]} as unknown as DocumentNode<ArticleListFragmentFragment, unknown>;
export const AvatarFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AvatarFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Avatar"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"img"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}}]}}]}}]}}]} as unknown as DocumentNode<AvatarFragmentFragment, unknown>;
export const SidebarArticlesFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SidebarArticlesFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Query"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"sidebar"},"name":{"kind":"Name","value":"articles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"4"}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"StringValue","value":"date:desc","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"published"},"value":{"kind":"BooleanValue","value":true}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"cover"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"img"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"excerpt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"StringValue","value":"1","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AvatarFragment"}}]}}]}},...AvatarFragmentFragmentDoc.definitions]} as unknown as DocumentNode<SidebarArticlesFragmentFragment, unknown>;
export const AlbumFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AlbumFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Query"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"albums"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"StringValue","value":"date:desc","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"published"},"value":{"kind":"BooleanValue","value":true}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"cover"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"img"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]} as unknown as DocumentNode<AlbumFragmentFragment, unknown>;
export const BiographyFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BiographyFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Query"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatar"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"StringValue","value":"1","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"AvatarFragment"}}]}}]}},...AvatarFragmentFragmentDoc.definitions]} as unknown as DocumentNode<BiographyFragmentFragment, unknown>;
export const ImageBannerFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageBannerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Query"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hero"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"hero"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"cover"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"img"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<ImageBannerFragmentFragment, unknown>;
export const RecentAlbumFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RecentAlbumFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Query"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"albums"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"4"}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"StringValue","value":"date:desc","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"published"},"value":{"kind":"BooleanValue","value":true}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"cover"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"img"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]} as unknown as DocumentNode<RecentAlbumFragmentFragment, unknown>;
export const RecentArticlesFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RecentArticlesFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Query"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"articles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"3"}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"StringValue","value":"date:desc","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"published"},"value":{"kind":"BooleanValue","value":true}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"excerpt"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"cover"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"img"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]} as unknown as DocumentNode<RecentArticlesFragmentFragment, unknown>;
export const NavigationFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NavigationFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Query"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nav"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nav"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]} as unknown as DocumentNode<NavigationFragmentFragment, unknown>;
export const ContactFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContactFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Resume"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNum"}}]}}]} as unknown as DocumentNode<ContactFragmentFragment, unknown>;
export const EducationFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EducationFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Resume"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edu"}}]}}]} as unknown as DocumentNode<EducationFragmentFragment, unknown>;
export const HobbiesFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HobbiesFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Resume"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hobbies"}}]}}]} as unknown as DocumentNode<HobbiesFragmentFragment, unknown>;
export const HighlightImgFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HighlightImgFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Resume"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"highlight"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"img"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}}]}}]}}]}}]} as unknown as DocumentNode<HighlightImgFragmentFragment, unknown>;
export const ResumeEmailFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ResumeEmailFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Resume"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]} as unknown as DocumentNode<ResumeEmailFragmentFragment, unknown>;
export const SkillsFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SkillsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Resume"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"skills"}}]}}]} as unknown as DocumentNode<SkillsFragmentFragment, unknown>;
export const WorkExpFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WorkExpFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Resume"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"workExp"}}]}}]} as unknown as DocumentNode<WorkExpFragmentFragment, unknown>;
export const AddCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"articleID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userID"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"content"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"date"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"parentID"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"article"},"value":{"kind":"Variable","name":{"kind":"Name","value":"articleID"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"user"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userID"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"content"},"value":{"kind":"Variable","name":{"kind":"Name","value":"content"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"date"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"parent"},"value":{"kind":"Variable","name":{"kind":"Name","value":"parentID"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"article"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AddCommentMutation, AddCommentMutationVariables>;
export const CommentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Comments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"article"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"parent_null"},"value":{"kind":"BooleanValue","value":true}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"article"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"likes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"dislikes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"likes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"dislikes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<CommentsQuery, CommentsQueryVariables>;
export const AddEmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddEmail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"message"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createEmail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"message"},"value":{"kind":"Variable","name":{"kind":"Name","value":"message"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<AddEmailMutation, AddEmailMutationVariables>;
export const GetAlbumsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAlbums"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"albums"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"cover"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"img"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"excerpt"}},{"kind":"Field","name":{"kind":"Name","value":"albumID"}}]}}]}}]} as unknown as DocumentNode<GetAlbumsQuery, GetAlbumsQueryVariables>;
export const GetAboutCardsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAboutCards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavigationFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"AboutCardFragment"}}]}},...NavigationFragmentFragmentDoc.definitions,...AboutCardFragmentFragmentDoc.definitions]} as unknown as DocumentNode<GetAboutCardsQuery, GetAboutCardsQueryVariables>;
export const GetAlbumPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAlbumPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavigationFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"AlbumFragment"}}]}},...NavigationFragmentFragmentDoc.definitions,...AlbumFragmentFragmentDoc.definitions]} as unknown as DocumentNode<GetAlbumPageQuery, GetAlbumPageQueryVariables>;
export const GetArticlesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getArticles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"start"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavigationFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArticleListFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SidebarArticlesFragment"}}]}},...NavigationFragmentFragmentDoc.definitions,...ArticleListFragmentFragmentDoc.definitions,...SidebarArticlesFragmentFragmentDoc.definitions]} as unknown as DocumentNode<GetArticlesQuery, GetArticlesQueryVariables>;
export const ArticleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Article"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavigationFragment"}},{"kind":"Field","name":{"kind":"Name","value":"articles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"cover"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"img"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"excerpt"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"tag"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tag"}}]}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SidebarArticlesFragment"}}]}},...NavigationFragmentFragmentDoc.definitions,...SidebarArticlesFragmentFragmentDoc.definitions]} as unknown as DocumentNode<ArticleQuery, ArticleQueryVariables>;
export const GetContactPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getContactPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavigationFragment"}}]}},...NavigationFragmentFragmentDoc.definitions]} as unknown as DocumentNode<GetContactPageQuery, GetContactPageQueryVariables>;
export const GetHomePageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getHomePage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavigationFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageBannerFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BiographyFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RecentArticlesFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RecentAlbumFragment"}}]}},...NavigationFragmentFragmentDoc.definitions,...ImageBannerFragmentFragmentDoc.definitions,...BiographyFragmentFragmentDoc.definitions,...RecentArticlesFragmentFragmentDoc.definitions,...RecentAlbumFragmentFragmentDoc.definitions]} as unknown as DocumentNode<GetHomePageQuery, GetHomePageQueryVariables>;
export const GetResumeQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getResumeQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resume"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContactFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"WorkExpFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"EducationFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SkillsFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HighlightImgFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HobbiesFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ResumeEmailFragment"}}]}}]}},...ContactFragmentFragmentDoc.definitions,...WorkExpFragmentFragmentDoc.definitions,...EducationFragmentFragmentDoc.definitions,...SkillsFragmentFragmentDoc.definitions,...HighlightImgFragmentFragmentDoc.definitions,...HobbiesFragmentFragmentDoc.definitions,...ResumeEmailFragmentFragmentDoc.definitions]} as unknown as DocumentNode<GetResumeQueryQuery, GetResumeQueryQueryVariables>;