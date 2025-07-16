<script setup lang="ts">
import Footer from '~/components/Footer.vue';

useHead({
  meta: [
    { property: 'og:title', content: `Todos` },
    {
      name: 'description',
      content:
        'A local-first todo app using RxDB, Drizzle ORM, and Nuxt.js. Built for seamless offline experience.',
    },
    {
      property: 'og:description',
      content:
        'A local-first todo app using RxDB, Drizzle ORM, and Nuxt.js. Built for seamless offline experience.',
    },
    {
      property: 'og:url',
      content:
        'A local-first todo app using RxDB, Drizzle ORM, and Nuxt.js. Built for seamless offline experience.',
    },
    {
      name: 'twitter:title',
      content:
        'A local-first todo app using RxDB, Drizzle ORM, and Nuxt.js. Built for seamless offline experience.',
    },
    {
      name: 'twitter:description',
      content:
        'A local-first todo app using RxDB, Drizzle ORM, and Nuxt.js. Built for seamless offline experience.',
    },
    {
      name: 'twitter:site',
      content:
        'A local-first todo app using RxDB, Drizzle ORM, and Nuxt.js. Built for seamless offline experience.',
    },
  ],
  title: `🚀 Nuxt with GraphQL Yoga and Client`,
})
</script>

<template>
  <main class="min-h-screen w-full relative bg-white">
   <div class="absolute inset-0 z-0 pointer-events-none opacity-30 mix-blend-multiply [background-image:radial-gradient(circle_at_center,#FF7112,transparent)]"/>
    <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <slot />
      <Footer />
    </div>
  </main>
</template>