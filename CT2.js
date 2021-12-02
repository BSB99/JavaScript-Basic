function Rank(number) {
    const Number = number.split(',');
    const sum = Number.map(a => parseInt(a))
    .reduce((a,b) => a + b);
    return Math.round(sum / Number.length);
  };
  Rank('0,30,0,0,70,100,80,100,99,88,70');
  
  function Clock(time) {
    const Time = time.split(':');
    return [`${Time[0]}시`,`${Time[1]}분`,`${Time[2]}초`];
  };
  Clock("13:05:31");
  
  function gender(a) {
    const result = {};
    const person = a.splice(-a[0])
    .join(" ")
    .split(" ");
    for (let i = 0; i < person.length; i+=2) {
      [key,value] = [person[i],person[i+1]];
      result[key] = value
    };
    return result;
  };
  gender([3,"minjae 남자","sangjun 여자","jiwon 여자"]);
  // gender(["woorim 남자"]);
  
  const obj = {};
  const arr = ["woorim 남자", "seung 남자"];
  arr.map(el => {
    obj[el.split(" ")[0]] = el.split(" ")[1];
  });
  console.log(obj)
  
  
  function Word(W) {
      return W.split(" ").reverse().join(' ');
  };
  console.log(Word('this is a test'));
  
  function number(aa) {
    const aaa = aa.split(",");
    const aab = aaa.map(n => parseInt(n)).filter(nu => nu % 2 ===0);
    return aab
    // for (let i = 0; i < aa.length; i++)
  };
  number('1,2,3,4,5')