<template>
    <div>
        <div class="aboutPageBox">
            <div class="topBg"></div>
            <div class="pinkBg">
                <div class="left"></div>
                <div class="content">
                    <h1 class="about animate__animated  item-1" :class="{ 'animate__bounceIn': isVisible }">
                        <span class="fade-in-text" style="animation-delay: 0s;">关于</span>
                        <span class="fade-in-text ml-15 caiseT" style="animation-delay: 0.2s;">我们</span>
                    </h1>
                    <div class="body">
                        <img :src="toAsset('images/about/about_top.png')" alt="" class="animate__animated  item-2"
                            :class="{ 'animate__bounceIn': isVisible }">
                        <img :src="toAsset('images/about/e_top.png')" alt="" class="jiantou animate__animated  item-3"
                            :class="{ 'animate__bounceIn': isVisible }">
                        <img :src="toAsset('images/about/xiao_r.png')" alt="" class="xiao_r animate__animated  item-4"
                            :class="{ 'animate__bounceIn': isVisible }">
                        <img :src="toAsset('images/about/xiao_l.png')" alt="" class="xiao_l animate__animated  item-5"
                            :class="{ 'animate__bounceIn': isVisible }">
                        <img :src="toAsset('images/about/nia_r.svg')" alt="" class="nia_r animate__animated  item-6"
                            :class="{ 'animate__bounceIn': isVisible }">
                    </div>
                </div>
                <div class="left"></div>
            </div>
            <!---->
            <div class="contentBox mt-160" ref="cardRef">
                <h2 class="title animate__animated " :class="{ 'animate__backInLeft': isVisible }">我们的企业目标</h2>
                <div class="right  animate__animated " :class="{ 'animate__backInRight': isVisible }">
                    <h3 class="title text-gradient">Work less, Earn more.</h3>
                    <p class="text">
                        以「用更少的精力，收获更实在的成果」为核心理念，我们致力于打破行业低效内耗的困局。
                    </p>
                    <p class="text">
                        用专业的全栈开发能力、高效的响应流程、普惠的定价与合规的服务保障，帮您省去无效对接、漫长等待与合作顾虑，让您少花无用精力，多拿实在成果，把时间留给真正重要的事。
                    </p>
                    <p class="text">
                        我们相信，真正的高效，从来不是让您 “更累”，而是帮您 “减负”。
                    </p>
                </div>
            </div>
            <div class="contentBox mt-160">
                <div class="right animate__animated" :class="{ 'animate__backInLeft': isVisible }">
                    <h3 class="title text-gradient">专业的全栈技术团队，开发选慧点奇丰，靠谱！</h3>
                    <p class="text">
                        小程序开发：覆盖主流平台，适配多场景业务需求，实现功能定制与系统集成
                    </p>
                    <p class="text">
                        APP 开发：原生 / 跨平台开发，打造稳定流畅的用户端产品，适配多机型与系统版本
                    </p>
                    <p class="text">
                        网站开发：响应式官网、电商平台、管理后台与 SaaS 系统定制，兼顾性能与安全
                    </p>
                    <p class="text">
                        网站开发：响应式官网、电商平台、管理后台与 SaaS 系统定制，兼顾性能与安全
                    </p>
                    <p class="text">
                        我们致力以成熟的技术方案帮您规避开发风险，无需为技术细节耗费心力，专注业务增长。
                    </p>
                </div>
                <h2 class="title textRight animate__animated" :class="{ 'animate__backInRight': isVisible }">我们能做什么</h2>
            </div>
            <div class="contentBox mt-160">
                <h2 class="title animate__animated" :class="{ 'animate__backInLeft': isVisible }">我们的服务承诺</h2>
                <div class="right animate__animated" :class="{ 'animate__backInRight': isVisible }">
                    <h3 class="title text-gradient">客户的隐私永远放在首位，在对的时间，完成对的事！</h3>
                    <p class="text">
                        每一次合作，都是信任的双向奔赴。慧点奇丰科技，坚持单单签订正规合同，全程多对一专属技术指导。
                    </p>
                    <p class="text">
                        我们深耕小程序、移动端APP、定制网站、企业官网全品类开发，配套专业UI/UX界面设计、交互优化、系统功能定制、程序定制研发等核心技术服务。
                    </p>
                    <p class="text">
                        以扎实的技术实力、标准化开发流程、精细化项目打磨，严控产品品质与运行稳定性，全方位化解您的合作顾虑，让您全程省心、安心、更放心。
                    </p>
                </div>
            </div>
            <!---->
            <div class="mt-160 bottomYs">
                <div class="bigText">准备好拥有一款属于自己的APP或小程序了吗？</div>
                <div class="smText">无论是电商、工具还是企业服务场景，我们都能为您定制专属 APP 或小程序，从设计开发到上线运维全链路支持，多对一技术指导，让您的数字化项目省心落地。</div>
                <div class="moving-border" style="cursor: pointer;" @click="$router.push('/contact')">
                    开启我们的合作之旅
                </div>
            </div>
            <div style="margin-top:40px;"></div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { useScrollTrigger } from './hooks'
import { toAsset } from '@/utils/asset'

const topWaveBgImage = `url(${toAsset('images/about/wg.png')})`
const pinkBgImage = `url(${toAsset('images/about/f_bg.png')})`

const cardRef = ref()
const { isVisible } = useScrollTrigger(cardRef)
</script>
<style lang="scss" scoped>
.aboutPageBox {
    width: 1200px;
    height: auto;
    margin: 0 auto;
    // -webkit-mask-image: radial-gradient(
    //     circle at center, 
    //     rgba(255,255,255,1) 0%, 
    //     rgba(255,255,255,0) 100%
    // );
    // mask-image: radial-gradient(
    //     circle at center,
    //     rgba(255,255,255,1) 0%,
    //     rgba(255,255,255,0) 100%
    // );
    background-size: 100% auto;
    position: relative;

    .topBg {
        width: 100%;
        height: 654px;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        background: v-bind(topWaveBgImage) no-repeat top center;
        -webkit-mask-image: radial-gradient(circle at center,
                rgba(255, 255, 255, 1) 0%,
                rgba(255, 255, 255, 0) 100%);
        mask-image: radial-gradient(circle at center,
                rgba(255, 255, 255, 1) 0%,
                rgba(255, 255, 255, 0) 100%);
    }

    .pinkBg {
        width: 100%;
        height: 100%;
        background: v-bind(pinkBgImage) no-repeat center center;
        text-align: center;
        display: flex;

        .left {
            width: 250px;
            height: 100%;
            background: linear-gradient(to left,
                    transparent 20%,
                    #000 80%);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
        }

        .content {
            flex: 1;
            text-align: center;
        }

        .body {
            width: 100%;
            height: auto;
            position: relative;
            display: flex;
            justify-content: center;

            .jiantou {
                width: 106px;
                height: 99px;
                position: absolute;
                top: 100px;
                left: calc(50% + 10px);
            }

            .xiao_r {
                width: 73px;
                height: 73px;
                position: absolute;
                right: 106px;
                top: 83px;
            }

            .xiao_l {
                width: 87px;
                height: 87px;
                position: absolute;
                left: 53px;
                bottom: 130px;
            }

            .nia_r {
                position: absolute;
                right: 66px;
                bottom: 63px;
            }
        }
    }

    .contentBox {
        width: 100%;
        display: flex;
        justify-content: space-between;

        .right {
            width: 60%;
            text-align: left;
        }
    }

    .bottomYs {
        width: 100%;
        height: 448px;
        display: flex;
        padding: 80px 198px;
        flex-direction: column;
        align-items: center;
        gap: 40px;
        border-radius: 20px;
        background: radial-gradient(103.73% 112.17% at 50% 112.17%, #EF9CF0 0%, #FF8896 52.4%, #FF6E24 100%), #FFE1D9;

        .bigText {
            color: #FFF;
            text-align: center;
            font-family: "Tobias TRIAL";
            font-size: 56px;
            font-style: normal;
            font-weight: 700;
            line-height: 64px;
            /* 114.286% */
        }

        .smText {
            width: 588px;
            margin: 0 auto;
            color: #FFF;
            text-align: center;
            font-family: "PingFang SC";
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 24px;
            /* 150% */
        }
    }
}

.caiseT {
  background: linear-gradient(92deg, #FF6E24 4.31%, #FF8896 44.17%, #EF9CF0 88.05%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

h1.about {
    color: #1A130E;
    text-align: center;
    font-family: "Tobias TRIAL";
    font-size: 86px;
    font-style: normal;
    font-weight: 600;
    line-height: 90px;
    /* 104.651% */
    mask-image: none;
    margin: 48px 0 0 0;
    z-index: 33;
    -webkit-mask-image: none;
    padding: 0;
}

h2.title {
    color: #000;
    text-align: left;
    font-family: "Tobias TRIAL";
    font-size: 56px;
    font-style: normal;
    font-weight: 700;
    line-height: 64px;
    /* 114.286% */
    width: 40%;
    display: block;

    &.textRight {
        text-align: right;
    }

}

h3.title {
    font-family: "Tobias TRIAL";
    font-size: 24px;
    font-style: normal;
    font-weight: 900;
    line-height: 32px;
    /* 133.333% */
    margin-bottom: 20px;
}

p.text {
    margin: 0;
    padding: 0;
    color: #1A130E;
    font-family: "PingFang SC";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    /* 150% */
    opacity: 0.6;
    margin-bottom: 20px;
}

.text-gradient {
    background: linear-gradient(90deg, #FF6E24, #FF8896, #EF9CF0);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.mt-160 {
    margin-top: 160px;
}

/* 延迟控制 */
.item-1 {
    animation-delay: 0.1s;
}

.item-2 {
    animation-delay: 0.3s;
}

.item-3 {
    animation-delay: 0.5s;
}

.item-4 {
    animation-delay: 0.7s;
}

.item-5 {
    animation-delay: 0.9s;
}

.item-6 {
    animation-delay: 1.2s;
}

@keyframes borderFlow {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}

.moving-border {
    width: 291px;
    display: flex;
    height: 56px;
    padding: 20px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    border-radius: 12px;
    background: #1A130E;
    color: #FFF;
    font-size: 20px;
    position: relative;
    background-size: 300% 300%;
    animation: borderFlow 6s ease infinite;
    z-index: 1;
}

.moving-border::after {
    content: '';
    position: absolute;
    inset: 2px;
    z-index: -1;
    background: #1A130E;
    border-radius: 12px;
}

@media (max-width: 768px) {
    .aboutPageBox {
        width: 100%;
        padding: 0 16px 32px;
        overflow: hidden;

        .topBg {
            height: 340px;
            background-size: cover;
        }

        .pinkBg {
            display: block;
            background-size: cover;
            background-position: center top;

            .left {
                display: none;
            }

            .content {
                width: 100%;
            }

            .body {
                padding-top: 12px;

                >img:first-child {
                    width: min(100%, 320px);
                    height: auto;
                    display: block;
                    margin: 0 auto;
                }

                .jiantou {
                    width: 60px;
                    height: auto;
                    top: 34px;
                    left: calc(50% + 18px);
                }

                .xiao_r {
                    width: 44px;
                    height: 44px;
                    right: 18px;
                    top: 28px;
                }

                .xiao_l {
                    width: 52px;
                    height: 52px;
                    left: 4px;
                    bottom: 44px;
                }

                .nia_r {
                    width: 58px;
                    right: 10px;
                    bottom: 28px;
                }
            }
        }

        .contentBox {
            display: flex;
            flex-direction: column;
            gap: 16px;

            .right {
                width: 100%;
            }
        }

        .bottomYs {
            height: auto;
            padding: 36px 20px;
            gap: 20px;
            border-radius: 16px;

            .bigText {
                font-size: 28px;
                line-height: 1.25;
            }

            .smText {
                width: 100%;
                font-size: 14px;
                line-height: 1.7;
            }
        }
    }

    h1.about {
        font-size: 44px;
        line-height: 1.1;
        margin-top: 20px;
    }

    h2.title {
        width: 100%;
        font-size: 30px;
        line-height: 1.2;
        margin-bottom: 16px;

        &.textRight {
            text-align: left;
            margin-top: 0;
            order: -1;
            margin-bottom: 0;
        }
    }

    h3.title {
        font-size: 20px;
        line-height: 1.35;
        margin-bottom: 14px;
    }

    p.text {
        font-size: 14px;
        line-height: 1.7;
        margin-bottom: 14px;
    }

    .mt-160 {
        margin-top: 64px;
    }

    .ml-15 {
        margin-left: 8px;
    }

    .moving-border {
        width: 100%;
        max-width: 260px;
        height: 50px;
        padding: 0 18px;
        font-size: 15px;
    }
}
</style>
