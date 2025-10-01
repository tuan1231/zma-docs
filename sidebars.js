module.exports = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Business Analysis',
      collapsed: false,
      items: [
        'business/requirements',
        'business/user-stories',
        'business/acceptance-criteria',
      ],
    },
    {
      type: 'category',
      label: 'Technical',
      items: [
        'tech/architecture',
        'tech/api-integration',
      ],
    },
    {
      type: 'category',
      label: 'Rubber ERP',
      items: [
        'RubberERP/Features-List',
      ],
    },
  ],
};
