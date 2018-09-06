<template>
  <div class="tousujianyi">
      <div class="wrapper">
			
			<div class="content content-head">
				<div class="chose-class">
					<label>选择类型</label>
					<div class="chose-class-list">
						<span class="on">建议</span>
						<span>错误报告</span>
						<span>投诉</span>
					</div>
				</div>
				<input class="iptxt block" type="number" pattern="[0-9]*" id="mobileInput" placeholder="请输入您的手机号码" />
				<textarea class="txtbox block" id="detailTextarea" placeholder="点击添加内容"></textarea>
				
				<a onclick="submitThis()"><button class="resumebtn">提交</button></a>
			</div>

		</div>


<h1>添加建议</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
 mounted(){

 },
 methods:{

 },
  components: {

  }
}
</script>

<style scoped lang='less'>
.chose-class{position: relative;padding: 15px 10px 10px;color: #666;padding-left: 70px;background-color: white;margin-bottom: 1px;}
.chose-class label{width: 60px;position: absolute;left: 10px;top: 17px;}
.chose-class-list{}
.chose-class span{display: inline-block;width: 70px;line-height: 25px;text-align: center;color: #666;background: #fff;border-radius: 4px;margin: 0 0 5px 6px;}
.chose-class span.on{color: #fff;background: #2b9037;}
.iptxt{width: 100%;margin-top:-5px;padding: 10px;line-height: 20px;border: none;}
.txtbox{padding: 10px;width: 100%;height: 220px;font-size: 1.4rem;}
.resumebtn{display: block;margin: 30px auto 0;width: 260px;height: 40px;font-size: 1.6rem;color: #fff;padding: 0;border: none;background: #2b9037;border-radius: 7px;}

.tousujianyi{
    position: absolute;
    top:0.45rem;
    background: white;
    font-size:0.14rem;
    text-align: left;
}
 html{
        font-size: 625%;
    }
    body{
        width: 100%;
        height: 100%;
        background: #f5f5f5;
        overflow-x: hidden;
    }
    #layout{
        width: 100%;
        height: 100%;
    }
    .header_wrap{
        width: 100%;
        position: fixed;
        top: 0;
        z-index: 200;
    }
    .header{
        height: 0.45rem;
        position: relative;
    }
    .header h2{
        margin: 0 auto;
        height: 0.45rem;
        line-height: 0.45rem;
        text-align: center;
        color: #fff;
        font-weight: 600;
        font-size: .18rem;
    }
    .header .set{
        position: absolute;
        left: .18rem;
        transform: translateY(-50%);
        color: #fff;
    }
    .header .set i{
        font-size: .24rem;
    }
</style>
