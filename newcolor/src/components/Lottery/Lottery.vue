<template>
  <div style="position: relative;height:100%">

	  <!-- <p>{{weba}}</p> -->
	  <!-- <input type="text"> -->
    <div class="header_wrap">
      <div class="header">
        <h2>开奖大厅</h2>
      </div>
    </div>
    <!-- 中间内容开始 -->
    <div class="ocontent1" id="ocontent1">
				<ul class="drawlist" style="passing-bottom:0.45rem;">				
				<li @click="urlclick(uerAll + item.logo.fileurl,item.id)" :codeAll="item.code" :id="'lotteryIdA_'+item.id" v-if="item.status != '8'"  v-for="item in itmeAll" >
				    <router-link style="display: inherit;" :to="'/lotteryResultList/'+item.id">
					<div class="drawimg" >
					<img :src="uerAll + item.logo.fileurl"></div>
					<div class="drawtext">
					<img class="jtou" src=""><div class="drawtext-top"><h4>{{item.name}}</h4>
					<p>第<span>
						<!-- {{item.lotteryDraw.lotteryNo}} -->
						{{item.lotteryDraw.shortNo}}
						</span>期
					</p>
					<p>{{item.lotteryDraw.addTime | dateFmt('YYYY-MM-DD HH:mm:ss')}}</p></div>
					<!-- 双色球 -->
						<div class="drawtext-bottom clear"  v-if="(item.code=='ssq'||item.code=='jsssq')&& item.lotteryDraw.closeTime > 0  && !!item.lotteryDraw.result">
							<div v-if="index==item.lotteryDraw.result.split(',').length-1" v-for="(itemminAll2,index) in item.lotteryDraw.result.split(',')" class="lan">{{itemminAll2}}</div>
							<div v-else class="hong">{{itemminAll2}}</div>
						</div>
						<div style="    color: rgb(255, 255, 255);
    width: 2rem;
    text-align: center;
    padding-left: 0.2rem;
    line-height: 0.56rem;
    height: 0.56rem;
    border-radius: 0.3rem;
    background: linear-gradient(90deg, #fa3956, #ff6b52);" class="drawtext-bottom clear"  v-else-if="(item.code=='ssq'||item.code=='jsssq')&& item.lotteryDraw.result == ''">
							正在开奖...
						</div>
					<!-- 急速六合彩 -->
					
						<div class="drawtext-bottom clear" v-else-if="item.showType == '1' && item.lotteryDraw.closeTime > 0 && !!item.lotteryDraw.result">
							<section v-for="(itemminall,index) in item.lotteryDraw.result.split(',')" :key="index"   style="display: flex;flex-direction: column;align-items: center;height: 50px;">
							<div  v-if="index == '5'">
								<div  v-if="red.indexOf(itemminall) != '-1'"><div style="height: 0.56rem;width: 0.56rem;line-height: 0.56rem;" class="hong">{{itemminall}}</div><span style="padding-left: 0.04rem;padding-right: 0.04rem;line-height:0.56rem;" id="jia"> + </span></div>
								<div  v-else-if="green.indexOf(itemminall) != '-1'"><div style="height: 0.56rem;width: 0.56rem;line-height: 0.56rem;" class="lv">{{itemminall}}</div><span id="jia"> + </span></div>
								<div  v-else="bulr.indexOf(itemminall) != '-1'"><div style="height: 0.56rem;width: 0.56rem;line-height: 0.56rem;" class="lan">{{itemminall}}</div><span id="jia"> + </span></div>
							</div>
							<div  v-else-if="red.indexOf(itemminall) != '-1'" style="height: 0.56rem;width: 0.56rem;line-height: 0.56rem;" class="hong">{{itemminall}}</div>
							<div  v-else-if="green.indexOf(itemminall) != '-1'" style="height: 0.56rem;width: 0.56rem;line-height: 0.56rem;" class="lv">{{itemminall}}</div>
							<div  v-else="bulr.indexOf(itemminall) != '-1'" style="height: 0.56rem;width: 0.56rem;line-height: 0.56rem;" class="lan">{{itemminall}}</div>
							<div v-if="index == '5'" style="margin-right: .15rem;" class="dongwuAlla">{{zoo[itemminall]}}</div>
							<div v-else class="dongwuAlla">{{zoo[itemminall]}}</div>
							</section>
						</div>
						<div style="    color:#fff;
    width: 2rem;
    text-align: center;
    padding-left: 0.2rem;
    line-height: 0.56rem;
    height: 0.56rem;
    border-radius: 0.3rem;
    background: linear-gradient(90deg, #fa3956, #ff6b52);" class="drawtext-bottom clear" v-if="item.showType == '1' && item.lotteryDraw.result == ''">
							正在开奖...
						</div>
					<!-- 重庆时时彩 -->
						<div class="drawtext-bottom clear" v-else-if="item.showType == '2' && item.lotteryDraw.closeTime > 0  && !!item.lotteryDraw.result">
							<div v-for="(itemminall,index) in item.lotteryDraw.result.split(',')" class="hong">{{itemminall}}</div>
							<div class="dxds">
								<span v-if="item.lotteryDraw.result.split(',')[item.lotteryDraw.result.split(',').length-2]%2=='0'&&item.lotteryDraw.result.split(',')[item.lotteryDraw.result.split(',').length-2]<=4">小双</span>
								<span v-else-if="item.lotteryDraw.result.split(',')[item.lotteryDraw.result.split(',').length-2]%2!='0'&&item.lotteryDraw.result.split(',')[item.lotteryDraw.result.split(',').length-2]<=4">小单</span>
								<span v-else-if="item.lotteryDraw.result.split(',')[item.lotteryDraw.result.split(',').length-2]%2!='0'&&item.lotteryDraw.result.split(',')[item.lotteryDraw.result.split(',').length-2]>4">大单</span>
								<span v-else="item.lotteryDraw.result.split(',')[item.lotteryDraw.result.split(',').length-2]%2=='0'&&item.lotteryDraw.result.split(',')[item.lotteryDraw.result.split(',').length-2]>4">大双</span>
								|
								<span v-if="item.lotteryDraw.result.split(',')[item.lotteryDraw.result.split(',').length-1]%2=='0'&&item.lotteryDraw.result.split(',')[item.lotteryDraw.result.split(',').length-1]<=4">小双</span>
								<span v-else-if="item.lotteryDraw.result.split(',')[item.lotteryDraw.result.split(',').length-1]%2!='0'&&item.lotteryDraw.result.split(',')[item.lotteryDraw.result.split(',').length-1]<=4">小单</span>
								<span v-else-if="item.lotteryDraw.result.split(',')[item.lotteryDraw.result.split(',').length-1]%2!='0'&&item.lotteryDraw.result.split(',')[item.lotteryDraw.result.split(',').length-1]>4">大单</span>
								<span v-else="item.lotteryDraw.result.split(',')[item.lotteryDraw.result.split(',').length-1]%2=='0'&&item.lotteryDraw.result.split(',')[item.lotteryDraw.result.split(',').length-1]>4">大双</span>
							</div>
						</div>	
						<div style="color:#fff;
    width: 2rem;
    text-align: center;
    padding-left: 0.2rem;
    line-height: 0.56rem;
    height: 0.56rem;
    border-radius: 0.3rem;
    background: linear-gradient(90deg, #fa3956, #ff6b52);" class="drawtext-bottom clear" v-else-if="item.showType == '2' && item.lotteryDraw.result == ''">
							正在开奖...
						</div>
						
						<!-- 极速快三 -->
						<div class="drawtext-bottom clear"  v-else-if="item.showType == '6' && item.lotteryDraw.closeTime > 0  && !!item.lotteryDraw.result">
							<div class="dice">
								<img v-for="(itemminall,index) in item.lotteryDraw.result.split(',')" class="first_img" :src="uerAll+kaisan[itemminall-1].logo.fileurl">
								<!-- <img src="../../statics/images/dice/saizi_0"+item.lotteryDraw.result.split(',')[2]+".png" class="first_img"> -->
							</div>
							<div class="dxds">和值 : <span>{{(+item.lotteryDraw.result.split(',')[0])+(+item.lotteryDraw.result.split(',')[1])+(+item.lotteryDraw.result.split(',')[2])}}</span></div>
						</div>
						<div style="color:#fff;
    width: 2rem;
    text-align: center;
    padding-left: 0.2rem;
    line-height: 0.56rem;
    height: 0.56rem;
    border-radius: 0.3rem;
    background: linear-gradient(90deg, #fa3956, #ff6b52);" class="drawtext-bottom clear"  v-else-if="item.showType == '6' && item.lotteryDraw.result == ''">
							正在开奖...
						</div>
						<!-- 急速pk十 -->
						<div class="drawtext-bottom clear"  v-else-if="(item.code=='jspks'||item.code=='xyft'||item.code=='xysm'||item.code=='bjpks')&& item.lotteryDraw.closeTime > 0 && item.lotteryDraw.result!=''">
							<div v-for="item1 in item.lotteryDraw.result.split(',')"  :style="'border-radius:0.1rem;background:none;text-shadow: 0 1px #000, 1px 0 #000, -1px 0 #000, 0 -1px #000;background: linear-gradient(90deg, '+colorAll[item1]+', '+colorAll[item1+'1']+')'" class="hong">{{Number(item1)}}</div>
						</div>
						<div style="color:#fff;
    width: 2rem;
    text-align: center;
    padding-left: 0.2rem;
    line-height: 0.56rem;
    height: 0.56rem;
    border-radius: 0.3rem;
    background: linear-gradient(90deg, #fa3956, #ff6b52);" class="drawtext-bottom clear"  v-else-if="(item.code=='jspks'||item.code=='xyft'||item.code=='xysm'||item.code=='bjpks')&& item.lotteryDraw.result == ''">
							正在开奖...
						</div>
						<!-- 北京28 -->
						<div class="drawtext-bottom clear"  v-else-if="item.showType == '4'&& item.lotteryDraw.closeTime > 0 && !!item.lotteryDraw.result">
							<div class="hong">{{item.lotteryDraw.result.split(',')[0]}}</div><div class="hong" id="jia">+</div>
							<div class="hong">{{item.lotteryDraw.result.split(',')[1]}}</div><div class="hong" id="jia">+</div>
							<div class="hong">{{item.lotteryDraw.result.split(',')[2]}}</div><div class="hong" id="jia">=</div>
							<div v-if="rednew.indexOf((+item.lotteryDraw.result.split(',')[0])+(+item.lotteryDraw.result.split(',')[1])+(+item.lotteryDraw.result.split(',')[2])) != '-1'" class="hong">{{item.lotteryDraw.result.split(',')|capitalize}}</div>
							<div v-else-if="greennew.indexOf((+item.lotteryDraw.result.split(',')[0])+(+item.lotteryDraw.result.split(',')[1])+(+item.lotteryDraw.result.split(',')[2])) != '-1'" class="lv">{{item.lotteryDraw.result.split(',')|capitalize}}</div>
							<div v-else-if="bulrnew.indexOf((+item.lotteryDraw.result.split(',')[0])+(+item.lotteryDraw.result.split(',')[1])+(+item.lotteryDraw.result.split(',')[2])) != '-1'" class="lan">{{item.lotteryDraw.result.split(',')|capitalize}}</div>
							<div v-else class="hui">{{item.lotteryDraw.result.split(',')|capitalize}}</div>
							<div v-if="((+item.lotteryDraw.result.split(',')[0])+(+item.lotteryDraw.result.split(',')[1])+(+item.lotteryDraw.result.split(',')[2]))<=5"  class="dxds">极小</div>
							<div v-else-if="((+item.lotteryDraw.result.split(',')[0])+(+item.lotteryDraw.result.split(',')[1])+(+item.lotteryDraw.result.split(',')[2]))>=22"  class="dxds">极大</div>
							<div v-else-if="((+item.lotteryDraw.result.split(',')[0])+(+item.lotteryDraw.result.split(',')[1])+(+item.lotteryDraw.result.split(',')[2]))%2==0&&((+item.lotteryDraw.result.split(',')[0])+(+item.lotteryDraw.result.split(',')[1])+(+item.lotteryDraw.result.split(',')[2]))<=13"  class="dxds">小双</div>
							<div v-else-if="((+item.lotteryDraw.result.split(',')[0])+(+item.lotteryDraw.result.split(',')[1])+(+item.lotteryDraw.result.split(',')[2]))%2!=0&&((+item.lotteryDraw.result.split(',')[0])+(+item.lotteryDraw.result.split(',')[1])+(+item.lotteryDraw.result.split(',')[2]))<=13"  class="dxds">小单</div>
							<div v-else-if="((+item.lotteryDraw.result.split(',')[0])+(+item.lotteryDraw.result.split(',')[1])+(+item.lotteryDraw.result.split(',')[2]))%2==0&&((+item.lotteryDraw.result.split(',')[0])+(+item.lotteryDraw.result.split(',')[1])+(+item.lotteryDraw.result.split(',')[2]))>=14"  class="dxds">大双</div>
							<div v-else class="dxds">大单</div>
						</div>
						<div style="color:#fff;
    width: 2rem;
    text-align: center;
    padding-left: 0.2rem;
    line-height: 0.56rem;
    height: 0.56rem;
    border-radius: 0.3rem;
    background: linear-gradient(90deg, #fa3956, #ff6b52);" class="drawtext-bottom clear"  v-else-if="item.showType == '4'&& item.lotteryDraw.result == ''">
							正在开奖...
						</div>
						<!-- 重庆快乐十分 -->
						<div class="drawtext-bottom clear"  v-else-if="(item.showType == '3'||item.showType == '5')&& item.lotteryDraw.closeTime > 0 && !!item.lotteryDraw.result">
							<div v-for="itemminAll2 in item.lotteryDraw.result.split(',')" class="hong">{{itemminAll2}}</div>
						</div>
						<div style="color:#fff;
    width: 2rem;
    text-align: center;
    padding-left: 0.2rem;
    line-height: 0.56rem;
    height: 0.56rem;
    border-radius: 0.3rem;
    background: linear-gradient(90deg, #fa3956, #ff6b52);" class="drawtext-bottom clear"  v-else-if="(item.showType == '3'||item.showType == '5')&& item.lotteryDraw.result == ''">
							正在开奖...
						</div>
						<!-- 幸运扑克 -->
						<div class="drawtext-bottom clear"  v-else-if="item.showType == '11'&& item.lotteryDraw.closeTime > 0 && !!item.lotteryDraw.result && !!item.lotteryDraw.result">
							<div class="dice">
								<img style="width: 25px;height: 28px;" :src="uerAll+puke[(+item.lotteryDraw.result.split(',')[0].split('-')[0])-1][(+item.lotteryDraw.result.split(',')[0].split('-')[1])-1].logo.fileurl" class="first_img">
								<img style="width: 25px;height: 28px;" :src="uerAll+puke[(+item.lotteryDraw.result.split(',')[1].split('-')[0])-1][(+item.lotteryDraw.result.split(',')[1].split('-')[1])-1].logo.fileurl" class="first_img">
								<img style="width: 25px;height: 28px;" :src="uerAll+puke[(+item.lotteryDraw.result.split(',')[2].split('-')[0])-1][(+item.lotteryDraw.result.split(',')[2].split('-')[1])-1].logo.fileurl" class="first_img">
							</div>
						</div>
						<div class="drawtext-bottom clear"  v-else-if="item.showType == '11'&& item.lotteryDraw.result == ''">
							<div class="dice">
								<img style="width: 25px;height: 28px;" src="../../statics/images/assets/texiao.png" class="first_img">
								<img style="width: 25px;height: 28px;" src="../../statics/images/assets/texiao.png" class="first_img">
								<img style="width: 25px;height: 28px;" src="../../statics/images/assets/texiao.png" class="first_img">
							</div>
						</div>
					</div>
					</router-link>
				</li>

				<li @click="presenting" id="lotteryIdA_30" v-else><div class="drawimg">
					<img></div>
					<div class="drawtext" style="    margin-top: .1rem;">
					<img class="jtou"><div class="drawtext-top" style="    margin-top: .05rem;"><h4>{{item.name}}</h4><p></p></div>
		                <div style="color:#fff;
    width: 2rem;
    text-align: center;
    padding-left: 0.2rem;
    line-height: 0.56rem;
    height: 0.56rem;
    border-radius: 0.3rem;
    background:#cecece" class="drawtext-bottom clear">
							正在维护...
						</div>
					</div>
				</li>
				
				</ul>
			</div>
			<!-- <transition name="slide"> -->
				<router-view></router-view>
			<!-- </transition> -->
  </div>
</template>
<style scoped>
	html {
		/* font-size: 625%!important; */
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
		height: 0.45rem;
		position: relative;
	}
	.header h2 {
		height: 0.45rem;
		line-height: 0.45rem;
		text-align: center;
		color: #fff;
		font-weight: 100;
		font-size: .24rem;
	}
	/*开奖列表*/
	.ocontent1 {
		/* margin-top: 4.4rem; */
	}
	.drawlist li {
		height: 9.5rem;
		border-bottom: 0.1rem solid #eee;
		background: #fff;
		display: flex;
	}
	.drawlist li .drawimg {
		width: 4rem;
		height: 100%;
		margin-left: 1.5rem;
		margin-right: 0.45rem;
	}
	.drawlist li .drawimg img {
		width: 4rem;
		height: 4rem;
		margin-top: 2rem;
	}
	.drawtext {
		flex: 1;
	}
	.drawtext-top {
		height: 2.5rem;
		line-height: 2.5rem;
		margin-top: 1.4rem;
	}
	.drawtext-top h4 {
		font-size: 0.24rem;
		font-weight: 500;
		width: 10rem;
		float: left;
	}
	.drawtext-top p {
		font-size: 0.26rem;
		color: #999;
		float: left;
	}
	.drawtext-top p:last-child {
		margin-right: 1.5rem;
		float: right;
	}
	.drawtext-top p:last-child span {
		margin-left: 0.45rem;
	}
	.drawtext-bottom {
		margin-top: 0.45rem;
		height: 3rem;
		line-height: 2.4rem;
	}
	.dice {
		float: left;
	}
	.textShow {
		color: red;
	}
	.drawtext-bottom .dice img {
		width: 2.4rem;
		height: 2.4rem;
		margin-left: 0.45rem;
	}
	.drawtext-bottom .dice img:first-child{
		margin-left: 0;
	}
	.dxds {
		color: #1a1a1a;
		height: 2rem;
		margin-left: 1.4rem;
		font-size: 0.24rem;
		line-height: 2.4rem;
		float: right;
	}
	.drawtext-bottom{
		display: flex;
	}
	.drawtext-bottom>span {
		display: block;
		width: 2.4rem;
		height: 2.4rem;
		line-height: 2.4rem;
		text-align: center;
		float: left;
		background: #d91e38;
		color: #fff;
		border-radius: 50%;
		margin-left: 0.3rem;
	}
	.drawtext-bottom>span:first-child {
		margin-left: 0;
	}
	.drawtext-bottom>div:first-child{
		margin-left: 0;
	}
	.drawtext-bottom p {
		height: 2rem;
		line-height: 2rem;
		float: left;
		position: relative;
		margin-left: 1rem;
	}
	.drawtext-bottom p:after {
		display: block;
		content: '';
		height: 1.4rem;
		width: 0.1rem;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: #000;
	}
	.drawtext-bottom p .borspan {
		padding-right: 0.4rem;
	}
	/*创建球的颜色*/
	.num_1 {
		width: 100%;
		height: 1rem;
		font-size: 0.24rem;
		margin-top: 3%;
		color: red;
	}
	.first {
		width: 1rem;
		height: 10px;
		background: #d91e38;
		border-radius: 50%;
		text-align: center;
		line-height: 1rem;
		float: left;
		margin-left: 2%;
		color: #fff;
		font-size: 0.24rem;
	}
	.hong,.lan,.lv,.hui{
		width: 2.4rem;
		height: 2.4rem;
		line-height: 2.4rem;
		text-align: center;
		float: left;
		color: #fff;
		border-radius: 50%;
		margin-left: 0.1rem;
		font-size: 0.24rem;
	}
	.hong{
		/* background: #d91e38; */
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
	#jia {
		background: #fff;
		color: #1a1a1a;
  }
  /*底部tab*/

	/* 中间内容样式开始 */
  /* 中间内容公共样式 */
	html {
	font-size: 62.5%;
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
	position: absolute;
	top: 0;
	z-index: 200;
}

.header {
	/*background: url(/source/imgs/images/titlebg.png) no-repeat 0 0/100% 100%;*/
	height: 0.8rem;
	position: relative;
}

.header h2 {
	height: 0.8rem;
	line-height: 0.8rem;
	text-align: center;
	color: #fff;
	font-weight: 100;
	font-size: .28rem;
}


/*开奖列表*/

.ocontent1 {
    position: absolute;
    width: 100%;
    top: 0.8rem;
    overflow: scroll;
}

.drawlist {
	padding-bottom: 0.8rem;
}

.drawlist li {
	height: 1.9rem;
	border-bottom: 0.01rem solid #eee;
	background: #fff;
	display: flex;
}

.drawlist li .drawimg {
	width: 1.1rem;
	height: 100%;
	margin-left: .15rem;
	margin-right: 0;
}

.drawlist li .drawimg img {
	width: 1.1rem;
	height:1.1rem;
	margin-top: .45rem;
}

.drawtext {
	flex: 1;
	    margin-left: 0.1rem;
}

.drawtext-top {
	height: .4rem;
	line-height: .4rem;
	margin-top: .3rem;
}

.drawtext-top h4 {
	font-size: .14rem;
	font-weight: 500;
	width: .85rem;
	float: left;
}

.drawtext-top p {
	font-size: 0.26rem;
	color: #999;
	float: left;
}

.drawtext-top p:last-child {
	margin-right: .01rem;
	float: right;
}

.drawtext-top p:last-child span {
	margin-left: 0.06rem;
}

.drawtext-top p span {}

.drawtext-bottom {
	margin-top: 0.06rem;
	height: 0.56rem;
	line-height: .24rem;
}


.dice {
	float: left;
}

.textShow {
	/*font-weight: 600;*/
	color: red;
}

.drawtext-bottom .dice img {
	width: .6rem;
	height: .6rem;
	margin-left: 0.06rem;
}
.drawtext-bottom .dice img:first-child{
	margin-left: 0;
}
.dxds {
	color: #1a1a1a;
	height: 0.56rem;
	margin-left: .14rem;
	font-size: .24rem;
	line-height: 0.56rem;
	float: right;
	/*border:1px solid red;*/
	
}
.drawtext-bottom{
	display: flex;
	/*border:1px solid red;*/
	/*overflow: hidden;*/
	/*display: flex;
	justify-content:space-around;*/
}
.drawtext-bottom>span {
	display: block;
	width: .24rem;
	height: .24rem;
	line-height: .24rem;
	text-align: center;
	float: left;
	background: #d91e38;
	color: #fff;
	border-radius: 50%;
	margin-left: 0.03rem;
}

.drawtext-bottom>span:first-child {
	margin-left: 0;
}
.drawtext-bottom>div:first-child{
	margin-left: 0;
}
.drawtext-bottom p {
	height: .2rem;
	line-height: .2rem;
	float: left;
	position: relative;
	margin-left: .1rem;
}

.drawtext-bottom p:after {
	display: block;
	content: '';
	height: .14rem;
	width: 0.01rem;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background: #000;
}

.drawtext-bottom p .borspan {
	padding-right: 0.04rem;
}


/*创建球的颜色*/

.num_1 {
	width: 100%;
	height: .1rem;
	font-size: .12rem;
	margin-top: 3%;
	color: red;
}

.first {
	width: .1rem;
	height: 10px;
	background: #d91e38;
	border-radius: 50%;
	text-align: center;
	line-height: .1rem;
	float: left;
	margin-left: 2%;
	color: #fff;
	font-size: .12rem;
}

.hong,.lan,.lv,.hui{
	width: 0.56rem;
	height: 0.56rem;
	line-height: 0.56rem;
	text-align: center;
	float: left;
	color: #fff;
	border-radius: 50%;
	margin-left: 0.04rem;
	font-size: .3rem;
/*	border:1px solid red;*/
}
.hong{
	/* background: #d91e38; */
	
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

#jia {
	background: #fff;
	color: #1a1a1a;
	line-height: 0.56rem;
	width:0.2rem;
}



.textShow{
	color: #d91e38!important;
}
.drawtext-bottom img{
	/* width: .22rem!important; */
}
.drawlist li{
	position: relative;
}
.drawtext-top p:nth-of-type(1){
	/* position: absolute;
	bottom: -0.05rem; */
	width: 1.7rem;
	/* margin-right: .15rem; */
	/* border:1px solid red; */
}
.drawtext-bottom{
	margin-top: 0.2rem;
}
.jtou{
		width: 0.08rem;
		position: absolute;
		top: 0.35rem;
		right: .16rem;
}
.drawtext-bottom img{
		margin-left: 0.05rem;
		
	
}
/* 中间内容样式结束 */
.drawtext-bottom{
	font-size: .3rem;
	 font-weight: 500;
}
a .dongwuAlla{
	color:#000;
	line-height: 0.56rem;
	font-size: .26rem;
	font-weight: 400;
}
.drawtext-top h4{
	text-align: left;
		font-weight: 500 !important;
		
}
.drawlist li:last-of-type{
	/* padding-bottom: .8rem; */
}

.drawtext-top h4{
		width: auto;
		font-size: .3rem;
	}
</style>

<script>
  // import '../../assets/source/css/common/drawlobby.css';
//   import avatar from './saizi_01.png'
  export default {
	

     data() {
        return {
			itmeAll:[],
			colorAll:{},
			animalsCollections:[],
			zoo:{},
			red:[],
			green:[],
			bulr:[],
			flowers: [],
			rednew:[],
			greennew:[],
			bulrnew:[],
			flowersnew:[],
			uerAll:base.domain,
			version:"",
			puke:[],
			kaisan:[],
			weba:""
		}
		},
		// },
		created() {
			this.weba=this.$store.state.a.b
			if(!!this.$store.state.isphtuAll){
				this.puke = this.$store.state.isphtuAll.result
				this.kaisan = this.$store.state.isphtuAll.k3
				this.gettime();
				this.reds()
			}else{
				base.getApi().phtupian1().then((res)=>{
					this.$store.state.isphtuAll = res.data;
					this.puke = this.$store.state.isphtuAll.result
				this.kaisan = this.$store.state.isphtuAll.k3;
				this.gettime();
				this.reds()
				})
				
			}

			
		
			
		},
	updated(){
		
	},
	beforeCreate: function() {
		
	},
    methods: {
		reds(){
			this.datalistAll = this.$store.getters.getcolorsj.data;
			console.log(this.datalistAll);
			
			if(!!this.$store.state.animalsCollections){
				this.animalsCollections = this.$store.state.animalsCollections;
			}else{
            var result = JSON.parse(window.localStorage.getItem('isdonwu')) 
				if(result.code == 200){
					this.$store.state.animalsCollections = result;
					this.animalsCollections = result;
				}
			}
			console.log(this.animalsCollections);
			var lottery = this.$store.getters.getcolorsj.data.lotteryList;
			console.log(this.datalistAll);
			this.itmeAll = this.datalistAll.lotteryList;
			console.log(this.itmeAll)
          this.colorAll["01"] = "#ffc411";
          this.colorAll["011"] = "#ffdd11";
          this.colorAll["02"] = "#3585f2";
          this.colorAll["021"] = "#34c3f2";
          this.colorAll["03"] = "#808080";
          this.colorAll["031"] = "#a3a3a3";
          this.colorAll["04"] = "#ff8a00";
          this.colorAll["041"] = "#ffa200";
          this.colorAll["05"] = "#17d6df";
          this.colorAll["051"] = "#17dfd8";
          this.colorAll["06"] = "#5203fd";
          this.colorAll["061"] = "#5379e1";
          this.colorAll["07"] = "#bbbbbb";
          this.colorAll["071"] = "#d7d7d7";
          this.colorAll["08"] = "#ed3848";
          this.colorAll["081"] = "#fb565a";
          this.colorAll["09"] = "#7f471d";
          this.colorAll["091"] = "#a95f2e";
          this.colorAll["10"] = "#2bc792";
          this.colorAll["101"] = "#86e36d";
			const zoonew = {};
			this.animalsCollections.data.forEach(function(item){
				item.val.split(",").forEach(function(itemmin){
					zoonew[itemmin] = item.name;
				})
			});
			this.zoo = zoonew;
			const b = ["01", "02", "07", "08", "12", "13", "18", "19", "23", "24", "29", "30", "34", "35", "40", "45", "46"];//hong
			const c = ["03", "04", "09", "10", "14", "15", "20", "25", "26", "31", "36", "37", "41", "42", "47", "48"];//lan
			const d = ["05", "06", "11", "16", "17", "21", "22", "27", "28", "32", "33", "38", "39", "43", "44", "49"];//lv
			this.red = b;
			this.bulr = c;
			this.green = d;
			this.getFlower();

			// 北京28
			const lv = [1, 4, 7, 10, 16, 19, 22, 25];
		    const lan = [2, 5, 8, 11, 17, 20, 23, 26];
			const hong = [3, 6, 9, 12, 15, 18, 21, 24];
			this.rednew = hong;
			this.bulrnew = lan;
			this.greennew = lv;
			var $thisnwe = this;
			console.log(this.zoo)
			console.log(this.flowers);
		},
		urlclick(urla,id){
			this.$store.state.islsjl = id;
			this.$store.state.urlgoucai = urla
			window.localStorage.setItem('urlgoucai',urla)
		},
		getFlower() {
		  	// for(var i  = 1;i<7;i++){
			//    this.flowers.push({EnName:require('../../assets/source/assets/saizi_0'+i+'.png')});
			// }
			// var ss = [];
			// for(var y  = 1;y<5;y++){
			// 	for(var v = 1;v<14;v++){
			// 		ss.push(require('../../assets/source/assets/'+y+'-'+v+'.png'));
			// 	}
			// 	this.flowersnew.push(ss);
			// 	ss = [];
			// }
		},	
		presenting(){
			$.tips("正在维护...",2000);
		},
		// zzz(baseSokectQueue){
		// 		var lotteryDraw = baseSokectQueue.shift();
		// 		for(var a = 0;a<this.itmeAll.length;a++){				
		// 			if(this.itmeAll[a].status!=8){
		// 				this.itmeAll[a].lotteryDraw.closeTime -=1000;
		// 			}				
		// 			if(lotteryDraw!=undefined){
		// 				if(this.itmeAll[a].id==lotteryDraw.lotteryId){
		// 					this.itmeAll[a].lotteryDraw.closeTime = lotteryDraw.remainTime;
		// 				    this.itmeAll[a].lotteryDraw.lotteryNo = lotteryDraw.lotteryNo;
		// 					this.itmeAll[a].lotteryDraw.result = lotteryDraw.result;
		// 				}
		// 			}
		// 		}	
		// },
	   gettime(){
              if(window.ifcvalue){
                base.getApi().getPTimestamp1().then((res)=>{
                             this.version= res.version;
                              window.updata(this.version,2);
                 });
                
              }else{
               base.getApi().loadTimestamp1().then((res)=>{
                        this.version= res.version;
                        window.updata(this.version,1)
                });
                
              }
              
           },
		colornew(){
			window.localStorage.removeItem('islskj');
			window.localStorage.removeItem('isgoucxq');
			$('.foottab ul li:nth-of-type(2) dl dd').css('color','#999')
			$('.foottab ul li:nth-of-type(2) dl dt .dtbg').css('background-position','-93px -26px')
			
		},
		styleAll(){
			for(var a = 0; a<$('.drawlist li').length;a++){
				if($($('.drawlist li')[a]).attr('codeall')=='xglhc'||$($('.drawlist li')[a]).attr('codeall')=='jslhc'||$($('.drawlist li')[a]).attr('codeall')=='fflhc'){
					$($('.drawlist li')[a]).css('height','1.9rem')
				}
			}
			var $this = this;
			$('.drawlist').on('click','li',function(){
				$this.$store.state.islodershow=='yes'
			})
		}
	},
	mounted:function(){
		this.colornew();
		this.styleAll();
		this.$nextTick(()=>{
			document.getElementById("ocontent1").style.height=document.getElementsByTagName("body")[0].offsetHeight-48+"px"
			
			var u = navigator.userAgent, app = navigator.appVersion;
			var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
			var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
			// if (isAndroid) {
			// 	$('#ocontent1').css({
			// 		'height':$(window).height()-$('.header_wrap').height()-$('.pde').height()
			// 	})
			// }
			// if (isIOS) {
			// 	$('#ocontent1').css({
			// 		'height':$(window).height()-$('.header_wrap').height()+20-$('.pde').height()
			// 	})
			// }
		})	
		
	},
	beforeDestroy() {
    //    clearInterval(this.cache_timeout_id_);
    },
  }
</script>
