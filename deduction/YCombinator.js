const minus = xarg => {
  if (xarg > 0) {
    return minus(xarg - 1)
  }
}


const combMins = f => xarg => {
  if (xarg > 0) {
    return f(xarg - 1)
  }
}

combMins(combMins)


