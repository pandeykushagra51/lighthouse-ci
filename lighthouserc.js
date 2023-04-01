
module.exports = {
    ci: {
      collect: {
        // startServerCommand: 'yarn start',
        url: ['https://www.gripinvest.in/','https://www.gripinvest.in/about-us',
                'https://airbyte.com/','https://airbyte.com/about-us',
                'https://bik.ai/','https://bik.ai/about-us',
                ],
        //  url: ['https://www.google.com'],
        numberOfRuns:1,
      },
      settings: {
        onlyCategories: [
          'performance',
          'accessibility',
          'best-practices',
          'seo',
        ],
    },
      assert: {
        // preset: 'lighthouse:no-pwa',
        assertions: {
          'categories:performance': ['warn', { minScore: 1 }],
          'categories:accessibility': ['warn', { minScore: 1 }],
          'categories:seo': ['warn', { minScore: 1 }],
        },
    },
    },
  };
