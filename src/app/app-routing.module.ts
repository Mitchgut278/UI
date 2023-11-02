import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumePageComponent } from './resume-page/resume-page.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'resume', component: ResumePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
