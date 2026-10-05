import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { ChatComponent } from './pages/chat/chat.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { UsersComponent } from './pages/users/users.component';
import { ShellComponent } from './shell/shell.component';

export const routes: Routes = [
	{ path: 'login', component: LoginComponent },
	{
		path: '',
		component: ShellComponent,
		canActivate: [authGuard],
		children: [
			{ path: '', pathMatch: 'full', redirectTo: 'dashboard' },
			{ path: 'dashboard', component: DashboardComponent },
			{ path: 'api-work', component: UsersComponent },
			{ path: 'genai-chat', component: ChatComponent },
		],
	},
	{ path: '**', redirectTo: 'dashboard' },
];
