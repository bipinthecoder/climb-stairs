let input = 3;

//function that returns no.of unique ways to climb steps
function getCount(N){
    if(N <= 1){
        return 1
    }
    if(N == 2){
        return N;
    }
    return getCount(N - 1)+ getCount(N - 2);
}

console.log(getCount(input));