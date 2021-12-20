import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { FilmsComponent } from './films/films.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'upcoming', component: UpcomingComponent },
  { path: 'films', component: FilmsComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: FilmsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
