import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NonNullableFormBuilder, UntypedFormBuilder} from '@angular/forms';
import { RegistersService } from '../services/registers.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { Register } from '../model/register';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: RegistersService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute,
    ) {
    this.form = this.formBuilder.group( {
      name: [''],
      age: [''],
      city: [''],
      state: [''],
      heartRate: ['']
    })
  }

  ngOnInit(): void {
    const register: Register = this.route.snapshot.data['register'];
    this.form = this.formBuilder.group({
      _id: [register._id],
      name: [register.name],
      age: [register.age],
      city: [register.city],
      state: [register.state],
      heartRate: [register.heartRate]
    });
  }

  onSubmit() {
    this.service.save(this.form.value)
        .subscribe({next: result => this.onSuccess(), error: error => this.onError()});
        console.log('ok')
  }

  onCancel() {
    this.location.back();
  }

  private onSuccess() {
    this.snackBar.open('Curso salvo com sucesso!', '', { duration: 5000 });
    this.onCancel();
  }

  private onError() {
    this.snackBar.open('Erro ao salvar curso.', '', { duration: 5000 });
  }

}
