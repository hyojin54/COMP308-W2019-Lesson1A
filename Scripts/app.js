"use strict";

let myGlobalVariable = 0;

// Selft-Executing Anonymous Function
// ITFE - Immediately Invoked Functon Expression
(function(){
    let myFunctionVariable = 0;

    /** 
     * ver1.
     * 
    function Start() {
        let startVariable = 0;
        console.log("App Started...");
    }
    window.addEventListener("load", Start);
    **/

    /**
     * ver2. 
    //window.addEventListener("load", function () {
    window.addEventListener("load", ()=> {
        let startVariable = 0;
        console.log("App Started...");
    });
    */

    /** ver3. 
    let Start = function() {
        let startVariable = 0;
        myFunctionVariable = "Hyojin";

        //console.log("%c App Started..." + startVariable, "font-size: 20px; color:blue;");
        console.log(`%c App Started... ${myFunctionVariable}`, "font-size: 20px; color:blue;");
    }
    window.addEventListener("load", Start);
    */

    function Start() {
        // log, info, warn, error
        console.log(`%c App Started...`, "font-size: 20px; color:blue;");
    }
    window.addEventListener("load", Start);


})();