Comfy Store
A modern, full-featured e-commerce web application built with React, Redux Toolkit, React Router, React Query, and Tailwind CSS + DaisyUI. This project demonstrates best practices for scalable state management, API integration, authentication, and a beautiful, responsive UI.

Features
Product Catalog: Browse, filter, and search products with advanced filtering and pagination.
Product Details: View detailed information for each product.
Cart: Add, remove, and edit items in your cart. Cart state is persisted in local storage.
Checkout: Secure checkout with order summary and shipping form.
Authentication: Register and login with JWT-based authentication.
Orders: View your order history with pagination.
Theme Switcher: Toggle between light and dark themes (DaisyUI).
Loading & Error Handling: Global loading indicators and user-friendly error messages.
Tech Stack
React (Vite)
Redux Toolkit for state management
React Router v6 for routing and data loaders
React Query for server state and caching
Tailwind CSS & DaisyUI for styling
Axios for API requests
React Toastify for notifications
Getting Started
Install dependencies
Start the development server
Open http://localhost:5173 in your browser.
Project Structure
components — Reusable UI components (forms, buttons, layout, etc.)
features — Redux slices for cart and user
pages — Main app pages (Home, Products, Cart, Checkout, Orders, etc.)
router — App router configuration
utils — Utility functions and API setup
API
This project uses a Strapi backend. You can use the provided demo API or connect your own.

Demo API: https://strapi-store-server.onrender.com/api
Optimization & Best Practices
Redux state is persisted for cart and user (localStorage).
React Query is used for server data (products, orders) for caching and performance.
Error boundaries and error elements for robust error handling.
Responsive design with Tailwind and DaisyUI.
Code splitting and lazy loading for fast initial load.
Clean, modular code with separation of concerns.
How to Contribute
Fork the repo
Create a new branch
Make your changes
Open a pull request
© 2025 Comfy Store. Built for learning and demonstration purposes.

If you need further help or want me to review a specific file, just let me know!