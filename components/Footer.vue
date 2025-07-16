<script setup lang="ts">
import { motion } from 'motion-v'
</script>

<template>
    <motion.footer :initial="{ opacity: 0, y: 30 }" :animate="{ opacity: 1, y: 0 }" class="mx-auto flex w-full max-w-[87.5rem] flex-col items-center py-8 sm:flex-row sm:justify-between">
      <p>
        Made with 💚 by
        <NuxtLink
          to="https://x.com/codewithmontana"
          target="_blank"
          class="font-semibold text-brand hover:text-brand-secondary dark:text-primary"
        >@codewithmontana</NuxtLink>.
      </p>
      <div class="flex items-center justify-center gap-x-3">
        <NuxtLink
          to="https://x.com/codewithmontana"
          target="_blank"
          class="flex items-center justify-center transition-colors duration-300 ease-out hover:text-neutral-800 focus:outline-none focus-visible:rounded focus-visible:ring-1 focus-visible:ring-neutral-500 dark:hover:text-neutral-200 dark:focus-visible:ring-neutral-500"
          title="My X (Twitter)"
        >
          <Icon
            name="i-simple-icons-x"
            class="inline-block size-4 dark:size-4"
          />
        </NuxtLink>
        <NuxtLink
          to="https://github.com/thecodingmontana/nuxt-graphql"
          target="_blank"
          class="flex items-center justify-center transition-colors duration-300 ease-out hover:text-neutral-800 focus:outline-none focus-visible:rounded focus-visible:ring-1 focus-visible:ring-neutral-500 dark:hover:text-neutral-200 dark:focus-visible:ring-neutral-500"
          title="My GitHub"
        >
          <Icon
            name="i-simple-icons-github"
            class="inline-block size-4 dark:size-4"
          />
        </NuxtLink>
      </div>
    </motion.footer>
</template>