<script lang="ts" setup>
import { onMounted } from "vue";
import Hero from "~/components/Hero.vue";
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

// example query
const query = gql`
  query ExampleQuery {
    ping
  }
`;

const { data, error, status } = await useAsyncQuery(query);
</script>

<template>
  <div>
    <Hero />
    <div class="h-[600px] w-auto z-[1700] border-2 border-white rounded-lg overflow-clip">
        <div id="sandbox" class="size-full"></div>
      </div>
  </div>
</template>
