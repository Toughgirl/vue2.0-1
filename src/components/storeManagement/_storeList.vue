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
              <li class="active">
                <a href="#/_storeList">门店管理</a>
              </li>
              <li>
                <a href="#/purchaseList">业务管理<span class="fa arrow"></span></a>
                <ul class="nav nav-third-level">
                  <li><a href="#/purchaseList">采购业务</a></li>
                  <li><a href="#/returnList">退货业务</a></li>
                  <li><a href="#/carParts">全车件</a></li>
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
            门店管理
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
                         <div class="row">
                                          <div class="form-group col-lg-3 col-sm-12">
                                              <div class="input-group">
                                                  <div class="input-group-addon">状态：</div>
                                                  <select class="form-control" id="status">
                                                      <option value="">全部</option>
                                                      <option value="2">解约</option>
                                                      <option value="1">正常</option>
                                                      <option value="0">冻结</option>
                                                      <option value="5">驳回</option>
                                                      <option value="4">审核中</option>
                                                  </select>
                                              </div>
                                          </div>
                                          <div class="form-group col-lg-3 col-sm-12">
                                              <div class="input-group">
                                                  <div class="input-group-addon">门店：</div>
                                                  <input class="form-control" placeholder="请输入门店名称/合同编号" id="storeName">
                                              </div>
                                          </div>
                                          <div class="form-group col-lg-6 col-sm-12">
                                              <div class="input-group">
                                                  <div class="input-group-addon">所属区域：</div>
                                                  <div class="form-control" style="padding: 0;border: none;">
                                                      <region-picker :province="region.province" :city="region.city" :district="region.district"  :placeholder="{province: '选择省份', city: '选择市', district: '选择地区'}" @onchange="change">
                                                      </region-picker>
                                                      <input type="hidden" id="province1">
                                                      <input type="hidden" id="city1" >
                                                      <input type="hidden" id="district1">
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                       <div class="row">
                                           <div class="form-group col-lg-6 col-sm-12">
                                               <div class="input-group">
                                                   <div class="input-group-addon">加盟日期：</div>
                                                   <div style="width: 100%;float: left;height: 32px;">
                                                     <input type="text" class="Wdate form-control" style="float: left;height: 32px;width:40%" placeholder="选择开始时间" readonly="readonly" name="dateStart" id="dateStart" onfocus="WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss',maxDate:'#F{$dp.$D(\'dateEnd\')}'})">
                                                     <span style="float: left;width: 4%;margin: 0 1%;text-align: center;line-height: 32px;">--</span>
                                                     <input type="text" class="Wdate form-control" style="float: left;height: 32px;width:40%" placeholder="选择结束时间" readonly="readonly" name="dateEnd" id="dateEnd" onfocus="WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss',minDate:'#F{$dp.$D(\'dateStart\')}'})">
                                                   </div>
                                               </div>
                                          </div>
                                           <div class="form-group col-lg-6 col-sm-12">
                                               <button class="btn btn-red" id="clearCondition" v-on:click="clearCondition">清除条件</button>
                                               <button class="btn btn-info" id="searchList">查询</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                               <a href="#/storeNew"><button class="btn btn-warning">新增门店</button></a>
                                           </div>
                                       </div>

                       </div>
            </div>
            <div class="ibox-content" v-on:click="openImageProxy($event)">
                <div class="container-fluid">
                  <table id="DataTable" class="table  table-bordered" cellspacing="0" width="100%">
                    <thead>
                    <tr>
                    <th>门店编号</th>
                    <th>门店类型</th>
                    <th>门店名称</th>
                    <th>所属区域</th>
                    <th>合同编号</th>
                    <th>加盟日期</th>
                    <th>状态</th>
                    <th>操作</th>
                    </tr>
                    </thead>

                  </table>
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
    import RegionPicker from 'vue-region-picker'
    import CHINA_REGION from 'china-area-data'
    import store from 'src/vuex/store.js'
    import inspinia from 'src/assets/js/inspinia.js'
    Vue.use(RegionPicker, {
      region: CHINA_REGION,
      vueVersion: 2
    })
    export default {
    data(){
    return{
      _s:"",
      date: '',
      date1: '',
      region: {},
      list:""

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
                    $("#dateStart").val("");
                    $("#dateEnd").val("");
                    $(".province-select").val("");
                    $(".city-select").val("");
                    $(".district-select").val("");
                  },
                  change:function(s){
//                     console.log($(".district-select").val().split(",")[0])
                     $("#district1").val($(".district-select").val().split(",")[0])
                     return s
                  },
                  openImageProxy: function (event) {
                    if (event.target.nodeName === 'BUTTON') {
                      var $html= event.target;
                      var storeId = $($html).attr("storeId");
                      this.$router.replace({ path: '/storeDetail/' + storeId})
                      event.stopPropagation();
                    }
                  }

        },
        mounted:function () {
          inspinia();
          $("#DataTable").dataTable({
            "bAutoWidth": false,
            "processing": true,
            "serverSide": true,//服务器分页
            "iDisplayLength": 10,//首次加载的数据条数
            "ajax": {
//              "url": "/storeList",
              "url": store.state.baseUrl.data_serv_url+"/system/store/page",
              "type": "POST",
              "dataSrc": "hmac.data",//默认data，也可以写其他的，格式化table的时候取里面的数据
              "data":function (d) {//d 是原始的发送给服务器的数据，默认很长。
                var param = new Object();
                param.access_token = store.state.user.access_token
                param.user_id = store.state.user.userId
                var status =$("#status").val();
                var regionId = $("#district1").val();
                var gradeType =$("#gradeType").val();
                var keywords =$("#storeName").val();
                var dateStart =$("#dateStart").val();
                var dateEnd =$("#dateEnd").val();
                var request_parames = new Object();
                request_parames.start = d.start;
                request_parames.pageSize = d.length;
                request_parames.status = status;
                request_parames.regionId = regionId;
                request_parames.gradeType = gradeType;
                request_parames.keywords = keywords;
                request_parames.dateStart = dateStart;
                request_parames.dateEnd = dateEnd;
                param.request_parames=request_parames;
                var data = JSON.stringify(param);
                var obj = {};
                obj.parameter=data
                return obj;
              }



            },
            "columns": [
              { "data": "company_no" },
              { "data": "company_type" },
              { "data": "company_name" },
              { "data": "regionas" },
              { "data": "contract_no" },
              { "data": "create_time" },
              {
              				    "data": "status",
              				    "render": function (data,type,full,callback) {
              					                 var datahtml="";
              					                 if((full.dj==1||full.dj==null) && data==1){
                                           datahtml+="正常";
                                         }else if(full.dj==3 && data==1){
              					                	 datahtml+="冻结";
              					                 }else if(data==2){
              					                	 datahtml+="解约";
              					                 }else if(data==4){
                                           datahtml+="审核中";
                                         }else if(data==5){
                                           datahtml+="驳回";
                                         }
              					                 return datahtml;
              		             			}
              				},
              //操作列
              {
                "data": "",//json
                "render": function (data,type,full,callback) {
                  var datahtml='';
                  datahtml+='<button class="btn btn-info btn-xs" storeId="'+full.id+'" storeStatus = "'+full.status+'">详情</button>'
                  return datahtml;
                }
              }


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
          $("#searchList").click(function(){
                      searchList();
                    });

                    // 搜索
                    function searchList(){
                      $('#DataTable').DataTable().draw();
                    }
        },
        components:{
        }
    }

</script>



