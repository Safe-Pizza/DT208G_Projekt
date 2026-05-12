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

  addCourseToSchema(course: Course): boolean {
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

    //push till todos array
    this.courses.push(newCourse);
    this.saveToLocalStorage(this.courses);
    return true;
  }

  saveToLocalStorage(courses: Course[]): void {
    localStorage.setItem("courses", JSON.stringify(courses)); //spara till localstorge
  }

  getCourses(): Course[] {
    return this.courses; //returnerar kurs-array
  }

  loadFromLocalStorage(): void {
    const storageData = localStorage.getItem("courses"); //hämta från localstorgae

    if (storageData) {
      this.courses = JSON.parse(storageData); //konvertera till objekt
    }
  }
}
