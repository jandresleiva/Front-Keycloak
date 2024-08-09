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

## Keycloak

To run an instance of keycloak in your own docker run the following command

```bash
docker run -p 8080:8080 -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=admin --name keycloak quay.io/keycloak/keycloak:25.0.2 start-dev
```

## Contributing

Contributions are welcome! Please follow the standard
[GitHub flow](https://guides.github.com/introduction/flow/) for contributing.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file
for more information.
