export const directives = {
  /**
   * 输入框得到焦点
   */
  focus: {
    inserted: (el) => {
      setTimeout(() => {
        el.querySelector('input').focus();
      }, 100);
    },
    componentUpdated: (el) => {
      setTimeout(() => {
        el.querySelector('input').focus();
      }, 100);
    },
  },
  /**
   * 返参金额的处理
   * @param { string } point 小数点类型
   * @example v-moneyType.point 小数点后两位
  */
  money: {
    inserted: (el, binding) => {
      const value = el.textContent;
      if (typeof Number(value) !== 'number') return;
      let valText = '￥0';
      const { point } = binding.modifiers;
      if (point) valText = value ? value >= 0 ? `￥${Number(value).toFixed(2)}` : `-￥${Math.abs(Number(value.toFixed(2)))}` : '￥0.00';
      else valText = value >= 0 ? `￥${value}` : `-￥${Math.abs(value)}`;
      el.innerHTML = `${valText}`;
    },
  },
  /**
   * 参数为空的处理
  */
  params: {
    inserted: (el) => {
      const value = el.textContent;
      el.innerHTML = `${value}` || '-';
    },
  },
  /**
   * title
   * 文字超出显示，绑定title，鼠标hover事件显示内容
   */
  title: {
    inserted: (el) => {
      el.parentNode.style.position = 'relative';
      const titleDiv = document.createElement('div');
      titleDiv.innerHTML = el.textContent;
      titleDiv.setAttribute('class', 'title-hover');
      const bdDiv = document.createElement('div');
      bdDiv.setAttribute('class', 'border-div');
      titleDiv.appendChild(bdDiv);
      el.setAttribute('class', 'text-overflow');
      el.onmouseover = () => {
        el.parentNode.appendChild(titleDiv);
      };
      el.onmouseout = () => {
        el.parentNode.removeChild(titleDiv);
      };
    },
  },
};
