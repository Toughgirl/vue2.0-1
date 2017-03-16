/**
 * Created by Jing on 2017/1/4.
 */
import login from '../store/login'
import forgetPassword from '../store/user/forgetPassword.vue'
//import index from '../store/index'
import index from '../components/index'
import _storeList from '../components/storeManagement/_storeList.vue'
import storeDetail from '../components/storeManagement/storeDetail.vue'
import storeEdit from '../components/storeManagement/storeEdit.vue'
import storeNew from '../components/storeManagement/storeNew.vue'


import returnList from '../components/businessManagement/returnList.vue'
import ReturnOrderDetail from '../components/businessManagement/returnDetail.vue'

import purchaseList from '../components/businessManagement/purchaseList.vue'
import purchaseDetail from '../components/businessManagement/purchaseDetail.vue'

import carParts from '../components/businessManagement/carParts.vue'
import carPartsDetail from '../components/businessManagement/carPartsDetail.vue'
import account from '../components/companyInformation/account.vue'
import accountEdit from '../components/companyInformation/accountEdit.vue'
import personal from '../components/companyInformation/personal.vue'
import personalEdit from '../components/companyInformation/personalEdit.vue'
import callback from '../components/companyInformation/callback.vue'
import changePassWord from '../components/companyInformation/changePassWord.vue'


import SettledList from '../components/financialManagement/SettledList.vue'
import SettledDetail from '../components/financialManagement/SettledDetail.vue'
import TransactionList from '../components/financialManagement/TransactionList.vue'
import TransactionDetail from '../components/financialManagement/transcationDetail.vue'

import messageList from '../components/message/messageList.vue'
//路由规则设置
// auth true登录才能访问，false不需要登录，默认true

export default [
  {
    path: '/login', //登录
    meta: { auth: false },
    component:  login
  },
  {
    path: '/forgetPassword', //忘记密码
    meta: { auth: true},
    component:  forgetPassword
  },
  {
    path: '/index', //首页
    meta: { auth: false },
    component:  index
  },
  {
    path: '/returnList',//退货管理
    meta: { auth: false },
    component:  returnList
  },
  {
    path: '/ReturnOrderDetail/:id',//退货详情
    meta: { auth: false },
    component:  ReturnOrderDetail
  },
  {
    path: '/carParts',//全车件管理
    meta: { auth: false },
    component:  carParts
  },
  {
    path: '/carPartsDetail/:id',//全车件详情
    meta: { auth: false },
    component:  carPartsDetail
  },
  {
    path: '/purchaseList',//采购管理
    meta: { auth: false },
    component: purchaseList
  },
  {
    path: '/purchaseDetail/:id',//采购详情
    meta: { auth: false },
    component: purchaseDetail
  },
  {
    path: '/_storeList',//门店管理
    meta: { auth: false },
    component:  _storeList
  },
  {
    path: '/storeDetail/:id',//门店管理
    meta: { auth: false },
    component:  storeDetail
  },
  {
    path: '/storeEdit/:id',//门店管理
    meta: { auth: false },
    component:  storeEdit
  },
  {
    path: '/account',//运营商信息
    meta: { auth: false },
    component: account
  },
  {
    path: '/accountEdit',//运营商信息
    meta: { auth: false },
    component: accountEdit
  },
  {
    path: '/personal',//个人中心
    meta: { auth: false },
    component: personal
  },
  {
    path: '/personalEdit',//个人中心修改资料
    meta: { auth: false },
    component: personalEdit
  },
  {
    path: '/changePassWord',//修改密码
    meta: { auth: false },
    component: changePassWord
  },
  {
    path: '/TransactionList',//交易明细
    meta: { auth: false },
    component: TransactionList
  },
  {
    path: '/TransactionDetail/:id',//结算管理详情
    meta: { auth: false },
    component: TransactionDetail
  },
  {
    path: '/storeNew',//结算管理详情
    meta: { auth: false },
    component: storeNew
  },
  {
    path: '/SettledList',//结算管理
    meta: { auth: false },
    component: SettledList
  },
  {
    path: '/SettledDetail/:id',//结算管理详情
    meta: { auth: false },
    component: SettledDetail
  },
  {
    path: '/SettledDetail/:id',//结算管理详情
    meta: { auth: false },
    component: SettledDetail
  },
  {
    path: '/callback',//信息管理
    meta: { auth: false },
    component: callback
  },
  {
    path: '/messageList',//信息管理
    meta: { auth: false },
    component: messageList
  },
  {
    path: '*', //其他页面，强制跳转到登录页面
    redirect: '/login'
  }
]

