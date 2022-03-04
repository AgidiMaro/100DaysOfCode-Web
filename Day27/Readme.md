continued with the react youtube video and worked on the react-advanced file in Day 26

- Took time to understand useEffects, useEffects run after every render
- hooks such as useState and useEffect cannot be placed in a conditionals but they a conditional can be set inside them
- useEffect(()=>{}, []) set dependcy list to [] to make the useEffect only run on the initial render
- include return statement (a function) to run a cleanup function
- hooks should always be declared in a component
- read up the JS short circuit operations (||, && ).
  - For a||b, if both are true, a is returned. if a is false, b is returned
  - a&&b , if a is true, return b. if a is false, return nothin
