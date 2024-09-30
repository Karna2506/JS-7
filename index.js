 
                                 //Task-1

 function isleapyear(year){
    return  ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0));
 }
 console.log(isleapyear(2021));

                                 //Task-2

 function positive(number){
    return (number>=0);
 }
 console.log(positive(-1));


                              //Task-3

 function divisible(number){
    return (number % 3 === 0 && number % 5 === 0)  ;
 }
 console.log(divisible(15));

                               //Task-4

 function isvowel(character){
    return (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u' || 
            character === 'A' || character === 'E' || character === 'I' || character === 'I' || character === 'U') ;
 }
 console.log(isvowel('n'))

                              //Task-5

 function isuppercase(char){
    return (char >= 'A' && char <= 'Z');
 }
 console.log(isuppercase('m'))

  
