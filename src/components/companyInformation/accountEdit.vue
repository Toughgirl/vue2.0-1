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
          <li>
            <a href="#/_storeList"><i class="fa fa-users"></i> <span class="nav-label">客户管理</span><span class="fa arrow"></span></a>
            <ul class="nav nav-second-level">
              <li>
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
          <li class="active">
            <a href="#/account"><i class="fa fa-user"></i> <span class="nav-label">账户中心</span> <span class="fa arrow"></span></a>
            <ul class="nav nav-second-level">
                <li class="active">
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
            账户中心
          </li>
          <li>
            公司信息编辑
          </li>
        </ol>
      </div>
      <div class="col-lg-2"></div>
    </div>
    <div class="row">
      <div class="col-lg-12">
         <div class="wrapper wrapper-content">
            <div class="ibox">
              <div class="ibox-content form-horizontal accountContent">
                  <form>
                     <div class="form-group">
                       <label class="col-lg-1 col-md-2 col-sm-2 col-xs-2 control-label">公司地址：</label>
                       <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10">
                         <div class="input-group">
                             <region-picker :province="region.province" :city="region.city" :district="region.district" :placeholder="{province: ''+array1[0]+'', city: ''+array1[1]+'', district: ''+array1[2]+''}" @onchange="change" >
                             </region-picker>
                              <input type="hidden" id="province1">
                              <input type="hidden" id="city1" >
                              <input type="hidden" id="district1">
                           <input type="text" class="form-control" v-model="array[1]" ref="input1" id="address">
                         </div>
                       </div>
                       <div class="clearfix"></div>
                     </div>
                     <div class="form-group">
                       <label class="col-lg-1 col-md-2 col-sm-2 col-xs-2 control-label">手机号码：</label>
                       <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10">
                         <div class="input-group">
                           <input type="text" class="form-control" v-model="list.phone" ref="input2" id="phone">
                         </div>
                       </div>
                       <div class="clearfix"></div>
                     </div>
                     <div class="form-group">
                                            <label class="col-lg-1 col-md-2 col-sm-2 col-xs-2 control-label">邮政编码：</label>
                                            <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10">
                                              <div class="input-group">
                                                <input type="text" class="form-control" v-model="list.zip" id="zip">
                                              </div>
                                            </div>
                                            <div class="clearfix"></div>
                                          </div>
                     <div class="form-group">
                       <label class="col-lg-1 col-md-2 col-sm-2 col-xs-2 control-label">传真号码：</label>
                       <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10">
                         <div class="input-group">
                           <input type="text" class="form-control" v-model="list.fax" id="fax">
                         </div>
                       </div>
                       <div class="clearfix"></div>
                     </div>
                     <div class="form-group">
                       <label class="col-lg-1 col-md-2 col-sm-2 col-xs-2 control-label">电子邮箱：</label>
                       <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10">
                         <div class="input-group">
                           <input type="text" class="form-control" v-model="list.email" id="email">
                         </div>
                       </div>
                       <div class="clearfix"></div>
                     </div>
                     <div class="form-group">
                       <label class="col-lg-1 col-md-2 col-sm-2 col-xs-2 control-label">客服QQ：</label>
                       <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10">
                         <div class="input-group">
                           <input type="text" class="form-control" v-model="list.qq" id="qq">
                         </div>
                       </div>
                       <div class="clearfix"></div>
                     </div>
                     <div class="form-group">
                       <label class="col-lg-1 col-md-2 col-sm-2 col-xs-2 control-label">公司座机：</label>
                       <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10">
                         <div class="input-group">
                           <input type="text" class="form-control" v-model="list.landline" id="landline">
                         </div>
                       </div>
                       <div class="clearfix"></div>
                     </div>
                     <div class="form-group">
                         <label class="col-lg-1 col-md-2 col-sm-2 col-xs-2 control-label"></label>
                         <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10">
                           <a class="btn btn-success" v-on:click="saveCompany()">保存</a>
                           <button class="btn btn-white" onclick="window.history.go(-1)">返回</button>
                         </div>
                     </div>
                 </form>
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
    require('src/vuex/modules/account/account.js')
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
           list:"",
           _s:"",
           array:[],
           array1:[],
           region: {
                province: $("#province1").val(),
                city: $("#city1").val(),
                district: $("#district1").val()
           },
        }
    },
        computed:mapState({user: state => state.user,}),



        methods: {
                    ...mapActions([USER_SIGNOUT]),
                    logOut() {
                        this.USER_SIGNOUT()
        				        this.$router.replace({ path: '/login' })
                    },
                    change:function(s){
                      $("#province1").val(s.province)
                      $("#city1").val(s.city)
                      $("#district1").val(s.district)
                      return s
                    },
                    //保存
                    saveCompany:function(){
                      var self = this;
                      var param = new Object();
                      param.access_token = store.state.user.access_token
                      param.user_id = store.state.user.userId
                      var Addre =$("#province1").val()+"/"+$("#city1").val()+"/"+$("#district1").val() ;
                      var address =$("#address").val();
                      var phone =$("#phone").val();
                      var zip =$("#zip").val();
                      var fax =$("#fax").val();
                      var email =$("#email").val();
                      var qq =$("#qq").val();
                      var landline =$("#landline").val();
//                      console.log(Addre)
                      var request_parames = new Object();
                      request_parames.addre=Addre;
                      request_parames.address=address;
                      request_parames.phone=phone;
                      request_parames.zip=zip;
                      request_parames.email=email;
                      request_parames.fax=fax;
                      request_parames.qq=qq;
                      request_parames.landline=landline;
                      param.request_parames=request_parames;
                      var json = JSON.stringify(param);
                      //console.log(json);

                        $.ajax({
//                          url:"/saveCompany",
                          url:store.state.baseUrl.data_serv_url+"/system/saveCompany",
                          data:{parameter:json},
                          type:"post",
                          dataType:"json",
                          success:function (data) {
//                            console.log(data)
                            if(data.code=="OK"){
//                              console.log(0)
                              self.$router.replace({ path: '/account' });
                            }else{
//                              console.log(1)

                            }
                          },
                          error:function () {

                          }
                        })
                    },




                },
                beforeCreate:function () {
                   var self = this;
                   var param = new Object();
                   param.access_token = store.state.user.access_token
                   param.user_id = store.state.user.userId
                   var data = JSON.stringify(param);

                   $.ajax({
//                     url:"/company",
                     url:store.state.baseUrl.data_serv_url+"/system/company",
                     data:{parameter:data},
                     type:"post",
                     dataType:"json",
                     success:function (data) {
                       self.list = eval('(' + data.hmac + ')');
                       //console.log(self.list)
                       self.array=self.list.address.split(",");
                       self.array1=self.list.address.split(",")[0].split("/");
                       $("#province1").val(self.array1[0])
                       $("#city1").val(self.array1[1])
                       $("#district1").val(self.array1[2])
                       //console.log(self.array1)

                     },
                     error:function () {

                     }
                   })
                },
                mounted:function(){
                  inspinia();

                }

    }

</script>



