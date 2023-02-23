import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { filter, map } from 'rxjs';
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
  // brandById: Brand = {} as Brand
  constructor(private brandService: BrandService, private matDialog: MatDialog, public matDialoRef: MatDialogRef<BrandDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private brandDialogService: BrandService) { }

  ngOnInit(): void {
    this.getAllBrands()
  }

  getAllBrands() {
    this.brandService.getBrand().subscribe({
      next: (brand) => {
        console.log(brand);

        this.allBrands = brand.results
      }
    })

  }

  editBrand(id: string | undefined) {
    const brandDialogRef = this.matDialog.open(BrandDialogComponent, {
      minHeight: "200px",
      minWidth: "400px",
      maxHeight: "70vh",
      maxWidth: "50vw",

    })
    // const brandById: Brand = this.allBrands.find(singleBrands => singleBrands.id == id)
    // brandById.name = this.data.name;
  }

  deleteBrand(id: string | undefined) {



  }

}
