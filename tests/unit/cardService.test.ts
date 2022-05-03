import { jest } from '@jest/globals';

import * as companyService from '../../src/services/companyService.js';
import * as employeeService from '../../src/services/employeeService.js';

describe('testing createCard', () => {
  it("should succesfully create a new card", () => {

    const newCardData = {
      apiKey: 'validKey',
      employeeId: 1,
      type: 'groceries'
    };

    jest.spyOn(companyService,'validateApiKeyOrFail').mockResolvedValue();

    
    
  });
});