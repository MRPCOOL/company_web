<template>
    <div>
        <div class="aboutPageBox">
            <div class="topBg"></div>
            <div class="pinkBg">
                <div class="left"></div>
                <div class="content">
                    <h1 class="about animate__animated  item-1" :class="{'animate__bounceIn':isVisible}">About</h1>
                    <div class="body">
                        <img src="/images/about/about_top.png" alt="" class="animate__animated  item-2" :class="{'animate__bounceIn':isVisible}">
                        <img src="/images/about/e_top.png" alt="" class="jiantou animate__animated  item-3" :class="{'animate__bounceIn':isVisible}">
                        <img src="/images/about/xiao_r.png" alt="" class="xiao_r animate__animated  item-4" :class="{'animate__bounceIn':isVisible}">
                        <img src="/images/about/xiao_l.png" alt="" class="xiao_l animate__animated  item-5" :class="{'animate__bounceIn':isVisible}">
                        <img src="/images/about/nia_r.svg" alt="" class="nia_r animate__animated  item-6" :class="{'animate__bounceIn':isVisible}">
                    </div>
                </div>
                <div class="left"></div>
            </div>
            <!---->
            <div class="contentBox mt-160" ref="cardRef">
                <h2 class="title animate__animated " :class="{'animate__backInLeft':isVisible}">Our Mission</h2>
                <div class="right  animate__animated " :class="{'animate__backInRight':isVisible}">
                    <h3 class="title text-gradient">Work less, Earn more.</h3>
                    <p class="text">
                        To empower creators with AI tools that take manual work out of brand collaborations 
                        — so you can focus on creating, not managing.
                    </p>
                    <p class="text">
                        We’re here to remove the repetitive, time-consuming tasks that slow you down: replying to emails, generating quotes, choosing samples,  reviewing contracts, and following up.
                    </p> 
                    <p class="text">
                        With Nia, automation turns complexity into simplicity — helping you work less, earn more, close deals faster, and stay focused on what truly matters. 
                    </p>
                </div>
            </div>
            <div class="contentBox mt-160" >
                <div class="right animate__animated" :class="{'animate__backInLeft':isVisible}">
                    <h3 class="title text-gradient">All automated. Grow Influencer Income.</h3>
                    <p class="text">
                        We automate the entire collaboration process — from discovering more deals and smarter matches to replying to brand emails, generating data-backed quotes, reviewing and editing contracts, and tracking your income and deliverables. With Nia, creators can focus on what they do best while earning more and securing smarter, faster, and safer brand deals.
                    </p>
                </div>
                <h2 class="title textRight animate__animated" :class="{'animate__backInRight':isVisible}">What We Do</h2>
            </div>
            <div class="contentBox mt-160">
                <h2 class="title animate__animated" :class="{'animate__backInLeft':isVisible}">Our Promise</h2>
                <div class="right animate__animated" :class="{'animate__backInRight':isVisible}">
                    <h3 class="title text-gradient">Privacy-first. Creator-focused. Built to help you earn more.</h3>
                    <p class="text">
                        We protect your data at every step. Nia only analyzes what’s necessary to help you close deals. No unnecessary access, no data sharing, no compromise on privacy. You’re always in control.
                    </p>
                </div>
            </div>
            <!---->
            <div class="mt-160 bottomYs">
                <div class="bigText">Ready to enhance your business with Nia？</div>
                <div class="smText">Let your personal agent Nia automate your brand collaborations — discover more deals, secure smarter quotes, and grow your income while saving time.</div>
                <div class="moving-border">
                    Start your free trial today
                </div>
            </div>
            <div style="margin-top:40px;"></div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { useScrollTrigger } from './hooks'

const cardRef = ref()
const { isVisible } = useScrollTrigger(cardRef)
</script>
<style lang="scss" scoped>
    .aboutPageBox{
        width:1200px;
        height: auto;
        margin:0 auto;
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
        .topBg{
            width:100%;
            height:654px;
            position: absolute;
            top:0;
            left:0;
            z-index:1;
            background:url(/images/about/wg.png) no-repeat top center;
            -webkit-mask-image: radial-gradient(
                circle at center, 
                rgba(255,255,255,1) 0%, 
                rgba(255,255,255,0) 100%
            );
            mask-image: radial-gradient(
                circle at center,
                rgba(255,255,255,1) 0%,
                rgba(255,255,255,0) 100%
            );
        }
        .pinkBg{
            width:100%;
            height:100%;
            background:url(/images/about/f_bg.png) no-repeat center center;
            text-align: center;
            display: flex;
            .left{
                width:250px;
                height:100%;
                background: linear-gradient(to left, 
                    transparent 20%, 
                    #000 80%);
                -webkit-background-clip: text;
                background-clip: text;
                color: transparent;
            }
            .content{
                flex:1;
                text-align: center;
            }
            .body{
                width:100%;
                height:auto;
                position: relative;
                display: flex;
                justify-content: center;
                .jiantou{
                    width:106px;
                    height:99px;
                    position: absolute;
                    top:100px;
                    left:calc(50% + 10px);
                }
                .xiao_r{
                    width:73px;
                    height:73px;
                    position:absolute;
                    right:106px;
                    top:83px;
                }
                .xiao_l{
                    width:87px;
                    height:87px;
                    position:absolute;
                    left:53px;
                    bottom:130px;
                }
                .nia_r{
                    position:absolute;
                    right:66px;
                    bottom:63px;
                }
            }
        }
        .contentBox{
            width:100%;
            display: flex;
            justify-content: space-between;
            .right{
                width:60%;
                text-align: left;
            }
        }
        .bottomYs{
            width:100%;
            height:448px;
            display: flex;
            padding: 80px 198px;
            flex-direction: column;
            align-items: center;
            gap: 40px;
            border-radius: 20px;
            background: radial-gradient(103.73% 112.17% at 50% 112.17%, #EF9CF0 0%, #FF8896 52.4%, #FF6E24 100%), #FFE1D9;
            .bigText{
                color: #FFF;
                text-align: center;
                font-family: "Tobias TRIAL";
                font-size: 56px;
                font-style: normal;
                font-weight: 700;
                line-height: 64px; /* 114.286% */
            }
            .smText{
                width:588px;
                margin:0 auto;
                color: #FFF;
                text-align: center;
                font-family: "PingFang SC";
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 24px; /* 150% */
            }
        }
    }
    h1.about{
        color: #1A130E;
        text-align: center;
        font-family: "Tobias TRIAL";
        font-size: 86px;
        font-style: normal;
        font-weight: 600;
        line-height: 90px; /* 104.651% */
        mask-image:none;
        margin:48px 0 0 0;
        z-index:33;
        -webkit-mask-image: none;
        padding:0;
    }
    h2.title{
        color: #000;
        text-align: left;
        font-family: "Tobias TRIAL";
        font-size: 56px;
        font-style: normal;
        font-weight: 700;
        line-height: 64px; /* 114.286% */
        width:40%;
        display: block;     
        &.textRight{
            text-align: right;
        } 
        
    }
    h3.title{
        font-family: "Tobias TRIAL";
        font-size: 24px;
        font-style: normal;
        font-weight: 900;
        line-height: 32px; /* 133.333% */
        margin-bottom:20px;
    }
    p.text{
        margin:0;
        padding:0;
        color: #1A130E;
        font-family: "PingFang SC";
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 150% */
        opacity: 0.6;
        margin-bottom:20px;
    }
    .text-gradient {
        background: linear-gradient(90deg, #FF6E24, #FF8896, #EF9CF0);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
    }
    .mt-160{
        margin-top:160px;
    }
    /* 延迟控制 */
    .item-1 { animation-delay: 0.1s; }
    .item-2 { animation-delay: 0.3s; }
    .item-3 { animation-delay: 0.5s; }
    .item-4 { animation-delay: 0.7s; }
    .item-5 { animation-delay: 0.9s; }
    .item-6 { animation-delay: 1.2s; }

    @keyframes borderFlow {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }

    .moving-border {
        width:291px;
        display: flex;
        height: 56px;
        padding: 20px;
        justify-content: center;
        align-items: center;
        gap: 4px;
        border-radius: 12px;
        background: #1A130E;
        color:#FFF;
        font-size:20px;
        position: relative;
        background: linear-gradient(90deg, #FF8896, #FDC731);
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
</style>