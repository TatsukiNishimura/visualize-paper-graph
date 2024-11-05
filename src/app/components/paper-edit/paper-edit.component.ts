import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PaperService } from 'src/app/services/paper.service';
@Component({
  selector: 'app-paper-edit',
  templateUrl: './paper-edit.component.html',
  styleUrls: ['./paper-edit.component.scss']
})
export class PaperEditComponent implements OnInit {
  paperForm: FormGroup;
  paperId: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private paperService: PaperService
  ) {
    this.paperForm = this.fb.group({
      title: [''],
      authors: [''],
      publication_year: [''],
      abstract: [''],
      doi: [''],
      paper_url: [''],
    });
    this.paperId = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    // フォームに初期値を設定
    this.paperService.getPaper(this.paperId).subscribe(
      {
        next: paper => this.paperForm.patchValue(paper),
        error: error => console.error('Error fetching paper:', error)
      }
    );
  }

  onSubmit(): void {
    this.paperService.updatePaper(this.paperId, this.paperForm.value).subscribe(
      {
        next: response => {
          console.log('Paper updated:', response);
          this.router.navigate(['/papers', this.paperId]);  // 更新後に詳細ページにリダイレクト
        },
        error: error => console.error('Error updating paper:', error)
      }
    );
  }

  goToPaperDetail(): void {
    this.router.navigate(['/papers', this.paperId]);
  }

}
