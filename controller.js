exports.stairs = function (req, res) {
  const flights = req.body.Inputs;
  const steps = req.body.StepsPerStride;

  if (flights.length < 1 || flights.length > 30) {
    res.status(403).send('The stairwell has between 1 and 30 flights inclusive!')
  }
  
  for (let i = 0; i < flights.length; ++i) {
    if (flights[i] > 20) {
      res.status(403).send('Each flight can have a maximum of 20 steps.')
    }
  }

  if (steps < 1 || steps > 4) {
    res.status(403).send('You can stride between 1 and 4 steps inclusive.')
  }

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