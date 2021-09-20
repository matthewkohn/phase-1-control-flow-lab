function scuberGreetingForFeet(feet){
  // Write your code here!
  if (feet <= 400) {
    return 'This one is on me!';
  } else if (feet > 2500) {
    return 'No can do.'; 
  } else if (feet > 2000) {
    return 'I will gladly take your thirty bucks.';
  }
}

function ternaryCheckCity(name){
  // Write your code here!
  let city = name === 'NYC' ? 'Ok, sounds good.': 'No go.';
  return city;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case tip = 'generous':
      return 'Thank you so much.';
      break;
    case tip = 'not as generous':
      return 'Thank you.';
      break;
    default:
      return 'Bye.';
  }
}