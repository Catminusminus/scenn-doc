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
        text: 'Features',
        items: [
          { text: 'Model', link: '/feature/model.html'},
          { text: 'Loss Function', link: '/feature/loss.html'},
          { text: 'Activation', link: '/feature/activation.html'},
          { text: 'Layer', link: '/feature/layer.html'}
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
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Any contributions are greatly welcomed. Thank you.',
  }
}