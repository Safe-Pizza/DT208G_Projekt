import { Routes } from '@angular/router';
import { Courses } from './pages/courses/courses';
import { Courseschema } from './pages/courseschema/courseschema';
import { PageNotFound } from './pages/page-not-found/page-not-found';

export const routes: Routes = [
    { path: "courses", component: Courses },
    { path: "courseschema", component: Courseschema },
    { path: "**", component: PageNotFound }
];
