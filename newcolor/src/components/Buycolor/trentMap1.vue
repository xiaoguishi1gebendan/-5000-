<template>
    <div id="box">
		  <header class="header12222222222222">
		  	<div class="color_species">
		  		<a href="javascript:history.go(-1)"><p class=""><i class="iconfont"></i></p></a>
		  		<span>{{cound}}</span>
		  		
		  		<span id="xx"><i class="iconfont"></i></span>
		  	</div>
		  	<div class="color_speciesAll" style="display: none;">
		  		<ul class="color_speciesul">
				  <li v-for="itemAll in resultnew" @click="toLotteryDetail(itemAll.id)" :index="itemAll.id"  :id="'lis_color_speciesul'+itemAll.id" class="lis">{{itemAll.name}}</li>
				</ul>
		  	</div>
		  	
		  </header>
		  <main id="main">
		  	  <div class="number_Kj"> 
					<ul>
						<li v-if="index==0" v-for="(nummin,index) in numAll" id="lis_1" :index="index" class="ons1">{{num[index]}}</li>
						<li v-else :index="index">{{num[index]}}</li>
					</ul>
				</div>
		  <div class="wm_con">
		  	  <div class="wm_ulAll">
                <ul>
                    <li ref='qs'>期数</li>
                    <li v-for="numArrmin in numArr" style="flex:1;">{{numArrmin}}</li>
                </ul>
                <ul v-for="(numindex,index) in nummaxAll">
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
		</div>
</template>
<style>
		.number_Kj ul{
				-webkit-tap-highlight-color: rgba(0,0,0,0); 
		}
		#box{
			font-size: .1rem;
		}	
		.color_speciesul .ons{
			border:1px solid #ff6b52!important;
			color:#ff6b52;
		};
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
				sub:0
			}
		},
		created(){
			this.getapi()	
		},
		updated(){

		},
		methods:{
			getapi(){
				if(this.$route.params.trentMapId==undefined){
					this.$route.params.trentMapId = 1;
				}
				this.result = base.getApi().getLotteryList();
				var fal = true;
				var $this = this
				this.result.data.lotteryList.forEach(function(item){
					fal=true;
					if(item.code=='cqklsf'||item.code=='gdklsf'||item.code=='jslhc'||item.code=='xglhc'||item.code=='xypk'){
						fal=false;
					}
					if(fal){
						$this.resultnew.push(item)
					}
				});
				this.num = ['一','二','三','四','五','六','七','八','九','十'];
				this.nummaxAll = base.getApi().getLotteryDraw(this.$route.params.trentMapId).data.lotteryDrawList;
				this.numAll = this.nummaxAll[0].result.split(',');
				this.cound = this.nummaxAll[0].lottery.name
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
		//			$('.color_species span:first-of-type').html('&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp')
					$('#modal_Box').toggle();
					$('.color_speciesAll').slideToggle(10);
					if(fal){
						$('#xx').css({"transform":"rotate(180deg)"});
						fal=false
					}else{
						$('#xx').css({"transform":"rotate(0deg)"});
						fal=true;
					}
				});
				$('.color_speciesul').on('click','li',function(){
					$('#xx').css({"transform":"rotate(0deg)"});
					fal=true;
				});
				$('.color_speciesAll').on('click','.lis',function(){
					$(this).siblings().removeClass('ons');
					$(this).addClass('ons')
					$('.color_species span:first-of-type').html($(this).html())
					
					$('.color_speciesAll').hide();
					$('#modal_Box').hide()
				});
				$('#modal_Box').click(function(){
					$(this).hide();
					$('.color_speciesAll').hide();
					$('#xx').css({"transform":"rotate(0deg)"});
					fal=true;
				});
				$('.number_Kj').on('click','li',function(){
					var that = this
					$(this).siblings().removeClass('ons1');
					$(this).addClass('ons1')
					setTimeout(function(){
						$this.sub=$(that).attr('index')
					},1)
					setTimeout(function(){
						
						$this.trendchart($this.nummaxAll.length-1,20)
						$this.isfal($(that).attr('index'))
						
					},2);
				});
			},
			toLotteryDetail(a){
				var $this = this
				// console.log(base.getApi().getLotteryDraw(a)) 
				this.nummaxAll = base.getApi().getLotteryDraw(a).data.lotteryDrawList
				this.numAll = this.nummaxAll[0].result.split(',');
				var lis = document.querySelectorAll('.number_Kj li');
				for(var t=0;t<lis.length;t++){
					lis[t].classList.remove("ons1");
				}
				$('#lis_1').addClass('ons1');
				setTimeout(function(){
					$this.isnum(a)
				},1)
				
				setTimeout(function(){
					$this.trendchart($this.nummaxAll.length-1,20)
					
				},2)
			    setTimeout(function(){
					$this.isfal($this.sub)
				},3)
		},
		isnum(b){
			this.nummaxAll = base.getApi().getLotteryDraw(b).data.lotteryDrawList
			this.drarge = []
			this.draw = []
			if(this.nummaxAll[0].lottery.code=="cqssc"||this.nummaxAll[0].lottery.code=="sfssc"||this.nummaxAll[0].lottery.code=="tjssc"||this.nummaxAll[0].lottery.code=="xjssc"||this.nummaxAll[0].lottery.code=="ffssc"||this.nummaxAll[0].lottery.code=="txssc"){
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
			$('#lis_color_speciesul'+this.$route.params.trentMapId+'').addClass('ons')
		},
		isfal(s){
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
			var colorArray = ['#11bb55','#ee7711','#11bb55','#ee7711','#11bb55','#ee7711','#11bb55','#ee7711','#11bb55','#ee7711','#11bb55','#ee7711','#11bb55','#ee7711','#11bb55','#ee7711','#11bb55','#ee7711']
			for(var m = ids;m>0;m--){
				var tid = $(".wdh"+m);
				var fid = $(".wdh"+(m-1));
   	            var f_width = fid.outerWidth(); 
                var f_height = fid.outerHeight();
				var f_offset = fid.offset();
                var f_top = f_offset.top;
                var f_left = f_offset.left;
				var t_offset = tid.offset();
                var t_top = t_offset.top;
                var t_left = t_offset.left;
                var cvs_left = Math.min(f_left, t_left);
                var cvs_top = Math.min(f_top, t_top);
                tid.children().css("font-weight",'900');
                fid.children().css("font-weight",'900');
                var cvs = document.createElement("canvas");
                cvs.width = Math.abs(f_left - t_left) < w ? w : Math.abs(f_left - t_left);
                cvs.height = Math.abs(f_top - t_top);
                cvs.style.top = cvs_top + parseInt(f_height / 2) + "px";
                cvs.style.left = cvs_left + parseInt(f_width / 2) + "px";
                cvs.style.position = "absolute";
                var cxt = cvs.getContext("2d");
                cxt.lineWidth = 1;
                cxt.lineJoin = "round";
                cxt.beginPath();
                cxt.moveTo(f_left - cvs_left, f_top - cvs_top);
                cxt.lineTo(t_left - cvs_left, t_top - cvs_top);
                cxt.strokeStyle = "#ff6b52";
                cxt.stroke();
                $("#canvasdiv").append(cvs);
			}
		}
		
			
		},
		mounted:function(){
			var $this = this
			this.affairAll();
			this.isnum(this.$route.params.trentMapId);
			this.initialize();
			setTimeout(function(){
				$this.isfal(0);
			},10)
			setTimeout(function(){
				$this.trendchart($this.nummaxAll.length-1,20)
			},10)
			
		},
		beforeCreate: function() {
			// console.log($(".lis[index='basketball']"));
			// $("li[index='"+this.$route.params.trentMapId+"']").addClass('ons')
			
		},
	}
</script>