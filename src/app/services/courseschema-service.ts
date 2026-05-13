import { Injectable, Signal } from '@angular/core';
import { Course } from '../interfaces/course';

@Injectable({
  providedIn: 'root',
})
export class CourseschemaService {
  private courses: Course[] = []; //Tom array för kurser

  constructor() {
    this.courses = [];
  }

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

    if (!storedCourses.some(c => c.courseCode === newCourse.courseCode)) {
      //push till todos array
      this.courses.push(newCourse);
      this.saveToLocalStorage(this.courses);
      return true;
    } else return false;
  }

  saveToLocalStorage(courses: Course[]): void {
    localStorage.setItem("courses", JSON.stringify(courses)); //spara till localstorge
  }

  getCourses(): Course[] {
    return this.courses; //returnerar kurs-array
  }

  countCoursePoint(): number {
    let sumPoints: number = 0;

    this.courses.forEach(c => {
      sumPoints = sumPoints + c.points;
    })
    return sumPoints;
  }

  loadFromLocalStorage(): void {
    const storageData = localStorage.getItem("courses"); //hämta från localstorgae

    if (storageData) {
      this.courses = JSON.parse(storageData); //konvertera till objekt
    }
  }

  removeFromLocalStorage(index: number): void {
    const loadedCourses = this.courses; //hämta todosarray

    if (loadedCourses.length === 1) { //kontroll om array är endas ett värde
      localStorage.clear(); //töm localstorage
      this.courses = []; // töm todos array
    } else {
      loadedCourses.splice(index, 1); //ta bort värde ur array

      this.saveToLocalStorage(loadedCourses); //spara ny array till localstorage
    }
  }
}
