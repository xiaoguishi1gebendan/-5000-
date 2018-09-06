import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
// import touzhu from '@/components/Home/touzhu'
// import soucang from '@/components/Home/soucang'
// import Register from "@/components/Register/Register"
// import dailiregist from "@/components/Register/dailiregist"
// import Login from "@/components/Login/Login"
// import Bet from "@/components/Bet/Bet"
// import Mine from "@/components/Mine/Mine"
// import Gamerules from "@/components/Gamerules/Gamerules"
// import Settings from "@/components/Settings/Settings"
// import Announcement from "@/components/Announcement/Announcement"
// import Bonusdetails from "@/components/Bonusdetails/Bonusdetails"
// import Detailsnotice from "@/components/Detailsnotice/Detailsnotice"
// import Mycollect from "@/components/Mycollect/Mycollect"
// import Usermsg from "@/components/Usermsg/Usermsg"
// import Services from "@/components/Services/Services"
// import Newtop from "@/components/Newtop/Newtop"
// import RedPacket from "@/components/RedPacket/RedPacket"
// import BettingRecord from "@/components/BettingRecord/BettingRecord"
// import lottery from "@/components/Lottery/Lottery"
// import lotteryResultList from "@/components/Lottery/lotteryResultList"
// import buycolor from "@/components/Buycolor/Buycolor"
// import Buycolornew from "@/components/Buycolor/Buycolornew"
// import rule from "@/components/Buycolor/rule"
// import Minesetting from "@/components/Mine/childres/settings"
// import AccountDetails from "@/components/Mine/childres/AccountDetails"
// import RechargeRecord from "@/components/Mine/childres/RechargeRecord"
// import WithdrawalsRecords from "@/components/Mine/childres/WithdrawalsRecords"
// import UpdatePassword from "@/components/Mine/childres/UpdatePassword"
// import ChangeTransactionPassword from "@/components/Mine/childres/ChangeTransactionPassword"
// import Suggestion from "@/components/Mine/childres/Suggestion"
// import trentMap from "@/components/Buycolor/trentMap"
// import forthecolor from "@/components/Buycolor/forthecolor"
// import better from "@//components/Buycolor/better"
// import addsuggestion from "@/components/Mine/childres/AddSuggestion"
// import Details from "@/components/Mine/childres/Details"
// import RechargeSheet from "@/components/Mine/childres/RechargeSheet"
// import DrawTheDetail from "@/components/Mine/childres/DrawTheDetail"
// import UserMsgDetails from "@/components/Mine/childres/UserMsgDetails"
// import ActivityDetails from "@/components/ActivityDetails/ActivityDetails"
// import TrialGame from "@/components/TrialGame/TrialGame"
// import Recharge from "@/components/Mine/childres/Recharge"
// import Rechargedetal from "@/components/Mine/childres/rechargedetal"
// import Rechargedetaling from "@/components/Mine/childres/Rechargedetaling"
// import Eweima from "@/components/Mine/childres/erweima"
// import banking from "@/components/Mine/childres/Banking"
// import zfbchonghzi from "@/components/Mine/childres/zfbchonghzi"
// import eweimatijiao from "@/components/Mine/childres/eweimatijiao"
// import bankdetal from "@/components/Mine/childres/bankdetal"
// import AddBankCard from "@/components/Withdraw/AddBankCard"
// import TiXian from "@/components/Withdraw/TiXian"
// import choosebank from "@/components/Withdraw/Choosebank"
// import aboutus from "@/components/Register/aboutus"
// import suggestiondetal from "@/components/Mine/childres/suggestiondetal"
// import jiaoyimima from "@/components/Mine/childres/ChangeTransactionPassword"
// import qiandao from "@/components/Mine/childres/qiandao"
// import guize from "@/components/Mine/childres/guize"
// import daili from "@/components/Mine/childres/daili/daili"
// import dailione from "@/components/Mine/childres/daili/dailione"
// import dailitwo from "@/components/Mine/childres/daili/dailitwo"
// import agencyDown from "@/components/Mine/childres/daili/agencyDown"
// import buycolorConfirm from "@/components/Buycolor/buycolorConfirm"
// import touzhuSuccess from "@/components/Buycolor/touzhuSuccess"
// import share from "@/components/share/share"
// import howmoney from "@/components/share/howmoney"
// import dailiMoney from "@/components/share/myCommission"
// import reportQuery from "@/components/Mine/childres/daili/reportQuery"
// import commissionDtl from "@/components/Mine/childres/daili/commissionDtl"
// import homecolor from "@/components/Buycolor/buycolornewtest/homecolor"
// import buycolortestnew from "@/components/Buycolor/buycolornewtest/buycolortestnew"
// import buycolorConfirmnew from "@/components/Buycolor/buycolornewtest/buycolorConfirmnew"
// import buycolorConfirmyi from "@/components/Buycolor/buycolorConfirmyi"
// import furcolornew from "@/components/Buycolor/buycolornewtest/furcolornew"
// import buycolorConfirmer from "@/components/Buycolor/buycolorConfirmer"
// import bettingRecordtouzuyi from "@/components/Buycolor/buycolornewtest/bettingRecordtouzuyi"
// import bettingRecordtouzuer from "@/components/Buycolor/buycolornewtest/bettingRecordtouzuer"
// import bettingRecordtouzusan from "@/components/Buycolor/buycolornewtest/bettingRecordtouzusan"
// import lotteryResultListyi from "@/components/Buycolor/buycolornewtest/lotteryResultListyi"
// import lotteryResultLister from "@/components/Buycolor/buycolornewtest/lotteryResultLister"
// import lotteryResultListsan from "@/components/Buycolor/buycolornewtest/lotteryResultListsan"
// import ruleyi from "@/components/Buycolor/buycolornewtest/ruleyi"
// import ruleer from "@/components/Buycolor/buycolornewtest/ruleer"
// import rulesan from "@/components/Buycolor/buycolornewtest/rulesan"
// import shareyi from "@/components/Buycolor/buycolornewtest/shareyi"
// import shareer from "@/components/Buycolor/buycolornewtest/shareer"
// import sharesan from "@/components/Buycolor/buycolornewtest/sharesan"
// import isbuycolornew from "@/components/Lottery/Lotterynew/isbuycolornew"
// import buycolorConfirmkjjl from "@/components/Buycolor/buycolorConfirmkjjl"
// import iszoushi from "@/components/Lottery/Lotterynew/iszoushi"
// import betterforthecolor from '@/components/Mine/childres/betterforthecolor'
// import bettingRecordtouzusi from '@/components/Lottery/Lotterynew/bettingRecordtouzusi'
// import rulesi from "@/components/Lottery/Lotterynew/rulesi"
// import sharesi from "@/components/Lottery/Lotterynew/sharesi"
// import lotteryResultListyinew from "@/components/Buycolor/buycolornewtest/lotteryResultListyinew"
// import lotteryResultListernew from "@/components/Buycolor/buycolornewtest/lotteryResultListernew"
// import lotteryResultListsannew from "@/components/Buycolor/buycolornewtest/lotteryResultListsannew"
// import buycolorConfirmsy from "@/components/Buycolor/buycolorConfirmsy"
// import succe from '@/components/Mine/childres/succe'
// import accoundetil from "@/components/Mine/childres/accoundetil.vue"
// import gouzoushi from "@/components/Bet/gouzoushi"





Vue.use(Router);

export default new Router({
  
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: '/better', 
      component: (resolve) => require(["@//components/Buycolor/better"], resolve),
    },
    {
      path: "/home", 
      component: Home,
      // component: (resolve) => require(['@/components/Home/Home'], resolve),
      children:[

        {
          path: "/detailsnotice:detailsnoticeId", 
          component: (resolve) => require(["@/components/Detailsnotice/Detailsnotice"], resolve),
        },

        {
          path: "/homecolor", 
          component: (resolve) => require(["@/components/Buycolor/buycolornewtest/homecolor"], resolve),
          children:[
            {
              path: "/buycolorConfirmsy",
              component: (resolve) => require(["@/components/Buycolor/buycolorConfirmsy"], resolve),
            },
            {
              path: "/bettingRecordtouzuyi", 
              component: (resolve) => require(["@/components/Buycolor/buycolornewtest/bettingRecordtouzuyi"], resolve),
            },
            {
              path: "/lotteryResultListyi/:lotteryResultListId", 
              component: (resolve) => require(["@/components/Buycolor/buycolornewtest/lotteryResultListyi"], resolve),
            },
            {
              path: "/ruleyi/:ruleId", 
              component: (resolve) => require(["@/components/Buycolor/buycolornewtest/ruleyi"], resolve),
            },
            {
              path: "/shareyi",
              component: (resolve) => require(["@/components/Buycolor/buycolornewtest/shareyi"], resolve),
            },
            {
              path: "/lotteryResultListyinew/:lotteryResultListId",
              component: (resolve) => require(["@/components/Buycolor/buycolornewtest/lotteryResultListyinew"], resolve),
            },
          ]
        }, 

        {
          path: "/soucang", 
          component: (resolve) => require(['@/components/Home/soucang'], resolve),
        },
        {
          path: "/touzhu",
          component: (resolve) => require(['@/components/Home/touzhu'], resolve),
        },
        

      ]
    },
    {
      path: "/announcement",
      component: (resolve) => require(["@/components/Announcement/Announcement"], resolve),
    },
    {
      path: "/services", 
      component: (resolve) => require(["@/components/Services/Services"], resolve),
      children: [
        {
          path: "/activityDetails/:activityDetailsId", 
          component: (resolve) => require(["@/components/ActivityDetails/ActivityDetails"], resolve),
        },
      ]
    },
    {
      path: "/register", 
      component: (resolve) => require(["@/components/Register/Register"], resolve),
    },
    {
      path: "/succe", 
      component: (resolve) => require(['@/components/Mine/childres/succe'], resolve),
    },
    {
      path: "/dailiregist", 
      component: (resolve) => require(["@/components/Register/dailiregist"], resolve),
    },
    {
      path: "/login",
      component: (resolve) => require(["@/components/Login/Login"], resolve),
    },
    {
      path: "/onlineSevice",
      component: (resolve) => require(["@/components/Login/onlineSevice"], resolve),
    },
    {
      path: "/gouzoushi", 
      component: (resolve) => require(["@/components/Bet/gouzoushi"], resolve),
    },
    {
      path: "/minesetting", 
      component: (resolve) => require(["@/components/Mine/childres/settings"], resolve),
      children: [
        {
          path: '/jiaoyimima', 
          component: (resolve) => require(["@/components/Mine/childres/ChangeTransactionPassword"], resolve),
        },
        {
          path: "/updatePassword", 
          component: (resolve) => require(["@/components/Mine/childres/UpdatePassword"], resolve),
        },
       
      ]
    },
    {
      path: "/suggestion",
      component: (resolve) => require(["@/components/Mine/childres/Suggestion"], resolve),
      children: [
       
      ]

    }, 
    {
      path: '/suggestiondetal',
      component: (resolve) => require(["@/components/Mine/childres/suggestiondetal"], resolve),
    },
    //以下是我的页面及子页面
    {
      path: "/mine", 
      component: (resolve) => require(["@/components/Mine/Mine"], resolve),
      children: [
        {
          path: '/tixian', 
          component: (resolve) => require(["@/components/Withdraw/TiXian"], resolve),
          children: [
            
          ]
        },
        {
          path: '/choosebank', 
          component: (resolve) => require(["@/components/Withdraw/Choosebank"], resolve),
        },
        {
          path: "/recharge", 
          component: (resolve) => require(["@/components/Mine/childres/Recharge"], resolve),
          children: [{
            path: ':id', 
            component: (resolve) => require(["@/components/Mine/childres/rechargedetal"], resolve),
            children: [
              {
                path: '/rechargedetaling', 
                component: (resolve) => require(["@/components/Mine/childres/Rechargedetaling"], resolve),
              },
              {
                path: '/eweima', 
                component: (resolve) => require(["@/components/Mine/childres/erweima"], resolve),
                children: [
                  {
                    path: ':id', 
                    component: (resolve) => require(["@/components/Mine/childres/eweimatijiao"], resolve),
                  },
                ]
              },
            ]
          },

          {
            path: '/banking', 
            component: (resolve) => require(["@/components/Mine/childres/Banking"], resolve),
           
          },
          ]
        },
        {
          path: "/gamerules", 
          component: (resolve) => require(["@/components/Gamerules/Gamerules"], resolve),
        },
       
        {
          path: "/redPacket",
          component: (resolve) => require(["@/components/RedPacket/RedPacket"], resolve),
        },
        {
          path: "/share",
          component: (resolve) => require(["@/components/share/share"], resolve),
          children:[
            {
              path: 'howmoney',
              component: (resolve) => require(["@/components/share/howmoney"], resolve),
            }
          ]
        
      
        },
        {
          path: "/daili",
          component: (resolve) => require(["@/components/Mine/childres/daili/daili"], resolve),
          
          children: [
            {
              path: 'dailione', 
              component: (resolve) => require(["@/components/Mine/childres/daili/dailione"], resolve),
            },
            {
              path: 'dailitwo', 
              component: (resolve) => require(["@/components/Mine/childres/daili/dailitwo"], resolve),
            },
            {
              path: 'dailiMoney', 
              component: (resolve) => require(["@/components/share/myCommission"], resolve),
              children:[
                {
                  path: 'commissionDtl', 
                  component: (resolve) => require(["@/components/Mine/childres/daili/commissionDtl"], resolve),
                },

              ]
            },
            {
              path: 'reportQuery', 
              component: (resolve) => require(["@/components/Mine/childres/daili/reportQuery"], resolve),
              children: [
                {
                  path: 'Dailidetail',
                  component: (resolve) => require(["@/components/Mine/childres/daili/Dailidetail"], resolve),
                },

              ]
            },
            {
              path: 'agencyDown',
              component: (resolve) => require(["@/components/Mine/childres/daili/agencyDown"], resolve),
            },
            

         ]
        },
        
        {
          path: "/bonusdetails",
          component: (resolve) => require(["@/components/Bonusdetails/Bonusdetails"], resolve),
        },
        {
          path: "/settings", 
          component: (resolve) => require(["@/components/Settings/Settings"], resolve),
        },
        {
          path: "/bettingRecord", 
          component: (resolve) => require(["@/components/BettingRecord/BettingRecord"], resolve),
          children: [
            {
              path: ':id', 
              component: (resolve) => require(["@/components/Mine/childres/Details"], resolve),
            children:[
              {
                path: '/betterforthecolor',
                component: (resolve) => require(['@/components/Mine/childres/betterforthecolor'], resolve),
                children:[
                  
                ]
              }
             
            ]
          },
          {
            path: "/buycolorConfirm", 
            component: (resolve) => require(["@/components/Buycolor/buycolorConfirm"], resolve),
          },
        ]
        },
        {
          path: '/qiandao', 
          component: (resolve) => require(["@/components/Mine/childres/qiandao"], resolve),
          children: [{
            path: '/guize',
            component: (resolve) => require(["@/components/Mine/childres/guize"], resolve),
            },
          ]
        },
   
       
        {
          path: "/accountDetails", 
          component: (resolve) => require(["@/components/Mine/childres/AccountDetails"], resolve),
          children:[{
            
            path: '/accoundetil', 
            component: (resolve) => require(["@/components/Mine/childres/accoundetil.vue"], resolve),
          }]
        },
        {
          path: "/rechargeRecord", 
          component: (resolve) => require(["@/components/Mine/childres/RechargeRecord"], resolve),
          children: [
            {
              path: ":rechargeSheetId", 
              component: (resolve) => require(["@/components/Mine/childres/RechargeSheet"], resolve),
            }
         ]
        },
        {
          path: "/withdrawalsRecords", 
          component: (resolve) => require(["@/components/Mine/childres/WithdrawalsRecords"], resolve),
          children:[
            {
              path: ":drawTheDetailId", 
              component: (resolve) => require(["@/components/Mine/childres/DrawTheDetail"], resolve),
            },
          ]
        },
        {
          path: "/mycollect", 
          component: (resolve) => require(["@/components/Mycollect/Mycollect"], resolve),
        },
        {
          path: "/usermsg", 
          component: (resolve) => require(["@/components/Usermsg/Usermsg"], resolve),
        },
        {
          path: "/usermsg/:userMsgDetailsId",
          component: (resolve) => require(["@/components/Mine/childres/UserMsgDetails"], resolve),
        },
      ]
    },
    
   
   
    {
      path: "/newtop",
      component: (resolve) => require(["@/components/Newtop/Newtop"], resolve),
    },
    {
      path: "/lottery", 
      component: (resolve) => require(["@/components/Lottery/Lottery"], resolve),
      children:[
        {
          path: "/lotteryResultList/:lotteryResultListId",
          component: (resolve) => require(["@/components/Lottery/lotteryResultList"], resolve),
        },
        {
          path: "/isbuycolornew",
          component: (resolve) => require(["@/components/Lottery/Lotterynew/isbuycolornew"], resolve),
          children:[
            {
              path: "/buycolorConfirmkjjl",
              component: (resolve) => require(["@/components/Buycolor/buycolorConfirmkjjl"], resolve),
            },
            {
              path: "/bettingRecordtouzusi",
              component: (resolve) => require(['@/components/Lottery/Lotterynew/bettingRecordtouzusi'], resolve),
            },
            {
              path: "/rulesi/:ruleId", 
              component: (resolve) => require(["@/components/Lottery/Lotterynew/rulesi"], resolve),
            },
            {
              path: "/sharesi",
              component: (resolve) => require(["@/components/Lottery/Lotterynew/sharesi"], resolve),
            }
          ]
        },
        {
          path: "/iszoushi/:lotteryResultListId", 
          component: (resolve) => require(["@/components/Lottery/Lotterynew/iszoushi"], resolve),
        }
      ]
    },
    {
      path: "/buycolor", 
      component: (resolve) => require(["@/components/Buycolor/Buycolor"], resolve),
      children:[
        {
          path: "/buycolortestnew",
          component: (resolve) => require(["@/components/Buycolor/buycolornewtest/buycolortestnew"], resolve),
          children:[
            {
              path: "/buycolorConfirmyi", 
              component: (resolve) => require(["@/components/Buycolor/buycolorConfirmyi"], resolve),
            },
            {
              path: "/bettingRecordtouzuer", 
              component: (resolve) => require(["@/components/Buycolor/buycolornewtest/bettingRecordtouzuer"], resolve),
            },
            {
              path: "/lotteryResultLister/:lotteryResultListId",
              component: (resolve) => require([ "@/components/Buycolor/buycolornewtest/lotteryResultLister"], resolve),
            },
            {
              path: "/ruleer/:ruleId",
              component: (resolve) => require(["@/components/Buycolor/buycolornewtest/ruleer"], resolve),
            },
            {
              path: "/shareer", 
              component: (resolve) => require(["@/components/Buycolor/buycolornewtest/shareer"], resolve),
            },
            {
              path: "/lotteryResultListernew/:lotteryResultListId",
              component: (resolve) => require(["@/components/Buycolor/buycolornewtest/lotteryResultListernew"], resolve),
            },
          ]
        }, 
        {
          path: "/rule/:ruleId",
          component: (resolve) => require(["@/components/Buycolor/rule"], resolve),
        },
        {
          path: "/trentMap/:trentMapId", 
          component: (resolve) => require(["@/components/Buycolor/trentMap"], resolve),
        },
      ]
    },
    {
      path: "/Buycolornew",
      component: (resolve) => require(["@/components/Buycolor/Buycolornew"], resolve),
      children:[
        {
          path: "/furcolornew",
          component: (resolve) => require(["@/components/Buycolor/buycolornewtest/furcolornew"], resolve),
          children:[
            {
              path: "/buycolorConfirmer",
              component: (resolve) => require(["@/components/Buycolor/buycolorConfirmer"], resolve),
            },
            {
              path: "/bettingRecordtouzusan",
              component: (resolve) => require(["@/components/Buycolor/buycolornewtest/bettingRecordtouzusan"], resolve),
            },
            {
              path: "/lotteryResultListsan/:lotteryResultListId", 
              component: (resolve) => require(["@/components/Buycolor/buycolornewtest/lotteryResultListsan"], resolve),
            },
            {
              path: "/rulesan/:ruleId",
              component: (resolve) => require(["@/components/Buycolor/buycolornewtest/rulesan"], resolve),
            },
            {
              path: "/sharesan",
              component: (resolve) => require(["@/components/Buycolor/buycolornewtest/sharesan"], resolve),
            },
            {
              path: "/lotteryResultListsannew/:lotteryResultListId",
              component: (resolve) => require(["@/components/Buycolor/buycolornewtest/lotteryResultListsannew"], resolve),
            },
          ]
        }
        
      ]
    },
   
    {
      path: "/bankdetal", 
      component: (resolve) => require(["@/components/Mine/childres/bankdetal"], resolve),
    },
   
    // {
    //   path: "/changeTransactionPassword",
    //   component: ChangeTransactionPassword
    // },
    {
      path: '/zfbchonghzi', 
      component: (resolve) => require(["@/components/Mine/childres/zfbchonghzi"], resolve),

    },   
    {
      path: '/addbankcard', 
      component: (resolve) => require(["@/components/Withdraw/AddBankCard"], resolve),
    },
    {
      path: '/aboutus', 
      component: (resolve) => require(["@/components/Register/aboutus"], resolve),
    },
    {
      path: '/addsuggestion', 
      component: (resolve) => require(["@/components/Mine/childres/AddSuggestion"], resolve),
    },
    {
      path: "/forthecolor", 
      component: (resolve) => require(["@/components/Buycolor/forthecolor"], resolve),
    }, 

    
    {

      path: "/trialGame", 
      component: (resolve) => require(["@/components/TrialGame/TrialGame"], resolve),
    },
     {
       path: "/touzhuSuccess", 
       component: (resolve) => require(["@/components/Buycolor/touzhuSuccess"], resolve),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});

