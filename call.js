const name = {
    firstName: 'Aahna',
    lastName: 'Vij'
}

const name2 = {
    firstName: 'HEllo',
    lastName: 'world'
}

const fullName = function(){
  return  console.log(this.firstName, this.lastName)
}

fullName.call(name2)
fullName.call(name)