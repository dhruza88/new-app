// TODO: Fix the return statement so that it renders an `h1` heading tag that introduces the creator
function HelloDiv() {
  const name = "david hruza"
  return <h2>Hello I am {name} and my name has {name.length} letters. My name backwards is {name.split("").reverse().join("")}</h2>
}

// TODO: Fix the export statement
// Export statements are ES6 syntax that tell Javascript what "thing" we want to make available outside of this file
export default HelloDiv;
