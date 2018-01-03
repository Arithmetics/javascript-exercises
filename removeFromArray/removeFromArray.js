var removeFromArray = function() {
 let motherArray = arguments[0];
 let toRemove = [];
 for(i=1;i<arguments.length;i++){
   toRemove.push(arguments[i]);
 }
 toRemove.forEach(function(e){
   let index = motherArray.indexOf(e);
   if (index != -1) {
     motherArray.splice(index,1);
   }
 });
 return motherArray;
}

module.exports = removeFromArray


console.log( removeFromArray(["hello","yo"], "yo"));
