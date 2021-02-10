import { FormBuilder } from "@angular/forms";
import { AppService } from "src/app/services/app.service";
import { FirstComponentComponent } from "./first-component.component"

describe('First Component', () => {
    let component: FirstComponentComponent;
    let fb: FormBuilder;
    let initialData: any;
    let appService: AppService;
    beforeEach(initMocks);

    it('init first component', () => {
        expect(component).toBeTruthy();
    })

    it('init first component', () => {
        initialData = {
            email: 'a@a.com',
            password: 14214
        }
        component.form.patchValue(initialData);
        expect(component.form.valid).toBeTruthy();
    })

    it('init first component', () => {
        initialData = {
            email: 'aaaa',
            password: 14214
        }
        component.form.patchValue(initialData);
        expect(component.form.valid).toBeFalsy();
    })

    it('service variable', () => {
        expect(component.serviceVariable).toBe('test');
    })

    function initMocks() {
        fb = new FormBuilder();
        appService = {
            get: jest.fn()
        };
        (appService.get as jest.Mock).mockReturnValueOnce('test');
        component = new FirstComponentComponent(fb, appService);
        component.ngOnInit();
    }
})