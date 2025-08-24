function greet(user) {
    return `Hello ${user.name},has id: ${user.id} human: ${user.isHuman}`;
}
function getAge(age) {
    return age;
}
export { greet, getAge };
export class Point2D {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    distance(anotherPoint) {
        const diffreanceX = this.x - anotherPoint.x;
        const diffreanceY = this.y - anotherPoint.y;
        return Math.sqrt(diffreanceX * diffreanceX + diffreanceY * diffreanceY);
    }
}
export class Point3D extends Point2D {
    constructor(x, y, z) {
        super(x, y);
        this.x = x;
        this.y = y;
        this.z = z;
    }
    distance(anotherPoint) {
        const diffreanceX = this.x - anotherPoint.x;
        const diffreanceY = this.y - anotherPoint.y;
        const diffreanceZ = this.z - anotherPoint.z;
        return Math.sqrt(diffreanceX * diffreanceX +
            diffreanceY * diffreanceY +
            diffreanceZ * diffreanceZ);
    }
}
