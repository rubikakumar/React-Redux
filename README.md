# React-Redux Cart Application

## Project Overview
This is an React-Redux Cart Application built using React and Redux for state management. It allows users to view products, add them to their cart, update the quantity of items, and proceed to checkout.

## Features
- Display a list of products with images, titles, and prices.
- Add products to the shopping cart.
- Remove products from the cart.
- Update the quantity of items in the cart.
- View the total price of items in the cart.
- Responsive design for better user experience on mobile devices.

## Technologies Used
- **React**: JavaScript library for building user interfaces.
- **Redux**: State management library for JavaScript applications.
- **React Bootstrap**: UI toolkit for Bootstrap components in React.
- **React Router DOM**: Declarative routing for React.js.
- **HTML/CSS**: For structuring and styling the application.

## Setup and Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/rubikakumar/React-Redux

2. Navigate to the project directory:
   cd React-Redux

3. Install dependencies:
   npm install

4. Start the application:
   npm start

5. Open your browser and visit http://localhost:5173.

## Running the Application

To run the application in development mode, use:
npm start

##  Code Explanation

**Cart.jsx**
- Displays items added to the cart with options to increase or decrease the quantity. If the quantity reaches zero, the item is removed.
- The total price is dynamically calculated based on the products and their quantities.
- Includes a "Checkout" button for proceeding to payment.
  
**Dashboard.jsx**
- Acts as the container component, wrapping the Products component which lists available products.

**Footer.jsx**
- Provides a footer with the company logo, a clickable link, and registration information styled with CSS.

**NavBarPanel.jsx**
- The navigation bar with links to the product page and the cart. It displays the number of items in the cart.
- Uses Redux state to dynamically update the cart count.
  
**Products.jsx**
- Fetches products from a JSON file and displays them with their details.
- Allows adding and removing items from the cart, and shows discounts.

**RootLayout.jsx**
- Acts as the root layout for the application, wrapping the main content and providing global state through the Redux store.
  
**cartSlice.jsx**
- Implements Redux slice with actions for adding and removing items from the cart.
  
**store.jsx**
- Configures and exports the Redux store.

## Development Process

The application was developed using React's functional components and hooks for state management. Redux was utilized to handle the global state of the cart. The application is designed to be responsive and user-friendly, ensuring a seamless shopping experience.
