# Voting DApp

## How to Run the Voting DApp

### Prerequisites  
Before running the project, ensure you have the following installed:  

1. **Node.js** (Version 16 or higher recommended)  
2. **Ganache** (for local Ethereum blockchain simulation)  
3. **MetaMask** browser extension  

---

### Steps to Set Up the Project Manually

1. **Download the Project Files**  
   - Download the entire project folder and extract it to your desired location.  
   - Ensure the project contains both `frontend` and `backend` folders.  

2. **Install Dependencies**  
   Open a terminal and navigate to the backend folder, then install required dependencies:  
   ```bash
   cd path-to-project/backend
   npm install
   ```
   Similarly, navigate to the frontend folder and install its dependencies:  
   ```bash
   cd ../frontend
   npm install
   ```

3. **Start Ganache**  
   - Open Ganache and start a new workspace or quickstart project.  
   - Note the RPC URL (e.g., `http://127.0.0.1:7545`) and network ID (e.g., `5777`).  

4. **Deploy the Smart Contract**  
   - Navigate to the backend folder in the terminal:  
     ```bash
     cd path-to-project/backend
     ```
   - Deploy the contract using the Truffle framework:  
     ```bash
     truffle migrate
     ```
   - Copy the deployed contract address from the output and update it in the frontend configuration file.

5. **Update Contract Address in the Project**  
   - Open the `frontend/src/config.js` file and replace `<Your_Contract_Address>` with the deployed contract address.  
   - Similarly, update the contract address in `backend/server.js` to ensure backend connectivity.

6. **Start Backend Server**  
   From the `backend` folder, start the server using:  
   ```bash
   node server.js
   ```
   This will run the backend service at `http://localhost:5000`.

7. **Start Frontend Application**  
   From the `frontend` folder, start the React application:  
   ```bash
   npm start
   ```
   The frontend will be accessible at `http://localhost:3000`.

8. **Connect MetaMask to Ganache**  
   - Open MetaMask and add a custom network with the following details:  
     - **Network Name:** Ganache  
     - **New RPC URL:** `http://127.0.0.1:7545`  
     - **Chain ID:** `5777`  
   - Import one of the Ganache accounts using the provided private keys.  

9. **Using the DApp**  
   - Open `http://localhost:3000` in your browser.  
   - Connect your MetaMask wallet and interact with the voting system.  

---

### Troubleshooting  
- If `truffle migrate` fails, ensure Ganache is running.  
- If the frontend doesn't load, check for dependency issues by running `npm install` again in both folders.  
- Verify the correct contract address is used in both the backend and frontend configurations.
