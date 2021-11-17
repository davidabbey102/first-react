// TODO: Fix the return statement so that it renders an `h1` heading tag that introduces the creator
function HelloDiv() {
  const me = "David"
  const people = ["Joe", "Jandy", "Louis", "Brett", "Michael"]
  return (
    <div>
      <h1>Hello {me}, your lucky number is {Math.floor(Math.random()*10)+1}</h1>
      <h1>Hello {people[0]}, your lucky number is {Math.floor(Math.random()*10)+1}</h1>
      {people.map(name=> <h1>Hello {name}, your lucky number is {Math.floor(Math.random()*10)+1}</h1>)}
    </div>
  )
}

// TODO: Fix the export statement
// Export statements are ES6 syntax that tell Javascript what "thing" we want to make available outside of this file
export default HelloDiv;
