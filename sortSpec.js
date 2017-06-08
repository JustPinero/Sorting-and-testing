describe('BubbleSort', function() {
  var testArray = [10,9,2,6,8, 3, 4, 5, 7];
  var testArr =[10,9,2,6,8, 3, 4, 5, 7];
  // beforeEach(function() {
  // });

  it('sorts using a bubble sort', function() {
    expect(bubbleSort(testArray)).toEqual(testArr.sort(function(a, b){ return a-b}));
  });
});


describe("mergeSort", function(){
  var testArr = [10,9,2,6,8, 3, 4, 5, 7];

  it("sorts an array usinga merge sort recursive function", function(){
    expect(mergeSort(testArr)).toEqual(testArr.sort(function(a, b){ return a-b}));
  });
});
