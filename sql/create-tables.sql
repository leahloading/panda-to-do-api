create table todos (
  id serial primary key,
  description text,
  status boolean default false
);
