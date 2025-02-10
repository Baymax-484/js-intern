console.log("ARRAY METHODS")
console.log()
console.log("Array Length Method")
const names=['john','doe','elon','musk']
let size = names.length
console.log("Array Length is "+ size)
console.log()

console.log("To String Method")
strng = names.toString()
console.log(strng)
console.log()

console.log('at Method')
postn=names.at(3)
console.log(postn)
console.log()

console.log('join Method')
joined=names.join('&')
console.log(joined)
console.log()

console.log('Push Method')
pushed=names.push('Bill')
console.log(pushed)
console.log(names)
console.log()

console.log('POP Method')
popped=names.pop()
console.log(popped)
console.log()

console.log('Shift Method')
shifted=names.shift()
console.log(shifted)
console.log(names)
console.log()

console.log('Unshift Method')
unshifted=names.unshift('gates')
console.log(unshifted)
console.log(names)
console.log()

console.log('Delete Method')
arr_del=delete names[2];
console.log(arr_del)
console.log(names)
console.log()

console.log('Flat Method')
grp_arr=[['hello','hi'],['namaste'],[names]]
flat_arr=grp_arr.flat()
flat_arr=flat_arr.flat()
console.log(flat_arr)
console.log()


console.log('Concat Method')
last_name=['gates','musk','khan']
concated=last_name.concat(names);
console.log(concated)
console.log()

console.log('Copy-Within Method')
in_arr=names.copyWithin(2,0,1)
console.log(in_arr)
console.log(names)
console.log()

console.log('ARRAY SEARCH METHODS')
console.log()
console.log('indexOf() Method')
in_of=names.indexOf('musk')
console.log(in_of)
console.log()

console.log('lastindexof() Method')
la_of=names.lastIndexOf('gates')
console.log(la_of)
console.log()

console.log('includes() Method')
inc_arr=names.includes('elon')
// inc_arr=names.includes('gates')
console.log(inc_arr)
console.log()



