// components/drinking-entry/drinking-entry.js
Component({
  /**
   * Component properties
   */
  properties: {
    drinkType: {
      type: String,
      value: 'beer',
    },
    amount: {
      type: Number,
      value: 0,
    },
    timestamp: {
      type: String,
      value: '',
    },
  },

  /**
   * Component initial data
   */
  data: {
    drinkTypes: [
      { name: 'beer', label: '啤酒' },
      { name: 'wine', label: '红酒' },
      { name: 'spirit', label: '白酒' },
      { name: 'cocktail', label: '鸡尾酒' },
    ],
  },

  /**
   * Component methods
   */
  methods: {
    onDrinkTypeChange(e) {
      const drinkType = e.detail.value;
      this.triggerEvent('drinktypechange', { drinkType });
    },

    onAmountChange(e) {
      const amount = parseFloat(e.detail.value);
      this.triggerEvent('amountchange', { amount });
    },

    onSave() {
      const { drinkType, amount, timestamp } = this.properties;
      this.triggerEvent('save', { drinkType, amount, timestamp });
    },
  },
});
