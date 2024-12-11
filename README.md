# Member of Parliament Search Engine

A search engine app built using **Next.js 15**, **React 19**, **Tailwind CSS 3**, **Typescript 5** and **Minisearch 7**. with the purpose of facilitating the filtering of the members of the French Parliament, allowing users to effortlessly navigate through profiles of individual members.

<p align="center">
  <img width="430" alt="Capture d’écran 2024-12-09 à 19 21 32" src="https://github.com/user-attachments/assets/e2025318-326a-4ff1-b705-b5d70cfd9866">
</p>

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
  - [Using Docker](#using-docker)
- [Folder Structure](#folder-structure)
- [License](#license)

## Features

- Built with **Next.js 15** for fast and SEO-friendly rendering
- Styled with **Tailwind CSS 3**, a utility-first CSS framework
- Leveraging **Minisearch 7**, an in-memory full-text search engine
- Developed using **TypeScript 5** for robust type checking and maintainability
- Modular and reusable components for easier maintenance
- Dockerized for quick local deployment

## Getting Started

### Prerequisites

Before you begin, make sure you have the following installed on your machine:

- **Node.js** (v18.18.0 or later) – [Download Node.js](https://nodejs.org/)
- **npm** – comes with Node.js or can be installed separately

If you want to deploy using docker and docker compose : 
- **Docker** (v20.10 or later)
- **Docker Compose** (v2.0 or later)
The easiest and recommended way to get Docker and Docker Compose is to install [Docker Desktop](https://www.docker.com/products/docker-desktop/). It includes Docker Compose along with Docker Engine and Docker CLI which are Compose prerequisites.

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/antoineludeau/member-of-parliament-search-engine.git
   cd member-of-parliament-search-engine
   ```

2. **Install dependencies**

Using npm:
  ```bash
  npm install
  ```

This step is not needed for a docker deployment

### Running the Development Server

Once all dependencies are installed, you can start the development server:
  ```bash
  npm run dev
  ```

Open http://localhost:3000 in your browser to see the running application.

This step is not needed for a docker deployment

### Using Docker

You can also run the application locally using Docker for a containerized environment.

Simply run the command : 
  ```bash
  docker compose up --build -d
  ```

Open http://localhost:3000 in your browser to view the application.

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
