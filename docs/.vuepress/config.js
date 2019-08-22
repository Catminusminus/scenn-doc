module.exports = {
  base: '/scenn-doc/',
  title: 'SCENN Documentation',
  description: 'Document for SCENN',
  themeConfig: {
    nav: [
      { text: 'Introduction', link: '/' },
      {
        text: 'Getting Started',
        items: [
          { text: 'Install', link: '/getting-started/install.html'}
        ]
      },
      {
        text: 'API',
        items: [
          { text: 'Model', link: '/api/model.html'},
          { text: 'Loss Function', link: '/api/loss.html'},
          { text: 'Activation', link: '/api/activation.html'},
          { text: 'Layer', link: '/api/layer.html'}
        ]
      },
      {
        text: 'Development Guide',
        items: [
          { text: 'Add Your Own Activation Function', link: '/dev/activation.html'}
        ]
      }
    ],
    repo: 'Catminusminus/scenn',
    docsRepo: 'Catminusminus/scenn-doc',
    docsDir: 'docs/docs',
    editLinks: true,
    editLinkText: 'Any contributions are greatly welcomed. Thank you.',
  }
}