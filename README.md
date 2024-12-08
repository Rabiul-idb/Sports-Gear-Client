# SportsGear

SportsGear is a MERN stack application for an online sports equipment store. Users can authenticate via Firebase and perform actions such as adding, updating, and deleting sports equipment. Below is an overview of its features and functionality.

---

## Features

### 1. **Responsiveness**
   - The website is fully responsive and adapts seamlessly to all devices.

### 2. **Environment Variables**
   - Environment variables are used for Firebase configuration and MongoDB credentials to ensure security and scalability.

### 3. **Navbar**
   - Displays specific menu links for logged-in users.
   - Shows the user’s name and photo on the right, with hover functionality displaying their email, an update link, and a logout option.
   - If no user is logged in, a **Login/Register** button is shown.
   - A drawer menu is available for medium and small devices.

### 4. **Login and Registration**
   - Authentication is handled using Firebase.

### 5. **Banner**
   - A swiper slider with three slides is featured prominently on the homepage.

### 6. **Product Section**
   - Displays up to nine product cards with key details.
   - Includes a **Show All Products** button to navigate to the **All Sports Equipment** page.
   - A **View Details** button allows logged-in users to see detailed product information. Unauthenticated users are redirected to the login page.

### 7. **Call-to-Action (CTA) and Footer**
   - Static sections displayed consistently across all pages.

---

## Pages and Functionalities

### **All Equipment**
   - Displays all equipment in a table view with key details.
   - Features a **Sort by Price** option to sort products in descending order.

### **View Details Page (Private Route)**
   - Displays detailed information about a product.

### **Add Equipment (Private Route)**
   - Allows logged-in users to add equipment by filling out required fields.
   - User’s name and email are automatically populated and set to read-only.
   - A success message is displayed after successful data submission.

### **My Equipment (Private Route)**
   - Lists all equipment added by the logged-in user with the following actions:
      1. **View**: Redirects to the details page.
      2. **Edit**: Redirects to the update page for editing information.
      3. **Delete**: Opens a confirmation modal. Upon confirmation, the data is deleted.

### **Update Equipment Page (Private Route)**
   - Allows users to update equipment information.
   - A confirmation message is displayed upon successful update.

### **Error/404 Page**
   - A custom error page is displayed for non-existent routes.

### **Loading Spinner**
   - Displays a spinner while data is being loaded.

---

## Highlighted Features
1. Firebase authentication for secure login and registration.
2. Private routes for user-specific actions.
3. Dynamic navbar with user context.
4. Responsive design across all devices.
5. Real-time CRUD operations integrated with MongoDB.

---

## Live Demo
Explore the application live: [SportsGear](https://sportsgear-66d62.web.app/)

---

## Thanks for Visiting!
**Best Regards,**  
Md. Rabiul Islam
