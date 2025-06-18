<template>
  <div class="price-view">
    <el-container>
      <el-main class="price-main">
        <div class="price-container">
          <el-image 
            src="/images/price.png" 
            class="price-image"
            fit="contain"
            alt="Pricing Information"
          />
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'PriceView',
  data() {
    return {
      // Add any reactive data here if needed
    }
  },
  mounted() {
    // Add any initialization logic here if needed
  }
}
</script>

<style scoped>
.price-view {
  min-height: 100vh;
  background: #f5f5f5;
}

.price-main {
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #fffdf5;
}

.price-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  transform: translateY(-400px);
}

.price-image {
  width: 100%;
  height: auto;
  max-height: 90vh;
  object-fit: contain;
}

/* Responsive design */
@media (max-width: 768px) {
  .price-container {
    padding: 1rem;
  }
  
  .price-image {
    max-height: 80vh;
  }
}
</style>
