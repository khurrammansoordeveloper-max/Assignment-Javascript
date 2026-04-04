function deepComp(obj1, obj2) {
  // Check if both are strictly equal (covers primitives)
  if (obj1 === obj2) return true;

  // If either is null or not an object, they are not equal
  if (obj1 === null || typeof obj1 !== 'object' ||
      obj2 === null || typeof obj2 !== 'object') {
    return false;
  }

  // Get property keys, ignoring methods (functions)
  const keys1 = Object.keys(obj1).filter(key => typeof obj1[key] !== 'function');
  const keys2 = Object.keys(obj2).filter(key => typeof obj2[key] !== 'function');

  // Check if number of properties differ
  if (keys1.length !== keys2.length) return false;

  // Check each property
  for (let key of keys1) {
    // Ensure the second object has the key
    if (!keys2.includes(key)) return false;

    const val1 = obj1[key];
    const val2 = obj2[key];

    // If both are arrays, compare arrays
    if (Array.isArray(val1) && Array.isArray(val2)) {
      if (val1.length !== val2.length) return false;
      for (let i = 0; i < val1.length; i++) {
        if (!deepComp(val1[i], val2[i])) return false;
      }
    } 
    // If both are objects, recurse
    else if (typeof val1 === 'object' && typeof val2 === 'object') {
      if (!deepComp(val1, val2)) return false;
    } 
    // Else compare primitives
    else {
      if (val1 !== val2) return false;
    }
  }

  return true;
}
console.log(deepComp(a,b)); // -> true
console.log(deepComp(a,c)); // -> false
console.log(deepComp(a,d)); // -> false
console.log(deepComp(a,e)); // -> false
console.log(deepComp(a,f)); // -> false