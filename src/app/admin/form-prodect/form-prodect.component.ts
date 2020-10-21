import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './../../service/categories.service';
import { SaveProdectService } from './../../service/save-prodect.service';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs'
import { Prodect } from './../../interface/user';

@Component({
  selector: 'app-form-prodect',
  templateUrl: './form-prodect.component.html',
  styleUrls: ['./form-prodect.component.scss']
})
export class FormProdectComponent implements OnInit {
  catecores$;
  prodects: any;
  id;
  constructor(
    private categores: CategoriesService,
    private saveprodect: SaveProdectService,
    private router: Router,
    private activrot: ActivatedRoute
  ) {


    this.id = this.activrot.snapshot.paramMap.get('id');
    this.categores.getcagtegores().subscribe(user => {
      if (user) {

        this.catecores$ = user
      }
    })
    if (this.id) {
      this.categores.getcagtegores().subscribe(user => this.catecores$ = user)
      this.saveprodect.getById(this.id).subscribe(p => {
        if (p) {

          this.prodects = p;
          console.log(this.prodects);
        }


      })
    }

  }
  ngOnInit() {
  }
  save(prodect) {
    if (this.id) {
      this.saveprodect.update(this.id, prodect)
    } else {
      this.saveprodect.create(prodect);

    }
    this.router.navigateByUrl('/admin/prodect')
  }
  delete() {
    if (confirm("are your sure delete the prodect")) {
      this.saveprodect.remove(this.id);

    }
    this.router.navigateByUrl('/admin/prodect')

  }

}
