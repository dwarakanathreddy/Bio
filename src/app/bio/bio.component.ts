import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  sendToWork(){
  this.router.navigate(['/work']);
  }
  sendToEducation(){
      this.router.navigate(['/education']);

  }

  sendToSkills(){
        this.router.navigate(['/skills']);

  }
}
