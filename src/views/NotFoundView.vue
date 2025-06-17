<template>
  <div class="not-found py-16">
    <div class="container text-center">
      <h1 class="text-6xl font-bold mb-4">404</h1>
      <h2 class="text-3xl mb-8">Page Not Found</h2>
      <p class="text-gray-600 mb-8">The page you are looking for doesn't exist or has been moved.</p>
      <el-button type="primary" @click="$router.push('/')">Go Home</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFoundView'
}
</script>

<style scoped>
.not-found {
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style> 