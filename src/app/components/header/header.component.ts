import { Component } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent {

  public isCollapsed = false;


  constructor(){

  }

  public collapse(){
   this.isCollapsed = !this.isCollapsed;
  }

  public downloadCV(){
    const fileUrl = '../../../assets/files/CV - STEPHEN IVAN B. LLORENTE.pdf'; // Relative path to the file in the assets folder

    // Get the absolute file URL using the DomSanitizer
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'CV - STEPHEN IVAN B. LLORENTE.pdf'; // Replace with the desired file name and extension
    link.click();
    // Clean up
    link.remove();
  }

}
