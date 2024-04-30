const data = [...Array(10000)].map(() =>  
 [...Array(~~(Math.random() * 10  + 3))].map(() =>
    String.fromCharCode(Math.random() * (123 - 97) + 97)
 ).join('') 
)