class GatewayValidationService {
  async validateCredentials(credentials: any) {
    // Mock validation
    return { valid: true }
  }

  async validateWebhook(url: string) {
    // Mock validation
    return { valid: true }
  }
}

export const gatewayValidationService = new GatewayValidationService()
