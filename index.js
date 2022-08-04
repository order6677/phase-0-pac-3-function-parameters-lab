function introduction(Aki){
    return `Hi, my name is ${Aki}.`;

}

function introductionWithLanguage(Aki,Emberjs){
   return `Hi, my name is ${Aki} and i am learning to program in {Ember.js}.` ;

}

function introductionWithLanguageOptional(Aki, language = "javascript"){
    return ` Hi, my name is ${Aki} and i am learning to program in ${language}.`;
}
