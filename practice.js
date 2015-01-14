//Once you complete a problem, open up Chrome and check the answer in the console.

var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
}
//Above you're given a function that returns another function which has a closure over the name variable.
//Invoke outer saving the return value into another variable called 'inner'.

  //Code Here

  var inner = outer();

//Once you do that, invoke inner.

  //Code Here

  inner();



//Next problem



var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

  //Code Here

  var calling = callFriend();

  calling('435-215-9248');



//Next Problem



/*
  Write a function called makeCounter that makes the following code work properly.
*/

  //Code Here
  var count = makeCounter();
  count() // 1
  count() // 2
  count() // 3
  count() // 4

/*var makeCounter = function() {
  var num = 0;
  return function() {
    num++;
    console.log(num);
  };
};

//Modify the above code so that the num is passed an initial value when makeCounter is invoked


var makeCounter2 = function(firstNum) {
  var num = firstNum;
  return function() {
    num++;
    console.log(num);
  };
}

//Modify to just use the argument that gets passed in... */

var makeCounter3 = function(firstNum) {

  return function() {
    firstNum++;
    return firstNum;
  };
}

//Next Problem



/*
  Write a function that accepts another function as it's only argument and returns a new function
  (which invokes the original function that was passed in) that can only ever be executed once.
  Once completed, add a second arguments that allows the function to be invoked N number of times.
  After the function has been called N number of times, console.log('STAHHP');
*/

var outer = function(fn) {

  var counter = 0;

  return function() {

    if(counter < 1) {

      fn();

      counter++
    }

  }

}

var test = outer(function(){
  console.log('This only will run once');
});



var nRunner = function(fn) {

  var counter = 0;

  return function() {

    if(counter < 3) {

      fn();

      counter++
    } else {

      console.log('STAHHP');

    }

  }

}

var test2 = nRunner(function(){
  console.log('This only will run 3 times.');
});



