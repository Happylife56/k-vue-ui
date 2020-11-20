export const filters = {
  /**
   * 金额类型
   */
  moneyType: (val) => {
    if (val) return val >= 0 ? `￥${val}` : `-￥${Math.abs(val)}`;
    return `￥${0}`;
  },
  /**
   * 金额浮点类型
   * @param { string } arg
   * @example moneyPoint('table')
   */
  moneyPoint: (val, arg) => {
    if (val) return val.toFixed(2);
    if (arg) return 0;
    return '0.00';
  },
  /**
   * 数据类型
   */
  dataType: (val) => val || 0,
  /**
   * 没有参数的处理
   */
  paramsType: (val) => val || '-',
  /**
   * 限制小数点后两位
   */
  rounding: (val) => val.toFixed(2),
};
