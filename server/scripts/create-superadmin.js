require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });
const supabase = require('../config/supabase');

const createSuperAdmin = async () => {
  const email = 'hello@hmhlabz.com';
  const password = 'C@rdlm4283';
  const firstName = 'Super';
  const lastName = 'Admin';

  try {
    const { data: { user }, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: firstName,
          last_name: lastName,
          role: 'superadmin',
          status: 'approved',
        }
      }
    });

    if (error) {
      console.error('Error creating superadmin user:', error);
      return { success: false, message: 'Error creating superadmin user.', error: error.message };
    }

    console.log('Superadmin user created successfully.');
    return { success: true, message: 'Superadmin user created successfully.', user };
  } catch (error) {
    console.error('Error creating superadmin user:', error);
    return { success: false, message: 'Error creating superadmin user.', error: error.message };
  }
};

module.exports = createSuperAdmin;
