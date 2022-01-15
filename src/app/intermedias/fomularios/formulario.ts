import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { mensaje } from '../../basicas/string/string';

export class FormularioRegister {
    form: FormGroup

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        })       
    }


}