// Assignment # 21-25

// 1. Write a program that takes two user inputs for first and 
// last name using prompt and merge them in a new variable 
// titled fullName. Greet the user using his full name.

// let firstName = prompt("Enter your First Name")
// let lastName = prompt("Enter your last Name")
// let fullName = firstName + " " + lastName
// console.log(fullName);

// ******************************************************************************

// 2. Write a program to take a user input about his favorite 
// mobile phone model. Find and display the length of user 
// input in your browser

// let userInput = prompt("which mobile model is your favorite")

// let userLenght = userInput.length

// document.write(`My favorite mobile model is : ${userInput}`)
// document.write(`\n The length of userInput is ${userLenght}`)

// ************************************************************************************

// 3. Write a program to find the index of letter “n” in the word 
// “Pakistani” and display the result in your browser .


// let title = "Pakistani"
// document.write(`String ${title}`)
// document.write(`The index of "n" is ${title.indexOf("n")}`)


// ************************************************************************************

// 4. Write a program to find the last index of letter “l” in the 
// word “Hello World” and display the result in your browser


// let title = "Hello World"
// document.write(`String ${title}`)
// document.write(`The Lastindex of "l" is ${title.lastIndexOf("l")}`)


// ************************************************************************************

// 5. Write a program to find the character at 3rd index in the 
// word “Pakistani” and display the result in your browser.


// let title = "Pakistani"
// document.write(`String ${title}`)
// document.write(`The character is 3rd index is ${title.charAt(3)}`)


// ***********************************************************************************

// 7. Write a program to replace the “Hyder” to “Islam” in the 
// word “Hyderabad” and display the result in your browser.

// let city = "Hyderabad"
// document.write(`The city is : ${city}`)
// document.write(`After Replacement : ${city.replace("Hyder", "Islam")}`)

// ***********************************************************************************

// 8. Write a program to replace all occurrences of “and” in the 
// string with “&” and display the result in your browser.


// var message = "Ali and Sami are best friends. They play cricket and football together"
// document.write(message.replaceAll("and","&"))


// ***********************************************************************************

// 9. Write a program that converts a string “472” to a number 
// 472. Display the values & types in your browser.

// let value = "472"

// document.write( `Value: ${value}` )
// document.write(`Type: ${typeof(value)}`)

// let value2 = value
// document.write( `Value: ${value2}` )
// document.write(`Type: ${typeof Number(value2)}`)


// ***********************************************************************************

// 10.   Write a program that takes user input. Convert and 
// show the input in capital letters.

// let userInput = prompt("Enter any string")
// document.write(userInput.toUpperCase())


// ***********************************************************************************

// 11.    Write a program that takes user input. Convert and 
// show the input in title case.


// let userInput = prompt("Enter any string")
// document.write(totitleCase(userInput))

// document.write(userInput.totitleCase())

// these makes an error 


// ***********************************************************************************

// 12.    Write a program that converts the variable num to string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

// var num = 35.36 ;
//  let str = String(num) ;
//  document.write(`String : ${str}`) ;
//  document.write(`Result : ${str.replace(".","")}`) ;


// ***********************************************************************************

// 13. Write a program to take user input and store username 
// in a variable. If the username contains any special symbol 
// among [@ . , !], prompt the user to enter a valid username. 
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

// let username = prompt("Enter your username")

// if(username.includes("@") || username.includes(",") || username.includes("!") || username.includes(".")){
//     alert("Please enter a valid username")
// }else{
//     document.write(username)
// }

// ***********************************************************************************

// 14.    You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array. After searching, prompt the user whether the given 
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user 
// enters cookie, Cookie, COOKIE or coOkIE, program 
// should inform about its availability. Example:


// let arr = ["cake","apple pie","cookie","chips","patties"];

// let input = prompt("Which item do you want")
// if(input == arr.indexOf){
//     alert(`input is available in our bakery`)
// }else{
//     alert(`input is not available in our bakery`)
// }

// ##%^$^%^&%^^$^


// ***********************************************************************************

// 15.    Write a program to take password as an input from 
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements, 
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII 
// table at the end of this document.


// let input = prompt("Enter your password")
// let password = Number(input)

// if (password.length = 6 && password.charAt(0) != Number){
// document.write(password)
// }else{
//     alert("Please enter a valid password")
// }

// ##%^$^%^&%^^$^


// ***********************************************************************************
// 16.    Write a program to convert the following string to an 
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

// let university = "University of Karachi";

// console.log(university.split());


// ##%^$^%^&%^^$^


// ***********************************************************************************
// 17.    Write a program to display the last character of a user 
// input.


// let username = prompt("Enter your name")
// document.write(username)

// let lastCharacter = username.slice(-1)
// document.write("Last character is : " + lastCharacter)


// ***********************************************************************************

// 18.   You have a string “The quick brown fox jumps over the lazy dog”.
//  Write a program to count number of 
// occurrences of word “the” in given string.

// let text = "The quick brown fox jumps over the lazy dog"


// ##%^$^%^&%^^$^



// ***********************************************************************************

// ***********************************************************************************
// Assignment # 26-30

// ***********************************************************************************
// 1. Write a program that takes a positive integer from user & 
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


// let number = prompt("Enter any number in decimal format")
// document.write(number+"<br/>");

// let round = Math.round(number)
// document.write(round +"<br/>")

// let floor = Math.floor(number)
// document.write(floor +"<br/>")

// let ceil = Math.ceil(number)
// document.write(ceil +"<br/>")


// ***********************************************************************************
// 2. Write a program that takes a negative floating point 
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


// let number = prompt("Enter any number in decimal format")
// document.write(number+"<br/>");

// let round = Math.round(number)
// document.write(round +"<br/>")

// let floor = Math.floor(number)
// document.write(floor +"<br/>")

// let ceil = Math.ceil(number)
// document.write(ceil +"<br/>")


// ***********************************************************************************

// 3. Write a program that displays the absolute value of a number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// let number = prompt("Enter any number for the absolute value")
// document.write(number+"<br/>");

// let absolute = Math.abs(number)
// document.write("The absolute value is "+ absolute +"<br/>")


// ***********************************************************************************

// 4. Write a program that simulates a dice using random() 
// method of JS Math class. Display the value of dice in your 
// browser.:

// const min = 1
// const max = 6

// document.write("The dice game with generate random numbers <br/>")
// document.write("The Random number is "+Math.floor(Math.random()*(max-min+1)+min))


// ***********************************************************************************
// 5. Write a program that simulates a coin toss using random() 
// method of JS Math class. Display the value of coin in your 
// browser

// const min = 1
// const max = 2

// document.write("The coin tosed  with generate random numbers <br/>")
// let coin = console.log(Math.floor(Math.random()*(max-min+1)+min))

// if(coin = 2)
// {
//     document.write(`Random coin value is : Head`)
// }
// else if(coin = 1)
// {
// document.write(`Random coin value is : Tail`) 
// }
//  else
//  {
//     document.write(`try gain`) 
//  }

// ##%^$^%^&%^^$^

// ***********************************************************************************

// 6. Write a program that shows a random number between 1 
// and 100 in your browser.

// const min = 1
// const max = 100

// document.write("The Random number between 1 to 100 is :"+Math.floor(Math.random()*(max-min+1)+min))

// ***********************************************************************************
// 7. Write a program that asks the user about his weight. Parse 
// the user input and display his weight in your browser. 
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// let userWeight = prompt("Please enter yoour weight :")
// if (userWeight == 50 || userWeight == "50kgs" || userWeight ==" 50.2kgs" || userWeight == "50.2kilograms"){
//     document.write(userWeight)
// }else{
//     document.write("Please enter your valid weight")
// }

// ***********************************************************************************
// 8. Write a program that stores a random secret number from 
// 1 to 10 in a variable. Ask the user to input a number 
// between 1 and 10. If the user input equals the secret 
// number, congratulate the user.

// const min = 1
// const max = 10
// let randomNumber = Math.floor(Math.random()*(max-min+1)+min)
// console.log(randomNumber)

// let userInput = prompt("Enter a number between 1 and 10")
// if(userInput == randomNumber) {
//     alert("very very congratulations!")
// }else{
//     alert("try for a next time")
// }


// ***********************************************************************************
// Assignment # 31-34
// ***********************************************************************************

// 1. Write a program that displays current date and time in 
// your browser.

// let date = new Date()

// console.log(date);


// ***********************************************************************************
// 2. Write a program that alerts the current month in words. 
// For example December.

// let arr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// let month = new Date();
// let currentMonth = arr[month.getMonth()];

// alert(`Current month = ${currentMonth}`)


// ***********************************************************************************
// 3. Write a program that alerts the first 3 letters of the current 
// day, for example if today is Sunday then alert will show 
// Sun.

// let daysNames = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday','sunday']

// let days = new Date()
// let currentDay = daysNames[days.getDay()]

// alert(`current day ${currentDay.substring(0,3)}`)

// ***********************************************************************************

// 4. Write a program that displays a message “It’s Fun day” if 
// its Saturday or Sunday today.


// let daysNames = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday','sunday']

// let days = new Date()
// let currentDay = daysNames[days.getDay()]
// console.log(`current day ${currentDay}`)

// if (currentDay  = 'saturday' || currentDay === 'sunday')
// {
//     alert("It’s Fun day")
// }else{
//     alert("it's a working day")
// }


// ***********************************************************************************
// 5. Write a program that shows the message “First fifteen 
// days of the month” if the date is less than 16th of the month 
// else shows “Last days of the month”.

// let daysNum = ['1', '2', '3','4', '5', '6', '7', '8', '9', '10', '11','12', '13', '14','15', '16', '17','18', '19', '20', '21', '22','23', '24', '25','26', '27', '28','29', '30']
// let days = new Date()
// let currentDay = daysNum[days.getDay()]
// console.log(currentDay)

// if (currentDay<= 15)
// {
//     alert("First fifteen days of the month")
// }else if(currentDay<= 30 && currentDay > 15){
//     alert("Last days of the month")
// }
// else{
//     alert("days are not found")
// }


// ***********************************************************************************
// 6. Write a program that determines the minutes since 
// midnight, Jan. 1, 1970 and assigns it to a variable that 
// hasn't been declared beforehand. Use any variable you like 
// to represent the Date object.


// ***********************************************************************************
// Assignment # 35-38
// ***********************************************************************************
// 1. Write a function that displays current date & time in your 
// browser.

// function display(){
//     let date = new Date()
//     document.write('date: ' + date)  
// }
// display()

// *************************************************************************

// 2. Write a function that takes first & last name and then it 
// greets the user using his full name.

// let firstName = prompt("Enter your first name")
// let lastName = prompt("Enter your last name")

// function fullName(){
//     let concatenate = firstName+" "+lastName
//     document.write(concatenate)
// }
// fullName()

// ****************************************************************************

// 3. Write a function that adds two numbers (input by user) 
// and returns the sum of two numbers.

// let firstNo = parseInt(prompt("Enter your first number"))
// let lastNo = parseInt(prompt("Enter your second number"))

// function sum(){
//     let addition = firstNo + lastNo
//     document.write(addition)
// }
// sum()

// ********************************************************************************

// 4. Calculator:
// Write a function that takes three arguments num1, num2 
// & operator & compute the desired operation. Return and 
// show the desired result in your browser.

// ^%^$@$%$^%#%^

// ******************************************************************************

// 5. Write a function that squares its argument.

// let value = prompt('enter a number,convert into a square')
// function square(num){
//     document.write(num * num)
// }
// square(value)

// *******************************************************************************

// 6. Write a function that computes factorial of a number.

// function factorial(n){
//     let answer = 1;
//     if (n == 0 || n == 1){
//       return answer;
//     }
//     else if(n > 1){
//       for(var i = n; i >= 1; i--){
//         answer = answer * i;
//       }
//       return answer;
//     }
//     else{
//       return "number has to be positive."
//     }  
//   }
//   let n = parseInt(prompt('enter a number'))

//   answer = factorial(n)
//   console.log("Factorial of " + n + " : " + answer);

// ***********************************************************************************

// 7. Write a function that take start and end number as inputs 
// & display counting in your browser.

// let start = parseInt(prompt("enter first number"))
// let end = parseInt(prompt("enter second number"))

// function display(i) {

//     for (let i = start; i <= end; i++) {
//         console.log(i)
//     }
// }
// display(start, end)

// ***********************************************************************************
// 8. Write a nested function that computes hypotenuse of a 
// right angle triangle. 
// Hypotenuse2 = Base2 + Perpendicular2

// let base = parseInt(prompt("enter base value"))
// let perp = parseInt(prompt("enter perpendicular value"))

// function square(){
//     base = base * base
//     perp = perp * perp
//     function hypoteneus(){
        
//         console.log(base + perp);
//     }
//     hypoteneus();
// }
// square(base, perp)

// *********************************************************************************

// 9. Write a function that calculates the area of a rectangle. 
// A = width * height
// Pass width and height in following manner:
// i.  Arguments as value
// ii.  Arguments as variables

// let width = parseInt(prompt("enter width value"))
// let height = parseInt(prompt("enter height value"))

// function area(){
//     console.log("Area is : " + width*height);
// }
// area(width, height)

// ****************************************************************************************

// 11.    Write a JavaScript function that accepts a string as a 
// parameter and converts the first letter of each word of the 
// string in upper case. 
// EXAMPLE STRING : 'the quick brown fox' 
// EXPECTED OUTPUT : 'The Quick Brown Fox'

// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// document.write(uppercase("the quick brown fox"));

// ************************ THE END **************************
// another chapter is in aonther File
 
























