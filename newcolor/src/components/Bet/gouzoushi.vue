<template>
    <div id="box" style="top:0;width:100%;height:100%;background: white;z-index:1000;overflow: hidden;overflow-x: hidden;">
		  <header class="header" style="    position: absolute;">
		  	<div class="color_species">
		  		<!-- <a href="javascript:history.go(-1)"><p v-show="iszstf" class=""><i class="iconfont"></i></p></a> -->
		  		<span>{{cound}}</span>
		  		
		  		<span id="xx"><i class="iconfont"></i></span>
		  	</div>
		  	<div class="color_speciesAll" style="display: none;">
		  		<ul class="color_speciesul">
				  <li v-for="(itemAll,index) in resultnew" :key='index' @click="toLotteryDetail(itemAll.id)" :index="itemAll.id"  :id="'lis_color_speciesul'+itemAll.id" :datacode="itemAll.code" class="lis">{{itemAll.name}}</li>
				</ul>
		  	</div>
		  	
		  </header>
		  <main v-if="datacodea=='cqklsf'||datacodea=='gdklsf'" id="main" style="position: relative;height:100%;margin-top: .8rem;padding-bottom:1.5rem;overflow: scroll;    overflow-x: hidden;">
			 <div style="padding:  0;" class="number_Kj"> 
			 </div>
			 <div class="zoushiAll" style="border-bottom: 2px solid red;font-size:16px;padding-top: 12px;line-height: .2rem;color:red;padding-top:12px;padding-bottom: 10px;">
				 <span style="display: inline-block;width: 1.5rem;height: .5rem;line-height: .5rem;background-color: #ff6b52;color: white;border-radius: .05rem;">
					 走势
				 </span>
			 </div>
			  <div class="ishppye">
				  <div class="xglhcstyle">
						<div class="wm_ulAllleft">
							<span>期号</span>
							<span  v-for="(numindex,index) in nummaxAll" :key='index'>{{numindex.shortNo}}</span>
						</div>
						<div class="wm_ulAllrigth">
							<ul style="width: 100%;">
								<li style="width: 75%;">
									平码
								</li>
								<li style="width: 25%">
									跨度
								</li>
							</ul>
							<ul  style="width: 100%;" v-for="(numindex,index) in nummaxAll" :key='index'>
								<li style="width: 75%;color:#ff6b52">
									<span style=" margin-rigth: 0.05rem;   margin-left: 0.05rem;" v-for="(numindexmina,index) in numindex.result.split(',')" :key='index'>{{numindexmina}}</span>
								<!-- {{numindex.result.replace(/,/g, " &nbsp;")}} -->
								</li>
								<li style="width: 25%">{{numindex.result.split(',')|iskadu}}</li>
							</ul>
						</div> 
					</div>
			  </div>
			  <div style="height: 1.5rem;"></div>
		  </main>
		  <main v-else-if="datacodea=='xglhc'||datacodea=='fflhc'||datacodea=='jslhc'" id="main" style="position: relative;    height: 100%;padding-bottom:1.5rem;margin-top: .8rem;overflow: scroll;    overflow-x: hidden;">
			  <div style="padding:  0;" class="number_Kj"> 
			 </div>
			 <div class="zoushiAll" style="font-size:16px;line-height: .2rem;color:red;padding: 10px 0;padding-top: 12px;">
				 <span style="display: inline-block;width: 1.5rem;height: .5rem;line-height: .5rem;background-color: #ff6b52;color: white;border-radius: .05rem;">
					 走势
				 </span>
			 </div>
			  <div class="xglhcsmain">
					<div class="xglhcstyle">
						<div class="wm_ulAllleft">
							<span>期号</span>
							<span  v-for="(numindex,index) in nummaxAll" :key='index'>{{numindex.shortNo}}</span>
						</div>
						<div class="wm_ulAllrigth">
							<ul>
								<li>
									平码
								</li>
								<li>特码</li>
								<li>生肖</li>
								<li>单双</li>
								<li>波色</li>
								<li>五行</li>
								<li>特头</li>
								<li>尾数</li>
								<li>单双</li>
							</ul>
							<ul v-for="(numindex,index) in nummaxAll" :key='index'>
								<li>
									<span style="margin-left: .02rem; background: linear-gradient(90deg, #fa3956, #ff6b52);" v-if="indexyi!=numindex.result.split(',').length-1&&red.indexOf(numindexmin) != '-1'" v-for="(numindexmin,indexyi) in numindex.result.split(',')" :key="indexyi">{{numindexmin}}</span>
									<span style="margin-left: .02rem;background:linear-gradient(90deg, rgb(82, 3, 253), rgb(83, 121, 225));" v-else-if="indexyi!=numindex.result.split(',').length-1&&bulr.indexOf(numindexmin) != '-1'">{{numindexmin}}</span>
									<span style="margin-left: .02rem;background:linear-gradient(90deg, rgb(43, 199, 146), rgb(134, 227, 109));" v-else-if="indexyi!=numindex.result.split(',').length-1&&green.indexOf(numindexmin) != '-1'">{{numindexmin}}</span>
								</li>
								<li>
									<span style="margin-left: .02rem; background: linear-gradient(90deg, #fa3956, #ff6b52);" v-if="indexer==numindex.result.split(',').length-1&&red.indexOf(numindexmin) != '-1'" v-for="(numindexmin,indexer) in numindex.result.split(',')" :key='indexer'>{{numindexmin}}</span>
									<span style="margin-left: .02rem;background:linear-gradient(90deg, rgb(82, 3, 253), rgb(83, 121, 225));" v-else-if="indexer==numindex.result.split(',').length-1&&bulr.indexOf(numindexmin) != '-1'">{{numindexmin}}</span>
									<span style="margin-left: .02rem;background:linear-gradient(90deg, rgb(43, 199, 146), rgb(134, 227, 109));" v-else-if="indexer==numindex.result.split(',').length-1&&green.indexOf(numindexmin) != '-1'">{{numindexmin}}</span>
								</li>
								<li>{{numindex.result.split(',')[numindex.result.split(',').length-1]|isany}}</li>
								<li>{{numindex.result.split(',')[numindex.result.split(',').length-1]|isdanshuang}}</li>
								<li v-if="red.indexOf(numindex.result.split(',')[numindex.result.split(',').length-1]) != '-1'">红波</li>
								<li v-else-if="green.indexOf(numindex.result.split(',')[numindex.result.split(',').length-1]) != '-1'">绿波</li>
								<li v-else>蓝波</li>
								<li v-if="wuxin.val.split(',').indexOf(numindex.result.split(',')[numindex.result.split(',').length-1])!=-1" v-for="(wuxin,indexsan) in duoshao" :key='indexsan'>{{wuxin.name}}</li>
								<li>{{(numindex.result.split(',')[numindex.result.split(',').length-1]+'').split('')[0]}}头</li>
								<li>{{(numindex.result.split(',')[numindex.result.split(',').length-1]+'').split('')[1]}}尾</li>
								<li>{{numindex.result.split(',')|ishedan}}</li>
							</ul>
						</div> 
					</div>
				</div>
				<div style="height: 1.5rem;"></div>
		  </main>
		  <main v-else-if="datacodea=='ssq'||datacodea=='jsssq'" id="main" style="position: relative;padding-bottom:0.35rem;height: 90%;margin-top: .8rem;overflow: scroll;    overflow-x: hidden;">
			 <div style="padding:  0;" class="number_Kj"> 
			 </div>
			 <div class="zoushiAll" style="font-size:16px;line-height: .2rem;color:red;padding: 10px 0;padding-top: 12px;">
				 <span style="display: inline-block;width: 1.5rem;height: .5rem;line-height: .5rem;background-color: #ff6b52;color: white;border-radius: .05rem;">
					 走势
				 </span>
			 </div>
			  <div class="ishppye">
				  <div class="xglhcstyle">
						<div class="wm_ulAllleft ssqLeft">
							<span>期号</span>
							<span  v-for="(numindex,index) in nummaxAll" :key='index'>{{numindex.shortNo}}</span>
						</div>
						<div class="wm_ulAllrigth ssqRight" style="overflow: hidden;">
							<ul style=" width: 100%;">
								<li style="width: 100%;">
									平码
								</li>
							</ul>
							<ul v-for="(numindex,indexs) in nummaxAll" style="    width: 100%;" :key='indexs'>
								<li style="    width: 100%;color:#ff6b52">
									<span v-if="indexsi!=numindex.result.split(',').length-1" style="margin-left: .06rem;" v-for="(numindexmina,indexsi) in numindex.result.split(',')">{{numindexmina}}</span>
									<span style="margin-left: .06rem;background:linear-gradient(90deg, rgb(82, 3, 253), rgb(83, 121, 225));" v-else>{{numindexmina}}</span>
								</li>
							</ul>
							<div style="height: .02rem;"></div>
						</div> 
					</div>
			  </div>
		  </main>
		  <main v-else id="main" style="position: relative;    padding-bottom: .5rem;margin-top: 0.8rem;height: 100%;overflow: scroll;    overflow-x: hidden;">
			<div class="number_Kj"> 
				<ul class="ulmax" style="position: relative;z-index: 888;">
					<li v-if="index==0" v-for="(nummin,index) in numAll" id="lis_1" :index="index" class="ons1" :key='index'>{{num[index]}}</li>
					<li v-else :index="index">{{num[index]}}</li>
				</ul>
			</div>
			<div class="wm_con">
				<div class="wm_ulAll">
					<ul>
						<li ref='qs'>期数</li>
						<li v-for="(numArrmin,indexwu) in numArr" style="flex:1;" :key='indexwu'>{{numArrmin}}</li>
					</ul>
					<ul v-for="(numindex,index) in nummaxAll" :key='index'>
						<li>{{numindex.lotteryNo}}</li>
						<li v-if="numaa!=drarge[sub][index]" v-for="(numaa,ina) in numArr" :ref="'li'+index" :class="'sort'+ina" style="flex:1;">1</li>
						<li v-else :class="'zj sort'+ina+' wdh'+index+''" style="flex:1;" :ref="'li'+index">
							<span class="ons2 ons3" style="display: inline-block; width: 25px; height: 25px; box-shadow: grey -2px -3px 2px -2px inset; border-radius: 50%; color: rgb(255, 255, 255); font-size: 16px; position: relative; z-index: 777; font-weight: 900;">{{drarge[sub][index]}}</span>
						</li>
					</ul>
					
					<div id="canvasdiv">
					</div>
				</div>
			</div>
			
		</main>
		<div id="modal_Box" style="display: none;"></div>
		<div  v-if="datacodea=='ssq'||datacodea=='jsssq'||datacodea=='xglhc'||datacodea=='fflhc'||datacodea=='jslhc'||datacodea=='cqklsf'||datacodea=='gdklsf'" v-show="false" class="calculate" style="">
		</div>
			<div  v-else v-show="true" class="calculate" style="    
			    background-color: #ffffff;
    z-index: 899;
    position: absolute;
    bottom: 1.1.5rem !important;
    width: 100%;
    padding-bottom: 0.85rem;
			">
				<ul style="margin: auto;
			border-top: 1px solid #dcdcdc;
			/* display: block; */
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-pack: justify;
			-ms-flex-pack: justify;
			justify-content: space-between;
			list-style-type: none;
			background: #edffd1;">
					<li>出现总次数</li>
					<li v-for="(degreeAlllist,index) in degree_All[suanfa]" :key='index' style="flex:1;">{{degreeAlllist}}</li>
				</ul>
				<ul style="margin: auto;
			border-top: 1px solid #dcdcdc;
			/* display: block; */
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-pack: justify;
			-ms-flex-pack: justify;
			justify-content: space-between;
			list-style-type: none;
			background: #edffd1;">
					<li>平均遗漏值</li>
					<li v-for="(winnumAllmaxlist,indexmin) in winnumAllmax[suanfa]" :key='indexmin' style="flex:1;">{{winnumAllmaxlist|winnumyil(omitAllmax[suanfa][indexmin])}}</li>
				</ul>
				<ul style="margin: auto;
			border-top: 1px solid #dcdcdc;
			/* display: block; */
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-pack: justify;
			-ms-flex-pack: justify;
			justify-content: space-between;
			list-style-type: none;
			background: #edffd1;">
					<li>最大遗漏值</li>
					<li v-for="(omitAllmaxlist,index) in omitAllmax[suanfa]" :key='index' style="flex:1;">{{omitAllmaxlist|maxomit}}</li>
				</ul>
						<ul style="margin: auto;
			border-top: 1px solid #dcdcdc;
			/* display: block; */
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-pack: justify;
			-ms-flex-pack: justify;
			justify-content: space-between;
			list-style-type: none;
			    background: #edffd1;">
				<li>最大连出值</li>
				<li v-for="(continuousmaxAllmaxlist,indexaa) in continuousmaxAllmax[suanfa]" :key='indexaa' style="flex:1;">{{continuousmaxAllmaxlist|continuoua}}</li>
				</ul>
			</div>
		</div>
</template>
<style>
		.number_Kj ul{
				-webkit-tap-highlight-color: rgba(0,0,0,0); 
		}
		#box{
			font-size: .1.5rem;
		}	
		.color_speciesul .ons{
			border:1px solid #ff6b52!important;
			color:#ff6b52;
		}
        .wm_ulAllleft{
		    width: 10%;
    float: left;
		}
		.ssqLeft {
			width:16% !important;
		}
		.ssqRight {
			width:84% !important;
		}
        .wm_ulAllleft span{
			    display: block;
    height: 0.7rem;
    line-height: 0.7rem;
    font-size: .28rem;
    text-align: center;
	background-color: #f5f5f5;
		}
		.wm_ulAllleft span:nth-of-type(2n-1){
			background-color: #ddd;
		}
		.wm_ulAllleft span:first-of-type{
			/* background-color: #ff6b52; */
		}
		.wm_ulAllrigth{
    width: 90%;
    float: right;
		}
		.xglhcstyle{
			width: 100%;
		}
		.qh_left{

		}
		.wm_ulAllrigth ul{
		    width: 12rem;
    overflow: scroll;
    clear: both;
    height: 0.7rem;
		}
		.wm_ulAllrigth{
			overflow:scroll;
		}   
		.wm_ulAllrigth ul li{
			float: left;
    width: 1rem;
    height: 0.7rem;
    line-height: 0.7rem;
    border-left: .02rem solid white;
    box-sizing: border-box;
    font-size: 0.26rem;
	background-color: #f5f5f5;
		}
		.wm_ulAllrigth ul:nth-of-type(2n-1) li{
			background-color: #ddd;
		}
		.wm_ulAllrigth ul:first-of-type li{
			/* background-color: #ff6b52; */
		}
		.wm_ulAllrigth ul li span{
			display: inline-block;
			width: 25px;
			height: 25px;
			line-height: 25px;
			border-radius: 50%;
			background: linear-gradient(90deg, #fa3956, #ff6b52);
			color: white;
			font-size: .26rem;
			margin-top: .02rem;
		}
		.wm_ulAllrigth ul li:first-of-type{
			    width: 4rem;
		}
		.calculate ul li{
			    font-size: 0.22rem;
    text-align: center;
    line-height: 0.6rem;
    float: left;
    height: 0.6rem;
    border-left: 1px solid whitesmoke;
		}
		.calculate ul li:nth-of-type(1){
			width: 1.5rem;
		}
		.calculate{
			bottom: .44rem!important;
		}

		    
</style>
<style scoped src="../../assets/source/css/trent_Map.css"></style>
<script>
	export default{
		data(){
			return{
				result:[],
				resultnew:[],
				num:[],
				numAll:[],
				// numAllmax:[],
				nummaxAll:[],
				cound:'',
				numArr:[],
				//kai
				draw:[],
				//wei
				drarge:[],
				sub:0,
				iszstf:true,
				datacodea:'',
				red:[],
				bulr:[],
				green:[],
				duoshao:[],
				degree_All:[],
				omitAllmax:[],
				winnumAllmax:[],
				continuousmaxAllmax:[],
				suanfa:0
			}
		},
		created(){
			// this.duoshao = JSON.parse(myStorage.getItem("playDetailMap"))[90][0].playValueList;
			// this.duoshao = base.getApi().getAnimalsCollections(2).data;
			const b = ["01","02","07","08","12","13","18","19","23","24","29","30","34","35","40","45","46"]; //hong
			const c = ["03","04","09","10","14","15","20","25","26","31","36","37","41","42","47","48"]; //lan
			const d = ["05","06","11","16","17","21","22","27","28","32","33","38","39","43","44","49"]; //lv
			this.red = b;
			this.bulr = c;
			this.green = d;
			// base.getApi().getAnimalsCollections();
		},
		updated(){

		},
		methods:{
			colornew(){
                $('.foottab ul li:nth-of-type(2) dl dd').css('color','#999')
                $('.foottab ul li:nth-of-type(2) dl dt .dtbg').css('background-position','-93px -26px')
            },
			acolor(){
				// $('.color_speciesul li').eq(0).addClass('ons');
			},
			getapi(){
				
				// this.result = base.getApi().getLotteryList();
				this.result = this.$store.getters.getcolorsj;
				var fal = true;
				var $this = this
				this.result.data.lotteryList.forEach(function(item){
					fal=true;
					if(item.code=='xypk'||item.code=='jlk3'){
						fal=false;
					}
					if(fal){
						$this.resultnew.push(item)
					}
				});
				if(this.$route.params.trentMapId==undefined){
					this.$route.params.trentMapId = this.resultnew[0].id;
					setTimeout(function(){
						$this.acolor();
					},2)
					
				}
				if(this.lotteryResultListId!=undefined){
					this.$route.params.trentMapId = this.lotteryResultListId
				}
				this.num = ['一','二','三','四','五','六','七','八','九','十'];
				// this.nummaxAll = base.getApi().getLotteryDraw(this.$route.params.trentMapId).data.lotteryDrawList;
				//console.log(this.$store.state.ishistorydraw);
				//console.log(this.$route.params.trentMapId);
				//console.log(this.$store.state.ishistorydraw[this.$route.params.trentMapId]);
				if(!!this.$store.state.ishistorydraw[this.$route.params.trentMapId]){
					this.nummaxAll = this.$store.state.ishistorydraw[this.$route.params.trentMapId];
				}else{
						this.$store.state.ishistorydraw[this.$route.params.trentMapId] = base.getApi().getLotteryDraw(this.$route.params.trentMapId).data.lotteryDrawList;
						this.nummaxAll = this.$store.state.ishistorydraw[this.$route.params.trentMapId];
				}
				console.log(this.nummaxAll);
				
				this.numAll = this.nummaxAll[0].result.split(',');
				this.cound = this.nummaxAll[0].lottery.name;
				////console.log(this.nummaxAll[0])
				this.datacodea = this.nummaxAll[0].lottery.code;
				var substi = [];
				this.nummaxAll.forEach(function(item){
					item.result.split(',').forEach(function(itemmin){
						substi.push(itemmin)
					})
					$this.draw.push(substi);
					substi=[];
				})
				this.numAll.forEach(function(c,index){
					$this.draw.forEach(function(a){
						substi.push(a[index])
					})
					$this.drarge.push(substi)
					substi=[];
				})
				



			},
			affairAll(){
				var fal = true;
				var $this = this;
				$('.color_species').click(function(){
					
					setTimeout(function(){
						$('#main').animate({scrollTop: '0px'}, 1)
					},10)
					
		//			$('.color_species span:first-of-type').html('&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp')
					$('#modal_Box').toggle();
					$('.color_speciesAll').slideToggle(10);
					if(fal){
						$('#main').css('overflow-y', 'hidden')
						$('#xx').css({"transform":"rotate(180deg)"});
						fal=false
					}else{
						$('#main').css('overflow-y', 'scroll')
						$('#xx').css({"transform":"rotate(0deg)"});
						fal=true;
					}
				});
				$('.color_speciesul').on('click','li',function(){
					$('#xx').css({"transform":"rotate(0deg)"});
					fal=true;
				});
				$('.color_speciesAll').on('click','.lis',function(){
					// setTimeout(function(){
					// 	alert('aaa')
					// 	var panel_body = document.getElementById('box');
					// 	panel_body.childNodes[panel_body.childNodes.length-1].scrollIntoView();
					// },5000)
					if($(this).attr('datacode')=='xglhc'||$(this).attr('datacode')=='jslhc'){
						$this.duoshao = base.getApi().getAnimalsCollections(2).data;
					}
					$(this).siblings().removeClass('ons');
					$(this).addClass('ons')
					$('.color_species span:first-of-type').html($(this).html())
				    if($(this).attr('datacode')=='xglhc'||$(this).attr('datacode')=='jslhc'||$(this).attr('datacode')=='gdklsf'||$(this).attr('datacode')=='cqklsf'||$(this).attr('datacode')=='ssq'||$(this).attr('datacode')=='jsssq'||$(this).attr('datacode')=='fflhc'){
						setTimeout(function(){
							$('canvas').hide();
							$('.calculate').hide();
							// alert("22")
							var mains=document.getElementById("main");
								mains.style.height=document.getElementsByTagName("body")[0].offsetHeight-document.getElementsByClassName("pde")[0].offsetHeight
								-document.getElementsByClassName("foottab")[0].offsetHeight-document.getElementsByClassName("header")[0].offsetHeight-document.getElementsByClassName("foottab")[0].offsetHeight/3+'px'
						},200)
						
					}else{
						setTimeout(function(){
							$('canvas').show();
							$('.calculate').show();
							$('#lis_1').click();
							var mains=document.getElementById("main");
								mains.style.height=document.getElementsByTagName("body")[0].offsetHeight-document.getElementsByClassName("pde")[0].offsetHeight
								-document.getElementsByClassName("foottab")[0].offsetHeight-document.getElementsByClassName("calculate")[0].offsetHeight-document.getElementsByClassName("foottab")[0].offsetHeight+document.getElementsByClassName("foottab")[0].offsetHeight/4+'px'
						},200)
						
					}

					$('.color_speciesAll').hide();
					$('#modal_Box').hide()
					$this.datacodea = $(this).attr('datacode');
					setTimeout(function(){
						$this.sub = 0;
						$('#lis_1').click();
						$this.iscoller()
					},10)


					
				 
				});
				$('#modal_Box').click(function(){
					$('#main').css('overflow-y', 'scroll')
					$(this).hide();
					$('.color_speciesAll').hide();
					$('#xx').css({"transform":"rotate(0deg)"});
					fal=true;
				});
				$('.number_Kj').on('click','li',function(){
					// alert('aaa')
					// var that = this;
					$(this).siblings().removeClass('ons1');
					$(this).addClass('ons1');
					// setTimeout(function(){
						$this.sub=$(this).attr('index')
						$this.suanfa = $(this).attr('index')
					// },1)
					// setTimeout(function(){
						
						
						setTimeout(function(){
							$this.isfal($this.sub);
							$this.trendchart($this.nummaxAll.length,20);
						},1)
					
					
						
					// },2);
				});
			},
			toLotteryDetail(a){
				var $this = this;
				// ////console.log(base.getApi().getLotteryDraw(a)) 
				// this.nummaxAll = base.getApi().getLotteryDraw(a).data.lotteryDrawList;
				// this.nummaxAll = this.$store.state.ishistorydraw[a];
				if(!!this.$store.state.ishistorydraw[a]){
					this.nummaxAll = this.$store.state.ishistorydraw[a];
				}else{
					this.$store.state.ishistorydraw[a] = base.getApi().getLotteryDraw(a).data.lotteryDrawList;
					this.nummaxAll = this.$store.state.ishistorydraw[a];
				}
				this.numAll = this.nummaxAll[0].result.split(',');
				var lis = document.querySelectorAll('.number_Kj li');
				for(var t=0;t<lis.length;t++){
					lis[t].classList.remove("ons1");
				}
				$('#lis_1').addClass('ons1');
				// setTimeout(function(){
					$this.isnum(a);
				// },1)
				 
				// setTimeout(function(){
					// $this.isfal($this.sub);
					// $this.trendchart($this.nummaxAll.length,20);
					
				// },2)
				
			    setTimeout(function(){
					$this.sub = 0;
					$('#lis_1').click();
					
				},1)
				setTimeout(function(){
					$('#main').css('overflow-y', 'scroll')
				},500)
		},
		isnum(b){
			// this.nummaxAll = base.getApi().getLotteryDraw(b).data.lotteryDrawList
			// this.nummaxAll = this.$store.state.ishistorydraw[b];
			if(!!this.$store.state.ishistorydraw[b]){
				this.nummaxAll = this.$store.state.ishistorydraw[b];
			}else{
				this.$store.state.ishistorydraw[b] = base.getApi().getLotteryDraw(b).data.lotteryDrawList;
				this.nummaxAll = this.$store.state.ishistorydraw[b];
			}
			this.drarge = []
			this.draw = []
			if(this.nummaxAll[0].lottery.code=="cqssc"||this.nummaxAll[0].lottery.code=="sfssc"||this.nummaxAll[0].lottery.code=="tjssc"||this.nummaxAll[0].lottery.code=="xjssc"||this.nummaxAll[0].lottery.code=="ffssc"||this.nummaxAll[0].lottery.code=="txssc"||this.nummaxAll[0].lottery.code=="qqssc"){
				this.numArr = ["0","1","2","3","4","5","6","7","8","9"]
			}else if(this.nummaxAll[0].lottery.showType==2||this.nummaxAll[0].lottery.code=="bjpks"||this.nummaxAll[0].lottery.code=="jspks"||this.nummaxAll[0].lottery.code=="xyft"||this.nummaxAll[0].lottery.code=="xysm"){
				//PK
				this.numArr = ["01","02","03","04","05","06","07","08","09","10"];
			}else if(this.nummaxAll[0].lottery.showType==5){
				//11选5
				this.numArr = ["01","02","03","04","05","06","07","08","09","10","11"];
			} else if (this.nummaxAll[0].lottery.showType == 1 || this.nummaxAll[0].lottery.showType == 3
				|| this.nummaxAll[0].lottery.showType == 4|| this.nummaxAll[0].lottery.showType == 9 
				|| this.nummaxAll[0].lottery.showType == 8){
				//时时彩||28||快三||福彩3d||排列三||上海时时乐
				this.numArr = ["0","1","2","3","4","5","6","7","8","9"];
			}else if(this.nummaxAll[0].lottery.showType == 6){
				this.numArr = ["1","2","3","4","5","6"];				
			}else if(this.nummaxAll[0].lottery.showType==22){
				//快乐十分
				this.numArr = ["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20"];
			}else if(this.nummaxAll[0].lottery.showType==23){
				//快乐十分
				this.numArr = ["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20"];
			}else if(this.nummaxAll[0].lottery.showType==25){
				//快乐十分
				this.numArr = ["0","1","2","3","4","5","6","7","8","9"];
			}else if(this.nummaxAll[0].lottery.showType==11){
				this.numArr = ["01","02","03","04","05","06","07","08","09","10"];
			}
			var $this = this;
			var substi = [];
			this.nummaxAll.forEach(function(item){
				item.result.split(',').forEach(function(itemmin){
					substi.push(itemmin)
				})
				$this.draw.push(substi);
				substi=[];
			})
			this.nummaxAll[0].result.split(',').forEach(function(c,index){
				$this.draw.forEach(function(a){
					substi.push(a[index])
				})
				$this.drarge.push(substi)
				substi=[];
			})
		},
		initialize(){
			$('#lis_color_speciesul'+this.$route.params.trentMapId+'').addClass('ons');
			// $('#lis_color_speciesul'+this.$route.params.trentMapId+'').addClass('ons');
		},
		isfal(s){
			// alert('ccc')
			////console.log(this.drarge);
			var fale = 1;
              for(var g = 0;g<this.numArr.length;g++){
              	var sort0s = document.querySelectorAll('.sort'+g+'');
                   for(var b = 0 ; b<sort0s.length;b++){
                   		if(this.drarge[s][b]==this.numArr[g]){
							   sort0s[b].innerHTML = '<span class="ons2 ons3" style="display: inline-block; width: 25px; height: 25px; box-shadow: grey -2px -3px 2px -2px inset; border-radius: 50%; color: rgb(255, 255, 255); font-size: 16px; position: relative; z-index: 777; font-weight: 900;">'+this.drarge[s][b]+'</span>'
                   			fale=0
                   	    }else{
                   	    	sort0s[b].innerHTML=fale;
                   	    }
	                   	  	fale++
                   }
                   fale=1;
			  }
		},
		trendchart(ids,w){
			$("#canvasdiv").html('');
			var cvs = document.createElement("canvas");
			cvs.width = 400;
			cvs.height =1200;

			if(this.$store.state.isid){
				cvs.style.top = -80+'px';
			}else{
				cvs.style.top = -0.8+'rem';
			}
			
			cvs.style.left = 0;
			cvs.style.position = "absolute";
			var cxt = cvs.getContext("2d");
			let width = cvs.width,height=cvs.height;
			if (window.devicePixelRatio) {
				cvs.style.width = width + "px";
				cvs.style.height = height + "px";
				cvs.height = height * window.devicePixelRatio;
				cvs.width = width * window.devicePixelRatio;
				cxt.scale(window.devicePixelRatio, window.devicePixelRatio);
			}
			var x = $('.wdh0').offset().top;
			var y = $('.wdh0').offset().left;
			cxt.moveTo(y,x);
			// cxt.lineWidth = .5;
			cxt.lineWidth=1;  
			cxt.lineJoin = "round";
			cxt.beginPath();
			for(var m = 0;m<ids;m++){
				var x = $('.wdh'+m).offset().top;
				var y = $('.wdh'+m).offset().left;
				cxt.lineTo((y+($('.wdh'+m).width()/2)),(x+($('.wdh'+m).height()/2)));
				cxt.strokeStyle = window.mapcolor;
				cxt.stroke();
			}
			$("#canvasdiv").append(cvs);
		},
		iszsAll(){
			if(this.iszs=='yes'){
				this.iszstf = false;
			}else{
				var $this = this;
				setTimeout(function(){
					console.log($this.$route)
					if($this.$route.params.trentMapId==37){
						$('#main').css('padding-bottom','.001rem');
						$('#fg').css('height','.001rem')
					}else{
						$('#main').css('padding-bottom','.3rem');
						$('#fg').css('height','.5rem')
					}
					// $('.calculate').css('bottom','0')
				},10)
				
			}
		},
		isclickmr(){
			$('#lis_1').click();
		},
		iscoller(){
			console.log(this.nummaxAll);
			console.log(this.numArr);
			var strAttry = [];
			var strAttrmin=[];
			// 出现总次数
			for(var y = 0;y<this.nummaxAll[0].result.split(',').length;y++){
				for(var p = 0;p<this.nummaxAll.length;p++){
					strAttrmin.push(this.nummaxAll[p].result.split(',')[y])
				}
				strAttry.push(strAttrmin)
				strAttrmin = []
			}
			console.log(strAttry);
			var degree = 0;
			var degree_Allmin = []
			this.degree_All = [];//出现总次数
			var omit = 0;
			var omit_All = []; 
			var omitAll = [];
			this.omitAllmax = []//遗漏值
			var winnum_All = 0; 
			var winnumAll = [];
			this.winnumAllmax = [];//中奖个数
			var maxomit = 0; //最大遗漏值
			var continuous_max = 0 //最大连续值
			var continuousmax_All = [];
			var continuousmaxAll = [];
			this.continuousmaxAllmax = [];
			for(var k = 0;k<strAttry.length;k++){
				for(var d = 0;d<this.numArr.length;d++){
					for(var x = 0;x<this.nummaxAll.length;x++){
						if(strAttry[k][x]==this.numArr[d]){
							degree++
							winnum_All++;
							if(omit!=0){
								omit_All.push(omit);
							}
							omit=0;
							continuous_max++;
						}else{
							omit++;
							continuousmax_All.push(continuous_max);
       			   	  		continuous_max = 0;
						}
					}
					degree_Allmin.push(degree);
					degree = 0;
					omit_All.push(omit);	
					omit=0;
					omitAll.push(omit_All);
					omit_All = [];				 
					winnumAll.push(winnum_All);
					winnum_All=0;
					continuousmaxAll.push(continuousmax_All);
					continuousmax_All = [];
				}
				this.degree_All.push(degree_Allmin)
				degree_Allmin = []
				this.omitAllmax.push(omitAll)
				omitAll = []
				this.winnumAllmax.push(winnumAll)
				winnumAll = []
				this.continuousmaxAllmax.push(continuousmaxAll);
				continuousmaxAll = []
			}
		},
		istoubu(){
			
		}
		},
		mounted:function(){
			this.istoubu();
			this.getapi();
			var $this = this
			this.affairAll();
			this.isnum(this.$route.params.trentMapId);
			this.iscoller()
			setTimeout(function(){
				$this.initialize();
			},10)
			
			// setTimeout(function(){
				$this.isfal(0);
			// },10)
			
			this.iszsAll();
			setTimeout(function(){
				$this.isclickmr();
					var mains=document.getElementById("main");
								mains.style.height=document.getElementsByTagName("body")[0].offsetHeight-document.getElementsByClassName("pde")[0].offsetHeight
								-document.getElementsByClassName("foottab")[0].offsetHeight-document.getElementsByClassName("calculate")[0].offsetHeight+'px'
				 
				// for(var i=0;i<mains.length;i++){
					// alert(mians.style.paddingTop)
				// }
				
			},500)
			this.colornew();
		},
		beforeCreate: function() {
			// ////console.log($(".lis[index='basketball']"));
			// $("li[index='"+this.$route.params.trentMapId+"']").addClass('ons')
			
		},
		props: ['iszs','lotteryResultListId']
	}
</script>