# ng-pell
Rich Text WYSIWYG Editor for Angular 4+ powered by the [pell WYSIWYG editor](https://github.com/jaredreich/pell)

![Imgur](http://i.imgur.com/77MWAjO.png)

## Usage

![Imgur](http://i.imgur.com/7ebtm9l.png)

```
<richtextarea [(ngModel)]="yourVar"></richtextarea>
```

`ngModel` will send and recieve HTML (as a string) to a variable.
You can use the ngModel to set the inital state of the WYSIWYG, or update it externally at any time.

## Installation 

The `richtextarea` folder contains an Angular component

1. Add the richtextarea folder to your project
2. Add the component to your `app.module.ts`
3. Use it in your project with `<richtextarea [(ngModel)]="yourVar"></richtextarea>`

```
import { RichtextareaComponent } from './richtextarea/richtextarea.component';
```

![Imgur](http://i.imgur.com/MDZJ1wl.png)



Godspeed.
  
