<template>
  <el-header class="header" height="auto">
    <div class="container header-container">
      <div class="header-layout">
        <!-- Logo (Left) -->
        <div class="logo-container">
          <router-link to="/home" class="logo-link">
            <el-image src="/images/colla_logo.png" alt="Colla" class="logo-image"></el-image>
          </router-link>
        </div>

        <!-- Navigation Menu (Center) -->
        <div class="nav-container">
          <el-menu mode="horizontal" :ellipsis="false" class="nav-menu">
            <el-menu-item index="home">
              <router-link to="/">Home</router-link>
            </el-menu-item>
            <!-- <el-menu-item index="about">
              <router-link to="/about">About</router-link>
            </el-menu-item> -->
            <el-menu-item index="price">
              <router-link to="/price">Price</router-link>
            </el-menu-item>
          </el-menu>
        </div>

        <!-- Get Started Button (Right) -->
        <div class="action-container">
          <el-button type="primary" class="get-started-btn" disabled>
            Get Started
          </el-button>

          <!-- Mobile Menu Button -->
          <el-button @click="isMobileMenuOpen = !isMobileMenuOpen" class="mobile-menu-btn" text>
            <el-icon v-if="!isMobileMenuOpen" size="24">
              <Menu />
            </el-icon>
            <el-icon v-else size="24">
              <Close />
            </el-icon>
          </el-button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <el-collapse-transition>
      <div v-if="isMobileMenuOpen" class="mobile-menu">
        <div class="container">
          <el-menu mode="vertical" class="mobile-nav-menu">
            <el-menu-item index="home" @click="isMobileMenuOpen = false">
              <router-link to="/">Home</router-link>
            </el-menu-item>
            <!-- <el-menu-item index="about" @click="isMobileMenuOpen = false">
              <router-link to="/about">About</router-link>
            </el-menu-item> -->
            <el-menu-item index="price" @click="isMobileMenuOpen = false">
              <router-link to="/price">Price</router-link>
            </el-menu-item>
          </el-menu>
          <div class="mobile-action">
            <el-button type="primary" class="mobile-get-started-btn">
              Get Started
            </el-button>
          </div>
        </div>
      </div>
    </el-collapse-transition>
  </el-header>
</template>

<script setup>
import { ref } from 'vue';
import { Menu, Close } from '@element-plus/icons-vue';

const isMobileMenuOpen = ref(false);
</script>

<style scoped>
/* Header Styles */
.header {
  background-color: #fffdfb;
  position: sticky;
  top: 0;
  z-index: 50;
  height:72px;
}

.header-container {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.header-layout {
  display: flex;
  align-items: center;
}

/* Logo Styles */
.logo-container {
  width: 25%;
  display: flex;
  justify-content: flex-start;
}

.logo-link {
  display: flex;
  align-items: center;
}

.logo-image {
  height: 2rem;
}

/* Navigation Styles */
.nav-container {
  width: 50%;
  display: flex;
  justify-content: center;
}

.nav-menu {
  border: none;
  display: none;
}

@media (min-width: 768px) {
  .nav-menu {
    display: flex;
  }
}

/* Action Button Styles */
.action-container {
  width: 25%;
  display: flex;
  justify-content: flex-end;
}

.get-started-btn {
  height:40px;
  padding:0 20px;
  background: linear-gradient(120deg, #fe815f 0%, #febe5f 100%);
  border: none;
  display: none;
  border-radius: 10px;
}

.get-started-btn:hover {
  background-color: #f97316;
}

@media (min-width: 768px) {
  .get-started-btn {
    display: block;
  }
}

/* Mobile Menu Button */
.mobile-menu-btn {
  padding: 0.5rem;
}

@media (min-width: 768px) {
  .mobile-menu-btn {
    display: none;
  }
}

/* Mobile Menu */
.mobile-menu {
  display: none;
  background-color: white;
  border-top: 1px solid #e5e7eb;
  padding-top: 1rem;
  padding-bottom: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

@media (max-width: 767px) {
  .mobile-menu {
    display: block;
  }
}

.mobile-nav-menu {
  border: none;
}

.mobile-action {
  margin-top: 1rem;
}

.mobile-get-started-btn {
  width: 100%;
  background-color: #fb923c;
  border: none;
}

.mobile-get-started-btn:hover {
  background-color: #f97316;
}

/* Element Plus Menu Overrides */
:deep(.el-menu--horizontal) {
  height: 60px;
  display: flex;
  align-items: center;
}

:deep(.el-menu--horizontal > .el-menu-item) {
  height: auto;
  line-height: normal;
  padding: 0 20px;
  font-size: 20px;
  font-weight: 400;
  color: #1A130E;
}

:deep(.el-menu--horizontal > .el-menu-item.is-active) {
  color: #f97316;
  border-bottom: none;
}

:deep(.el-menu--horizontal > .el-menu-item:hover) {
  color: #f97316;
}

:deep(.el-menu--horizontal > .el-menu-item a) {
  color: inherit;
  text-decoration: none;
}
</style>