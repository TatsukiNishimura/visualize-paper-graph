import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BibtexParser } from 'bibtex-js-parser';
@Component({
  selector: 'app-bibtex-import',
  templateUrl: './bibtex-import.component.html',
  styleUrls: ['./bibtex-import.component.scss']
})




export class BibtexImportComponent implements OnInit {
  bibtexContent: string = '';  // 入力されたBibTeXの内容を保持

  // bibtex送信用イベント
  @Output() emitter = new EventEmitter<string>();

  constructor(public dialogRef: MatDialogRef<BibtexImportComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }
  onImport(): void {
    try {
      // BibTeXを解析してデータを抽出
      const parsedData: string = BibtexParser.parseToJSONString(this.reshapeBibtex(this.bibtexContent));
      this.emitter.emit(parsedData);
    } catch (error) {
      console.error('Error parsing BibTeX:', error);
      alert('Invalid BibTeX format');
    }
    this.dialogRef.close();
  }

  // 1.idが数字だとparseできないので，titleを元にidを生成する
  // 2. 最後のカンマを削除して，}で閉じる
  reshapeBibtex(bibtexContent: string): string {
    let newID = "";
    let replacedBibtexContent = bibtexContent;
    const titleMatch = bibtexContent.match(/[\s\n]title=\{([^}]+)\}/);
    if (titleMatch) {
      // タイトルを小文字にし、スペースや特殊文字を除去
      newID = titleMatch[1]
        .toLowerCase()
        .replace(/[^a-z0-9]/g, ""); // 小文字化して英数字以外を削除
    }
    if (bibtexContent.includes("@INPROCEEDINGS")) {
      replacedBibtexContent = bibtexContent.replace(/(?<=@INPROCEEDINGS{)\d+/, newID);
    }
    // 最後のカンマを削除して，}で閉じる
    if (replacedBibtexContent.trim().endsWith("}}")) {
      replacedBibtexContent = replacedBibtexContent.trim().slice(0, -2) + "},\n}";
    }
    return replacedBibtexContent;
  }


  onCancel(): void {
    this.dialogRef.close();
  }
}
