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
};
