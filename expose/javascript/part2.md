1. At line 12, the length of prices will be printed (or logged) as vars have a function scope 
2. At line 13, the discounted price (as defined in line 7) of the final item in prices will be printed as vars have a function scope. 
3. At line 14, the final price (the rounded discounted price defined in line 8) will be printed as vars have a function scope. 
4. This function will return an array named discounted that contains the discounted prices. These discounted prices are calculated by iterating over prices array argument and applying the discount argument percentage to each item in prices and rounding to the nearest hundredth. 
5. This will throw an error as i is declared with a let inside the for loop and is block-scoped to just the for loop. This means it is not accessible outside the for loop in the rest of the function. 
6. The will throw an error as discountedPrice is declated with a let inside the for loop and is block-scoped to just the for loop. It is not accessible by the rest of the function. 
7. At line 14, the final price (the rounded discounted price defined in line 8) will be printed as it was declared with let at the start of the function its block-scope extends to the whole function. 
8. This function will return an array named discounted that contains the discounted prices. These discounted prices are calculated by iterating over prices array argument and applying the discount argument percentage to each item in prices and rounding to the nearest hundredth. This is unchanged by switching from var to let as it is declared at the start of the function and is accessible by the whole rest of the function. 
9. This will throw an error as i is declared with a let inside the for loop and is block-scoped to just the for loop. This means it is not accessible outside the for loop in the rest of the function. 
10. It will print the length of the prices array given as an argument for the function. 
11. This function will return an array named discounted that contains the discounted prices. These discounted prices are calculated by iterating over prices array argument and applying the discount argument percentage to each item in prices and rounding to the nearest hundredth. There will not be an error thrown as the const discountedPrice is re-declared at every iteration of the for loop so it is not being reassigned a new value (which would throw an error as it does violate the rules of a const).
12. 
    - a. student.name
    - b. student['Grad Year']
    - c. student.greeting()
    - d. student['Favorite Teacher'].name
    - e. student.courseLoad[0]
13. 
    - a. '32'; the + operator is used for string concatenation so the int 2 is converted to a string and then concatenated to the string '3'.
    - b. 1; the '-' operator isn't used for string concatenation so the string '3' is converted to an int and mathematical substraction will take place. 
    - c. 3; null is converted to 0 and addition is carried out
    - d. '3null'; as '3' is a string, + is used for string concatenation and null is converted to the string 'null' before being appended to the string '3'.
    - e. 4; true is converted to the integer 1 as this operation will be deemed mathematical addition as 3 is an integer. 
    - f. 0. false and null are both converted to 0 as this operation is deemed mathematical addition. 
    - g. '3undefined'; as '3' is a string, + is used for string concatenation and undefined is converted to the string 'undefined' before being appended to the string '3'.
    - h. NaN; as the - operator can only denote a mathematical operation, an attempt is made to convert both values to integers. '3' becomes 3, but undefined cannot be converted into a number so NaN is returned. 
14. 
    - a. true; the string '2' will be converted into an integer for this comparison and, since 2 > 1, true is returned. 
    - b. false; both values will be deemed as strings and compared character by character lexicographically. Since '2' > '1', false will be returned. 
    - c. true; '==' will convert types where necessary and '2' will be converted to an integer which is equivalent to 2. 
    - d. false;'===' will not convert types so as these two values are of different types, false will be returned. 
    - e. false; '==' will convert types so true is converted to 1. Since 1 =/= 2, false will be returned. 
    - f. true; Boolean(2) will evaluate to true, which is equal in both value and type to true, so true is returned. 
15. The '===' operator is a stricter comparison that checks for equivalence in both type and value. The '==' operator will attempt to convert types prior to comparison and only compare values. Therefore it is more flexible. Type coercion is the major difference between these two comparisons. 
16. Refer to part2-question16.js file 
17. It would return the array [2, 4, 6]. This prediction was done by understanding how the function worked by going through it line by line. I understood that the modifyArray() function was constructing a new array by iterating through each element in the input array argument, applying a callback function to each element, and then pushing this element to the new array. The callback function specified was doSomething() which simply multiplied its input value by 2 and returned it. Thus I multiplied each element in the input list by 2 and returned it. Additionally, the order was preserved due to the way pushing works in JS. 
18. Refer to part2-question18.js file
19. The output will be(note that each of these integers will be aon a new line): 1 4 3 2. This is because the console.log() calls for 1 and 4 have no delay set to them. 3 has a delay of 0ms and 2 has a delay of 1000ms so 3 is printed before 2. 

