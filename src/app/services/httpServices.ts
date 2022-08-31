import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor() { }

  public getErrors() {
    var errorInfos: any[] = [];
    var error: any = { title: "CPRS Error", description: "Failed to run cprs job!" };

    errorInfos.push(error);
    error = { title: "EDC Error", description: "Failed to read workday file" };
    errorInfos.push(error);
    error = { title: "EDC Error", description: "Gateway error" };
    errorInfos.push(error);
    error = { title: "AC Error", description: "Failed to run AC job!" };
    errorInfos.push(error);
    error = { title: "Gateway Error", description: "Access Denied" };
    errorInfos.push(error);
    error = { title: "DB Error", description: "Could not connect to DB" };
    errorInfos.push(error);
    error = { title: "GUM Error", description: "Failed to get GUM credential" };
    errorInfos.push(error);
    return errorInfos;
  }
}
