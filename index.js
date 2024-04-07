// code your solution here
function SaturdayFun(activity="roller-skate") {
   return `This Saturday, I want to ${activity}!`
}

const mondayWork = function (activity="go to the office") {
   return `This Monday, I will ${activity} .`
}

function wrapAdjective(string="*") {

   return function(adjective="special") {
    return   `${string} You are ${adjective} ${string}`
   }
}

