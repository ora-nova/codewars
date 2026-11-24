function manhattanDistance(pointA, pointB){
    let distance=0;
    distance=Math.abs(pointA[0]-pointB[0])+Math.abs(pointA[1]-pointB[1]);
    return distance;
      }
      console.log(manhattanDistance([8,1],[2,1]))