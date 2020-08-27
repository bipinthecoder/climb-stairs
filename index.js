let input = 5; //No of steps in the stair
let X = [1,3,5];  //Array holding no.of skippable steps in the stair

//Assuming the array is sorted
let top = X[X.length - 1];

//function that returns no.of unique ways to climb steps
function getCount(N){
    if(N <= 1){
        return 1
    }
    if(N == 2){
        return N;
    }
    let j = 0;
    let i = X[j];

    let sum = 0;
    while(i <= top && j < X.length){ //iterating through Array X to find sum
        let diff = N - i
        sum += getCount(diff);
        j ++;
        i = X[j];
    }

    return sum;
    // return getCount(N - 1)+ getCount(N - 2);
}

console.log(getCount(input));
