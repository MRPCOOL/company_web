<template>
  <Header />
  <div class="subscription-container">
    <div class="topTitle" >
        <span class="fade-in-text" style="animation-delay: 0s;">Simple </span>
        <span class="fade-in-text ml-15 caiseT" style="animation-delay: 0.2s;">Pricing </span>
    </div>
    <el-row :gutter="20">
      <!-- Free Plan Card -->
      <el-col :xs="24" :sm="24" :md="8">
        <el-card class="subscription-card free-card" shadow="hover">
          <div class="plan-name">Free</div>
          <div class="price-container">
            <span class="price">$0</span>
            <span class="period">/Month</span>
          </div>
          <div class="features">
            <div class="feature available">
              <el-icon class="feature-icon"><Check /></el-icon>
              Limited auto-labeling & organization
            </div>
            <div class="feature available">
              <el-icon class="feature-icon"><Check /></el-icon>
              AI powered limited Smart Reply 30 time
            </div>
            <div class="feature unavailable">
              <el-icon class="feature-icon"><CircleClose /></el-icon>
              Auto Smart Quote Engine
            </div>
            <div class="feature unavailable">
              <el-icon class="feature-icon"><CircleClose /></el-icon>
              Sample Selection Auto-Reply
            </div>
            <div class="feature unavailable">
              <el-icon class="feature-icon"><CircleClose /></el-icon>
              Contract smart Review & Rewrite
            </div>
            <!-- Spacers to match height with other cards -->
            <div class="feature spacer"></div>
            <div class="feature spacer"></div>
          </div>
          <el-button class="plan-button current-plan" disabled>Current plan</el-button>
          <span class="textGray">Cancel any time</span>
        </el-card>
      </el-col>

      <!-- Monthly Plan Card -->
      <el-col :xs="24" :sm="24" :md="8">
        <el-card class="subscription-card" shadow="hover">
          <div class="plan-name">Monthly</div>
          <div class="price-container">
            <span class="price">$19.9</span>
            <span class="period">/Month</span>
          </div>
          <div class="features">
            <div class="feature available">
              <el-icon class="feature-icon"><Check /></el-icon>
              Inbox Automated label and organization
              <el-tooltip content="Automatically organize your inbox" placement="top">
                <el-icon class="info-icon"><InfoFilled /></el-icon>
              </el-tooltip>
            </div>
            <div class="feature available">
              <el-icon class="feature-icon"><Check /></el-icon>
              AI powered Unlimited Smart Reply
              <el-tooltip content="Generate unlimited smart replies" placement="top">
                <el-icon class="info-icon"><InfoFilled /></el-icon>
              </el-tooltip>
            </div>
            <div class="feature available">
              <el-icon class="feature-icon"><Check /></el-icon>
              Auto Smart Quote Engine
              <el-tooltip content="Generate quotes automatically" placement="top">
                <el-icon class="info-icon"><InfoFilled /></el-icon>
              </el-tooltip>
            </div>
            <div class="feature available">
              <el-icon class="feature-icon"><Check /></el-icon>
              Sample Selection Auto-Reply
              <el-tooltip content="Auto-reply with sample selections" placement="top">
                <el-icon class="info-icon"><InfoFilled /></el-icon>
              </el-tooltip>
            </div>
            <div class="feature available">
              <el-icon class="feature-icon"><Check /></el-icon>
              Contract smart Review & Rewrite
              <el-tooltip content="AI-powered contract review" placement="top">
                <el-icon class="info-icon"><InfoFilled /></el-icon>
              </el-tooltip>
            </div>
            <div class="feature available">
              <el-icon class="feature-icon"><Check /></el-icon>
              Priority Customer Support
              <el-tooltip content="Get priority support" placement="top">
                <el-icon class="info-icon"><InfoFilled /></el-icon>
              </el-tooltip>
            </div>
            <div class="feature available">
              <el-icon class="feature-icon"><Check /></el-icon>
              Access to VIP discord community
              <el-tooltip content="Join our exclusive community" placement="top">
                <el-icon class="info-icon"><InfoFilled /></el-icon>
              </el-tooltip>
            </div>
          </div>
          <el-button class="plan-button trial-button" type="primary" color="#f8976a" @click="showSubscriptionPopup">Start 7-Day Free Trial</el-button>
          <span class="textGray">Cancel any time</span>
        </el-card>
      </el-col>

      <!-- Yearly Plan Card -->
      <el-col :xs="24" :sm="24" :md="8">
        <el-card class="subscription-card" shadow="hover">
          <el-tag class="save-badge" type="success" effect="plain">👍 Save 50%</el-tag>
          <div class="plan-name">Yearly</div>
          <div class="price-container">
            <span class="price">$9.9</span>
            <span class="original-price">$19.9</span>
            <span class="period">/Month</span>
          </div>
          <div class="features">
            <div class="feature available">
              <el-icon class="feature-icon"><Check /></el-icon>
              Inbox Automated label and organization
              <el-tooltip content="Automatically organize your inbox" placement="top">
                <el-icon class="info-icon"><InfoFilled /></el-icon>
              </el-tooltip>
            </div>
            <div class="feature available">
              <el-icon class="feature-icon"><Check /></el-icon>
              AI powered Unlimited Smart Reply
              <el-tooltip content="Generate unlimited smart replies" placement="top">
                <el-icon class="info-icon"><InfoFilled /></el-icon>
              </el-tooltip>
            </div>
            <div class="feature available">
              <el-icon class="feature-icon"><Check /></el-icon>
              Auto Smart Quote Engine
              <el-tooltip content="Generate quotes automatically" placement="top">
                <el-icon class="info-icon"><InfoFilled /></el-icon>
              </el-tooltip>
            </div>
            <div class="feature available">
              <el-icon class="feature-icon"><Check /></el-icon>
              Sample Selection Auto-Reply
              <el-tooltip content="Auto-reply with sample selections" placement="top">
                <el-icon class="info-icon"><InfoFilled /></el-icon>
              </el-tooltip>
            </div>
            <div class="feature available">
              <el-icon class="feature-icon"><Check /></el-icon>
              Contract smart Review & Rewrite
              <el-tooltip content="AI-powered contract review" placement="top">
                <el-icon class="info-icon"><InfoFilled /></el-icon>
              </el-tooltip>
            </div>
            <div class="feature available">
              <el-icon class="feature-icon"><Check /></el-icon>
              Priority Customer Support
              <el-tooltip content="Get priority support" placement="top">
                <el-icon class="info-icon"><InfoFilled /></el-icon>
              </el-tooltip>
            </div>
            <div class="feature available">
              <el-icon class="feature-icon"><Check /></el-icon>
              Access to VIP discord community
              <el-tooltip content="Join our exclusive community" placement="top">
                <el-icon class="info-icon"><InfoFilled /></el-icon>
              </el-tooltip>
            </div>
          </div>
          <el-button class="plan-button trial-button" type="primary" color="#f8976a" @click="showSubscriptionPopup">Start 7-Day Free Trial</el-button>
          <span class="textGray">Cancel any time</span>
        </el-card>
      </el-col>
    </el-row>

    <!-- Import the subscription popup component -->
    <SubscriptionPopUp ref="subscriptionPopup" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Check, CircleClose, InfoFilled } from '@element-plus/icons-vue'

const subscriptionPopup = ref(null)

const showSubscriptionPopup = () => {
  subscriptionPopup.value.openDialog()
}
</script>

<style scoped>
.subscription-container {
  width:80%;
  max-width: 1550px;
  height:calc(100vh - 265px);
  margin: 40px auto;
  padding: 0 20px;
  background: url(/images/hero_bg.png) center center no-repeat;
  background-size: auto 100%;
  overflow: hidden;
}

.subscription-title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 24px;
  color: #333;
}

.subscription-card {
  height: 100%;
  height: calc(100vh - 520px);
  position: relative;
  margin-bottom: 20px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
}

.free-card :deep(.el-card__body) {
  /* border: 1px solid #f8976a; */
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

:deep(.el-card__body) {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.plan-name {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
}

.price-container {
  margin-bottom: 24px;
  display: flex;
  align-items: baseline;
}

.price {
  font-size: 48px;
  font-weight: 700;
  margin-right:10px;
}

.period {
  font-size: 14px;
  color: #666;
}

.original-price {
  font-size: 14px;
  color: #666;
  text-decoration: line-through;
  margin-left: 6px;
}

.save-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 14px;
  background-color: #47CD8933;
}

.features {
  margin-bottom: 24px;
  flex-grow: 1;
}

.feature {
  display: flex;
  align-items: flex-start;
  margin-bottom: 16px;
  font-size: 14px;
  line-height: 1.4;
}

.feature.spacer {
  height: 16px;
  visibility: hidden;
}

.feature-icon {
  margin-right: 10px;
  font-size: 16px;
  margin-top: 2px;
  flex-shrink: 0;
}

.available .feature-icon {
  color: #4caf50;
}

.unavailable .feature-icon {
  color: #999;
}

.unavailable {
  color: #999;
}

.info-icon {
  color: #999;
  margin-left: 6px;
  font-size: 14px;
  cursor: pointer;
}

.plan-button {
  width: 100%;
  height:60px;
  padding: 13px 12px;
  font-size: 16px;
  font-weight: 500;
  margin-top: auto;
  border-radius: 8px;
}

.current-plan {
  background-color: #f5f5f5;
  color: #666;
  cursor: default;
}

.trial-button {
  background: linear-gradient(90deg, #f8976a 0%, #f8c26a 100%);
  color: white;
  border: none;
}

.topTitle{
  width:100%;
  text-align: center;
  display: flex;
  justify-content: center;
  padding:48px 0;
  color: #1A130E;
  text-align: center;
  font-family: "Tobias TRIAL";
  font-size: 86px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.7; /* 104.651% */
}
.caiseT{
  background: linear-gradient(92deg, #FF6E24 4.31%, #FF8896 44.17%, #EF9CF0 88.05%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.textGray{
  color:rgba(114, 118, 129, 0.80);
  padding:12px;
  text-align: center;
}
</style>
