import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand, ListResponse } from 'src/models/brand.model';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  url = 'https://devapi.hyperinvento.com/v1'

  constructor(private _http: HttpClient) { }

  getBrand(): Observable<ListResponse> {
    return this._http.get<ListResponse>(`${this.url}/companies/05980306-fdd0-46cc-beaa-e722fbffe0a0/brands`)
  };
  postBrand(data: Brand): Observable<Brand> {
    return this._http.post<Brand>(`${this.url}/companies/05980306-fdd0-46cc-beaa-e722fbffe0a0/brands`, data)
  };
  patchBrand(branId: string, data: Brand): Observable<Brand[]> {
    return this._http.post<Brand[]>(`${this.url}/brands/${branId}/delete`, data,)
  };

  deleteBrand(branId: string): Observable<Brand[]> {
    return this._http.delete<Brand[]>(`${this.url}/brands/${branId}/delete`)
  };
}
