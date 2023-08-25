import { Observable, catchError, of } from 'rxjs';
import { RegistersService } from './../services/registers.service';
import { Component, OnInit } from '@angular/core';
import { Register } from '../model/register';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registers',
  templateUrl: './registers.component.html',
  styleUrls: ['./registers.component.scss']
})
export class RegistersComponent {

  registers: Observable<Register[]>;
  readonly displayedColumns = ['name', 'age', 'city', 'state', 'heartRate', 'actions'];

  constructor(
    private registersService: RegistersService,
    private router: Router,
    private route: ActivatedRoute
    ) {

    this.registers = this.registersService.list().pipe(
      catchError(error => {
        return of([])
      })
    );
  }

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route })
  }

  onEdit(register: Register) {
    this.router.navigate(['edit', register._id], { relativeTo: this.route });
  }


}
