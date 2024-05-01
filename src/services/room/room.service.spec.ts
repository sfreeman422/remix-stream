import { RoomService } from './room.service';

describe('RoomService', () => {
  let service: RoomService;

  beforeEach(() => {
    service = new RoomService();
    const loggerSpy = jest.spyOn(service.logger, 'info');
    loggerSpy.mockImplementation(() => '');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('greet()', () => {
    it('should return the text it is provided', () => {
      expect(service.greet('Test')).toBe('Test');
    });

    it('should not return something it is not given', () => {
      expect(service.greet('Test')).not.toBe('test');
    });
  });
});
