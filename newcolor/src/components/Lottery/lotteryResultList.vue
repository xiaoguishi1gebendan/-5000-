<template>
    <div style="overflow: hidden;position:absolute;top:0;width:100%;height:100%;background: white;z-index:1000;" id = "layout">
        <!-- <Header :title="lotteryDrawList[0].lottery.name" ></Header> -->

         <!-- <div class="index_header" style="position:fixed;top:0;height:00.8rem;">
		          <div @click="backtrack" style="top: 33px; position: absolute;transform: translateY(-50%);color: #fff;width:20%;height:00.8rem;">
                    <i class="iconfont icon-mjiantou-copy" style="    font-size: 0.56rem;position: absolute;line-height: 45px;margin-left: 12px;left:0;height:00.8rem;"></i>
             </div>
		    	<h3 >{{lotteryDrawList[0].lottery.name}}</h3>
                <div v-show="isShowBack" class="trendtu" style="height:00.8rem;top: 33px;position: absolute;transform: translateY(-50%);color: #fff;width:20%;right:0">走势图</div>
	    	</div> -->

        <div class="header_wrap" style=" position: absolute;height: 1.8rem;">
        <div class="header">
            <div @click="backtrack" class="set ">
            <i class="iconfont icon-mjiantou-copy" style="position: absolute;"></i>
            </div>
            <div class="setrigth" style="position: relative;width: 87%;height: 1.4rem;background-color: white;border-radius: 0.7rem 0 0 .7rem;position: absolute;right: 0;top: .2rem;">
                <img style="    position: absolute;
    width: 1.1rem;
    left: 0.2rem;
    top: 0.15rem;" alt="" :src="urlclick">
                <div style="    position: absolute;
    left: 1.5rem;
    top: 0.2rem;
    box-sizing: border-box;
    font-size: 0.28rem;
    text-align: left;
    line-height: 0.5rem;">
                    <h2 style="    font-weight: 500!important;    margin-bottom: .02rem;">{{lotteryDrawList[0].lottery.name}}</h2>
                    <span style="color: gray;">第{{lotteryDrawList[0].nextNo}}期</span>
                </div>
                <div style="position: absolute;right: .2rem;top: .1rem;text-align: right;font-size: 0.28rem;">
                    <section v-if="name1=='ff11x5'||name1=='jsssq'||name1=='fflhc'||name1=='js3d'" style="    margin-bottom: -.065rem;color: red;font-size: .4rem;">
                        <span style="font-family:'QuartzEF';">{{thisdatalist| mytimeAlljs('shi1')}}</span><span style="font-family:'QuartzEF';">{{thisdatalist| mytimeAlljs('shi2')}}</span>:<span style="font-family:'QuartzEF';">{{thisdatalist| mytimeAlljs('fen1')}}</span><span style="font-family:'QuartzEF';">{{thisdatalist| mytimeAlljs('fen2')}}</span>:<span style="font-family:'QuartzEF';">{{thisdatalist| mytimeAlljs('miao1')}}</span><span style="font-family:'QuartzEF';">{{thisdatalist| mytimeAlljs('miao2')}}</span>
                    </section>
                    <section v-else style="color: red;font-size: .4rem;    margin-bottom: -.065rem;">
                        <span style="font-family:'QuartzEF';">{{thisdatalist| mytimeAll('shi1')}}</span><span style="font-family:'QuartzEF';">{{thisdatalist| mytimeAll('shi2')}}</span>:<span style="font-family:'QuartzEF';">{{thisdatalist| mytimeAll('fen1')}}</span><span style="font-family:'QuartzEF';">{{thisdatalist| mytimeAll('fen2')}}</span>:<span style="font-family:'QuartzEF';">{{thisdatalist| mytimeAll('miao1')}}</span><span style="font-family:'QuartzEF';">{{thisdatalist| mytimeAll('miao2')}}</span>
                    </section>
                    <span style="font-size: .28rem;line-height:0.56rem;">
                        即将开奖...
                    </span>
                </div>
            </div>
            
            <!-- <span v-show="isShowBack" class="trendtu">走势图</span> -->
        </div>
        </div>
        <div class="content" id="contented" style="position: relative;height:100%;overflow:scroll;">
             <!-- <scroll :on-refresh="onRefresh" :on-infinite="onInfinite">  -->
             <!-- <mt-loadmore  :top-method="loadTop"  style="background:white;"  ref="loadmore"  :max-distance="150" @top-status-change="handleTopChange" >
				<div class="list weui-pull-to-refresh" style="height: 800px;font-size:.13rem">
                    <p slot="top" class="mint-loadmore-top" style="font-size:00.28rem">
                        <img  class="rotate1" :class="{ 'rotate': topStatus === 'pull' }" ref="pp" src="../../statics/images/jtou.png" style="position:absolute;left:0.1rem;width:20px;bottom:0.15rem;" alt="">
                        <span class="imgdown" style=" position:absolute;left:0.1rem;width:0.2rem;height:0.2rem;bottom:0.15rem;" ref="imgdown" ></span>
                        <span style="position:absolute;right:0.1rem">最后更新：{{nowdata}}</span>
                        <span style="position:absolute;left:0.3rem" v-show="topStatus === 'pull'" >下拉刷新</span>
                        <span style="position:absolute;left:0.3rem" v-show="topStatus === 'loading'">正在加载</span>
                        <span style="position:absolute;left:0.3rem" v-show="topStatus === 'drop'">释放更新</span>
                    </p> -->
					<ul  v-if="lotteryDrawListFirst=='11'" class="lotterlist">
                        <!-- 幸运扑克 -->
                        <li v-if="!!itemAll.result" v-for="itemAll in lotteryDrawList"><div class="liwrap"><div class="litop">
                            <span>第{{itemAll.lotteryNo}}期</span><span>{{itemAll.addTime | dateFmt('YYYY-MM-DD HH:mm:ss')}}</span></div>
                            <div class="libottom"><div class="num_2"><div style="width: 30px;" class="saizi">
                            <img :src="uerAll+puke[itemAll.result.split(',')[0].split('-')[0]-1][itemAll.result.split(',')[0].split('-')[1]-1].logo.fileurl"></div><div style="width:  30px;" class="saizi">
                            <img :src="uerAll+puke[itemAll.result.split(',')[1].split('-')[0]-1][itemAll.result.split(',')[1].split('-')[1]-1].logo.fileurl"></div><div style="width:  30px;" class="saizi">
                            <img :src="uerAll+puke[itemAll.result.split(',')[2].split('-')[0]-1][itemAll.result.split(',')[2].split('-')[1]-1].logo.fileurl"></div></div></div></div>
                        </li>
                    </ul>

                    <!-- 双色球 -->
					<ul v-else-if="name1=='ssq'||name1=='jsssq'" class="lotterlist">  
                        <li v-if="!!itemAll.result" v-for="itemAll in lotteryDrawList"><div class="liwrap"><div class="litop"><span> 第{{itemAll.lotteryNo}}期</span>
                            <span>{{itemAll.addTime | dateFmt('YYYY-MM-DD HH:mm:ss')}}</span></div>		<div class="libottom"><div class="num_1">
                            <div v-if="index==itemAll.result.split(',').length-1" v-for="(itemminAll2,index) in itemAll.result.split(',')" class="lan">{{itemminAll2}}</div>
                            <div v-else class="hong">{{itemminAll2}}</div>
                            </div>		</div>	</div>
                        </li>
                    </ul> 
                    <ul  v-else-if="lotteryDrawListFirst=='2'" class="lotterlist">
                        <!-- 重庆时时彩 -->
                       <li v-if="!!itemAll.result" v-for="itemAll in lotteryDrawList" >	<div class="liwrap"><div class="litop"><span> 第{{itemAll.lotteryNo}}期</span>
                            <span>{{itemAll.addTime | dateFmt('YYYY-MM-DD HH:mm:ss')}}</span></div><div class="libottom">
                            <div class="num_1">
                               <div v-for="itemminx in itemAll.result.split(',')" class="hong">{{itemminx}}</div>
                            </div>
                           <span class="res2">
                                <span v-if="itemAll.result.split(',')[itemAll.result.split(',').length-2]%2=='0'&&itemAll.result.split(',')[itemAll.result.split(',').length-2]<=4">小双</span>
								<span v-else-if="itemAll.result.split(',')[itemAll.result.split(',').length-2]%2!='0'&&itemAll.result.split(',')[itemAll.result.split(',').length-2]<=4">小单</span>
								<span v-else-if="itemAll.result.split(',')[itemAll.result.split(',').length-2]%2!='0'&&itemAll.result.split(',')[itemAll.result.split(',').length-2]>4">大单</span>
								<span v-else="itemAll.result.split(',')[itemAll.result.split(',').length-2]%2=='0'&&itemAll.result.split(',')[itemAll.result.split(',').length-2]>4">大双</span>
                               &nbsp;|&nbsp;
                                <span v-if="itemAll.result.split(',')[itemAll.result.split(',').length-1]%2=='0'&&itemAll.result.split(',')[itemAll.result.split(',').length-1]<=4">小双</span>
								<span v-else-if="itemAll.result.split(',')[itemAll.result.split(',').length-1]%2!='0'&&itemAll.result.split(',')[itemAll.result.split(',').length-1]<=4">小单</span>
								<span v-else-if="itemAll.result.split(',')[itemAll.result.split(',').length-1]%2!='0'&&itemAll.result.split(',')[itemAll.result.split(',').length-1]>4">大单</span>
								<span v-else="itemAll.result.split(',')[itemAll.result.split(',').length-1]%2=='0'&&itemAll.result.split(',')[itemAll.result.split(',').length-1]>4">大双</span>
                            </span></div></div>
                        </li>
                    </ul>    
                    <ul  v-else-if="lotteryDrawListFirst=='6'" class="lotterlist">
                        <!-- 极速快三 -->
                        <li v-if="!!itemAll.result" v-for="itemAll in lotteryDrawList"><div class="liwrap"><div class="litop">
                            <span> 第{{itemAll.lotteryNo}}期</span><span>{{itemAll.addTime | dateFmt('YYYY-MM-DD HH:mm:ss')}}</span></div>
                            <div class="libottom">
                            <div class="num_2">
                                <div v-for="itemminx in itemAll.result.split(',')" class="saizi">
                                    <img :src="uerAll+kaisan[itemminx-1].logo.fileurl">
                                    <!-- {{itemminx-1}} -->
                                </div>
                            </div><span class="res3">和值&nbsp;&nbsp;:&nbsp;{{(+itemAll.result.split(',')[0])+(+itemAll.result.split(',')[1])+(+itemAll.result.split(',')[2])}}</span>
                            </div></div>
                        </li>
                    </ul>    
                    <ul v-else-if="name1=='jspks'||name1=='xyft'||name1=='xysm'||name1=='bjpks'" class="lotterlist">
                        <!-- 北京pk十 -->
                        <li v-if="!!itemAll.result" v-for="itemAll in lotteryDrawList"><div class="liwrap"><div class="litop">
                            <span> 第{{itemAll.lotteryNo}}期</span><span>{{itemAll.addTime | dateFmt('YYYY-MM-DD HH:mm:ss')}}</span></div>
                            <div class="libottom">
                            <div class="num_1">
                            <div v-for="item1 in itemAll.result.split(',')"  :style="'border-radius:0.1rem;background:none;text-shadow: 0 1px #000, 1px 0 #000, -1px 0 #000, 0 -1px #000;background: linear-gradient(90deg, '+colorAll[item1]+', '+colorAll[item1+'1']+')'" class="hong">{{Number(item1)}}</div>
                            </div></div>
                            </div>
                        </li>
                    </ul>   
                    <ul  v-else-if="lotteryDrawListFirst=='4'" class="lotterlist">
                        <!-- 北京28 -->
                        <li v-if="!!itemAll.result" v-for="itemAll in lotteryDrawList"><div class="liwrap"><div class="litop"><span>第{{itemAll.lotteryNo}}期</span>
                            <span>{{itemAll.addTime | dateFmt('YYYY-MM-DD HH:mm:ss')}}</span></div><div class="libottom">
                            <div class="num_1">
                                <div class="hong">{{itemAll.result.split(',')[0]}}</div><div class="hong" id="jia">+</div>
                                <div class="hong">{{itemAll.result.split(',')[1]}}</div><div class="hong" id="jia">+</div>
                                <div class="hong">{{itemAll.result.split(',')[2]}}</div><div class="hong" id="jia">=</div>
                                <div v-if="rednew.indexOf((+itemAll.result.split(',')[0])+(+itemAll.result.split(',')[1])+(+itemAll.result.split(',')[2])) != '-1'" class="hong">{{itemAll.result.split(',')|capitalize}}</div>
                                <div v-else-if="greennew.indexOf((+itemAll.result.split(',')[0])+(+itemAll.result.split(',')[1])+(+itemAll.result.split(',')[2])) != '-1'" class="lv">{{itemAll.result.split(',')|capitalize}}</div>
                                <div v-else-if="bulrnew.indexOf((+itemAll.result.split(',')[0])+(+itemAll.result.split(',')[1])+(+itemAll.result.split(',')[2])) != '-1'" class="lan">{{itemAll.result.split(',')|capitalize}}</div>
                                <div v-else class="hui">{{itemAll.result.split(',')|capitalize}}</div>
                                <!-- <div class="hui">13</div> -->
                            </div>
                            <div class="res4" v-if="((+itemAll.result.split(',')[0])+(+itemAll.result.split(',')[1])+(+itemAll.result.split(',')[2]))<=5"  >极小</div>
							<div class="res4" v-else-if="((+itemAll.result.split(',')[0])+(+itemAll.result.split(',')[1])+(+itemAll.result.split(',')[2]))>=22"  >极大</div>
							<div class="res4" v-else-if="((+itemAll.result.split(',')[0])+(+itemAll.result.split(',')[1])+(+itemAll.result.split(',')[2]))%2==0&&((+itemAll.result.split(',')[0])+(+itemAll.result.split(',')[1])+(+itemAll.result.split(',')[2]))<=13" >小双</div>
							<div class="res4" v-else-if="((+itemAll.result.split(',')[0])+(+itemAll.result.split(',')[1])+(+itemAll.result.split(',')[2]))%2!=0&&((+itemAll.result.split(',')[0])+(+itemAll.result.split(',')[1])+(+itemAll.result.split(',')[2]))<=13" >小单</div>
							<div class="res4" v-else-if="((+itemAll.result.split(',')[0])+(+itemAll.result.split(',')[1])+(+itemAll.result.split(',')[2]))%2==0&&((+itemAll.result.split(',')[0])+(+itemAll.result.split(',')[1])+(+itemAll.result.split(',')[2]))>=14" >大双</div>
							<div class="res4" v-else>大单</div>
                            <!-- <span class="res4">小&nbsp;&nbsp;单</span> -->
                            </div></div>
                        </li>
                    </ul>  
                    <ul  v-else-if="lotteryDrawListFirst=='3'||lotteryDrawListFirst == '5'" class="lotterlist">  
                        <!-- 重庆快乐十分 -->
                        <li v-if="!!itemAll.result" v-for="itemAll in lotteryDrawList"><div class="liwrap"><div class="litop"><span> 第{{itemAll.lotteryNo}}期</span>
                            <span>{{itemAll.addTime | dateFmt('YYYY-MM-DD HH:mm:ss')}}</span></div>		<div class="libottom"><div class="num_1">
                            <div v-for="itemminAll2 in itemAll.result.split(',')" class="hong">{{itemminAll2}}</div>
                            </div>		</div>	</div>
                        </li>
                    </ul>    
                    <ul  v-else class="lotterlist">
                        <li v-if="!!itemAll.result" v-for="itemAll in lotteryDrawList"><div class="liwrap"><div class="litop"><span> 第{{itemAll.lotteryNo}}期</span>
                        <span>{{itemAll.addTime | dateFmt('YYYY-MM-DD HH:mm:ss')}}</span></div><div class="libottom">
                                <div style="display:flex" class="num_1">
                                <section v-for="(itemminall,index) in itemAll.result.split(',')" :key="index"   style="display: flex;flex-direction: column;align-items: center;height: 1.14rem;">
                                <div  v-if="index == '5'">
                                    <div  v-if="red.indexOf(itemminall) != '-1'"><div style="height: 0.56rem;width: 0.56rem;line-height: 0.56rem;" class="hong">{{itemminall}}</div><span id="jia"> + </span></div>
                                    <div  v-else-if="green.indexOf(itemminall) != '-1'"><div style="height: 0.56rem;width: 0.56rem;line-height: 0.56rem;" class="lv">{{itemminall}}</div><span id="jia"> + </span></div>
                                    <div  v-else="bulr.indexOf(itemminall) != '-1'"><div style="height: 0.56rem;width: 0.56rem;line-height: 0.56rem;" class="lan">{{itemminall}}</div><span id="jia"> + </span></div>
                                </div>
                                <div  v-else-if="red.indexOf(itemminall) != '-1'" style="height: 0.56rem;width: 0.56rem;line-height: 0.56rem;" class="hong">{{itemminall}}</div>
                                <div  v-else-if="green.indexOf(itemminall) != '-1'" style="height: 0.56rem;width: 0.56rem;line-height: 0.56rem;" class="lv">{{itemminall}}</div>
                                <div  v-else="bulr.indexOf(itemminall) != '-1'" style="height: 0.56rem;width: 0.56rem;line-height: 0.56rem;" class="lan">{{itemminall}}</div>
                                <div v-if="index == '5'" style="margin-right: .15rem;" class="dongwuAlla">{{zoo[itemminall]}}</div>
                                <div v-else class="dongwuAlla">{{zoo[itemminall]}}</div>
                                </section>
                                </div></div></div>
                        </li>
                    </ul>    
                    <!-- <ul v-else class="lotterlist">
                        <li v-for="itemAll in lotteryDrawList"><div class="liwrap"><div class="litop"><span> 第{{itemAll.lotteryNo}}期</span>
                        <span>{{itemAll.addTime | dateFmt('YYYY-MM-DD   HH:mm')}}</span></div><div class="libottom">
                                <div style="display:flex" class="num_1">
                                <section v-for="(itemminall,index) in itemAll.result.split(',')" :key="index"   style="display: flex;flex-direction: column;align-items: center;height: 50px;">
                                <div  v-if="index == '5'">
                                    <div  v-if="red.indexOf(itemminall) != '-1'"><div style="height: 23px;width: 23px;line-height: 23px;" class="hong">{{itemminall}}</div><span id="jia"> + </span></div>
                                    <div  v-else-if="green.indexOf(itemminall) != '-1'"><div style="height: 23px;width: 23px;line-height: 23px;" class="lv">{{itemminall}}</div><span id="jia"> + </span></div>
                                    <div  v-else="bulr.indexOf(itemminall) != '-1'"><div style="height: 23px;width: 23px;line-height: 23px;" class="lan">{{itemminall}}</div><span id="jia"> + </span></div>
                                </div>
                                <div  v-else-if="red.indexOf(itemminall) != '-1'" style="height: 23px;width: 23px;line-height: 23px;" class="hong">{{itemminall}}</div>
                                <div  v-else-if="green.indexOf(itemminall) != '-1'" style="height: 23px;width: 23px;line-height: 23px;" class="lv">{{itemminall}}</div>
                                <div  v-else="bulr.indexOf(itemminall) != '-1'" style="height: 23px;width: 23px;line-height: 23px;" class="lan">{{itemminall}}</div>
                                <div v-if="index == '5'" style="margin-right: .15rem;" class="dongwuAlla">{{zoo[itemminall]}}</div>
                                <div v-else class="dongwuAlla">{{zoo[itemminall]}}</div>
                                </section>
                                </div></div></div>
                        </li>
                    </ul> -->
                    <!-- </div> -->
            <!-- </mt-loadmore>        -->
          <!-- </scroll> -->

        </div>
        <footer v-if="!isid" @click="isgoucai" class="footer footergg">
			去购彩
		</footer>
         <footer  v-if="isid" @click="isgoucai" class="footer footergg" style="bottom:0.3rem;">
			去购彩
		</footer>
    </div>
</template>
<style>
  body,html{
      background-color: #f5f5f5;
      height: 100%;
  }

</style>

<style  scoped>
/* 倒计时样式 */

/* .setrigth section span{

} */
/* 导入的样式开始 */

#layout {
	width: 100%;
	height: 100%;
   
}

.header_wrap {
	width: 100%;
	/*background: url(/source/imgs/images/titlebg.png) no-repeat 0 0/100% 100%;*/
	position: relative;
	z-index: 100;
}

.header {
	height: .44rem;
	position: relative;
}

.header h2 {
	margin: 0 auto;
	text-align: center;
	color: #fff;
	font-weight: 600;
	font-size: 0.28rem;
}

.header .set {
	position: absolute;
	left: .1rem;
	top: 0.65rem;
	color: #fff;
}

.header .set i {
	font-size: 0.45rem;
}


/*主内容区*/

.content {}

/*开奖号码*/
.hong,
.lan,
.lv,
.hui {
	width: 0.56rem;
	height: 0.56rem;
	border-radius: 50%;
	text-align: center;
	line-height: 0.56rem;
	float: left;
	margin-left: .05rem;
	color: #fff;
	font-size: 0.28rem;
}
.hone {
    background:linear-gradient(90deg, #fa3956, #ff6b52);
}
.hongg {
	background: #d91e38;
}

.lan {
	    background: linear-gradient(90deg, #34bdf2,#358af2);
}

.lv {
	background: linear-gradient(90deg, #a9bc08,#2ab012);
}

.hui {
	background: #919191;
}
#jia{
	    background: #fff;
    color: #111;
    font-size: 0.28rem;
    line-height: 0.56rem;
    padding-left: 0.05rem;
}
.list{
	overflow-y: scroll;
	-webkit-overflow-scrolling: touch;
}
.lotterlist{
    /* padding-bottom: .44rem; */
    font-size: .28rem;
    padding-top: 1.9rem;
}
.lotterlist li{
	height: 1.8rem;
	background: #fff;
    border-bottom: 1px solid ghostwhite;
	overflow: hidden;
}
.liwrap{
	margin: 0 .15rem;
}
.litop{
	margin-top: 0.08rem;
	height: .7rem;
	line-height: .7rem;
	display: flex;
	justify-content: space-between;
	color: #999;
	font-size: .26rem;
}

.libottom{
	/*margin-top: 0.8rem;*/
	height: 0.56rem;
}
.libottom .num_1{
	float: left;
}
.libottom .num_1>div:first-child{
	margin-left: 0;
}

.libottom>span{
	    display: block;
    float: left;
    height: 0.56rem;
    line-height: 0.56rem;
    margin-left: .1rem;
    font-size: .26rem;
    color: #111;
    font-weight: 400;
	
}
.libottom .res{
	color: #111;
}

.libottom .num_2{
	height: 0.56rem;
	float: left;
}
.libottom .num_2 .saizi{
	float: left;
	width: 0.56rem;
	/* height: 0.56rem; */
	margin-left: 0.06rem;
}
.libottom .num_2 img{
	width: 100%;
	height: 100%;
}
.libottom .num_2 .saizi:first-child{
	margin-left: 0;
}

    /* 导入样式的结束 */
    /* style里面的样式 */
    .trendtu{
				position: absolute;
				top: 24%;
    			right: 4%;
    			color: white;
			}
    .footer{
        width: 100%;
        height: 0.8rem;
        text-align: center;
        line-height: 0.8rem;
        position:absolute;
        bottom: 0;
        left: 0;
        font-size: 16px;
        color: white;
        z-index: 999;
    }
    /* style里面的样式 */
     html {
		font-size: 625%!important;
	}
    body {
		width: 100%;
		height: 100%;
		background: #f5f5f5;
	}
	#layout {
		width: 100%;
		height: 100%;
	}
	.header_wrap {
		width: 100%;
		position: fixed;
		top: 0;
		z-index: 200;
	}
	.header {
		height: 00.8rem;
		position: relative;
	}
	.header h2 {
        text-align: center;
        color: #fff;
        color: black;
        font-weight: 100;
        font-size: .3rem;
        text-align: left;
	}
    .weui-pull-to-refresh__layer{
        background-color: #f5f5f5;
        padding-top: 0.65rem;
    }
    .weui-pull-to-refresh{
        margin-top: 0;
    }
    .weui-pull-to-refresh[data-v-4da2435e]{
         margin-top: 0;
    }
    #jia{
        font-weight: 100;
    }
    .res4{
        float: left;
        /* height: 0.56rem; */
        line-height: 0.56rem;
        margin-left: .2rem;
        font-size: .26rem;
    }
    .trendtu{
        font-size: 0.28rem;
    }
    .header .set{
        /* top:0 */
    }

</style>
 <style scoped src="../../assets/source/css/common/jquery-weui.min.css"></style> 

<script>
// import scroll from '../flash/flash'
    export default{
        data(){
            return{
             lotteryDrawList:[],
             lotteryDrawListFirst:'',
             name1:'',
             isShowBack: true,
             flowersnew:[],
             flowers:[],
             colorAll:{},
             rednew:[],
             bulrnew:[],
             greennew:[],
             zoo:{},
             red:[],
             bulr:[],
             green:[],
             topStatus: '',
             nowdata:'马上更新',
             fakse:false,
             pathiszs:'/iszoushi/',
             urlclick:require('../../assets/lanjiazai.png'),
             thisdatalist:{},
             uerAll:base.domain,
             puke:[],
             kaisan:[],
             idcolor:''
            }
        },
        components: {
            //  scroll 
        },
        computed:{
            isid(){
                return this.$store.state.isid;
                }
             },
        created(){
            console.log(this.$route.params.lotteryResultListId);
            this.idcolor = this.$route.params.lotteryResultListId
            if(!!this.$store.state.isphtuAll){
				this.puke = this.$store.state.isphtuAll.result
				this.kaisan = this.$store.state.isphtuAll.k3
			}else{
				this.$store.state.isphtuAll = base.getApi().phtupian().data
				this.puke = this.$store.state.isphtuAll.result
				this.kaisan = this.$store.state.isphtuAll.k3
            }
            
            this.first()
            var $this = this;

            this.urlclick =this.$store.state.urlgoucai
            setTimeout(function(){
                // $this.urlclick = window.localStorage.getItem('urlgoucai')
               console.log($this.$store.state.islsjl); 
               for(var z = 0;z<$this.$store.getters.getcolorsj.data.lotteryList.length;z++){
                   if($this.$store.getters.getcolorsj.data.lotteryList[z].id==$this.$store.state.islsjl){
                    $this.urlclick = $this.uerAll+$this.$store.getters.getcolorsj.data.lotteryList[z].logo.fileurl;
                    break;
                   }
               }
            },100)
            // this.urlclick = window.localStorage.getItem('urlgoucai')

            // console.log($this.$store.getters.getcolorsj.data.lotteryList);
            for (var f = 0;f < this.$store.getters.getcolorsj.data.lotteryList.length;f++) {
            if (this.$store.getters.getcolorsj.data.lotteryList[f].id ==this.$route.params.lotteryResultListId) {
              this.thisdatalist = this.$store.getters.getcolorsj.data.lotteryList[f];
              break;
            }
          }
        //   console.log(this.thisdatalist);
        },
          mounted:function() { 
              var $this = this;
              if(!!this.$store.state.ishistorydraw[this.$route.params.lotteryResultListId]){
                    $this.trendzs();
                    $this.zzz();
                    $this.heightAll();
                    $this.getFlower();
              }else{
                    setTimeout(function(){
                        $this.trendzs();
                        $this.zzz();
                        $this.heightAll();
                        $this.getFlower();
                    },101)
            }
                
            this.$nextTick(()=>{
                document.getElementById("contented").style.height=document.getElementsByTagName("body")[0].offsetHeight-40-
                document.getElementsByClassName("pde")[0].offsetHeight +"px"
            })

            this.isonstyle();
                    
            },
         methods:{
             isonstyle(){
                
             },
             first(){
               
                // console.log(getLotteryDrawold(this.$route.params.lotteryResultListId));
                // console.log(base.getApi().getLotteryDrawold(21));
                // this.lotteryDrawList =  base.getApi().getLotteryDrawold(this.$route.params.lotteryResultListId).data.lotteryDrawList;
              var $this = this;
            if(!!this.$store.state.ishistorydraw[this.$route.params.lotteryResultListId]){
                    this.lotteryDrawList = this.$store.state.ishistorydraw[this.$route.params.lotteryResultListId];
                    console.log(this.lotteryDrawList[0]);
                    window.localStorage.removeItem('buycolorAll')
                    //    this.$route.params.lotteryResultListId,
                    // $this.colorAll['01'] = '#ffdd11';$this.colorAll['02'] = 'blue';$this.colorAll['03'] = 'gray';$this.colorAll['04'] = 'orange';$this.colorAll['05'] = '#17d6df';$this.colorAll['06'] = '#5203fd';$this.colorAll['07'] = '#d7d7d7';$this.colorAll['08'] = '#ff0017';$this.colorAll['09'] = '#760f06';$this.colorAll['10'] = '#35c01d';
                    	// 颜色渲染
                    $this.colorAll["01"] = "#ffc411";
                    $this.colorAll["011"] = "#ffdd11";
                    $this.colorAll["02"] = "#3585f2";
                    $this.colorAll["021"] = "#34c3f2";
                    $this.colorAll["03"] = "#808080";
                    $this.colorAll["031"] = "#a3a3a3";
                    $this.colorAll["04"] = "#ff8a00";
                    $this.colorAll["041"] = "#ffa200";
                    $this.colorAll["05"] = "#17d6df";
                    $this.colorAll["051"] = "#17dfd8";
                    $this.colorAll["06"] = "#5203fd";
                    $this.colorAll["061"] = "#5379e1";
                    $this.colorAll["07"] = "#bbbbbb";
                    $this.colorAll["071"] = "#d7d7d7";
                    $this.colorAll["08"] = "#ed3848";
                    $this.colorAll["081"] = "#fb565a";
                    $this.colorAll["09"] = "#7f471d";
                    $this.colorAll["091"] = "#a95f2e";
                    $this.colorAll["10"] = "#2bc792";
                    $this.colorAll["101"] = "#86e36d";
                    $this.lotteryDrawListFirst = $this.lotteryDrawList[0].lottery.showType;
                    // console.log('----------------');
                    // console.log(this.lotteryDrawList);
                    $this.name1 =  $this.lotteryDrawList[0].lottery.code;
                    
                    const lv = [1, 4, 7, 10, 16, 19, 22, 25];
                    const lan = [2, 5, 8, 11, 17, 20, 23, 26];
                    const hong = [3, 6, 9, 12, 15, 18, 21, 24];
                    $this.rednew = hong;
                    $this.bulrnew = lan;
                    $this.greennew = lv;
                    var zoonew = {};
                    // this.animalsCollections = JSON.parse(window.localStorage.getItem('AnimalsCollections'))
                    if($this.name1=='jslhc'||$this.name1=='xglhc'){
                        $this.animalsCollections = base.getApi().getAnimalsCollections().data;
                    }else{
                        $this.animalsCollections = [{categoryName: "", cid: 4, id: 84, lotteryCode: "xglhc", lotteryName: "", name: "鼠", val: "1,2,3,5,7"}]
                    }
                    
                    // console.log(this.animalsCollections);
                    $this.animalsCollections.forEach(function(item){
                        item.val.split(",").forEach(function(itemmin){
                            zoonew[itemmin] = item.name;
                        })
                    });
                    $this.zoo = zoonew;
                    const b = ["01", "02", "07", "08", "12", "13", "18", "19", "23", "24", "29", "30", "34", "35", "40", "45", "46"];
                    const c = ["03", "04", "09", "10", "14", "15", "20", "25", "26", "31", "36", "37", "41", "42", "47", "48"];
                    const d = ["05", "06", "11", "16", "17", "21", "22", "27", "28", "32", "33", "38", "39", "43", "44", "49"];
                    $this.red = b;
                    $this.bulr = c;
                    $this.green = d;
            }else{
                $('.model').show();
                if(this.$store.state.islodershow=='yes'){
                    $('.model').show();
                    this.$store.state.islodershow='no'
                }
                
                setTimeout(function(){
                    $('.model').hide();
                },100)
                var $this = this;
                $this.lotteryDrawList=[{addTime:1530241500000,beginTime:1530241440000,bettingSum:null,closeTime:12416,endTime:1530241490000,id:2880410,isScan:0,lotteryId:34,lotteryNo:"",nextNo:"",nextTime:1530241560000,queryHistory:false,remainTime:12416,result:"",shortNextNo:"0667",status:1,tempResult:"",type:1,winningSum:null,lottery:{code:'',name:""}}]
                setTimeout(function(){
                    // console.log(base.getApi().getLotteryDrawold($this.$route.params.lotteryResultListId).data.lotteryDrawList);
                    $this.$store.state.ishistorydraw[$this.$route.params.lotteryResultListId] = base.getApi().getLotteryDrawold($this.$route.params.lotteryResultListId).data.lotteryDrawList
                    // $this.lotteryDrawList = base.getApi().getLotteryDrawold($this.$route.params.lotteryResultListId).data.lotteryDrawList;
                    $this.lotteryDrawList = $this.$store.state.ishistorydraw[$this.$route.params.lotteryResultListId]
                },100);
                setTimeout(function(){
                    window.localStorage.removeItem('buycolorAll')
                    //    this.$route.params.lotteryResultListId,
                    // $this.colorAll['01'] = '#ffdd11';$this.colorAll['02'] = 'blue';$this.colorAll['03'] = 'gray';$this.colorAll['04'] = 'orange';$this.colorAll['05'] = '#17d6df';$this.colorAll['06'] = '#5203fd';$this.colorAll['07'] = '#d7d7d7';$this.colorAll['08'] = '#ff0017';$this.colorAll['09'] = '#760f06';$this.colorAll['10'] = '#35c01d';
                    	// 颜色渲染
                    $this.colorAll["01"] = "#ffc411";
                    $this.colorAll["011"] = "#ffdd11";
                    $this.colorAll["02"] = "#3585f2";
                    $this.colorAll["021"] = "#34c3f2";
                    $this.colorAll["03"] = "#808080";
                    $this.colorAll["031"] = "#a3a3a3";
                    $this.colorAll["04"] = "#ff8a00";
                    $this.colorAll["041"] = "#ffa200";
                    $this.colorAll["05"] = "#17d6df";
                    $this.colorAll["051"] = "#17dfd8";
                    $this.colorAll["06"] = "#5203fd";
                    $this.colorAll["061"] = "#5379e1";
                    $this.colorAll["07"] = "#bbbbbb";
                    $this.colorAll["071"] = "#d7d7d7";
                    $this.colorAll["08"] = "#ed3848";
                    $this.colorAll["081"] = "#fb565a";
                    $this.colorAll["09"] = "#7f471d";
                    $this.colorAll["091"] = "#a95f2e";
                    $this.colorAll["10"] = "#2bc792";
                    $this.colorAll["101"] = "#86e36d";
                    $this.lotteryDrawListFirst = $this.lotteryDrawList[0].lottery.showType;
                    // console.log('----------------');
                    // console.log(this.lotteryDrawList);
                    $this.name1 =  $this.lotteryDrawList[0].lottery.code;
                    
                    const lv = [1, 4, 7, 10, 16, 19, 22, 25];
                    const lan = [2, 5, 8, 11, 17, 20, 23, 26];
                    const hong = [3, 6, 9, 12, 15, 18, 21, 24];
                    $this.rednew = hong;
                    $this.bulrnew = lan;
                    $this.greennew = lv;
                    var zoonew = {};
                    // this.animalsCollections = JSON.parse(window.localStorage.getItem('AnimalsCollections'))
                    if($this.name1=='jslhc'||$this.name1=='xglhc'||$this.name1=='fflhc'){
                        $this.animalsCollections = base.getApi().getAnimalsCollections().data;
                    }else{
                        $this.animalsCollections = [{categoryName: "", cid: 4, id: 84, lotteryCode: "xglhc", lotteryName: "", name: "鼠", val: "1,2,3,5,7"}]
                    }
                    
                    // console.log(this.animalsCollections);
                    $this.animalsCollections.forEach(function(item){
                        item.val.split(",").forEach(function(itemmin){
                            zoonew[itemmin] = item.name;
                        })
                    });
                    $this.zoo = zoonew;
                    const b = ["01", "02", "07", "08", "12", "13", "18", "19", "23", "24", "29", "30", "34", "35", "40", "45", "46"];
                    const c = ["03", "04", "09", "10", "14", "15", "20", "25", "26", "31", "36", "37", "41", "42", "47", "48"];
                    const d = ["05", "06", "11", "16", "17", "21", "22", "27", "28", "32", "33", "38", "39", "43", "44", "49"];
                    $this.red = b;
                    $this.bulr = c;
                    $this.green = d;
                },101)
                // console.log($this.lotteryDrawList[0]);
            }
            
            console.log(this.lotteryDrawList);
            
            },
            //   onRefresh(done) {
            //         this.first();
            //             if(this.lotteryDrawList){
            //                 $.tips("已经刷新当前数据")
            //              }
            //         done(); 
            //     },
            //   onInfinite(done) {
            //     let more = this.$el.querySelector(".load-more");
            //     more.style.display='block'
            //          this.first();
                                
            //         if(this.lotteryDrawList){
            //             more.style.display='none';
            //              $.tips("已加载全部数据")
            //         }
                            
            //         done();
            //     },
              zzz(){
                  if(this.name1=='xypk'){
                        this.isShowBack = false;
                    }
              },    
	          heightAll(){
                  setTimeout(function(){
                     $('.list.weui-pull-to-refresh').css('height',($(document.body).height()-$('.footergg').height()));
                     $('body').css('overflow','hidden');
                  },100);
                   
              },
               backtrack(){
                    $('body').css('overflow','scroll');
                    //  this.$router.go(-1);
                    // if(!!window.localStorage.getItem('islskj')){
                    //     window.localStorage.removeItem('islskj')
                    //     this.$router.go(-1);
                    //     $('.oshade').click();
                    //     return;
                    // }
                    // if(this.$store.state.isgoucaixq=='yes'){
                    //     this.$store.state.isgoucaixq = 'no';
                    //     this.$router.push({path:'/forthecolor'});
                    //     $('.oshade').click();
                    //     return;
                    // }else if(this.$store.state.isgoucai == 'yes'){
                    //     this.$store.state.isgoucai = 'no'
                    //     this.$router.go(-1);
                    //     $('.oshade').click();
                    //     return;
                    // }
                    // this.$router.push({path:'/lottery'});
                    setTimeout(function(){
                        $('.oshade').click()
                    },50)
                    this.$router.go(-1);
                    // if(this.$store.state.isgoucaixq=='yes'){
                    //     this.$store.state.isgoucaixq = 'no';
                    //     this.$router.push({path:'/forthecolor'});
                    //     return;
                    // }else if(this.$store.state.isgoucai == 'yes'){
                    //     this.$store.state.isgoucai = 'no'
                    //     this.$router.go(-1);
                    //     return;
                    // }
                    // this.$router.push({path:'/lottery'});
              },
              getFlower() {
                    // for(var i  = 1;i<7;i++){
                    //     this.flowers.push(require('../../assets/source/assets/saizi_0'+i+'.png'));
                    // }
                    // var ss = [];
                    // for(var y  = 1;y<5;y++){
                    //     for(var v = 1;v<14;v++){
                    //             ss.push(require('../../assets/source/assets/'+y+'-'+v+'.png'));
                    //     }
                    //     this.flowersnew.push(ss);
                    //     ss = [];
                    // }
                },
                trendzs(){
                    var $this = this;
                    $('.trendtu').click(function(){
                        // $this.$router.push({path:'/trentMap/'+$this.$route.params.lotteryResultListId+''})
                        $this.$router.push({path:$this.pathiszs+$this.$route.params.lotteryResultListId}) 
                    })
                },
                loadTop() {
                    var self=this; 
                    this.$store.state.homeData=""
                    setTimeout(function(){
                        // self.homegetapi();
                        // self.scroll(100);
                        self.$refs.loadmore.onTopLoaded();
                    },800)
                    var data=new Date();
                    var hour=data.getHours()<10?(`0${data.getHours()}`):data.getHours();
                    var minutes=data.getMinutes()<10?(`0${data.getMinutes()}`):data.getMinutes();
                    this.nowdata=`今日${hour}:${minutes}`;
                },
                handleTopChange(){
                    if(this.fakse){
                        this.lotteryDrawList =  base.getApi().getLotteryDrawold(this.$route.params.lotteryResultListId).data.lotteryDrawList;
                    }
                 this.fakse=true;
                },
                isgoucai(){
                    if(!!window.localStorage.getItem('islskj')){
                        this.$router.go(-1);
                        $('.oshade').click();
                        return;
                    }
                    console.log(this.$store.getters.getcolorsj);
                    for(var i = 0;i<this.$store.getters.getcolorsj.data.lotteryList.length;i++){
                        if(this.$route.params.lotteryResultListId==this.$store.getters.getcolorsj.data.lotteryList[i].id){
                            var a = this.$store.getters.getcolorsj.data.lotteryList[i];
                            break;
                        }
                    }
                    // console.log(a);
                    var str = {
                        'id':a.id,
                        'showType':a.showType,
                        'lotteryName':a.name
                    }
                    window.localStorage.setItem('forthecolor',JSON.stringify(str));
                    window.localStorage.setItem('thisdatalist',a.id)
                    this.$store.state.isgcjl = 'yes';
                    // this.$router.push({path:'/forthecolor'});
                    this.$store.state.islodershow='yes'
                    this.$router.push({path:'/isbuycolornew'})
                    
                }
            },
          
            beforeCreate: function() {
                    $('.list.weui-pull-to-refresh').css('height',($(document.body).height()-$('.header_wrap').height()-$('.footergg').height()));
            },
            updated(){
                    
            },
            watch: {
                thisdatalist: {
                handler(newValue, oldValue) {
                    if (Math.floor(this.thisdatalist.lotteryDraw.closeTime / 1000) == 0) {
                    this.lotteryDrawList[0].nextNo++
                    setTimeout(() => {
                        $.tips(
                        "期号已经切换到" + newValue.lotteryDraw.shortNo + "期"
                        );
                    }, 1300);
                    }
                },
                deep: true
            }
            },
                    
            }
            
  
</script>