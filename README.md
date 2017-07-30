# ng-pell
Rich Text WYSIWYG Editor for Angular 4+

## Usage

![Imgur](http://i.imgur.com/7ebtm9l.png)

```
<richtextarea [(ngModel)]="yourVar"></richtextarea>
```

`ngModel` will send and recieve HTML (as a string) to a variable.
You can use the ngModel to set the inital state of the WYSIWYG, or update it externally at any time.

## Installation 

Add the richtextarea folder to your project
The folder contains an Angular component
Add the component to your `app.module.ts`

```
import { RichtextareaComponent } from './richtextarea/richtextarea.component';
```

![Imgur](http://i.imgur.com/MDZJ1wl.png)



Godspeed.
  
