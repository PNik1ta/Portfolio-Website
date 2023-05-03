import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import * as fs from 'file-saver';

@Injectable({ providedIn: 'root' })
export class FileService {
  constructor(private http: HttpClient) { }

  downloadLocalFile(path: string, filename: string): void {
    this.http.get(path, { responseType: 'blob' })
      .subscribe({
        next: (res: Blob) => {
          fs.saveAs(res, filename);
        }
      });
  }
}
