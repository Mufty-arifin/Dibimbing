function catAndMouse(x, y, z) {
    const distToCatA = Math.abs(z - x);
    const distToCatB = Math.abs(z - y);

    if (distToCatA < distToCatB) {
        return "Cat A";
    } else if (distToCatB < distToCatA) {
        return "Cat B";
    } else {
        return "Mouse C";
    }
}

// Example usage
const queries = [
    
    { x: 1, y: 2, z: 3 },
    { x: 1, y: 3, z: 2 }
];

for (const query of queries) {
    const result = catAndMouse(query.x, query.y, query.z);
    console.log(result);
}
