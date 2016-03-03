<html>

var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]; 


var myFunction = function (arr) {

    for (i = 0; i < arr.length; i++){
        var returnThis = ''; 

        if (arr[i] % 3 === 0 ){
            returnThis = returnThis+'Fizz'; 
        } 

         if (arr[i] % 5 === 0 ){
            returnThis = returnThis+'Buzz'; 
        } 

        if (arr[i] % 5 !== 0 && arr[i] % 3 !== 0) {
            returnThis = arr[i];  
        }
        
        console.log(returnThis);

        returnThis = ''; 
    }

}

</html>