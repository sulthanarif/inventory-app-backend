This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


### Prerequisites

- Node.js
- MySQL

### Installation

#### Backend Setup

1. **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2. **Import the database:**
    - Open MySQL and import the provided database file.

3. **Install dependencies:**
    ```bash
    npm install
    ```

4. **Start the backend server:**
    ```bash
    npm run start
    ```

#### Frontend Setup

1. **Navigate to the frontend directory:**
    ```bash
    cd inventory-app
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Start the frontend server:**
    ```bash
    npm run dev
    ```

### Configuration

1. **Update API configuration:**
    - Open the `utils/api.js` file.
    - Change the IP address to `http://localhost:3001/api`.

## Running the Application

- Ensure the backend server is running at `http://localhost:3001`.
- Access the frontend application at `http://localhost:3000`.

## Built With

- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)


## Acknowledgments

- Inspiration, code snippets, etc.


