const enum CLAUSES {
  SELECT = 'SELECT',
  FROM = 'FROM',
  WHERE = 'WHERE'
};

function queryParser(query: string) {
  const parts = query.split(' ');
  const selectIndex = parts.findIndex(part => part.toUpperCase() === CLAUSES.SELECT);
  const fromIndex = parts.findIndex(part => part.toUpperCase() === CLAUSES.FROM);

  if (selectIndex === -1) {
    throw new Error('INVALID QUERY: MISSING SELECT CLAUSE');
  }

  if (fromIndex === -1) {
    throw new Error('INVALID QUERY: MISSING FROM CLAUSE');
  }

  const select = parts.slice(1, fromIndex);
  const whereIndex = parts.findIndex((part) => part.toUpperCase() === CLAUSES.WHERE);
  const isWhereExists = whereIndex !== -1;
  const from = parts.slice(fromIndex + 1, isWhereExists ? whereIndex : parts.length);
  const where = isWhereExists ? parts.slice(whereIndex + 1) : [];

  return { select, from, where };
}

export default queryParser;