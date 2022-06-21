import {Component, Input, OnInit} from '@angular/core';
import {ThemePalette} from "@angular/material/core";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input()
  public color?: string;

  @Input()
  public icon?: string;

  public classList: string[] = [
    'py-2',
    'px-4',
    'rounded',
    'uppercase',
    'font-bold',
    'tracking-wide',
    'flex',
    'items-center',
    'justify-center',
    'gap-1'
  ];

  constructor() { }

  ngOnInit(): void {
    if (this.color === 'primary') {
      this.classList.push(`bg-primary`, 'text-white');
    } else if(this.color === 'secondary') {
      this.classList.push(`bg-secondary`, 'text-white');
    }
  }
}
