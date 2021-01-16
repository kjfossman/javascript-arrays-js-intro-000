chocolateBars = ["snikers", "hundred grand", "kitkat", "skittles"]

addElementToBeginningOfArray = function(array, element){

return [element,...array]
}

destructivelyAddElementToBeginningOfArray = function(array, element){
  array.unshift(element)
  return array
}

addElementToEndOfArray = function(array, element){
  return [...array, element]
}
