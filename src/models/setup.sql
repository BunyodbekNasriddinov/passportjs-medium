CREATE EXTENSION IF NOT EXISTS pgcrypto;

drop table if not exists users;
create table users(
  user_id varchar(64) primary key not null,
  username varchar(64) unique not null,
  email varchar(64) unique not null,
  password varchar(60) not null,
  provider varchar(16) unique not null,
  picture varchar(100),
  created_at date default current_date not null
);

drop table if not exists posts;
create table posts(
  post_id serial primary key not null,
  post_title varchar(64) not null,
  post_body varchar(300) not null,
  created_at date default current_date not null,
  user_id varchar(64) references users(user_id) not null
)