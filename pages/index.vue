<script lang="ts" setup>
import ApolloSandbox from "~/components/ApolloSandbox.vue";
import Hero from "~/components/Hero.vue";

defineOgImageComponent('Nuxt', {
  headline: 'Greetings 👋',
  title: '🚀 Nuxt with GraphQL Yoga and Apollo Client',
  description: 'This project uses GraphQL Yoga, Nuxt, Apollo Client, and Drizzle to provide a GraphQL server with custom queries and a ready frontend client.',
})
</script>

<template>
  <div>
    <Hero />
    <ApolloSandbox />
  </div>
</template>
