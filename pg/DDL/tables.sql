CREATE TABLE product(
   id serial PRIMARY KEY,
   name VARCHAR (255) DEFAULT '',
   price numeric (8,2) DEFAULT 0,
   photo VARCHAR (255) DEFAULT '',
   category_id int
);

-- category

CREATE TABLE category_field(             -- optional to product
   id int,
   category_id int,
   name VARCHAR (255) DEFAULT '',
   type VARCHAR (30) DEFAULT '',
   PRIMARY KEY (id, category_id)
);

CREATE TABLE product_category_field_val( -- optional to product
   id serial PRIMARY KEY,
   product_id int NOT NULL, -- product.id
   category_field_id int NOT NULL, -- category_field.id
   category_id int NOT NULL,       -- category_field.category_id
                                   -- 
                                   -- should tally product.category_id
   val VARCHAR (255) DEFAULT ''
);
