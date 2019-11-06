module.exports = {
  createTable: () => `
    create table if not exists user (
        id serial not null unique,
        username varchar(255) not null unique,
        password varchar(255) not null unique,
        email varchar(255) not null unique,
        constraint "user_pk" PRIMARY KEY ("id")
    ) with (
        OIDS=FALSE
    )`, // create table if not exists
  createUser: (username, password, email) => `
    insert into user (username, password, email) values (${username}, ${password}, ${email});
  `, // creates user on user table
  readUser: (id) => `select * from user where id=${id}`, // gets user info
  updateUser: (id, user) => `update user set username=${user.username}, password=${user.password}, email=${user.email} where id=${id}`, // change user info
  deleteUser: (id) => `delete from user where id=${id}`, // delete user info
};
