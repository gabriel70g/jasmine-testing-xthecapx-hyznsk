import { MonthCalculator } from './months';

describe('MonthCalculator', () => {
  it('returns the current month', () => {
    // Arrange
    const monthCalculator = new MonthCalculator();

    // Act
    const y = monthCalculator.getCurrentMonth();

    // Assert
    expect(y).toBe('May');
  });

  it('returns the current month', () => {
    // Arrange
    const monthCalculator = new MonthCalculator();
    const spy = spyOn(monthCalculator.api, 'currentMonth').and.returnValue('Cristian Month');

    // Act
    const y = monthCalculator.getCurrentMonth();

    // Assert
    expect(y).toBe('Cristian Month');
    expect(spy).toHaveBeenCalled();
  });

  it('returns next month', () => {
    // Arrange
    const monthCalculator = new MonthCalculator();

    // Act
    const y = monthCalculator.getNextMonth();

    // Assert
    expect(y).toBe('June');
  });

  it('should spy and verify', () => {
    // Arrange
    const monthCalculator = new MonthCalculator();
    const getNextMonth = spyOn(monthCalculator, 'getNextMonth').and.callThrough();

    // Act
    const y = monthCalculator.getNextMonth();

    // Assert
    expect(y).toBe('June');
    expect(getNextMonth).toHaveBeenCalled();
  });

  it('should spy and verify', () => {
    // Arrange
    const monthCalculator = new MonthCalculator();
    spyOn(monthCalculator, 'getNextMonth').and.returnValue('Cristian Month');

    // Act
    const y = monthCalculator.getNextMonth();

    // Assert
    expect(y).toBe('Cristian Month');
  });
});
