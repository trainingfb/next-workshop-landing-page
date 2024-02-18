# create table
CREATE TABLE todos ( todo varchar(255), text varchar(255), Owner varchar(255) );

# delete table

DROP TABLE todos;


# remove text and todo
ALTER TABLE todos
DROP COLUMN todo,
DROP COLUMN owner;

# add column text
ALTER TABLE todos
ADD COLUMN text VARCHAR

# add item
ALTER TABLE todos
ADD COLUMN id SERIAL PRIMARY KEY;
