import { BehaviorSubject } from 'rxjs';
import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeEach(initMocks);

  it('should return good value', () => {
    expect(service.get()).toEqual('test');
  });

  function initMocks() {
    service = new AppService();
  }
});
