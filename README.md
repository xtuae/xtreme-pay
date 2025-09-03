# Xtreme Pay - Payment Aggregator Portal

This is a full-stack payment aggregator portal that allows users to manage multiple payment gateways with a superadmin approval system for user onboarding.

## Tech Stack

-   **Backend**: Node.js with Express.js
-   **Database**: PostgreSQL (Neon serverless)
-   **Frontend**: Vue.js 3 with Composition API
-   **UI Components**: Shadcn Vue
-   **Authentication**: JWT-based auth with refresh tokens
-   **File Upload**: Multer for document handling
-   **Email Service**: NodeMailer for notifications
-   **Payment Integration**: Stripe, PayPal, Razorpay APIs

## Getting Started

### Prerequisites

-   Node.js (v16 or higher)
-   npm
-   PostgreSQL database

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/xtuae/xtreme-pay.git
    cd xtreme-pay
    ```

2.  **Install backend dependencies:**

    ```bash
    cd server
    npm install
    ```

3.  **Install frontend dependencies:**

    ```bash
    cd ../client
    npm install
    ```

4.  **Set up environment variables:**

    -   Create a `.env` file in the `server` directory.
    -   Add the following variables:
        ```
        PORT=5001
        DATABASE_URL="your_postgresql_connection_string"
        JWT_SECRET="your_jwt_secret"
        JWT_REFRESH_SECRET="your_jwt_refresh_secret"
        JWT_EXPIRES_IN="1h"
        JWT_REFRESH_EXPIRES_IN="7d"
        EMAIL_HOST="smtp.example.com"
        EMAIL_PORT=587
        EMAIL_USER="your_email@example.com"
        EMAIL_PASS="your_email_password"
        EMAIL_FROM='"Xtreme Pay" <no-reply@xtremepay.com>'
        ENCRYPTION_KEY="your_strong_encryption_key"
        ```

5.  **Initialize the database:**

    ```bash
    cd ../server
    npm run db:init
    ```

### Running the Application

1.  **Start the backend server:**

    ```bash
    cd server
    npm run dev
    ```

2.  **Start the frontend server:**

    ```bash
    cd ../client
    npm run dev
    ```

The frontend will be available at `http://localhost:5173`.
