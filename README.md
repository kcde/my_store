# MyStore

My store is a simple e-commerce web app that have all the basic functionalities of an e-commerce app :

1.  Product listing
2.  Product page
3.  Shopping cart
4.  Checkout form
5.  Order confirmation page

## Install dependencies

Run `npm install` to install Angular and it's required dependencies

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Routes

### Home

Home route ` http://localhost:4200/` displays all products

### Product details

Products details route ` http://localhost:4200/products/{productid}` shows details of a single products

### Shopping cart

Shopping cart route ` http://localhost:4200/cart` shows all items added to cart

### Order confirmation

order confirmation route ` http://localhost:4200/order-success` dis successful order information. And this route is only accessible only when an order is successfully made when the checkout form is field with valid details
