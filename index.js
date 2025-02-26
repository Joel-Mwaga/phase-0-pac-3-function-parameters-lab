introduction();
function introduction(name=Aki){
    return(`Hi, my name is ${name}.`);
}
introductionWithLanguage();
function introductionWithLanguage(name=Aki, language=Ember.js){
    return(`Hi, my name is ${name} and I am learning to program in ${language}.`)
}

introductionWithLanguageOptional();
function introductionWithLanguageOptional(name= Gracie, language= "JavaScript"){
    return(`Hi, my name is ${name} and I am learning to program in ${language}.`)
}