import { Component } from '@angular/core';
import { Log } from './interfaces/log.interface';
import { LogService } from './services/log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BusinessMetrics';

  constructor(private logService: LogService) {}

  onFileChanged(event: any) {
    const selectedFile = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsText(selectedFile, 'UTF-8');

    fileReader.onload = () => {
        try {
            const jsonContent = JSON.parse(fileReader.result as string);
            console.log('Parsed JSON content:', jsonContent);
            
            for(const log of jsonContent) {
              this.logService.addLog(log)
                .subscribe({
                  next: (v) => console.log(v),
                  error: (e) => console.error(e),
                  complete: () => console.info('complete') 
                });
            }
        } catch (error) {
            console.error('Error parsing JSON:', error);
        }
    };

    fileReader.onerror = (error) => {
        console.error('File read error:', error);
    };
  }
}
