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
