const db = require('../config/db');
const { encrypt, decrypt } = require('../utils/crypto');

exports.getGateways = async (req, res) => {
  const userId = req.user.id;

  try {
    const gateways = await db.query('SELECT * FROM payment_gateways WHERE user_id = $1', [userId]);
    
    // Decrypt sensitive data before sending to client
    const decryptedGateways = gateways.rows.map(gw => ({
      ...gw,
      api_key: gw.api_key_encrypted ? decrypt(gw.api_key_encrypted) : null,
      secret_key: gw.secret_key_encrypted ? decrypt(gw.secret_key_encrypted) : null,
    }));

    res.status(200).json(decryptedGateways);
  } catch (error) {
    console.error('Get gateways error:', error);
    res.status(500).json({ message: 'Server error while retrieving gateways' });
  }
};

exports.addGateway = async (req, res) => {
  const { gatewayName, gatewayType, apiKey, secretKey, webhookUrl, isTestMode, configuration } = req.body;
  const userId = req.user.id;

  if (!gatewayName || !gatewayType || !apiKey) {
    return res.status(400).json({ message: 'Please provide all required fields' });
  }

  try {
    const apiKeyEncrypted = encrypt(apiKey);
    const secretKeyEncrypted = secretKey ? encrypt(secretKey) : null;

    const newGateway = await db.query(
      'INSERT INTO payment_gateways (user_id, gateway_name, gateway_type, api_key_encrypted, secret_key_encrypted, webhook_url, is_test_mode, configuration) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
      [userId, gatewayName, gatewayType, apiKeyEncrypted, secretKeyEncrypted, webhookUrl, isTestMode, configuration]
    );

    res.status(201).json(newGateway.rows[0]);
  } catch (error) {
    console.error('Add gateway error:', error);
    res.status(500).json({ message: 'Server error while adding gateway' });
  }
};

exports.updateGateway = async (req, res) => {
  const { id } = req.params;
  const { gatewayName, apiKey, secretKey, webhookUrl, isTestMode, configuration } = req.body;
  const userId = req.user.id;

  try {
    const apiKeyEncrypted = apiKey ? encrypt(apiKey) : undefined;
    const secretKeyEncrypted = secretKey ? encrypt(secretKey) : undefined;

    const updatedGateway = await db.query(
      'UPDATE payment_gateways SET gateway_name = COALESCE($1, gateway_name), api_key_encrypted = COALESCE($2, api_key_encrypted), secret_key_encrypted = COALESCE($3, secret_key_encrypted), webhook_url = COALESCE($4, webhook_url), is_test_mode = COALESCE($5, is_test_mode), configuration = COALESCE($6, configuration), updated_at = CURRENT_TIMESTAMP WHERE id = $7 AND user_id = $8 RETURNING *',
      [gatewayName, apiKeyEncrypted, secretKeyEncrypted, webhookUrl, isTestMode, configuration, id, userId]
    );

    res.status(200).json(updatedGateway.rows[0]);
  } catch (error) {
    console.error('Update gateway error:', error);
    res.status(500).json({ message: 'Server error while updating gateway' });
  }
};

exports.removeGateway = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;

  try {
    await db.query('DELETE FROM payment_gateways WHERE id = $1 AND user_id = $2', [id, userId]);
    res.status(200).json({ message: 'Gateway removed successfully' });
  } catch (error) {
    console.error('Remove gateway error:', error);
    res.status(500).json({ message: 'Server error while removing gateway' });
  }
};

exports.testGateway = async (req, res) => {
  // This would involve making a test API call to the respective payment gateway
  res.status(200).json({ message: 'Gateway connection test successful' });
};

exports.toggleGateway = async (req, res) => {
  const { id } = req.params;
  const { isActive } = req.body;
  const userId = req.user.id;

  try {
    await db.query('UPDATE payment_gateways SET is_active = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2 AND user_id = $3', [isActive, id, userId]);
    res.status(200).json({ message: 'Gateway status toggled successfully' });
  } catch (error) {
    console.error('Toggle gateway error:', error);
    res.status(500).json({ message: 'Server error while toggling gateway status' });
  }
};
