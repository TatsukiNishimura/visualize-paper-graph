import { Component, OnInit } from '@angular/core';
import { Paper } from 'src/app/models/paper.model';
import { PaperService } from 'src/app/services/paper.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  papers: Paper[] = [];
  constructor(private paperService: PaperService) { }

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

}
