import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { FilmsComponent } from './films/films.component';
import { RegisterComponent } from './register/register.component';
import { BookingsComponent } from './bookings/bookings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ShowingComponent } from './showing/showing.component';

const routes: Routes = [
  { path: '', component: FilmsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'upcoming', component: UpcomingComponent },
  { path: 'films', component: FilmsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'bookings', component: BookingsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'contact', component: ContactusComponent },
  { path: 'showing/:slug', component: ShowingComponent },
  { path: 'showing/:slug/:show.key/:time', component: BookingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
