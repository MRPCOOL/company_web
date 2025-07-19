<template>
  <div class="about-root">
    <!-- 顶部导航 -->
    <header class="about-header">
      <div class="logo">
        <img src="/images/colla_logo.png" alt="Coolla" />
        <span>Coolla</span>
      </div>
      <nav class="nav-menu">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Price</a>
      </nav>
      <el-button type="warning" class="nav-btn">Get Started</el-button>
    </header>

    <!-- 主体内容 -->
    <main>
      <!-- 标题与信封图片 -->
      <section class="about-main-top">
        <h1 class="main-title">About</h1>
        <div class="main-img-box">
          <img class="main-img" src="/images/emails-pile.svg" alt="Envelope" />
          <div class="main-img-label">Coolla - Influencer Smart Email Closer</div>
          <img class="emoji emoji-1" src="/images/zan.png" alt="emoji" />
          <img class="emoji emoji-2" src="/images/miniNia.png" alt="emoji" />
        </div>
      </section>

      <!-- 三大区块 -->
      <section class="about-section">
        <div class="section-block left">
          <h2>Our Mission</h2>
          <p><span class="highlight">Work less, Earn more.</span><br>
            To empower creators with AI tools that take manual work out of brand collaborations — so you can focus on creating, not managing.<br>
            We’re here to remove the repetitive, time-consuming tasks that slow you down: replying to emails, generating quotes, choosing samples, reviewing contracts, and following up.<br>
            With Nia, automation turns complexity into simplicity — helping you work less, earn more, close deals faster, and stay focused on what truly matters.
          </p>
        </div>
        <div class="section-block right">
          <h2>What We Do</h2>
          <p><span class="highlight">All automated. Grow Influencer Income.</span><br>
            We automate the entire collaboration process — from discovering more deals and smarter matches to replying to brand emails, generating data-backed quotes, reviewing and editing contracts, and tracking your income and deliverables. With Nia, creators can focus on what they do best while earning more and sourcing smarter, faster, and safer brand deals.
          </p>
        </div>
      </section>
      <section class="about-section">
        <div class="section-block left">
          <h2>Our Promise</h2>
        </div>
        <div class="section-block right">
          <p><span class="highlight">Privacy first. Creator focused. Built to help you earn more.</span><br>
            We protect your data at every step. Nia only analyzes what’s necessary to help you close deals. No unnecessary access, no data sharing, no compromise on privacy. You’re always in control.
          </p>
        </div>
      </section>

      <!-- Call To Action -->
      <section class="about-cta">
        <h2>Ready to enhance your business with Nia ?</h2>
        <p>Let your personal agent Nia automate your brand collaborations — discover more deals, secure smarter quotes, and grow your income while saving time.</p>
        <el-button type="primary" class="cta-btn">Start Your Free Trial Today</el-button>
      </section>
    </main>

    <!-- 页脚 -->
    <footer class="about-footer">
      <div class="footer-left">
        <img src="/images/colla_logo.png" alt="Coolla" /> Coolla
      </div>
      <div class="footer-center">
        © 2025 Coolla · Privacy Policy · Terms & Conditions
      </div>
      <div class="footer-right">
        <el-icon><i class="el-icon-message"></i></el-icon>
        <el-icon><i class="el-icon-sunny"></i></el-icon>
        <el-icon><i class="el-icon-moon"></i></el-icon>
      </div>
    </footer>
  </div>
</template>

<script setup>
// ...无需复杂逻辑，纯展示页面...
</script>

<style scoped>
.about-root {
  min-height: 100vh;
  background: #fff;
  font-family: 'Inter', 'PingFang SC', 'Helvetica Neue', Arial, sans-serif;
  color: #222;
}
.about-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 40px 0 40px;
  background: none;
}
.logo {
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  font-weight: bold;
}
.logo img {
  height: 32px;
  margin-right: 8px;
}
.nav-menu {
  display: flex;
  gap: 32px;
}
.nav-menu a {
  color: #222;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
}
.nav-btn {
  background: #ffb980;
  color: #fff;
  border-radius: 24px;
  font-weight: bold;
}

.main-title {
  text-align: center;
  font-size: 3.2rem;
  font-weight: 700;
  margin: 48px 0 24px 0;
  letter-spacing: 2px;
}
.about-main-top {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.main-img-box {
  position: relative;
  background: linear-gradient(135deg, #fff0e6 0%, #f7f8fa 100%);
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(255, 186, 128, 0.12);
  padding: 32px 24px 24px 24px;
  margin-bottom: 32px;
  width: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.main-img {
  width: 220px;
  margin-bottom: 12px;
}
.main-img-label {
  position: absolute;
  top: 12px;
  left: 24px;
  background: #fff;
  color: #ff7e3f;
  font-weight: 600;
  padding: 4px 16px;
  border-radius: 16px;
  font-size: 1rem;
  box-shadow: 0 2px 8px rgba(255,186,128,0.08);
}
.emoji {
  position: absolute;
  width: 36px;
  height: 36px;
}
.emoji-1 {
  left: -18px;
  top: 60px;
}
.emoji-2 {
  right: -18px;
  top: 60px;
}

.about-section {
  display: flex;
  justify-content: center;
  gap: 48px;
  margin: 48px 0 0 0;
}
.section-block {
  flex: 1;
  max-width: 520px;
}
.section-block.left h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 16px;
}
.section-block.right h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 16px;
}
.section-block p {
  font-size: 1.1rem;
  line-height: 2;
  color: #222;
}
.highlight {
  color: #ff7e3f;
  font-weight: 600;
}

.about-cta {
  margin: 64px auto 32px auto;
  background: linear-gradient(90deg, #ffb980 0%, #ff7e3f 100%);
  border-radius: 24px;
  padding: 48px 24px;
  text-align: center;
  color: #fff;
  max-width: 700px;
  box-shadow: 0 8px 32px rgba(255,186,128,0.12);
}
.about-cta h2 {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 16px;
}
.about-cta p {
  font-size: 1.2rem;
  margin-bottom: 24px;
}
.cta-btn {
  background: #222;
  color: #fff;
  border-radius: 24px;
  font-size: 1.1rem;
  font-weight: bold;
  padding: 12px 32px;
}

.about-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 40px;
  font-size: 1rem;
  color: #888;
  background: none;
}
.footer-left img {
  height: 24px;
  margin-right: 8px;
}
.footer-right {
  display: flex;
  gap: 16px;
}

@media (max-width: 900px) {
  .about-header, .about-footer {
    flex-direction: column;
    align-items: flex-start;
    padding: 24px 16px 0 16px;
  }
  .about-section {
    flex-direction: column;
    gap: 32px;
    margin: 32px 0 0 0;
  }
  .main-title {
    font-size: 2.2rem;
  }
  .main-img-box {
    width: 90vw;
    padding: 24px 8vw 16px 8vw;
  }
  .about-cta {
    max-width: 98vw;
    padding: 32px 8vw;
  }
}
@media (max-width: 600px) {
  .main-title {
    font-size: 1.5rem;
  }
  .main-img-box {
    width: 98vw;
    padding: 16px 2vw 8px 2vw;
  }
  .about-cta {
    padding: 24px 2vw;
  }
  .about-header, .about-footer {
    padding: 12px 4px 0 4px;
  }
}
</style>
