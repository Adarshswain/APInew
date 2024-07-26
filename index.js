// const api = "https://jsonplaceholder.typicode.com/posts"
// const promise = fetch(api);
// console.log(api);
// const fetchPromise = fetch("https://jsonplaceholder.typicode.com/posts")
// console.log(fetchPromise);


//step1 to fetch the data 
// const datatofetch = fetch("https://jsonplaceholder.typicode.com/posts")
// console.log(datatofetch);

//step2
// const datatofetch = fetch("https://jsonplaceholder.typicode.com/posts")
// datatofetch.then((data)=>{
//     console.log(data);
// })
//you give the callback to API :- Response {type: 'cors', url: 'https://jsonplaceholder.typicode.com/posts', redirected: false, status: 200, ok: true, …}


//step3
//now get the data in json format
//we retun the json api and promise cahing to do other operation
// const datatofetch = fetch("https://jsonplaceholder.typicode.com/posts")
// datatofetch.then((data)=>{

//     return data.json();
    
// }).then((people)=>{
//     console.log(people);
// })

//it fetch all the data in json format in console


//Step 4
//let use map() functionallty to get specific data
// const datatofetch = fetch("https://jsonplaceholder.typicode.com/posts")
// datatofetch.then((data)=>{

//     return data.json();
    
// }).then((people)=>{
//    const title =  people.map(person=>person.title)
//    var print = document.getElementById("api");
//    print.innerHTML=title
//     console.log(title);
// })

//lets print all the data in ul,li
// var print = document.getElementById("api");
// const datatofetch = fetch("https://jsonplaceholder.typicode.com/posts")
// datatofetch.then(
//     (data)=>{
//         return data.json();
//        // console.log(data);
//     }
// ).then(
//     (value)=>{
//         print.innerHTML = display(value);

//     });

//     function display(value)
//     {
//          const alldata = value.map(person=>`<li>${person.title}</li>`)
//           return `<ul>${alldata}</ul>`
//     }




