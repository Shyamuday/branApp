import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BrandDialogComponent } from '../brand-dialog/brand-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(public dialog: MatDialog) { }

  openDialogForm() {
    const brandDialogRef = this.dialog.open(BrandDialogComponent, {
      minHeight: "200px",
      minWidth: "400px",
      maxHeight: "70vh",
      maxWidth: "50vw",

    })
    // brandDialogRef.afterClosed().subscribe()

  }
}
