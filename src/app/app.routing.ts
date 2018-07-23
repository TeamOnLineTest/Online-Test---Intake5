import { Routes, RouterModule } from '@angular/router';



import { AppComponent } from './app.component';
import { MasterComponent } from './master/master.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { UserTypesComponent } from './user-types/user-types.component';
import { UsersComponent } from './users/users.component';

import { SubjectsComponent } from './subjects/subjects.component';
import { TakersComponent } from './takers/takers.component';
import { ProfileSettingComponent } from './profile-setting/profile-setting.component';
import { QuestionsComponent } from './questions/questions.component';
import { MultipleChoiceComponent } from './multiple-choice/multiple-choice.component';
const appRoutes: Routes = [ 
    { path: 'login', component: LoginComponent },
      { path: '', component: MasterComponent,
        children: [
          { path: '', component: UsersComponent },
          { path: 'users', component: UsersComponent },
          { path: 'user-types', component: UserTypesComponent},          
          { path: 'subjects', component: SubjectsComponent },
          { path: 'takers', component: TakersComponent },
          { path: 'profile-setting', component: ProfileSettingComponent },
          { path: 'questions', component: QuestionsComponent },
          { path: 'multiple-choice', component: MultipleChoiceComponent }     
        ]
      }
];
export const routing = RouterModule.forRoot(appRoutes);


