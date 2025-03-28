Here’s a more detailed **Installation & Setup** guide with step-by-step **Command Line Instructions (CLI)** for your CRUD API project.

---

## **Installation & Setup (Step-by-Step Guide)**

### **1. Clone the Repository**
Open your terminal and run:
```bash
git clone https://github.com/your-username/your-repo.git
```
Replace `your-username/your-repo` with the actual GitHub repository URL.

### **2. Navigate to the Project Directory**
```bash
cd your-repo
```

### **3. Install Dependencies**
Ensure that you have **Node.js** installed. Then, run:
```bash
npm install
```
This installs all required dependencies listed in `package.json`.

### **4. Set Up Environment Variables**
Create a `.env` file in the project root and add:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```
Replace `your_mongodb_connection_string` with your actual MongoDB URI.

### **5. Start the MongoDB Database**
If using a local MongoDB instance, start it using:
```bash
mongod
```
For **MongoDB Atlas**, make sure your database is running.

### **6. Run the Server**
Start the Express server using:
```bash
npm start
```
The API will now be running on `http://localhost:5000/`.

### **7. Test the API (Optional)**
Use **Postman** or **cURL** to test the endpoints. Example:
```bash
curl -X GET http://localhost:5000/products
```

---

This guide ensures a smooth setup process. Let me know if you need modifications! 🚀
