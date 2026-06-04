<template>
  <el-footer class="footer">
    <el-row class="footer-row">
      <el-col :span="24">
        <div class="footer-container">
          <div class="footer-content">
            <div class="footer-logo">
              <el-image :src="withBase('images/company_logo.png')" alt="Colla Logo" class="logo-img"></el-image>
            </div>
            <div class="footer-copyright">
              © 2026 江西慧点奇丰科技有限公司 ·
              <a href="https://beian.miit.gov.cn/" class="footer-link" target="_blank">赣ICP备2026008171号-1</a> ·
              <div style="display: inline;">
                <img :src="withBase('images/beiantubiao.png')" alt="备案图标" style="display: inline;width: 16px; height: 16px; vertical-align: middle; margin: 0 4px;">
              <a href="https://beian.mps.gov.cn/#/query/webSearch?code=36040202000390" rel="noreferrer"
                target="_blank">赣公网安备36040202000390号</a>
              </div>
            </div>
            <div class="footer-social">
              <a href="#" class="social-link" @click.prevent>
                <span class="social-popover">
                  <img :src="withBase('images/vx_code.png')" alt="微信二维码" class="qr-image">
                </span>
                <el-image :src="withBase('images/icon_wechat.png')" alt="Our wechat" class="social-icon"></el-image>
              </a>
              <a href="#" class="social-link" @click.prevent>
                <span class="social-popover">
                  <img :src="withBase('images/rd_code.jpg')" alt="小红书二维码" class="qr-image">
                </span>
                <el-image :src="withBase('images/icon_redbook.jpg')" alt="Our redbook" class="social-icon"></el-image>
              </a>
              <a href="#" class="social-link" @click.prevent>
                <span class="social-popover">
                  <img :src="withBase('images/wb_code.jpg')" alt="微博二维码" class="qr-image">
                </span>
                <el-image :src="withBase('images/icon_weibo.png')" alt="Our weibo" class="social-icon"></el-image>
              </a>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </el-footer>
</template>

<script setup>
import { toAsset } from '@/utils/asset';

const withBase = toAsset;
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
  width: auto !important;
  display: block;
}

.footer-logo .logo-img :deep(.el-image__inner) {
  width: auto !important;
  height: 100% !important;
  object-fit: contain;
  display: block;
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
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--el-text-color-secondary);
  transition: color 0.3s;
  text-decoration: none;
}

.social-link:hover {
  color: var(--el-color-primary);
}

.social-icon {
  width: 24px;
  height: 24px;
  display: block;
}

.social-popover {
  position: absolute;
  left: 50%;
  bottom: calc(100% + 14px);
  transform: translateX(-50%) translateY(6px);
  width: 104px;
  padding: 10px;
  background: #fff;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 8px;
  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.14);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s ease;
  z-index: 20;
}

.social-popover::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 100%;
  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-top: 8px solid #fff;
  transform: translateX(-50%);
}

.social-link:hover .social-popover,
.social-link:focus-visible .social-popover {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}

.qr-placeholder {
  width: 84px;
  height: 84px;
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    linear-gradient(90deg, rgba(15, 23, 42, 0.08) 0, rgba(15, 23, 42, 0.08) 1px, transparent 1px, transparent 100%),
    linear-gradient(rgba(15, 23, 42, 0.08) 0, rgba(15, 23, 42, 0.08) 1px, transparent 1px, transparent 100%);
  background-size: 12px 12px;
  border: 1px dashed rgba(15, 23, 42, 0.18);
  border-radius: 6px;
  color: #94a3b8;
  font-size: 12px;
  line-height: 1;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}
</style>
