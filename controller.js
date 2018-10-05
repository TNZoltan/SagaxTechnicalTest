exports.stairs = function (req, res) {
  const flights = req.body.Inputs;
  const steps = req.body.StepsPerStride;

  let stairPos = 0;
  let flightPos = 0;
  let countStrides = 0;
  let lastFlight = flights.length - 1;

  while (lastFlight >= flightPos) {
    // Have we reached the end of this flight?
    if (stairPos >= flights[flightPos]) {
      // Make a turn - always 2 (skip this for the last flight)
      if (lastFlight != flightPos) countStrides += 2;
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