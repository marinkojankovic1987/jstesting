import { AppComponent } from "./app.component";

describe('App component', () => {
    let component: AppComponent;
    component = new AppComponent();

    it('component init', () => {
        expect(component).toBeTruthy();
    });

    it('test title', () => {
        expect(component.title).toEqual('test-project');
    });

    it('test title not be', () => {
        expect(component.title === 'test').toBeFalsy();
    });
})