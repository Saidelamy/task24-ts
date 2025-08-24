import { Point2D, Point3D } from "../index";

const p1 = new Point2D(0, 0);
const p2 = new Point2D(3, 4);
console.log("2D Distance:", p1.distance(p2));

const p3 = new Point3D(0, 0, 0);
const p4 = new Point3D(1, 2, 2);
console.log("3D Distance:", p3.distance(p4));
