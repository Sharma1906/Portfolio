import { Routes } from '@angular/router';
import { Home } from './pages/home/home';       
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';          
import{Projects} from './pages/projects/projects'; 
import { Certificates } from './pages/certificates/certificates';
export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: 'projects', component: Projects },
  { path: 'certificates', component: Certificates }
];

