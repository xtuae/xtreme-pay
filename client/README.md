# Xtreme Pay - Frontend

This is the frontend application for the Xtreme Pay payment aggregator portal.

## Tech Stack

- **Framework**: Vue.js 3 with Composition API
- **UI Library**: Shadcn Vue
- **State Management**: Pinia
- **Routing**: Vue Router 4
- **HTTP Client**: Axios
- **Build Tool**: Vite
- **Styling**: Tailwind CSS

## Features

### Authentication
- Role-based access control (Super Admin, Moderator, Merchant)
- Login, Register, and Forgot Password pages
- Secure token-based authentication

### Super Admin
- Comprehensive dashboard with system-level analytics
- User management system with advanced filtering and bulk operations
- Document verification system with a document viewer and approval workflow
- System-level payment gateway management
- Gateway analytics and monitoring

### Merchant
- Comprehensive dashboard with revenue and transaction analytics
- Payment links management system
- Product management system
- Transaction management system with advanced filtering and bulk operations
- Analytics and reporting system
- User gateway configuration system
- Settings and profile management

## Recent Updates

**September 7, 2025**
- Implemented a comprehensive frontend with features for Super Admins and Merchants.
- Added role-based access control for all routes.
- Integrated `shadcn-vue` for the UI component library.
- Set up Pinia stores for state management.
- Created a modular architecture with services, stores, views, and components.

## Getting Started

### Prerequisites

- Node.js (v22.x or later)
- npm

### Installation

1.  Navigate to the `client` directory:
    ```bash
    cd client
    ```
2.  Install the dependencies:
    ```bash
    npm install
    ```

### Running the Development Server

1.  Create a `.env` file in the `client` directory and add the following environment variables:
    ```
    VITE_SUPABASE_URL="your-supabase-url"
    VITE_SUPABASE_KEY="your-supabase-anon-key"
    ```
2.  Start the development server:
    ```bash
    npm run dev
    ```

### Building for Production

```bash
npm run build
