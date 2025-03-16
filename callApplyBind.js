const mani = {
    name : "mani",
    lastName : "sekar",
    printFullName : function(){
        console.log(this.name + " "+ this.lastName)
    }
}
const printFullAddress = function( state, country){
    console.log(this.name + " "+this.lastName + " "+ state + " "+country)
}
const ruthu = {
    name :"ruthu",
    lastName : "prashanth"
}

mani.printFullName()
mani.printFullName.call(ruthu)
printFullAddress.call(mani,"TamilNadu","India")
printFullAddress.call(ruthu,"TamilNadu","India")
printFullAddress.apply(ruthu,["Karnataka","India"])
const ruAddress = printFullAddress.bind(ruthu,"mumbai","India")
ruAddress()
