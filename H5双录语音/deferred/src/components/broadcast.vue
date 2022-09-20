<template>
    <div class="container">
        <div class="header_box">
            <div class="header_header">
                <div class="header_header_text">{{ header }}</div>
            </div>
            <div class="header_header_h1">{{ h1 }}</div>
            <div class="header_header_text_p">{{ text_p }}</div>
            <div v-show="header_text" class="header_fooot_text">客户回答：{{ text }}</div>
        </div>

        <div class="footer_box">
            <div class="footer_min_lebox">
                <div class="iconfont  btn_left"> &#xe661;</div>
                <div class="text_footer">上一步</div>
            </div>
            <div class="footer_min_cebox">
                <div @click="stp()" v-show="iconfont" class="iconfont  btn_player">
                    <spa style="margin-left:-5px">&#xea81;</spa>
                </div>
                <div @click="play($event)" v-show="iconfont_play" class="iconfont  btn_player"><span>&#xe653;</span>
                </div>
                <div class="text_footer" style="margin-top :15px;">{{ player }}</div>
            </div>
            <div class="footer_min_lebox">
                <div class="iconfont  btn-primary">&#xe664;</div>
                <div class="text_footer">下一步</div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            txy: [{
                text: "你好 我是你爹",
                SessionId: "1400314497 ",
                Volume: 1,
                Speed: 1,
                ProjectId: 1223216,
                ModelType: 1,
                VoiceType: 1003,
            }],
            header_text: false,
            iconfont_play: true,
            iconfont: false,
            player: "播放",
            header: "1/1",
            h1: "产品类型的是是是",
            text: "清楚",
            text_p: "您所购买的是XX人寿名为福添利两全保险（分红型）的保险产品。福添利两全保险（分红型）保险是一次性交费的保险产品，保费1元，保险期间5年。请问我说清楚了吗？",
        }
    },

    // props: ["header","h1","text_p","text"],
    mounted() {
        console.log("🚀 ~ file: broadcast.vue ~ line 62 ~ mounted ~ this", axios)
    },

    methods: {
        //开始
        play(e) {

            this.iconfont_play = false;
            this.iconfont = true;
            // 发送 POST 请求
            axios.post('/api', {
                Action: '=TextToVoice',
                version: '2019-08-23',
                Region: "ap-chengdu",
                Text: "我是你爹"
            }).then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });


            // let xhr = new XMLHttpRequest();
            // xhr.open("POST", "api");
            // xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded")
            // xhr.send("Action=你好 我是你爹")
        },
        //暂停
        stp() {
            this.iconfont_play = true;
            this.iconfont = false;

        }
    }
}  
</script>

<style>
.container {
    height: 100%;
}

.header_box {
    height: 70%;
    width: 90%;
    margin: 0 auto;
    margin-top: 20px;
    background-color: white;
    border-radius: 25px;
    box-shadow: 0 0 15px rgb(0 0 0 / 15%);
}

.header_header {
    width: 100%;
    height: 60px;
    text-align: right;
    line-height: 30px;
}

.header_header_text {
    height: 30px;
    width: 120px;
    background-color: #D31145;
    color: white;
    float: right;
    margin-right: 20px;
    text-align: center;
    border-radius: 20px;
    margin-top: 20px;
}

.header_header_h1 {
    width: 100%;
    height: 40px;
    margin-top: 10px;
    font-size: 18px;
    font-weight: 600;
}

.header_header_text_p {
    width: 80%;
    height: 180px;
    line-height: 25px;
    margin: 0 auto;
    text-align: left;
    font-size: 18px;
}

.header_fooot_text {
    width: 80%;
    height: 30px;
    margin: 0 auto;
    text-align: left;
    font-size: 16px;
    color: rgb(22, 154, 206);
}

.footer_box {
    height: 120px;
    width: 100%;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-around;
}

.footer_min_lebox {
    width: 30%;
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
}

.btn_left {
    height: 40px;
    width: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 50%;
    border: 2px solid #D31145;
    color: #D31145;
    margin: 0 auto;
    margin-top: 10px;
    background-color: rgba(250, 250, 250, 0);
}

.btn-primary {
    height: 44px;
    width: 44px;
    text-align: center;
    border-radius: 50%;
    color: aliceblue;
    line-height: 44px;
    margin: 0 auto;
    margin-top: 10px;
    background-color: #D31145;
}

.btn_player {
    height: 65px;
    width: 60px;
    text-align: center;
    line-height: 65px;
    font-size: 25px;
    background-color: #D31145;
    color: white;
    border-radius: 50%;
    padding-left: 5px;
    margin: 0 auto;
}

.text_footer {
    margin-bottom: 20px;
    font-size: 14px;
}

.footer_min_cebox {
    width: 40%;
    height: 100%;
    text-align: center;
}
</style>