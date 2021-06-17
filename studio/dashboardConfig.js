export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60cb875191050b0ebfc1b0c8',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-d466845r',
                  apiId: 'b3ceceae-0e47-4423-8349-0a72d9bc9889'
                },
                {
                  buildHookId: '60cb87519b66fc122c1c8ca9',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-bmhi55ac',
                  apiId: 'a85bb4ae-916d-4256-afeb-0a102cf9e93b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/abeuscher/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-bmhi55ac.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
