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

  saveToLocalStorage(course: Course): void {
    localStorage.setItem("courses", JSON.stringify(course)); //spara till localstorge
  }
}
