<script lang="ts" setup>
const query = gql`
  query ExampleQuery {
    hello
  }
`

const { data, error, status } = await useAsyncQuery(query)
</script>

<template>
  <main>
    <div v-if="status === 'pending' || status === 'idle'">
      Loading
    </div>
    <div v-if="status === 'error'">
      {{ error }}
    </div>
    <div v-else>
      This data is fetched from GraphQL  {{ data }}
    </div>
    <a href="/api/graphql">Apollo Sandbox</a>
  </main>
</template>
