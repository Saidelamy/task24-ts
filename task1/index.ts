type Tuser = {
  id: number;
  name: string;
  isHuman: boolean;
};
type Status = "fullfild" | "rejected" | "bending";

function greet(user: Tuser): string {
  return `Hello ${user.name},has id: ${user.id} human: ${user.isHuman}`;
}

function getAge<T>(age: T): T {
  return age;
}

export { Tuser, Status, greet, getAge };

export class Point2D {
  constructor(public x: number, public y: number) {}

  distance(anotherPoint: Point2D): number {
    const diffreanceX = this.x - anotherPoint.x;
    const diffreanceY = this.y - anotherPoint.y;
    //
    return Math.sqrt(diffreanceX * diffreanceX + diffreanceY * diffreanceY);
  }
}

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
