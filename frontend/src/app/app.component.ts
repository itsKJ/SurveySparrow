import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'screenshot';
  result: string;
  loading: boolean;
  options = {
    url: "",
    height: 800,
    width: 1280,
    type: "png"
  }

  imageFormats = [
    {
      name: '.jpeg',
      value: 'jpeg'
    },
    {
      name: '.png',
      value: 'png'
    }
  ]

  constructor(private http: HttpClient) { }

  onSubmit() {
    this.loading = true;
    if (!this.options.url.startsWith('http')) {
      this.options.url = 'http://' + this.options.url;
    }
    this.http.post('http://ec2-3-80-31-167.compute-1.amazonaws.com:3000', { options: this.options }).subscribe(data => {
      this.result = data["image_64"];
      this.loading = false;
    })
  }

  downloadFile() {
    var a = document.createElement("a");
    a.href = this.result;
    a.download = `screenshot.${this.options.type}`;
    a.click();
  }

}
