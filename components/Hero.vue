<script setup lang="ts">
import { PlusIcon } from 'lucide-vue-next';
import { motion } from 'motion-v'
import CopyToClipboard from './CopyToClipboard.vue';

const githubUrl = "https://github.com/thecodingmontana/nuxt-graphql.git"
</script>

<template>
  <section class="container py-8 text-center relative overflow-hidden px-4 sm:px-6 lg:px-8 flex items-center justify-center">
    <div class="mx-auto max-w-6xl relative z-10 space-y-10">
      <motion.div :initial="{ opacity: 0, y: -20 }" :animate="{ opacity: 1, y: 0 }" class="flex justify-center">
        <NuxtLink
          href="https://github.com/productdevbook/nitro-graphql"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex"
        >
          <span
            data-slot="badge"
            class="inline-flex items-center justify-center font-medium w-fit whitespace-nowrap shrink-0 [&amp;>svg]:size-3 [&amp;>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive overflow-hidden [a&amp;]:hover:bg-secondary/90 gap-2 py-2 px-3 sm:px-4 text-xs sm:text-sm rounded-full shadow-lg backdrop-blur-md transition-all duration-300 border bg-white/80 border-gray-200/50 text-gray-900 hover:bg-white/90"
          ><div class="relative flex h-2 w-2"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" /><span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" /></div><span class="font-medium">
            Standalone Nitro Graphql Module
          </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-zap h-3 w-3 text-orange-500"
              aria-hidden="true"
            ><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" /></svg><span class="hidden sm:inline-flex items-center">Read More</span><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-arrow-right h-3 w-3"
              aria-hidden="true"
            ><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></span>
        </NuxtLink>
      </motion.div>
      <motion.div :initial="{ opacity: 0, y: -20 }" :animate="{ opacity: 1, y: 0 }" :transition="{ delay: 0.2, ease: 'easeIn' }" class="space-y-3">
        <div class="flex items-center justify-center gap-3">
            <Icon name="i-vscode-icons:file-type-nuxt" size="70" />
            <PlusIcon class="h-8 w-8" />
            <Icon name="devicon-plain:graphql-wordmark" size="70" />
            <PlusIcon class="h-8 w-8" />
            <Icon name="devicon:apollographql" size="60" />
        </div>
        <h1 class="mb-1 sm:mb-3 text-balance text-center text-3xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
          🚀 Nuxt GraphQL Yoga
        </h1>
      </motion.div>
      <motion.p :initial="{ opacity: 0, y: -20 }" :animate="{ opacity: 1, y: 0 }" :transition="{ delay: 0.4, ease: 'easeIn' }" class="text-base sm:text-lg mb-6 sm:mb-8 max-w-lg mx-auto leading-relaxed transition-colors duration-300 px-4 sm:px-0 text-gray-600 dark:text-gray-200">
        This project uses GraphQL Yoga, Nuxt, Apollo Client, and Drizzle to provide a GraphQL server with custom queries and a ready frontend client. Try it in the sandbox below.
      </motion.p>
      <motion.div :initial="{ opacity: 0, y: -20 }" :animate="{ opacity: 1, y: 0 }" :transition="{ delay: 0.6, ease: 'easeIn' }" class="max-w-sm mx-auto">
        <CopyToClipboard :text="'git clone ' + githubUrl" />
      </motion.div>
    </div>
  </section>
</template>