module.exports = [{
    label: '系统管理',
    icoClass:'el-icon-setting',
    children: [{
      label: '网站管理',
      url:'/about'
    },{
      label: '公众号管理',
      url:'/system/wx'
    }]
  }, {
    label: '一级 2',
    icoClass:'el-icon-setting',
    children: [{
      label: '二级 2-1',
      children: [{
        label: '三级 2-1-1'
      }]
    }, {
      label: '二级 2-2',
      children: [{
        label: '三级 2-2-1'
      }]
    }]
  }, {
    label: '一级 3',
    icoClass:'el-icon-setting',
    children: [{
      label: '二级 3-1',
      children: [{
        label: '三级 3-1-1'
      }]
    }, {
      label: '二级 3-2',
      children: [{
        label: '三级 3-2-1'
      }]
    }]
  }]