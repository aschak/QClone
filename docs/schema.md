# Schema Information



## users
column name       | data type | details
------------------|-----------|-----------------------
id                | integer   | not null, primary key
username          | string    | not null, indexed, unique
email             | string    | not null, indexed, unique
bio               | text      |
profile_photo_url | string    |
session_token     | string    | not null, indexed, unique
password_digest   | string    | not null

## questions
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
body        | text      | not null
date_asked  | datetime  | not null
author_id   | integer   | not null, foreign key (references users), indexed

## upvotes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
voter_id    | integer   | not null, foreign key (references users), indexed
question_id | integer   | not null, foreign key (references questions), indexed

## answers
column name | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
body          | text      | not null
date_answered | datetime  | not null
author_id     | integer   | not null, foreign key (references users), indexed
question_id   | integer   | not null, foreign key (references questions), indexed

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed
answer_id   | integer   | not null, foreign key (references answers), indexed

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
tag_name    | string    | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
question_id | integer   | not null, foreign key (references questions), indexed
tag_id      | integer   | not null, foreign key (references tags), indexed
