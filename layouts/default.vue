<script setup lang="ts">
import Footer from '~/components/Footer.vue';
import { Toaster } from '~/components/ui/sonner';

useHead({
  meta: [
    { property: 'og:title', content: `This project uses GraphQL Yoga, Nuxt, Apollo Client, and Drizzle to provide a GraphQL server with custom queries and a ready frontend client.` },
    {
      name: 'description',
      content:
        'This project uses GraphQL Yoga, Nuxt, Apollo Client, and Drizzle to provide a GraphQL server with custom queries and a ready frontend client.',
    },
    {
      property: 'og:description',
      content:
        'This project uses GraphQL Yoga, Nuxt, Apollo Client, and Drizzle to provide a GraphQL server with custom queries and a ready frontend client.',
    },
    {
      property: 'og:url',
      content:
        'This project uses GraphQL Yoga, Nuxt, Apollo Client, and Drizzle to provide a GraphQL server with custom queries and a ready frontend client.',
    },
    {
      name: 'twitter:title',
      content:
        'This project uses GraphQL Yoga, Nuxt, Apollo Client, and Drizzle to provide a GraphQL server with custom queries and a ready frontend client.',
    },
    {
      name: 'twitter:description',
      content:
        'This project uses GraphQL Yoga, Nuxt, Apollo Client, and Drizzle to provide a GraphQL server with custom queries and a ready frontend client.',
    },
    {
      name: 'twitter:site',
      content:
        'This project uses GraphQL Yoga, Nuxt, Apollo Client, and Drizzle to provide a GraphQL server with custom queries and a ready frontend client.',
    },
  ],
  title: `🚀 Nuxt with GraphQL Yoga and Apollo Client`,
})
</script>

<template>
  <main class="min-h-screen w-full relative bg-white">
   <div class="absolute inset-0 z-0 pointer-events-none opacity-30 mix-blend-multiply [background-image:radial-gradient(circle_at_center,#FF7112,transparent)]"/>
    <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <slot />
      <Footer />
      <Toaster :rich-colors="true" :close-button="true" />
    </div>
  </main>
</template>