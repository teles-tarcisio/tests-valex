import { jest } from '@jest/globals';

import companyService from '../../src/services/companyService.js';

describe('testing createCard', () => {
  it("should succesfully create a new card", () => {

    const newCardData = {
      apiKey: 'validKey',
      employeeId: 1,
      type: 'groceries'
    };

    jest.spyOn(companyService,'validateApiKeyOrFail').mockResolvedValue();

    console.log('after: spyOn');    
  });
});