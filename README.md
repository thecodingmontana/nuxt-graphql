# 🚀 Nuxt with GraphQL Yoga and Client

A modern, high-performance Nuxt 4 starter template with GraphQL Yoga server and GraphQL client integration for building and consuming robust GraphQL APIs.

## ✨ Introduction

This project shows how to integrate GraphQL Yoga with Nuxt, offering a fast backend and a GraphQL client for seamless data fetching. The client is ready to connect to your API, run queries and mutations, extend with custom ones, and supports **drizzle-graphql** to generate a GraphQL server from a Drizzle schema easily.

## 🔗 GraphQL Yoga Server

This template comes with a pre-configured GraphQL Yoga setup:

- 🌐 GraphQL API endpoint at `/api/graphql`
- 💓 Health check at `/api/graphql/health`
- 🧪 Interactive Apollo Sandbox for testing
- 📋 Modular schema and resolvers
- 🛡️ Type-safe integration with Nuxt's Nitro server
- 🧩 Ability to extend with your own queries and mutations
- 🔷 Supports drizzle-graphql schema out of the box

## 🔗 GraphQL Client

- 🎯 Pre-configured client for `/api/graphql`
- 🚀 Easy composables and hooks for queries and mutations
- ⚛️ Supports SSR and client-side fetching
- 🔄 Works seamlessly with Nuxt

## 📘 Features

- ⚡ Fast setup with minimal config
- 🔄 Hot Module Replacement
- 📱 Apollo Sandbox
- 🔒 Type-safe GraphQL
- 🧩 drizzle-graphql integration for schema-first development
- 🔗 Client ready-to-use in components

## 📚 Learn More

- [GraphQL Yoga](https://the-guild.dev/graphql/yoga-server)
- [Nuxt](https://nuxt.com/docs)
- [Apollo Client](https://www.apollographql.com/docs/react) or [urql](https://formidable.com/open-source/urql/)
- [drizzle-graphql](https://orm.drizzle.team/docs/graphql)
- [Apollo Sandbox](https://www.apollographql.com/docs/studio/explorer/sandbox)

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

Credits [productdevbook](https://github.com/productdevbook)
