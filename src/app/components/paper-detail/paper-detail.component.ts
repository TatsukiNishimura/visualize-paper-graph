import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paper } from 'src/app/models/paper.model';
import { PaperService } from 'src/app/services/paper.service';
@Component({
  selector: 'app-paper-detail',
  templateUrl: './paper-detail.component.html',
  styleUrls: ['./paper-detail.component.scss']
})
export class PaperDetailComponent implements OnInit {

  paper?: Paper;

  constructor(
    private route: ActivatedRoute,
    private paperService: PaperService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.paperService.getPaper(id).subscribe({
      next
        : (paper: Paper) => {
          this.paper = paper;
        },
      error: (error) => {
        console.error(error);
      }
    }
    );
  }

  goToPaperList(): void {
    this.router.navigate(['/papers']);

  }
}
