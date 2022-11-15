class Person {
  studentID: number;
  studentName: string;
  email: string;
  k1: number;
  k2: number;
  k3t1: number;
  k3t2: number;
  pref!: string;
  concerns!: string;
  constructor(
    studentID: number,
    studentName: string,
    email: string,
    k1: number,
    k2: number,
    k3t1: number,
    k3t2: number,
    pref: string,
    concerns: string,
  ) {
    this.studentID = studentID;
    this.studentName = studentName;
    this.email = email;
    this.k1 = k1;
    this.k2 = k2;
    this.k3t1 = k3t1;
    this.k3t2 = k3t2;
    this.pref = pref;
    this.concerns = concerns;
  }
}

export {Person};