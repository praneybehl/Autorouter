Package.describe({
  summary: 'Automatically generate routes for prototyping',
  version: '0.1.0',
  name: 'sacha:autorouter',
  git: 'https://github.com/sachag/autorouter.git'
});

Package.onUse(function (api) {

  api.use([
    'autopublish',
    'iron:router',
    'dburles:mongo-collection-instances'
  ]);

  api.add_files([
    'autorouter.js',
  ], ['client', 'server']);

});