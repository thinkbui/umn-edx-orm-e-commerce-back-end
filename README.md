# umn-edx-orm-e-commerce-back-end

## SUMMARY
This is a concept of a server-side application for the inventory management of an e-commerce site.  It maintains a database of different products, categories, and tags while exposing a web API to view, add, update, and remove inventory using a client-side app (not in this repository).

## SETUP AND EXECUTION
After creating the database with the *db/schema.sql* file in your MySQL tool, the database can be seeded by executing `npm run seed` in the root path of the project.

Once that's done, you can run the app by executing `npm run start`.

To exit the app, you can press *Ctrl + C*.

## NOTES
This is just a concept and the scope of it is quite limited.  For instance, the API endpoints are exposed to the public when in reality there would be some kind of protections such as token-based authentication.

## DEMO
You can view a demo of the app on [YouTube](https://www.youtube.com/watch?v=IrPmCTBFH2Y).
