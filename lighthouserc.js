
module.exports = {
    ci: {
      collect: {
        // startServerCommand: 'yarn start',
        url: ['https://www.gripinvest.in/','https://www.gripinvest.in/faq','https://www.gripinvest.in/about-us',
                'https://preprod.gripinvest.in/','https://preprod.gripinvest.in/faq','https://preprod.gripinvest.in/about-us',
                'https://qa.gripinvest.in/','https://qa.gripinvest.in/faq','https://qa.gripinvest.in/about-us'
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
