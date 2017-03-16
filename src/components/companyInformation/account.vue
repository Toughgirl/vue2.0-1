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
            公司信息
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
                      <h5>公司信息</h5>
                      <div class="ibox-tools">
                        <a class="collapse-link" href="#/accountEdit">
                          <button class="btn btn-info btn-xs">编辑公司信息</button>
                        </a>
                      </div>
                    </div>
                    <div class="ibox-content ">
                      <table class="table table-bordered"  >
                        <tbody>
                          <tr>
                            <td class="gray-bg">营业执照注册号：</td>
                            <td><span>{{list.company_no}}</span></td>
                            <td class="gray-bg">公司名称：</td>
                            <td><span>{{list.company_name}}</span></td>
                          </tr>
                          <tr>
                            <td class="gray-bg">法人代表姓名：</td>
                            <td><span>{{list.company_no}}</span></td>
                            <td class="gray-bg">法人身份证号码：</td>
                            <td><span>{{list.legal_person}}</span></td>
                          </tr>
                          <tr>
                            <td class="gray-bg">注册资本：</td>
                            <td><span>{{list.registered_capital}}</span></td>
                            <td class="gray-bg">成立日期：</td>
                            <td><span>{{list.establish_time}}</span></td>
                          </tr>
                          <tr>
                            <td class="gray-bg">营业期限：</td>
                            <td><span>{{list.business_time}}</span></td>
                            <td class="gray-bg">注册地址：</td>
                            <td><span>{{list.org_address}}</span></td>
                          </tr>
                          <tr>
                            <td class="gray-bg">营业执照：</td>
                            <td>
                              <div class="accountImg">
                                <img :src="baseImgUrl+list.yPic">
                              </div>
                            </td>
                            <td class="gray-bg">法人身份证照片：</td>
                            <td>
                              <div class="accountImg left"><img :src="baseImgUrl+list.zPic"></div>
                              <div class="accountImg left"><img :src="baseImgUrl+list.fPic"></div>
                            </td>
                          </tr>
                        </tbody>

                      </table>
                    </div>
                    <div class="ibox-title" style="border-top: none;">
                      <h5>合作信息</h5>
                    </div>
                    <div class="ibox-content form-horizontal accountContent" >
                      <div class="form-group">
                        <label class="col-lg-1 col-md-2 col-sm-2 col-xs-2 control-label">合同编号：</label>
                        <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10"><span>{{list.company_no}}</span></div>
                        <div class="clearfix"></div>
                      </div>
                      <div class="form-group">
                        <label class="col-lg-1 col-md-2 col-sm-2 col-xs-2 control-label">区域范围：</label>
                        <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10">
                          <span>{{list.area}}</span>
                        </div>
                      </div>
                    </div>
                    <div class="ibox-title" style="border-top: none;">
                      <h5>账户信息</h5>
                    </div>
                    <div class="ibox-content form-horizontal accountContent">
                      <div class="form-group">
                        <label class="col-lg-1 col-md-2 col-sm-2 col-xs-2 control-label">卡号：</label>
                        <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10"><span>{{list.bank_card_num}}</span></div>
                        <div class="clearfix"></div>
                      </div>
                      <div class="form-group">
                        <label class="col-lg-1 col-md-2 col-sm-2 col-xs-2 control-label">开户银行：</label>
                        <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10">
                          <span>{{list.bank_type}}</span>
                        </div>
                        <div class="clearfix"></div>
                      </div>
                      <div class="form-group">
                        <label class="col-lg-1 col-md-2 col-sm-2 col-xs-2 control-label">支行名称：</label>
                        <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10"><span>{{list.bank_name}}</span></div>
                        <div class="clearfix"></div>
                      </div>
                      <div class="form-group">
                        <label class="col-lg-1 col-md-2 col-sm-2 col-xs-2 control-label">持卡人：</label>
                        <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10"><span>{{list.bank_card_name}}</span></div>
                        <div class="clearfix"></div>
                      </div>
                    </div>
                    <div class="ibox-title" style="border-top: none;">
                      <h5>其他信息</h5>
                    </div>
                    <div class="ibox-content form-horizontal accountContent">
                      <div class="form-group">
                        <label class="col-lg-1 col-md-2 col-sm-2 col-xs-2 control-label">公司地址：</label>
                        <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10">
                        <span>{{array1[0]}}{{array1[1]}}{{array1[2]}}</span><br>
                        <span>{{array[1]}}</span>
                        </div>
                        <div class="clearfix"></div>
                      </div>
                      <div class="form-group">
                        <label class="col-lg-1 col-md-2 col-sm-2 col-xs-2 control-label">手机号码：</label>
                        <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10">
                          <span>{{list.phone}}</span>
                        </div>
                        <div class="clearfix"></div>
                      </div>
                      <div class="form-group">
                        <label class="col-lg-1 col-md-2 col-sm-2 col-xs-2 control-label">邮政编码：</label>
                        <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10"><span>{{list.zip}}</span></div>
                        <div class="clearfix"></div>
                      </div>
                      <div class="form-group">
                        <label class="col-lg-1 col-md-2 col-sm-2 col-xs-2 control-label">传真号码：</label>
                        <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10"><span>{{list.fax}}</span></div>
                        <div class="clearfix"></div>
                      </div>
                      <div class="form-group">
                        <label class="col-lg-1 col-md-2 col-sm-2 col-xs-2 control-label">电子邮箱：</label>
                        <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10"><span>{{list.email}}</span></div>
                        <div class="clearfix"></div>
                      </div>
                      <div class="form-group">
                        <label class="col-lg-1 col-md-2 col-sm-2 col-xs-2 control-label">客服QQ：</label>
                        <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10"><span>{{list.qq}}</span></div>
                        <div class="clearfix"></div>
                      </div>
                      <div class="form-group">
                        <label class="col-lg-1 col-md-2 col-sm-2 col-xs-2 control-label">公司座机：</label>
                        <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10"><span>{{list.landline}}</span></div>
                        <div class="clearfix"></div>
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
      date: '',
      date1: '',
      region: {},
      list:"",
      array:[],
      array1:[],
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

                },
        beforeCreate:function () {
                             var self = this;
                             var param = new Object();
                             param.access_token = store.state.user.access_token
                             param.user_id = store.state.user.userId
                             var data = JSON.stringify(param);

                             $.ajax({
//                                 url:"/company",
                                 url:store.state.baseUrl.data_serv_url+"/system/company",
                                 data:{parameter:data},
                                 type:"post",
                                 dataType:"json",
                                 success:function (data) {
                                     self.list = eval('(' + data.hmac + ')');
//                                     console.log(self.list)
                                     self.array=self.list.address.split(",");
                                     self.array1=(self.array)[0].split("/");
                                 },
                                 error:function () {

                                 }
                             })
        },
    mounted:function () {
      inspinia();
    }

    }

</script>



