-- System Gateways Table
CREATE TABLE system_gateways (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    gateway_name VARCHAR(50) NOT NULL, -- 'stripe', 'paypal', 'razorpay'
    display_name VARCHAR(100) NOT NULL, -- 'Stripe', 'PayPal', 'Razorpay'
    is_enabled BOOLEAN DEFAULT FALSE,
    configuration_template JSONB, -- Default config template
    supported_currencies TEXT[],
    supported_countries TEXT[],
    required_fields JSONB, -- API keys, secrets needed
    webhook_events JSONB, -- Supported webhook events
    fees JSONB, -- Gateway-specific fees
    limits JSONB, -- Transaction limits
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_by UUID REFERENCES users(id)
);

-- User Gateway Configurations Table
CREATE TYPE test_status AS ENUM ('success', 'failed', 'pending');
CREATE TABLE user_gateway_configs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    system_gateway_id UUID REFERENCES system_gateways(id),
    is_active BOOLEAN DEFAULT FALSE,
    is_test_mode BOOLEAN DEFAULT TRUE,
    api_credentials JSONB, -- Encrypted user's API keys
    webhook_url VARCHAR(500),
    webhook_secret VARCHAR(255),
    configuration JSONB, -- User-specific settings
    last_test_at TIMESTAMP,
    test_status test_status DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, system_gateway_id)
);

-- Gateway Usage Statistics Table
CREATE TABLE gateway_usage_stats (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_gateway_config_id UUID REFERENCES user_gateway_configs(id),
    date DATE NOT NULL,
    transaction_count INTEGER DEFAULT 0,
    success_count INTEGER DEFAULT 0,
    failed_count INTEGER DEFAULT 0,
    total_amount DECIMAL(15,2) DEFAULT 0,
    fees_collected DECIMAL(10,2) DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_gateway_config_id, date)
);
