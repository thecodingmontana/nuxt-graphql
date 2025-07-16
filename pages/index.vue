<script lang="ts" setup>
import ApolloSandbox from "~/components/ApolloSandbox.vue";
import Hero from "~/components/Hero.vue";

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
    <ApolloSandbox />
  </div>
</template>
