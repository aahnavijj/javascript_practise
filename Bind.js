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

const res = fullName.bind(name2, 'delhi')
console.log(res)
res()

