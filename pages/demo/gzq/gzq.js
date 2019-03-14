Component({

  behaviors: [],

  properties: {
    myProperty: { // 属性名
      type: String, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: '', // 属性初始值（可选），如果未指定则会根据类型选择一个
      observer(newVal, oldVal, changedPath) {
        // 属性被改变时执行的函数（可选），通常 newVal 就是新设置的数据， oldVal 是旧数
        // 新版本基础库不推荐使用这个字段，而是使用 Component 构造器的 observer 字段代替（这样会有更强的功能和更好的性能）
      }
    },
    myProperty2: String // 简化的定义方式
  },
  data: {
    number1: 1,
    number2: 0,
    numberSum: "?"
  }, // 私有数据，可用于模板渲染

  lifetimes: {
    // 组件生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached() {
      //在组件实例进入页面节点树时执行
      console.log("lifetimes1")

    },
    moved() {},
    detached() {},
  },

  // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
  attached() {}, // 此处attached的声明会被lifetimes字段中的声明覆盖
  ready() {},

  pageLifetimes: {
    // 组件所在页面的生命周期函数
    show() {
    },
    hide() {},
    resize() {},
  },

  methods: {
    onLoad() {
    },
    bindKeyInput(e) {
      this.setData({
        number2: e.detail.value
      })
    },
    // 内部方法建议以下划线开头
    _myPrivateMethod() {
      // 这里将 data.A[0].B 设为 'myPrivateData'
      this.setData({
        'A[0].B': 'myPrivateData'
      })
    },
    _propertyChange(newVal, oldVal) {

    }
  },
  observers: {
    //数据监听器
    'number1, number2': function(numberA, numberB) {
      console.log("748")
      // 在 numberA 或者 numberB 被设置时，执行这个函数
      this.setData({
        numberSum: new Number(numberA) + new Number(numberB)
      })
    }
  }

})