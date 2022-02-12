//Sequence Practice Problems   USE RANDOM FUNCTION
{let RANDOMfunction= Math.floor(Math.random()*10);
console.log(RANDOMfunction);}
//Use Random to get Dice Number between 1 to 6
{
    let Dicenumber= Math.floor(Math.random()*10)%6;
    console.log(Dicenumber);
}
//Add two Random Dice Number and Print the Result
{
    let a = Math.floor(Math.random()*10);
    let b = Math.floor(Math.random()*10);
    let c = a+b;
    console.log("two add numbers value:"+ c);
}
//Use Script & Debug – Write a program that reads 5 Random 2 Digit values ,then find their sum and the average
{
    let twoDigNum;
let sum=0;
for (let i = 0; i < 5; i++)
{
    twoDigNum = Math.floor(Math.random() * 100) ;
    console.log('Number = ' + twoDigNum);
    //addinng random digits
    sum +=twoDigNum;   
}  
// finding sum and average 
console.log('Sum of 5 two digits number is = ' + sum);
console.log('Average of the sum of the 5 two digits number is = ' + sum/5);

}