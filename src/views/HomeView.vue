<template>
  <div class="home">

    <!-- Hero Section -->
    <el-main class="p-0">
      <el-row class="hero py-16">
        <el-col :span="24">
          <div class="container text-center">
            <el-text tag="h1" class="text-5xl font-bold mb-4 block">
              Automate every brand <span class="emoji">🤝</span> collab,
              <br />from <span class="text-blue-500">inbox</span> <span class="emoji">📩</span> to <span class="gradient-text">income</span>
            </el-text>
            <div class="mt-8 mb-16">
              <el-button type="primary" size="large" class="bg-black text-white">Start Your 7 Day Free Trial ($19.99)</el-button>
            </div>
            
            <!-- Stats Cards -->
            <el-row :gutter="20" class="mt-16">
              <el-col :xs="24" :md="8">
                <el-card class="stat-card bg-yellow-50 p-6 rounded-xl relative border-0" shadow="hover">
                  <span class="absolute top-2 right-2 text-xl">🤝</span>
                  <el-text tag="h3" class="text-4xl font-bold">2X</el-text>
                  <el-text tag="p" class="text-sm">Deals</el-text>
                  <el-text tag="p" class="text-xs text-gray-600">More brand collab deals. Higher<br />Collab Value. Greater Stability</el-text>
                </el-card>
              </el-col>
              
              <el-col :xs="24" :md="8">
                <el-card class="stat-card bg-gray-50 p-6 rounded-xl relative border-0" shadow="hover">
                  <span class="absolute top-2 right-2 text-xl">📈</span>
                  <el-text tag="h3" class="text-4xl font-bold">1.5X</el-text>
                  <el-text tag="p" class="text-sm">Income</el-text>
                  <el-text tag="p" class="text-xs text-gray-600">More income</el-text>
                </el-card>
              </el-col>
              
              <el-col :xs="24" :md="8">
                <el-card class="stat-card bg-pink-50 p-6 rounded-xl relative border-0" shadow="hover">
                  <span class="absolute top-2 right-2 text-xl">⏱️</span>
                  <el-text tag="h3" class="text-4xl font-bold">80%</el-text>
                  <el-text tag="p" class="text-sm">Time</el-text>
                  <el-text tag="p" class="text-xs text-gray-600">less back-and-forth inbox work</el-text>
                </el-card>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>

      <!-- No Manager Section -->
      <el-row class="py-16 bg-white">
        <el-col :span="24">
          <div class="container">
            <div class="text-center mb-12">
              <el-text tag="h2" class="text-3xl font-bold mb-2 block">
                No Manager? <span class="bg-black text-white px-2 py-1 rounded-lg">👍</span>
                <br />No Problem.
                <br />AI in Colla.
              </el-text>
              <el-text tag="p" class="text-gray-600 mt-4 block">
                All-in-one solution for creators and brands
              </el-text>
            </div>
            
            <el-row :gutter="20">
              <el-col :xs="24" :md="8">
                <div class="dashboard-preview">
                  <el-image src="/dashboard1.png" fit="cover" class="rounded-lg shadow-lg"></el-image>
                </div>
              </el-col>
              <el-col :xs="24" :md="16">
                <div class="dashboard-preview">
                  <el-image src="/dashboard2.png" fit="cover" class="rounded-lg shadow-lg"></el-image>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>

      <!-- Inbox Complexity Section -->
      <el-row class="py-16 bg-gray-50">
        <el-col :span="24">
          <div class="container">
            <div class="text-center mb-12">
              <el-text tag="h2" class="text-3xl font-bold block">
                Inbox complexity is stealing
                <br />your time and money
              </el-text>
            </div>
            
            <el-row :gutter="20">
              <el-col :xs="24" :md="8">
                <el-card class="feature-card bg-white p-6 rounded-xl shadow-sm border-0" shadow="hover">
                  <div class="mb-4">
                    <el-image src="/feature1.png" class="w-full rounded-lg"></el-image>
                  </div>
                  <el-text tag="h3" class="text-xl font-semibold mb-2 block">Too many emails, too little time</el-text>
                  <el-text tag="p" class="text-gray-600">Manage all your brand deals in one place</el-text>
                </el-card>
              </el-col>
              
              <el-col :xs="24" :md="8">
                <el-card class="feature-card bg-white p-6 rounded-xl shadow-sm border-0" shadow="hover">
                  <div class="mb-4">
                    <el-image src="/feature2.png" class="w-full rounded-lg"></el-image>
                  </div>
                  <el-text tag="h3" class="text-xl font-semibold mb-2 block">Lost opportunities</el-text>
                  <el-text tag="p" class="text-gray-600">Never miss a potential collaboration again</el-text>
                </el-card>
              </el-col>
              
              <el-col :xs="24" :md="8">
                <el-card class="feature-card bg-white p-6 rounded-xl shadow-sm border-0" shadow="hover">
                  <div class="mb-4">
                    <el-image src="/feature3.png" class="w-full rounded-lg"></el-image>
                  </div>
                  <el-text tag="h3" class="text-xl font-semibold mb-2 block">Disorganized workflow</el-text>
                  <el-text tag="p" class="text-gray-600">Streamline your entire process</el-text>
                </el-card>
              </el-col>
            </el-row>
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
                    <el-text tag="h3" class="text-2xl font-semibold mb-4 block">From Inbox Chaos To Clear Deal Flow</el-text>
                    <el-text tag="p" class="text-gray-600 mb-4 block">Automatically organize and prioritize incoming opportunities</el-text>
                    <el-space direction="vertical" size="small" class="w-full">
                      <div class="flex items-center">
                        <el-icon class="text-primary mr-2"><Check /></el-icon>
                        <span>Smart categorization of brand deals</span>
                      </div>
                      <div class="flex items-center">
                        <el-icon class="text-primary mr-2"><Check /></el-icon>
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
                    <el-text tag="h3" class="text-2xl font-semibold mb-4 block">Personal Smart Reply, Professional Smart Reply</el-text>
                    <el-text tag="p" class="text-gray-600 mb-4 block">AI-powered responses that sound like you</el-text>
                    <el-space direction="vertical" size="small" class="w-full">
                      <div class="flex items-center">
                        <el-icon class="text-primary mr-2"><Check /></el-icon>
                        <span>Maintain your unique voice and style</span>
                      </div>
                      <div class="flex items-center">
                        <el-icon class="text-primary mr-2"><Check /></el-icon>
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
                    <el-text tag="h3" class="text-2xl font-semibold mb-4 block">Smart Quotes, Improved Prices, Zero Hassle</el-text>
                    <el-text tag="p" class="text-gray-600 mb-4 block">Get the best rates for your collaborations</el-text>
                    <el-space direction="vertical" size="small" class="w-full">
                      <div class="flex items-center">
                        <el-icon class="text-primary mr-2"><Check /></el-icon>
                        <span>Market rate analysis</span>
                      </div>
                      <div class="flex items-center">
                        <el-icon class="text-primary mr-2"><Check /></el-icon>
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
                    <el-text tag="h3" class="text-2xl font-semibold mb-4 block">One Click Sample Selection, No More Endless Searches</el-text>
                    <el-text tag="p" class="text-gray-600 mb-4 block">Quickly find and share your best work</el-text>
                    <el-space direction="vertical" size="small" class="w-full">
                      <div class="flex items-center">
                        <el-icon class="text-primary mr-2"><Check /></el-icon>
                        <span>Portfolio management</span>
                      </div>
                      <div class="flex items-center">
                        <el-icon class="text-primary mr-2"><Check /></el-icon>
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
                    <el-text tag="h3" class="text-2xl font-semibold mb-4 block">Contract? Tag Notes. File? Auto Archived.</el-text>
                    <el-text tag="p" class="text-gray-600 mb-4 block">Keep all your documents organized</el-text>
                    <el-space direction="vertical" size="small" class="w-full">
                      <div class="flex items-center">
                        <el-icon class="text-primary mr-2"><Check /></el-icon>
                        <span>Smart document management</span>
                      </div>
                      <div class="flex items-center">
                        <el-icon class="text-primary mr-2"><Check /></el-icon>
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
                  <el-text tag="p" class="text-gray-700">"Colla has completely transformed how I manage brand collaborations. I'm saving hours every week!"</el-text>
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
            <el-text tag="h2" class="text-3xl font-bold text-center mb-12 block">FAQ</el-text>
            
            <el-collapse>
              <el-collapse-item title="What is Colla and how does it help me manage my inbox?" name="1">
                <el-text tag="p">Colla is an AI-powered tool that helps creators and brands manage collaboration opportunities. It organizes your inbox, automates responses, and helps you negotiate better deals.</el-text>
              </el-collapse-item>
              
              <el-collapse-item title="How does the AI assistant work?" name="2">
                <el-text tag="p">Our AI assistant, Nia, learns from your communication style and preferences to help manage your inbox, draft responses, and negotiate deals on your behalf.</el-text>
              </el-collapse-item>
              
              <el-collapse-item title="What can I do with the free tier?" name="3">
                <el-text tag="p">The free tier gives you access to basic inbox management features, including email categorization and simple response templates.</el-text>
              </el-collapse-item>
              
              <el-collapse-item title="How safe is my data with Colla?" name="4">
                <el-text tag="p">We take data security seriously. All your data is encrypted and we never share your information with third parties without your explicit permission.</el-text>
              </el-collapse-item>
            </el-collapse>
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

      <!-- Footer -->
      <el-row class="py-8 bg-white border-t">
        <el-col :span="24">
          <div class="container">
            <div class="flex justify-between items-center">
              <div class="logo">
                <el-image src="/logo.png" alt="Colla Logo" class="h-6"></el-image>
              </div>
              <div class="text-sm text-gray-500">
                © 2023 Colla. All rights reserved.
              </div>
              <div class="flex space-x-4">
                <a href="#" class="text-gray-400 hover:text-gray-600">
                  <el-icon><Instagram /></el-icon>
                </a>
                <a href="#" class="text-gray-400 hover:text-gray-600">
                  <el-icon><Twitter /></el-icon>
                </a>
                <a href="#" class="text-gray-400 hover:text-gray-600">
                  <el-icon><Facebook /></el-icon>
                </a>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-main>
  </div>
</template>

<script>
import { Check, Message, Share, Star } from '@element-plus/icons-vue';

export default {
  name: 'HomeView',
  components: {
    Check,
    Instagram: Message,
    Twitter: Share,
    Facebook: Star
  },
  data() {
    return {
      
    };
  },
  mounted() {
    // You can add animations here using GSAP
  }
};
</script>

<style scoped>
.home {
  overflow-x: hidden;
}

.bg-primary {
  background-color: var(--primary-color);
}

.text-primary {
  color: var(--primary-color);
}

.hero {
  position: relative;
}

.emoji {
  font-style: normal;
}

.stat-card {
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
}

.feature-row {
  transition: all 0.3s ease;
}

.feature-image img {
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
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
</style>