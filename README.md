# Products API - Postgres

## The Purpose

Learn to access a relational database, PostgreSQL, from Node.

Quite a lot of information and help is avaible in these instructions to take time to read through *the whole* file.

## The Lab

We want you to build an Express API to handle Product data. The products should be stored and retrieved from a Postgres database.

In this lab you will get to setup just about everything from scratch; building out the database tables, add data to them and then build the Express API that manages the data.

We have not supplied you with tests for this exercise, so you are free use a tool like Postman to do the tests.

### The tables and their data

We want you to create two tables in the database.

* `ProductGroups` that holds groups of products such as Food, Beverages and Toys.
  * The product group should have two fields
    * `Id` an unique identifer (you pick a suitable type)
    * `Name` - the name of the group
* `Products` - the table that contains all information about the products. It also have a foreign key to the `ProductGroups` table, so that a product can belong to a product group
  * `Id` a unique identifer (you pick a suitable type)
  * `Name` - the name of the product such as Beer, Pizza or Lego
  * `Description` - the description of the product
  * `Price` - a price, in decimal form, of the product
  * `ProductGroupId` - a foreign key to the product group that the product belongs too.

You can use the pgAdmin tool to do this via the UI (right-click tables and select Create-table). Or you could write a query manually and create the tables by running the query.

Notice that the data is not checked into git which means that if you pull this repository from git you will not get any data in your database. Therefor there's a `initSQL.sql` script where you can create both the tables and their data. This is refered to as seeding the database.

We have created a simple starting point for you - that creates a dummy table and adds data to it.

### The API endpoints for you to implement

We want you to write an API using Express and have the following endpoints, listed here in suggested implementation order:

* `GET` `/api/products` - list all products, including group name for each product
* `GET` `/api/products/:id`  - get one, including group name
* `POST` `/api/products` - add a new product, with all fields except id. Also, require a `productGroupId` value as parameter. You can assume that the clients knows an existing `productGroupId`
* `PUT` `/api/products/:id` - updates the product information with the given id
* `DEL` `/api/products/:id` - delete the product with the given id
* `GET` `/api/products/?group=[groupname]`  - get all products for the `groupname` product group

Go as far as you can, you will soon notice some repetition in the code and it's structure and can move faster in the end.

### The help

* Install [PGAdmin](https://www.pgadmin.org/download/pgadmin-4-macos/).
* Create an account at [ElephantSQL](https://www.elephantsql.com/) and create a free tier (Tiny Turtle) database instance.
* Add the server and connect to your *shared* instance with your fresh database.
  * Poke around and get a little bit familiar with the UI, remember you can right-click even though it is a website.
  * Seed your database with necessities.
    * The seeding can be done in two ways, either point-and-click, or run your seeding script (see above under "The tables and their data"). Or try both! 
    * It's a good idea to have file like this when running the code on different machines, so that the database can be created in multiple instances if needed and also start new developer instances if needed for debugging purposes.
    * You can create the table with PgAdmin (installed on your computers) and then save the table and it's data to a script like this, by choosing the Scripts -> Create Script feature.  
* We have supplied you with a very simple starting version of the API in the `index.js`-file
  * There's a `db.js` file where you can place all database access code to separate the database code from the API-code
  * You have the `pg` <https://www.npmjs.com/package/pg> package that you can use to access the database, as shown in the slides
  * You will have to setup and managed the connection and pools, as shown in the slides and [documentation](https://node-postgres.com/).
* We have not supplied you with tests this time, but we encourage you to write tests using a tool like `supertest`. It's a great way to get faster feedback on your code
  * You can also, use PostMan to test your API manually

## Our own steps

First we need to connect our app to our database ideally using pool.

Then we do an exercise using the instructors instead of products.

We need to create an instructors table with sqlscript

We need to query the info to check it is working

we need to start the lab!!

Play with products...