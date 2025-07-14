# 🚀 Nuxt with GraphQL Yoga and Client

A modern, high-performance Nuxt 4 starter template with GraphQL Yoga server and GraphQL client integration for building and consuming robust GraphQL APIs.

## ✨ Introduction

This project demonstrates how to integrate GraphQL Yoga with Nuxt 4, providing a powerful backend and a GraphQL client in the frontend for seamless data fetching. GraphQL Yoga is a fully-featured GraphQL server with focus on easy setup, performance and great developer experience.  
The client is pre-configured to connect to your API endpoint and use GraphQL queries and mutations easily.

## 🔗 GraphQL Yoga Server

This template comes with a pre-configured GraphQL Yoga setup:

- 🌐 Accessible GraphQL API endpoint at `/api/graphql`
- 💓 Health check endpoint at `/api/graphql/health`
- 🧪 Interactive Apollo Sandbox for testing queries
- 📋 Server-side schema definition and resolvers
- 🛡️ Type-safe integration with Nuxt's Nitro server

## 🔗 GraphQL Client

- 🎯 Pre-configured client that connects to `/api/graphql`
- 🚀 Easy to use composables and hooks for queries and mutations
- ⚛️ Supports SSR and client-side fetching
- 🔄 Works seamlessly with the Nuxt ecosystem

## 📘 Features

- ⚡ Fast setup with minimal configuration
- 🔄 Hot Module Replacement during development
- 📱 Built-in responsive Apollo Sandbox interface
- 🧩 Modular schema design
- 🔒 Type-safe GraphQL implementation
- 🔗 GraphQL client ready-to-use in your pages and components

## 📚 Learn More

- [GraphQL Yoga Documentation](https://the-guild.dev/graphql/yoga-server)
- [Nuxt Documentation](https://nuxt.com/docs)
- [Apollo Client Documentation](https://www.apollographql.com/docs/react) or [urql](https://formidable.com/open-source/urql/)
- [Apollo Sandbox Documentation](https://www.apollographql.com/docs/studio/explorer/sandbox)

## 📊 Using the GraphQL API

Once your server is running, you can:

1. Access the Apollo Sandbox by navigating to `/api/graphql`
2. Test the API with a simple query:

```graphql
query {
  hello
  ping
}


3. Use the provided GraphQL client to query and mutate data directly from your Nuxt components.

## 🛠️ Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## 🧑‍💻 Development Server

Start the development server on `http://localhost:3000`:

```bash
# pnpm
pnpm dev
```

## 🏭 Production

Build the application for production:

```bash
# pnpm
pnpm build
```

Locally preview production build:

```bash
# pnpm
pnpm preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

---

Credits [productdevbook](https://github.com/productdevbook) | [GitHub](https://github.com/productdevbook) | [Website](https://productdevbook.com)
