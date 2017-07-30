import { Component, OnInit, OnChanges, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { ElementRef, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import * as pell from './pell.library'


@Component({
  selector: 'richtextarea',
  templateUrl: './richtextarea.component.html',
  styleUrls: ['./richtextarea.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RichtextareaComponent implements OnInit, AfterViewInit, OnChanges {

  constructor(
    private rd: Renderer2
    
  ) { }

  ngOnInit() {
  }

  @ViewChild('wysiwyg') wysiwyg: ElementRef

  ngAfterViewInit(){
    this.wysiwygInit(this.wysiwyg.nativeElement)
    this.editor.content.innerHTML = this.ngModel;
  }

  ngOnChanges(changes: any) {
      try {
        this.editor.content.innerHTML = this.ngModel;
      } catch (err) {

      }
  }

  @Input() ngModel:String = ""
  @Output() ngModelChange = new EventEmitter()
  pell = pell
  html  
  editor

  wysiwygInit(elm) {
      this.editor = pell.init({
        element: elm, 
        onChange: html => {
          this.html = html
          this.ngModelChange.emit(this.html)
        },
        styleWithCSS: true,
        actions: [
          "bold",
          "underline",
          {
            name: "italic",
            result: () => this.pell.exec("italic")
          },
          {
            name: "custom",
            icon: "<b><u><i>C</i></u></b>",
            title: "Custom Action",
            result: () => console.log("YOLO")
          },
          {
            name: "image",
            result: () => {
              const url = window.prompt("Enter the image URL");
              if (url) this.pell.exec("insertImage", url);
            }
          },
          {
            name: "link",
            result: () => {
              const url = window.prompt("Enter the link URL");
              if (url) this.pell.exec("createLink", url);
            }
          }
        ],
        classes: {}
      });
  }
}