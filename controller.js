exports.stairs = function (req, res) {
  const flights = req.body.Inputs;
  const steps = req.body.StepsPerStride;

  let stairPos = 0;
  let flightPos = 0;
  let countStrides = 0;

  let reached = false;
  while (!reached) {
    // Was it the last flight?
    if (flights.length == flightPos) {
      reached = true
      break
    }
    console.log(stairPos, flights[flightPos])
    // Have we reached the end of this flight?
    if (stairPos >= flights[flightPos]) {
      // Make a turn, always 2
      if (flights.length-1  != flightPos) countStrides += 2;
      // On to the next flight
      ++flightPos;
      stairPos = 0;
    } else {
      stairPos += steps;
      ++countStrides;
    }
  }

  res.json({ Result: countStrides });
}