import { jest } from '@jest/globals';

import cardService from '../../src/services/cardService.js';
import companyRepository, { Company } from '../../src/repositories/companyRepository.js';
import employeeRepository, { Employee } from '../../src/repositories/employeeRepository.js';
import cardRepository, { Card } from '../../src/repositories/cardRepository.js';

describe('Card Service', () => {
  it("should succesfully create a new card", async () => {
    
    const validCompany: Company = {
      id: 1,
      name: 'fakeCompany',
      apiKey: 'apiKey_00',
    };
    jest.spyOn(companyRepository, 'findByApiKey').mockResolvedValue(validCompany);

    const validEmployee: Employee = {
      id: 1,
      fullName: 'Nome Completo',
      cpf: '12345678910',
      email: '0000@mail.com',
      companyId: validCompany.id,
    };
    jest.spyOn(employeeRepository, 'findById').mockResolvedValue(validEmployee);

    /*
    const validCard: Card = {
      id: 1,
      employeeId: validEmployee.id,
      number: '1234-5678-9012-3456',
      cardholderName: 'nome_no_cartao',
      securityCode: 'CVC',
      expirationDate: '04-27',
      //password?: 'senha_do_cartao',
      isVirtual: false,
      //originalCardId?: 1,
      isBlocked: false,
      type: 'groceries',
    };
    */

    jest.spyOn(cardRepository, 'findByTypeAndEmployeeId').mockResolvedValue(null);
    
    const insertionResult = jest.spyOn(cardRepository, 'insert').mockResolvedValue(null);

    await cardService.create(
      validCompany.apiKey,
      validEmployee.id,
      'groceries',
    );

    expect(insertionResult).toBeCalledTimes(1);

  });
});