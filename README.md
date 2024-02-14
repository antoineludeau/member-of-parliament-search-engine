# Member of Parliament Search Engine

A search engine app with the purpose of facilitating the filtering of a comprehensive list of the members of the French Parliament, allowing users to effortlessly navigate through profiles of individual members.

## Getting Started

### Pre-requisite 

- Node.js 18.17 or later

### Local depoyment without docker

First, install the dependencies:

```bash
npm i
```

Then, run the development server:

```bash
npm run dev
```

### Local depoyment with docker

The app can also be deployed locally using docker. 
Simply run the following command :

```bash
docker compose up --build -d
```

For both cases, open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Credits

This poject uses :
- [Nextjs 14](https://nextjs.org/) (React framework)
- [Tailwind CSS](https://tailwindcss.com/) (a utility-first CSS framework)
- [MiniSearch](https://www.npmjs.com/package/minisearch) (a powerful in-memory fulltext search engine)
