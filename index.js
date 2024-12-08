// code your solution here
// Function declaration: saturdayFun
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Function expression: mondayWork
  const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };
  
  // Function: wrapAdjective
  function wrapAdjective(wrapper = "*") {
    return function(adjective) {
      return `You are ${wrapper}${adjective}${wrapper}!`;
    };
  }

  