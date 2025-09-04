# Xtreme Pay - Backend

This is the backend application for the Xtreme Pay payment aggregator portal.

## Tech Stack

- **Framework**: Node.js/Express
- **Database**: PostgreSQL (Supabase)
- **Authentication**: Supabase Auth

## Getting Started

### Prerequisites

- Node.js (v22.x or later)
- npm

### Installation

1.  Navigate to the `server` directory:
    ```bash
    cd server
    ```
2.  Install the dependencies:
    ```bash
    npm install
    ```

### Running the Development Server

1.  Create a `.env` file in the `server` directory and add the following environment variables:
    ```
    DATABASE_URL="your-supabase-connection-string"
    SUPABASE_URL="your-supabase-url"
    SUPABASE_KEY="your-supabase-anon-key"
    SUPABASE_SERVICE_ROLE_KEY="your-supabase-service-role-key"
    ```
2.  Start the development server:
    ```bash
    npm run dev
