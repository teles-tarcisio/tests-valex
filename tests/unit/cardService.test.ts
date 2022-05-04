import { jest } from '@jest/globals';

import * as cardService from '../../src/services/cardService.js';
import companyRepository from '../../src/repositories/companyRepository.js';
import employeeRepository from '../../src/repositories/employeeRepository.js';
import cardRepository from '../../src/repositories/cardRepository.js';

describe('Card Service', () => {
  it("should succesfully create a new card", () => {

    const newCardData = {
      apiKey: 'key_company00',
      employeeId: 1,
      type: 'groceries'
    };

    const validCompany = {
      id: 1,
      name: 'Company00',
      apiKey: newCardData.apiKey,
    };

    jest.spyOn(companyRepository, 'findByApiKey').mockResolvedValue(validCompany);

    jest.spyOn(employeeRepository, 'findById').mockResolvedValue({
      id: newCardData.employeeId,
      fullName: 'Nome Completo de Fulano',
      cpf: '12345678910',
      email: 'fulano@mail.com',
      companyId: 1,
    });

    jest.spyOn(cardRepository, 'findByTypeAndEmployeeId').mockResolvedValue(null);

    const insertResult = jest.spyOn(cardRepository, 'insert').mockResolvedValue();

    cardService.create(
      newCardData.apiKey,
      newCardData.employeeId,
      'groceries',
    );

    expect(insertResult).toBeCalledTimes(1);

  });
});