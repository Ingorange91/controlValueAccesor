import { CommonModule } from '@angular/common';
import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-start-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './start-rating.component.html',
  styleUrl: './start-rating.component.scss',

  providers:[{
    provide:NG_VALUE_ACCESSOR,
    //useExisting: StartRatingComponent,
    useExisting:forwardRef(()=>StartRatingComponent),
    multi:true
  }]
  
})
export class StartRatingComponent implements OnInit, ControlValueAccessor{
  private _rating: number = 3;
	ratingArr: number[] = [];

	private _onChanged: Function = (_value: number) => {};
	private _onTouch: Function = (_value: number) => {};

	ngOnInit(): void {
		for (let index = 0; index < 5; index++) {
			this.ratingArr.push(index);
		}
	}

	onClick(rating: number): void {
		this._rating = rating;
		this._onChanged(this._rating);
		this._onTouch(this._rating);
	}

	showIcon(index: number): string {
		return this._rating >= index + 1 ? 'star' : 'star_border';
	}
	//#region ControlValueAccessor

	writeValue(value: number): void {
		if (value) {
			this._rating = value;
		}
	}

	registerOnChange(fn: Function): void {
		this._onChanged = fn;
	}

	registerOnTouched(fn: Function): void {
		this._onTouch = fn;
	}
	//#endregion
}
