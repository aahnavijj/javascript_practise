const name1 = {
    firstName: 'Aahna',
    lastName: 'Vij'
}

const name2 = {
    firstName: 'HEllo',
    lastName: 'world'
}

const fullName = function(home){
  return  console.log(this.firstName, this.lastName, home)
}

fullName.apply(name2, ['delhi'])
fullName.apply(name1,['jammu'])