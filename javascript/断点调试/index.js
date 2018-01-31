var fn;
function foo(){
  var a =2;
  function bar (){
    console.log(a)
  }
  fn = bar;
}

function bar(){
  fn()
}

foo();
bar();