import { CommonModule } from '@angular/common';
import { StartRatingComponent } from './start-rating/start-rating.component';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StartRatingComponent, ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // private readonly _formbuilder=inject(NonNullableFormBuilder)
  // frmCalificar=this._formbuilder.group({
  //   title:['', Validators.required],
  //   rating:['', Validators.min(2)]
  // })

  frmCalificar = new FormGroup({
		title: new FormControl('El señor de los anillos', Validators.required),
		rating: new FormControl(2, Validators.min(3))
	});

	clickSave(): void {
		console.log('valid--> ', this.frmCalificar.value);
	}

  

}