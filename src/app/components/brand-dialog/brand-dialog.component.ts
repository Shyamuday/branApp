import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogClose } from '@angular/material/dialog';
import { BrandService } from 'src/app/services/brand.service';
import { Brand, ButtonType } from 'src/models/brand.model';

@Component({
  selector: 'app-brand-dialog',
  templateUrl: './brand-dialog.component.html',
  styleUrls: ['./brand-dialog.component.scss']
})
export class BrandDialogComponent implements OnInit {
  brandButton: ButtonType = ButtonType.Add;

  brandList: Brand = {} as Brand;
  brandId: string | null = null;
  brandForm = this.fb.group({
    name: ['', Validators.required],
    logo: ['', Validators.required]
  })

  constructor(private fb: FormBuilder, private brandService: BrandService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addBrand() {
    this.brandList.name = this.brandForm.value.name;
    this.brandList.logo = this.brandForm.value.logo

    this.brandService.postBrand(this.brandList).subscribe({
      next: (result) => {
        alert('Brand added successfully')
        this.brandForm.reset();
        this.dialog.closeAll();
      }
    })

  }



  updateBrand() {

  }


}
