const items = $input.all();

return [{
  json: {
    totalTablesProcessed: items.length,
    status: 'SUCCESS'
  }
}];
