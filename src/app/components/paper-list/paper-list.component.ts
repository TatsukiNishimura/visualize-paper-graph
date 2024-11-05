import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paper } from 'src/app/models/paper.model';
import { PaperService } from 'src/app/services/paper.service';
@Component({
  selector: 'app-paper-list',
  templateUrl: './paper-list.component.html',
  styleUrls: ['./paper-list.component.scss']
})
export class PaperListComponent implements OnInit {


  papers: Paper[] = [];
  constructor(private paperService: PaperService, private router: Router) { }

  ngOnInit(): void {
    this.paperService.getPapers().subscribe(
      {
        next: (papers) => {
          this.papers = papers;
          console.log(this.papers);
        },
        error: (err) => {
          console.error(err);
        }
      }
    )
  }

  goToCreatePaper(): void {
    this.router.navigate(['/papers/create']);
  }

}
