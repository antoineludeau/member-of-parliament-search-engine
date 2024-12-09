# Member of Parliament Search Engine

A search engine app built using **Next.js 15**, **React 19**, **Tailwind CSS 3**, **Typescript 5** and **Minisearch 7**. with the purpose of facilitating the filtering of the members of the French Parliament, allowing users to effortlessly navigate through profiles of individual members.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
- [Folder Structure](#folder-structure)
- [License](#license)

## Features

- Built with **Next.js 15** for fast and SEO-friendly rendering
- Styled with **Tailwind CSS 3**, a utility-first CSS framework
- Leveraging **Minisearch 7**, an in-memory full-text search engine
- Developed using **TypeScript** 5 for robust type checking and maintainability

## Getting Started

### Prerequisites

Before you begin, make sure you have the following installed on your machine:

- **Node.js** (v18.18.0 or later) – [Download Node.js](https://nodejs.org/)
- **npm** or **yarn** – comes with Node.js or can be installed separately

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/antoineludeau/member-of-parliament-search-engine.git
   cd member-of-parliament-search-engine
   ```

2. **Install dependencies**

If you're using npm:
  ```bash
  npm install
  ```

If you're using yarn:
  ```bash
  yarn install
  ```

### Running the Development Server

Once all dependencies are installed, you can start the development server:
  ```bash
  npm run dev
  # or
  yarn dev
  ```

Open http://localhost:3000 in your browser to see the running application.

## Folder structure

This folder uses :
- the **app** router

  ```bash
  member-of-parliament-search-engine/
  ├── app/                      # Next.js 'app' directory for routing and pages
  │   └── globals.css           # Global CSS
  │   ├── layout.tsx            # Root layout component
  │   ├── loading.tsx           # Root loading state component
  │   ├── page.tsx              # Homepage component (default route)
  │   └── components            # Main reusable UI components 
  │   └── types                 # TypeScript type definitions
  │   └── member                # 'member' directory for routes /member
  │       └── [slug]            # 'slug' directory for dynamic routing /member/[slug]
  │             └── page.tsx    # Main member page
  │             └── components  # Reusable UI components
  │             └── utils       # Utils functions
  ├── public/                   # Static assets (images, fonts, etc.)
  ├── .dockerignore             # Docker ignore file
  ├── .eslintrc.json            # ESLint configuration file
  ├── .gitignore                # Git ignore file
  ├── compose.yml               # Docker Compose configuration
  ├── Dockerfile                # Docker configuration for production
  ├── Dockerfile.dev            # Docker configuration for development
  ├── LICENSE.md                # License file
  ├── next.config.mjs           # Next.js configuration file
  ├── package-lock.json         # Lock file for npm dependencies
  ├── package.json              # Project dependencies and scripts
  ├── postcss.config.mjs        # PostCSS configuration for Tailwind CSS
  ├── README.md                 # Documentation for the project
  ├── tailwind.config.ts        # Tailwind CSS configuration
  └── tsconfig.json             # TypeScript configuration file
  ```

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE.md) file for details.
