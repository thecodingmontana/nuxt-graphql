<script lang="ts" setup>
const query = gql`
  query ExampleQuery {
    love
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
      This data is fetched from GraphQL Yoga Server {{ data }}
    </div>
    <a href="/api/graphql">Apollo Sandbox</a>
  </main>
</template>
