<template>
  <div class="home">
    <!-- Hero Section -->
    <el-main>
      <el-row class="hero " :gutter="24">
        <el-col :span="24">
          <div class="container text-center hero-container">
            <el-text class="subtitle">
              <el-image src="/public/images/Nia.png" :width="32" :height="37" class="align-middle mr-2" />Influencer
              collab AI agent
            </el-text>
            <el-text tag="h1" class="text-5xl font-bold mb-4 block hero-title font-TobiasTRIAL">
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
            <div class="mt-8 mb-16 font-TobiasTRIAL">
              <el-button size="large" class="cta-button bg-black text-white">Start Your 7 Day Free Trial
                ($19.99)</el-button>
            </div>

            <!-- Stats Cards -->
            <el-row :gutter="20" class="mt-16 stats-row" style="margin-top: 20%;">
              <el-col :xs="24" :md="8"
                style="background-image: url('/images/2x.png'); background-size: contain; background-repeat: no-repeat; background-position: center; min-height: 240px;">
                <!-- <el-card class="stat-card stat-card-yellow" shadow="hover">
                  <div class="monthly-tag">Monthly</div>
                  <div class="stat-icon handshake-icon"></div>
                  <el-text tag="h3" class="text-4xl font-bold stat-value">2X</el-text>
                  <el-text tag="p" class="text-sm stat-label">Deals</el-text>
                  <el-text tag="p" class="text-xs stat-desc">More brand collab deals. Higher<br />Collab Value.
                    Greater Stability</el-text>
                </el-card> -->
              </el-col>

              <el-col :xs="24" :md="8"
                style="margin-top: -28%; background-image: url('/images/1.5x.png'); background-size: contain; background-repeat: no-repeat; background-position: center; min-height: 240px;">
                <!-- <el-card class="stat-card stat-card-white" shadow="hover">
                  <div class="stat-icon income-icon"></div>
                  <div class="trend-arrow"></div>
                  <el-text tag="h3" class="text-4xl font-bold stat-value">1.5X</el-text>
                  <el-text tag="p" class="text-sm stat-label">Income</el-text>
                  <el-text tag="p" class="text-xs stat-desc">More income</el-text>
                </el-card> -->
              </el-col>

              <el-col :xs="24" :md="8"
                style="background-image: url('/images/80%.png'); background-size: contain; background-repeat: no-repeat; background-position: center; min-height: 240px;">
                <!-- <el-card class="stat-card stat-card-pink" shadow="hover">
                  <div class="stat-icon time-icon"></div>
                  <div class="down-arrow"></div>
                  <el-text tag="h3" class="text-4xl font-bold stat-value">80%</el-text>
                  <el-text tag="p" class="text-sm stat-label">Time</el-text>
                  <el-text tag="p" class="text-xs stat-desc">less back-and-forth inbox work</el-text>
                  <div class="gmail-icon"></div>
                </el-card> -->
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
              <el-text tag="h2" class="no-manager-title font-TobiasTRIAL">
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
                  <div ref="lottieContainer" class="meet-nia-full-image"></div>
                </div>
              </div>
            </el-main>
          </el-container>
        </el-col>
      </el-row>

      <!-- Inbox Complexity Section -->
      <el-row class="inbox-complexity-section ">
        <el-col :span="24">
          <div class="container">
            <div class="text-center mb-5 font-TobiasTRIAL">
              <el-text tag="h2" class="section-title">
                Inbox complexity is stealing
                <br />your time and money
              </el-text>
            </div>
            <el-row :align="24" style="height: 100%;">
              <el-col :span="16">
                <el-col :span="24" style="display: flex; height: 57%;">
                  <el-col :span="12" style="height: 100%;">
                    <!-- Card 1 - Too many emails -->
                    <el-card class="complexity-card" shadow="hover"
                      style="height: 100%;display: flex; flex-direction: column;min-height: 430px;">
                      <div class="card-icon ">
                        <el-image src="/images/notebook.png" style="width: 20px;height: 20px;" />
                        <el-text tag="h3" class="card-title font-TobiasTRIAL">
                          Too many emails. Too<br /> much wasted time.
                        </el-text>
                        <el-text tag="p" class="card-description">
                          50+ collab emails hit your inbox daily.<br /> Without automation, that's hours lost.
                        </el-text>
                      </div>
                      <el-image src="/images/emails.png" style="width: 100%;height: 57%;" />
                      <!-- <div class="card-image emails-image" style="margin-top: auto;"></div> -->
                    </el-card>
                  </el-col>
                  <el-col :span="12" style="display: flex; flex-direction: column;height: 100%;">
                    <!-- Card 2 - Slow reply -->
                    <el-card class="complexity-card" shadow="hover" style="height: 45%;min-height: 180px; ">
                      <div class="card-icon">
                        <el-image src="/images/clock.png" style="width: 20px;height: 20px;" />
                        <div style="display: flex;">
                          <el-text tag="h3" class="card-title font-TobiasTRIAL">
                            Every slow reply is <br />a lost chance.
                          </el-text>
                          <el-image src="/images/hours.png"
                            style="width: 20%;height:20%;margin-top: -20px;margin-left: 20px;" class="chat-bubbles" />
                        </div>
                      </div>
                    </el-card>
                    <!-- Card 3 - Hours wasted -->
                    <el-card class="complexity-card hours-card" shadow="hover"
                      style="height: 51%;margin-top: 20px;min-height: 230px;">

                    </el-card>
                  </el-col>
                </el-col>
                <el-col :span="24" style="height: 40%;margin-top: 25px;">
                  <!-- Card 6 - Repetition -->
                  <el-card class="complexity-card wide-card" shadow="hover"
                    style="height: 97%; display: flex; flex-direction: column;">
                    <div class="card-icon">
                      <el-image src="/images/pencil.png" style="width: 20px;height: 20px;" />
                      <el-text tag="h3" class="card-title font-TobiasTRIAL">
                        Repetition kills productivity.<br /> Automation restores it.
                      </el-text>
                      <div style="display: flex;margin-top: -20px;">
                        <el-text tag="p" class="card-description">
                          Brand deals involve endless repeats—addresses, quotes, media
                          <br /> kits. Coolla handles it all in
                          one
                          click.
                        </el-text>
                        <el-image src="/images/Address.png" style="width: 20%;height:20%;margin-left:20%;" />
                      </div>
                    </div>
                  </el-card>
                </el-col>
              </el-col>
              <el-col :span="8" style="display: flex;flex-direction: column;height: 100%;">
                <el-card class="complexity-card " shadow="hover" style="height: 40%;min-height: 356px;">
                  <div class="card-icon">
                    <el-image src="/images/warning.png" style="width: 20px;height: 20px;" />
                    <el-text tag="h3" class="card-title font-TobiasTRIAL">
                      Struggle to negotiate?
                      <br /> Lose the price you deserve.
                    </el-text>

                  </div>
                  <el-row style="justify-content: center;align-items: center;margin-top: 10%;">
                    <el-image src="/images/lowPrice.png" style="width: 50%;height: 20%;" />
                  </el-row>

                </el-card>
                <!-- Card 5 - Contracts -->
                <el-card class="complexity-card" shadow="hover" style="height: 60%;margin-top: 20px;min-height: 360px;">
                  <div class="card-icon">
                    <el-image src="/images/document.png" style="width: 20px;height: 20px;" />
                    <el-text tag="h3" class="card-title font-TobiasTRIAL">
                      Struggle with contracts?<br />
                      Unequal contracts can<br />
                      harm your rights.
                    </el-text>
                    <div style="display: flex;margin-top: -40px;">
                      <el-text tag="p" class="card-description">
                        Contract review is<br />
                        time-consuming<br />
                        and error-prone
                      </el-text>
                      <el-image src="/images/contract.png" style="width: 30%;height: 20%;margin-left:20%;" />
                    </div>
                  </div>
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
            <div class="text-center mb-5 font-TobiasTRIAL">
              <el-text tag="h2" class="section-title">
                Nia, The Smart Email Closer
                <br />Work Less, Earn More
              </el-text>
            </div>
            <!-- Features Grid -->
            <div ref="smartlottieContainer" class="meet-nia-full-image"></div>
            <div ref="smartlottieContainer2" class="meet-nia-full-image"></div>
            <el-image src="/images/smart3.png" class="meet-nia-full-image"></el-image>
            <el-image src="/images/smart4.png" class="meet-nia-full-image"></el-image>
            <el-image src="/images/smart6.png" class="meet-nia-full-image"></el-image>

          </div>
          <el-text tag="p" class="text-center mb-5 font-TobiasTRIAL gradient-text-3color ">
            <el-image src="/images/miniNia.png" class ="niasmall"/>
            Stay tuned for more…
          </el-text>
        </el-col>
      </el-row>

      <!-- Control Section -->
      <el-row class="py-16 control-section">
        <el-col :span="24">

          <el-image src="/public/images/controlEverything.png" class="full-width-image" fit="cover"></el-image>

        </el-col>
      </el-row>

      <!-- Testimonials Section (2-row Infinite Seamless Carousel) -->
      <el-row class="py-16 testimonials-section">
        <el-col :span="24">
          <div class="testimonials-container">
            <el-text tag="h2" class="text-3xl font-bold text-center mb-12 block font-TobiasTRIAL"
              style="color: black;font-size: 50px">
              What Do KOLs <img src="/images/img.png" alt="KOL"
                style="display:inline-block;vertical-align:middle;height:1em;margin:0 4px;" /> Say?
            </el-text>
            <div class="testimonial-carousel-2row-wrapper">
              <!-- 第一行：从右往左滚动 -->
              <div class="testimonial-carousel-2row" @mouseenter="pauseCarousel" @mouseleave="resumeCarousel">
                <div class="testimonial-carousel-track" :style="{ transform: `translateX(-${translateX1}px)` }">
                  <div v-for="(item, idx) in row1Data" :key="idx" class="testimonial-card-custom2">
                    <div class="flex items-center mb-2">
                      <el-avatar :size="40" :src="item.avatar"></el-avatar>
                      <div class="ml-3">
                        <el-text tag="h4" class="font-semibold" style="font-size: 14px;color: #1A130E">{{ item.name
                        }}</el-text>
                        <el-text tag="p" class="text-sm text-gray-500" style="font-size: 12px;">{{ item.email
                        }}</el-text>
                      </div>
                    </div>
                    <el-text tag="p" class="text-gray-700 mb-2 testimonial-content"
                      style="color:#48423e; font-size: 14px;">{{ item.content }}</el-text>
                    <div class="flex items-center justify-between mt-4">
                      <div>
                        <div class="text-xs text-gray-500 mb-1">Co-branding</div>
                        <div class="brand-stack">
                          <div v-for="(logo, i) in item.coBranding" :key="i" class="brand-stack-img"
                            :style="{ zIndex: 10 - i, left: `${i * 18}px` }">
                            <img :src="logo" />
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="text-xs text-gray-500 mb-1">incomes</div>
                        <div class="text-green-500 font-bold text-base" style="font-size: 16px;">+${{ item.incomes }}
                        </div>
                      </div>
                      <div>
                        <div class="text-xs text-gray-500 mb-1">Processing time</div>
                        <div class="text-black font-bold text-base" style="font-size: 16px;">-{{ item.processingTime }}%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 第二行：从左往右滚动 -->
              <div class="testimonial-carousel-2row" @mouseenter="pauseCarousel" @mouseleave="resumeCarousel">
                <div class="testimonial-carousel-track" :style="{ transform: `translateX(-${translateX2}px)` }">
                  <div v-for="(item, idx) in row2Data" :key="idx" class="testimonial-card-custom2">
                    <div class="flex items-center mb-2">
                      <el-avatar :size="40" :src="item.avatar"></el-avatar>
                      <div class="ml-3">
                        <el-text tag="h4" class="font-semibold" style="font-size: 14px;color: #1A130E">{{ item.name
                        }}</el-text>
                        <el-text tag="p" class="text-sm text-gray-500" style="font-size: 12px;">{{ item.email
                        }}</el-text>
                      </div>
                    </div>
                    <el-text tag="p" class="text-gray-700 mb-2 testimonial-content"
                      style="color:#48423e; font-size: 14px;">{{ item.content }}</el-text>
                    <div class="flex items-center justify-between mt-4">
                      <div>
                        <div class="text-xs text-gray-500 mb-1">Co-branding</div>
                        <div class="brand-stack">
                          <div v-for="(logo, i) in item.coBranding" :key="i" class="brand-stack-img"
                            :style="{ zIndex: 10 - i, left: `${i * 18}px` }">
                            <img :src="logo" />
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="text-xs text-gray-500 mb-1">incomes</div>
                        <div class="text-green-500 font-bold text-base" style="font-size: 16px;">+${{ item.incomes }}
                        </div>
                      </div>
                      <div>
                        <div class="text-xs text-gray-500 mb-1">Processing time</div>
                        <div class="text-black font-bold text-base" style="font-size: 16px;">-{{ item.processingTime }}%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
      <el-row class="cta-section">
        <el-col :span="24">
          <div class="cta-container">
            <el-button type="primary" size="large" class="cta-button">Start Your 7-Day Free Trial ($19.9)</el-button>
          </div>
        </el-col>
      </el-row>
    </el-main>
  </div>
</template>

<script>
import { Check, Message, Share, Star, Plus, Close, Notebook, Clock, Warning, Document, Edit } from '@element-plus/icons-vue';
import lottie from 'lottie-web';

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
      activeFaqItem: 1,
      lottieAnimation: null,
      smartLottieAnimation: null,
      smartLottieAnimation2: null,
      currentAnimationIndex: 0,
      smartCurrentAnimationIndex: 0,
      smartCurrentAnimationIndex2: 0,
      animationFiles: ['/分镜1.json', '/分镜2.json', '/分镜3.json', '/分镜4.json', '/分镜5.json', '/分镜6.json',],
      smartAnimationFiles: ['/Clear-Deal-Flow.json'],
      smartAnimationFiles2: ['/smart-replied.json'],
      row1Testimonials: [
        {
          name: 'Jerome Bell',
          email: 'jerome.bell@gmail.com',
          content: 'Colla has saved me a lot of time, and brand cooperation has become well-organized!',
          avatar: '/co-branding/1.png',
          coBranding: ['/img/1.png', '/img/2.png', '/img/3.png'],
          incomes: 492,
          processingTime: 50
        },
        {
          name: 'Wade Warren',
          email: 'wade.fox@gmail.com',
          content: 'There used to be too many emails, but now everything is automated and my income has also increased!',
          avatar: '/co-branding/2.png',
          coBranding: ['/img/4.png', '/img/5.png', '/img/6.png', '/img/7.png'],
          incomes: 492,
          processingTime: 63
        },
        {
          name: 'Jane Cooper',
          email: 'Jane.cc@gmail.com',
          content: 'Colla makes my collaboration process more efficient. I highly recommend it to every creator!',
          avatar: '/co-branding/3.png',
          coBranding: ['/img/8.png', '/img/9.png'],
          incomes: 122,
          processingTime: 53
        },
        {
          name: 'Floyd Miles',
          email: 'Floyd.miles@gmail.com',
          content: 'The automatic reply and contract management are extremely convenient. Highly recommended!',
          avatar: '/co-branding/4.png',
          coBranding: ['/img/10.png', '/img/11.png', '/img/1.png', '/img/2.png'],
          incomes: 492,
          processingTime: 63
        },
        {
          name: 'Leslie Alexander',
          email: 'Leslie.aa@gmail.com',
          content: 'You no longer have to worry about missing out on important collaborations. Colla is simply amazing!',
          avatar: '/co-branding/5.png',
          coBranding: ['/img/3.png', '/img/4.png'],
          incomes: 122,
          processingTime: 53
        }
      ],
      row2Testimonials: [
        {
          name: 'Cody Fisher',
          email: 'Cody.cc@gmail.com',
          content: 'Brand management and revenue statistics are clearly presented, and efficiency has significantly improved.',
          avatar: '/co-branding/6.png',
          coBranding: ['/img/5.png', '/img/6.png'],
          incomes: 122,
          processingTime: 53
        },
        {
          name: 'Jenny Wilson',
          email: 'jenny.wilson@gmail.com',
          content: 'Colla\'s automation features allow me to have more time to focus on my creative work.',
          avatar: '/co-branding/7.png',
          coBranding: ['/img/7.png', '/img/8.png', '/img/9.png'],
          incomes: 320,
          processingTime: 40
        },
        {
          name: 'Kristin Watson',
          email: 'kristin.watson@gmail.com',
          content: 'One-click management of cooperative brands, with processing speed significantly enhanced!',
          avatar: '/co-branding/8.png',
          coBranding: ['/img/10.png', '/img/11.png', '/img/1.png', '/img/2.png'],
          incomes: 600,
          processingTime: 70
        },
        {
          name: 'Guy Hawkins',
          email: 'guy.hawkins@gmail.com',
          content: 'Colla has made our teamwork more smooth and reliable.',
          avatar: '/co-branding/9.png',
          coBranding: ['/img/3.png', '/img/4.png'],
          incomes: 210,
          processingTime: 35
        },
        {
          name: 'Brooklyn Simmons',
          email: 'brooklyn.simmons@gmail.com',
          content: 'User-friendly interface, powerful functions, and fully automated cooperation process!',
          avatar: '/co-branding/10.png',
          coBranding: ['/img/5.png', '/img/6.png', '/img/7.png'],
          incomes: 350,
          processingTime: 45
        }
      ],
      translateX1: 0,
      translateX2: 0,
      row1Data: [],
      row2Data: [],
      isCarouselPaused: false,
      cardWidth: 374, // 卡片宽度 + margin
      animationSpeed: 1, // 动画速度
    };
  },
  methods: {
    toggleFaq(index) {
      this.activeFaqItem = this.activeFaqItem === index ? null : index;
    },
    initLottieAnimation() {
      // 清除之前的动画实例
      if (this.lottieAnimation) {
        this.lottieAnimation.destroy();
      }

      // 加载当前动画
      const animationFile = this.animationFiles[this.currentAnimationIndex];

      this.lottieAnimation = lottie.loadAnimation({
        container: this.$refs.lottieContainer,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: animationFile,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice', // 保持宽高比并填充容器
          clearCanvas: true
        }
      });
      // 添加一个短暂的延迟，确保DOM完全更新
      setTimeout(() => {
        if (this.lottieAnimation) {
          this.lottieAnimation.resize(); // 强制重新计算尺寸
        }
      }, 50);
      // 监听动画完成事件
      this.lottieAnimation.addEventListener('complete', () => {
        // 在切换动画之前添加短暂的延迟
        setTimeout(() => {
          this.currentAnimationIndex = (this.currentAnimationIndex + 1) % this.animationFiles.length;
          this.initLottieAnimation();
        }, 100);
      });
    },
    initSmartLottieAnimation() {
      // 清除之前的动画实例
      if (this.smartLottieAnimation) {
        this.smartLottieAnimation.destroy();
      }

      // 加载当前动画
      const animationFile = this.smartAnimationFiles[this.smartCurrentAnimationIndex];

      this.smartLottieAnimation = lottie.loadAnimation({
        container: this.$refs.smartlottieContainer,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: animationFile,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice', // 保持宽高比并填充容器
          clearCanvas: true
        }
      });
      // 添加一个短暂的延迟，确保DOM完全更新
      setTimeout(() => {
        if (this.smartLottieAnimation) {
          this.smartLottieAnimation.resize(); // 强制重新计算尺寸
        }
      }, 50);
      // 监听动画完成事件
      this.smartLottieAnimation.addEventListener('complete', () => {
        // 在切换动画之前添加短暂的延迟
        setTimeout(() => {
          this.smartCurrentAnimationIndex = (this.smartCurrentAnimationIndex + 1) % this.smartAnimationFiles.length;
          this.initSmartLottieAnimation();
        }, 100);
      });
    },
    initSmartLottieAnimation2() {
      // 清除之前的动画实例
      if (this.smartLottieAnimation2) {
        this.smartLottieAnimation2.destroy();
      }

      // 加载当前动画
      const animationFile = this.smartAnimationFiles2[this.smartCurrentAnimationIndex2];

      this.smartLottieAnimation2 = lottie.loadAnimation({
        container: this.$refs.smartlottieContainer2,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: animationFile,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice', // 保持宽高比并填充容器
          clearCanvas: true
        }
      });
      // 添加一个短暂的延迟，确保DOM完全更新
      setTimeout(() => {
        if (this.smartLottieAnimation2) {
          this.smartLottieAnimation2.resize(); // 强制重新计算尺寸
        }
      }, 50);
      // 监听动画完成事件
      this.smartLottieAnimation2.addEventListener('complete', () => {
        // 在切换动画之前添加短暂的延迟
        setTimeout(() => {
          this.smartCurrentAnimationIndex2 = (this.smartCurrentAnimationIndex2 + 1) % this.smartAnimationFiles2.length;
          this.initSmartLottieAnimation();
        }, 100);
      });
    },
    startSeamlessScroll() {
      // 为每行创建三组数据，确保无缝衔接
      this.row1Data = [...this.row1Testimonials, ...this.row1Testimonials, ...this.row1Testimonials];
      this.row2Data = [...this.row2Testimonials, ...this.row2Testimonials, ...this.row2Testimonials];

      // 设置初始位置
      this.translateX1 = 0;
      // 第二行从最右边开始
      this.translateX2 = this.cardWidth * this.row2Testimonials.length;

      // 启动动画
      this.animateSeamless();
    },
    animateSeamless() {
      if (!this.isCarouselPaused) {
        // 第一行从右向左滚动
        this.translateX1 += this.animationSpeed;
        // 第二行从左向右滚动
        this.translateX2 -= this.animationSpeed;

        // 计算一组数据的宽度
        const groupWidth1 = this.cardWidth * this.row1Testimonials.length;
        const groupWidth2 = this.cardWidth * this.row2Testimonials.length;

        // 当第一行滚动超过一组数据时，重置位置
        if (this.translateX1 >= groupWidth1) {
          this.translateX1 = 0;
        }

        // 当第二行滚动到最左边时，重置到最右边
        if (this.translateX2 <= 0) {
          this.translateX2 = groupWidth2;
        }
      }
      requestAnimationFrame(this.animateSeamless);
    },
    pauseCarousel() {
      this.isCarouselPaused = true;
    },
    resumeCarousel() {
      this.isCarouselPaused = false;
    },
  },
  mounted() {
    // 初始化 Lottie 动画
    this.$nextTick(() => {
      this.initLottieAnimation();
      this.initSmartLottieAnimation();
      this.initSmartLottieAnimation2();
    });
    // 启动两行无感轮播
    this.$nextTick(() => {
      this.startSeamlessScroll();
    });
  },
  beforeUnmount() {
    // 清理动画
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
  },
};
</script>

<style scoped>
.home {
  overflow-x: hidden;
}

:deep(.el-main) {
  padding: 0 !important;
  overflow: hidden;
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
  font-size: 80px;
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
.niasmall{

  transform: translateY(65px);
}
.full-width-image {
  width: 100%;
  height: auto;
  display: block;
  padding-top: 4rem;
}

.control-section {
  padding-top: 20rem;
}

.cta-button {
  width: 430px;
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
  box-shadow: 0px 0px 50px 0px #ff6d247c;
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
  z-index: 20;
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
  height: 443px;
}

.meet-nia-full-image {
  width: 100%;
  display: block;
  background-color: transparent;
  margin-top: 32px;
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
  color: #1A130E;
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
  padding: 20px 0;
  padding-bottom: 50px;
}

.section-title {
  font-size: 56px;
  font-weight: 700;
  color: #000;
  display: block;
}

.complexity-cards-container {
  max-width: 1200px;
  margin: 0 auto;
}


.complexity-card {
  background-color: #f9f9f9;
  border: 1px solid #D6D7DB;
  border-radius: 16px;
  transition: all 0.3s ease;
  position: relative;
  margin-right: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08) !important;
}

.complexity-card :deep(.el-card__body) {
  height: 100%;
}

.complexity-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.card-icon {
  font-size: 24px;
  color: #333;
  padding: 20px 40px 0 40px;
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


/* Email card specific styles */
/* .emails-image {
  height: 180px;
  margin-top: 20px;
  background-image: url('/images/emails.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center bottom;
  overflow: visible;
} */

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
  background-image: url("/images/4days.png");
  background-size: cover;
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


/* .price-label {
  display: inline-block;
  background-color: #FF6E24;
  color: white;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 14px;
  margin-bottom: 10px;
} */


/* Contract image styles */
.contract-image {
  height: 120px;
  margin-top: 20px;
  background-image: url('/images/contract-folder.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right bottom;
  overflow: visible;
}

/* Folder image styles */
.folder-image {
  height: 100px;
  margin-top: 20px;
  background-image: url('/images/address-folder.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right bottom;
  overflow: visible;
}

.gradient-text-3color {
  background: linear-gradient(90deg, #FF6E24 0%, #FF8896 50%, #EF9CF0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  align-items: center;
  font-size: 32px;
  font-weight: 600;
}

/* Responsive adjustments */
@media (max-width: 992px) {

  .section-title {
    font-size: 40px;
  }
}

@media (max-width: 768px) {
  .card-group {
    gap: 16px;
  }


  .card-title {
    font-size: 20px;
  }

  .section-title {
    font-size: 32px;
  }
}

.testimonial-carousel-2row-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.testimonial-carousel-2row {
  width: 100%;
  overflow: hidden;
  position: relative;
  user-select: none;
}

.testimonial-carousel-track {
  display: flex;
  flex-wrap: nowrap;
  transition: none;
  will-change: transform;
}

.testimonial-card-custom2 {
  min-width: 350px;
  max-width: 370px;
  margin-right: 24px;
  display: inline-block;
  vertical-align: top;
  box-sizing: border-box;
  border: 2px solid #e5e7eb;
  border-radius: 18px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  transition: box-shadow 0.2s, border-color 0.2s;
  padding: 24px 20px;
  overflow: hidden;
  height: 280px;
  display: flex;
  flex-direction: column;
}

.testimonial-card-custom2:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.10);
  border-color: #FF6E24;
}

.testimonial-card-custom2 .flex.items-center.mb-2 {
  margin-bottom: 12px;
}

.testimonial-content {
  word-break: break-all;
  white-space: normal;
  max-height: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  margin-bottom: auto;
}

.testimonial-card-custom2 .flex.items-center.justify-between.mt-4 {
  margin-top: auto;
  padding-top: 16px;
  border-top: 1px solid #e5e7eb;
}

.brand-stack {
  position: relative;
  height: 28px;
  display: flex;
  align-items: center;
  margin-left: 0;
}

.brand-stack-img {
  position: absolute;
  top: 0;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #fff;
  background: #eee;
  transition: z-index 0.2s;
}

.brand-stack-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.testimonials-section {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  background-color: #f9f9f9;
}

.testimonials-container {
  width: 100%;
  padding: 0 20px;
}

.testimonial-carousel-2row-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  overflow: hidden;
}

.testimonial-carousel-2row {
  width: 100%;
  overflow: hidden;
  position: relative;
  user-select: none;
}

.testimonial-carousel-track {
  display: flex;
  flex-wrap: nowrap;
  transition: none;
  will-change: transform;
}

.testimonial-card-custom2 {
  min-width: 350px;
  max-width: 370px;
  margin-right: 24px;
  display: inline-block;
  vertical-align: top;
  box-sizing: border-box;
  border: 2px solid #e5e7eb;
  border-radius: 18px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  transition: box-shadow 0.2s, border-color 0.2s;
  padding: 24px 20px;
  overflow: hidden;
  height: 280px;
  display: flex;
  flex-direction: column;
}

.smart-section {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  position: relative;
  overflow: hidden;
}

.smart-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.8s ease;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(50px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}

.control-section {
  padding-top: 4rem;
}

.full-width-image {
  width: 100%;
  height: auto;
  display: block;
}

/* CTA Section Styles */
.cta-section {
  background-image: url('/images/startedNow.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 860px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
}

.cta-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  transform: translateY(-80px);
}

.cta-button {
  background: linear-gradient(90deg, #FE815F 0%, #FEBE5F 100%);
  border: none;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  font-weight: 600;
  border-radius: 12px;
  color: white;
  box-shadow: 0 4px 20px rgba(255, 110, 36, 0.3);
  transition: all 0.3s ease;
  min-width: 200px;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 110, 36, 0.4);
  background: linear-gradient(90deg, #FF8540 0%, #FFA0A8 100%);
}
</style>