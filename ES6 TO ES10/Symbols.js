const desc='my simbol'
const sym = Symbol(desc)
console.log(sym)//error;
console.log(String(sym)==`Symbol(${desc})`)
console.log(sym.description)// pecati simbolot
console.log(sym.description==desc)//TRUE