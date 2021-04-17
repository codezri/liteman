import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileViewerComponent } from './components/file-viewer/file-viewer.component';

const routes: Routes = [
  {
    path: "",
    component: FileViewerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
