# Elite-Power-Production
# Elite Manufacturing Website

## Overview
The **Elite Manufacturing Website** is a web-based platform that showcases the **power plant of an industry**. This project is built using modern web technologies, providing a seamless and interactive experience for users. It includes a **contact form** that allows customers to submit their details, which are then sent to the **admin user** via email.

## Tech Stack
### **Frontend**
- React.js
- CSS/SCSS for styling
- React Router for navigation

### **Backend**
- Node.js
- Express.js
- CORS for handling cross-origin requests
- Nodemailer for sending emails

## Features
- **Industry Power Plant Display**: Showcases detailed information about the power plant.
- **Contact Us Form**: Collects customer details and sends them to the admin via email.
- **Secure API Integration**: Backend handles form submissions securely with Express.js.
- **Cross-Origin Support**: Uses CORS to enable safe API interactions.

## Contact Form Details
The website's **Contact Us** form collects the following user details:
- **Name**
- **Age**
- **Mobile Number**
- **Additional Details** (Customer inquiry or message)

Once submitted, the details are sent to the **admin user** through an email notification using **NodeMailer**.

## Installation & Setup
1. **Clone the Repository**
   ```bash
   git clone https://github.com/Ayushyadav89/Elite-Power-Production.git
   cd Elite-Power-Production
   ```
2. **Install Frontend Dependencies**
   ```bash
   cd frontend
   npm install
   ```
3. **Start the Frontend**
   ```bash
   npm start
   ```
4. **Install Backend Dependencies**
   ```bash
   cd ../backend
   npm install
   ```
5. **Start the Backend**
   ```bash
   npm run server
   ```

## How It Works
- The **React frontend** renders the industry’s power plant details.
- Customers fill in the **contact form** to submit their details.
- The **Node.js backend** processes the form and uses **Nodemailer** to send the details to the admin’s email.
- The admin receives the customer’s details and responds accordingly.

## Contributing
Contributions are welcome! Feel free to fork this repository and submit pull requests for improvements or bug fixes.

## License
This project is licensed under the **MIT License**.

---
### Developed By
Ayush Yadav
