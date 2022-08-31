import { Component, OnInit } from '@angular/core';
import { IErrorInfo, IGumQueueInfo, IGumError } from '../common/interfaces';
import { ExternalServices } from '../services/externalServices';
import { HttpService } from '../services/httpServices';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public gumCount: number = 0;
  public errorInfos: IErrorInfo[] = [];
  public gumQueueInfo: IGumQueueInfo[] = [];

  constructor(private service: HttpService, private externalServices: ExternalServices ) { }

  ngOnInit(): void {
    this.initialize();
  }

  initialize() {
    this.getGumErrors();
    this.errorInfos.push(...this.getErrors());
  }

  getErrors() {
    return this.service.getErrors();
  }

  getGumErrors() {
    this.externalServices.getGUMIntegrationErrors().subscribe(res => {
      this.gumCount = res.length;
      res.forEach(item => {
        if(item.statusJson == ""){
          item.errorInfo = "There is no more info";
        } else {
          item.errorInfo = JSON.parse(item.statusJson).Errors[0];
        }
        this.gumQueueInfo.push(item);
      });
    });

  }
}
