import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth-guard.service";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { CanDeactivateGuard } from "./servers/edit-server/can-deactivate-guard.service";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerResolver } from "./servers/server/server-resolver.service";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent }, // localhost:4200/
    { path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent }, // localhost:4200/user/something
    ] },
    { path: 'servers', 
      // canActivate: [AuthGuard], 
      canActivateChild: [AuthGuard],
      component: ServersComponent, 
      children: [
      { path: ':id', component: ServerComponent, resolve: {server: ServerResolver} }, // localhost:4200/servers/1
      { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }, // localhost:4200/servers/1/edit
    ] }, 
    // { path: 'not-found', component: PageNotFoundComponent },
    { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
    { path: '**', redirectTo: '/not-found' }
  ];

@NgModule({
    imports: [
        // RouterModule.forRoot(appRoutes, {useHash: true})
        RouterModule.forRoot(appRoutes, {useHash: false})
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}