import {Component, OnInit} from '@angular/core';
import {UntypedFormBuilder, UntypedFormControl} from '@angular/forms';
import {BaseFormComponent} from '../../../core/component/base-form/base-form.component';
import {StudentsGradesService} from '../../service/students-grades.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NewGrade} from '../../model/Grade';


@Component({
  selector: 'app-grade-form',
  templateUrl: './grade-form.component.html',
  styleUrl: './grade-form.component.scss'
})
export class GradeFormComponent extends BaseFormComponent implements OnInit {

  trxid: number;

  constructor(
      formBuilder: UntypedFormBuilder,
      private gradeService: StudentsGradesService,
      private route: ActivatedRoute,
      private router: Router) {
    super(formBuilder);
  }

  override ngOnInit() {
    super.ngOnInit();
    this.trxid = +this.route.snapshot.paramMap.get('trxid');
  }

  submit(): void {
    console.log(this.collectData())
    this.gradeService.addGrade(this.collectData()).subscribe(() =>this.router.navigate(['teacher/students']));
  }

  protected setupForm(): any[] {
    return [
      {
        gradeValue: new UntypedFormControl(''),
      }
    ];
  }

  private collectData(): NewGrade {
    return {
      gradeValue: +this.form.get('gradeValue').value,
      studentId: this.trxid
    }
  }
}
