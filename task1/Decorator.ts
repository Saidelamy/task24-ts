// class decorator
function TestDecrator(constractor: Function) {
  constractor.prototype.login = () => {
    console.log("loged in");
  };
}

@TestDecrator
class User {}

const newUser = new User();

// @ts-ignore
console.log(newUser.login());

// method decorator
function Logger(
  target: object,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const test = descriptor.value;

  descriptor.value = function (...argument: any[]) {
    console.log(`Calling ${methodName} with argumet:`, argument);
    return test.apply(this, argument);
  };
}

class SumNumber {
  @Logger
  add(a: number, b: number): number {
    return a + b;
  }
}

const firstSum = new SumNumber();
console.log("Sum:", firstSum.add(2, 3));
