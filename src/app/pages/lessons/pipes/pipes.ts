import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer,SafeHtml } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Pipe({
  name: 'redText'
})
export class RedTextPipe implements PipeTransform {
  transform(value: string): string {
    return `<span class="text-error">${value}</span>`;
  }
}

@Pipe({
  name:'underlineText'
})
export class UnderLineTextPipe implements PipeTransform{
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(
      `<span style="text-decoration: underline;">${value}</span>`
    );
  }
}

@Pipe({
  name:'coolJeff'
})
export class CoolJeff implements PipeTransform{
  transform(value: string):string {
    return `${value}(Au fait Jeff est trop Cool)`
  }
}

@Pipe({
  name: 'truncateText'
})
export class TruncateTextPipe implements PipeTransform {
  transform(value: string | null | undefined, limit = 30, ellipsis = '...'): string {
    if (!value) {
      return '';
    }

    const safeLimit = Math.max(limit, 0);
    return value.length > safeLimit ? `${value.slice(0, safeLimit)}${ellipsis}` : value;
  }
}

@Component({
  selector: 'app-pipes',
  imports: [FormsModule, CommonModule, RedTextPipe,UnderLineTextPipe,CoolJeff,TruncateTextPipe],
  templateUrl: './pipes.html',
})
export class Pipes {
  currentDate: Date = new Date();
  exampleText: string = 'Angular Pipes';
  testText: string = 'Salut les Pipes';
  productPrice: number = 1234.56;
  decimalValue: number = 42.56789;
  jsonData = { name: 'Angular', version: 19 };
  interactiveText: string = 'Hello, Angular!';
}
