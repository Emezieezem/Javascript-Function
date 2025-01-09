let hasSubmittedAssignment = true   //declaring variable that holds a boolean value
let attendedPreviousClass = true


// Function to check if access to a class is granted
// the function accepts two parameters "hasSubmittedAssignment" and "attendedPreviousClass" 
// If statement checks if both conditions are true

function checkClassAccess(hasSubmittedAssignment, attendedPreviousClass) {
  if (hasSubmittedAssignment && attendedPreviousClass) {
    console.log("Access granted, you can attend the class")
  }

  else {
    console.log("Access denied, submit your assignment and reach out to your class captain")
  }

}

checkClassAccess(hasSubmittedAssignment, attendedPreviousClass);
