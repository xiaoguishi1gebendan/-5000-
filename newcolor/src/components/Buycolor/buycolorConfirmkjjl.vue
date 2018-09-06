<template>
    <div style="overflow: hidden;position:absolute;top:0;width:100%;height:100%;background: white;z-index:1000;">
        <div class="models">
			<div class="modelsmin">
				<div class="top">提示</div>
				<div class="maidden">余额不足，下单失败，是否是充值？</div>
				<div class="footera">
					<span class="confirmqx">取消</span>
					<span class="enfirmqd">确定</span>
				</div>
			</div>
		</div>
        <div class="playing-hint-state">
			<div class="main-all">
				<span>什么是中奖后停止追号</span>
				<p>勾选后，当你的追号方案某一期中奖，则后续的追号订单将被撤销，奖金返还到你的账户，如不勾选，系统一直帮您购买所有的追号投注订单。</p>
				<span class="ok">ok</span>
			</div>
			
		</div>
		<div id="layout"  style="background-color: #f5f5f5;">
			<div class="header_wrap">
				<div class="header">
					<div @click="gobacka" class="set ">
						<i class="iconfont">&#xe61f;</i>
					</div>
					<h2>投注列表</h2>
				</div>
			</div>
			<!--主内容区-->
			<div class="ocontent" style="margin-top:0">
				<div class="timecount">
					距<span id="lotteryNoSpan">{{thisdatalist.lotteryDraw.shortNextNo | addZero}}</span>期截止<p><span id="remainTimeSpan"><p class="spans">{{thisdatalist| mytimeAll('shi1')}}</p><p class="spans">{{thisdatalist| mytimeAll('shi2')}}</p>:<p class="spans">{{thisdatalist| mytimeAll('fen1')}}</p><p class="spans">{{thisdatalist| mytimeAll('fen2')}}</p>:<p class="spans">{{thisdatalist| mytimeAll('miao1')}}</p><p class="spans">{{thisdatalist| mytimeAll('miao2')}}</p></span></p>
				</div>
				<div class="obet">
					<div class="selectbet">
						<div class="selecttop">
							<div @click="gobacka" class="goback">
								<i class="iconfont">&#xe60f;</i>
								<span>返回添加一注</span>
							</div>
							<div class="randombet">
								<i class="iconfont">&#xe60f;</i>
								<span>添加机选一注</span>
							</div>
						</div>
						<div class="numtext" style="display: block;!important;">
							统一金额<input style="float: right;height: 0.6rem;width: 40%;line-height: 0.6rem;border: 0.01rem solid #ccc;border-radius: 0.04rem;background: #fff;margin: 0.05rem 0 0 .1rem;font-size: 0.28rem;text-indent: 0.05rem;" pattern="[0-9]*" :dataId="index" maxlength="6" class="gl-txt" id="settingAllAmount" type="tel" placeholder="" value=""  onkeyup="value=value.replace(/[\W]/g,'')">
						</div>
					</div>
					<!--注单列表-->
                    <ul class="hkbetlist" style="height: 301px; overflow-y: auto;">
                        <li v-for="(picktherendermin,index) in picktherender" :key="index">
                            <div class="lileft">
                                <div class="delete" :name="index">
                                    <img src="../../assets/source/imgs/delete.png">
                                </div>
                            </div>
                            <div class="liright">
                                <p v-if="picktherendermin.isweishu!=undefined" style="display: flex;align-items: flex-end;flex-wrap: wrap;line-height: 13px;">{{picktherendermin.isweishu|isweishuAll}} {{picktherendermin.xzhm}}</p>
                                <p v-else style="display: flex;align-items: flex-end;flex-wrap: wrap;line-height: 13px;">{{picktherendermin.xzhm}}</p>
                                <div class="licoenten">
                                    赔率：<span>{{picktherendermin.peilv|stringFilter}}&nbsp;&nbsp;&nbsp;</span>返利：<span>{{picktherendermin.fanlv}}%</span>
                                </div>
                                <div class="detail">
                                    <span class="zus">{{picktherendermin.zushu}}</span>注 <span class="moayAll">{{picktherendermin.zonge|tofixed}}</span>元 
                                    <input pattern="[0-9]*" :dataId="index" maxlength="6" id="" class="gl-txt" type="tel" :placeholder="picktherendermin.isdanzu" v-model="picktherendermin.isdanzuval">
                                </div>
                                <div class="">
                                    <span>{{picktherendermin.wanfa}}</span>
                                </div>
                            </div>
                        </li>
                    </ul>
				</div>
				<!--追加期数-->
				
			</div>
			
		</div>

         <div v-if="!isid" ref="boty" style="position: relative;width:100%;bottom: 0.8rem;">
             <div class="wrap-addto" style="position:absolute;">
					<div class="addto">
						<div class="addto-left fl">
							<!--<label class="labels" for="xxx"><img class="imgAll" src="/source/imgs/wxz.png" alt="" /></label>-->
							<!--<input style="" id="xxx" class="checkbox_xz" type="checkbox" />中奖后停止追号-->
							<span class="checkbox_xz"></span>中奖后停止追号
						</div>
						<img id = "imgs" style="width: 20px;" src="../../assets/source/imgs/zq.png" alt="" />
						<div class="addto-right fr">
							追<div class="periods">
								<span class="chase-down">-</span>
								<span class="chase-num">{{followup}}</span>
								<span class="chase-up">+</span>
							</div>
							期
						</div>
					</div>
			</div>
			<div class="wrap-foot" style="position:absolute">
				<div class="foot">
					<div class="btn" id="qk">
						清空
					</div>
					<div class="footcontent">
						<p>共<span id="totalAmount">{{moeryAll|toFixeda}}</span>元</p>
						<p>共<span id="totalNum">{{moery}}</span>注</p>
					</div>
					<div class="btn isclick tz" @click="buyConfirm()">
						付款
					</div>
				</div>
			</div>
        </div>
         <div v-if="isid" ref="boty" style="position: relative;width:100%;bottom: 80px;">
             <div class="wrap-addto" style="position:absolute;">
					<div class="addto">
						<div class="addto-left fl">
							<!--<label class="labels" for="xxx"><img class="imgAll" src="/source/imgs/wxz.png" alt="" /></label>-->
							<!--<input style="" id="xxx" class="checkbox_xz" type="checkbox" />中奖后停止追号-->
							<span class="checkbox_xz"></span>中奖后停止追号
						</div>
						<img id = "imgs" style="width: 20px;" src="../../assets/source/imgs/zq.png" alt="" />
						<div class="addto-right fr">
							追<div class="periods">
								<span class="chase-down">-</span>
								<span class="chase-num">{{followup}}</span>
								<span class="chase-up">+</span>
							</div>
							期
						</div>
					</div>
			</div>
			<div class="wrap-foot" style="position:absolute">
				<div class="foot">
					<div class="btn" id="qk">
						清空
					</div>
					<div class="footcontent">
						<p>共<span id="totalAmount">{{moeryAll|toFixeda}}</span>元</p>
						<p>共<span id="totalNum">{{moery}}</span>注</p>
					</div>
					<div class="btn isclick tz" @click="buyConfirm()">
						付款
					</div>
				</div>
			</div>
        </div> 
    </div>
</template>

<script>
    export default{
        data(){
            return{
                thisdatalist:{},
                picktherender:[],
                xuanhaoAll:[],
                arrayxhsz:[],
                localChooseQueue:[],
                randomChooseIndexs:'',
                arrayxhszAll:[],
                bettingOdds:'',
                bettingNum:0,
                localUser:{},
                bettingValue:'',
                moery:0,
                moeryAll:0,
                followup:1,
                fale:0,
                playIdM:0,
                zaitiy:0,
                ff:{},
                isjia:0,
                isqian:0,
                er:2
            }
        },
        computed:{
            isid(){
                return this.$store.state.isid;
                }
             },
        created(){
            if(!!this.$store.state.followupsj){
                this.followup=this.$store.state.followupsj
            }
            if(!!this.$store.state.followupsjon){
                if(this.$store.state.followupsjon){
                    setTimeout(function(){
                        $('.checkbox_xz').click()
                    },100)
                }
            }
            console.log(this.$store.state.iserji)
            this.playIdM = this.$store.state.playIdMa;
            console.log(this.$store.state.playIdMa);
            if(window.localStorage.getItem('currentUser')!=null){
                this.localUser = JSON.parse(window.localStorage.getItem("currentUser"));
            }
            var $thisnwea = this;
            // this.thisdatalist = this.change('thisdatalist');
            for(var t= 0;t<this.$store.getters.getcolorsj.data.lotteryList.length;t++){
                if(this.$store.getters.getcolorsj.data.lotteryList[t].id==window.localStorage.getItem('thisdatalist')){
                     this.thisdatalist = this.$store.getters.getcolorsj.data.lotteryList[t];
                     break;
                }
            }
           
            console.log(this.thisdatalist);
            // this.cache_timeout_id_ = setInterval(function(){
			//     $thisnwea.zzz(baseSokectQueue);
            // },1000);
            console.log(!!JSON.parse(window.localStorage.getItem('songshuj')));
            var a = [];
            // console.log(!JSON.parse(window.localStorage.getItem('songshuj')));
            if(!!JSON.parse(window.localStorage.getItem('songshuj'))){
                for(var i = 0;i<JSON.parse(window.localStorage.getItem('songshuj')).length;i++){
                    a.unshift(JSON.parse(window.localStorage.getItem('songshuj'))[i])
                }
            }else{
                a=[];
            }
           console.log(!!window.localStorage.getItem('buycolorAll'));
            if(!!window.localStorage.getItem('buycolorAll')){
                console.log(JSON.parse(window.localStorage.getItem('buycolorAll')));
                var b = JSON.parse(window.localStorage.getItem('buycolorAll'));
                if(!!JSON.parse(window.localStorage.getItem('songshuj'))){
                    // b = JSON.parse(window.localStorage.getItem('songshuj'));
                    for(var i = 0;i<JSON.parse(window.localStorage.getItem('songshuj')).length;i++){
                        b.unshift(JSON.parse(window.localStorage.getItem('songshuj'))[i])
                    }
                    window.localStorage.removeItem('songshuj');
                }
                this.picktherender = b;
                // window.localStorage.setItem('buycolorAll',JSON.stringify(this.picktherender));
            }else{
                // window.localStorage.setItem('buycolorAll',JSON.stringify(a));
                this.picktherender = a;
            }
            window.localStorage.setItem('buycolorAll',JSON.stringify(this.picktherender));
            console.log(this.picktherender);
            // console.log(this.picktherender[0].aaa);
            console.log(JSON.parse(window.localStorage.getItem('xuanhaoAll')));

            this.xuanhaoAll = JSON.parse(window.localStorage.getItem('xuanhaoAll'));
            if(this.xuanhaoAll[0].play.isBase == 1){
                // var isweishu = [];
                // for(var z = 0;z<$("span[name='foot_a']").length;z++){
                //     if($($("span[name='foot_a']")[z]).hasClass("spanbg")){
                //         isweishu.push($($("span[name='foot_a']")[z]).attr('id'))
                //     }
                // }
                // window.localStorage.setItem('isweishu',JSON.stringify(isweishu))
                
            }
            // console.log(window.localStorage.getItem('lotteryPlayMapmin'));
            // console.log(this.xuanhaoAll);
            // console.log(window.localStorage.getItem('xuanhaoAll'));
        },
        mounted:function(){
            this.jsAll();
            this.defalts();
            this.moerys();
            this.footerheid();
            this.iszhuiqi();
            var $this = this;
            this.a();//判断赔率显示
            this.isonlystyle();
             document.getElementsByClassName("hkbetlist")[0].style.height=document.getElementsByTagName("body")[0].offsetHeight-document.getElementsByClassName("pde")[0].offsetHeight-330+'px'
        },
        methods:{
            isonlystyle(){
              
            },
            //判断赔率显示
            a(){
                if(window.localStorage.getItem('ispeilnshow')==0){
                    for(var a = 0;a<$('.licoenten').length;a++){
                        $('.licoenten').eq(a).hide();
                    }
                }
            },
            iszhuiqi(){
                this.isjia = 0;
                this.isqian = 0;
                // console.log(this.picktherender);
                for(var i = 0;i<this.picktherender.length;i++){
                    this.isjia +=(+this.picktherender[i].zushu)
                    this.isqian+=(+this.picktherender[i].zonge)
                }
                console.log(this.isjia);
                console.log(this.followup);
                this.moery=this.isjia*this.followup;
                this.moeryAll = this.isqian*this.followup
                // 
                
            },
            footerheid(){
                $('.foottab').css('display','none')
            },
            moerys(){
                this.moery = 0;
                this.moeryAll = 0;
                for(var i = 0;i<this.picktherender.length;i++){
                    this.moery+=(+this.picktherender[i].zushu)
                    console.log(this.picktherender[i].zonge)
                    this.moeryAll+=(+this.picktherender[i].zonge)
                }
                console.log(this.moery);
                console.log(this.moeryAll);
                this.moeryAll = this.moeryAll
            },
            defalts(){
                if(window.localStorage.getItem('issuiji')=='yes'){
                    $('.randombet').click();
                    window.localStorage.setItem('buycolorAll',JSON.stringify(this.picktherender));
                    window.localStorage.setItem('issuiji','no');
                }
            },
            change(a){
                return JSON.parse(window.localStorage.getItem(a)); 
            },
            // zzz(baseSokectQueue){
            //     var lotteryDraw = baseSokectQueue.shift();
            //     this.thisdatalist.lotteryDraw.closeTime -= 1000;
            //     if(lotteryDraw!=undefined){
            //         if(this.thisdatalist.id==lotteryDraw.lotteryId){
            //             this.thisdatalist.lotteryDraw.closeTime = lotteryDraw.remainTime;
            //             this.thisdatalist.lotteryDraw.lotteryNo = lotteryDraw.lotteryNo;
            //             this.thisdatalist.lotteryDraw.result = lotteryDraw.result;
            //             this.thisdatalist.lotteryDraw.nextNo = lotteryDraw.nextNo;
            //         }
            //     }
            // },
            //所有js事件
            jsAll(){
                $('.hkbetlist').css({'height':($(window).height())*.45})  
                var $this = this;
                // $('.back .iconfont').click(function(){
                    // window.localStorage.setItem('buycolorAll',JSON.stringify($this.picktherender));
                    // window.localStorage.removeItem('songshuj');
                    // // $this.$router.go(-1);
                    // $this.$router.push({path:'/forthecolor'});
                    // window.localStorage.setItem('buycolorAll',JSON.stringify($this.picktherender));
                    // window.localStorage.removeItem('songshuj')
                    // // $this.$router.go(-1);
                    // $this.$router.push({path:'/forthecolor'});
                // });
                //点击随机生成一注
                $('.randombet').click(function(){
                    // if(window.localStorage.getItem('ispeilnshow')==0){
                    //     for(var a = 0;a<$('.licoenten').length;a++){
                    //         $('.licoenten').eq(a).hide();
                    //     }
                    // }
                   
                    $this.randomChoose();
                    $this.arithmetic();
                    var strAll = {};
                    strAll.peilv = $this.loss_peilv;
                    strAll.fanlv = 0.0;
                    strAll.zushu = $this.bettingNum;
                    strAll.zonge = $this.danzuze;
                    strAll.danmax = $this.maxwin;
                    strAll.xzhm = $this.bettingValue;
                    strAll.isdanzu = ($this.danzuze/$this.bettingNum).toFixed(2);
                    strAll.isdanzuval = ($this.danzuze/$this.bettingNum).toFixed(2);
                    strAll.islotterId = $this.playDetailIds;
                    strAll.isplayerId = $this.playIdM;
                    if($this.xuanhaoAll[0].play.isBase == 1){
                        strAll.isweishu = [];
                        for(var z = 0;z<$this.xuanhaoAll[0].play.baseAttr.split(',').length;z++){
                                strAll.isweishu.push($this.xuanhaoAll[0].play.baseAttr.split(',')[z])
                        }
                    }
                    // strAll.wanfa = $this.lotteryPlayMapmin[$this.yi].name+'-'+$this.playPlayMapmin[$this.er].name;
                    strAll.wanfa = window.localStorage.getItem('lotteryPlayMapmin');
                    $this.picktherender.unshift(strAll);
                    $this.moerys();
                    window.localStorage.setItem('buycolorAll',JSON.stringify($this.picktherender));
                    $this.iszhuiqi();
                    setTimeout(function(){
                        $this.a();
                    },5);
                    
                });
                //返回添加一注
                // $('.goback').click(function(){
                //     window.localStorage.setItem('buycolorAll',JSON.stringify($this.picktherender));
                //     window.localStorage.removeItem('songshuj')
                //     // $this.$router.go(-1);
                //     $this.$router.push({path:'/forthecolor'});
                // });
               
                //清空数组splice
                $('#qk').click(function(){
                    $this.picktherender.splice(0,$this.picktherender.length);
                    $this.moerys();
                    window.localStorage.setItem('buycolorAll',JSON.stringify($this.picktherender));
                }),
                $('.hkbetlist').on('click','.delete',function(){
                    $this.picktherender.splice((+$(this).attr('name')),1);
                    $this.moerys();
                    window.localStorage.setItem('buycolorAll',JSON.stringify($this.picktherender));
                    $this.iszhuiqi();
                });
                //追期
                $('.checkbox_xz').click(function(){
                    if($this.followup!=1){
                        if($(this).hasClass("on")){
                            $(this).removeClass('on')
                            $this.fale=0
                        }else{
                            $(this).addClass('on')
                            $this.fale=1
                        }
                    }
                })
                //减
                $('.chase-down').click(function(){
                    if($this.followup>1){
                        $this.followup--
                    }else{
                        $this.followup = 1
                    }
                    if($this.followup==1){
                        $('.checkbox_xz').removeClass('on');
                        this.fale = 0;
                    }
                    // $this.moery-=$this.followup;
                    // $this.moeryAll = $this.moery*2;
                    if($this.followup>=1){
                        $this.iszhuiqi()
                    }
                    
                });
                //加
               
                $('.chase-up').click(function(){
                        if($this.followup<10){
                            $this.followup++
                        }else{
                             $.tips("最多追加十期哦")
                            return;
                        }
                        
                        $this.iszhuiqi()
                });
                //点击问好
                $('#imgs').click(function(){
                    $('.playing-hint-state').show();
                });
                $('.ok').click(function(){
                    $('.playing-hint-state').hide();
                });
                // var valAll;
                //修改单注金额
                $('.hkbetlist').on('focus','.gl-txt',function(){
                    // console.log($(this).attr('dataId'));
                    // valAll =  $this.picktherender[+$(this).attr('dataId')].isdanzuval;
                    $this.picktherender[+$(this).attr('dataId')].isdanzuval = ''
                })
                $('.hkbetlist').on('blur','.gl-txt',function(){
                    if(!$(this).val()){
                        var number = 2;
                         $this.picktherender[+$(this).attr('dataId')].isdanzuval = number.toFixed(2);
                         $this.picktherender[+$(this).attr('dataId')].zonge = ((+$this.picktherender[+$(this).attr('dataId')].zushu)*(+$this.picktherender[+$(this).attr('dataId')].isdanzuval));
                    }
                    $this.picktherender[+$(this).attr('dataId')].isdanzuval = Number($this.picktherender[+$(this).attr('dataId')].isdanzuval).toFixed(2)
                    $this.moerys();
                    // $this.picktherender[+$(this).attr('dataId')].isdanzuval = $this.picktherender[+$(this).attr('dataId')].isdanzu;
                    // $this.picktherender[+$(this).attr('dataId')].isdanzuval = $this.picktherender[+$(this).attr('dataId')].isdanzuval
                    // $this.picktherender[+$(this).attr('dataId')].isdanzuval.toFixed(2)
                })
                $('.hkbetlist').on('keyup','.gl-txt',function(){
                    // $this.picktherender[+$(this).attr('dataId')].isdanzuval = $this.picktherender[+$(this).attr('dataId')].isdanzu;
                     $this.picktherender[+$(this).attr('dataId')].isdanzuval = $(this).val();
                     $this.picktherender[+$(this).attr('dataId')].zonge = ((+$this.picktherender[+$(this).attr('dataId')].zushu)*(+$this.picktherender[+$(this).attr('dataId')].isdanzuval));
                     $this.moerys();
                })
                //统一金额
                $('#settingAllAmount').keyup(function(){
                    for(var i = 0;i<$this.picktherender.length;i++){
                        $this.picktherender[i].isdanzuval = Number($(this).val()).toFixed(2);
                    }
                    for(var j = 0;j<$this.picktherender.length;j++){
                        $this.picktherender[j].zonge = ($this.picktherender[j].isdanzuval*$this.picktherender[j].zushu)
                    }
                    if( !$('#settingAllAmount').val()){
                        for(var i=0;i<$this.picktherender.length;i++){
                           $this.picktherender[i].isdanzuval=$this.er.toFixed(2)
                           $this.picktherender[i].zonge=$this.picktherender[i].isdanzuval*$this.picktherender[i].zushu
                        }
                    }
                    $this.moerys()
                })
                $('#settingAllAmount').blur(function(){
                    $(this).val('')
                })
            },
             gobacka(){
                    // window.localStorage.setItem('buycolorAll',JSON.stringify(this.picktherender));
                    // window.localStorage.removeItem('songshuj');
                    // // $this.$router.go(-1);
                    // this.$store.state.ishomecolorclick = 'no';
                    // this.$store.state.ishomecolorclicker = window.localStorage.getItem('lotteryPlayMapmin').split('-')[1];
                    // // this.$router.push({path:'/forthecolor'});
                    // this.$router.go(-1)

                     window.localStorage.setItem('buycolorAll',JSON.stringify(this.picktherender));
                    window.localStorage.removeItem('songshuj');
                    // $this.$router.go(-1);
                    this.$store.state.ishomecolorclick = 'no';
                    this.$store.state.ishomecolorclicker = window.localStorage.getItem('lotteryPlayMapmin').split('-')[1];
                    // this.$router.push({path:'/forthecolor'});
                    this.$router.go(-1);
                    
                    $('.default').click();
                    for (var a = 0; a < $("#bettingNumDiv .ballspan").length; a++) {
                        if (
                        $($("#bettingNumDiv .ballspan")[a])
                            .find("span")
                            .hasClass("isclick")
                        ) {
                        $($("#bettingNumDiv .ballspan")[a]).click();
                        }
                    }
                    this.bettingNum = 0;
                    if (window.localStorage.getItem("buycolorAll")) {
                        if (
                        JSON.parse(window.localStorage.getItem("buycolorAll"))[0] != undefined
                        ) {
                        $("#show-confirm").show();
                        this.istc = true;
                        this.$store.state.istankuang = true;
                        window.localStorage.setItem('istrue','yes')
                        } else {
                        $("#show-confirm").hide();
                        window.localStorage.setItem('istrue','no')
                        this.istc = false;
                        this.$store.state.istankuang = false;
                        }
                    }
                    this.$store.state.followupsj = this.followup;
                    this.$store.state.followupsjon = $('.checkbox_xz').hasClass('on');
                },
            //随机选一注
			 
        	randomChoose() {
				this.localChooseQueue = [];//胆拖用到的选择队列,不是胆拖此参数为空
				this.randomChooseIndexs = "";//随机的下标
                this.xuanhaoxi(this.xuanhaoAll);
                this.xuanhaoxiAll(this.xuanhaoAll);
                console.log(this.arrayxhsz);
                console.log(this.arrayxhszAll);
				//清空选中
				// $(".ballspan").each(function() {
				// 	if($(this).find("span").eq(0).hasClass("isclick"))
				// 		$(this).find("span").eq(0).click();
				// });
				//随机规则	5-5|1-1  即5个集合里面选5个,1个小集合里面选1个
				var rules = this.xuanhaoAll[0].play.rules; //5-5|1-1-1-1-1 2-2|1-1 2-2|1-7
				var chooseArrNum = parseInt(rules.split("|")[0].split("-")[0]);//多少个集合中选择
				var forNum = parseInt(rules.split("|")[0].split("-")[1]);//多少个循环
				console.log(forNum);
				var tmpJIndex = "";//二维数组下标
				var tmpIIndex = "";//一维数组下标
				// console.log(this.arrayxhsz);
				for(var i = 0; i < forNum; i++) {
					var randomNum = parseInt(rules.split("|")[1].split("-")[i]);//随机区间
					var iIndex = this.randomNumF(chooseArrNum);
					if( (rules.split("|")[1].split("-").length > 1 && rules.split("|")[1].split("-")[0] < rules.split("|")[1].split("-")[1]) || (rules.split("|")[1].split("-").length>=2 && rules.split("|")[1].split("-")[0] != rules.split("|")[1].split("-")[1]) ) {
						iIndex = i;//符合该条件的下标直接按照循环来获取
					}
					while(tmpIIndex.indexOf(iIndex) > -1) {//判断一维数组下标是否存在,如果存在重新随机
						iIndex = this.randomNumF(chooseArrNum);
					};
					tmpIIndex += iIndex + ",";
					
					for(var j = 0; j < randomNum; j++) {
						if(forNum == 1) {
							iIndex = this.randomNumF(chooseArrNum);
						};
						var jIndex = this.randomNumF(this.arrayxhsz[iIndex].length);
						while(this.randomChooseIndexs.indexOf(iIndex + "_" + jIndex) > -1 || tmpJIndex.indexOf(jIndex) > -1) {//判断二维数组下标是否存在,如果存在重新随机
							jIndex = this.randomNumF(this.arrayxhsz[iIndex].length);
						};
						tmpJIndex += jIndex + ",";
						console.log(iIndex+'----'+jIndex);
                        // $("#" + iIndex + "_" + jIndex).find("span").eq(0).click();
                            this.randomChooseIndexs += iIndex + "_" + jIndex + ",";
					}
                }
                console.log(this.randomChooseIndexs.split(','));
                for(var z = 0;z<this.randomChooseIndexs.split(',').length-1;z++){
                    this.arrayxhsz[this.randomChooseIndexs.split(',')[z].split('_')[0]][this.randomChooseIndexs.split(',')[z].split('_')[1]]=this.arrayxhszAll[this.randomChooseIndexs.split(',')[z].split('_')[0]][this.randomChooseIndexs.split(',')[z].split('_')[1]]
                }
                console.log(this.arrayxhsz);
			},
			//随机方法
			randomNumF(n) {
				var num = Math.random() * n;
				return parseInt(num, 10);
            },
            
            xuanhaoxi(data){
                this.arrayxhsz = [];
                var arraymin = [];
                for(var i = 0;i<data.length;i++){
                    for(var y = 0;y<data[i].playValueList.length;y++){
                        arraymin.push("")
                    }
                    this.arrayxhsz.push(arraymin)
                    arraymin = []
                }
            },
            // 所有选号
            xuanhaoxiAll(data){
                this.arrayxhszAll = [];
                var arraymin = [];
                for(var i = 0;i<data.length;i++){
                    for(var y = 0;y<data[i].playValueList.length;y++){
                        arraymin.push(data[i].playValueList[y].value)
                    }
                    this.arrayxhszAll.push(arraymin)
                    arraymin = []
                }
            },
            //注数
            arithmetic(){
                this.bettingOdds = '';
                this.bettingNum = 0;
                var localNums = this.arrayxhsz;
                var secondPlay = this.xuanhaoAll[0].play;
                var formula = secondPlay.formula;
                this.playDetailIds = ''
                // if(secondPlay.isBase == 1){
                //     var checkNum = this.checkNum
                // }
                // console.log(checkNum);
                if(secondPlay.calType == 1) { //直接结算
                    var headNum = 1;
                    // if(secondPlay.isBase == 1) { //有底部
                    //     var localCheckNum = 0;
                    //     $("span[name='foot_a']").each(function() {
                    //         if($(this).hasClass("spanbg"))
                    //             localCheckNum++;
                    //     });
                    //     if(localCheckNum > checkNum) {
                    //         var up = localCheckNum;
                    //         var down = checkNum;
                    //         for(var i = 0; i < checkNum - 1; i++) {
                    //             up = up * (localCheckNum - (i + 1));
                    //             down = down * (checkNum - (i + 1));
                    //         }
                    //         headNum = up / down;
                    //     } else if(localCheckNum == checkNum) {
                    //         headNum = 1;
                    //     }
                    // } else //没有底部默认1
                        // headNum = 1;
                    for(var i = 0; i < localNums.length; i++) {
                        var nums = 0;
                        for(var j = 0; j < localNums[i].length; j++) {
                            if(localNums[i][j] || localNums[i][j] == "0")
                                nums++;
                        };
                        var nNums = "n" + (localNums.length - i);
                        formula = formula.replace(new RegExp("(" + nNums + ")", "g"), nums);
                    };
                    this.bettingNum = eval(formula);
                    this.bettingNum = this.bettingNum * headNum;
                    console.log(this.bettingNum);
                } else if(secondPlay.calType == 2) { //公式
                    var headStr = "this.bettingNum = calNum(";
                    if(secondPlay.isBase == 1) { //有底部
                        var xStr = "[";
                        $("span[name='foot_a']").each(function() {
                            if($(this).hasClass("spanbg"))
                                xStr += "1,";
                        });
                        if(xStr.length > 0)
                            xStr = xStr.substring(0, xStr.length - 1);
                        xStr += "]";
                        headStr += xStr + ",";
                    };
                    for(var i = 0; i < localNums.length; i++) {
                        var yStr = "[";
                        for(j = 0; j < localNums[i].length; j++) {
                            if(localNums[i][j] || localNums[i][j] == "0")
                                yStr += "'"+localNums[i][j] + "',";
                        };
                        if(yStr.length > 1)
                            yStr = yStr.substring(0, yStr.length - 1);
                        yStr += "]";
                        if(i == localNums.length - 1)
                            headStr += yStr + ");";
                        else
                            headStr += yStr + ",";
                    };
                    console.log(headStr);
                    eval(headStr + secondPlay.formula);
                    // console.log(eval(headStr + secondPlay.formula));
                } else if(secondPlay.calType == 3) { //map checkNum
                    var headNum = 1;
                    // if(secondPlay.isBase == 1) { //有底部
                    //     var localCheckNum = 0;
                    //     $("span[name='foot_a']").each(function() {
                    //         if($(this).hasClass("spanbg"))
                    //             localCheckNum++;
                    //     });
                    //     if(localCheckNum > checkNum) {
                    //         var up = localCheckNum;
                    //         var down = checkNum;
                    //         for(var i = 0; i < checkNum - 1; i++) {
                    //             up = up * (localCheckNum - (i + 1));
                    //             down = down * (checkNum - (i + 1));
                    //         };
                    //         headNum = up / down;
                    //     } else if(localCheckNum == checkNum) {
                    //         headNum = 1;
                    //     } else {
                    //         headNum = 0;
                    //     }
                    // }
                    // eval("var ff = {"+secondPlay.formula.substring(1, secondPlay.formula.length - 1)+"}");
                    // var str=
                    

                    eval("this.ff = {" + secondPlay.formula.substring(1, secondPlay.formula.length - 1) + "}");
                    for(j = 0; j < localNums[0].length; j++) {
                        if(localNums[0][j] || localNums[0][j] == "0")
                            this.bettingNum += this.ff[localNums[0][j]];
                    };
                    
                    this.bettingNum = this.bettingNum * headNum;
                    console.log(this.bettingNum);
                }

              //2018520开发
                this.bettingValue="";
                var tmpStr = " ";
                    if(secondPlay.noSplit != undefined && secondPlay.noSplit == 0) {
                        tmpStr = "-";
                };
                console.log(this.xuanhaoAll)
                for(var i = 0; i < localNums.length; i++) {
                    for(j = 0; j < localNums[i].length; j++) {
                        if(localNums[i][j] || localNums[i][j] == "0") {
                            if(secondPlay.noSplit != undefined && secondPlay.noSplit == 0) {
                                // this.playDetailIds += $("#" + i + "_" + j).attr("name") + "-";
                                this.playDetailIds += this.xuanhaoAll[i].playValueList[j].playDetailId+" "
                            } else {
                                // if(this.playDetailIds.indexOf($("#" + i + "_" + j).attr("name")) == -1) {
                                //     this.playDetailIds += $("#" + i + "_" + j).attr("name") + " ";
                                // }
                                this.playDetailIds += this.xuanhaoAll[i].playValueList[j].playDetailId+" "
                            };

                            // if(secondPlay.isShowOdds == 1) { //显示赔率的在之间拼接html时就已经计算了登陆人返点的权重,此处只要直接获取即可
                            //     if($("#" + i + "_" + j).find("span").eq(1).html().indexOf('赔率')==-1){
                            //         this.bettingOdds += (parseFloat($("#" + i + "_" + j).find("span").eq(1).html())).toFixed(2) + "-";
                            //     }else{
                            //         this.bettingOdds += (parseFloat($("#" + i + "_" + j).find("span").eq(1).html().split(':')[1])).toFixed(2) + "-";
                            //     }
                                
                            // } else {
                                // console.log(this.localUser.rebate);
                                 console.log("============----");
                                var userRebate = (!!this.localUser) ? (1960 - this.localUser.rebate) : 0;
                            // };
                            //this.bettingOdds = this.xuanhaoAll[0].playValueList[j].odds+'';
                            if(secondPlay.isShowOdds == 1){
                                this.bettingOdds = (returnFloat((1 - userRebate / 2000) * this.xuanhaoAll[0].playValueList[j].odds, 2)) + "";
                            }else{
                                this.bettingOdds = (returnFloat((1 - userRebate / 2000) * secondPlay.odds, 2)) + "";
                            }
                            console.log(this.bettingOdds);
                            // if(this.thisdatalist.id == 33 && localNums[i][j]){
                            //     this.bettingValue += $("#" + i + "_" + j).find("span img").attr("data") + tmpStr;
                            // }else{
                                this.bettingValue += localNums[i][j] + tmpStr;
                            // }
                            
                        }
                    }
                    if(this.bettingValue.length > 0 && this.bettingValue.substring(this.bettingValue.length - 1) != "|")
                        this.bettingValue = this.bettingValue.substring(0, this.bettingValue.length - 1);
                    if(i != localNums.length - 1)
                        this.bettingValue += "|";
                };
                var tmpsss = (this.bettingOdds.indexOf("-") > -1) ? this.bettingOdds.substring(0, this.bettingOdds.length - 1) : this.bettingOdds;
                console.log(tmpsss);
                console.log(this.bettingValue);
                this.loss_peilv = this.bettingOdds;
                console.log(this.playDetailIds);
                this.maxwin = (+tmpsss)*2;
                this.danzuze = this.bettingNum*2
                console.log(this.maxwin);
                console.log(this.danzuze);
                console.log(this.bettingNum);
            },
            buyConfirm(){
                if(this.moery>1000){
                    $.tips("当期最多投注1000注");
                    return;
                }
                var localUserJson = JSON.parse(localStorage.getItem("currentUser"));//用户
                var bettingConfirmJson = this.picktherender;
                var lotteryDetailMapJson = JSON.parse(localStorage.getItem("xuanhaoAll"));
                var lotteryJson = this.thisdatalist;
                var lotteryEntity = JSON.parse(localStorage.getItem("forthecolor"));
                var playIdArrStr = "";//玩法ID
                var bettingNums = "";//投注号码
                var lotteryDetailArrStr = "";//玩法明细id
                var oddsArrStr = "";//赔率
                var rebateArrStr = "";//返利
                var numArrStr = "";//注数
                var bettingAmountArrStr = "";//单注金额
                var $this = this;
                for(var i=0;i<bettingConfirmJson.length;i++){
                    playIdArrStr += bettingConfirmJson[i].isplayerId+"-";
                    lotteryDetailArrStr += bettingConfirmJson[i].islotterId.trim()+"-";
                    if(!!bettingConfirmJson[i].isweishu && bettingConfirmJson[i].isweishu.length>0){
                        for(var ss=0;ss<bettingConfirmJson[i].isweishu.length;ss++){
                            bettingNums += bettingConfirmJson[i].isweishu[ss]+" ";
                        }
                        bettingNums = bettingNums.substring(0,bettingNums.length-1)+":";
                    }
                    bettingNums += bettingConfirmJson[i].xzhm+"-";
                    if((bettingConfirmJson[i].peilv+'').indexOf('-')>-1){
                        if((bettingConfirmJson[i].peilv+'').indexOf('.')>-1){
                            oddsArrStr += bettingConfirmJson[i].peilv;
                        }else{
                            oddsArrStr += bettingConfirmJson[i].peilv+'.0';
                        }
                        
                    }else{
                        if((bettingConfirmJson[i].peilv+'').indexOf('.')>-1){
                            oddsArrStr += bettingConfirmJson[i].peilv+"-";
                        }else{
                            oddsArrStr += bettingConfirmJson[i].peilv+'.0-';
                        }
                    }
                    
                    rebateArrStr += bettingConfirmJson[i].fanlv + "-";
                    numArrStr += bettingConfirmJson[i].zushu + "-";
                    bettingAmountArrStr += bettingConfirmJson[i].zonge + "-";
                }
                playIdArrStr = playIdArrStr.substring(0,playIdArrStr.length-1);
                lotteryDetailArrStr = lotteryDetailArrStr.substring(0,lotteryDetailArrStr.length-1);
                bettingNums = bettingNums.substring(0,bettingNums.length-1);
                oddsArrStr = oddsArrStr.substring(0,oddsArrStr.length-1);
                rebateArrStr = rebateArrStr.substring(0,rebateArrStr.length-1);
                numArrStr = numArrStr.substring(0,numArrStr.length-1);
                bettingAmountArrStr = bettingAmountArrStr.substring(0,bettingAmountArrStr.length-1);
                var str = lotteryJson.lotteryDraw.nextNo;
                window.localStorage.setItem("nowShortNo",str)
                var str1 = '1'
                if(this.followup>1){//追期 $(".chase-num").html()
                    var getNextLottery = base.getApi().getNextLotteryNos(lotteryEntity.id,lotteryJson.lotteryDraw.lotteryNo,this.followup);//$("#chase-num").html()
                    str = "";
                    for(var y = 0;y<getNextLottery.length;y++){
                        if(y==getNextLottery.length-1){
                            str+=getNextLottery[y].nextNo
                        }else{
                            str1 += '-1'
                            str+=getNextLottery[y].nextNo+'-'
                        }
                    }
                }
                
                var resultJson = base.getApi().payment(
                    localUserJson.id,
                    lotteryEntity.id,
                    lotteryJson.lotteryDraw.nextNo,
                    playIdArrStr,
                    lotteryDetailArrStr,
                    bettingNums,
                    oddsArrStr,
                    rebateArrStr,
                    numArrStr,
                    bettingAmountArrStr,
                    this.followup,//追期 $("#chase-num").html()
                    localStorage.getItem("time-version").split("-")[1],//版本号
                    this.fale,
                    str,
                    str1
                );//投注
                console.log(resultJson);
                if(resultJson.code == 200){
                    //跳转到成功页面
                    // this.$store.state.iswintouzu = resultJson.userBettingList;
                    // window.localStorage.setItem('iswintouzu',resultJson.userBettingList)
                    this.$store.state.buyNum++;
                    changeLocal();
                    this.$router.push({path:'/touzhuSuccess'});
                    
                }else{
                    if(resultJson.code == 2009){
                        window.localStorage.setItem("lishitouzhu",JSON.stringify(this.picktherender))
                        $('.models').show()
                        $('.confirmqx').click(function(){
                            $('.models').hide();
                        })
                        $('.enfirmqd').click(function(){
                            $('.models').hide();
                            // localLotteryNo = result.data;
                            // buyConfirm();
                            $this.$store.state.issufficient = 'yes';
                            $this.$router.push({path:'/recharge'});
                        })
                    }else if(resultJson.code == 2013 || resultJson.code == 505){
                        //提示参数异常
                        // $.tips("该彩种已关盘");
                        // $.confirm("该期已关盘，是否购买下期？", function() {
                        // localLotteryNo = result.data;
                        // buyConfirm();
                        // });
                        var $this = this;
                        $('.maidden').html('该期已关盘，是否购买下期？')
                        $('.models').show()
                        $('.confirmqx').click(function(){
                            $('.models').hide();
                        })
                        $('.enfirmqd').click(function(){
                            $('.models').hide();
                             lotteryJson.lotteryDraw.nextNo = resultJson.data;
                             $this.buyConfirm();
                        })
                    } else if(resultJson.code == 2015){
                         localStorage.removeItem("isstrArry");　
                        $.tips("后台数据更新，已帮您刷新页面");
                        if(this.$store.state.isid){
                            localStorage.setItem("iosAndroid",1)
                        }
                         setTimeout(() => {
                                window.location.reload(); 
                        }, 500);
                        
                    } 
                    // else if(resultJson.code == 2008){
                    //      localStorage.removeItem("isstrArry");　
                    //     $.tips("后台数据更新，已帮您刷新页面");
                    //      if(this.$store.state.isid){
                    //          localStorage.setItem("iosAndroid",1)
                    //     }
                    //     setTimeout(() => {
                    //             window.location.reload(); 
                    //     }, 500);
                        
                       
                    // }
                    else{
                        $.tips(resultJson.message);
                    }
                    
                }
            }
        },
        // beforeDestroy() {
		//     clearInterval(this.cache_timeout_id_);
        // },
        beforeCreate: function() {
             
        },
        beforeRouteEnter (to, from ,next){
            next(vm =>{
                console.log(from)
                if (from.path == "/recharge") {
                    console.log(JSON.parse(localStorage.getItem('lishitouzhu')))
                    vm.picktherender = JSON.parse(localStorage.getItem('lishitouzhu'))
                    console.log(vm.picktherender)
                    vm.moerys()
                }
            })
        }
    }
</script>


<style scoped src='../../assets/source/css/common/betlist.css'></style>
<style scoped>
     input{
         outline: none;
     }
     #layout{
        font-size: 0.28rem;
     }
    .liright span{
        color: #111;
    }
    .addto{
        position: relative;
        display: flex;
        align-items: center;
        border-bottom: 1px solid gainsboro;
    }
    .playing-hint-state{
        display: none;
        position: absolute;
        background-color: rgba(0,0,0,.3);
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1000;
        font-size: 0.28rem;
    }
    .main-all{
        margin: 50% auto;
        width: 73%;
        height: 26%;
        background-color: white;
        border-radius: 0.05rem;
        position: relative;
        padding-bottom: .1rem;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: .1rem 0 0 0;
        box-sizing: border-box;
    }
    .ok{
        display: block;
        /* color: green; */
        width: 100%;
        font-size: 0.18rem;
        border-top: 1px solid whitesmoke;
        height: .4rem;
        line-height: .4rem;
        text-align: center;
    }
    .main-all p{
        color: gray;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        padding: 0 .15rem 0 .15rem;
        font-size: 0.28rem;
    }
    .labels img{
        width: .18rem;
        vertical-align:middle;
    }
    .libottom input{
        float: right;
        width: 1rem;
        height: .25rem;
        line-height: .25rem;
        border: 0.01rem solid #ccc;
        border-radius: 0.04rem;
        margin-right: 0.28rem;
        text-indent: .05rem;
        font-size: 0.28rem;
        position: absolute;
        top:-171%;
        right: -8%;
    }
    .libottom{
        position: relative;
    }
    .otherbetlist li{
        position: relative;
    }
    .otherbetlist li .libottom{
        font-size: .12rem;
    }
    .obet .hkbetlist{
        /*height: 24rem!important;*/
    }
    .hkbetlist li{
        position: relative;
        overflow: hidden;
    }
    .hkbetlist .lileft{
        position: absolute;
        right: -0.06rem;
        top: -.15rem;
    }
    .lileft .delete img{
        width: 74%;
        height: 74%;
    }
    .hkbetlist .liright{
        padding-left: .12rem;
        box-sizing: border-box;
        padding-bottom: .1rem;
        box-sizing: border-box;
        border-bottom: 1px solid ghostwhite;
    }
    .liright .detail input{
        background-color: #eee;
        width: 1.2rem;
        height: .5rem;
        margin-top: .2rem;
    }
    .hkbetlist{
        text-align: left;
    }
    .hkbetlist li{
        border:none!important;
    }
    .footcontent p:first-child{
        color: white;
    }
    .footcontent p{
        color: #111!important;
    }
    .totalAmount{
        color:#fa3956 ;
    }
    #totalAmount,#totalNum{
        color: #fa3956;
    }
    .wrap-foot{background-color: white;}
    .liright p{
        width: 84%;
    }
    .licoenten{
        color: gray;
    }
    .licoenten span{
        color: gray;
    }

    .timecount p{
        display: inline-block;
    }
    .timecount .spans{
        display: inline-block;
        width: 0.2rem;
        height: 100%;
        text-align: center;
    }
    .foottab{
        display: none;
    }


    .models{
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.5);
        position: absolute;
        top: 0;
        left: 0;
        z-index: 9999;
        display: none;
    }
    .modelsmin{
        width: 78%;
        height: 23%;
        background: white;
        margin: 60% auto;
        border-radius: .02rem;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
        padding: .1rem 0 0 0;
        box-sizing: border-box;
        font-size: 0.28rem;
    }
    .modelsmin .top{
        font-size: .2rem;
    }
    .maidden{
        color: gray;
        padding-bottom: .1rem;
    }
    .footera{
        display: flex;
        width: 100%;
        height: .4rem;
        border-top:1px solid gainsboro;
    }
    .footera span{
        flex: 1;
        text-align: center;
        line-height: .4rem;
        font-size: .17rem;
    }
    .confirmqx{
        color: gray;
        border-right: 1px solid gainsboro;
    }
    .enfirmqd{
        color:red;
    }



/* @media only screen and (max-device-width:370px){
    html {
      font-size: 497%;
      height: 100%;
    }
} */
    </style>
