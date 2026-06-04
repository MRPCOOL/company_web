<template>
  <el-header class="header" height="auto">
    <div class="container header-container">
      <div class="header-layout">
        <!-- Logo (Left) -->
        <div class="logo-container">
          <router-link to="/home" class="logo-link">
            <el-image :src="withBase('images/company_logo.png')" alt="Colla" class="logo-image"></el-image>
          </router-link>
        </div>

        <!-- Navigation Menu (Center) -->
        <div class="nav-container">
          <el-menu
            mode="horizontal"
            :ellipsis="false"
            :default-active="route.path"
            router
            class="nav-menu"
          >
            <el-menu-item index="/">首页</el-menu-item>
            <el-menu-item index="/about">关于我们</el-menu-item>
            <el-menu-item index="/contact">联系我们</el-menu-item>
          </el-menu>
        </div>

        <!-- Get Started Button (Right) -->
        <div class="action-container">
          <el-button type="primary" class="get-started-btn" @click="$router.push('/contact')">
            立即联系
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
          <el-menu :default-active="route.path" router mode="vertical" class="mobile-nav-menu">
            <el-menu-item index="/" @click="isMobileMenuOpen = false">首页</el-menu-item>
            <el-menu-item index="/about" @click="isMobileMenuOpen = false">关于我们</el-menu-item>
            <el-menu-item index="/contact" @click="isMobileMenuOpen = false">联系我们</el-menu-item>
          </el-menu>
          <div class="mobile-action">
            <el-button
              type="primary"
              class="mobile-get-started-btn"
              @click="$router.push('/contact'); isMobileMenuOpen = false"
            >
              立即联系
            </el-button>
          </div>
        </div>
      </div>
    </el-collapse-transition>
  </el-header>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { Menu, Close } from '@element-plus/icons-vue';
import { toAsset } from '@/utils/asset';

const isMobileMenuOpen = ref(false);
const route = useRoute();
const withBase = toAsset;

//璺宠浆鐧诲綍
function goLogin() {
  window.open('https://login.coolla.online/login');
}
</script>

<style scoped>
/* Header Styles */
.header {
  background-color: #fffdfb;
  position: sticky;
  top: 0;
  z-index: 50;
  height: 72px;
}

.header-container {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.header-layout {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Logo Styles */
.logo-container {
  width: 25%;
  display: flex;
  justify-content: flex-start;
  flex-shrink: 0;
}

.logo-link {
  display: flex;
  align-items: center;
  width: auto;
  flex-shrink: 0;
}

.logo-image {
  height: 2rem;
  width: auto !important;
  display: block;
  flex-shrink: 0;
}

.logo-image :deep(.el-image__inner) {
  width: auto !important;
  height: 100% !important;
  object-fit: contain;
  display: block;
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
  align-items: center;
  flex-shrink: 0;
}

.get-started-btn {
  height: 40px;
  padding: 0 20px;
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
  .header {
    height: 64px;
  }

  .header-container {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  .logo-container {
    width: auto;
    max-width: calc(100% - 56px);
  }

  .logo-link {
    width: auto;
    flex-shrink: 0;
  }

  .logo-image {
    height: 32px;
    width: auto !important;
    max-width: 100%;
  }

  .nav-container,
  .get-started-btn {
    display: none !important;
  }

  .action-container {
    width: auto;
  }

  .mobile-menu-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    margin-left: 6px;
    color: #1a130e;
  }

  .mobile-menu {
    display: block;
    padding-top: 0.5rem;
    padding-bottom: 0.75rem;
  }
}

.mobile-nav-menu {
  border: none;
}

@media (max-width: 767px) {
  .mobile-menu .container {
    padding-left: 16px;
    padding-right: 16px;
  }

  .mobile-nav-menu {
    border-radius: 14px;
    background: #fff;
  }

  :deep(.mobile-nav-menu .el-menu-item) {
    height: 48px;
    line-height: 48px;
    font-size: 17px;
    font-weight: 600;
    color: #1a130e;
    border-radius: 10px;
    margin-bottom: 6px;
  }

  :deep(.mobile-nav-menu .el-menu-item.is-active) {
    background: rgba(254, 129, 95, 0.1);
    color: #fe815f;
  }
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
  height: 54px;
  display: flex;
  align-items: center;
}

:deep(.el-menu--horizontal > .el-menu-item) {
  height: auto;
  line-height: normal;
  padding: 0 20px;
  font-size: 20px;
  font-weight: 400;
  color: #1a130e;
  border-bottom: none !important;
  transition: background-color var(--el-transition-duration), color var(--el-transition-duration);
}

:deep(.el-menu--horizontal > .el-menu-item.is-active),
:deep(.el-menu--horizontal > .el-menu-item:not(.is-disabled):hover),
:deep(.el-menu--horizontal > .el-menu-item:not(.is-disabled):focus) {
  color: #fe815f !important;
  background: none !important;
  border-bottom: none !important;
}

:deep(.el-menu--horizontal > .el-menu-item a) {
  color: inherit;
  text-decoration: none;
}
</style>
