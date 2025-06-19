<template>
  <el-footer class="footer">
    <el-row class="footer-row">
      <el-col :span="24">
        <div class="footer-container">
          <div class="footer-content">
            <div class="footer-logo">
              <el-image src="/images/colla_logo.png" alt="Colla Logo" class="logo-img"></el-image>
            </div>
            <div class="footer-copyright">
              © 2025 Coolla ·
              <router-link to="/privacy" class="footer-link">Privacy Policy</router-link> ·
              <router-link to="/terms" class="footer-link">Terms & Conditions</router-link>
            </div>
            <div class="footer-social">
              <a href="#" class="social-link">
                <el-image src="/images/twitter.png" alt="Colla twitter" class="h-6"></el-image>
              </a>
              <a href="#" class="social-link">
                <el-image src="/images/discord.png" alt="Colla discord" class="h-6"></el-image>
              </a>
              <a href="#" class="social-link">
                <el-image src="/images/telegram.png" alt="Colla telegram" class="h-6"></el-image>
              </a>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </el-footer>
</template>

<script setup>
</script>

<style scoped>
.footer {
  background-color: var(--el-color-white);
  height: auto;
  padding: 0;
}

.footer-row {
  padding: 2rem 0;
  border-top: 1px solid var(--el-border-color-lighter);
  background-color: var(--el-color-white);
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-logo .logo-img {
  height: 1.5rem;
  width: auto;
}

.footer-copyright {
  color: var(--el-text-color-secondary);
  font-size: 0.875rem;
}

.footer-link {
  color: var(--el-text-color-secondary);
  text-decoration: none;
  transition: color 0.3s;
}

.footer-link:hover {
  color: var(--el-color-primary);
}

.footer-social {
  display: flex;
  gap: 1rem;
}

.social-link {
  color: var(--el-text-color-secondary);
  transition: color 0.3s;
}

.social-link:hover {
  color: var(--el-color-primary);
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}
</style>