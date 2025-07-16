<script setup lang="ts">
import { motion } from 'motion-v'
import type { EmbeddedSandboxAPI } from "~/types";

declare global {
  interface Window extends EmbeddedSandboxAPI {}
}

// load the Apollo Sandbox script
const { onLoaded } = useScript(
  "https://embeddable-sandbox.cdn.apollographql.com/02e2da0fccbe0240ef03d2396d6c98559bab5b06/embeddable-sandbox.umd.production.min.js",
  {
    use() {
      return { EmbeddedSandbox: window.EmbeddedSandbox };
    },
  }
);

const runtimeConfig = useRuntimeConfig();

onMounted(() => {
  onLoaded(({ EmbeddedSandbox }) => {
    new EmbeddedSandbox({
      target: "#sandbox",
      initialEndpoint: runtimeConfig.public.gqlHost as string,
      hideCookieToggle: false,
      initialState: {
        includeCookies: true,
      },
    });
  });
});
</script>

<template>
    <motion.div :initial="{ opacity: 0, y: -20 }" :animate="{ opacity: 1, y: 0 }" :transition="{ delay: 0.6, ease: 'easeIn' }" class="space-y-5">
      <div class="h-[700px] w-auto z-[1700] border-2 border-white rounded-lg overflow-clip">
        <div id="sandbox" class="size-full"></div>
      </div>
      <blockquote class="border-l-4 p-3 border-orange-500">
        <p>
          💡 If the embed breaks,
          <NuxtLink
          class="underline decoration-wavy text-orange-600"
            target="_blank"
            to="/api/graphql"
            >open it in a new tab</NuxtLink
          >.
        </p>
      </blockquote>
    </motion.div>
</template>