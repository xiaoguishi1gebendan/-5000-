import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
    // 定义状态
    state: {
        a:{
            b:1
        },
        qishu:'',
        rechage:"",
        rechargedetal: "",
        val: "",
        userid: "",
        chamount: "",
        rechargePash: "",
        bankdetal: "",
        bankid: '',
        headername: "",
        rechargedetailin: "",
        plateformConfigId: "",
        messageAll:"",
        touzhu:"",
        homeData:"",
        currentUser1:"",
        bankNameP:"",
        bankAccountP:"",
        item:"",
        username:"",
        password:"",
        lotr:"",
        respage:"",
        // password:"",
        //首页下载地址缓存
        homeDownLoadUrl:'',
        //首页弹出提示信息缓存
        homePopData:'',
        // qiandao:"签到"
        //所有彩种
        colorplay:"",
        //彩种数据
        lotteryList:"",
        //是否加载了购彩页面定时器
        isLoadBuyTimer:false,
        //是否加载了开奖页面定时器
        isLoadOpenTimer:false,
        //六合彩生肖缓存
        animalsCollections:'',
        //活动详情缓存
        avtivityDetails:"",
        //首页彩种类别跳转
        homeType:'',
        homecolor:'',
        // 走势图
        nummaxAll:"",
        nummaxAllRult:"",
        // 判断注单页面返回
        betterRouter:"",
        nummaxAllRult:"",
        //是否收藏
        isshoucan:"",
        // 判断二级玩法
        iserji:"",
        isgcjl:"",
        iswintouzu:"",
        playIdMa:"",

        // 判断代理页面默认显示

        daiLiType:1,
        // 用户信息
        currentUser:"",
       
        isgoucai:"",
        //判断是不是购彩页面
        isgoucaixq:"",
        isgoucaidt:"",

        // 阻止mine父页面滚动的判断条件
        issufficient:"",
        ishomecolorclick:"",
        // 正在开奖

        istimezzkj:[],
        ishomecolorclicker:"",


        // 投注记录缓存
        bettingAll:"",
        // 账户明细
        accountAll:"",
        // 充值记录缓存
        rechargeAll:"",
        // 代理用户缓存
        agencydown:"",
        // 玩法规则缓存
        bonusAll:"",
        sort:"",
        // 详情设定缓存
        settingAll:"",
        // 奖金详情缓存
        bonusAlled:"",
        // 记录充值成功后返回层数
        goNum:1,
        // 判断报表页面初始状态
        reportQueryType:1,
        //是不是机选
        isjixuan:'',
        // 购彩页面返回
        buyNum:1,
        homegocolor:false,
        // 防止充值进入充值记录页面刷新

        rechargtype:1,
        ishometankuang:'',

        rechargtype:1,

        rechargtype:1,
        //第一次进入任何页面都要让loading显示
        loadingBlock: {bet: 1, mine: 1, lottery: 1, buycolor: 1, home: 1,gouzoushi:1},
        ishometankuangtesxt:'',
        xiazaishow:false,
        homedom:true,
        // 基础数据
        sysConfigMap:"",

        isshuju:'',
        ishistorydraw:{},
        //判断要不要显示动画
        islodershow:'',
        // 判断是否收藏
        iscollect:{},
        islodershow:'',
        // 判断是否首次进入首页
        firstHomeGo:false,
        firMine: true,
        money:"",
        unViewNum:"",
        noDrawRedCount:"",
        userType:"",
        // 所有彩种
        lottercolorAll:{},
        // 一级玩法
        yijiwanfaAll:{},
        // 二级玩法
        erjiwanfa:{},
        //彩种ID：一级玩法--二级玩法--玩法明细--玩法明细值
        lotteryCollctions:{},
        // 账户明细

        accoundetal:{},
        //购彩大厅的图片地址
        urlgoucai:'',

        accoundetal:{},
        
        followupsj:'',

        // yaoqingma
        resultsecode:[],
        pageSize:10,
        followupsjon:'',
        istankuang:'',
        islsjl:'',
        //快三
        isks:'',
        ispk:'',
        iskong:'',
        issudu:'',
        storetankuang:true,
        tankuangims:"",
        formart:0,
        isid:'',
        xinyunpic:[],
        zinde:0,
        playwf:false,
        dtbggo:"",
        startDate:"",
        endDate: "", 
        agencyDownid:"",
        agencyDownname:""
    },
    getters:{
        //处理彩种
        getcolorsj(state){
            return state.colorplay
        },
        //处理彩种集合
        getawnfaAll:(state,getters)=>{
            return (ida)=>{
                for(var sss=0;sss<50;sss++){
                    if(!state.lottercolorAll[sss]){
                        continue;
                    }
                    var a = state.lottercolorAll
                    var b = state.yijiwanfaAll
                    var c = state.erjiwanfa
                    var str = {};
                    str.lotterid = sss;
                    str.yijiwanfaAll = []
                    for(var t = 0;t<a[sss].length;t++){
                        str.yijiwanfaAll.push(a[sss][t])
                        str.yijiwanfaAll[t].erjiwanfa=[]
                        for(var z = 0;z<b[a[sss][t].id].length;z++){
                            str.yijiwanfaAll[t].erjiwanfa.push(b[a[sss][t].id][z])
                            str.yijiwanfaAll[t].erjiwanfa[z].sanjiwanfa = []
                            for(var p = 0;p<c[b[a[sss][t].id][z].id].length;p++){
                                str.yijiwanfaAll[t].erjiwanfa[z].sanjiwanfa.push(c[b[a[sss][t].id][z].id][p])
                            }
                        }
                    }
                    state.lotteryCollctions[sss] = str;
                }
                return ''
            }
        }
        
    },
    mutations: {
        getplaycolor(state,getcolorplaysj) {
            state.colorplay = getcolorplaysj
        },
        // 一级玩法及所有彩种
        suoyoucaizhong(state,suoyoucolor){
            state.lottercolorAll = suoyoucolor
        },
        // 二级玩法
        yijiwanfa(state,yijiwanfaAll){
            state.yijiwanfaAll = yijiwanfaAll
        },
        //所有玩法号码的渲染
        erjiwanfa(state,erjiwanfaAll){
            state.erjiwanfa = erjiwanfaAll
        },
        // 退出时和清空缓存时,把vuex的所有数据初始化;
        clearVuex(state){
            state.userType="",
            state.unViewNum="",
            state.noDrawRedCount="",
            state.loginin= false,
            state.loginfou=  false,
            state.rechage = "",

            state.qishu ="",
            state.rechargedetal=  "",
            state.val= "",
            state.userid= "",
            state.chamount= "",
            state.rechargePash= "",
            state.bankdetal= "",
            state.bankid= '',
            state.headername= "",
            state.rechargedetailin= "",
            state.plateformConfigId= "",
            state.messageAll="",
            state.touzhu="",
            state.homeData="",
            state.currentUser1="",
            state.bankNameP="",
            state.bankAccountP="",
            state.item="",
            state.password="",
            state.lotr="",
            state.respage="",
            state.homeDownLoadUrl='',
            state.homePopData='',
            state.colorplay="",
            state.lotteryList="",
            state.isLoadBuyTimer=false,
            state.isLoadOpenTimer=false,
            state. animalsCollections='',
            state. avtivityDetails="",
            state.homeType='',
            state.homecolor='',
            state.nummaxAll="",
            state.nummaxAllRult="",
            state.betterRouter="",
            state.nummaxAllRult="",
            state.isshoucan="",
            state.daiLiType=1,
            state.currentUser= "",
            state.isgoucai="",
            state.isgoucaixq="",
            state.isgoucaidt="",

            state.issufficient="",
            state.ishomecolorclick="",
            state.istimezzkj=[],
            state.bettingAll="",
            state.accountAll="",
            state.rechargeAll="",
            state.agencydown="",
            state.bonusAll="",
            state.sort="",
            state.settingAll="",
            state.bonusAlled="",
            state.sort="",
            state.settingAll="",
            state.bonusAlled="",
            state.goNum=1,
            state.reportQueryType=1,
            state.isjixuan='',
            state.buyNum=1,
            state.homegocolor=false,
            state.rechargtype=1,
            state.ishometankuang='',
            state.rechargtype=1,
            state.rechargtype=1,
            state.loadingBlock={},
            // state.loadingBlock={ bet: 1, mine: 1, lottery: 1, buycolor: 1, home: 1 },
            state.ishometankuangtesxt='',
            state.xiazaishow= false,
            state.homedom=true,
                        // 基础数据
            state.sysConfigMap= "",
            state.isshuju= '',
            state.money=""
        }
    }
})

export default store