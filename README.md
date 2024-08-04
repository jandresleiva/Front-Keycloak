# Project Name

A minimalistic React front-end application with basic routing and authentication
context setup.

## Table of Contents

-   [Project Description](#project-description)
-   [Installation](#installation)
-   [Usage](#usage)
-   [Project Structure](#project-structure)
-   [Adding Routes](#adding-routes)
-   [Contributing](#contributing)
-   [License](#license)

## Project Description

This project is a minimalistic front-end application built using React. It
includes basic setup for theming, routing with `react-router-dom`, and state
management for authentication through a context provider.

## Installation

To get started with the project, clone the repository and install the necessary
dependencies:

```bash
git clone <repository-url>
cd front-end-project
pnpm install
```

Ensure you have `pnpm` installed globally. If not, you can install it using
`npm`:

```bash
npm install -g pnpm
```

## Usage

To start the development server, run:

```bash
pnpm run dev
```

This will start the application and open it in your default web browser. The
application will automatically reload if you change any of the source files.

## Project Structure

The project's structure is as follows:

```
front-end-project/
│
├── public/               # Static assets
│   └── index.html        # Main HTML file
│
├── src/                  # Source files
│   ├── assets/           # Images, icons, etc.
│   ├── components/       # React components
│   ├── pages/            # Page components
│   ├── auth.context.ts   # Authentication context
│   ├── routes.tsx        # Application routes
│   ├── App.tsx           # Main App component
│   └── main.tsx          # Entry point
│
├── .eslintrc.cjs         # ESLint configuration
├── .gitignore            # Git ignore rules
├── .prettierrc           # Prettier configuration
├── package.json          # Project metadata and dependencies
├── pnpm-lock.yaml        # Lockfile for pnpm dependencies
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

## Adding Routes

To add a new route to the application, follow these steps:

1. **Create a New Page Component:** Create a new component in the `src/pages`
   directory that you want to display for the new route.

    ```tsx
    // src/pages/NewPage.tsx
    import React from 'react';

    const NewPage = () => {
        return <div>New Page Content</div>;
    };

    export default NewPage;
    ```

2. **Update the Routes Configuration:** Add the new route in the `routes.tsx`
   file by including the path and the corresponding component.

    ```tsx
    // src/routes.tsx
    import { AuthContextState } from './auth.context';
    import { LogInPage, Main, NewPage } from './pages';
    import { Navigate } from 'react-router-dom';

    export const routesConfig = (auth: AuthContextState) => [
        {
            path: '/',
            element: auth.isAuthenticated ? <Main /> : <Navigate to="/login" />
        },
        {
            path: '/login',
            element: <LogInPage />
        },
        {
            path: '/new-page',
            element: <NewPage /> // Adding the new page route
        }
    ];
    ```

3. **Test the Route:** Start the development server and navigate to the new
   route (e.g., `/new-page`) to ensure it loads correctly.

## Contributing

Contributions are welcome! Please follow the standard
[GitHub flow](https://guides.github.com/introduction/flow/) for contributing.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file
for more information.
