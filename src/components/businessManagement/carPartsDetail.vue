<template>
<div id="wrapper">
  <nav class="navbar-default navbar-static-side" role="navigation">
    <div class="sidebar-collapse">
      <ul class="nav" id="side-menu">
        <li class="nav-header">
          <div class="dropdown profile-element">
            <h2 class="font-bold">运营商系统</h2>
          </div>
          <div class="logo-element">
            运营商
          </div>
        </li>
        <li>
          <a href="#/index"><i class="fa fa-home"></i> <span class="nav-label">首页</span></a>
        </li>
        <li class="active">
          <a href="#/_storeList"><i class="fa fa-users"></i> <span class="nav-label">客户管理</span><span class="fa arrow"></span></a>
          <ul class="nav nav-second-level">
            <li>
              <a href="#/_storeList">门店管理</a>
            </li>
            <li class="active">
              <a href="#/purchaseList">业务管理<span class="fa arrow"></span></a>
              <ul class="nav nav-third-level">
                <li><a href="#/purchaseList">采购业务</a></li>
                <li><a href="#/returnList">退货业务</a></li>
                <li class="active"><a href="#/carParts">全车件</a></li>
              </ul>
            </li>
            <li>
              <a href="#/SettledList">财务管理<span class="fa arrow"></span></a>
              <ul class="nav nav-third-level">
                <li><a href="#/SettledList">已结算</a></li>
                <li><a href="#/TransactionList">交易明细</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href="#/account"><i class="fa fa-user"></i> <span class="nav-label">账户中心</span> <span class="fa arrow"></span></a>
          <ul class="nav nav-second-level">
            <li>
              <a href="#/account">公司信息</a>
            </li>
            <li>
              <a href="#/personal">个人中心<span class="fa arrow"></span></a>
              <ul class="nav nav-third-level">
                <li><a href="#/personal">个人中心</a></li>
                <li><a href="#/changePassWord">修改密码</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href="#/messageList"><i class="fa fa-envelope-o"></i> <span class="nav-label">消息中心</span> <span class="fa arrow"></span></a>
          <ul class="nav nav-second-level">
            <li><a href="#/messageList">消息管理</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>

  <div id="page-wrapper" class="gray-bg dashbard-1">
      <!-- 顶部栏-->
      <div class="row border-bottom">
        <nav class="navbar navbar-static-top" role="navigation" style="margin-bottom: 0">
          <div class="navbar-header">
            <a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="#"><i class="fa fa-bars"></i> </a>
          </div>
          <ul class="nav navbar-top-links navbar-right">
            <li class="text-navy">{{user.userName}}</li>
            <li class="text-navy">
              <a href="#" v-on:click="logOut" style="color:#23c6c8">
                <i class="fa fa-sign-out text-navy"></i>退出
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="row wrapper border-bottom white-bg page-heading">
        <div class="col-lg-10">
          <h2></h2>
          <ol class="breadcrumb">
            <li>
              客户管理
            </li>
            <li>
              业务管理
            </li>
            <li>
              <a href="#/carParts">全车件</a>
            </li>
            <li>
               全车件详情
            </li>
          </ol>
        </div>
        <div class="col-lg-2"></div>
      </div>
      <div class="row">
       <div class="col-lg-12">
         <div class="wrapper wrapper-content">
           <div class="ibox">
             <div class="ibox-title">
               <h5>{{map.status}}</h5>
               <span class="text-danger" v-if="map.status=='已失效'">&nbsp;&nbsp;失效时间：{{map.buy_exp_date}}</span>
               <span class="text-danger" v-if="map.status=='已报价'">&nbsp;&nbsp;购买倒计时：<span :data-endTime="map.buy_exp_date" :data-servnowTime="nowTime.nowTime" class="timedele colorRed" data-fomart="dd天hh小时mm分ss秒"></span></span>
               <span v-else></span>
             </div>
             <div class="ibox-content">
               <table class="table table-bordered">
                 <tbody>
                 <tr>
                   <td class="col-md-4" valign="top">
                     <h3>基本信息</h3>
                     <div class="row">
                       <div class="col-lg-12"><label>申请单号：</label>
                         <span>{{map.parts_order_no}}</span>
                       </div>
                      <div class="col-lg-12"><label>申请时间：</label>
                        <span>{{map.create_date}}</span>
                      </div>
                      <div class="col-lg-12"><label>提交人：</label>
                        <span>{{map.real_name}}</span>
                      </div>
                      <div class="col-lg-12"><label>流通渠道：</label>
                        <span id="product_channel"></span>
                      </div>
                      <div class="col-lg-12"><label>车型：</label>
                        <span>{{map.model}}</span>
                      </div>
                     </div>
                   </td>
                   <td class="col-md-8" valign="top">
                     <h3>车辆图片</h3>
                     <div class="row">
                        <div class="col-lg-4">
                            <img :src="baseImgUrl+mapInfo.a0" width="100%" height="250">
                            <p class="text-center">车头照片</p>
                        </div>
                        <div class="col-lg-4">
                          <img :src="baseImgUrl+mapInfo.a0" width="100%" height="250">
                          <p class="text-center">车尾照片</p>
                        </div>
                        <div class="col-lg-4"><img :src="baseImgUrl+mapInfo.a0" width="100%" height="250">
                          <p class="text-center">车辆铭牌</p>
                        </div>
                     </div>
                   </td>
                 </tr>
                 </tbody>
               </table>
               <table  id="carPartsDetail" class="table table-bordered" width="100%">
                 <thead>
                   <tr>
                     <th>零件类别</th>
                     <th>零件名称</th>
                     <th>零件号</th>
                     <th>数量</th>
                     <th>品牌件（元）</th>
                     <th>配套正厂件（元）</th>
                     <th>资格正厂（元）</th>
                   </tr>
                 </thead>

               </table>

               <div id="query_number_list"></div>
             </div>
             <div class="ibox-content">
               <div class="form-group">
                 <a href="#/carParts"><button class="btn btn-white">返回</button></a>
               </div>
             </div>
           </div>
         </div>
       </div>
      </div>
      <div class="footer">
        <div class="pull-right">
          版权所有@ 2017 jingyoucf.com Inc.All Rights<strong>成都市车车一二零网络科技有限公司</strong>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    import Vue from 'vue';
    import { mapState } from 'vuex'
    import { mapActions } from 'vuex'
    import { USER_SIGNOUT } from 'src/store/user/login'
    import 'babel-polyfill';
    import store from 'src/vuex/store.js'
    import inspinia from 'src/assets/js/inspinia.js'
    export default {
        data(){
          return{
            list:"",
            mapInfo:"",
            map:"",
            nowTime:"",
            product_channel:[],
            baseImgUrl:store.state.baseUrl.img_upload_url,
            }
        },
        computed: mapState({ user: state => state.user }),
        methods: {
                    ...mapActions([USER_SIGNOUT]),
                    logOut() {
                        this.USER_SIGNOUT()
        				        this.$router.replace({ path: '/login' })
                    },
                    clearCondition(){
                      $("#status").val("");
                      $("#storeName").val("");
                      $(".title").val("");
                      $("#startTime").val("");
                      $("#endTime").val("");
                      $(".province-select").val("");
                      $(".city-select").val("");
                      $(".district-select").val("");
                    },
                    change:function(s){
//                      console.log(s)
                    },
        },
        mounted:function () {
          inspinia();
        //非列表
          var self = this;
          var param = new Object();
          param.access_token = store.state.user.access_token
          param.user_id = store.state.user.userId
          var data = JSON.stringify(param)
          var request_parames = new Object();
          var $href = (window.location.href).split("/");
          var parts_order_id= $href[$href.length-1];
          request_parames.id = parts_order_id;
          param.request_parames=request_parames;
          var json = JSON.stringify(param);
          $.ajax({
//              url:"/servnowTime",
              url:store.state.baseUrl.data_serv_url+"/nowTime",
              data:{parameter:data},
              type:"post",
              dataType:"json",
              success:function (data) {
                self.nowTime = data.hmac
              }
            });

          $.ajax({
//            url:"/pdbjList",
            url:store.state.baseUrl.data_serv_url+"/parts/partsOrder/pdbjList",
            data:{parameter:json},
            type:"post",
            dataType:"json",
            success:function (data) {
              self.list = eval('(' + data.hmac + ')')
              self.mapInfo = self.list.mapInfo
              self.map = self.list.map
              self.product_channel = self.list.map.product_channel.split(",");
                for (var i=0;i<self.product_channel.length;i++)
                {
                  //类型
                  if(self.product_channel[i]=="1") {
                    self.product_channel[i]="品牌件";
                  }else if(self.product_channel[i]=="2"){
                    self.product_channel[i]="配套正厂";
                  }else if(self.product_channel[i]=="3"){
                    self.product_channel[i]="正厂件";
                  }
                  $("#product_channel").append(self.product_channel[i]+"   ")
                }
                var format = function(time, format){
                  var t = new Date(time);
                  var tf = function(i){return (i < 10 ? '0' : '') + i};
                  return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function(a){
                    switch(a){
                      case 'yyyy':
                        return tf(t.getFullYear());
                        break;
                      case 'MM':
                        return tf(t.getMonth() + 1);
                        break;
                      case 'mm':
                        return tf(t.getMinutes());
                        break;
                      case 'dd':
                        return tf(t.getDate());
                        break;
                      case 'HH':
                        return tf(t.getHours());
                        break;
                      case 'ss':
                        return tf(t.getSeconds());
                        break;
                    };
                  });
                };
                self.map.buy_exp_date = format(self.map.buy_exp_date, 'yyyy-MM-dd HH:mm:ss')
                self.map.create_date = format(self.map.create_date, 'yyyy-MM-dd HH:mm:ss')
              //状态

              if(self.map.status=="1100") {
                self.map.status="报价中";
              }else if(self.map.status=="1111"){
                self.map.status="报价中";
              }else if(self.map.status=="1112"){
                self.map.status="报价中";
              }else if(self.map.status=="1200"){
                self.map.status="已报价";
              }else if(self.map.status=="1300"){
                 self.map.status="已购买";
              }else if(self.map.status=="1400"){
                  self.map.status="已失效";
              }else if(self.map.status=="1500"){
                 self.map.status="已驳回";
              }





            },
            error:function () {

            }
          });

        //列表

        $("#carPartsDetail").dataTable({
                    "bAutoWidth": false,
                    "processing": true,
                    "serverSide": true,//服务器分页
                    "iDisplayLength": 10,//首次加载的数据条数
                    "ajax": {
//                      "url": "/partsOrderPages",
                      "url": store.state.baseUrl.data_serv_url+"/parts/partsOrder/pages",
                      "type": "POST",
                      "dataSrc": "hmac.data",//默认data，也可以写其他的，格式化table的时候取里面的数据
                      "data":function (d) {//d 是原始的发送给服务器的数据，默认很长。
                        var param = new Object();
                        param.access_token = store.state.user.access_token
                        param.user_id = store.state.user.userId
                        var request_parames = new Object();
                        request_parames.start = d.start;
                        request_parames.pageSize = d.length;
                        var $href = (window.location.href).split("/")
                        var parts_order_id= $href[$href.length-1];
                        request_parames.id = parts_order_id;
                        param.request_parames=request_parames;
                        var data = JSON.stringify(param);
                        var obj = {};
                        obj.parameter=data
                        return obj;
                      }



                    },
                    "columns": [
                      { "data": "class_name" },
                      { "data": "fix_parts_name" },
                      { "data": "fix_parts_num" },
                      { "data": "quantity" },
                      { "data": "PPJ" },
                      { "data": "PTZC" },
                      { "data": "ZGZC" },


                    ],

                    "language": {
                      "lengthMenu": "每页 _MENU_ 条记录",
                      "zeroRecords": " ",
                      "info": "当前 _START_ 条 到 _END_条 共_TOTAL_条",
                      "infoEmpty": "暂无记录",
                      "infoFiltered": "",
                      "search":"搜索",
                      "processing" : "加载中",
                      "paginate" : {
                        "first" : "首页",
                        "previous" : "上一页",
                        "next" : "下一页",
                        "last" : "尾页"
                      }
                    },
                    "oPaginate" : {
                      "sFirst" : "首页",
                      "sPrevious" : "上一页",
                      "sNext" : "下一页",
                      "sLast" : "末页"
                    },
                    "paging":   true,//分页
                    "ordering": false,//排序
                    "bFilter": false,     //过滤功能
                    "searching": false,//去掉默认的搜索框
                    "info":     true,//信息
                    "pagingType":   "full_numbers",
                    "lengthChange": false,
                    "bStateSave": true


                  });
                  //时间
                  function timer(intDiff,obj){
                    setInterval(function(){
                      var day=0,
                        hour=0,
                        minute=0,
                        second=0;
                      var htm='';
                      if(intDiff > 0){
                        day = Math.floor(intDiff/1000/60/60/24);
                        hour = Math.floor(intDiff/1000/60/60%24);
                        minute = Math.floor(intDiff/1000/60%60);
                        second = Math.floor(intDiff/1000%60);
                        if (minute <= 9) minute = '0' + minute;
                        if (second <= 9) second = '0' + second;
                        htm += day+" 天 "+hour+" 时 "+minute+" 分 "+second+" 秒 ";
                      }else{
                        htm+='已超时';
                      }
                      $(obj).html(htm);
                      intDiff=intDiff-1000;
                    }, 1000)
                  }

                  function ShowTime(){
                    $(".timedele").each(function(){
                      var nowtime =  $(this).attr("data-servnowTime");
                      var endtime = $(this).attr("data-endTime");
                      var fomart = $(this).attr("data-fomart");
                      var mm = new Date(Date.parse(endtime.replace(/-/g, "/")));
                      var t =mm.getTime() - new Date(nowtime).getTime();
                      timer(t,this);
                    })
                  }
                  setTimeout(ShowTime,100);


        },
        components:{

        },
        filters: {
            currency: function (value) {
              if (!value) return
             value = value.toFixed(2)
             return value
            }
        }
    }

</script>



