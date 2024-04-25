if(true) {
    var a=10;
     let b=5;
    const c=6;
}
console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const userName = "minaaz";
    function two() {
      const website = "myWebsite";
      console.log(userName);
    }
    // console.log(website); not accessable bcs it's block scope var
    two();
  }
  one();