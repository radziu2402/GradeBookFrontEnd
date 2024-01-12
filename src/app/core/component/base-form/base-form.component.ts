import {Component, Directive, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, UntypedFormBuilder, UntypedFormGroup} from "@angular/forms";

@Directive()
export abstract class BaseFormComponent implements OnInit {
  form: UntypedFormGroup;

  protected constructor(private formBuilder: UntypedFormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group.call(this.formBuilder, ...this.setupForm(this.formBuilder));
    console.log(this.form);
  }

  abstract submit(): void;

  protected abstract setupForm(formBuilder: UntypedFormBuilder): any[];
}

