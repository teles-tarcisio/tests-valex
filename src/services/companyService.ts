import companyRepository from "../repositories/companyRepository.js";

async function validateApiKeyOrFail(apiKey: string) {
  const company = await companyRepository.findByApiKey(apiKey);
  if (!company) {
    throw { type: "unauthorized" };
  }
}

export default {
  validateApiKeyOrFail,
}
