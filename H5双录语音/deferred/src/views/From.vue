<template>
    <div class="body_box">
        <!-- 头部 -->
        <div class="header_top">
            <div class="header_top_box">
                <span class="iconfont">&#xeb66;</span>
                <b>基本信息</b><span>(必填)</span>
            </div>

            <div class="inpuit_box nowarp header_text_in" style="">

                <div class="header_text_in" style="margin:15px 0 10px 0">
                    <span style="color:#D31145">*</span>
                    渠道
                </div>
                <div @click="showPicker($event, this.chanle)" style="margin:15px -200px 0px 0" class="gary">
                    请选择渠道
                </div>
                <span style="margin:20px 0 0 0 " class="icon iconfont gary">&#xe775;</span>
            </div>
            <div class="inpuit_box warp header_text_in">
                <div>
                    <span style="color:#D31145">*</span>
                    被投保人是否同一人
                </div>
                <div @click="showPicker($event, this.whether)" class="warp_text gary" style="text-align: right;">
                    请选择被投保人是否是同一人
                </div>
                <span class="icon iconfont gary">&#xe775;</span>
            </div>
        </div>
        <!-- 身体 -->
        <div class="header_top header_body">
            <div class="header_top_box">
                <span class="iconfont">&#xeb66;</span><b>险种信息</b><span>(必填)</span>
            </div>

            <div class="inpuit_box header_text_in">
                <div>
                    <span style="color:#D31145">*</span>
                    险种名称
                </div>
                <div @click="showPicker($event, this.xianzhong)" class="gary">
                    请选择险种名称
                    <span class="icon iconfont gary">&#xe775;</span>
                </div>
            </div>

            <div class="inpuit_box header_text_in">
                <div>
                    <span style="color:#D31145">*</span>
                    交费方式
                </div>
                <div @click="showPicker($event, this.Pay)" class="gary">
                    请选择交费方式
                    <span class="icon iconfont gary">&#xe775;</span>
                </div>
            </div>

            <div class="inpuit_box header_text_in">
                <div>
                    <span style="color:#D31145">*</span>
                    年费年限
                </div>
                <div @click="showPicker($event, this.Paymenttime)" class="gary">
                    请选择年费年限
                    <span class="icon iconfont gary">&#xe775;</span>
                </div>
            </div>

            <div class="inpuit_box header_text_in">
                <div>
                    <span style="color:#D31145">*</span>
                    保险期间
                </div>
                <div @click="showPicker($event, this.xianzhong)" class="gary">
                    请选择保险区间
                    <span class="icon iconfont gary">&#xe775;</span>
                </div>
            </div>

            <div class="inpuit_box header_text_in">
                <div>
                    <span style="color:#D31145">*</span>
                    每期保费
                </div>
                <div @click="showPicker($event, this.money)" class="gary">
                    请选择每期保费(元)
                </div>
            </div>

            <!-- 添加险种信息 -->
            <button ref="but" @click="inputshow" class="body_butt"><span style="font-weight:700 ; font-size:18px"
                    class="iconfont">&#xeaf3;</span>
                添加险种信息</button>
            <!-- 点击出现的信息选择框 -->


            <div class=" header_body" style="margin-top:30px" v-show="input_box">
                <div class="header_top_box ">
                    <span class="iconfont">&#xeb66;</span><b>险种信息2</b><span>(必填)</span>
                    <span @click="showBlock" class="iconfont xe_68c" style="font-size:18px">&#xe68c;</span>
                </div>
                <div class="inpuit_box header_text_in">
                    <div>
                        <span style="color:#D31145">*</span>
                        险种名称
                    </div>
                    <div @click="showPicker($event, this.xianzhong)" class="gary">
                        请选择险种名称
                        <span class="icon iconfont gary">&#xe775;</span>
                    </div>
                </div>

                <div class="inpuit_box header_text_in">
                    <div>
                        <span style="color:#D31145">*</span>
                        交费方式
                    </div>
                    <div @click="showPicker($event, this.Pay)" class="gary">
                        请选择交费方式
                        <span class="icon iconfont gary">&#xe775;</span>
                    </div>
                </div>

                <div class="inpuit_box header_text_in">
                    <div>
                        <span style="color:#D31145">*</span>
                        年费年限
                    </div>
                    <div @click="showPicker($event, this.Paymenttime)" class="gary">
                        请选择年费年限
                        <span class="icon iconfont gary">&#xe775;</span>
                    </div>
                </div>

                <div class="inpuit_box header_text_in">
                    <div>
                        <span style="color:#D31145">*</span>
                        保险期间
                    </div>
                    <div @click="showPicker($event, this.xianzhong)" class="gary">
                        请选择保险区间
                        <span class="icon iconfont gary">&#xe775;</span>
                    </div>
                </div>

                <div class="inpuit_box  header_text_in">
                    <div>
                        <span style="color:#D31145">*</span>
                        每期保费
                    </div>
                    <div @click="showPicker($event, this.money)" class="gary">
                        请选择每期保费(元)
                    </div>
                </div>

                <div class="foot_bott">
                </div>
            </div>
        </div>

        <!-- 选择器 -->
        <div class="picker-main">
            <div v-if="show" class="picker">
                <section class="picker-main picker_container">
                    <h3>
                        <!-- <span style="font-size:16px" @click="show = false">取消</span> -->
                        <span style="margin-left:80px ; font-size:18px">请选择</span>
                        <span class="queren" style="font-size:14px" @click="sure()">确认</span>
                    </h3>
                    <ul ref="ul">
                        <li v-for="(item, index) in list" :key="index"
                            :class="active == item.id ? 'active' : active == item.id - 1 || active == item.id + 1 ? 'active2' : null"
                            :ref="'li' + item.label">{{ item.val }}</li>
                    </ul>
                </section>
            </div>
        </div>

        <!--  -->

        <Fixefooter @click="to" class="fixefooter" text="下一步"></Fixefooter>
    </div>
</template>

<script>
import Fixefooter from '@/components/Fixefooter.vue'
export default {
    data() {
        return {
            //初始数组
            list: [
                { id: -9, city: "", label: "a" },
                { id: -9, city: "", label: "b" },
                {
                    id: 0,
                    val: "",
                    label: "0"
                },
                {
                    id: 1,
                    val: "",
                    label: "1"
                },
                { id: -9, city: "", label: "c" },
                { id: -9, city: "", label: "d" }
            ],
            //渠道
            chanle: [
                { id: -9, city: "", label: "a" },
                { id: -9, city: "", label: "b" },
                {
                    id: 0,
                    val: "官网",
                    label: "0"
                },
                {
                    id: 1,
                    val: "介绍",
                    label: "1"
                },
                { id: -9, city: "", label: "c" },
                { id: -9, city: "", label: "d" }
            ],

            //险种
            xianzhong: [
                { id: -9, city: "", label: "a" },
                { id: -9, city: "", label: "b" },
                {
                    id: 0,
                    val: "未定义",
                    label: "0"
                },
                {
                    id: 1,
                    val: "未定义",
                    label: "1"
                },
                { id: -9, city: "", label: "c" },
                { id: -9, city: "", label: "d" }
            ],
            //是否
            whether: [
                { id: -9, city: "", label: "a" },
                { id: -9, city: "", label: "b" },
                {
                    id: 0,
                    val: "是",
                    label: "0"
                },
                {
                    id: 1,
                    val: "否",
                    label: "1"
                },
                { id: -9, city: "", label: "c" },
                { id: -9, city: "", label: "d" }
            ],
            //年限
            year: [
                { id: -9, city: "", label: "a" },
                { id: -9, city: "", label: "b" },
                {
                    id: 0,
                    val: "半年",
                    label: "0"
                },
                {
                    id: 1,
                    val: "一年",
                    label: "1"
                },
                { id: -9, city: "", label: "c" },
                { id: -9, city: "", label: "d" }
            ],
            Pay: [
                { id: -9, city: "", label: "a" },
                { id: -9, city: "", label: "b" },
                {
                    id: 0,
                    val: "银行卡",
                    label: "0"
                },
                {
                    id: 1,
                    val: "微信",
                    label: "1"
                },
                { id: -9, city: "", label: "c" },
                { id: -9, city: "", label: "d" }
            ],
            Paymenttime: [
                { id: -9, city: "", label: "a" },
                { id: -9, city: "", label: "b" },
                {
                    id: 0,
                    val: "半年",
                    label: "0"
                },
                {
                    id: 1,
                    val: "一年",
                    label: "1"
                },
                { id: -9, city: "", label: "c" },
                { id: -9, city: "", label: "d" }
            ],
            money: [
                { id: -9, city: "", label: "a" },
                { id: -9, city: "", label: "b" },
                {
                    id: 0,
                    val: "1万元",
                    label: "0"
                },
                {
                    id: 1,
                    val: "5万元",
                    label: "1"
                },
                { id: -9, city: "", label: "c" },
                { id: -9, city: "", label: "d" }
            ],
            //发送到vuex保存的数据
            Xstate: [

            ],
            show: false,
            active: 0,
            city: "",
            listOffsetTop: [],
            timer: null,
            input_box: false,
            etarget: null,
            yuanlai: ""
        };

    },
    mounted() {

    },
    methods: {
        to() {
            this.$router.push({ name: "broadcast" })
        },
        // 选择器调用方法
        showPicker(e, emo) {
            console.log(emo);

            e.target.innerText = null
            this.etarget = null
            this.etarget = e.target
            this.show = true;
            this.active = 0;
            this.timer = setTimeout(() => {
                clearTimeout(this.timer);
                this.$nextTick(function () {
                    this.computeActive(emo);
                    this.getOffsetTop(emo);
                })

            }, 50);
        },

        sure() {
            this.list.map((item, index) => {
                item.id == this.active ? (this.etarget.innerHTML = item.val) : null;
            });
            this.show = false;
        },
        getOffsetTop(emo) {
            this.listOffsetTop = [];
            this.list = emo
            this.list.map((item, index) => {
                let liTop = this.$refs["li" + item.label];
                this.listOffsetTop.push(liTop[0].offsetTop - 50);
            });
        },
        computeActive() {
            let scroll = this.$refs.ul;
            scroll.addEventListener("scroll", () => {
                this.listOffsetTop.map((item, index) => {
                    item <= scroll.scrollTop + 100 ? (this.active = index - 2) : null;
                });
            });
        },
        //点击多个选择险种信息
        inputshow() {
            console.log(111);
            if (this.input_box == false) {
                this.input_box = true
                this.$refs.but.style.display = "none"
            }
        },
        //点击删除 信息2
        showBlock() {
            this.input_box = false
            this.$refs.but.style.display = "block"
        }
    },

    props: ["test"],
    components: {
        Fixefooter,
    }
}
</script>

<style lang="less" scoped>
.fixefooter {

    position: fixed;
    bottom: 3%;
    left: 5%;
}

.body_box {
    position: relative;
    height: 100vh;
    background-color: rgba(211, 213, 214, 0.185);
}

.nowarp {
    height: 45px !important;
    margin: 10px 0 0 0 !important;
}

.gary {
    text-align: right;
    color: rgb(101, 104, 107)
}

.foot_bott {
    height: 80px;
    width: 100%;
}

.inpuit_box {
    height: 30px;
    border-bottom: 1px solid rgba(211, 213, 214, 0.596);
    display: flex;
    justify-content: space-between;
}

.warp {
    margin-top: 25px !important;
}

.warp_text {
    height: 20px;
    width: 30%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.header_top {
    height: 22%;
    background-color: rgb(255, 255, 255);
    width: 90%;
    margin: 0 auto;
    padding: 10px;
    border-radius: 15px;
    ;
}

.header_top_box {
    text-align: left;
    height: 10%;
    width: 100%;
    margin: 20px auto;
}

.xe_68c {
    float: right;
    margin-right: 15px;
}

.header_text_in {
    margin-top: 15px;
    margin-bottom: 20px;
}

.header_body {
    height: auto;
    background-color: rgb(255, 255, 255);
    margin-top: 20px;
}

.body_butt {
    height: 50px;
    width: 140px;
    font-weight: 500px;
    border-radius: 10px;
    border: 1px solid #D31145;
    color: #D31145;
    background-color: #fff;
    font-size: 16px;
    margin: 10px auto;
}

.fd_box {
    height: 40%;
    width: 100%;
    position: absolute;
    bottom: 0%;
    background: #1411d3;
}

.fd_top {
    height: 50px;
    text-align: right;
    margin-right: 20px;
    line-height: 50px;
    font-size: 22px;
    color: rgba(211, 213, 214, 0.788);
    font-weight: 600;
}

.fd_text {
    height: 150px;
    width: 100%;
    text-align: center;
    margin: 0 auto;
    background-color: #775d64;
}

.fd_text ul {

    display: flex;
    justify-content: center;
    flex-flow: column-reverse;
    align-content: space-between;
    overflow: hidden;
}

.fd_text ul li {
    height: 30px;
    margin: 13px;
}


.queren {
    float: right !important;
    margin-right: 40px;
}

.picker_container {
    width: 100%;
    position: absolute;
    bottom: 0;
    background-color: #fff;
    z-index: 99999;
}

.picker {
    background-color: rgba(0, 0, 0, 0.2);
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    z-index: 99999;

    .picker-main {
        width: 100%;
        position: absolute;
        bottom: 0;
        background-color: #fff;
        z-index: 9999;

        h3 {
            width: 100%;
            padding: 0;
            margin: 0;
            border-bottom: solid 1px #ddd;
            font-size: 20px;
            line-height: 40px;
            text-align: center;
        }

        ul {
            max-height: 250px;
            padding: 0;
            margin: 0;
            overflow: auto;
            background-color: #fff;

            li {
                list-style: none;
                font-size: 25px;
                line-height: 50px;
                text-align: center;
                opacity: 0.3;
                height: 50px;
                background-color: #fff;
            }
        }
    }
}

.active {
    background-color: #ddd !important;
    color: #333;
    opacity: 1 !important;
}

.active2 {
    color: #333;
    opacity: 0.6 !important;
}
</style>