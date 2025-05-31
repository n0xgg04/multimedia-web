import type { ColumnType } from "kysely";
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

import type { ACCOUNT_TYPE } from "./enums";

export type comments = {
    id: Generated<string>;
    post_id: string;
    user_id: string;
    content: string;
    created_at: Generated<Timestamp>;
};
export type follow_user = {
    id: Generated<string>;
    follower_id: string;
    following_id: string;
    created_at: Generated<Timestamp>;
};
export type like_post = {
    id: Generated<string>;
    user_id: string;
    post_id: string;
    created_at: Generated<Timestamp>;
};
export type oganization = {
    id: Generated<string>;
    name: string;
    created_at: Generated<Timestamp>;
    avatar: string;
    user_owner_id: string;
    organization_info_id: string;
    owner_id: string;
};
export type organization_info = {
    organize_id: string;
    website: string | null;
    description: string | null;
};
export type post_attachments = {
    id: Generated<string>;
    post_id: string;
    alt: string;
    object_id: Generated<string>;
    created_at: Generated<Timestamp>;
};
export type post_categories = {
    id: Generated<string>;
    name: string;
    created_at: Generated<Timestamp>;
};
export type post_comments = {
    id: Generated<string>;
    user_id: string;
    post_id: string;
    content: string;
    created_at: Generated<Timestamp>;
};
export type posts = {
    id: Generated<string>;
    created_at: Generated<Timestamp>;
    author_uuid: Generated<string>;
    title: string;
    content: string;
    category_id: string;
    allow_comment: Generated<boolean>;
    like_like: Generated<boolean>;
    is_deleted: Generated<boolean>;
    is_hidden: Generated<boolean>;
};
export type user_follow_organizations = {
    id: Generated<string>;
    user_id: string;
    organization_id: string;
    created_at: Generated<Timestamp>;
};
export type user_rate_organizations = {
    id: Generated<string>;
    user_id: string;
    organization_id: string;
    created_at: Generated<Timestamp>;
    rate: Generated<number>;
    comment: string | null;
};
export type users = {
    id: Generated<string>;
    email: string;
    fullname: string | null;
    profile_pic_url: string | null;
    created_at: Generated<Timestamp>;
    student_code: string | null;
    account_type: Generated<ACCOUNT_TYPE>;
};
export type views = {
    id: Generated<string>;
    post_id: string;
    ip: string;
    created_at: Generated<Timestamp>;
};
export type DB = {
    comments: comments;
    follow_user: follow_user;
    like_post: like_post;
    oganization: oganization;
    organization_info: organization_info;
    post_attachments: post_attachments;
    post_categories: post_categories;
    post_comments: post_comments;
    posts: posts;
    user_follow_organizations: user_follow_organizations;
    user_rate_organizations: user_rate_organizations;
    users: users;
    views: views;
};
