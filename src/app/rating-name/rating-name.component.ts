import { Component, forwardRef, inject } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { __values } from 'tslib';
import { StartRatingComponent } from '../start-rating/start-rating.component';

@Component({
  selector: 'app-rating-name',
  standalone: true,
  imports: [ReactiveFormsModule, StartRatingComponent],
  templateUrl: './rating-name.component.html',
  styleUrl: './rating-name.component.scss',
  //
  providers:[{
    provide:NG_VALUE_ACCESSOR,
    useExisting: forwardRef(()=>RatingNameComponent),
    multi:true
  }]
})
export class RatingNameComponent implements ControlValueAccessor{
  private _formbuilder=inject(NonNullableFormBuilder)
  frmName=this._formbuilder.group({
    name:['', Validators.required],
    rating:[1, Validators.required]
  })

  private _onChanged:Function=(__value:number)=>{}
  private _onTouched:Function=(_value:number)=>{}

  writeValue(obj: {name:string, rating:number}): void {
    if(obj){
      this.frmName.setValue(obj)
    }
  }
  registerOnChange(fn: Function): void {
    this._onChanged=fn
  }
  registerOnTouched(fn: Function): void {
    this._onTouched=fn
  }
  

}
