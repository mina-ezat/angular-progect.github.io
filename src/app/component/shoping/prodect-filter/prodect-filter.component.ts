import { Component, OnInit, Input } from '@angular/core';
import { CategoriesService } from './../../../service/categories.service';

@Component({
  selector: 'prodect-filter',
  templateUrl: './prodect-filter.component.html',
  styleUrls: ['./prodect-filter.component.scss']
})
export class ProdectFilterComponent implements OnInit {
categories$;
@Input("catogry") catogry ;
  constructor(private categores:CategoriesService) { 
      this.categores.getcagtegores().subscribe(cat => this.categories$ = cat)

  }

  ngOnInit(): void {
  }

}
