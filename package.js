Package.describe({
  name: 'albererre:ironacounts',
  summary: 'Provides and updates the iron accounts in the Accounts collection',
  version: '0.0.1',
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('underscore', ['client', 'server']);
  api.use('mongo', ['client', 'server']);

  api.use('frozeman:persistent-minimongo@0.1.8', 'client');
  api.use('ethereum:web3@0.15.1', ['client', 'server']);

  api.export(['EthAccounts'], ['client', 'server']);

  api.addFiles('accounts.js', ['client', 'server']);
});

