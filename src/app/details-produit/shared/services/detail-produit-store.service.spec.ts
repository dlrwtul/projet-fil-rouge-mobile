import { TestBed } from '@angular/core/testing';

import { DetailProduitStoreService } from './detail-produit-store.service';

describe('DetailProduitStoreService', () => {
  let service: DetailProduitStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailProduitStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
