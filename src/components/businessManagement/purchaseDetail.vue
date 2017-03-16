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
                  <li class="active"><a href="#/purchaseList">采购业务</a></li>
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
          业务管理
        </li>
        <li>
          <a href="#/carParts">采购业务</a>
        </li>
        <li>
          采购详情
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
              <h5>{{customerOrderInfo.status}}</h5>
            </div>
            <div class="ibox-content">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-md-4" valign="top">
                    <div class="row">
                      <div class="col-lg-12"><label>采购单号：</label>
                        <span>{{customerOrderInfo.cust_order_num}}</span>
                      </div>
                      <div class="col-lg-12"><label>商品总数：</label>
                        <span>{{customerOrderInfo.total_quantity}}</span>
                      </div>
                      <div class="col-lg-12"><label>返利金额：</label>
                        <span v-if="customerOrderInfo.total_rebate">{{customerOrderInfo.total_rebate | currency}}</span>
                        <span v-else>无</span>
                      </div>
                      <div class="col-lg-12"><label>收货地址：</label>
                        <span v-if="customerOrderInfo.addr">{{customerOrderInfo.addr}}</span>
                        <span v-else>无</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4" valign="top">
                    <div class="row">
                      <div class="col-lg-12"><label>门店名称：</label>
                        <span>{{customerOrderInfo.company_name}}</span>
                      </div>
                      <div class="col-lg-12"><label>商品金额：</label>
                        <span>{{customerOrderInfo.no_discount_total | currency}}</span>
                      </div>
                      <div class="col-lg-12"><label>联系人姓名：</label>
                        <span>{{customerOrderInfo.consignee}}</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4" valign="top">
                    <div class="row">
                      <div class="col-lg-12"><label>下单时间：</label><span>{{customerOrderInfo.create_date}}</span></div>
                      <div class="col-lg-12"><label>优惠金额：</label><span>
                      <span v-if="customerOrderInfo.discount_total">{{customerOrderInfo.discount_total | currency}}</span>
                      <span v-else>无</span></div>
                      <div class="col-lg-12"><label>联系人电话：</label><span>{{customerOrderInfo.phone_nbr}}</span></div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div class="ibox-content">
              <table  class="table table-bordered" width="100%">
              <thead>
              <tr>
              <th>商品信息</th>
              <th>单价</th>
              <th>数量</th>
              <th>优惠金额</th>
              <th>总计</th>
              <th>返利金额</th>
              <th>状态</th>
              </tr>
              </thead>
              <tbody id="returnOrderDetail">

              </tbody>
              </table>
              <div id="query_number_list"></div>
            </div>
            <div class="ibox-content">
              <div class="form-group">
                  <a href="#/purchaseList"><button class="btn btn-white">返回</button></a>
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
    //import laypage from 'laypage'
    export default {
        data(){
          return{
            list:"",
            customerOrderInfo:"",
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
          var request_parames = new Object();
          var $href = (window.location.href).split("/")
          var customerOrderId= $href[$href.length-1];
          request_parames.customerOrderId = customerOrderId;
          param.request_parames=request_parames;
          var json = JSON.stringify(param);
          $.ajax({
//            url:"/detailCustomerOrder",
            url:store.state.baseUrl.data_serv_url+"/system/store/details",
            data:{parameter:json},
            type:"post",
            dataType:"json",
            success:function (data) {
              self.list = data.hmac
              //console.log(self.list)
              self.customerOrderInfo = self.list.customerOrderInfo
              if(self.customerOrderInfo.status=='101300'){
                  self.customerOrderInfo.status="待审核"
              }else if(self.customerOrderInfo.status=='201400'){
                 self.customerOrderInfo.status="采购中"
              }else if(self.customerOrderInfo.status=='101200'){
                 self.customerOrderInfo.status="待支付"
              }else if(self.customerOrderInfo.status=='401600'){
                self.customerOrderInfo.status="已失效"
              }else if(self.customerOrderInfo.status=='402300'){
                self.customerOrderInfo.status="已完成"
              }
              //console.log(self.customerOrderInfo)

            },
            error:function () {

            }
          });
          //列表组

        function getDetailContent(curr){
          if(curr==null) {curr=1;}
          var pageSize = 15;
          var param = new Object();
          param.access_token = store.state.user.access_token
          param.user_id = store.state.user.userId

          var request_parames = new Object();
          request_parames.pageSize = pageSize;
          request_parames.curPage = curr;
          var $href = (window.location.href).split("/")
          var custOrderId= $href[$href.length-1];
          request_parames.custOrderId = custOrderId;

          param.request_parames=request_parames;
          var json = JSON.stringify(param);
          //console.log(json);
          $.ajax({
            type : "POST",
//            url : "/ByPageCustomerOrderDetail",
            url : store.state.baseUrl.data_serv_url+"/system/store/customerOrder/findOrderItemByPage",
            data :{parameter:json},
            async : false,
            success : function(data) {
              var datas = eval(data);
//              console.log(datas)
              if (datas.code=="OK") {
                query(curr, pageSize, datas.hmac);
              }
            }
          });
        };

        function thisDate(data,baseImgUrl) {
          var page_data_html = '';
          for (var i = 0 ; i < data.length; i++) {
            page_data_html += '<tr>'+
              '<td>'+data[i].prod_offer_name+'</td>'+
              '<td>'+data[i].price+'</td>'+
              '<td>'+data[i].total_quantity+'</td>'+
              '<td>'+data[i].discount_total+'</td>'+
              '<td>'+data[i].total_amount+'</td>'+
              '<td>'+data[i].total_rebate+'</td>'+
              '<td>'+data[i].status_name+'</td>';

            page_data_html +='</tr>';

          }
          window.page_html=page_data_html;
//          console.log(page_data_html)
          return page_data_html;
        };
        var baseImgUrl =store.state.baseUrl.img_upload_url;
        function query(curr, pageSize, data) {
          var pageData = data.data;
          //分页内容处理
          thisDate(pageData,baseImgUrl);
          //调用分页
          laypage({
            cont: 'query_number_list',//容器。值支持id名、原生dom对象，jquery对象,【如该容器为】：<div id="query_number_list"></div>，或者使用$('#query_number_list')
            curr: curr || 1,//当前页
            pages: data.totalPage,//总页数
            groups: pageSize, //连续分页数，默认为5
            skip: false, //是否开启跳页
            first: 1, //将首页显示为数字1，或者显示自定义内容：如'首页'。若不显示，设置false即可
            last: data.totalPage, //将尾页显示为总页数，或者显示自定义内容：如'尾页'。若不显示，设置false即可
            prev: '上一页', //若不显示，设置false即可，或者显示自定义内容：如'上一页'
            next: '下一页', //若不显示，设置false即可，或者显示自定义内容：如'下一页'
            skin: '#FF6600',//加载内置皮肤，也可以直接赋值16进制颜色值，如:#c00
            jump: function (obj, first) { //触发分页后的回调
              if (!first) {
                getDetailContent(obj.curr)
              }
              else
              {
                $('#returnOrderDetail').html(page_html);

              }
            }
          })
        };
        getDetailContent(null);
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



