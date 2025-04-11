var data = [2,4,5,1,6,9,8];

console.log(data);
/* sorting order */
for(let i=0; i < data.length; i++){
    for(let j=0; j < data.length - i - 1; j++){
        if(data[j] > data[j+ 1]){
            let temp = data[j];
            data[j] = data[j + 1];
            data[j + 1] = temp
        }
    }
}
/* o/p :  [1, 2, 4, 5, 6, 8, 9] */
console.log(data);



// max & min number
for(let i=0; i < data.length; i++){
    if(data[i] > data[0]){
        data[0] = data[i]
    }
}

/* o/p: 9 */

console.log(data[0]);

var dat1 = "hello world";
 var reversed = '';

  const dd = dat1.split('').reverse().join('');
  console.log(dd);
  

for(let i = dat1.length -1; i >=0; i--){
    reversed += dat1[i]
}


/* duplicate number remove */;

var arr = [1,2,3,5,6,2,3,4,5];


function removeDuplicate(arr){
     return arr.filter((item, index) => arr.indexOf(item) === index)
}

function removeDuplicates(arr){
     return arr.filter((item, index) => arr.indexOf(item) === index)
}

const gf = removeDuplicates(arr);
console.log("duplicate-values " ,  gf);


const dt =  removeDuplicate(arr);
console.log(dt);

for(let i=0; i < dt.length; i++){
    for(let j=0; j < dt.length - i - 1; j++){
        if(dt[j] > dt[j+1]){
         let temp = dt[j];
         dt[j] = dt[j + 1];
         dt[j+1] = temp
        }
    }
}
console.log(dt);

for(let i =0; i < dt.length; i++){
    if(dt[i] > dt[0]){
        dt[0] = dt[i]
    }
}
console.log(dt[0]);


/* anagrams */

function areaAnagrams(st1, st2){
    const steam1 = st1.split('').sort().join('');
    const steam2 = st2.split('').sort().join('');

    return steam1 === steam2
}

const angram = areaAnagrams('ilstern', 'listern');
console.log(angram);
