import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BrandService } from 'src/app/services/brand.service';
import { NotificationService } from 'src/app/services/notification.service';
import { Brand } from 'src/models/brand.model';
import { BrandDialogComponent } from '../brand-dialog/brand-dialog.component';

@Component({
  selector: 'app-display-brand',
  templateUrl: './display-brand.component.html',
  styleUrls: ['./display-brand.component.scss']
})

export class DisplayBrandComponent implements OnInit {
  allBrands: Brand[] = [];
  brandById: Brand = {} as Brand;
  isLoadingResults = true;
  isRateLimitReached = false;
  constructor(private dialog: MatDialog, private brandService: BrandService, private matDialog: MatDialog,
    public notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.getAllBrands()
  }

  getAllBrands() {
    this.brandService.getBrand().subscribe({
      next: (brand) => {
        this.isLoadingResults = false;
        this.isRateLimitReached = brand === null;
        console.log(brand);
        this.allBrands = brand.results
      }
    })
  }

  openDialogForm() {
    const brandDialogRef = this.dialog.open(BrandDialogComponent, {
      minHeight: "200px",
      minWidth: "400px",
      maxHeight: "70vh",
      maxWidth: "50vw",

    })

    brandDialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this.getAllBrands();
      }
    })
  }

  editBrand(id: string) {
    this.brandById = this.allBrands.find(singleBrands => singleBrands.id === id) as Brand;
    const brandDialogRef = this.matDialog.open(BrandDialogComponent, {
      data: this.brandById,
      minHeight: "200px",
      minWidth: "400px",
      maxHeight: "70vh",
      maxWidth: "50vw",
    })

    brandDialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this.getAllBrands()
      }
    })
  }

  deleteBrand(id: string) {
    this.brandService.deleteBrand(id).subscribe({
      next: (result) => {
        this.notificationService.showSuccess('Brand deleted successfully')
        this.getAllBrands();
      }, error: (error) => {
        this.notificationService.showError('Something Wrong')
      }
    })
  }
}
