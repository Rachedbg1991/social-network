import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'social-network';

  constructor(private readonly translateService: TranslateService){
    translateService.setDefaultLang('fr');
    translateService.use('fr');
  }
}
