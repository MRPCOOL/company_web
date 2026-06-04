<template>
  <Header />
  <div class="subscription-container">
    <div class="topTitle">
      <span class="fade-in-text" style="animation-delay: 0s;">我们的 </span>
      <span class="fade-in-text ml-15 caiseT" style="animation-delay: 0.2s;">联系方式 </span>
    </div>
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="8">
        <el-card class="subscription-card contact-card" shadow="hover">
          <div class="plan-name">微信</div>
          <div class="contact-media qr-area">
            <img :src="toAsset('images/vx_code.png')" alt="微信二维码">
          </div>
          <div class="number">微信号：ffdxdwx</div>
          <div class="contact-info">
            <div class="contact-item">
              <span class="contact-label">联系人</span>
              <span class="contact-value">彭经理</span>
            </div>
            <div class="contact-item">
              <span class="contact-label">工作时间</span>
              <span class="contact-value">周一至周六 09:00-21:00</span>
            </div>
            <div class="contact-item">
              <span class="contact-label">更新时间</span>
              <span class="contact-value">2026-04-28</span>
            </div>
          </div>
        </el-card>
      </el-col>

      <el-col :xs="24" :sm="24" :md="8">
        <el-card class="subscription-card contact-card" shadow="hover">
          <div class="plan-name">QQ</div>
          <div class="contact-media qr-area">
            <img :src="toAsset('images/qq_code.jpg')" alt="QQ二维码">
          </div>
          <div class="number">QQ号：1113283469</div>
          <div class="contact-info">
            <div class="contact-item">
              <span class="contact-label">联系人</span>
              <span class="contact-value">彭经理</span>
            </div>
            <div class="contact-item">
              <span class="contact-label">工作时间</span>
              <span class="contact-value">周一至周六 09:00-21:00</span>
            </div>
            <div class="contact-item">
              <span class="contact-label">更新时间</span>
              <span class="contact-value">2026-04-28</span>
            </div>
          </div>
        </el-card>
      </el-col>

      <el-col :xs="24" :sm="24" :md="8">
        <el-card class="subscription-card contact-card" shadow="hover">
          <div class="plan-name">电话</div>
          <div class="contact-media avatar-area">
            <img :src="toAsset('images/myAvatar.jpg')" alt="头像">
          </div>
          <div class="number">13026271129</div>
          <div class="contact-info">
            <div class="contact-item">
              <span class="contact-label">联系人</span>
              <span class="contact-value">彭经理</span>
            </div>
            <div class="contact-item">
              <span class="contact-label">工作时间</span>
              <span class="contact-value">全天在线</span>
            </div>
            <div class="contact-item">
              <span class="contact-label">更新时间</span>
              <span class="contact-value">2026-04-28</span>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { toCssUrl, toAsset } from '@/utils/asset'

const heroBgImage = toCssUrl('images/hero_bg.png')
</script>

<style scoped>
.subscription-container {
  width: 80%;
  max-width: 1550px;
  min-height: calc(100vh - 265px);
  margin: 40px auto;
  padding: 0 20px;
  background: v-bind(heroBgImage) center center no-repeat;
  background-size: auto 100%;
  overflow: visible;
}

.subscription-title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 24px;
  color: #333;
}

.subscription-card {
  height: 100%;
  min-height: 430px;
  position: relative;
  margin-bottom: 20px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
}

:deep(.el-card__body) {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 28px;
}

.plan-name {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 24px;
  line-height: 1.2;
  min-height: 34px;
  text-align: center;
  color: #1A130E;
}

.contact-card {
  border: 1px solid rgba(248, 151, 106, 0.18);
}

.contact-media {
  width: 190px;
  height: 190px;
  margin: 0 auto 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(114, 118, 129, 0.85);
  font-size: 18px;
  font-weight: 600;
  background:
    linear-gradient(90deg, rgba(248, 151, 106, 0.18) 50%, transparent 0) repeat-x,
    linear-gradient(90deg, rgba(248, 151, 106, 0.18) 50%, transparent 0) repeat-x,
    linear-gradient(0deg, rgba(248, 151, 106, 0.18) 50%, transparent 0) repeat-y,
    linear-gradient(0deg, rgba(248, 151, 106, 0.18) 50%, transparent 0) repeat-y,
    rgba(255, 255, 255, 0.72);
  background-size: 14px 1px, 14px 1px, 1px 14px, 1px 14px;
  background-position: left top, left bottom, left top, right top;
  border-radius: 12px;
  overflow: hidden;
}

.contact-media img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.qr-area {
  border-radius: 12px;
}

.qr-area img {
  object-fit: contain;
}

.avatar-area {
  border-radius: 50%;
}

.number {
  width: 100%;
  min-height: 46px;
  margin: 0 auto 24px;
  padding: 12px 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1A130E;
  font-size: 22px;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  border-radius: 8px;
}

.contact-info {
  margin-top: auto;
}

.contact-item {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 0;
  border-bottom: 1px solid rgba(114, 118, 129, 0.16);
  font-size: 15px;
  line-height: 1.4;
}

.contact-item:last-child {
  border-bottom: none;
}

.contact-label {
  flex-shrink: 0;
  color: rgba(114, 118, 129, 0.9);
}

.contact-value {
  color: #1A130E;
  font-weight: 600;
  text-align: right;
}

.topTitle {
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  padding: 0;
  color: #1A130E;
  text-align: center;
  font-family: "Tobias TRIAL";
  font-size: 86px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.7;
  /* 104.651% */
}

.caiseT {
  background: linear-gradient(92deg, #FF6E24 4.31%, #FF8896 44.17%, #EF9CF0 88.05%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.textGray {
  color: rgba(114, 118, 129, 0.80);
  padding: 12px;
  text-align: center;
}

@media (max-width: 768px) {
  .subscription-container {
    width: 100%;
    min-height: auto;
    margin: 16px auto 32px;
    padding: 0 16px;
    background-size: cover;
    background-position: center top;
  }

  .topTitle {
    display: block;
    font-size: 42px;
    line-height: 1.15;
    margin-bottom: 16px;
  }

  .subscription-card {
    min-height: 0;
    margin-bottom: 14px;
    border-radius: 14px;
  }

  :deep(.el-card__body) {
    padding: 20px 18px;
  }

  .plan-name {
    font-size: 24px;
    min-height: 0;
    margin-bottom: 16px;
  }

  .contact-media {
    width: 160px;
    height: 160px;
    margin-bottom: 14px;
  }

  .number {
    min-height: 40px;
    margin-bottom: 18px;
    padding: 10px 12px;
    font-size: 18px;
    line-height: 1.3;
  }

  .contact-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
    padding: 12px 0;
    font-size: 14px;
  }

  .contact-value {
    text-align: left;
  }
}
</style>
