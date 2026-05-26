import { Routes } from '@angular/router';
import { Courses } from './pages/courses/courses';
import { Courseschema } from './pages/courseschema/courseschema';
import { PageNotFound } from './pages/page-not-found/page-not-found';
import { Home } from './pages/home/home';

export const routes: Routes = [
    { path: "home", component: Home },
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "courses", component: Courses },
    { path: "courseschema", component: Courseschema },
    { path: "**", component: PageNotFound }
];
