
module.exports = {
    ci: {
      collect: {
        // startServerCommand: 'yarn start',
        // url: ['http://localhost:3000/','http://localhost:3000/faq','http://localhost:3000/about-us',
        //         'https://preprod.gripinvest.in/','https://preprod.gripinvest.in/faq','https://preprod.gripinvest.in/about-us',
        //         'https://qa.gripinvest.in/','https://qa.gripinvest.in/faq','https://qa.gripinvest.in/about-us'
        //         ],
         url: ['https://www.google.com'],
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
