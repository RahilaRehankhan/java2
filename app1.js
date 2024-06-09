
const items = ['biscuits', 'juice', 'cake', 'chips', 'pastry','ice creem','pastery', 'nimko', 'colddrink']
const item = 'cake'
for (let i=0; i<items.length; i++) {
    if(items[i] === item) {
        console.log(item, ' found...')
        found = true
        
    }  
}
console.log('item found: ', found)
