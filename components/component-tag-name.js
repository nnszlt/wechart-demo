// components/component-tag-name.js
Component({
  properties: {
    list: String
  },
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  methods: {
    onTap: function(e) {
      console.log(e)
      var myEventDetail = {
        "cc": this.data.list
      } // detail对象，提供给事件监听函数
      var myEventOption = {
        "bubbles": false,
        "capturePhase": false
      } // 触发事件的选项  bubbles 事件是否冒泡; composed事件是否可以穿越组件边界，为false时，事件将只能在引用组件的节点树上触发，不进入其他任何组件内部;capturePhase事件是否拥有捕获阶段
      this.triggerEvent('myevent', myEventDetail, myEventOption)
    }
  }
})