import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PaperService } from 'src/app/services/paper.service';
import { BibtexImportComponent } from './bibtex-import/bibtex-import.component';
@Component({
  selector: 'app-paper-create',
  templateUrl: './paper-create.component.html',
  styleUrls: ['./paper-create.component.scss']
})
export class PaperCreateComponent implements OnInit {
  paperForm: FormGroup;
  subscription = new Subscription();
  constructor(
    private fb: FormBuilder,
    private paperService: PaperService,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.paperForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(255)]],
      authors: ['', [Validators.required, Validators.maxLength(255)]],
      publication_year: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      abstract: [''],
      doi: ["",]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('Form data:', this.paperForm.value);
    this.paperService.addPaper(this.paperForm.value).subscribe(
      {
        next: response => {
          console.log('Paper added:', response);
          this.router.navigate(['/papers']);  // 作成後に論文一覧ページにリダイレクト
        },
        error: error => console.error('Error adding paper:', error)
      }
    );
  }

  goToPaperList(): void {
    this.router.navigate(['/papers']);
  }

  openImportDialog(): void {
    const dialog = this.dialog.open(BibtexImportComponent, {
      width: '80%', // 画面の80%の幅に設定
      maxWidth: '690px' // 800pxを超えないように制限
    });
    dialog.componentInstance.emitter.subscribe((parsedData: string) => {
      // イベントを受け取って処理
      let jsonedParsedData = JSON.parse(parsedData);
      console.log('Parsed BibTeX:', jsonedParsedData);
      // 最初の要素しか使わない
      if (jsonedParsedData.length > 0) {
        jsonedParsedData = jsonedParsedData[0];
      }
      const bibtexForFormPatch = {
        title: jsonedParsedData.title,
        authors: jsonedParsedData.author,
        publication_year: jsonedParsedData.year,
        abstract: jsonedParsedData.abstract,
        doi: jsonedParsedData.doi
      }
      console.log('Form patch:', bibtexForFormPatch);
      this.paperForm.patchValue(bibtexForFormPatch);
    });
  }

}
