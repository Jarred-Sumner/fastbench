const fetchedMessage = {
  currencyAmounts: [
    {currency: 'RUB', amount: '100000'}, 
    {currency: 'USD', amount: '100000'}, 
    {currency: 'EUR', amount: '100000'}
  ]
};    
    fetchedMessage.currencyAmounts.forEach((item) => {
      const { currency, amount } = item;
    });
