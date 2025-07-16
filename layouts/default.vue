<script setup lang="ts"></script>

<template>
  <main class="min-h-screen w-full relative bg-white">
    <div
      class="absolute inset-0 z-0 pointer-events-none"
      :style="{
        backgroundImage: `
        radial-gradient(circle at center, #FF7112, transparent)
      `,
        opacity: 0.3,
        mixBlendMode: 'multiply',
      }"
    />
    <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <slot />
    </div>
  </main>
</template>