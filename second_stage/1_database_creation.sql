create table genre(
    id serial primary key,
    name varchar(100)
);

create table country(
    id serial primary key,
    name varchar(100)
);

create table person(
    id serial primary key,
    first_name varchar(100),
    last_name varchar(100),
    date_of_birth date,
    place_of_birth int references country(id)
);

create table language(
    id serial primary key,
    name varchar(100)
);

create table film(
    id serial primary key,
    name varchar(100),
    genre int references genre(id),
    director int references person(id),
    screenwriter int references person(id),
    producer int references person(id),
    operator int references person(id),
    composer int references person(id),
    artist int references person(id),
    editor int references person(id),
    budget int,
    marketing int,
    fees_in_usa int ,
    fees_worldwide int,
    premiere_in_rus date,
    premiere_worldwide date,
    release_on_dvd date,
    age_limit smallint,
    rating varchar(5),
    duration time,
    quality varchar,
    subtitle int references language(id),
    audiotrack int references language(id)
);

create table audience(
    id serial primary key,
    film bigint references film(id),
    country int references country(id),
    quantity bigint
);

create table dubbed_role(
    id serial primary key,
    person int references person(id),
    film int references film(id)
);

create table main_role(
    id serial primary key,
    person int references person(id),
    film int references film(id)
);