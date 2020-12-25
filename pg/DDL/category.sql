CREATE TABLE categories (
    id serial PRIMARY KEY,
    parent_id int,
    name VARCHAR (60) DEFAULT '',
    breadcrumb_name VARCHAR (60) DEFAULT ''
);

CREATE TABLE products (
    id serial PRIMARY KEY,
    name VARCHAR (60) DEFAULT '',
    category_path VARCHAR (2000) DEFAULT ''
);
