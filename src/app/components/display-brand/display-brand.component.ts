import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BrandService } from 'src/app/services/brand.service';
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
  constructor(private brandService: BrandService, private matDialog: MatDialog,

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

  editBrand(id: string) {
    const brandDialogRef = this.matDialog.open(BrandDialogComponent, {
      minHeight: "200px",
      minWidth: "400px",
      maxHeight: "70vh",
      maxWidth: "50vw",
      data: this.brandById
    })
    brandDialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this.getAllBrands()
      }
    })
    this.brandById = this.allBrands.find(singleBrands => singleBrands.id === id) as Brand;
  }

  deleteBrand(id: string) {
    this.brandService.deleteBrand(id).subscribe({
      next: (result) => {
        alert('Brand deleted successfully')
      }
    })
  }
}
