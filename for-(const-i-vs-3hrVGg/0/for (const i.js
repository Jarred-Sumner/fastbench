const fetchedMessage = {
  currencyAmounts: [
    {currency: 'RUB', amount: '100000'}, 
    {currency: 'USD', amount: '100000'}, 
    {currency: 'EUR', amount: '100000'}
  ]
};  
for (const item of fetchedMessage.currencyAmounts) {
    const { currency, amount } = item;
}