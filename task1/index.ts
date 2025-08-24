// type
type Tuser = {
  id: number;
  name: string;
  isHuman: boolean;
};
// function
function greet(user: Tuser): string {
  return `Hello ${user.name},has id: ${user.id} human: ${user.isHuman}`;
}
// union
type Status = "fullfild" | "rejected" | "pending";

// enum
enum enumStatus {
  Pending, // 0
  InProgress, // 1
  Done, // 2
}

let taskStatus: enumStatus = enumStatus.Pending;

if (taskStatus === enumStatus.Pending) {
  console.log("loader...");
}

// generic
function getAge<T>(age: T): T {
  return age;
}
// module
export { Tuser, Status, greet, getAge };

// 2d get length of two points
export class Point2D {
  constructor(public x: number, public y: number) {}

  distance(anotherPoint: Point2D): number {
    const diffreanceX = this.x - anotherPoint.x;
    const diffreanceY = this.y - anotherPoint.y;
    //
    return Math.sqrt(diffreanceX * diffreanceX + diffreanceY * diffreanceY);
  }
}

// 3d get length of three points

export class Point3D extends Point2D {
  constructor(public x: number, public y: number, public z: number) {
    super(x, y);
  }

  distance(anotherPoint: Point3D): number {
    const diffreanceX = this.x - anotherPoint.x;
    const diffreanceY = this.y - anotherPoint.y;
    const diffreanceZ = this.z - anotherPoint.z;
    return Math.sqrt(
      diffreanceX * diffreanceX +
        diffreanceY * diffreanceY +
        diffreanceZ * diffreanceZ
    );
  }
}
