import { Injectable } from '@angular/core';
import { Course } from '../interfaces/course';

@Injectable({
  providedIn: 'root',
})
export class CourseschemaService {
  private courses: Course[] = []; //Tom array för kurser

  constructor() {
    this.courses = [];
  }

  //funktion för att lägga till kurs i ramschema
  addCourseToSchema(course: Course): boolean {
    //kontroll
    this.loadFromLocalStorage();
    const storedCourses = this.getCourses();

    //skapa ny kurs
    const newCourse: Course = {
      courseCode: course.courseCode,
      subjectCode: course.subjectCode,
      level: course.level,
      progression: course.progression,
      courseName: course.courseName,
      points: course.points,
      institutionCode: course.institutionCode,
      subject: course.subject,
      syllabus: course.syllabus
    }

    //kontroll om kurs redan finns i localStorage
    if (!storedCourses.some(c => c.courseCode === newCourse.courseCode)) {
      //push till todos array
      this.courses.push(newCourse);
      this.saveToLocalStorage(this.courses);
      return true;
    } else return false;
  }

  //spara till localStorage
  saveToLocalStorage(courses: Course[]): void {
    localStorage.setItem("courses", JSON.stringify(courses)); //spara till localstorge
  }

  //Hämta kurs-array
  getCourses(): Course[] {
    return this.courses; //returnerar kurs-array
  }

  //räkna total kurspoäng
  countCoursePoint(): number {
    let sumPoints: number = 0; //variabel för summa av kurspoäng

    this.getCourses().forEach(c => { //loop som summerar poäng från kurserna
      sumPoints = sumPoints + c.points;
    })
    return sumPoints;
  }

  //hämta från localStorage, lagra i kurs-variabel
  loadFromLocalStorage(): void {
    const storageData = localStorage.getItem("courses");

    if (storageData) {
      this.courses = JSON.parse(storageData); //konvertera till objekt och lagra i variabel
    }
  }

  //ta bort kurs från localStorage
  removeFromLocalStorage(index: number): void {
    let loadedCourses = this.courses;

    if (loadedCourses.length === 1) { //kontroll om array är endas ett värde
      localStorage.clear(); //töm localstorage
      this.courses = [];

      this.saveToLocalStorage(this.getCourses());
    } else {
      loadedCourses.splice(index, 1); //ta bort värde ur array

      this.saveToLocalStorage(loadedCourses); //spara ny array till localstorage
    }
  }
}
