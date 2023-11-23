import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyTestPageComponent } from './my-test-page/my-test-page.component';

const routes: Routes = [
  { path: '/', component: MyTestPageComponent },
  { path: '', redirectTo: '', component: MyTestPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
