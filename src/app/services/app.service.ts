import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    get(): string {
        return 'test';
    }
    
}
