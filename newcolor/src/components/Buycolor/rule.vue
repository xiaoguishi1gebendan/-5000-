<template>
   <div class="maxisonly" style="font-size:.28rem !important;overflow: hidden;position:absolute;top:0;width:100%;height:100%;background: white;z-index:1000;">
       <div class="modol" style="" v-if="!iswanfa"></div>
		<header>
		   <span class="" @click="goback" ><i class="iconfont">&#xe61f;</i></span>
           <div id="tombola_Xdll" :class="{'bgcs':iswanfa}" style="font-size: 0.28rem!important;">
			   <span style="font-size: 0.28rem!important;" v-if="kindAll.id==namea"  v-for="(kindAll,index) in kind.data" class="tombola_Xd" :key="index" >{{kindAll.name}}</span>
			   <i style="display: inline-block;height: 0.5rem;width:0.5rem;text-align:center;border-radius: 0px 0px 5px 5px;font-size: 0.26rem;line-height: 0.5rem;transform: rotate(-90deg);" class="iconfont" v-if="!iswanfa">&#xe61f;</i></div>
		</header>
		<div class="tombola" v-if="!iswanfa">
			<ul class="lis">
				<li v-if="index==0" v-for="(itmer,index) in kind.data" id="li1" :index="itmer.id" :key='index'>{{itmer.name}}</li>
				<li v-else :index="itmer.id">{{itmer.name}}</li>
			</ul>
		</div>
		<div class="max" style="    overflow: hidden;">
			<div class="tap"  v-if="!iswanfa">
				<span index="1" class="span1 on" style="font-size: 0.28rem!important;">彩种介绍</span>
				<span index="1" class="span2" style="font-size: 0.28rem!important;">玩法规则</span>
			</div>
			<div v-if="controller=='haver'" class="main" style="padding:0.1rem;background:#fff;">
				<div v-for="(regula,index) in regulationL" :key="index" class="divs">
					 <span class="spanmin">{{regula.name}}</span>
	                 <span class="spanmax">
	                 	<span class="spanmax1">{{regula.name}}</span>
	                 	<span class="spanmax2">
	                 		<i class="iconfont">&#xe61f;</i>
	                 	</span>
	                 </span>
	                 <div v-if="regula.sencondPlayArray[0]!=undefined" class="xl">
	                 	{{regula.sencondPlayArray[0].playExplain.example}}
	                 </div>
					 <div v-else class="xl">
	                 	暂无数据，敬请期待
	                 </div>
				</div> 
			</div>

			<div v-else v-html="letter" class="main" style="padding:0.1rem;background:#fff;font-size:0.26rem">



				{{letter}}
			</div>
		</div>
   </div>
</template>
<script>
export default {
  data() {
    return {
      kind: [],
      letter: "",
      letterAll: {},
      regulationL: [],
      controller: "",
      namea: this.$route.params.ruleId
    };
  },
  created() {
    localStorage.setItem("lotteyId",this.$route.path.split("/")[2])
    this.kind = base.getApi().evolutionList();
    // console.log(this.kind);
    this.letterAll = base.getApi().inroductionList().data;
    // console.log(this.letterAll);
    // console.log(this.$route.params.ruleId);
    var dataAlla = base.getApi().gameRules(this.$route.params.ruleId); //this.$route.params.ruleId
    this.regulationL = dataAlla.data;
    this.letter = JSON.parse(this.letterAll[this.$route.params.ruleId]).content;
  },
  computed:{
    iswanfa(){
      return this.$store.state.iswanfa
    }
  },
  updated() {},
  methods: {
    isstyleclick() {
      $(".lis li[index=" + this.$route.params.ruleId + "]").addClass("on");
    
    },
    goback() {
      this.$router.go(-1);
      this.$store.state.iswanfa=false
      $(".oshade").click();
    },
    effect() {
      var $this = this;
      var fal = true;
      $("#tombola_Xdll").click(function() {
        if (fal) {
          fal = false;
          $(".modol").css("display", "block");
          $(".tombola").css("display", "block");
          $(".iconfont").css({
            transform: "rotate(90deg)",
            "border-radius": "5px 5px 0px 0px"
          });
        } else {
          fal = true;
          $(".modol").css("display", "none");
          $(".tombola").css("display", "none");
          $(".iconfont").css({
            transform: "rotate(-90deg)",
            "border-radius": "0px 0px 5px 5px"
          });
        }
      });
      $(".modol").click(function() {
        fal = true;
        $(this).css("display", "none");
        $(".tombola").css("display", "none");
        $(".iconfont").css({
          transform: "rotate(-90deg)",
          "border-radius": "0px 0px 5px 5px"
        });
      });

      $(".tombola").on("click", "li", function() {
        fal = true;
        $(".tombola_Xd").html($(this).html());
        $(".modol").css("display", "none");
        $(".tombola").css("display", "none");
        $(this)
          .siblings()
          .removeClass("on");
        $(this).addClass("on");
        $(".iconfont").css({
          transform: "rotate(-90deg)",
          "border-radius": "0px 0px 5px 5px"
        });
           localStorage.setItem("lotteyId",$(this).attr("index"))
        var dataAlla = base.getApi().gameRules($(this).attr("index"));
        // console.log(dataAlla);
        $this.regulationL = dataAlla.data;
      
        $(".span1").attr("index", $(this).attr("index"));
        $(".span2").attr("index", $(this).attr("index"));
        if ($(".tap .on").html() == "彩种介绍") {
          $this.controller = "";
        } else {
          $this.controller = "haver";
        }
        $this.letter = JSON.parse(
          $this.letterAll[$(this).attr("index")]
        ).content;
      });

      $(".tap").on("click", "span", function() {
        $(this)
          .siblings()
          .removeClass("on");
        $(this).addClass("on");
        if ($(this).html() == "彩种介绍") {
          $this.controller = "";
        } else {
          $this.controller = "haver";
        }
        var lotteyId= localStorage.getItem("lotteyId")
        var dataAlla = base.getApi().gameRules(lotteyId);
        $this.regulationL = dataAlla.data;
        $this.letter = JSON.parse(
          $this.letterAll[$(this).attr("index")]
        ).content;
      });

      $(".main").on("click", ".spanmax", function() {
        $(this)
          .siblings(".xl")
          .toggle();
      });
    },
    isplay() {
      if (window.localStorage.getItem("iswfsm") == "yes") {
        $(".tap").hide();
        $("#tombola_Xdll .iconfont").hide();
        $("#tombola_Xdll").css("background", "none");
        $(".tombola_Xd").html("玩法说明");
        $("#tombola_Xdll").unbind();
      }
      var $this = this;
      $(".aclick").click(function() {
        window.localStorage.setItem("iswfsm", "no");
        $this.$router.go(-1);
      });
    }
  },
  mounted: function() {
    this.isstyleclick();
    this.effect();
    this.isplay();
    $('.MsoNormal span').css({fontSize:'0.26rem'})
    $('.p span').css({fontSize:'0.26rem'})
  },
  beforeCreate: function() {
    // $('input[index="'+this.$route.params.ruleId+'"]').tirr
    // $("li[index="+this.$route.params.ruleId+"]").trigger('click');
  }
};
</script>
<style scoped src="../../assets/source/css/wanfaguize.css"></style>

<style scoped>
.bgcs{
  background: transparent !important;
}
header div {
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  height: 0.5rem;
  text-align: center;
  /* border-radius: 5px 0 0 5px; */
  line-height: 0.5rem;
  margin: auto;
}
.lis li.on {
    color: white!important;
    background: linear-gradient(90deg, #fa3956, #ff6b52);
}
.iconfont {
  transition: all 0.2s;
}
.main {
  text-align: left;
}
.main p.MsoNormal span {
  /* font-size: 16px !important; */
}
.MsoNormal span {
  /* font-size: 16px !important; */
}
#wrapper::-webkit-scrollbar {
  display: none;
  background-color: transparent;
}
body::-webkit-scrollbar {
  display: none;
  background-color: transparent;
}
.main::-webkit-scrollbar {
  display: none;
  background-color: transparent;
}
.main::-webkit-scrollbar {
        display: none;
        overflow-y: hidden;/*为了兼容普通PC的浏览器*/
        height: 100%;
        position: fixed;
    }
.main::before{
  /* content: '';
  display: inline-block;
  width: .1rem;
  height: 100%;
  background-color: red;
  position: absolute;
  right: 0;
  z-index: 99999 */
}    
</style>
