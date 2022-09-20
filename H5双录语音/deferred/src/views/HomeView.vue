<template>

    <div v-if="box_top" class="heder_box">
    </div>

    <div id="app">
        <!-- <button @click="playVoice">播放语音</button> -->

        <div class="teto_box">
            <div class="header_teto">智能双录辅助</div>
            <div class="header_bot">欢迎进入智能双录辅助</div>
        </div>
        <!-- 选项框 -->
        <div class="body_box" @click="popua_box">
            <div class="body_top_box">
                <div><i class="iconfont">&#xe68d;</i> 银行名称</div>
                <div>{{ langyinhan }} <span class="icon iconfont">&#xe775;</span></div>
            </div>
            <div class="body_box_bot">
                <div><i class="iconfont">&#xe8c4;</i> 请选择选择语音语速</div>
                <div>{{ langname }} {{ langsud }} <span class="icon iconfont">&#xe775;</span></div>
            </div>
        </div>

        <div v-if="popup" class="popup_box">
            <div class="popua_box_pua">
                <div style="text-align:center;margin-left:30px;height:10%;line-height:10%"><span>选择语音语速</span><span
                        @click="false_pop"
                        style="float: right;margin-right:30px;font-size:18px;color:rgba(235,235,230)">X</span></div>
                <div style="margin:10px"><span class="iconfont">&#xe865;</span> 播放语音</div>
                <div class="gir_boy">
                    <!-- 单选框 -->
                    <div class="icon_box" @click="pua">
                        <span v-show="puadata_gir" class="iconfont ">&#xe63b;</span>
                    </div>
                    <span class="gir_boy_teto">女声</span>
                    <div class="icon_box" @click="pua_boy">
                        <span v-show="puadata_boy" class="iconfont">&#xe63b;</span>
                    </div>
                    <span class="gir_boy_teto">男声</span>
                </div>
                <div style="margin:10px;height:10%">
                    <div><span class="iconfont">&#xe8c4;</span>&nbsp;播放速度</div>
                </div>
                <div style="margin:0 10px 0 10px; height:40%">
                    <div class="flex_box">
                        <div class="flex_left">低速</div>
                        <div class="icon_box icon_sir" @click="pua_sudu($event, 1)">
                            <span v-show="disu" class="iconfont dui">&#xe63b;</span>
                        </div>
                    </div>
                    <div class="flex_box">
                        <div class="flex_left">中速</div>
                        <div class="icon_box icon_sir" @click="pua_sudu($event, 2)">
                            <span v-show="zgsu" class="iconfont dui">&#xe63b;</span>
                        </div>
                    </div>
                    <div class="flex_box">
                        <div class="flex_left">高速</div>
                        <div class="icon_box icon_sir" @click="pua_sudu($event, 3)">
                            <span v-show="gosu" class="iconfont dui">&#xe63b;</span>
                        </div>
                    </div>
                </div>
                <div class="popup_but">
                    <button class="pop_but_left"><span style="float: left;margin:1px 10px 0 15px "
                            class="iconfont">&#xe6f9;</span>试听</button>
                    <div class="pop_but_rig" @click="netxnum">确定</div>
                </div>
            </div>
        </div>

    </div>
    <!-- 选项弹出框 -->
    <Fixefooter text="进入" @click="to()" class="fixefooter"></Fixefooter>
</template>
<script>
import Fixefooter from '../components/Fixefooter.vue';
export default {
    data() {
        return {
            langname: '女声',
            langsud: '正常',
            langyinhan: '浦发银行',
            puadata_gir: false,
            puadata_boy: false,
            popup: false,
            box_top: false,
            disu: false,
            zgsu: false,
            gosu: false,
            langlist: {
                lang: "女声",
                sudu: "正常",
                yinhan: "浦发银行",
            },
        };
    },
    components: {
        Fixefooter,
    },
    methods: {
        //跳转
        to() {
            this.$router.push({ name: "From" })
            this.$store.commit("Voice", this.langlist)
            console.log(this.$store.state)
        },
        // 展开选择
        popua_box() {
            console.log(this.popup);
            if (this.popup == false) {
                this.popup = true
                this.box_top = true
            }
            else if (this.popup == true) {
                this.popup = false
                this.box_top = false
            }
        },
        //女声x事件
        pua() {
            if (this.puadata_gir == false) {
                this.puadata_gir = true
                this.puadata_boy = false
            } else if (this.puadata_gir == true) {
                this.puadata_gir = false
            }
            this.langlist.lang = "女声"
        },
        //男声事件
        pua_boy() {
            if (this.puadata_boy == false) {
                this.puadata_boy = true
                this.puadata_gir = false
            } else if (this.puadata_boy == true) {
                this.puadata_boy = false
            }
            this.langlist.lang = "男声"
        },
        // x 关闭事件
        false_pop() {
            this.popup = false
            this.box_top = false
        },
        pua_sudu(e, num) {
            console.log(num);
            if (num == 1) {
                this.disu = true
                this.zgsu = false
                this.gosu = false
                this.langlist.sudu = "低速"
            } else if (num == 2) {
                this.disu = false
                this.zgsu = true
                this.gosu = false
                this.langlist.sudu = "中速"
            } else if (num == 3) {
                this.disu = false
                this.zgsu = false
                this.gosu = true
                this.langlist.sudu = "高速"
            }
        },
        //保存选择的数据
        netxnum() {
            this.langsud = this.langlist.sudu
            this.langname = this.langlist.lang
            this.langyinhan = this.langlist.yinhan
            this.popup = false
            this.box_top = false
        }
    }
};
</script>

<style scoped>
#app {
    height: 100%;
    margin: 0;
}

.fixefooter {
    position: absolute;
    left: 5%;
    bottom: 30px;
}

.heder_box {
    height: 100%;
    width: 100%;
    background: rgba(70, 69, 69, 0.363);
    margin: 0 auto;
    position: absolute;
    z-index: 888;
    top: 0;
}

.teto_box {
    padding-top: 3rem;
    background-color: white;
}

.header_teto {
    color: #D31145;
    font-size: 22px;
    font-weight: bolder;
}

.header_bot {
    font-weight: bolder;
    margin-top: 3rem;
    font-size: 20px;
}

.body_box {
    height: 20%;
    width: 100%;
    margin-top: 35%;
}

.iconfont {
    font-size: 18px;
    color: #D31145;
}

.body_top_box {
    height: 30px;
    display: flex;
    justify-content: space-between;
    margin: 20px;
    border-bottom: 1px solid rgba(235, 235, 235, 0.596);
}

.body_box_bot {
    height: 30px;
    display: flex;
    justify-content: space-between;
    margin: 20px;
    border-bottom: 1px solid rgba(235, 235, 235, 0.596);
}

.popup_box {
    height: 50%;
    width: 100%;
    text-align: left;
    position: absolute;
    background-color: #fff;
    z-index: 9990;
    bottom: 0;
}

.popua_box_pua {
    height: 73%;
    width: 100%;
    position: absolute;
    top: 5%
}

.icon_box {
    margin: 0;
    padding: 0;
    height: 16px;
    width: 16px;
    border: 0.5px solid rgb(156, 156, 156);
    border-radius: 50%;
    cursor: pointer;
    text-align: center;
    line-height: 17px;
}

.gir_boy {
    height: 10%;
    display: flex;
    margin: 20px 20px 0 20px;
}

.gir_boy_teto {
    margin: auto 20px 20% 20px;
}

.flex_box {
    height: 40px;
    width: 100%;
    text-align: center;
    line-height: 40px;
    display: flex;
    border-bottom: 0.5px solid rgba(235, 235, 235, 0.596);
    justify-content: space-between;
}

.icon_sir {
    margin-right: 10px;
    margin-top: 15px;
}

.flex_left {
    margin-left: 10px;
}

.dui {
    margin-bottom: 10px;

}

.popup_but {
    height: 15%;
    line-height: 15%;
    margin-top: 10%;
    width: 100%;
    display: flex;
    background: #fff;
    justify-content: space-around;
}

.pop_but_left {
    height: 35px;
    width: 30%;
    background-color: white;
    text-align: left;
    line-height: 25px;
    border: 1px solid rgba(161, 161, 161, 0.411);

}

.pop_but_rig {
    height: 35px;
    width: 50%;
    text-align: center;
    color: #fff;
    line-height: 35px;
    background-color: #D31145;
}
</style>