//"use strict"
//console.log(this)
function xyz(){
   // console.log(this)
}
xyz()
const obj = {
    name :"mani",
    printName : function (){
     //   console.log(this)
    }
}
obj.printName()
const obj2 = {
    name : "mani",
    printName2 : ()=> console.log(this)
}
//obj2.printName2()
const obj3 = {
    name :"deepika",
    printName : function(){
        console.log(this.name)
    }
}
//obj3.printName()
const obj4 ={
    name : "akshay"
}
//obj3.printName.call(obj4)

const obj5 = {
    name : "mani",
    printName : function(){
        const y = ()=>{
            console.log(this)
        }
        y()
    }
}

obj5.printName()


