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
