<template>
  <div class="home">
    <!-- Hero Section -->
    <el-main style="padding: 0;">
      <el-row class="hero " :gutter="24">
        <el-col :span="24">
          <div class="container text-center hero-container">
            <el-text class="subtitle">
              <el-image :src="toAsset('images/Nia.png')" :width="32" :height="37" class="align-middle mr-2" />
              高效·安全·实惠·专业
            </el-text>
            <el-text tag="h1" class="text-5xl font-bold mb-4 block hero-title font-TobiasTRIAL">
              <span class="fade-in-text" style="animation-delay: 0s;">小程序 </span>
              <!-- <span class="fade-in-text ml-20" style="animation-delay: 0.2s;">brand </span>
              <el-image :src="toAsset('images/brand_img.png')" class="fade-in-image" style="display: inline-block;   width: 51px;
  height: 94px;vertical-align: middle; animation-delay: 0.3s;" /> -->
              <span class="fade-in-text ml-20" style="animation-delay: 0.4s;"> APP</span>
              <br />
              <span class="fade-in-text" style="animation-delay: 0.6s;font-size: 60px;">更专业的 </span>
              <span class=" fade-in-text ml-20"
                style="animation-delay: 0.8s;font-size: 60px;color: #FF6E24;">技术团队</span>
              <el-image :src="toAsset('images/inbox_img.png')" class="fade-in-image ml-20" style="display: inline-block; width: 115px;
  height: 90px;vertical-align: middle; animation-delay: 1s;" />
              <span class="fade-in-text ml-20" style="animation-delay: 1.2s;font-size: 60px;"> 更精致的 </span>
              <span class="income-gradient fade-in-text ml-20"
                style="animation-delay: 1.4s;font-size: 60px;">交付体验</span>
            </el-text>
            <div class="mt-64 font-TobiasTRIAL z-666">
              <div class="btnBlank text-white" style="cursor: pointer;" @click="$router.push('/contact')">立即联系您的专属顾问</div>
            </div>

            <!-- Stats Cards -->
            <div class="statsCardsBox">
              <div class="centerBox">
                <img :src="toAsset('images/my1.5x.png')" alt="">
              </div>
              <div class="left">
                <img :src="toAsset('images/my2x.png')" alt="">
              </div>
              <div class="right">
                <img :src="toAsset('images/my80.png')" alt="">
              </div>
            </div>
          </div>
        </el-col>
      </el-row>

      <!-- No Manager Section -->
      <el-row class="bg-white">
        <el-col :span="24">
          <el-container class="container no-manager-container">
            <el-text class="no-manager-left">
              <el-text tag="h2" class="no-manager-title font-TobiasTRIAL">
                有创意 无思路？
                <br />没问题
                <br />慧点来搞定！
              </el-text>

              <el-text direction="vertical">
                <el-text tag="p" class="no-manager-desc">
                  2位全职UI设计师,
                  <br />ChatGPT-Image-2官方授权
                </el-text>
              </el-text>

              <el-text class="hello-bubble">Hello !</el-text>
              <el-image :src="toAsset('images/Nia.png')" class="nia-icon" fit="cover" />
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
              <el-text tag="h2" class="section-title mt-200 mb-48">
                难以沟通的产品经理
                <br />正在消耗您的时间和金钱
              </el-text>
            </div>
            <!----->
            <el-row :gutter="20">
              <el-col :span="17">
                <el-row>
                  <el-col :span="10">
                    <el-card class="complexity-card" shadow="hover"
                      style="display: flex; flex-direction: column; height: 491px; width:calc(100% - 20px); position: relative; overflow: hidden;">
                      <div class="card-icon">
                        <el-image :src="toAsset('images/notebook.png')"
                          style="width: 20px; height: 20px; margin-bottom: 20px;" />
                        <el-text tag="h3" class="card-title font-TobiasTRIAL">
                          更多的无用对接 <br /> 更多的资源浪费
                        </el-text>
                        <el-text tag="p" class="card-description">
                          每天有繁多的信息涌入您的项目群，<br /> 没有专业的技术对接，交流仿佛对牛弹琴。
                        </el-text>
                      </div>
                      <el-image :src="toAsset('images/emails.png')"
                        style="width: 100%;height: 100%;position: absolute; bottom: 0; left: 0; right: 0;" />
                    </el-card>
                  </el-col>
                  <el-col :span="14">
                    <el-card class="complexity-card" shadow="hover"
                      style="height: 178px;width: calc(100%); position: relative; overflow: hidden;">
                      <div class="card-icon">
                        <el-image :src="toAsset('images/clock.png')" style="width: 20px; height: 20px;" />
                      </div>
                      <el-text tag="h3" class="card-title font-TobiasTRIAL" style="">
                        每一次咨询的问题 <br />都是焦急的等待
                      </el-text>
                      <el-image :src="toAsset('images/hours.png')"
                        style="position: absolute; top: 40px; right: 40px;width:90px ;" />
                    </el-card>
                    <!----->
                    <el-card class="complexity-card hours-card" shadow="hover"
                      style="height: 290px;margin-top: 20px; width:calc(100%);">
                    </el-card>
                  </el-col>
                  <el-col :span="24">
                    <el-card class="complexity-card wide-card" shadow="hover"
                      style="width: 100%;height: 244px; display: flex; flex-direction: column; position: relative; overflow: hidden; margin-top:20px;">
                      <div class="card-icon">
                        <el-image :src="toAsset('images/pencil.png')" style="width: 24px; height: 24px; " />
                      </div>
                      <el-text tag="h3" class="card-title font-TobiasTRIAL">
                        无法解决的技术难题<br /> 找不到专业对口团队
                      </el-text>
                      <el-text tag="p" class="card-description">
                        慧点科技具备小程序、APP、网站等<br />
                        全栈开发专业技术团队
                      </el-text>
                      <el-image :src="toAsset('images/Address.png')"
                        style="position: absolute; right: 80px; top: 55%; transform: translateY(-50%); width: 168px; height: 115px;" />
                    </el-card>
                  </el-col>
                </el-row>
              </el-col>
              <el-col :span="7">
                <el-card class="complexity-card" shadow="hover"
                  style="height: 356px; width:100%;position: relative; overflow: hidden;">
                  <div class="card-icon">
                    <el-image :src="toAsset('images/warning.png')" style="width: 20px; height: 20%;" />
                  </div>
                  <el-text tag="h3" class="card-title font-TobiasTRIAL">
                    找到靠谱团队
                    <br /> 价格望尘莫及
                  </el-text>
                  <el-text tag="p" class="card-description">
                    慧点科技大学生创业团队打破常规
                  </el-text>
                  <el-image :src="toAsset('images/lowPrice.png')"
                    style="position: absolute; bottom: 30px; left: 50%; transform: translateX(-50%);" />
                </el-card>
                <!----->
                <el-card class="complexity-card" shadow="hover"
                  style="margin-top: 20px;width:100%;height: 380px;background-color: #F9F9F9;border-radius: 24px;padding: 40px;position: relative;overflow: hidden;">
                  <div class="card-icon">
                    <el-image :src="toAsset('images/document.png')" style="width: 20px;height: 20px;" />
                  </div>
                  <el-text tag="h3" class="card-title font-TobiasTRIAL">
                    需要正式合同<br />
                    增值税专用发票<br />
                    慧点科技已经准备就绪
                  </el-text>
                  <el-text tag="p" class="card-description">
                    合同保障权利<br />
                    发票可以抵税<br />
                    安全靠谱选慧点
                  </el-text>
                  <el-image :src="toAsset('images/contract.png')"
                    style="position: absolute; right: 40px; bottom: 20px;width: 153px; height: 250px;" />
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
            <div class="text-center mb-5 mt-200 font-TobiasTRIAL">
              <el-text tag="h2" class="section-title mb-48">
                慧点科技 专注全栈开发3年
                <br />Work <span class="lessBg">Less</span>, Earn <span class="moreBg">More</span>
              </el-text>
            </div>
            <!-- Features Grid -->
            <div ref="smartlottieContainer" class="meet-nia-full-image1">
              <div class="smart-email-container">
                <el-text class="card-title font-TobiasTRIAL" style="font-size: 32px;font-weight: 600;">
                  From Inbox Chaos To <br /> Clear Deal Flow
                </el-text>
                <el-text tag="p" class="smart-email-text font-PPTelegraf">
                  Automatically filters and classifies brand emails, turns<br />
                  messages into clear deal summaries — Nia is your <br />
                  smart brand assistant.
                </el-text>
              </div>
            </div>
            <div ref="smartlottieContainer2" class="meet-nia-full-image2">
              <div class="smart-email-container2">
                <el-text class="card-title font-TobiasTRIAL" style="font-size: 32px;font-weight: 600;">
                  Personal Smart Reply. <br /> Professional smart Reply.
                </el-text>
                <el-text tag="p" class="smart-email-text font-PPTelegraf">
                  Use your context across emails—privately, transparently, <br />and under your control. It sounds like
                  you.<br />
                  Backed by expert tactics and rich brand–KOL data—it's <br /> not just like you, it's smarter.<br />
                  More successful deals. Better rates.<br />
                </el-text>
              </div>

            </div>
            <el-image :src="toAsset('images/smart3.png')" class="meet-nia-full-image"></el-image>
            <el-image :src="toAsset('images/smart4.png')" class="meet-nia-full-image"></el-image>
            <el-image :src="toAsset('images/smart6.png')" class="meet-nia-full-image"></el-image>

          </div>
          <div class="text-center mb-5"
            style="width:100%; display: flex; justify-content: center; margin-top:100px; margin-bottom:50px">
            <!-- <el-image src="" class="niasmall"/> -->
            <img :src="toAsset('images/miniNia.png')" alt="" style="width:58px; position: relative;top:5px;">
            <div class="gradient-text-3color font-TobiasTRIAL" style="font-size:32px;">更多服务案例上新中......</div>
          </div>
        </el-col>
      </el-row>

      <!-- Testimonials Section (2-row Infinite Seamless Carousel) -->
      <el-row class="testimonials-section">
        <el-col :span="24">
          <div class="testimonials-container">
            <el-text tag="h2" class="text-3xl font-bold text-center mb-4rem block font-TobiasTRIAL"
              style="color: black;font-size: 50px; height: 67px; line-height: 67px;">
              <!-- What Do KOLs <img :src="toAsset('images/img.png')" alt="KOL"
                style="display:inline-block;vertical-align:middle;height:1em;margin:0 4px;" /> Say? -->
              已获得超过 <span class="yellowBg">100+</span> 位老板的认可
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
      <el-row class="py-16 font-TobiasTRIAL">
        <el-col :span="24">
          <div class="container">
            <h2 class="fqa-title" style="font-size: 56px;">FQA
            </h2>

            <div class="faq-container">
              <div class="faq-item" :class="{ active: activeFaqItem === 0 }">
                <div class="faq-question" @click="toggleFaq(0)">
                  <span>江西慧点奇丰科技有限公司简介</span>
                  <el-icon class="faq-icon">
                    <Plus v-if="activeFaqItem !== 0" />
                    <Close v-else />
                  </el-icon>
                </div>
                <div class="faq-answer" v-if="activeFaqItem === 0">
                  <p>江西慧点奇丰科技有限公司，成立于 2024 年 12 月，是一家专注于软件与信息技术服务的现代化科技企业。
                    公司深耕软件开发与定制化技术服务领域，主营软件外包、定制软件开发业务，专业承接小程序、手机
                    APP、企业官网、定制系统等全品类项目开发，拥有丰富的项目落地经验，可全程完成产品设计、程序开发、测试调试、服务器部署及线上运维一站式服务。
                    同时，我们具备成熟标准化 SaaS 解决方案，适配多行业经营需求，助力中小企业降本增效、数字化转型升级。
                    团队立足技术创新，依托扎实的研发实力与完善的服务体系，为各行各业客户提供稳定、高效、高性价比的信息化技术支持与定制化技术解决方案。</p>
                </div>
              </div>

              <div class="faq-item" :class="{ active: activeFaqItem === 1 }">
                <div class="faq-question" @click="toggleFaq(1)">
                  <span>我已经有产品需求了，怎么对接？</span>
                  <el-icon class="faq-icon">
                    <Plus v-if="activeFaqItem !== 1" />
                    <Close v-else />
                  </el-icon>
                </div>
                <div class="faq-answer" v-if="activeFaqItem === 1">
                  <p>慧点科技配备多名资深项目经理，全程一对一高效对接沟通。
                    无论您已有明确产品需求，还是需要定制化开发方案，我们都可快速为您梳理需求、规划功能、定制合适的开发方案。<br />
                    如需咨询合作、评估项目报价与开发周期，可直接添加前台技术微信：ffdxdwx，我们全天候在线，随时为您答疑对接。</p>
                </div>
              </div>

              <div class="faq-item" :class="{ active: activeFaqItem === 2 }">
                <div class="faq-question" @click="toggleFaq(2)">
                  <span>我只想做这个类目，但是没有具体的需求分析怎么办？</span>
                  <el-icon class="faq-icon">
                    <Plus v-if="activeFaqItem !== 2" />
                    <Close v-else />
                  </el-icon>
                </div>
                <div class="faq-answer" v-if="activeFaqItem === 2">
                  <p>我们拥有多名资深项目经理，可以免费帮你梳理行业类目、规划业务流程、拆解功能模块，从零帮你做完整的需求分析与方案策划。<br />
                    您只需告知想要做的项目类型（小程序、APP、企业网站、定制系统或 SaaS 系统等）和大致用途即可，我们会结合行业经验，为你量身定制合适的开发方案、规划功能、预估工期与报价。<br />
                    您可直接添加技术咨询微信：ffdxdwx，一对一免费沟通规划。</p>
                </div>
              </div>

              <div class="faq-item" :class="{ active: activeFaqItem === 3 }">
                <div class="faq-question" @click="toggleFaq(3)">
                  <span>我们预算有限，能提供最有性价比的方案吗？</span>
                  <el-icon class="faq-icon">
                    <Plus v-if="activeFaqItem !== 3" />
                    <Close v-else />
                  </el-icon>
                </div>
                <div class="faq-answer" v-if="activeFaqItem === 3">
                  <p>当然可以！我们非常理解中小企业预算有限的情况，我们会结合你的行业、使用场景和实际需求，舍弃多余冗余功能，优先保留核心刚需模块，量身定制高性价比开发方案。<br/>
                    同时我们有成熟标准化 SaaS 成品方案、轻量化定制模式，相比全定制开发，能大幅节省开发成本和周期，用合理预算满足你的线上运营与业务使用需求。<br/>
                    全程透明报价，无隐形消费，根据你的预算范围灵活调整方案，做到省钱又实用。<br/>
                    如需了解预算适配方案，可添加技术微信：ffdxdwx，免费为你规划、报价对比。
                  </p>
                </div>
              </div>

              <div class="faq-item" :class="{ active: activeFaqItem === 4 }">
                <div class="faq-question" @click="toggleFaq(4)">
                  <span>公司有办公地点吗，可以线下参观洽谈吗？</span>
                  <el-icon class="faq-icon">
                    <Plus v-if="activeFaqItem !== 4" />
                    <Close v-else />
                  </el-icon>
                </div>
                <div class="faq-answer" v-if="activeFaqItem === 4">
                  <p>当然可以！公司地址：江西省九江市濂溪区长虹大道168号开发公司大楼四楼434室</p>
                  <p>来访请您提前微信预约，方便我们安排专人接待！</p>
                  <p>如需预约，可添加咨询微信：ffdxdwx。</p>
                </div>
              </div>

              <div class="faq-item" :class="{ active: activeFaqItem === 5 }">
                <div class="faq-question" @click="toggleFaq(5)">
                  <span>公司配备哪些技术人才?</span>
                  <el-icon class="faq-icon">
                    <Plus v-if="activeFaqItem !== 5" />
                    <Close v-else />
                  </el-icon>
                </div>
                <div class="faq-answer" v-if="activeFaqItem === 5">
                  <p>我们拥有多名资深技术人员，包括前端开发工程师、后端开发工程师、UI/UX设计师和项目经理，能够为您提供全方位的技术支持和服务。</p>
                </div>
              </div>

              <div class="faq-item" :class="{ active: activeFaqItem === 6 }">
                <div class="faq-question" @click="toggleFaq(6)">
                  <span>公司是否招收实习生、全职开发者?</span>
                  <el-icon class="faq-icon">
                    <Plus v-if="activeFaqItem !== 6" />
                    <Close v-else />
                  </el-icon>
                </div>
                <div class="faq-answer" v-if="activeFaqItem === 6">
                  <p>公司目前有实习生和全职开发者的招聘需求，欢迎有志之士加入我们！</p>
                  <p>如需了解招聘信息，请关注我们的Boss直聘官方账号或联系HR微信ffdxdwx。</p>
                </div>
              </div>

            </div>
          </div>
        </el-col>
      </el-row>

      <!-- CTA Section -->
      <!-- <el-row class="cta-section">
        <el-col :span="24">
          <div class="cta-container">
            <el-button type="primary" size="large" class="cta-button">Start Your 7-Day Free Trial ($19.9)</el-button>
          </div>
        </el-col>
      </el-row> -->
    </el-main>
  </div>
</template>

<script>
import { Check, Message, Share, Star, Plus, Close, Notebook, Clock, Warning, Document, Edit } from '@element-plus/icons-vue';
import lottie from 'lottie-web';
import { toAsset as resolveAsset } from '@/utils/asset';

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
      animationFiles: ['/coollar_demo.json'],
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
    toAsset(path) {
      return resolveAsset(path);
    },
    normalizeTestimonials(list) {
      return list.map((item) => ({
        ...item,
        avatar: this.toAsset(item.avatar),
        coBranding: item.coBranding.map((logo) => this.toAsset(logo)),
      }));
    },
    toggleFaq(index) {
      this.activeFaqItem = this.activeFaqItem === index ? null : index;
    },
    initLottieAnimation() {
      // 清除之前的动画实例
      if (this.lottieAnimation) {
        this.lottieAnimation.destroy();
      }

      // 加载当前动画
      const animationFile = this.toAsset(this.animationFiles[this.currentAnimationIndex]);

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
      const animationFile = this.toAsset(this.smartAnimationFiles[this.smartCurrentAnimationIndex]);

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
      const animationFile = this.toAsset(this.smartAnimationFiles2[this.smartCurrentAnimationIndex2]);

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
      const normalizedRow1 = this.normalizeTestimonials(this.row1Testimonials);
      const normalizedRow2 = this.normalizeTestimonials(this.row2Testimonials);
      this.row1Data = [...normalizedRow1, ...normalizedRow1, ...normalizedRow1];
      this.row2Data = [...normalizedRow2, ...normalizedRow2, ...normalizedRow2];

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
  --el-main-padding: 0 !important;
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
  margin-bottom: 32px;
}

.hero-container {
  position: relative;
  background: url('../../public/images/hero_bg.png') center center no-repeat;
  /* background-size: cover; */
  background-size: 100% auto;
  padding: 60px 20px 0 20px;
  z-index: 1;
  margin-bottom: 20px;
}

.subtitle {
  font-size: 26px;
  color: #1A130E 80%;
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  margin-bottom: 20px;
}

.subtitle .el-image {
  width: 37px;
  height: 37px;
  margin-right: 0.5rem;
  position: relative;
  top: 5px;
}

.fade-in-text {
  display: inline-block;
  opacity: 0;
  animation: fadeIn 0.5s ease-in-out forwards;
}

.ml-20 {
  margin-left: 20px;
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

.niasmall {

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
  background-image: url('../../public/images/handshake.png');
  background-size: contain;
  background-repeat: no-repeat;
}

.income-icon {
  background-image: url('../../public/images/money.png');
  background-size: contain;
  background-repeat: no-repeat;
}

.time-icon {
  background-image: url('../../public/images/time.png');
  background-size: contain;
  background-repeat: no-repeat;
}

.trend-arrow {
  position: absolute;
  top: 50px;
  right: 50px;
  width: 80px;
  height: 60px;
  background-image: url('../../public/images/trend-up.png');
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
  background-image: url('../../public/images/arrow-down.png');
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
  background-image: url('../../public/images/gmail.png');
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

:deep(.el-menu--horizontal > .active) {
  color: #fe815f;
}

:deep(.el-menu-item) {
  font-size: 16px;
  color: var(--text-color);
}

:deep(.el-menu-item:hover) {
  color: var(--primary-color);
}

:deep(.el-menu-item.is-active) {
  color: #fe815f !important;
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
  font-weight: bold;
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 700;
}

.faq-container {
  max-width: 1200px;
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
  padding-bottom: 20px;
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
  line-height: 1.4;
  color: #000;
  font-family: 'Tobias TRIAL', Times, serif;
  margin-bottom: 20px;
  padding-top: 30px;
}

.no-manager-desc {
  font-size: 1.2rem;
  line-height: 1.5;
  color: #1A130E;
  position: relative;
  z-index: 3;
}

.nia-icon {
  position: absolute;
  bottom: 20px;
  right: -14px;
  width: 96px;
  height: 110px;
  z-index: 5;
}

.hello-bubble {
  position: absolute;
  bottom: 110px;
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
  top: 25px;
  right: -70px;
  background-color: #000;
  color: white;
  padding: 3px 13px;
  border-radius: 15px;
  font-size: 20px;
  transform: rotate(-30deg);
  z-index: 20;
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

.meet-nia-full-image1 {
  width: 100%;
  display: block;
  background-color: transparent;
  margin-top: -184px;
}

.meet-nia-full-image2 {
  width: 100%;
  display: block;
  background-color: transparent;
  margin-top: -189px;
}

.meet-nia-full-image1,
.meet-nia-full-image2 {
  position: relative;
}

.smart-email-container2 {
  position: relative;
  top: 360px;
  left: 10%;
  z-index: 2;
  max-width: 90%;
  width: 100%;
}

.smart-email-container {
  position: relative;
  top: 340px;
  left: 10%;
  z-index: 2;
  max-width: 90%;
  width: 100%;
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
  padding: 10px 0;
  padding-bottom: 20px;
  max-width: 1280px;
  margin: 0 auto;
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
  border-radius: 24px;
  transition: all 0.3s ease;
  position: relative;
  font-size: 24px;
  padding: 32px;
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
  margin-bottom: 14px;
}

.card-title {
  font-size: 24px;
  font-weight: 700;
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
  background-image: url('../../public/images/emails.png');
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
  border: none;
  border-radius: 24px;
  background-image: url("../../public/images/4days.png");
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
  background-image: url('../../public/images/contract-folder.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right bottom;
  overflow: visible;
}

/* Folder image styles */
.folder-image {
  height: 100px;
  margin-top: 20px;
  background-image: url('../../public/images/address-folder.svg');
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

.mb-4rem {
  margin-bottom: 4.5rem;
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
  height: 251px;
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
  /* padding-top: 16px; */
  /* border-top: 1px solid #e5e7eb; */
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
}

.testimonials-container {
  width: 100%;
  padding: 0 20px;
  margin-top: 60px;
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
  height: 251px;
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
  background-image: url('../../public/images/startedNow.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 860px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  padding: 0;
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
  box-shadow: 0 12px 30px #ef815a;
  transition: all 0.3s ease;
  min-width: 200px;
}

.cta-button:hover {
  transform: translateY(-2px);
  background: linear-gradient(90deg, #FF8540 0%, #FFA0A8 100%);
}

.smart-email-text {
  font-size: 16px;
  font-weight: 400;
  color: #1A130E;
}

.statsCardsBox {
  width: 90%;
  height: 500px;
  display: flex;
  position: relative;
  justify-content: space-between;
  margin: 72px auto 0 auto;
}

.statsCardsBox .centerBox {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -15%;
  z-index: 1
}


.statsCardsBox .left {
  width: 33%;
  z-index: 2
}

.statsCardsBox .left img {
  width: 95%;
  margin: 220px 0 0 20%;
}

.statsCardsBox .right {
  width: 33%;
  z-index: 3;
}

.statsCardsBox .right img {
  width: 80%;
  margin: 230px 0 0 -20px;
}

.yellowBg {
  width: 176px;
  height: 67px;
  background: url('../../public/images/y8000.png') center center no-repeat;
  background-size: auto 100%;
  position: relative;
  padding: 0 10px;
}

.lessBg {
  width: 125px;
  height: 67px;
  padding: 0 10px;
  background: url('../../public/images/less.png') center center no-repeat;
  background-size: auto 100%;
}

.moreBg {
  width: 147px;
  height: 75px;
  padding: 0 10px;
  background: url('../../public/images/more.png') center center no-repeat;
  background-size: auto 100%;
}
</style>
