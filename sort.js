//function takes array returns array
// New array will be sorted integers from least to greatest

function bubbleSort(arr){
  for(var i = 0; i<arr.length-1;i++){
    if(arr[i] > arr[i+1]){
      arr.splice(i, 2, arr[i+1], arr[i]);
      bubbleSort(arr);
    }
  }
  return arr;
}

//console.log(bubbleSort([2,4,5,1,3,9,6,8]));

function mergeSort(arr){

    if(arr.length > 2){
      console.log("Slice 1 :" + arr.slice(0, arr.length/2), "Slice 2  :"+arr.slice(arr.length/2));

      return compare(mergeSort(arr.slice(0, arr.length/2)), mergeSort(arr.slice(arr.length/2)));
    } else{
      return compare(arr.slice(0, arr.length/2),arr.slice(arr.length/2));
    }
}

console.log(mergeSort([9,2,4,1,10,3,7,6,8]));

function compare(arr1, arr2){
  // console.log("arr1:  "+  arr1, "arr2:  "+arr2);
  // console.log("Compare starts");
  resultArr = [];
  while(arr1.length && arr2.length){
    if(arr1[0] > arr2[0]){
      resultArr.push(arr2.shift());
    } else{
      //console.log("arr1:  "+  arr1[0], "arr2:  "+arr2[0]);
      resultArr.push(arr1.shift());
    }
  }
  var result = resultArr.concat(arr1,arr2);
  return result;
}
