import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paper } from "src/app/models/paper.model";
@Injectable({
  providedIn: 'root'
})
export class PaperService {
  private apiUrl = 'http://localhost:8000/api/v1/papers/';
  constructor(private http: HttpClient) { }

  // 論文一覧を取得
  getPapers(): Observable<Paper[]> {
    return this.http.get<Paper[]>(this.apiUrl);
  }
}
