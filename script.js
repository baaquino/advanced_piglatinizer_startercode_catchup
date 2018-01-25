// quick fix for Cloud9 warning:
/* global $ */

// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an "ay", or if a word
// begins with a vowel you just add "yay" to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkway.

$(document).ready(function() {
    
    /*

    */
    // This function should return true if the input word starts with a vowel,
    // otherwise it should return false.
    function wordStartsWithVowel(word) {
        var vowel = "e";
        if (word.charAt(0) === vowel){
            return true;
            }
        var vowel = "a";
        if (word.charAt(0) === vowel){
            return true;
            }
        var vowel = "i";
        if (word.charAt(0) === vowel){
            return true;
            }
        var vowel = "o";
        if (word.charAt(0) === vowel){
            return true;
            }
        var vowel = "u";
        if (word.charAt(0) === vowel){
            return true;
        }
        else{
            return false;}
        
    }
    var testWord2 = word;
    var testResult2 = wordStartsWithVowel(testWord2);
    
    // Appends "yay" to the end of the word and returns the word.
    function appendYayToWord(word) {
        return word + "yay";
    }
    var aWord = word;
    var result = appendYayToWord(aWord); 
    // Moves the first consonant to the end of the word, appends "ay" to the end of the word,
    // and returns the word.
    function convertWordWithConsonant(word) {
        var con= word.charAt(0);
        var sub= word.substring(1);
        return sub + con + "ay";
    }
    var testWord4 = word;
    var testResult4 = convertWordWithConsonant(testWord4);
    
    // If the word starts with a vowel, return the result of appendYayToWord.
    // Otherwise, return the result of convertWordWithConsonant.
    function convertWordToPigLatin(word) {
        
        if (typedWord = testResult2){
            return result;
        }
        else {
            return testResult4;
        }
        //if((wordStartsWithVowel(word))){
          //  return result; 
        //}
        //else {
          //  return testResult4;
        //}
        
    }
console.log(convertWordToPigLatin);
    // Create a click handler that takes is triggered when the user clicks the translate button.
        $("#translate").click(function() {
        var typedWord = $("#word").val();
        $("#output").append(typedWord)
    });
        // Gets a word from the input box
        // Transforms the word to pig latin
        // Displays the result on the screen in the output element
});
