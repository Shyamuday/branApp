import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogClose, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrandService } from 'src/app/services/brand.service';
import { NotificationService } from 'src/app/services/notification.service';
import { Brand, ButtonType } from 'src/models/brand.model';

@Component({
  selector: 'app-brand-dialog',
  templateUrl: './brand-dialog.component.html',
  styleUrls: ['./brand-dialog.component.scss']
})
export class BrandDialogComponent implements OnInit {
  brandButton: ButtonType = ButtonType.Add;
  addButton: boolean = true;
  updateButton: boolean = false;
  brandList: Brand = {} as Brand;
  brandId: string | null = null;
  brandForm = this.fb.group({
    name: [this.data?.name, Validators.required],
    logo: [this.data?.logo, Validators.required]
  })

  constructor(private fb: NonNullableFormBuilder, private brandService: BrandService, private dialog: MatDialog,
    public matDialogRef: MatDialogRef<BrandDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: Brand,
    public notificationService: NotificationService
  ) { }

  ngOnInit() {
    if (this.data) {
      this.brandButton = ButtonType.Update;
      this.updateButton = true;
      this.addButton = false;
    }
  }

  addBrand() {
    this.brandList.name = this.brandForm.value.name as string;
    this.brandList.logo = this.brandForm.value.logo as string
    const brandAddedRef = this.brandService.postBrand(this.brandList).subscribe({
      next: (result) => {
        this.notificationService.showSuccess('Brand added successfully')
        this.brandForm.reset();
        this.matDialogRef.close(result);
      }, error: (error) => {
        this.notificationService.showError('Something wrong,Please try again')
      }
    })
  }

  updateBrand() {
    const patchBrand: Brand = this.brandForm.getRawValue();
    this.brandService.patchBrand(this.data.id ?? '', patchBrand).subscribe({
      next: (result) => {
        this.notificationService.showSuccess('Brand updated successfully')
        this.matDialogRef.close('close');
      }, error: (error) => {
        this.notificationService.showError('Error updating')
      }
    })
  }
}
