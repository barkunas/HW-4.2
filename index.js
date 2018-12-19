var drinkStorage = new HashStorage();


function addDrink(){
    var newKey = document.forms['forma'].elements['drinkName'].value;
    var newValue = {};
    var isAlco = document.querySelector('#alco').checked?true:false;
    var ingredients = document.forms['forma'].elements['ingredients'].value;
    var formula = document.forms['forma'].elements['formula'].value;
    newValue["isAlco"] = isAlco;
    newValue["ingredients"] = ingredients;
    newValue["formula"] = formula;
    drinkStorage.addValue(newKey,newValue)
    addOnStage();
};
function addOnStage() {
    main.innerHTML = "";
    for(e in drinkStorage){
        main.innerHTML += 
        '<div class="box">'+
        '<div class="box-body">'+
        (drinkStorage[e]['isAlco']?'<p class="AlcoFree">alcoholFREE</p>':'<p class="Alco">ALCOHOL</p>')
        +'<p class="posted">'+e+'</p>'+
        '<h2>'+drinkStorage[e]['formula']+'</h2>'+
        '<p class="text">'+drinkStorage[e]['ingredients']+'</p>'+
        '<div onclick="'+
        'deleteFromStage(\''+e+'\')'+
        ';" id="btn" class="button7">удалить рецепт</div>'
    }
}
function deleteFromStage(key){
    drinkStorage.deleteValue(key);
    addOnStage();
}