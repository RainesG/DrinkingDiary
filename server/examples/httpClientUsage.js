const {
  httpClient,
  buildUrl,
  getCurrentConfig,
  URL_MODIFIERS,
} = require('../index');

// Example 1: Basic GET request with URL building
async function getDrinkingRecords() {
  try {
    const response = await httpClient.get('drinking', 'records', {
      userId: 'user123',
      page: 1,
      limit: 20,
      startDate: '2024-01-01',
      endDate: '2024-01-31',
      drinkType: 'beer',
    });

    console.log('✅ Drinking records:', response.data);
    return response.data;
  } catch (error) {
    console.error('❌ Error fetching drinking records:', error.message);
  }
}

// Example 2: POST request with user-specific URL
async function createDrinkingRecord() {
  try {
    const recordData = {
      drinkType: 'wine',
      amount: 150,
      timestamp: new Date().toISOString(),
      notes: 'Dinner with friends',
    };

    const response = await httpClient.post('drinking', 'records', recordData, {
      userId: 'user123',
      locale: 'en',
    });

    console.log('✅ Created drinking record:', response.data);
    return response.data;
  } catch (error) {
    console.error('❌ Error creating drinking record:', error.message);
  }
}

// Example 3: External API request (weather)
async function getWeatherData() {
  try {
    const response = await httpClient.get('weather', '/current.json', {
      q: 'London',
      cacheBuster: true,
    });

    console.log('✅ Weather data:', response.data);
    return response.data;
  } catch (error) {
    console.error('❌ Error fetching weather data:', error.message);
  }
}

// Example 4: User profile with different situations
async function getUserProfile() {
  try {
    // Situation 1: Get user profile with API version
    const profileResponse = await httpClient.get('users', 'profile', {
      userId: 'user123',
      addApiVersion: true,
    });

    // Situation 2: Get user settings without API version
    const settingsResponse = await httpClient.get('users', 'settings', {
      userId: 'user123',
      addApiVersion: false,
    });

    // Situation 3: Get user preferences with cache busting
    const preferencesResponse = await httpClient.get('users', 'preferences', {
      userId: 'user123',
      cacheBuster: true,
      locale: 'zh-CN',
    });

    console.log('✅ User profile:', profileResponse.data);
    console.log('✅ User settings:', settingsResponse.data);
    console.log('✅ User preferences:', preferencesResponse.data);

    return {
      profile: profileResponse.data,
      settings: settingsResponse.data,
      preferences: preferencesResponse.data,
    };
  } catch (error) {
    console.error('❌ Error fetching user data:', error.message);
  }
}

// Example 5: Analytics with date range and pagination
async function getAnalyticsData() {
  try {
    const response = await httpClient.get('analytics', 'trends', {
      startDate: '2024-01-01',
      endDate: '2024-01-31',
      page: 1,
      limit: 50,
      drinkType: 'all',
    });

    console.log('✅ Analytics data:', response.data);
    return response.data;
  } catch (error) {
    console.error('❌ Error fetching analytics:', error.message);
  }
}

// Example 6: Direct URL building without making request
function demonstrateUrlBuilding() {
  console.log('\n🔗 URL Building Examples:');

  // Basic URL
  const basicUrl = buildUrl('drinking', 'records');
  console.log('Basic URL:', basicUrl);

  // URL with user ID
  const userUrl = buildUrl('users', 'profile', { userId: 'user123' });
  console.log('User URL:', userUrl);

  // URL with pagination
  const paginatedUrl = buildUrl('drinking', 'records', {
    page: 2,
    limit: 10,
  });
  console.log('Paginated URL:', paginatedUrl);

  // URL with date range
  const dateRangeUrl = buildUrl('analytics', 'trends', {
    startDate: '2024-01-01',
    endDate: '2024-01-31',
  });
  console.log('Date range URL:', dateRangeUrl);

  // URL with cache busting
  const cacheBusterUrl = buildUrl('users', 'preferences', {
    userId: 'user123',
    cacheBuster: true,
  });
  console.log('Cache buster URL:', cacheBusterUrl);

  // External API URL
  const externalUrl = buildUrl('weather', '/current.json');
  console.log('External URL:', externalUrl);
}

// Example 7: Different environment configurations
function demonstrateEnvironmentConfig() {
  console.log('\n🌍 Environment Configuration:');

  // Development
  process.env.NODE_ENV = 'development';
  const devConfig = getCurrentConfig();
  console.log('Development config:', devConfig);

  // Staging
  process.env.NODE_ENV = 'staging';
  const stagingConfig = getCurrentConfig();
  console.log('Staging config:', stagingConfig);

  // Production
  process.env.NODE_ENV = 'production';
  const prodConfig = getCurrentConfig();
  console.log('Production config:', prodConfig);

  // Reset to development
  process.env.NODE_ENV = 'development';
}

// Example 8: Custom URL modifiers
function demonstrateCustomModifiers() {
  console.log('\n🔧 Custom URL Modifiers:');

  let url = 'https://api.example.com/api/users/profile';

  // Add API version
  url = URL_MODIFIERS.addApiVersion(url, 'v2');
  console.log('With API version:', url);

  // Add user ID
  url = URL_MODIFIERS.addUserId(url, 'user123');
  console.log('With user ID:', url);

  // Add pagination
  url = URL_MODIFIERS.addPagination(url, 1, 20);
  console.log('With pagination:', url);

  // Add date range
  url = URL_MODIFIERS.addDateRange(url, '2024-01-01', '2024-01-31');
  console.log('With date range:', url);

  // Add cache buster
  url = URL_MODIFIERS.addCacheBuster(url);
  console.log('With cache buster:', url);
}

// Example 9: Error handling with retry
async function demonstrateRetryLogic() {
  try {
    // This request will be retried if it fails
    const response = await httpClient.get('drinking', 'records', {
      userId: 'user123',
      retry: true, // Enable retry for this specific request
    });

    console.log('✅ Request succeeded after retries:', response.data);
    return response.data;
  } catch (error) {
    console.error('❌ Request failed after all retries:', error.message);
  }
}

// Example 10: Batch requests with different URL configurations
async function demonstrateBatchRequests() {
  const requests = [
    // Request 1: User profile
    httpClient.get('users', 'profile', { userId: 'user123' }),

    // Request 2: Drinking statistics
    httpClient.get('drinking', 'statistics', {
      userId: 'user123',
      startDate: '2024-01-01',
      endDate: '2024-01-31',
    }),

    // Request 3: External weather data
    httpClient.get('weather', '/current.json', { q: 'Beijing' }),

    // Request 4: Analytics trends
    httpClient.get('analytics', 'trends', {
      page: 1,
      limit: 10,
      cacheBuster: true,
    }),
  ];

  try {
    const responses = await Promise.all(requests);
    console.log('✅ Batch requests completed successfully');

    responses.forEach((response, index) => {
      console.log(`Response ${index + 1}:`, {
        url: response.config.url,
        status: response.status,
        duration: response.metadata.duration,
      });
    });

    return responses;
  } catch (error) {
    console.error('❌ Batch requests failed:', error.message);
  }
}

// Run examples
async function runExamples() {
  console.log('🚀 HTTP Client Usage Examples\n');

  // Setup interceptors
  const { setupInterceptors } = require('../index');
  setupInterceptors();

  // Demonstrate URL building
  demonstrateUrlBuilding();

  // Demonstrate environment configuration
  demonstrateEnvironmentConfig();

  // Demonstrate custom modifiers
  demonstrateCustomModifiers();

  // Run API examples
  await getDrinkingRecords();
  await createDrinkingRecord();
  await getWeatherData();
  await getUserProfile();
  await getAnalyticsData();
  await demonstrateRetryLogic();
  await demonstrateBatchRequests();

  console.log('\n✅ All examples completed!');
}

// Export examples for testing
module.exports = {
  getDrinkingRecords,
  createDrinkingRecord,
  getWeatherData,
  getUserProfile,
  getAnalyticsData,
  demonstrateUrlBuilding,
  demonstrateEnvironmentConfig,
  demonstrateCustomModifiers,
  demonstrateRetryLogic,
  demonstrateBatchRequests,
  runExamples,
};

// Run examples if this file is executed directly
if (require.main === module) {
  runExamples().catch(console.error);
}
