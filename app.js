// let celsius = 10;
// let fahrenheit = celsius * 1.8 + 32
// console.log(fahrenheit)






// let cash = 55   
// let price = 55
// let difference = cash - price

// if (cash > price) {
//     console.log ( `you paid extra - here's ${difference} dollars change` )
// }
// else if (cash === price) {
//     console.log ("you paid the exact amount, have a nice day!")
// }

// else {
//     console.log (`not enough money - you still owe ${difference * -1} dollars`)
// }





// let cash = 20
// let price = 40
// let isStoreOpen = true

// let str = cash >= price && isStoreOpen ?'give receipt' : 'do not give receipt'

// console.log(str)



// while loop below

// let count = 1

// while (count <= 100) {
//     console.log(count)
//     count = count + 1
// }





// Common interview question below!!!

// for (let i = 1; i <= 20; ++i) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log (`${i} --> Frontend Simplified` )
//     }
//     else if (i % 3 === 0) {
//         console.log (`${i} --> Frontend` )
//     }
//     else if (i % 5 === 0) {
//         console.log (`${i} --> Simplified` )
//     }
//     else {
//         console.log (`${i}`)
//     }
// }







// for (let i = 1; i <= 20; ++i) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log (`${i} ---> Frontend Simplified`)
//     }

//     else if (i % 3 === 0){
//         console.log (`${i} ---> Frontend`)
//     }
//     else if (i % 5 === 0){
//         console.log (`${i} ---> Simplified`)
//     }
//     else {
//         console.log (`${i}`)
//     }

// }




// const str = "frontend Simplified"

// for (let i = 0; i < str.length; i++) {
//         console.log (str[i])

// }



// My attempt at functions... FAIL. start
// function convertCelsiusToFahrenheit (fahrenheit = celsius * 1.8 + 32) {
//         return 6
//         // console.log("${fahrenheit}")
// }

//         console.log(convertCelsiusToFahrenheit(19));
// My attempt at functions... FAIL. end




// function convertCelsiusToFahrenheit (celsius) {
//         let fahrenheit = celsius * 1.8 + 32
//         return fahrenheit
// }

// console.log (convertCelsiusToFahrenheit(0))
// console.log (convertCelsiusToFahrenheit(10))
// console.log (convertCelsiusToFahrenheit(30))











// let grades = [`A+`, `A`, `FAIL`]

// let goodGrades = grades.filter((element) => {
        //         if (element !== `FAIL`) {
                //                 return true;
                
                //         }
                // }) 
                
                // console.log (goodGrades)


// let grades = [`A+`, `A`, `FAIL`]

// let goodGrades = grades.filter(element => element !== `FAIL`)

// console.log (goodGrades)




// second question(my attempt)

// let grades = [`B`, `FAIL`, `FAIL`]

// let badGrades = grades.filter((element) => {
//         if (element !== `FAIL`) {
//                 return true;

//         }
// }) 

// console.log (badGrades)





// third question(my attempt)

// let grades = [`B`, `FAIL`, `FAIL`]

// let badGrades = grades.filter((element) => {
//         if (element !== `FAIL`) {
//                 return false;

//         }
// }) 

// console.log (badGrades)












// let dollars = [1, 5, 10 , 3]

// let cents = dollars.map ((element) =>{
//         console.log (element)
//         return element * 100
// })
// console.log (cents)

// let dollars = [1, 5, 10 , 3]

// let cents = dollars.map (element => element * 100)

// console.log (cents)













// objects ex below

// let users = [
//         {

                
//                 username: 'david',
//                 email: 'david@frontend.com',
//                 password: 'david123',
//                 subscriptionStatus: 'VIP',
//                 discordId: 'david#0001',
//                 lessonsCompleted: [0, 1, 2, 3],
//         },
//         {

                
//                 username: 'david',
//                 email: 'david@frontend.com',
//                 password: 'david123',
//                 subscriptionStatus: 'VIP',
//                 discordId: 'david#0001',
//                 lessonsCompleted: [0, 1, 2, 3],
//         }
// ]


// function login(email, password) {
//         for (let i = 0; i < users.length; ++i) {
//                 if(users[i].email === email) {
//                         if(users[i].password === password) {
//                                 console.log ('log the user in - the details are correct')
//                         }
//                         else {
//                                 console.log('password is incorrect - try again')
//                         }
//                         return;
//                 }
//         }
//         console.log('could not find and email that matches')
//         }

//         login('thisdoesnotexist@frontendsimplified.com', 'wrong password')







// create a register function below

// function register(user) {
//         users.push(user);
// }

// register ({
//         username: "Zen",
//         email: "zen@.com",
//         password: "zen123",
//         subscriptionStatus: "VIP",
//         discordId: "zen#0002",
//         lessonsCompleted: [0, 1],

// });

// console.log (users);










// DOM below



// function toggleDarkMode() {
//         document.querySelector('body').classList.toggle("dark-theme")
//         console.log
// }










//  DOM end above




// not clean Then way below

// const emailRef = document.querySelector(".email");
// console.log(emailRef)

// fetch ("https://jsonplaceholder.typicode.com/users/1").then(response =>
        //         response.json().then(data => {
                //                 console.log(data)
                //                 emailRef.innerHTML = data.email;
                //         })
                // )
                
                
                
                
                
                // clean Then way below 
                
                
// const emailRef = document.querySelector(".email");
                
// fetch ("https://jsonplaceholder.typicode.com/users/1")
// .then((response) => {
//         return response.json();
// })
// .then((data) => {
//         console.log(data);
//         emailRef.innerHTML = data.email
// });

async function  main() {
       await fetch ("https://jsonplaceholder.typicode.com/users/1")
        
}


// 3.1 promises