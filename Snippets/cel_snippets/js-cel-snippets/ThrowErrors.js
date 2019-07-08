function missingArg(name) {
  throw new Error("missing argument in " + name + " function ");
}

function square(a = missingArg(" square")) {
  console.log(a * a);
}

square(10);
square();
