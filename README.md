# E-Commerce Application (MERN Stack)  

Welcome to the E-Commerce Application project! This project is part of the **Follow Along Project: Milestone 1**, where we will learn to build a full-fledged e-commerce application from scratch using the **MERN stack** (MongoDB, Express.js, React.js, Node.js).  

## Project Overview  
The goal of this project is to provide hands-on experience with real-world development concepts and tools. By the end of this project, you will have a functional e-commerce application with features like user authentication, product management, and order handling.  

## Learning Goals 
- Understand the overall structure of a MERN stack project.  
- Set up a new project repository and initialize it effectively.  
- Gain clarity on the functionalities of an e-commerce application.  
- Learn the foundational steps of backend development, database schema design, and REST API creation.  

## Key Features  
1. **MERN Stack:** A JavaScript-only approach for full-stack development.  
2. **REST API Creation:** Scalable endpoints for user authentication, product management, and order handling.  
3. **Authentication:** Secure login and registration functionalities.  
4. **Database Schema Design:** Structured data models using MongoDB.  
5. **Backend Development:** Robust server-side logic with Node.js and Express.  
6. **Frontend:** React for building a dynamic and user-friendly interface.  

## Milestone 1 Overview  
- **Introduction to the MERN Stack:** Understanding the technologies and how they work together.  
- **REST API Structure:** Building endpoints for essential features like user authentication, product management, and order handling.  
- **Database Schema Design:** Creating well-structured data models in MongoDB.  
- **Authentication:** Learning the role of authentication in web applications and implementing it.  
## Milestone 2:
Project Structure and Login Page


Created a structured folder hierarchy for separating frontend and backend code.

Set up the React application for the frontend and a Node.js server for the backend.

Configured Tailwind CSS for streamlined styling.

Developed a functional and styled Login Page for the frontend.

Outcome: Project was structured, and the first user-facing feature (Login Page) was implemented.

## Milestone 3:
Backend Setup and Database Connection


Created a dedicated folder structure for organizing backend code (routes, controllers, models, etc.).

Configured a Node.js server with Express.js to handle API requests.

Connected the backend to MongoDB for data storage.

Implemented basic error handling for better debugging.

Outcome: Backend setup was completed with MongoDB integration, making the application ready for further development.

## Milestone 4:
User Model, Controller, and File Uploads


Designed the User Model with a schema defining user details (e.g., name, email, password).

Developed the User Controller to manage user data operations like adding or fetching users.

Integrated Multer to enable file uploads (e.g., profile pictures) and store them in the backend.

## Milestone 5:
In this milestone, we focused on developing the signup page to enable users to create an account within the application. Key achievements include: Signup Page Implementation: Developed the Signup.jsx component with a user-friendly interface for account registration. Included form fields for user details such as name, email, and password. Form Validation: Added client-side validation logic to ensure proper input formatting and error messages for invalid entries. Integration with Routing: Configured navigation to and from the signup page using React Router for seamless user flow. Styling: Enhanced the design of the signup page to align with the application's overall styling for a consistent user experience. Code Organization: Refactored the code into reusable components where possible to promote cleaner and more maintainable code. This milestone enhances the user experience by allowing new users to register, paving the way for further integration with back-end user authentication systems.

## Milestone 6:
In this milestone, we completed the following:

- Implemented advanced product filtering and search functionality.
- Optimized backend API endpoints for better performance.
- Integrated payment processing using Stripe.
- Enhanced user authentication with JWT expiration handling.
- Improved UI/UX by refining product pages and checkout flows.
- Fixed bugs from previous milestones and improved error handling.


## Milestone 7:
Login Authentication S

User Enters Credentials: The user provides their email/username and password on the login page.
Fetch User Data from Database: The backend retrieves the user record based on the provided email/username. If the user is not found, return an error: "User does not exist."
Compare Encrypted Passwords: Process the user's input password using the same hashing algorithm (e.g., bcrypt). Compare the resulting hash to the stored hashed password. If they match, the user is authenticated; if not, send an error.
Create Login Endpoint: Accept user credentials (email/username and password). Retrieve the corresponding user from the database.
Validate Password: Use bcrypt to hash the entered password. Compare it with the stored hashed password for authentication.
Return Response: If authentication is successful, generate and return a session/token. If authentication fails, return an error message.


## Milestone 8:
Displays a list of products in a grid format.
Uses a Product component to render individual product cards with an image, name, description, and price.
The Home component maps over a predefined list of products and renders them using the Product component.
Styled using Tailwind CSS for responsiveness and modern UI design.
=======

## Milestone 9:
In this milestone, we implemented a product input form to allow users to add new products to the application. Key achievements include:

Product Input Form: Created a frontend form to collect product details such as name, description, price, and images.
Multiple Image Uploads: Enabled users to upload multiple product images for better product representation.
Form Validation: Implemented validation to ensure required fields are filled correctly before submission.
State Management: Used React state to handle form inputs dynamically.
Backend Integration: Connected the form to the backend API to store product details in the database.
UI/UX Enhancements: Styled the form using Tailwind CSS for a clean and user-friendly design.
This milestone improves the product management system by allowing users to add new products efficiently. 🚀

## Milestone 10 :
In this milestone, we focused on defining the structure of product data and creating an API endpoint to store product details in MongoDB.

Product Schema Definition: Defined a structured product schema using Mongoose to store product data in MongoDB. Ensured each field has proper validation to maintain data integrity: Name: Required, string Description: Required, string Price: Required, number, with validation for non-negative values Image URL(s): Required, array of strings for multiple image storage Category: Required, string CreatedAt: Automatically generated timestamp
Endpoint Creation: Developed a POST endpoint (/api/products) to accept product details from the frontend. Implemented validation to ensure only correctly formatted data is stored in the database. Saved product information to MongoDB using Mongoose models.
Data Validation & Integrity: Enforced strict validation to prevent invalid or incomplete product entries. Returned appropriate error messages for missing or incorrect data inputs.

## Milestone 11:
Fetching and Displaying Product Data
In this milestone, we focused on retrieving product data from the backend and dynamically displaying it in the frontend. Key achievements include:

Backend: Creating an API Endpoint to Fetch All Products Developed a GET endpoint (/api/products) in the backend to send all product data to the frontend. Implemented MongoDB queries using Mongoose to retrieve all stored products. Ensured error handling to manage potential issues in fetching data.
Frontend: Fetching Data from API Created an API call function using fetch or axios in React to retrieve product data from the backend. Managed the fetched data using React useState and useEffect hooks to ensure dynamic updates.
Displaying Products Dynamically Passed the fetched product data to a ProductCard component. Used the product details (name, image, price, etc.) as props to display them dynamically. Applied responsive CSS styling to create a visually appealing product grid layout.


## Milestone 12:
 Filtering Products by User Email and Displaying Data
In this milestone, we focused on filtering products based on the user's email and sending only relevant product data to the frontend. Key achievements include:

Backend: Creating a Filtered API Endpoint Developed a GET endpoint (/api/products/:email) to return products associated with a specific user email. Used Mongoose to query the database and fetch only the products uploaded by the provided email. Implemented error handling to manage scenarios where no products match the email.
Frontend: Fetching Filtered Data from API Created a function in React to fetch only products uploaded by the logged-in user. Used Axios or Fetch API to make requests to the backend with the logged-in user's email. Managed product data using useState and useEffect hooks.
Displaying Filtered Products Dynamically Passed the fetched filtered product data to a ProductCard component. Rendered product details such as name, image, price, and description dynamically. Ensured a clean and structured UI using CSS and responsive layout techniques.

## Milestone 13:
In this milestone, we focused on implementing update functionality for product data, allowing users to modify existing product information through an editable form. Key achievements include:

Backend: Creating an Update Endpoint Developed a PUT endpoint to receive and update existing product data in MongoDB. Used Mongoose to find the product by its ID and update its fields. Ensured data validation to maintain data integrity and prevent errors during updates. Handled potential errors, such as cases where the product is not found. Frontend: Form Auto-Fill and Edit Functionality Added an Edit button to each product card. Clicking the Edit button opens a form pre-filled with the existing product details. Users can modify the form fields and save changes to update the product. Used React state and useEffect to manage form data and populate it with the product’s current details. UI and UX Enhancements Ensured a responsive layout for the edit form, providing a user-friendly experience. Added error messages for invalid data and success notifications on successful updates. Future Enhancements & Experimentation Admin-Only Access: Restrict update functionality to authorized users, such as shop owners or admins. Real-Time Updates: Implement real-time data updates on the product listing page. Optimized Form Design: Enhance the form with file uploads for updating product images and improved field validation.

## Milestone 14:
 Deleting Product Data from MongoDB
In this milestone, we focused on implementing delete functionality for product data, allowing users to remove existing product records from the database. Key achievements include:

Backend: Creating a Delete Endpoint Developed a DELETE endpoint to remove product data from MongoDB using the product ID. Used Mongoose to find and delete the product by its ID. Implemented error handling to manage scenarios where the product ID does not exist.

Frontend: Delete Button and Request Handling Added a Delete button to each product card. Clicking the Delete button sends a request to the delete endpoint with the product ID. Implemented a confirmation dialog to ensure users intend to delete the product. Updated the product list dynamically to remove the deleted product without refreshing the page.

UI and UX Enhancements Provided feedback on successful or failed delete operations. Enhanced the user experience with a clean and responsive UI for managing product deletions.

## Milestone 15 - Navbar Component

### Learning Goals 🎯
By completing this milestone, we have:
- Created a reusable Navbar component.
- Integrated the Navbar into all pages of the application.
- Ensured smooth navigation between pages.
- Made the Navbar responsive for all screen sizes.

# Milestone 16 - Product Info Page

## Project Overview 🚀
This milestone focuses on creating a product info page that displays all product details, allows users to select a quantity, and includes an "Add to Cart" button.

## Learning Goals 🎯
By completing this milestone, I have learned:
- How to create a new page to display product details.
- How to add a quantity selection feature.
- How to implement an "Add to Cart" button.


## Milestone 17: Cart Functionality

## Overview

In this milestone, we implemented the cart functionality by creating a schema to store products in the cart and an API endpoint to receive and store product details.

## Achievements

* **Created Cart Schema:**
    * Designed a Mongoose schema to store cart items.
    * Included product details like name, price, quantity, and user reference.
* **Implemented API Endpoint:**
    * Developed a route to add products to the cart.
    * Handled requests to store product details in MongoDB.
* **Database Integration:**
    * Ensured cart items are stored and retrieved efficiently using MongoDB Atlas.
* **Code Pushed to GitHub:**
    * All changes have been committed and pushed to the repository.

## Milestone 18: Creating an end point for cart page
In this milestone, we implemented a backend endpoint to fetch all the products inside a user's cart. This functionality is essential for displaying the cart contents on the cart page.

Backend: API Integration Created a new API endpoint to fetch all products in a user's cart. Implemented server-side logic to retrieve the cart contents from the database. Frontend: Cart Page Designed a new Cart Page component that displays the products in the user's cart. Used React Router to navigate to the Cart Page. State Management and API Integration Fetched the cart contents from the backend using the API endpoint. The final product will have the following features: A user can view all products on the homepage. A user can view product details on a dedicated product info page. A user can add products to their cart. A user can view their cart contents on the cart page.

## Milestone 19: Shopping Cart UI with API Endpoint for Updating Product Quantity
In this milestone, we focused on implementing the shopping cart UI and API endpoint for updating product quantity.

Frontend: Shopping Cart UI Designed a new Cart component that displays the products in the user's cart, along with their quantities Implemented a function to handle updating the quantity of a product in the cart Used React state to manage the cart items and their quantities Backend: API Endpoint for Updating Product Quantity Created a new API endpoint to update the quantity of a product in the cart Implemented server-side logic to update the cart state in the database State Management and API Integration Fetched the updated cart state from the backend after updating a product quantity The final product will have the following features: A user can view all products on the homepage A user can view product details on a dedicated product info page A user can add products to their cart A user can view their cart contents on the cart page A user can update the quantity of products in their cart

## Milestone 20: Building a Profile Page Frontend with User Data Endpoint
In this milestone, we implemented the frontend for the profile page, fetching user data from the backend API

Frontend: Profile Page Designed a new Profile Page component that displays user data Implemented a function to fetch user data from the backend API Used React state to manage user data Backend: API Endpoint for User Data Created a new API endpoint to fetch user data Implemented server-side logic to retrieve user data from the database State Management and API Integration Fetched user data from the backend API The final product will have the following features: A user can view their profile page A user can view their user data on the profile page

## Milestone 21: Implementing the Address Form Page
Learning Goals 🎯 By the end of this milestone, you will:

Create a frontend form to collect user address details. Store address information using state management. Implement navigation from the Profile Page to the Address Form.

Frontend Updates: Address Form Page Designed an address input form to collect: Country City Address Line 1 Address Line 2 ZIP Code Address Type (Home/Work/Other) Created a state to store and manage the form input. Ensured proper form validation for required fields.
Navigation & User Flow Clicking "Add Address" on the Profile Page redirects to the Address Form. Implemented smooth navigation handling to improve user experience.
Future Enhancements & Experimentation Save Address to Database: Store the address using a backend API. Auto-fill Option: Enable users to update an existing address instead of entering a new one. Google Maps API Integration: Allow users to select their address using a map.

## Milestone 22: Storing User Address in Database
Created a backend endpoint to receive and store user address data. Update the User collection to include an address array. Learn how to store and manage multiple addresses for a user.

Backend Updates: Address Storage Endpoint Created a POST endpoint (/api/user/address) to receive address data from the frontend. Validated the received address data before storing it in the database. Updated the User model to include an address array for storing multiple addresses. Implemented error handling to ensure data integrity.
Frontend Integration Modified the Address Form to send a POST request to the new backend endpoint. Ensured proper state management to handle form input. Provided user feedback (e.g., success message) upon successful address submission.

## Milestone 23: Implementing Order Placement and Address Selection
Learning Goals 🎯 By the end of this milestone, you will:

Add a "Place Order" button inside the cart page. Create a Select Address Page where users can choose a delivery address. Write a Mongoose schema to store order details in the database.

Frontend Updates: Cart Page & Address Selection Added a "Place Order" button inside the cart page. When clicked, it navigates to the Select Address Page. Displayed all saved addresses for the user. Allowed users to select an address for order delivery.
Backend Updates: Order Schema & Storage Created a Mongoose schema to store order details, including: User ID (to associate orders with users) Product details (items in the cart) Selected delivery address Order status (pending, shipped, delivered) Total price Timestamp Implemented an endpoint to store orders in the database.

## Milestone 24: Implementing Insert an Entity in React App

Project Overview 

This milestone focuses on creating an Order Confirmation Page for the frontend of our React application. The page displays product ordering details, selected delivery address, and the total price. Additionally, it includes a "Place Order" button to proceed with the order.

Tasks Completed 

Displayed all ordered products.

Shown the selected delivery address.

Calculated and displayed the total price of the cart.

Added a "Place Order" button to confirm the order.

## Milestone 25 :
This milestone focuses on creating a backend endpoint to place an order. The endpoint receives product details, user information, and address details, retrieves the user's _id using their email, and stores order details in the MongoDB orders collection.

Steps Completed
✔ Created an endpoint to handle order placement.
✔ Retrieved the user's _id using their email.
✔ Ensured each product has a separate order with the same address.
✔ Stored order details in MongoDB using the existing order schema.

## Milestone 26:
This milestone focuses on creating a backend endpoint to retrieve all orders placed by a specific user. The endpoint receives the user's email, fetches their _id, and returns all orders associated with that user.

Steps Completed
✔ Created an endpoint to fetch all orders of a user.
✔ Retrieved the user's _id using their email.
✔ Queried the database to get all orders linked to the user's _id.
✔ Sent the retrieved orders in the response.


## Milestone 27:

Milestone 27: Creating a frontpage and for displaying users orders
Learning Goals You need to create an my-orders page You will send an get request to my-orders endpoint that we created in previous milestone. We will send user mail in to endpoint to get all the user orders Display all the user orders We will add my-orders page in navbar for better navigation.

Created a My Orders page that sends a GET request to the my-orders endpoint created in the previous milestone. The user's email is sent to the endpoint to retrieve all their orders, which are then displayed on the page. Additionally, added the My Orders page to the navbar for improved navigation.

## Milestone 28: Cancel Order Feature

## Overview
In this milestone, we implemented the functionality to cancel placed orders. A cancel button was added to the **My Orders** page, and a backend endpoint was created to update the order status.

## Tasks Completed
- Added a **Cancel Order** button for each order in **My Orders**.
- Ensured the cancel button is not displayed for already canceled orders.
- Created a backend endpoint to receive the **order ID** and update the order status to **canceled**.
- Implemented logic to fetch and update the order in the database.

## Milestone 29: PayPal Payment Gateway Integration
In this milestone, we successfully initiated the integration of an online payment system into our application using the PayPal API, laying the groundwork for secure and seamless transactions.

Key Achievements 🚀 Learning PayPal API:

Explored PayPal's developer platform to understand the API structure and sandbox testing environment.

Sandbox Setup:

Created and configured a PayPal Developer account.

Set up a sandbox account for safe and effective payment testing.

Retrieved and securely stored the sandbox account’s User ID and Client ID for integration purposes.

Order Confirmation Page Enhancement:

Successfully updated the order confirmation page to offer two payment options: Cash on Delivery (COD) and Online Payment.

Implemented radio buttons to allow users to toggle between COD and online payment methods.

## Milestone 30: PayPal Payment Integration & Navigation Enhancements
In this milestone, we successfully integrated PayPal for seamless online payments and improved the application's navigation.

Key Highlights:

PayPal Integration: Configured a sandbox account, installed react-paypal-js, and implemented PayPal's API for secure transactions.
Navigation Component: Built a responsive Nav component with React Router for smooth navigation across key pages (Home, My Products, Add Product, Cart).
Responsive Design: Used CSS Flexbox and media queries to ensure adaptability across all screen sizes, with a hamburger menu for mobile users.

## Milestone 31: Implementing Global State Management with Redux
In this milestone, we focused on integrating Redux to manage user email globally, ensuring seamless state management across the application.

Key Achievements:

State Management: Configuring Redux Store

Installed the react-redux NPM package to enable centralized state management.
Created a new store folder containing:
store.js: Configured the Redux store with a userReducer to handle the global email state.
userActions.js: Defined a setEmail action to update the email in the global state.
Integration with React Application

Wrapped the App component inside the Provider component in index.js, passing the store as a prop to ensure global access to the email state.