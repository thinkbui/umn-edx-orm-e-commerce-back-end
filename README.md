# umn-edx-orm-e-commerce-back-end

## SUMMARY
This is a concept of a server-side application for the inventory management of an e-commerce site.  It maintains a database of different products, categories, and tags while exposing a web API to view, add, update, and remove inventory using a client-side app (not in this repository).

## EXECUTION AND SEEDING
When the server is running (by executing `npm run start` in the root path of the project), the database can be seeded by executing `npm run seed`.

## NOTES
This is just a concept and the scope of it is quite limited.  For instance, the API endpoints are exposed to the public when in reality there would be some kind of protections such as token-based authentication.

In addition while seeds for the ProductTag model were created to show the many-to-many relationship between Product and Tag in action, no requirements for creating/modifying this relationship via the web API endpoints were detailed and therefore were not implemented in this project.

## DEMO
You can view a demo of the app on [YouTube](https://www.youtube.com/watch?v=vXJJThoRjDQ).
