<template>
  <div class="home">
    <!-- Hero Section -->
    <el-main>
      <el-row class="hero" :gutter="24">
        <el-col :span="24">
          <div class="container text-center hero-container">
            <el-text class="subtitle">
              <el-image src="/public/images/Nia.png" :width="32" :height="37" class="align-middle mr-2" />Influencer
              collab AI agent
            </el-text>
            <el-text tag="h1" class="text-5xl font-bold mb-4 block hero-title">
              <span class="fade-in-text" style="animation-delay: 0s;">Automate every </span>
              <span class="fade-in-text" style="animation-delay: 0.2s;">brand </span>
              <el-image src="/public/images/brand_img.png" class="fade-in-image" style="display: inline-block;   width: 51px;
  height: 94px;vertical-align: middle; animation-delay: 0.3s;" />
              <span class="fade-in-text" style="animation-delay: 0.4s;"> collab,</span>
              <br />
              <span class="fade-in-text" style="animation-delay: 0.6s;">from </span>
              <span class=" fade-in-text" style="animation-delay: 0.8s;color: #FF6E24;">inbox</span>
              <el-image src="/public/images/inbox_img.png" class="fade-in-image" style="display: inline-block; width: 115px;
  height: 90px;vertical-align: middle; animation-delay: 1s;" />
              <span class="fade-in-text" style="animation-delay: 1.2s;color: #FF8896;"> to </span>
              <span class="income-gradient fade-in-text" style="animation-delay: 1.4s;">income</span>
            </el-text>
            <div class="mt-8 mb-16">
              <el-button size="large" class="cta-button bg-black text-white">Start Your 7 Day Free Trial
                ($19.99)</el-button>
            </div>

            <!-- Stats Cards -->
            <el-row :gutter="20" class="mt-16 stats-row">
              <el-col :xs="24" :md="8">
                <el-card class="stat-card stat-card-yellow" shadow="hover">
                  <div class="monthly-tag">Monthly</div>
                  <div class="stat-icon handshake-icon"></div>
                  <el-text tag="h3" class="text-4xl font-bold stat-value">2X</el-text>
                  <el-text tag="p" class="text-sm stat-label">Deals</el-text>
                  <el-text tag="p" class="text-xs stat-desc">More brand collab deals. Higher<br />Collab Value.
                    Greater Stability</el-text>
                </el-card>
              </el-col>

              <el-col :xs="24" :md="8">
                <el-card class="stat-card stat-card-white" shadow="hover">
                  <div class="stat-icon income-icon"></div>
                  <div class="trend-arrow"></div>
                  <el-text tag="h3" class="text-4xl font-bold stat-value">1.5X</el-text>
                  <el-text tag="p" class="text-sm stat-label">Income</el-text>
                  <el-text tag="p" class="text-xs stat-desc">More income</el-text>
                </el-card>
              </el-col>

              <el-col :xs="24" :md="8">
                <el-card class="stat-card stat-card-pink" shadow="hover">
                  <div class="stat-icon time-icon"></div>
                  <div class="down-arrow"></div>
                  <el-text tag="h3" class="text-4xl font-bold stat-value">80%</el-text>
                  <el-text tag="p" class="text-sm stat-label">Time</el-text>
                  <el-text tag="p" class="text-xs stat-desc">less back-and-forth inbox work</el-text>
                  <div class="gmail-icon"></div>
                </el-card>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>

      <!-- No Manager Section -->
      <el-row class="bg-white">
        <el-col :span="24">
          <el-container class="container no-manager-container">
            <el-text class="no-manager-left">
              <el-text tag="h2" class="no-manager-title">
                No Manager?
                <br />No Problem.
                <br />All in Colla.
              </el-text>

              <el-text direction="vertical">
                <el-text tag="p" class="no-manager-desc">
                  Nia Handle your inbox,
                  <br />You focus on creating
                </el-text>
              </el-text>

              <el-text class="hello-bubble">Hello !</el-text>
              <el-image src="/images/Nia.png" class="nia-icon" fit="cover" />
              <el-text class="meet-nia-bubble">Meet Nia</el-text>
            </el-text>

            <el-main class="no-manager-right">
              <div class="meet-nia-wrapper">
                <div class="meet-nia-container">
                  <el-image src="/images/MeetNia.png" class="meet-nia-full-image" />
                </div>
              </div>
            </el-main>
          </el-container>
        </el-col>
      </el-row>

      <!-- Inbox Complexity Section -->
      <el-row class="inbox-complexity-section py-16">
        <el-col :span="24">
          <div class="container">
            <div class="text-center mb-12">
              <el-text tag="h2" class="section-title">
                Inbox complexity is stealing
                <br />your time and money
              </el-text>
            </div>

            <div class="complexity-cards-container">
              <!-- Card 1 - Too many emails -->
              <el-card class="complexity-card" shadow="hover">
                <div class="card-icon">
                  <el-icon>
                    <Notebook />
                  </el-icon>
                </div>
                <el-text tag="h3" class="card-title">
                  Too many emails. Too much wasted time.
                </el-text>
                <el-text tag="p" class="card-description">
                  50+ collab emails hit your inbox daily. Without automation, that's hours lost.
                </el-text>
                <div class="card-image emails-image"></div>
              </el-card>

              <!-- Card Group: Reply + Hours -->
              <div class="card-group">
                <!-- Card 2 - Slow reply -->
                <el-card class="complexity-card" shadow="hover">
                  <div class="card-icon">
                    <el-icon>
                      <Clock />
                    </el-icon>
                  </div>
                  <el-text tag="h3" class="card-title">
                    Every slow reply is a lost chance.
                  </el-text>
                  <div class="chat-bubbles">
                    <div class="chat-bubble">2h</div>
                    <div class="chat-bubble">1h</div>
                  </div>
                </el-card>

                <!-- Card 3 - Hours wasted -->
                <el-card class="complexity-card hours-card" shadow="hover">
                  <div class="hours-overlay">
                    <el-text tag="p" class="hours-text">
                      Creators waste hours on emails — for just a few paid collabs.
                    </el-text>
                    <div class="hours-badge">4 hours/day</div>
                  </div>
                </el-card>
              </div>

              <!-- Card Group: Negotiate + Contracts -->
              <div class="card-group">
                <!-- Card 4 - Negotiate -->
                <el-card class="complexity-card" shadow="hover">
                  <div class="card-icon">
                    <el-icon>
                      <Warning />
                    </el-icon>
                  </div>
                  <el-text tag="h3" class="card-title">
                    Struggle to negotiate? Lose the price you deserve.
                  </el-text>
                  <div class="price-chart">
                    <div class="price-item">
                      <div class="price-label">Low Price</div>
                      <div class="price-line">$40</div>
                      <div class="price-line">$60</div>
                      <div class="price-line">$200</div>
                    </div>
                  </div>
                </el-card>

                <!-- Card 5 - Contracts -->
                <el-card class="complexity-card" shadow="hover">
                  <div class="card-icon">
                    <el-icon>
                      <Document />
                    </el-icon>
                  </div>
                  <el-text tag="h3" class="card-title">
                    Struggle with contracts? Unequal contracts can harm your rights.
                  </el-text>
                  <el-text tag="p" class="card-description">
                    Contract review is time-consuming and error-prone
                  </el-text>
                  <div class="contract-image"></div>
                </el-card>
              </div>

              <!-- Card 6 - Repetition -->
              <el-card class="complexity-card wide-card" shadow="hover">
                <div class="card-icon">
                  <el-icon>
                    <Edit />
                  </el-icon>
                </div>
                <el-text tag="h3" class="card-title">
                  Repetition kills productivity. Automation restores it.
                </el-text>
                <el-text tag="p" class="card-description">
                  Brand deals involve endless repeats—addresses, quotes, media kits. Coolla handles it all in one click.
                </el-text>
                <div class="folder-image"></div>
              </el-card>
            </div>
          </div>
        </el-col>
      </el-row>

      <!-- Smart Email Closer Section -->
      <el-row class="py-16">
        <el-col :span="24">
          <div class="container">
            <div class="text-center mb-12">
              <el-text tag="h2" class="text-3xl font-bold block">
                Nia, The Smart Email Closer
                <br />Work Less, Earn More
              </el-text>
            </div>

            <!-- Features Grid -->
            <div class="space-y-12">
              <!-- Feature 1 -->
              <el-row class="feature-row items-center" :gutter="20">
                <el-col :xs="24" :md="12">
                  <div class="feature-text">
                    <el-text tag="h3" class="text-2xl font-semibold mb-4 block">From Inbox Chaos To Clear Deal
                      Flow</el-text>
                    <el-text tag="p" class="text-gray-600 mb-4 block">Automatically organize and prioritize incoming
                      opportunities</el-text>
                    <el-space direction="vertical" size="small" class="w-full">
                      <div class="flex items-center">
                        <el-icon class="text-primary mr-2">
                          <Check />
                        </el-icon>
                        <span>Smart categorization of brand deals</span>
                      </div>
                      <div class="flex items-center">
                        <el-icon class="text-primary mr-2">
                          <Check />
                        </el-icon>
                        <span>Automated response templates</span>
                      </div>
                    </el-space>
                  </div>
                </el-col>
                <el-col :xs="24" :md="12">
                  <div class="feature-image">
                    <el-image src="/feature-inbox.png" class="rounded-lg shadow-lg"></el-image>
                  </div>
                </el-col>
              </el-row>

              <!-- Feature 2 -->
              <el-row class="feature-row items-center" :gutter="20">
                <el-col :xs="24" :md="12" :order="2" :md-order="1">
                  <div class="feature-image">
                    <el-image src="/feature-personal.png" class="rounded-lg shadow-lg"></el-image>
                  </div>
                </el-col>
                <el-col :xs="24" :md="12" :order="1" :md-order="2">
                  <div class="feature-text">
                    <el-text tag="h3" class="text-2xl font-semibold mb-4 block">Personal Smart Reply, Professional Smart
                      Reply</el-text>
                    <el-text tag="p" class="text-gray-600 mb-4 block">AI-powered responses that sound like you</el-text>
                    <el-space direction="vertical" size="small" class="w-full">
                      <div class="flex items-center">
                        <el-icon class="text-primary mr-2">
                          <Check />
                        </el-icon>
                        <span>Maintain your unique voice and style</span>
                      </div>
                      <div class="flex items-center">
                        <el-icon class="text-primary mr-2">
                          <Check />
                        </el-icon>
                        <span>Professional negotiation assistance</span>
                      </div>
                    </el-space>
                  </div>
                </el-col>
              </el-row>

              <!-- Feature 3 -->
              <el-row class="feature-row items-center" :gutter="20">
                <el-col :xs="24" :md="12">
                  <div class="feature-text">
                    <el-text tag="h3" class="text-2xl font-semibold mb-4 block">Smart Quotes, Improved Prices, Zero
                      Hassle</el-text>
                    <el-text tag="p" class="text-gray-600 mb-4 block">Get the best rates for your
                      collaborations</el-text>
                    <el-space direction="vertical" size="small" class="w-full">
                      <div class="flex items-center">
                        <el-icon class="text-primary mr-2">
                          <Check />
                        </el-icon>
                        <span>Market rate analysis</span>
                      </div>
                      <div class="flex items-center">
                        <el-icon class="text-primary mr-2">
                          <Check />
                        </el-icon>
                        <span>Automated price suggestions</span>
                      </div>
                    </el-space>
                  </div>
                </el-col>
                <el-col :xs="24" :md="12">
                  <div class="feature-image">
                    <el-image src="/feature-quotes.png" class="rounded-lg shadow-lg"></el-image>
                  </div>
                </el-col>
              </el-row>

              <!-- Feature 4 -->
              <el-row class="feature-row items-center" :gutter="20">
                <el-col :xs="24" :md="12" :order="2" :md-order="1">
                  <div class="feature-image">
                    <el-image src="/feature-selection.png" class="rounded-lg shadow-lg"></el-image>
                  </div>
                </el-col>
                <el-col :xs="24" :md="12" :order="1" :md-order="2">
                  <div class="feature-text">
                    <el-text tag="h3" class="text-2xl font-semibold mb-4 block">One Click Sample Selection, No More
                      Endless Searches</el-text>
                    <el-text tag="p" class="text-gray-600 mb-4 block">Quickly find and share your best work</el-text>
                    <el-space direction="vertical" size="small" class="w-full">
                      <div class="flex items-center">
                        <el-icon class="text-primary mr-2">
                          <Check />
                        </el-icon>
                        <span>Portfolio management</span>
                      </div>
                      <div class="flex items-center">
                        <el-icon class="text-primary mr-2">
                          <Check />
                        </el-icon>
                        <span>Customized sample packages</span>
                      </div>
                    </el-space>
                  </div>
                </el-col>
              </el-row>

              <!-- Feature 5 -->
              <el-row class="feature-row items-center" :gutter="20">
                <el-col :xs="24" :md="12">
                  <div class="feature-text">
                    <el-text tag="h3" class="text-2xl font-semibold mb-4 block">Contract? Tag Notes. File? Auto
                      Archived.</el-text>
                    <el-text tag="p" class="text-gray-600 mb-4 block">Keep all your documents organized</el-text>
                    <el-space direction="vertical" size="small" class="w-full">
                      <div class="flex items-center">
                        <el-icon class="text-primary mr-2">
                          <Check />
                        </el-icon>
                        <span>Smart document management</span>
                      </div>
                      <div class="flex items-center">
                        <el-icon class="text-primary mr-2">
                          <Check />
                        </el-icon>
                        <span>Automated filing system</span>
                      </div>
                    </el-space>
                  </div>
                </el-col>
                <el-col :xs="24" :md="12">
                  <div class="feature-image">
                    <el-image src="/feature-contract.png" class="rounded-lg shadow-lg"></el-image>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
      </el-row>

      <!-- Control Section -->
      <el-row class="py-16 gradient-bg text-white">
        <el-col :span="24">
          <div class="container text-center">
            <el-text tag="h2" class="text-3xl font-bold mb-4 block text-white">
              You're <span class="text-white">100%</span>
              <br />in control of everything.
            </el-text>
            <el-text tag="p" class="mb-8 text-white">AI is your assistant, not your replacement.</el-text>
          </div>
        </el-col>
      </el-row>

      <!-- Testimonials Section -->
      <el-row class="py-16">
        <el-col :span="24">
          <div class="container">
            <el-text tag="h2" class="text-3xl font-bold text-center mb-12 block">
              What Do KOLs <span class="emoji">🗣️</span> Say?
            </el-text>

            <el-row :gutter="20">
              <el-col v-for="i in 6" :key="i" :xs="24" :md="12" :lg="8" class="mb-6">
                <el-card class="testimonial-card bg-white p-6 rounded-xl shadow-sm border-0" shadow="hover">
                  <div class="flex items-center mb-4">
                    <el-avatar :size="40" src="/avatar-placeholder.png"></el-avatar>
                    <div class="ml-3">
                      <el-text tag="h4" class="font-semibold">User Name</el-text>
                      <el-text tag="p" class="text-sm text-gray-500">@username</el-text>
                    </div>
                  </div>
                  <el-text tag="p" class="text-gray-700">"Colla has completely transformed how I manage brand
                    collaborations. I'm saving hours every week!"</el-text>
                </el-card>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>

      <!-- FAQ Section -->
      <el-row class="py-16 bg-gray-50">
        <el-col :span="24">
          <div class="container">
            <h2 class="fqa-title" style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif">FQA
            </h2>

            <div class="faq-container">
              <div class="faq-item" :class="{ active: activeFaqItem === 0 }">
                <div class="faq-question" @click="toggleFaq(0)">
                  <span>What is Colla! uesd for?</span>
                  <el-icon class="faq-icon">
                    <Plus v-if="activeFaqItem !== 0" />
                    <Close v-else />
                  </el-icon>
                </div>
                <div class="faq-answer" v-if="activeFaqItem === 0">
                  <p>Colla is an AI-powered tool that helps creators and brands manage collaboration opportunities. It
                    organizes your inbox, automates responses, and helps you negotiate better deals.</p>
                </div>
              </div>

              <div class="faq-item" :class="{ active: activeFaqItem === 1 }">
                <div class="faq-question" @click="toggleFaq(1)">
                  <span>How many team members can I invite to my account?</span>
                  <el-icon class="faq-icon">
                    <Plus v-if="activeFaqItem !== 1" />
                    <Close v-else />
                  </el-icon>
                </div>
                <div class="faq-answer" v-if="activeFaqItem === 1">
                  <p>You may use any tool as long as you submit your work as a PDF file. The brief provides more details
                    on the exact format required.You may use any tool as long as you submit your work as a PDF file. The
                    brief provides more details on the exact format required.</p>
                </div>
              </div>

              <div class="faq-item" :class="{ active: activeFaqItem === 2 }">
                <div class="faq-question" @click="toggleFaq(2)">
                  <span>How does Kin's memory work?</span>
                  <el-icon class="faq-icon">
                    <Plus v-if="activeFaqItem !== 2" />
                    <Close v-else />
                  </el-icon>
                </div>
                <div class="faq-answer" v-if="activeFaqItem === 2">
                  <p>Our AI assistant, Nia, learns from your communication style and preferences to help manage your
                    inbox, draft responses, and negotiate deals on your behalf.</p>
                </div>
              </div>

              <div class="faq-item" :class="{ active: activeFaqItem === 3 }">
                <div class="faq-question" @click="toggleFaq(3)">
                  <span>What tools can I use, and in what format should I submit my work?</span>
                  <el-icon class="faq-icon">
                    <Plus v-if="activeFaqItem !== 3" />
                    <Close v-else />
                  </el-icon>
                </div>
                <div class="faq-answer" v-if="activeFaqItem === 3">
                  <p>The free tier gives you access to basic inbox management features, including email categorization
                    and simple response templates. For more advanced features, consider upgrading to our premium plans.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>

      <!-- CTA Section -->
      <el-row class="py-16 bg-gray-100">
        <el-col :span="24">
          <div class="container text-center">
            <el-text tag="h2" class="text-3xl font-bold mb-6 block">Get Started Now.</el-text>
            <div class="mb-8">
              <el-button type="primary" size="large" class="bg-primary">Sign Up for Free</el-button>
            </div>
            <el-row class="justify-center">
              <el-col v-for="i in 6" :key="i" :xs="4" :sm="4" :md="4" :lg="4" class="flex justify-center">
                <el-avatar :size="60" src="/avatar-placeholder.png"></el-avatar>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </el-main>
  </div>
</template>

<script>
import { Check, Message, Share, Star, Plus, Close, Notebook, Clock, Warning, Document, Edit } from '@element-plus/icons-vue';

export default {
  name: 'HomeView',
  components: {
    Check,
    Instagram: Message,
    Twitter: Share,
    Facebook: Star,
    Plus,
    Close,
    Notebook,
    Clock,
    Warning,
    Document,
    Edit
  },
  data() {
    return {
      activeFaqItem: 1
    };
  },
  methods: {
    toggleFaq(index) {
      this.activeFaqItem = this.activeFaqItem === index ? null : index;
    }
  },
  mounted() {
    // 添加卡片动画效果
    const cards = document.querySelectorAll('.complexity-card');
    cards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';

      setTimeout(() => {
        card.style.transition = 'all 0.5s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 100 * index);
    });
  }
};
</script>

<style scoped>
.home {
  overflow-x: hidden;
}

:deep(.el-main) {
  padding: 0 !important;
}

.bg-primary {
  background-color: var(--primary-color);
}

.text-primary {
  color: var(--primary-color);
}

.hero {
  position: relative;

  /* background: linear-gradient(to right, rgba(255, 248, 245, 0.8), rgba(255, 240, 255, 0.8)); */
}

.emoji {
  font-style: normal;
}

.hero-title {
  overflow: hidden;
  line-height: 1.4;
  color: #1A130E;
  font-size: 86px;
  margin-bottom: 40px;
}

.hero-container {
  position: relative;
  background-image: url('/images/hero_bg.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 40px 20px;
  z-index: 1;
}

.subtitle {
  font-size: 1.125rem;
  color: #666;
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  margin-bottom: 20px;
}

.subtitle .el-image {
  width: 37px;
  height: 37px;
  margin-right: 0.5rem;
}

.fade-in-text {
  display: inline-block;
  opacity: 0;
  animation: fadeIn 0.5s ease-in-out forwards;
}

.fade-in-image {
  opacity: 0;
  animation: fadeIn 0.5s ease-in-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.cta-button {
  width: 356px;
  height: 56px;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;
  border-radius: 12px;
  border: none;
  margin-bottom: 60px;
}

.cta-button:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.stats-row {
  margin-top: 80px;
}

.stat-card {
  position: relative;
  padding: 30px 20px;
  border-radius: 20px;
  border: none;
  height: 200px;
  overflow: visible;
}

.stat-card-yellow {
  background-color: #FFF7C2;
}

.stat-card-white {
  background-color: white;
}

.stat-card-pink {
  background-color: #FFF0FF;
}

.stat-value {
  font-size: 48px;
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
}

.stat-label {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
}

.stat-desc {
  color: #666;
  line-height: 1.4;
}

.monthly-tag {
  position: absolute;
  top: -10px;
  left: 20px;
  background-color: #8B6C47;
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 14px;
}

.stat-icon {
  position: absolute;
  top: 15px;
  right: 15px;
  width: 30px;
  height: 30px;
}

.handshake-icon {
  background-image: url('/images/handshake.png');
  background-size: contain;
  background-repeat: no-repeat;
}

.income-icon {
  background-image: url('/images/money.png');
  background-size: contain;
  background-repeat: no-repeat;
}

.time-icon {
  background-image: url('/images/time.png');
  background-size: contain;
  background-repeat: no-repeat;
}

.trend-arrow {
  position: absolute;
  top: 50px;
  right: 50px;
  width: 80px;
  height: 60px;
  background-image: url('/images/trend-up.png');
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.6;
}

.down-arrow {
  position: absolute;
  bottom: 40px;
  right: 40px;
  width: 60px;
  height: 60px;
  background-image: url('/images/arrow-down.png');
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.6;
}

.gmail-icon {
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  background-image: url('/images/gmail.png');
  background-size: contain;
  background-repeat: no-repeat;
}

.inbox-gradient {
  background: linear-gradient(90deg, #FF6E24 0%, #FF8896 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

.income-gradient {
  background: linear-gradient(90deg, #FF8896 0%, #EF9CF0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

/* Override Element Plus styles to maintain current design */
:deep(.el-card) {
  --el-card-padding: 0;
  overflow: visible;
}

:deep(.el-card__body) {
  padding: 0;
}

:deep(.el-menu--horizontal) {
  border-bottom: none;
}

:deep(.el-menu-item) {
  font-size: 16px;
  color: var(--text-color);
}

:deep(.el-menu-item:hover) {
  color: var(--primary-color);
}

:deep(.el-menu-item.is-active) {
  color: var(--primary-color);
}

:deep(.el-collapse-item__header) {
  font-size: 18px;
  font-weight: 500;
}

:deep(.el-collapse) {
  border: none;
}

:deep(.el-collapse-item) {
  margin-bottom: 8px;
  border: 1px solid #ebeef5;
  border-radius: 8px;
  overflow: hidden;
}

:deep(.el-collapse-item__wrap) {
  border-top: 1px solid #ebeef5;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
  }
}

.gradient-text {
  background: linear-gradient(90deg, #FF6B6B 0%, #FF8E53 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

.gradient-bg {
  background: linear-gradient(90deg, #FF6B6B 0%, #FF8E53 100%);
}

/* FAQ Styles */
.fqa-title {
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 3rem;
  font-family: Tobias TRIAL;
  font-weight: 700;
}

.faq-container {
  max-width: 900px;
  margin: 0 auto;
}

.faq-item {
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  overflow: hidden;
  background-color: white;
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  cursor: pointer;
  font-size: 1.25rem;
  font-weight: 500;
}

.faq-icon {
  font-size: 1.5rem;
  color: #000;
}

.faq-answer {
  position: relative;
  padding: 0 1.5rem 1.5rem;
  color: #6b7280;
  line-height: 1.6;
}

.faq-answer-header {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 0.5rem;
}

.faq-close-icon {
  font-size: 1.25rem;
  cursor: pointer;
  color: #000;
}

.faq-item.active {
  border-color: #d1d5db;
}

/* No Manager Section Styles */
.no-manager-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  position: relative;
  overflow: visible;
  padding-top: 40px;
  padding-bottom: 40px;
  margin-top: 20px;
}

.no-manager-left {
  width: 40%;
  position: relative;
  flex-direction: column;
  padding-bottom: 120px;
}

.no-manager-title {
  font-size: 56px;
  font-weight: 700;
  line-height: 1.1;
  color: #000;
  font-family: 'Tobias TRIAL', Times, serif;
  margin-bottom: 20px;
}

.no-manager-desc {
  font-size: 1.2rem;
  line-height: 1.5;
  color: #1A130E;
  position: relative;
  z-index: 3;
  margin-top: 10px;
}

.nia-icon {
  position: absolute;
  bottom: 50px;
  right: -14px;
  width: 96px;
  height: 110px;
  z-index: 5;
}

.hello-bubble {
  position: absolute;
  bottom: 130px;
  right: 45px;
  background-color: #FE815F;
  color: white;
  padding: 8px 16px;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 500;
  transform: rotate(-30deg);
  z-index: 6;
  white-space: nowrap;
}

.hello-bubble::after {
  content: '';
  position: absolute;
  bottom: -5px;
  right: 20px;
  width: 10px;
  height: 10px;
  background-color: #FE815F;
  transform: rotate(45deg);
  z-index: -1;
}

.no-manager-right {
  position: relative;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 60%;
  z-index: 4;
  padding-top: 15px;
}

.meet-nia-wrapper {
  position: relative;
  width: 100%;
  margin-top: 20px;
  z-index: 900;
}

.meet-nia-bubble {
  position: absolute;
  top: 10px;
  right: -20px;
  background-color: #000;
  color: white;
  padding: 3px 13px;
  border-radius: 15px;
  font-size: 20px;
  transform: rotate(-30deg);
  z-index: 999;
  white-space: nowrap;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.meet-nia-bubble::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 75px;
  width: 12px;
  height: 12px;
  background-color: #000;
  transform: rotate(45deg);
  z-index: 998;
}

.meet-nia-image {
  position: absolute;
  top: -20px;
  left: -40px;
  width: 160px;
  height: auto;
  z-index: 3;
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
}

.meet-nia-container {
  width: 100%;
  border-radius: 16px;
  padding: 0;
  overflow: hidden;
  position: relative;
  z-index: 4;
}

.meet-nia-full-image {
  width: 100%;
  display: block;
  max-height: 443px;
}

.k12-card,
.higher-education-card,
.families-card,
.enterprise-card {
  background-color: white;
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: 450px;
  border: 1px solid #f0f0f0;
}

.k12-card {
  margin-top: 80px;
  background-color: #fff;
}

.higher-education-card,
.families-card,
.enterprise-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background-color: #FF6E24;
}

.higher-education-card .card-title,
.families-card .card-title,
.enterprise-card .card-title {
  color: white;
  margin-bottom: 0;
}

.plus-icon {
  background-color: white;
  border-radius: 50%;
  padding: 4px;
  font-size: 1.2rem;
  color: #000;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 15px;
  display: block;
}

.card-desc {
  font-size: 0.9rem;
  color: #666;
  line-height: 1.5;
  margin-bottom: 15px;
  display: block;
}

.learn-more {
  color: #FF6E24;
  font-weight: 500;
  display: flex;
  align-items: center;
}

.dashboard-card {
  position: absolute;
  top: 80px;
  right: -100px;
  width: 320px;
  background-color: white;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.dashboard-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 20px;
  display: block;
}

.dashboard-label {
  font-size: 0.9rem;
  color: #666;
}

.text-right {
  text-align: right;
}

.dashboard-chart {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.dashboard-number {
  font-size: 3rem;
  font-weight: 700;
  color: #000;
}

@media (max-width: 1200px) {
  .no-manager-container {
    flex-direction: column;
    padding-top: 20px;
  }

  .no-manager-left,
  .no-manager-right {
    width: 100% !important;
  }

  .no-manager-left {
    padding-right: 20px;
    padding-bottom: 150px;
  }

  .no-manager-right {
    padding-left: 20px;
    padding-top: 40px;
  }

  .nia-icon {
    bottom: -70px;
    right: 20px;
  }

  .hello-bubble {
    bottom: 10px;
    right: 80px;
  }

  .meet-nia-bubble {
    top: -20px;
    left: 30px;
    z-index: 999;
  }

  .meet-nia-container {
    margin-top: 30px;
  }

  .meet-nia-full-image {
    margin-left: 0;
    width: 100%;
  }

  .meet-nia-wrapper {
    margin-top: 10px;
  }
}

@media (min-width: 768px) and (max-width: 1200px) {
  .nia-icon {
    bottom: 20px;
    right: 20px;
  }

  .hello-bubble {
    bottom: 80px;
    right: 10px;
  }
}

@media (max-width: 768px) {
  .no-manager-title {
    font-size: 2.5rem;
  }

  .no-manager-desc {
    font-size: 1rem;
  }
}

/* Inbox Complexity Section Styles */
.inbox-complexity-section {
  padding: 80px 0;
  background-color: #f9f9f9;
}

.section-title {
  font-size: 56px;
  font-weight: 700;
  color: #000;
  margin-bottom: 60px;
  display: block;
}

.complexity-cards-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(200px, auto);
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.complexity-card {
  background-color: #fff;
  border-radius: 16px;
  padding: 30px;
  height: 100%;
  transition: all 0.3s ease;
  border: none;
  position: relative;
  overflow: hidden;
}

.complexity-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.card-icon {
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
}

.card-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 16px;
  line-height: 1.3;
  display: block;
}

.card-description {
  font-size: 16px;
  color: #666;
  line-height: 1.5;
  margin-bottom: 20px;
  display: block;
}

.card-group {
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 100%;
}

.wide-card {
  grid-column: span 2;
}

/* First card spans 1 column */
.complexity-cards-container>.complexity-card:first-child {
  grid-column: span 1;
  grid-row: span 2;
}

/* Card groups span 1 column each */
.complexity-cards-container>.card-group:nth-child(2) {
  grid-column: span 1;
  grid-row: span 2;
}

.complexity-cards-container>.card-group:nth-child(3) {
  grid-column: span 1;
  grid-row: span 2;
}

/* Last card spans 3 columns */
.complexity-cards-container>.complexity-card:last-child {
  grid-column: span 3;
  grid-row: span 1;
}

/* Email card specific styles */
.emails-image {
  height: 200px;
  background-image: url('/images/emails-pile.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center bottom;
  margin-top: 20px;
}

/* Chat bubbles for reply card */
.chat-bubbles {
  display: flex;
  margin-top: 20px;
  justify-content: flex-end;
}

.chat-bubble {
  background-color: #f0f0f0;
  border-radius: 16px;
  padding: 8px 16px;
  margin-left: 10px;
  font-size: 14px;
  color: #333;
}

.chat-bubble:first-child {
  background-color: #FF6E24;
  color: white;
}

/* Hours card specific styles */
.hours-card {
  background-color: #F5D0C5;
  background-image: url("data:image/svg+xml,%3Csvg width='400' height='300' viewBox='0 0 400 300' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='300' fill='%23F5D0C5' /%3E%3Cpath d='M200 80C216.569 80 230 66.5685 230 50C230 33.4315 216.569 20 200 20C183.431 20 170 33.4315 170 50C170 66.5685 183.431 80 200 80Z' fill='%23BD8C7D' /%3E%3Cpath d='M150 280C150 230 170 180 200 180C230 180 250 230 250 280' fill='%23BD8C7D' /%3E%3Crect x='160' y='150' width='80' height='60' rx='5' fill='%23555555' /%3E%3Crect x='165' y='155' width='70' height='45' rx='2' fill='%23333333' /%3E%3Crect x='140' y='210' width='120' height='10' rx='5' fill='%23555555' /%3E%3Crect x='100' y='220' width='200' height='20' rx='2' fill='%238B5E3C' /%3E%3Crect x='280' y='180' width='20' height='30' rx='5' fill='%237B3F00' /%3E%3Cpath d='M280 185C280 182.239 282.239 180 285 180H295C297.761 180 300 182.239 300 185V185C300 187.761 297.761 190 295 190H285C282.239 190 280 187.761 280 185V185Z' fill='%237B3F00' /%3E%3Cpath d='M285 180C285 175 290 170 290 170' stroke='%237B3F00' stroke-width='2' /%3E%3C/svg%3E");
  background-size: cover;
  background-position: center;
  min-height: 240px;
  display: flex;
  align-items: flex-end;
  padding: 0;
  overflow: hidden;
}

.hours-overlay {
  background-color: rgba(255, 110, 36, 0.8);
  padding: 20px;
  width: 100%;
  color: white;
}

.hours-text {
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 15px;
  display: block;
}

.hours-badge {
  display: inline-block;
  background-color: #333;
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-weight: 600;
  font-size: 14px;
}

/* Price chart styles */
.price-chart {
  margin-top: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
}

.price-label {
  display: inline-block;
  background-color: #FF6E24;
  color: white;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 14px;
  margin-bottom: 10px;
}

.price-line {
  border-bottom: 1px solid #ddd;
  padding: 8px 0;
  font-size: 16px;
  color: #333;
}

/* Contract image styles */
.contract-image {
  height: 160px;
  background-image: url('/images/contract-folder.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right bottom;
  margin-top: 20px;
}

/* Folder image styles */
.folder-image {
  height: 120px;
  background-image: url('/images/address-folder.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right bottom;
  margin-top: 20px;
}

/* Responsive adjustments */
@media (max-width: 992px) {
  .complexity-cards-container {
    grid-template-columns: 1fr;
  }

  .complexity-cards-container>.complexity-card:first-child,
  .complexity-cards-container>.card-group:nth-child(2),
  .complexity-cards-container>.card-group:nth-child(3),
  .complexity-cards-container>.complexity-card:last-child {
    grid-column: span 1;
    grid-row: auto;
  }

  .section-title {
    font-size: 40px;
  }
}

@media (max-width: 768px) {
  .card-group {
    gap: 16px;
  }

  .complexity-card {
    padding: 20px;
  }

  .card-title {
    font-size: 20px;
  }

  .section-title {
    font-size: 32px;
  }
}
</style>